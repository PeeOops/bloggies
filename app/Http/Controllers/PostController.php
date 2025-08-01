<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    public function store(Request $request){
        // Validate input
        $validated = $request->validate([
            "title" => "required|string|max:50",
            "subtitle" => "required|string|max:255",
            "featured_image" => "nullable|image|mimes:jpeg,png,jpg,gif,svg|max:4096",
            "body" => "required|string",
            "type" => "required|string",
            "category_id" => "required|exists:categories,id",
            "tag_ids" => "nullable|array",
            "tag_ids.*" => "exists:tags,id"
        ]);

        // Image upload
        $imagePath = null;
        if($request->hasFile("featured_image")){
            $imagePath = $request->file("featured_image")->store("featured_images", "public");
        }

        // Create new post with validated data
        $post = new Post($request->only([
            "title",
            "subtitle",
            "body",
            "type",
            "category_id",
        ]));

        // Assign author_id
        $post->author_id = auth()->id();

        // Save image path if uploaded
        $post->featured_image_url = $imagePath;

        // Save post to database
        $post->save();

        // Sync tags if provided
        $post->tags()->sync($validated["tag_ids"] ?? []);

        // Load relationships for response
        $post->load("tags","category","author");

        // Format featured_image to full URL
        if($post->featured_image_url){
            $post->featured_image_url = asset("storage/" . $post->featured_image_url);
        }

        // Return JSON
        return response()->json([
            "message" => "Post created successfully",
            "post" => $post
        ],201);
    }

    public function index(Request $request){
        // Query builder to fetch posts with category, tags and author relationships
        $query = Post::with([
            "category:id,name",
            "tags:id,name",
            "author:id,username,bio",
        ]);

        // Filters
        // By category
        if($request->has("category_id")){
            $query->where("category_id", $request->category_id);
        }

        // By tag
           if ($request->has('tag_ids')) {
                $tagIds = $request->input('tag_ids');
                if (is_array($tagIds)) {
                    foreach ($tagIds as $tagId) {
                        $query->whereHas('tags', function ($query) use ($tagId) {
                            $query->where('id', $tagId);
                        });
                    }
                }
            }

        // By search
        if($request->has("search")){
            $search = $request->search;
            $query->where("title", "ILIKE", "%" . $search . "%");
        }

        // Sort by latest posts
        $query->orderBy("created_at", "desc");

        // Get post
        $posts = $query->get();

        return response()->json([
            "posts" => $posts
        ]);

    }

    public function show($id){
        $post = Post::with([
            "category:id,name",
            "tags:id,name",
            "author:id,username"
        ])->find($id);

        if(!$post){
            return response()->json([
                "message" => ["Post not found", 404]
            ]);
        }

        return response()->json([
            "post" => $post
        ]);
    }

    public function update(Request $request, Post $post){
        $user = $request->user();

        if($post->author_id !== $user->id){
            return response()->json([
                "message" => "Unauthorized"
            ], 403);
        }

        $validated = $request->validate([
            "title" => [
                "sometimes",
                "string",
                "max:50"
            ],
            "subtitle" => [
                "sometimes",
                "string",
                "max:255"
            ],
            "featured_image" => [
                "sometimes",
                "image",
                "mimes:jpeg,png,jpg,gif,svg",
                "max:4096"
            ],
            "body" => [
                "sometimes",
                "string"
            ],
            "type" => [
                "sometimes",
                "string"
            ],
            "category_id" => [
                "sometimes",
                "exists:category_id"
            ],
            "tag_ids" => [
                "nullable",
                "array"
            ],
            "tag_ids*" => [
                "exists:tags,id"
            ]
        ]);

        $post->fill($request->only([
            "title",
            "subtitle",
            "body",
            "type",
            "category_id",
        ]));

        if($request->hasFile("featured_image")){
            if($post->featured_image_url && Storage::disk('public')->exists($post->featured_image_url)){
                Storage::disk('public')->delete($post->featured_image_url);
            }

            $post->featured_image_url = $request->file("featured_image")->store("featured_images","public");
        }

        $post->save();

        if(array_key_exists("tag_ids", $validated)){
            $post->tags()->sync($validated["tag_ids"] ?? []);
        }

        $post->load("tags","category","author");

        if($post->featured_image_url){
            $post->featured_image_url = asset("storage/" . $post->featured_image_url);
        }

        return response()->json([
            "message" => "Post updated successfully",
            "post" => $post
        ]);
    }


    public function delete(Post $post, Request $request){
        $user = $request->user();

        if($post->author_id !== $user->id){
            return response()->json([
                "message" => ["Unauthorized", 403]
            ]);
        }

        // Delete image
        if ($post->featured_image_url && Storage::disk('public')->exists($post->featured_image_url)) {
            Storage::disk('public')->delete($post->featured_image_url);
        }

        $post->delete();

        return response()->json([
            "message" => "Post deleted successfully"
        ]);
    }
}


