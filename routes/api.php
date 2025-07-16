<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PostLikeController;
use App\Http\Controllers\TagsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Auth API
Route::post("/register",[AuthController::class,"register"]);
Route::post("/login",[AuthController::class,"login"]);

Route::get("/categories",[CategoriesController::class, "getAllCategories"]);
Route::get("/tags",[TagsController::class,"getAllTags"]);
Route::get("/post/index", [PostController::class, "index"]);
Route::get("/post/{id}", [PostController::class, "show"]);
Route::get('/post/{post}/like', [PostLikeController::class, 'show']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::put('/update',[AuthController::class,'update']);
    Route::post('/post/store',[PostController::class,'store']);
    Route::post('/post/{post}/like', [PostLikeController::class, 'toggleLike']);
});
