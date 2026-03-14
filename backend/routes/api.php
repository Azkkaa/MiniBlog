<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

use App\Models\Post;
use App\Models\Category;
use App\Models\User;

route::get('/dashboard', function() {
    $totalPosts = Post::count();
    $totalCategories = Category::count();
    $totalUsers = User::count();

    return response()->json([
        'message' => 'Getting First Page Data',
        'resources' => [
            'totalPosts' => $totalPosts,
            'totalCategories' => $totalCategories,
            'totalUsers' => $totalUsers
        ]
    ], 200);
});

Route::prefix('/post')->group(function () {
    Route::get('/', [PostController::class, 'index']);
    Route::get('/{hashIdPost}', [PostController::class, 'show']);
});

Route::prefix('/category')->group(function () {
    Route::get('/', [CategoryController::class, 'index']);
    Route::get('/{category}/post', [CategoryController::class, 'show']);
});

Route::prefix('author')->group(function () {
    Route::get('', [UserController::class, 'index']);
    Route::get('{hashIdUser}/post', [UserController::class, 'show']);
});

Route::get('search', [SearchController::class, 'index']);
