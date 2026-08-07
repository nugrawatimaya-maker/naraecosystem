<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActorProfile extends Model
{
    use HasFactory;

    protected $fillable = [
        'actor_code',
        'name',
        'short_name',
        'badge',
        'kebutuhan',
        'nilai_platform',
        'vector_icon',
        'icon_bg',
        'is_active',
    ];
}
