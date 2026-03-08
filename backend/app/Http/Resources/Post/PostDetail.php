<?php

namespace App\Http\Resources\Post;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostDetail extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->hashid,
            'title' => $this->title,
            'content' => $this->content,
            'relations' => [
                'user' => [
                    'id' => $this->user->hashid,
                    'name' => $this->user->name,
                    'email' => $this->user->email
                ],
                'category' => [
                    'name' => $this->category->name,
                    'slug' => $this->category->slug
                ]
            ]
        ];
    }
}
