<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Mtvs\EloquentHashids\HasHashid;
use Mtvs\EloquentHashids\HashidRouting;

class Post extends Model
{
    use HasFactory, HasHashid, HashidRouting;

    protected $fillable = [
        'user_id',
        'category_id',
        'title',
        'content'
    ];

    protected $appends = [
        'hashid'
    ];

    public function category ()
    {
        return $this->belongsTo(Category::class);
    }

    public function user ()
    {
        return $this->belongsTo(User::class);
    }
}
