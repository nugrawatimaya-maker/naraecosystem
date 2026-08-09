<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\DealPromo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DealPromoController extends ApiController
{
    public function index()
    {
        $deals = DealPromo::where('is_active', true)->orderBy('id', 'desc')->get();
        return $this->success($deals, 'Deals & Promo cards list retrieved successfully.');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'badge' => 'required|string',
            'profit_tag' => 'required|string',
            'location' => 'required|string',
            'description' => 'required|string',
            'action_text' => 'required|string',
        ]);

        if ($validator->fails()) {
            return $this->error('Validation error', 422, $validator->errors());
        }

        $deal = DealPromo::create([
            'deal_code' => 'need-' . time(),
            'title' => $request->title,
            'badge' => $request->badge,
            'badge_color' => $request->badge_color ?? 'bg-teal-50 text-teal-800 border-teal-200',
            'profit_tag' => $request->profit_tag,
            'location' => $request->location,
            'image' => $request->image ?? 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            'description' => $request->description,
            'action_text' => $request->action_text,
        ]);

        return $this->success($deal, 'Card Promosi Baru Berhasil Ditambahkan ke Web & Android via CMS API!', 201);
    }

    public function destroy($id)
    {
        $deal = DealPromo::find($id);
        if (!$deal) {
            return $this->error('Deal Promo Card not found', 404);
        }
        $deal->delete();
        return $this->success(null, 'Card Promosi Berhasil Dihapus.');
    }
}
