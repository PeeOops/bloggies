<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        "title",
        "subtitle",
        "featured_image_url",
        "body",
        "category_id",
        "type",
    ];

    // created_at format date
    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('jS F Y');
    }

    // Relationships

    public function tags(){
        return $this->belongsToMany(Tag::class);
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function author(){
        return $this->belongsTo(User::class, "author_id");
    }

    public function likedByUsers(){
        return $this->belongsToMany(User::class, "post_user_likes")->withTimestamps();
    }
    
}
