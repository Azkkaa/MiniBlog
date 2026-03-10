<?php

namespace App\Http\Resources\User;

use App\Http\Resources\Post\PostAuthorResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserShowResource extends JsonResource
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
            'name' => $this->name,
            'email' => $this->email,
            'posts' => PostAuthorResource::collection($this->posts)
        ];
    }
}
