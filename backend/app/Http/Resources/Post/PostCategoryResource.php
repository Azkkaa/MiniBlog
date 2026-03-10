<?php

namespace App\Http\Resources\Post;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class PostCategoryResource extends JsonResource
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
            'content' => Str::limit($this->content, 100),
            'user' => [
              'id' => $this->user->hashid,
              'email' => $this->user->email,
                'name' => $this->user->name,
            ]
        ];
    }
}
