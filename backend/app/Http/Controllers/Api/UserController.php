<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\User\UserShowResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'message' => 'Getting User Data',
            'data' => User::all()
        ], 200);
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

            $user = User::with(['posts' => function ($query) use ($page) {
                        $query->with('category')
                            ->latest()
                            ->skip(($page - 1) * 10)
                            ->take(10);
                    }])
                ->findByHashid($request->route('hashIdUser'));

            if (!$user) {
                return response()->json([
                    'message' => 'Author Not Found!!'
                ], 404);
            }

            if ($user->posts->count() == 0) {
                return response()->json([
                    'message' => 'The Author has no posts or eather the page is empty!!'
                ], 404);
            }

            return response()->json([
                'message' => 'Getting Author Post Data',
                'resources' => new UserShowResource($user),
                'page' => $page,
                'total' => $user->posts()->count()
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
