<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\EscrowAccount;
use Illuminate\Http\Request;

class EscrowController extends ApiController
{
    public function show()
    {
        $account = EscrowAccount::first();
        if (!$account) {
            return $this->error('Escrow Account not initialized', 404);
        }

        $milestones = [
            [
                'term' => 'Termin 1: Legal Audit & Pondasi (25%)',
                'amount' => 2500000000,
                'status' => 'RELEASED',
                'description' => 'Rp 2.500.000.000 dicairkan ke Developer, Kontraktor & Supplier Material.',
            ],
            [
                'term' => 'Termin 2: Pekerjaan Struktur (35%)',
                'amount' => 3500000000,
                'status' => 'IN_INSPECTION',
                'description' => 'Rp 3.500.000.000 dalam proses verifikasi fisik tim NARA.',
            ],
            [
                'term' => 'Termin 3: Finishing & Serah Terima (40%)',
                'amount' => 4000000000,
                'status' => 'LOCKED',
                'description' => 'Rp 4.000.000.000 ditahan hingga berita acara serah terima unit disetujui.',
            ],
        ];

        return $this->success([
            'account' => $account,
            'milestones' => $milestones,
        ], 'Escrow Account details & Milestone release schedule retrieved.');
    }

    public function calculateFee(Request $request)
    {
        $dealAmount = floatval($request->input('amount', 10000000000));
        $feeRate = floatval($request->input('rate', 7.5));

        $naraFee = round(($dealAmount * $feeRate) / 100);
        $netDisbursed = $dealAmount - $naraFee;

        $distribution = [
            'contractor_share' => round($netDisbursed * 0.55),
            'material_share' => round($netDisbursed * 0.35),
            'legal_notary_share' => round($netDisbursed * 0.10),
        ];

        return $this->success([
            'deal_amount' => $dealAmount,
            'fee_rate' => $feeRate,
            'nara_fee' => $naraFee,
            'net_disbursed' => $netDisbursed,
            'distribution' => $distribution,
        ], 'Escrow fee & payout distribution calculated successfully.');
    }
}
