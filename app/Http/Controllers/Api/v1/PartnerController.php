<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\Partner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PartnerController extends ApiController
{
    public function index()
    {
        $partners = Partner::where('is_active', true)->get();
        return $this->success($partners, 'Partners list for Running Marquee retrieved successfully.');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return $this->error('Validation error', 422, $validator->errors());
        }

        $partner = Partner::create([
            'partner_code' => 'partner-' . time(),
            'name' => $request->name,
            'label' => $request->name,
            'icon' => $request->icon ?? '🤝',
            'type' => 'custom',
        ]);

        return $this->success($partner, 'Mitra Baru Berhasil Ditambahkan ke Running Marquee Slider!', 201);
    }

    public function destroy($id)
    {
        $partner = Partner::find($id);
        if (!$partner) {
            return $this->error('Partner not found', 404);
        }
        $partner->delete();
        return $this->success(null, 'Mitra Berhasil Dihapus dari Marquee Slider.');
    }
}
