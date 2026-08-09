<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\PropertyProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProjectController extends ApiController
{
    public function index(Request $request)
    {
        $query = PropertyProject::query();

        if ($request->has('category') && $request->category !== 'all') {
            $query->where('category', 'LIKE', '%' . $request->category . '%');
        }

        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'LIKE', "%{$search}%")
                  ->orWhere('location', 'LIKE', "%{$search}%")
                  ->orWhere('description', 'LIKE', "%{$search}%");
            });
        }

        $projects = $query->orderBy('id', 'desc')->get();
        return $this->success($projects, 'Properties & Projects list retrieved successfully.');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'category' => 'required|string',
            'location' => 'required|string',
            'target_investment' => 'required|numeric',
            'projected_roi' => 'required|string',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            return $this->error('Validation error', 422, $validator->errors());
        }

        $project = PropertyProject::create([
            'project_code' => 'proj-' . time(),
            'title' => $request->title,
            'category' => $request->category,
            'location' => $request->location,
            'target_investment' => $request->target_investment,
            'collected_investment' => 0,
            'projected_roi' => $request->projected_roi,
            'risk_score' => 'Pending Verification (NARA Hub)',
            'assigned_notary' => 'Tim Notaris NARA Allocated',
            'assigned_contractor' => 'Open Bidding Kontraktor',
            'image' => $request->image ?? 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
            'description' => $request->description,
        ]);

        return $this->success($project, 'Listing Properti/Lahan baru berhasil ditayangkan di NARA Ecosystem!', 201);
    }
}
