<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostLikeController extends Controller
{
    public function toggleLike(Post $post, Request $request){
        $user = $request->user();

        if ($user->likedPosts()->where('post_id', $post->id)->exists()) {
            $user->likedPosts()->detach($post->id);
            return response()->json(['liked' => false, 'likes_count' => $post->likedByUsers()->count()]);
        } else {
            $user->likedPosts()->attach($post->id);
            return response()->json(['liked' => true, 'likes_count' => $post->likedByUsers()->count()]);
        }
    }

    public function show(Post $post, Request $request)
    {
        $user = $request->user();

        return response()->json([
            'post' => $post,
            'liked' => $user ? $user->likedPosts->contains($post->id) : false,
            'likes_count' => $post->likedByUsers()->count()
        ]);
    }

    public function update(Request $request){
        $user = $request->user();
    }

    public function likedPosts(Request $request)
    {   
        $user = $request->user();

        $likedPosts = $user->likedPosts()->get();

        return response()->json([
            "posts" => $likedPosts
        ]);
    }

    public function showByPopularity(){
        $posts = Post::withCount("likedByUsers")->orderByDesc("liked_by_users_count")->get();

        return response()->json([
            "posts" => $posts
        ]);
    }
}
