<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DealPromo extends Model
{
    use HasFactory;

    protected $table = 'deals_promos';

    protected $fillable = [
        'deal_code',
        'title',
        'badge',
        'badge_color',
        'profit_tag',
        'location',
        'image',
        'description',
        'action_text',
        'is_active',
    ];
}
