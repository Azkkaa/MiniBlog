<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Category\CategoryIndexResource;
use App\Http\Resources\Category\CategoryPostResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $categories = Category::all();

            return response()->json([
                'message' => 'Getting Categories Data',
                'resources' => CategoryIndexResource::collection($categories)
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Server Error',
                'error' => [
                  'message' => $e->getMessage(),
                  'line' => $e->getLine(),
                  'file' => $e->getFile(),
                ]
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
            $page = $request->query('page', 1);
            $categoryName = $request->route('category');

            $categoryQuery = Category::where('slug', '=', $categoryName);

            $category = $categoryQuery->with(['posts' => function ($query) use ($page) {
                    $query->with('user')
                        ->latest()
                        ->skip(($page - 1) * 10)
                        ->take(10);
                }])
                ->first();

            if (!$category) {
                $categoryNameCapitalized = Str::ucfirst($categoryName);
                return response()->json([
                    'message' => "Category $categoryNameCapitalized Not Found!!",
                ], 404);
            }

            if ($category->posts->count() == 0) {
                return response()->json([
                    'message' => 'The Category has no posts or eather the page is empty!!'
                ], 404);
            }

            return response()->json([
                'message' => 'Getting Category Post Data',
                'resources' => new CategoryPostResource($category),
                'page' => $page,
                'total' => $categoryQuery->withCount('posts')->first()->posts_count
              ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Server Error',
                'error' => [
                    'message' => $e->getMessage(),
                    'line' => $e->getLine(),
                    'file' => $e->getFile(),
                ]
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
