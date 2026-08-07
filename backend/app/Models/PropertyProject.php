<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropertyProject extends Model
{
    use HasFactory;

    protected $table = 'properties_projects';

    protected $fillable = [
        'project_code',
        'title',
        'category',
        'location',
        'target_investment',
        'collected_investment',
        'projected_roi',
        'risk_score',
        'assigned_notary',
        'assigned_contractor',
        'image',
        'description',
        'status',
    ];
}
