<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\ActorProfile;
use Illuminate\Http\Request;

class ActorController extends ApiController
{
    public function index()
    {
        $actors = ActorProfile::where('is_active', true)->get();
        return $this->success($actors, 'List of 12 Ecosystem Actor Categories retrieved successfully.');
    }

    public function show($code)
    {
        $actor = ActorProfile::where('actor_code', $code)->first();
        if (!$actor) {
            return $this->error('Actor Category not found', 404);
        }
        return $this->success($actor, 'Actor details retrieved successfully.');
    }
}
