<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Category\CategoryIndexResource;
use App\Http\Resources\Category\CategoryShowResource;
use App\Models\Category;
use Illuminate\Http\Request;

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
            $category = Category::where('slug', '=', $request->route('category'))
                ->with('posts')
                ->first();
            if (!$category) {
                return response()->json([
                    'message' => 'Data Not Found!!',
                ], 404);
            }

            return response()->json([
                'message' => 'Getting Category Post Data',
                'resources' => new CategoryShowResource($category)
            ]);
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
