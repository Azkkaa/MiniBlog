<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Http\Resources\Post\PostIndexResource;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index (Request $request)
    {
        try {
            $searchKey = $request->query('q');
            $page = $request->query('page', 1);

            if (empty($searchKey)) {
                return response()->json([
                    'message' => 'Please enter a search key',
                    'resources' => null,
                    'total' => 0
                ], 200);
            }

            $posts = Post::where('title', 'like', "%$searchKey%")
                ->with(['user', 'category'])
                ->get();

            if ($posts->isEmpty()) {
                return response()->json([
                    'message' => 'No post found',
                    'resources' => null,
                    'total' => 0
                ], 200);
            }

            return response()->json([
                'message' => 'Searching Post',
                'resources' => PostIndexResource::collection($posts),
                'page' => 1,
                'total' => $posts->count(),
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to search post',
                'error' => [
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                ]
            ], 500);
        }
    }
}
