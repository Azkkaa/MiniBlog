<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Post\PostDetail;
use App\Http\Resources\Post\PostIndexResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $queryRelation = Post::with(['user', 'category']);
            $page = $request->query('page', 1);

            $posts = $queryRelation->latest()
                ->skip(($page - 1) * 10)
                ->take(10)
                ->get();

            return response()->json([
                'message' => 'Getting posts data',
                'resources' => PostIndexResource::collection($posts),
                'page' => $page,
                'total' => Post::count()
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Server Error',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        try {
            $posts = Post::findByHashid($request->route('hashIdPost'));

            if (!$posts) {
                return response()->json([
                    'message' => 'Data Not Found!!'
                ], 404);
            }

            return response()->json([
                'message' => 'Getting Post Data',
                'resources' => new PostDetail($posts)
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Server Error',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
