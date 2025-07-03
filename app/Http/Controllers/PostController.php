<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function store(Request $request){
        // Validate input
        $validated = $request->validate([
            "title" => "required|string|max:50",
            "subtitle" => "required|string|max:255",
            "featured_image" => "nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048",
            "body" => "required|string",
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
            "category_id"
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
}
