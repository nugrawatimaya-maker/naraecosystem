<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\ActorProfile;
use App\Models\PropertyProject;
use App\Models\DealPromo;
use App\Models\Partner;
use App\Models\EscrowAccount;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Seed Demo User
        User::factory()->create([
            'name' => 'NARA Demo Admin',
            'email' => 'mitra@nara.id',
        ]);

        // 2. Seed 12 Actor Profiles
        $actors = [
            ['actor_code' => 'investor', 'name' => 'Investor Properti & Proyek', 'short_name' => 'Investor', 'badge' => 'Verifikasi Finansial Ready', 'kebutuhan' => 'Peluang investasi properti/proyek yang aman & terverifikasi ROI 12-18% p.a.', 'nilai_platform' => 'Deal-flow terkurasi, due diligence 3-lapis, dana ditahan escrow NARA', 'vector_icon' => '📈', 'icon_bg' => 'bg-gradient-to-br from-teal-500 to-emerald-600 text-white'],
            ['actor_code' => 'developer', 'name' => 'Pemilik Lahan & Developer', 'short_name' => 'Developer', 'badge' => 'Legalitas Lahan Validated', 'kebutuhan' => 'Akses pendanaan modal, jaringan pembeli unit, & kontraktor terpercaya', 'nilai_platform' => 'Akses ke investor & kontraktor terverifikasi, alur legalitas lahan & PBG lebih cepat', 'vector_icon' => '🏢', 'icon_bg' => 'bg-gradient-to-br from-amber-500 to-orange-600 text-white'],
            ['actor_code' => 'kontraktor', 'name' => 'Kontraktor Utama (General Contractor)', 'short_name' => 'Kontraktor', 'badge' => 'SBU & SKA Verified', 'kebutuhan' => 'Proyek dengan garansi dana ter-escrow (bukan janji kosong), termin pembayaran pasti', 'nilai_platform' => 'Proyek dengan dana ter-escrow NARA, pembayaran termin dijamin tepat waktu', 'vector_icon' => '🔨', 'icon_bg' => 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white'],
            ['actor_code' => 'subkontraktor', 'name' => 'Sub-Kontraktor Spesialis', 'short_name' => 'Sub-Kontraktor', 'badge' => 'Spesialis MEP & Struktur', 'kebutuhan' => 'Sub-work proyek besar dengan kejelasan jadwal & pencairan dana berkala', 'nilai_platform' => 'Direct matching dengan Kontraktor Utama, sub-escrow termin otomatis', 'vector_icon' => '⚙️', 'icon_bg' => 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white'],
            ['actor_code' => 'tokobangunan', 'name' => 'Toko Bangunan & Supplier Material', 'short_name' => 'Toko Bangunan', 'badge' => 'Mitra Supply Chain NARA', 'kebutuhan' => 'Volume pembelian material yang stabil & kepastian pembayaran invoice PO', 'nilai_platform' => 'Akses langsung ke proyek aktif, sistem PO & pembayaran terintegrasi Escrow', 'vector_icon' => '🏪', 'icon_bg' => 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white'],
            ['actor_code' => 'masyarakat', 'name' => 'Masyarakat Umum / Pembeli Properti', 'short_name' => 'Pembeli', 'badge' => 'Buyer Protection Active', 'kebutuhan' => 'Rumah / unit properti aman secara legalitas, bebas sengketa & serah terima terjamin', 'nilai_platform' => 'Listing terverifikasi NARA, perlindungan dana booking & DP via Rekening Bersama Escrow', 'vector_icon' => '🏡', 'icon_bg' => 'bg-gradient-to-br from-rose-500 to-pink-600 text-white'],
            ['actor_code' => 'notaris', 'name' => 'Notaris & PPAT Mitra', 'short_name' => 'Notaris', 'badge' => 'Ikatan Notaris Indonesia Verified', 'kebutuhan' => 'Klien transaksi properti & investasi yang konsisten & alur berkas terstandar', 'nilai_platform' => 'Alur kerja & dokumen terstandar otomatis, volume transaksi rutin dari platform NARA', 'vector_icon' => '📜', 'icon_bg' => 'bg-gradient-to-br from-amber-600 to-yellow-600 text-white'],
            ['actor_code' => 'jasalegal', 'name' => 'Penyedia Jasa Legalitas & Audit Lahan', 'short_name' => 'Jasa Legal', 'badge' => 'Legal Audit & Risk Advisor', 'kebutuhan' => 'Klien untuk jasa due diligence dokumen sertifikat, PBG/IMB & tata ruang', 'nilai_platform' => 'Permintaan due diligence terstruktur otomatis dari setiap deal proyek NARA', 'vector_icon' => '⚖️', 'icon_bg' => 'bg-gradient-to-br from-sky-600 to-blue-700 text-white'],
            ['actor_code' => 'agenmarketing', 'name' => 'Agen Marketing & Broker Properti', 'short_name' => 'Agen Marketing', 'badge' => 'Verifikasi Broker Resmi', 'kebutuhan' => 'Listing properti eksklusif & komisi penjualan pasti ter-escrow NARA', 'nilai_platform' => 'Akses portofolio proyek eksklusif & kepastian komisi terbayar via escrow', 'vector_icon' => '📢', 'icon_bg' => 'bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white'],
            ['actor_code' => 'freelancer', 'name' => 'Freelancer & Mandor Proyek Individual', 'short_name' => 'Freelancer Individual', 'badge' => 'Sertifikasi Keahlian Skilled', 'kebutuhan' => 'Proyek harian/borongan mandiri dengan jaminan pembayaran termin', 'nilai_platform' => 'Direct job matching & kepastian bayar dari pemilik proyek', 'vector_icon' => '🧰', 'icon_bg' => 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white'],
            ['actor_code' => 'kelistrikan', 'name' => 'Jasa Kelistrikan & Teknik MEP', 'short_name' => 'Jasa Kelistrikan', 'badge' => 'Sertifikat SLO & AKLI', 'kebutuhan' => 'Pekerjaan instalasi kabel, panel listrik & solar energy rumah/gedung', 'nilai_platform' => 'Garansi pekerjaan & escrow termin untuk pemasangan sistem listrik', 'vector_icon' => '⚡', 'icon_bg' => 'bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-950'],
            ['actor_code' => 'kpr', 'name' => 'Mitra KPR & Perbankan', 'short_name' => 'KPR Perbankan', 'badge' => 'OJK Verified Bank Partner', 'kebutuhan' => 'Fasilitas pembiayaan KPR, appraisal sertifikat & akad kredit instan', 'nilai_platform' => 'Integrasi pengajuan KPR & peninjauan sertifikat otomatis', 'vector_icon' => '🏦', 'icon_bg' => 'bg-gradient-to-br from-emerald-600 to-green-700 text-white'],
        ];

        foreach ($actors as $actor) {
            ActorProfile::create($actor);
        }

        // 3. Seed Deals / Promos Cards
        $deals = [
            [
                'deal_code' => 'need-01',
                'title' => 'Proposal Bisnis Investasi Properti (Profit 25%)',
                'badge' => '📊 Joint Venture Investment',
                'badge_color' => 'bg-teal-50 text-teal-800 border-teal-200',
                'profit_tag' => 'Profit 25% p.a.',
                'location' => 'Makassar & Maros, Sulawesi Selatan',
                'image' => 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
                'description' => 'Proposal kerjasama investasi pengembangan lahan & cluster perumahan komersial dengan skema bagi hasil terjamin via NARA Escrow.',
                'action_text' => 'Masuk NARA Escrow Deal Room'
            ],
            [
                'deal_code' => 'need-02',
                'title' => 'Mini Investasi Pengembangan Blok Perumahan',
                'badge' => '💎 Mini Investment',
                'badge_color' => 'bg-amber-50 text-amber-800 border-amber-200',
                'profit_tag' => 'Profit 20% / 6 Bulan',
                'location' => 'Kawasan Strategis Maros & BSD',
                'image' => 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
                'description' => 'Peluang dana investasi mini blok hunian siap bangun dengan penjaminan unit sertifikat & legalitas SHM terlindungi.',
                'action_text' => 'Masuk NARA Escrow Deal Room'
            ],
            [
                'deal_code' => 'need-03',
                'title' => 'Promo Jasa Agen Marketing (Diskon 50%)',
                'badge' => '📢 Marketing Special Promo',
                'badge_color' => 'bg-[#1ac1b9]/10 text-[#0d9488] border-[#1ac1b9]/30',
                'profit_tag' => 'Diskon Komisi 50%',
                'location' => 'Nasional / Seluruh Indonesia',
                'image' => 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
                'description' => 'Layanan agen pemasaran & broker properti profesional NARA dengan potongan komisi penanganan 50% dan garansi listing tayang cepat.',
                'action_text' => 'Ambil Promo Marketing'
            ],
            [
                'deal_code' => 'need-04',
                'title' => '5 Unit Kerjasama Perumahan Sunrise City Maros',
                'badge' => '🏡 Developer Special Project',
                'badge_color' => 'bg-emerald-50 text-emerald-800 border-emerald-200',
                'profit_tag' => 'Profit Hingga Rp 5 Jt / Unit',
                'location' => 'Sunrise City Maros, Sulawesi Selatan',
                'image' => 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
                'description' => 'Kerjasama eksklusif 5 unit hunian siap huni di Perumahan Sunrise City Maros dengan bagi hasil profit hingga Rp 5 Jt per unit terbayar.',
                'action_text' => 'Masuk NARA Escrow Deal Room'
            ],
            [
                'deal_code' => 'need-05',
                'title' => 'Promo Jasa Arsitektur Hanya 6 Jt (Type 84)',
                'badge' => '📐 Special Design Offer',
                'badge_color' => 'bg-blue-50 text-blue-800 border-blue-200',
                'profit_tag' => 'Hanya Rp 6.000.000',
                'location' => 'Desain Online / Wilayah Indonesia',
                'image' => 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
                'description' => 'Paket gambar kerja lengkap arsitek, struktur PBG/IMB, & render 3D visualisasi rumah mewah type 84 m² hanya seharga Rp 6 Juta.',
                'action_text' => 'Ambil Promo Arsitektur'
            ]
        ];

        foreach ($deals as $deal) {
            DealPromo::create($deal);
        }

        // 4. Seed Partners (Mitra Running Marquee)
        $partners = [
            ['partner_code' => 'btn', 'name' => 'Bank BTN', 'label' => 'Bank BTN', 'icon' => '🏠', 'type' => 'btn'],
            ['partner_code' => 'mandiri', 'name' => 'Bank Mandiri', 'label' => 'Bank Mandiri', 'icon' => '🏦', 'type' => 'mandiri'],
            ['partner_code' => 'bri', 'name' => 'Bank BRI', 'label' => 'Bank BRI', 'icon' => '🏦', 'type' => 'bri'],
            ['partner_code' => 'bni', 'name' => 'Bank BNI', 'label' => 'Bank BNI', 'icon' => '🏦', 'type' => 'bni'],
            ['partner_code' => 'sig', 'name' => 'Semen Indonesia (SIG)', 'label' => 'SIG', 'icon' => '🏗️', 'type' => 'sig'],
            ['partner_code' => 'cks', 'name' => 'PT. Catur Kencana Sakti', 'label' => 'PT. Catur Kencana Sakti', 'icon' => '🏢', 'type' => 'custom'],
            ['partner_code' => 'ppat', 'name' => 'Notaris PPAT', 'label' => 'Notaris PPAT', 'icon' => '📜', 'type' => 'custom'],
            ['partner_code' => 'harapanjaya', 'name' => 'PT. Harapan Jaya Brand', 'label' => 'PT. Harapan Jaya Brand', 'icon' => '🔨', 'type' => 'custom'],
            ['partner_code' => 'kalla', 'name' => 'Kalla Beton', 'label' => 'Kalla Beton', 'icon' => '🧱', 'type' => 'custom'],
        ];

        foreach ($partners as $partner) {
            Partner::create($partner);
        }

        // 5. Seed Property Projects
        $projects = [
            [
                'project_code' => 'proj-01',
                'title' => 'NARA Green Residence BSD - Cluster Premium 45 Unit',
                'category' => 'Pengembangan Properti (Joint Venture)',
                'location' => 'BSD City, Tangerang Selatan',
                'target_investment' => 12500000000,
                'collected_investment' => 8750000000,
                'projected_roi' => '16.5% p.a.',
                'risk_score' => 'Low Risk (94/100)',
                'assigned_notary' => 'Notaris Hj. Ratna Juwita, S.H., M.Kn.',
                'assigned_contractor' => 'PT Karya Beton Nusantara',
                'image' => 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
                'description' => 'Proyek hunian minimalis modern 2 lantai berbasis smart eco-living di lokasi strategis BSD. Membutuhkan tambahan dana investasi termin konstruksi tahap 2.'
            ],
            [
                'project_code' => 'proj-02',
                'title' => 'Lahan Komersial Metland Cyber City 1.200 m²',
                'category' => 'Penjualan Lahan Strategic / JV',
                'location' => 'Kembangan, Jakarta Barat',
                'target_investment' => 24000000000,
                'collected_investment' => 24000000000,
                'projected_roi' => '18.0% p.a.',
                'risk_score' => 'Low Risk (98/100)',
                'assigned_notary' => 'Notaris Dr. Hendra Wijaya, S.H.',
                'assigned_contractor' => 'Pending Bidding',
                'image' => 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
                'description' => 'Lahan hook komersial sangat prospektif untuk ruko modern 4 lantai dan mini warehouse logistics center.'
            ],
            [
                'project_code' => 'proj-03',
                'title' => 'Renovasi & Expansion Hotel Boutique Seminyak Bali',
                'category' => 'Konstruksi & Fit-Out Hotel',
                'location' => 'Seminyak, Badung, Bali',
                'target_investment' => 6800000000,
                'collected_investment' => 4500000000,
                'projected_roi' => '14.2% p.a.',
                'risk_score' => 'Moderate (88/100)',
                'assigned_notary' => 'Notaris I Made Suardana, S.H.',
                'assigned_contractor' => 'PT Bali Dewata Konstruksi',
                'image' => 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
                'description' => 'Pengembangan 16 suite kamar baru dan rooftop pool bar. Dana escrow digunakan untuk jaminan pembayaran termin kontraktor & toko bangunan.'
            ]
        ];

        foreach ($projects as $project) {
            PropertyProject::create($project);
        }

        // 6. Seed Escrow Account
        EscrowAccount::create([
            'escrow_number' => 'NARA-ESCROW-8849-BCA',
            'total_deal_amount' => 10000000000,
            'nara_fee_percentage' => 7.50,
            'nara_fee_amount' => 750000000,
            'net_released_amount' => 2500000000,
            'status' => 'ACTIVE'
        ]);
    }
}
