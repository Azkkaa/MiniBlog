<?php

namespace App\Http\Resources\Post;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostAuthorResource extends JsonResource
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
          'category' => [
            'name' => $this->category->name,
            'slug' => $this->category->slug
          ]
        ];
    }
}
