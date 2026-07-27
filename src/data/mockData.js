export const ACTORS = [
  {
    id: 'investor',
    name: 'Investor Properti & Proyek',
    shortName: 'Investor',
    icon: 'TrendingUp',
    color: 'emerald',
    badge: 'Verifikasi Finansial Ready',
    kebutuhan: 'Peluang investasi properti/proyek yang aman & terverifikasi ROI 12-18% p.a.',
    nilaiPlatform: 'Deal-flow terkurasi, due diligence 3-lapis, dana ditahan di escrow NARA sampai milestone tercapai',
    activeUsersCount: 340,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'developer',
    name: 'Pemilik Lahan & Developer',
    shortName: 'Developer',
    icon: 'Building2',
    color: 'gold',
    badge: 'Legalitas Lahan Validated',
    kebutuhan: 'Akses pendanaan modal, jaringan pembeli unit, & kontraktor terpercaya',
    nilaiPlatform: 'Akses ke investor & kontraktor terverifikasi, alur legalitas lahan & PBG lebih cepat',
    activeUsersCount: 185,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'kontraktor',
    name: 'Kontraktor Utama (General Contractor)',
    shortName: 'Kontraktor',
    icon: 'HardHat',
    color: 'blue',
    badge: 'SBU & SKA Verified',
    kebutuhan: 'Proyek dengan garansi dana ter-escrow (bukan janji kosong), termin pembayaran pasti',
    nilaiPlatform: 'Proyek dengan dana ter-escrow NARA, pembayaran termin dijamin aman tepat waktu',
    activeUsersCount: 220,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'subkontraktor',
    name: 'Sub-Kontraktor Spesialis',
    shortName: 'Sub-Kontraktor',
    icon: 'Wrench',
    color: 'purple',
    badge: 'Spesialis MEP & Struktur',
    kebutuhan: 'Sub-work proyek besar dengan kejelasan jadwal & pencairan dana berkala',
    nilaiPlatform: 'Direct matching dengan Kontraktor Utama, sub-escrow termin otomatis',
    activeUsersCount: 410,
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'tokobangunan',
    name: 'Toko Bangunan & Supplier Material',
    shortName: 'Toko Bangunan',
    icon: 'Store',
    color: 'amber',
    badge: 'Mitra Supply Chain NARA',
    kebutuhan: 'Volume pembelian material yang stabil & kepastian pembayaran invoice PO',
    nilaiPlatform: 'Akses langsung ke proyek-proyek aktif, sistem PO & pembayaran terintegrasi Escrow',
    activeUsersCount: 155,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'masyarakat',
    name: 'Masyarakat Umum / Pembeli Properti',
    shortName: 'Pembeli',
    icon: 'Users',
    color: 'teal',
    badge: 'Buyer Protection Active',
    kebutuhan: 'Rumah / unit properti aman secara legalitas, bebas sengketa & serah terima terjamin',
    nilaiPlatform: 'Listing terverifikasi NARA, perlindungan dana booking & DP via Rekening Bersama Escrow',
    activeUsersCount: 1250,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'notaris',
    name: 'Notaris & PPAT Mitra',
    shortName: 'Notaris',
    icon: 'FileCheck',
    color: 'indigo',
    badge: 'Ikatan Notaris Indonesia Verified',
    kebutuhan: 'Klien transaksi properti & investasi yang konsisten & alur berkas yang rapi',
    nilaiPlatform: 'Alur kerja & dokumen terstandar otomatis, volume transaksi rutin dari platform NARA',
    activeUsersCount: 95,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'jasalegal',
    name: 'Penyedia Jasa Legalitas & Audit Lahan',
    shortName: 'Jasa Legal',
    icon: 'Scale',
    color: 'rose',
    badge: 'Legal Audit & Risk Advisor',
    kebutuhan: 'Klien untuk jasa due diligence dokumen sertifikat, PBG/IMB & tata ruang',
    nilaiPlatform: 'Permintaan due diligence terstruktur otomatis dari setiap deal proyek NARA',
    activeUsersCount: 78,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
  }
];

export const FLOW_STEPS = [
  {
    step: 1,
    title: 'Platform Website Diluncurkan',
    subtitle: 'Registrasi Tenant / 8 Jenis Aktor Dibuka',
    description: 'Pendaftaran terbuka untuk Investor, Developer, Kontraktor, Sub-Kontraktor, Toko Bangunan, Notaris, Legal, dan Pembeli Properti.',
    icon: 'Globe',
    badge: 'Phase 1: Onboarding'
  },
  {
    step: 2,
    title: 'Verifikasi & Onboarding Tim NARA (NLD Hub)',
    subtitle: 'Dokumen & Legalitas Diperiksa',
    description: 'Tim NARA melakukan background check, verifikasi sertifikat, SBU, legalitas usaha & finansial sebelum aktor diberi NARA Verified Status.',
    icon: 'ShieldCheck',
    badge: 'Phase 2: Risk Audit'
  },
  {
    step: 3,
    title: 'Listing Tayang di Platform',
    subtitle: 'Katalog Properti, Jasa & Supply Chain',
    description: 'Properti butuh investasi, profil kontraktor/sub-kontraktor, katalog toko bangunan, & tarif notaris/legal resmi dipublikasikan.',
    icon: 'LayoutGrid',
    badge: 'Phase 3: Marketplace'
  },
  {
    step: 4,
    title: 'Pencarian & AI Matching Engine',
    subtitle: 'Filter Lokasi, Kebutuhan & Budget',
    description: 'Calon investor, masyarakat, dan developer menemukan mitra yang tepat melalui pencarian pintar NARA.',
    icon: 'Search',
    badge: 'Phase 4: Match Found'
  },
  {
    step: 5,
    title: 'Mediasi & Pertemuan Deal Room',
    subtitle: 'Verifikasi Dokumen & Negosiasi',
    description: 'Tim NARA menjadwalkan pertemuan offline/online, pendampingan notaris & konsultan legal untuk finalisasi syarat deal.',
    icon: 'Handshake',
    badge: 'Phase 5: Deal Room'
  },
  {
    step: 6,
    title: 'Akta & Kontrak oleh Notaris',
    subtitle: 'Penandatanganan Legitimasi Legal',
    description: 'Notaris menerbitkan Akta Perjanjian Investasi / Pemborongan / Jual Beli dengan klausal pengikatan NARA Escrow.',
    icon: 'FileText',
    badge: 'Phase 6: Legal Contract'
  },
  {
    step: 7,
    title: 'Eksekusi Proyek & Escrow Milestone',
    subtitle: 'Konstruksi & Material PO Release',
    description: 'Dana ditahan aman di NARA Escrow Account. Payout dilepas bertahap per inspeksi milestone fisik proyek.',
    icon: 'Building',
    badge: 'Phase 7: Execution'
  },
  {
    step: 8,
    title: 'Pencairan Dana + Fee NARA (5–10%)',
    subtitle: 'Distribusi Dana Terjamin',
    description: 'Pencairan dana ke Kontraktor, Toko Bangunan & Notaris. Platform NARA mengambil komisi penjaminan 5–10% dari nilai deal.',
    icon: 'BadgePercent',
    badge: 'Phase 8: Disbursement'
  }
];

export const PROPERTY_PROJECTS = [
  {
    id: 'proj-01',
    title: 'NARA Green Residence BSD - Cluster Premium 45 Unit',
    category: 'Pengembangan Properti (Joint Venture)',
    location: 'BSD City, Tangerang Selatan',
    developer: 'PT Nusantara Cipta Land',
    targetInvestment: 12500000000,
    collectedInvestment: 8750000000,
    minTicket: 100000000,
    projectedRoi: '16.5% p.a.',
    tenor: '18 Bulan',
    riskScore: 'Low Risk (Score 94/100)',
    legalStatus: 'SHM Split Complete, PBG Approved, AMDAL Clear',
    escrowStatus: 'Escrow Active - Rp 8.750.000.000 Held',
    assignedNotary: 'Notaris Hj. Ratna Juwita, S.H., M.Kn.',
    assignedLegal: 'Lextrum Due Diligence Partners',
    assignedContractor: 'PT Karya Beton Utama',
    buildingSupplyPartner: 'Depo Bangunan BSD & Toko Bangunan Cahaya Utama',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Proyek hunian minimalis modern 2 lantai berbasis smart eco-living di lokasi strategis BSD. Membutuhkan tambahan dana investasi termin konstruksi tahap 2.'
  },
  {
    id: 'proj-02',
    title: 'Lahan Komersial Metland Cyber City 1.200 m²',
    category: 'Penjualan Lahan Strategic / Joint Venture',
    location: 'Kembangan, Jakarta Barat',
    developer: 'Keluarga Suryadi (Pemilik Lahan)',
    targetInvestment: 24000000000,
    collectedInvestment: 24000000000,
    minTicket: 500000000,
    projectedRoi: '18.0% p.a.',
    tenor: '24 Bulan',
    riskScore: 'Low Risk (Score 98/100)',
    legalStatus: 'SHM On-Hand, Zooning K3 Komersial Valid',
    escrowStatus: 'Escrow Fully Funded - Awaiting Notary Contract',
    assignedNotary: 'Notaris Dr. Hendra Wijaya, S.H.',
    assignedLegal: 'NARA Legal Audit Hub',
    assignedContractor: 'Pending Bidding Kontraktor',
    buildingSupplyPartner: 'Toko Material Utama Ciledug',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    description: 'Lahan hook komersial sangat prospektif untuk ruko modern 4 lantai dan mini warehouse logistics center.'
  },
  {
    id: 'proj-03',
    title: 'Renovasi & Expansion Hotel Boutique Seminyak Bali',
    category: 'Konstruksi & Fit-Out Hotel',
    location: 'Seminyak, Badung, Bali',
    developer: 'Bali Eco Hospitality Corp',
    targetInvestment: 6800000000,
    collectedInvestment: 4500000000,
    minTicket: 50000000,
    projectedRoi: '14.2% p.a.',
    tenor: '12 Bulan',
    riskScore: 'Moderate (Score 88/100)',
    legalStatus: 'PBG Pembaruan Approved, NIB & SLF Clear',
    escrowStatus: 'Escrow Active - Phase 1 Released',
    assignedNotary: 'Notaris I Made Suardana, S.H.',
    assignedLegal: 'Bali Legal Assurance Services',
    assignedContractor: 'PT Bali Dewata Konstruksi',
    buildingSupplyPartner: 'Toko Bangunan Kuta Jaya',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    description: 'Pengembangan 16 suite kamar baru dan rooftop pool bar. Dana escrow digunakan untuk jaminan pembayaran termin kontraktor & toko bangunan.'
  }
];

export const CONTRACTORS = [
  {
    id: 'kont-01',
    companyName: 'PT Karya Beton Nusantara',
    specialty: 'General Contractor Building & Structure',
    rating: 4.9,
    completedProjects: 42,
    license: 'SBU Kualifikasi Besar (B1)',
    location: 'Jakarta Selatan',
    completedValue: 'Rp 180+ Miliar',
    naraBadge: 'Verified Grade A',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'kont-02',
    companyName: 'PT Bali Dewata Konstruksi',
    specialty: 'Resort, Villa, & Luxury Hospitality',
    rating: 4.85,
    completedProjects: 28,
    license: 'SBU Kualifikasi Menengah (M1)',
    location: 'Denpasar, Bali',
    completedValue: 'Rp 95 Miliar',
    naraBadge: 'Verified Grade A',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sub-01',
    companyName: 'CV ElectroMech Utama',
    specialty: 'Sub-Kontraktor MEP (Mechanical Electrical Plumbing)',
    rating: 4.92,
    completedProjects: 65,
    license: 'SBU MEP Specialist Class 2',
    location: 'Tangerang',
    completedValue: 'Rp 45 Miliar',
    naraBadge: 'Verified Specialist',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
  }
];

export const MATERIAL_SUPPLIERS = [
  {
    id: 'sup-01',
    storeName: 'Depo Bangunan & Material BSD Utama',
    category: 'Semen, Besi Beton, Bata Ringan, & Keramik',
    location: 'BSD, Tangerang Selatan',
    rating: 4.9,
    deliveryFleet: '14 Armada Dump Truck & Engkel',
    paymentTerm: 'Integrasi Escrow PO (Pencairan H+1 Delivery)',
    itemsCount: 1450,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sup-02',
    storeName: 'Toko Material Cahaya Bangunan Ciledug',
    category: 'Kayu Perkakas, Cat Industri, Atap Baja Ringan',
    location: 'Tangerang',
    rating: 4.8,
    deliveryFleet: '8 Armada Engkel & Pickup',
    paymentTerm: 'Escrow NARA Term Payment',
    itemsCount: 820,
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80'
  }
];

export const NOTARIES = [
  {
    id: 'not-01',
    name: 'Notaris Hj. Ratna Juwita, S.H., M.Kn.',
    jurisdiction: 'Kota Tangerang Selatan & DKI Jakarta',
    specialization: 'Akta Perjanjian Investasi, SKMHT, Hak Tanggungan, Pemecahan SHM',
    experience: '18 Tahun',
    verifiedDealsOnNara: 54,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'not-02',
    name: 'Notaris Dr. Hendra Wijaya, S.H.',
    jurisdiction: 'Jakarta Barat & Tangerang',
    specialization: 'Pengikatan Jual Beli (PPJB), Pendirian PT Developer, Legal Due Diligence',
    experience: '22 Tahun',
    verifiedDealsOnNara: 82,
    rating: 4.95,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80'
  }
];

export const ACTIVE_DEALS_ESCROW = [
  {
    id: 'DEAL-NARA-2026-089',
    projectName: 'NARA Green Residence BSD - Cluster Phase 1',
    dealTotalValue: 10000000000, // 10 Miliar
    platformFeePercentage: 7.5, // 7.5% komisi NARA (di tengah 5-10%)
    platformFeeAmount: 750000000, // Rp 750 Juta
    escrowAccountNo: 'NARA-ESCROW-8849-1029-BCA',
    status: 'In Progress (Milestone 2 Active)',
    parties: {
      investor: 'Konsorsium Investor BSD Properti (Rp 10.000.000.000)',
      developer: 'PT Nusantara Cipta Land',
      contractor: 'PT Karya Beton Nusantara',
      materialStore: 'Depo Bangunan BSD Utama',
      notary: 'Notaris Hj. Ratna Juwita, S.H., M.Kn.',
      legal: 'Lextrum Due Diligence Partners'
    },
    milestones: [
      {
        id: 'ms-1',
        title: 'Termin 1: Legal Audit, DP Lahan & Pembersihan Tapak (Pondasi)',
        percentage: 25,
        value: 2500000000,
        status: 'RELEASED',
        inspectionDate: '15 Mei 2026',
        inspectorNote: 'Legalitas SHM 100% clean, IMB verified, Pondasi borepile selesai 100%.',
        disbursements: [
          { recipient: 'Developer (DP Lahan)', amount: 1200000000 },
          { recipient: 'Kontraktor (Pondasi)', amount: 800000000 },
          { recipient: 'Toko Bangunan (Semen & Besi)', amount: 312500000 },
          { recipient: 'Notaris & Jasa Legal', amount: 0 },
          { recipient: 'NARA Platform Fee (7.5% Portion)', amount: 187500000 }
        ]
      },
      {
        id: 'ms-2',
        title: 'Termin 2: Pekerjaan Struktur 45 Unit Rumah (Lantai 1 & 2)',
        percentage: 35,
        value: 3500000000,
        status: 'IN_INSPECTION',
        inspectionDate: '24 Juli 2026',
        inspectorNote: 'Inspeksi fisik mencapai 92%. Pengiriman material batu bata & semen dari Toko Bangunan sesuai PO.',
        disbursements: [
          { recipient: 'Kontraktor Utama', amount: 1800000000 },
          { recipient: 'Toko Bangunan (Supply Material)', amount: 1175000000 },
          { recipient: 'Sub-Kontraktor MEP', amount: 262500000 },
          { recipient: 'NARA Platform Fee (7.5% Portion)', amount: 262500000 }
        ]
      },
      {
        id: 'ms-3',
        title: 'Termin 3: Pekerjaan Finishing, Atap, & MEP',
        percentage: 25,
        value: 2500000000,
        status: 'LOCKED',
        inspectionDate: 'Schedule: 15 Oktober 2026',
        inspectorNote: 'Menunggu penyelesaian pekerjaan struktur.',
        disbursements: []
      },
      {
        id: 'ms-4',
        title: 'Termin 4: Serah Terima Unit (Handover) & Retensi Final',
        percentage: 15,
        value: 1500000000,
        status: 'LOCKED',
        inspectionDate: 'Schedule: 10 Desember 2026',
        inspectorNote: 'Penandatanganan AJB oleh Notaris dan Handover kunci ke pembeli.',
        disbursements: []
      }
    ],
    legalDocuments: [
      { name: 'Sertifikat Hak Milik (SHM No. 4819/BSD)', status: 'VERIFIED', checker: 'Notaris & BPN' },
      { name: 'Persetujuan Bangunan Gedung (PBG No. 503/PBG/2025)', status: 'VERIFIED', checker: 'Dinas Cipta Karya' },
      { name: 'Akta Perjanjian Investasi & Escrow (Akta No. 14)', status: 'SIGNED', checker: 'Notaris Hj. Ratna Juwita' },
      { name: 'Rekomendasi AMDAL & Pelepasan Hak Lahan', status: 'VERIFIED', checker: 'Jasa Legal Lextrum' }
    ]
  }
];

export const NARA_METRICS = {
  totalGrossDealValue: 'Rp 485,500,000,000',
  totalEscrowSecured: 'Rp 340,200,000,000',
  platformCommissionEarned: 'Rp 28,910,000,000',
  averageFeeRate: '7.2%',
  verifiedDealsCount: 142,
  zeroDisputeRate: '100% Aman Escrow',
  totalActiveActors: 2718
};
