<!DOCTYPE html>
<html lang="id" class="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NARA — Ekosistem Properti & Konstruksi Terpadu</title>
  
  <!-- Google Fonts: Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Plus Jakarta Sans', 'sans-serif'],
          },
          colors: {
            naraBlue: '#2563eb',
            naraTeal: '#0d9488',
            naraAmber: '#f59e0b',
            naraDark: '#0f172a',
          }
        }
      }
    }
  </script>

  <!-- Custom Marquee & Animation Styles -->
  <style>
    body {
      margin: 0;
      background-color: #f8fafc;
      color: #0f172a;
      font-family: 'Plus Jakarta Sans', sans-serif;
      min-height: 100vh;
    }

    @keyframes marqueeScroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .animate-marquee-infinite {
      display: inline-flex;
      white-space: nowrap;
      animation: marqueeScroll 25s linear infinite;
    }

    .animate-marquee-infinite:hover {
      animation-play-state: paused;
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f5f9;
    }
    ::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 9999px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #94a3b8;
    }
  </style>

  <!-- React 18 & Babel CDN -->
  <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="bg-[#f8fafc] text-slate-900 antialiased pb-20 md:pb-6">
  <div id="root"></div>

  <script type="text/babel">
    const { useState, useEffect, useMemo } = React;

    // --- SAMPLE DATA: RECENT LISTINGS & NEARBY PROPERTIES ---
    const INITIAL_RECENT_LISTINGS = [
      {
        id: 'rec-1',
        title: 'Cluster Minimalis Sunset Garden Maros',
        category: 'listing',
        categoryLabel: 'Rumah Dijual',
        location: 'Maros, Sulawesi Selatan',
        price: 'Rp 650 Juta',
        priceNum: 650000000,
        roi: 'Potensi Sewa 8% p.a.',
        specs: 'LT 90m² • LB 54m² • 3 KT • 2 KM',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        verified: true,
        escrow: true,
        featured: true,
        date: '2 jam lalu'
      },
      {
        id: 'rec-2',
        title: 'Lahan Hook Komersial Siap Bangun Ruko',
        category: 'listing',
        categoryLabel: 'Tanah Dijual',
        location: 'Makassar, Sulawesi Selatan',
        price: 'Rp 2,8 Miliar',
        priceNum: 2800000000,
        roi: 'SHM Bersih & Bebas Banjir',
        specs: 'Luas Lahan 450m² • Zona Komersial',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
        verified: true,
        escrow: true,
        featured: false,
        date: '4 jam lalu'
      },
      {
        id: 'rec-3',
        title: 'Ruko Modern 3 Lantai Prime Business Boulevard',
        category: 'rent',
        categoryLabel: 'Sewa Properti',
        location: 'Panakkukang, Makassar',
        price: 'Rp 85 Jt / Tahun',
        priceNum: 85000000,
        roi: 'Lokasi Ramai & Parkir Luas',
        specs: 'LT 120m² • LB 280m² • Listrik 4400W',
        image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
        verified: true,
        escrow: true,
        featured: false,
        date: '6 jam lalu'
      },
      {
        id: 'rec-4',
        title: 'Jasa Notaris & PPAT Pembuatan Akta Jual Beli',
        category: 'layanan',
        categoryLabel: 'Jasa Legalitas',
        location: 'Wilayah Sulawesi Selatan',
        price: 'Mulai Rp 1,5 Juta',
        priceNum: 1500000,
        roi: 'Proses Cepat & Resmi BPN',
        specs: 'Cek Sertifikat, Balik Nama, SKPT',
        image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
        verified: true,
        escrow: true,
        featured: false,
        date: '1 hari lalu'
      },
      {
        id: 'rec-5',
        title: 'Kontraktor Sipil Bangun & Renovasi Rumah Mewah',
        category: 'layanan',
        categoryLabel: 'Jasa Kontraktor',
        location: 'Makassar & Sekitarnya',
        price: 'Rp 3,8 Jt / m²',
        priceNum: 3800000,
        roi: 'Termin Escrow Garansi 1 Tahun',
        specs: 'Gratis Desain 3D & Estimasi RAB',
        image: 'https://images.unsplash.com/photo-1541888946425-d0fbb180c5f5?auto=format&fit=crop&w=800&q=80',
        verified: true,
        escrow: true,
        featured: false,
        date: '1 hari lalu'
      },
      {
        id: 'rec-6',
        title: 'Villa Eksklusif Sunrise View Tanjung Bira',
        category: 'rent',
        categoryLabel: 'Sewa Villa',
        location: 'Bulukumba, Sulawesi Selatan',
        price: 'Rp 1,7 Jt / Malam',
        priceNum: 1700000,
        roi: 'Private Pool & Ocean View',
        specs: '3 Kamar Tidur • Full Furnished',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
        verified: true,
        escrow: true,
        featured: false,
        date: '2 hari lalu'
      },
      {
        id: 'rec-7',
        title: 'Gudang Logistik Modern Akses Kontainer 40ft',
        category: 'rent',
        categoryLabel: 'Sewa Gudang',
        location: 'Kawasan Industri Makassar (KIMA)',
        price: 'Rp 220 Jt / Tahun',
        priceNum: 220000000,
        roi: 'Keamanan 24 Jam & Loading Dock',
        specs: 'Luas Bangunan 1.200m² • Tinggi 9m',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
        verified: true,
        escrow: true,
        featured: false,
        date: '3 hari lalu'
      },
      {
        id: 'rec-8',
        title: 'Tanah Kavling Siap Bangun Perumahan Maros',
        category: 'listing',
        categoryLabel: 'Tanah Dijual',
        location: 'Mandai, Maros',
        price: 'Rp 380 Juta',
        priceNum: 380000000,
        roi: 'Dekat Bandara Sultan Hasanuddin',
        specs: 'Luas 150m² • Akses Jalan Paving 7m',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
        verified: true,
        escrow: true,
        featured: false,
        date: '4 hari lalu'
      }
    ];

    const INITIAL_NEARBY_PROPERTIES = [
      {
        id: 'near-1',
        title: 'Rumah 2 Lantai Cluster Smart Living',
        category: 'listing',
        categoryLabel: 'Rumah Dijual',
        location: 'BTP, Makassar',
        price: 'Rp 890 Juta',
        priceNum: 890000000,
        roi: 'Bisa KPR Bank DP 0%',
        specs: 'LT 84m² • LB 75m² • 3 KT • 2 KM',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
        verified: true,
        escrow: true,
        distance: '1.2 km dari Anda'
      },
      {
        id: 'near-2',
        title: 'Tanah Strategis Pinggir Jalan Poros Provinsi',
        category: 'listing',
        categoryLabel: 'Tanah Dijual',
        location: 'Poros Maros - Pangkep',
        price: 'Rp 1,5 Miliar',
        priceNum: 1500000000,
        roi: 'Cocok SPBU / Mini Market',
        specs: 'Luas 1.500m² • Lebar Muka 25m',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
        verified: true,
        escrow: true,
        distance: '2.5 km dari Anda'
      },
      {
        id: 'near-3',
        title: 'Sewa Ruko 2 Pintu Lokasi Pasar Sentral',
        category: 'rent',
        categoryLabel: 'Sewa Properti',
        location: 'Sentral Niaga Maros',
        price: 'Rp 60 Jt / Tahun',
        priceNum: 60000000,
        roi: 'Trafik Pengunjung Sangat Padat',
        specs: 'LT 100m² • 2 Lantai • Air PDAM Lancar',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
        verified: true,
        escrow: true,
        distance: '3.1 km dari Anda'
      },
      {
        id: 'near-4',
        title: 'Jasa Arsitektur, Desain Interior & Gambar PBG',
        category: 'layanan',
        categoryLabel: 'Jasa Desain',
        location: 'Makassar & Maros',
        price: 'Mulai Rp 35 Rb / m²',
        priceNum: 35000,
        roi: 'Render 3D Realistis & Garansi Izin',
        specs: 'Gambar Kerja Lengkap + RAB Detail',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
        verified: true,
        escrow: true,
        distance: '3.8 km dari Anda'
      },
      {
        id: 'near-5',
        title: 'Rumah Subsidi Siap Huni Bebas Biaya Akad',
        category: 'listing',
        categoryLabel: 'Rumah Subsidi',
        location: 'Moncongloe, Maros',
        price: 'Rp 168 Juta',
        priceNum: 168000000,
        roi: 'Cicilan Flat Rp 1 Jt-an / Bln',
        specs: 'LT 72m² • LB 36m² • 2 KT • 1 KM',
        image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
        verified: true,
        escrow: true,
        distance: '4.5 km dari Anda'
      },
      {
        id: 'near-6',
        title: 'Sewa Alat Berat & Supply Material Pasir/Batu',
        category: 'layanan',
        categoryLabel: 'Supplier Material',
        location: 'Depot Material Maros',
        price: 'Harga Grosir Armada',
        priceNum: 450000,
        roi: 'Pengiriman Cepat Tepat Waktu',
        specs: 'Excavator, Dump Truck, Ready Mix',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
        verified: true,
        escrow: true,
        distance: '5.0 km dari Anda'
      },
      {
        id: 'near-7',
        title: 'Cluster Townhouse Modern Dekat Kampus Unhas',
        category: 'listing',
        categoryLabel: 'Rumah Dijual',
        location: 'Tamalanrea, Makassar',
        price: 'Rp 1,1 Miliar',
        priceNum: 1100000000,
        roi: 'Potensi Kost Mahasiswa Tinggi',
        specs: 'LT 105m² • LB 110m² • 4 KT • 3 KM',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
        verified: true,
        escrow: true,
        distance: '5.8 km dari Anda'
      },
      {
        id: 'near-8',
        title: 'Lahan Kebun Produktif Buah & Villa Maros',
        category: 'listing',
        categoryLabel: 'Tanah Dijual',
        location: 'Tompobulu, Maros',
        price: 'Rp 450 Juta',
        priceNum: 450000000,
        roi: 'SHM Bersih & Ada Sumber Air',
        specs: 'Luas 3.000m² • Pohon Durian & Rambutan',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
        verified: true,
        escrow: true,
        distance: '7.2 km dari Anda'
      }
    ];

    // --- MAIN APP COMPONENT ---
    function App() {
      // Nav & Filter State
      const [activeCategory, setActiveCategory] = useState('all'); // 'all', 'listing', 'rent', 'layanan'
      const [searchQuery, setSearchQuery] = useState('');
      const [recentLimit, setRecentLimit] = useState(6);
      const [nearLimit, setNearLimit] = useState(6);

      // Favorites State
      const [favorites, setFavorites] = useState(() => {
        try {
          return JSON.parse(localStorage.getItem('nara_favorites') || '[]');
        } catch(e) {
          return [];
        }
      });

      // User Auth State
      const [currentUser, setCurrentUser] = useState(() => {
        try {
          return JSON.parse(localStorage.getItem('nara_current_user') || 'null');
        } catch(e) {
          return null;
        }
      });

      // Modals State
      const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
      const [authTab, setAuthTab] = useState('login'); // 'login' or 'register'
      const [authEmail, setAuthEmail] = useState('');
      const [authPassword, setAuthPassword] = useState('');
      const [authName, setAuthName] = useState('');
      const [authRole, setAuthRole] = useState('Investor');

      const [isListingModalOpen, setIsListingModalOpen] = useState(false);
      const [selectedDetailItem, setSelectedDetailItem] = useState(null);
      
      const [isCareModalOpen, setIsCareModalOpen] = useState(false);
      const [isUpdatesModalOpen, setIsUpdatesModalOpen] = useState(false);
      const [isInboxModalOpen, setIsInboxModalOpen] = useState(false);
      const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
      const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
      const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

      // Form New Listing State
      const [newListingData, setNewListingData] = useState({
        title: '',
        category: 'listing',
        categoryLabel: 'Rumah Dijual',
        location: '',
        price: '',
        specs: '',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        contact: ''
      });

      // Initialize Lucide Icons
      useEffect(() => {
        if (window.lucide) {
          window.lucide.createIcons();
        }
      });

      // Save Favorites to LocalStorage
      const toggleFavorite = (item, e) => {
        e.stopPropagation();
        setFavorites(prev => {
          const exists = prev.some(f => f.id === item.id);
          const updated = exists ? prev.filter(f => f.id !== item.id) : [...prev, item];
          localStorage.setItem('nara_favorites', JSON.stringify(updated));
          return updated;
        });
      };

      const isFav = (id) => favorites.some(f => f.id === id);

      // Filtered lists
      const filteredRecent = useMemo(() => {
        let list = INITIAL_RECENT_LISTINGS;
        if (showFavoritesOnly) {
          list = favorites;
        } else {
          if (activeCategory !== 'all') {
            list = list.filter(item => item.category === activeCategory);
          }
          if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            list = list.filter(item => 
              item.title.toLowerCase().includes(q) || 
              item.location.toLowerCase().includes(q) ||
              item.categoryLabel.toLowerCase().includes(q)
            );
          }
        }
        return list;
      }, [activeCategory, searchQuery, showFavoritesOnly, favorites]);

      const filteredNearby = useMemo(() => {
        let list = INITIAL_NEARBY_PROPERTIES;
        if (showFavoritesOnly) {
          return [];
        }
        if (activeCategory !== 'all') {
          list = list.filter(item => item.category === activeCategory);
        }
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          list = list.filter(item => 
            item.title.toLowerCase().includes(q) || 
            item.location.toLowerCase().includes(q) ||
            item.categoryLabel.toLowerCase().includes(q)
          );
        }
        return list;
      }, [activeCategory, searchQuery, showFavoritesOnly]);

      // Handle Quick Sign In
      const handleAuthSubmit = (e) => {
        e.preventDefault();
        const user = {
          name: authName || (authEmail ? authEmail.split('@')[0] : 'Mitra Terverifikasi'),
          email: authEmail || 'mitra@nara.id',
          role: authRole,
          token: 'nara_mock_token_' + Date.now()
        };
        setCurrentUser(user);
        localStorage.setItem('nara_current_user', JSON.stringify(user));
        setIsAuthModalOpen(false);
      };

      const handleGoogleSso = () => {
        const user = {
          name: 'Maya Nugrawati',
          email: 'nugrawatimaya@gmail.com',
          role: 'Investor & Developer',
          token: 'nara_google_token_' + Date.now()
        };
        setCurrentUser(user);
        localStorage.setItem('nara_current_user', JSON.stringify(user));
        setIsAuthModalOpen(false);
      };

      const handleLogout = () => {
        setCurrentUser(null);
        localStorage.removeItem('nara_current_user');
      };

      // Handle New Listing Form
      const handleListingSubmit = (e) => {
        e.preventDefault();
        const created = {
          id: 'user-list-' + Date.now(),
          title: newListingData.title || 'Properti Baru Ditambahkan',
          category: newListingData.category,
          categoryLabel: newListingData.category === 'listing' ? 'Properti Dijual' : (newListingData.category === 'rent' ? 'Sewa Properti' : 'Layanan Jasa'),
          location: newListingData.location || 'Makassar, Sulawesi Selatan',
          price: newListingData.price || 'Rp 1 Miliar',
          priceNum: 1000000000,
          roi: 'Verifikasi NARA Escrow Active',
          specs: newListingData.specs || 'Spesifikasi terdaftar resmi',
          image: newListingData.image,
          verified: true,
          escrow: true,
          featured: true,
          date: 'Baru saja'
        };
        INITIAL_RECENT_LISTINGS.unshift(created);
        setIsListingModalOpen(false);
        setSelectedDetailItem(created);
      };

      return (
        <div className="min-h-screen flex flex-col justify-between bg-[#f8fafc] text-slate-900">
          
          {/* ============================================================ */}
          {/* 1. TOP NAVIGATION BAR (Exact as sketch)                     */}
          {/* ============================================================ */}
          <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16 sm:h-18">
                
                {/* Left: Nara Hexagon Logo */}
                <div 
                  className="flex items-center gap-3 cursor-pointer group shrink-0"
                  onClick={() => {
                    setActiveCategory('all');
                    setShowFavoritesOnly(false);
                    setSearchQuery('');
                  }}
                >
                  <img 
                    src="./nara-logo.png" 
                    alt="Nara Logo" 
                    className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
                    onError={(e) => {
                      // Fallback SVG logo if image not available
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden h-10 w-10 rounded-xl bg-slate-900 text-white items-center justify-center font-black text-lg shadow-sm">
                    ⬡
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-xs font-black tracking-widest text-slate-900 uppercase block">NARA ECOSYSTEM</span>
                    <span className="text-[10px] text-slate-500 font-semibold">Proptech & Escrow Hub</span>
                  </div>
                </div>

                {/* Center: Main Nav Links (Listing, Rent, Layanan, + LISTING) */}
                <nav className="flex items-center gap-1 sm:gap-2 md:gap-4">
                  
                  {/* Listing Tab */}
                  <button 
                    onClick={() => {
                      setActiveCategory(activeCategory === 'listing' ? 'all' : 'listing');
                      setShowFavoritesOnly(false);
                    }}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                      activeCategory === 'listing' && !showFavoritesOnly
                        ? 'bg-blue-600 text-white shadow-xs' 
                        : 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                    }`}
                  >
                    Listing
                  </button>

                  {/* Rent Tab */}
                  <button 
                    onClick={() => {
                      setActiveCategory(activeCategory === 'rent' ? 'all' : 'rent');
                      setShowFavoritesOnly(false);
                    }}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                      activeCategory === 'rent' && !showFavoritesOnly
                        ? 'bg-blue-600 text-white shadow-xs' 
                        : 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                    }`}
                  >
                    Rent
                  </button>

                  {/* Layanan Tab */}
                  <button 
                    onClick={() => {
                      setActiveCategory(activeCategory === 'layanan' ? 'all' : 'layanan');
                      setShowFavoritesOnly(false);
                    }}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                      activeCategory === 'layanan' && !showFavoritesOnly
                        ? 'bg-blue-600 text-white shadow-xs' 
                        : 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                    }`}
                  >
                    Layanan
                  </button>

                  {/* + LISTING Button (Highlighted) */}
                  <button 
                    onClick={() => setIsListingModalOpen(true)}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-300/80 font-black text-xs sm:text-sm transition-all flex items-center gap-1 cursor-pointer shadow-xs"
                  >
                    <span>+</span>
                    <span>LISTING</span>
                  </button>

                </nav>

                {/* Right: SIGN Button / User Avatar */}
                <div className="shrink-0">
                  {currentUser ? (
                    <div className="flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-xl p-1.5 pr-3 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-xs">
                        {currentUser.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="text-left hidden md:block">
                        <span className="text-xs font-extrabold text-slate-900 block line-clamp-1">{currentUser.name}</span>
                        <span className="text-[10px] text-teal-700 font-bold block">{currentUser.role}</span>
                      </div>
                      <button 
                        onClick={handleLogout}
                        className="ml-1 text-slate-400 hover:text-rose-600 text-xs font-bold p-1"
                        title="Keluar"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => {
                        setAuthTab('login');
                        setIsAuthModalOpen(true);
                      }}
                      className="px-4 py-2 sm:px-5 sm:py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-black text-xs sm:text-sm border-2 border-slate-300 hover:border-slate-400 shadow-xs transition-all cursor-pointer tracking-wide"
                    >
                      SIGN
                    </button>
                  )}
                </div>

              </div>
            </div>
          </header>

          {/* ============================================================ */}
          {/* 2. MAIN LAYOUT: DESKTOP SIDEBAR + RIGHT CONTENT AREA       */}
          {/* ============================================================ */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* DESKTOP LEFT SIDEBAR (Cari, Favorite, Update, Inbox, CS Nara) */}
              <aside className="hidden md:block md:col-span-3 lg:col-span-2 sticky top-24">
                <div className="bg-white border-2 border-slate-200/90 rounded-2xl p-3 shadow-xs space-y-1.5">
                  
                  {/* Item 1: Cari */}
                  <button 
                    onClick={() => setIsSearchOverlayOpen(true)}
                    className="w-full text-left px-3.5 py-3 rounded-xl text-xs font-extrabold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base group-hover:scale-110 transition-transform">🔍</span>
                      <span>Cari</span>
                    </div>
                    <span className="text-[10px] text-slate-400 group-hover:text-blue-500">⌘K</span>
                  </button>

                  {/* Item 2: Favorite */}
                  <button 
                    onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                    className={`w-full text-left px-3.5 py-3 rounded-xl text-xs font-extrabold transition-all flex items-center justify-between group cursor-pointer ${
                      showFavoritesOnly 
                        ? 'bg-rose-50 text-rose-700 border border-rose-200 shadow-xs' 
                        : 'text-slate-700 hover:bg-slate-100 hover:text-rose-600'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base group-hover:scale-110 transition-transform">❤️</span>
                      <span>Favorite</span>
                    </div>
                    {favorites.length > 0 && (
                      <span className="bg-rose-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">
                        {favorites.length}
                      </span>
                    )}
                  </button>

                  {/* Item 3: Update */}
                  <button 
                    onClick={() => setIsUpdatesModalOpen(true)}
                    className="w-full text-left px-3.5 py-3 rounded-xl text-xs font-extrabold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base group-hover:scale-110 transition-transform">🔔</span>
                      <span>Update</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                  </button>

                  {/* Item 4: Inbox */}
                  <button 
                    onClick={() => setIsInboxModalOpen(true)}
                    className="w-full text-left px-3.5 py-3 rounded-xl text-xs font-extrabold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base group-hover:scale-110 transition-transform">💬</span>
                      <span>Inbox</span>
                    </div>
                    <span className="text-[10px] text-teal-700 font-bold bg-teal-50 px-1.5 py-0.5 rounded">
                      Live
                    </span>
                  </button>

                  {/* Item 5: CS Nara */}
                  <button 
                    onClick={() => setIsCareModalOpen(true)}
                    className="w-full text-left px-3.5 py-3 rounded-xl text-xs font-extrabold text-slate-700 hover:bg-teal-50 hover:text-teal-800 transition-all flex items-center justify-between group cursor-pointer border-t border-slate-100 mt-2 pt-3"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base group-hover:scale-110 transition-transform">🎧</span>
                      <span>CS Nara</span>
                    </div>
                    <span className="text-[9px] text-emerald-600 font-black bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      24/7
                    </span>
                  </button>

                </div>

                {/* Quick Banner on Desktop Sidebar */}
                <div className="mt-4 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/80 rounded-2xl p-4 text-center space-y-2">
                  <span className="text-2xl block">🛡️</span>
                  <h4 className="text-xs font-extrabold text-blue-900">Garansi Rekening Escrow</h4>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Dana booking & termin aman 100% hingga serah terima fisik sah.
                  </p>
                </div>
              </aside>

              {/* MAIN CONTENT AREA */}
              <main className="md:col-span-9 lg:col-span-10 space-y-8">
                
                {/* ============================================================ */}
                {/* 2A. HERO SECTION (Clean White with Light Blue Border)       */}
                {/* ============================================================ */}
                <div className="relative overflow-hidden rounded-3xl bg-white border-2 border-blue-200/90 p-6 sm:p-8 lg:p-10 shadow-[0_10px_35px_-10px_rgba(37,99,235,0.08)] text-slate-900">
                  
                  {/* Subtle Light Ambient Glows */}
                  <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl pointer-events-none"></div>
                  <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl pointer-events-none"></div>

                  <div className="relative z-10 max-w-3xl space-y-4">
                    
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold tracking-wide">
                      <span>✨</span>
                      <span>Ekosistem Properti & Konstruksi B2B Terpadu</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900">
                      Solusi Properti, Lahan, & Jasa Konstruksi <span className="text-blue-600 block mt-1">Bergaransi Rekening Escrow NARA</span>
                    </h1>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                      Temukan ratusan listing tanah siap bangun, sewa ruko komersial, rumah hunian, hingga jasa notaris & kontraktor bersertifikasi resmi dalam satu pintu.
                    </p>

                    {/* Integrated Search Input in Hero */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-2 max-w-2xl">
                      <div className="relative flex-1 w-full">
                        <input 
                          type="text"
                          placeholder="Cari lokasi, kota, tipe properti (misal: Maros, Ruko, Notaris)..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-4 pr-10 py-3 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-inner"
                        />
                        {searchQuery && (
                          <button 
                            onClick={() => setSearchQuery('')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                          >
                            ✕
                          </button>
                        )}
                      </div>

                      <button 
                        onClick={() => setIsListingModalOpen(true)}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all cursor-pointer shrink-0 flex items-center justify-center gap-1.5"
                      >
                        <span>➕</span>
                        <span>Pasang Listing</span>
                      </button>
                    </div>

                    {/* Quick Filter Badges */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-xs font-bold text-slate-400">Paling dicari:</span>
                      {[
                        { label: 'Semua', cat: 'all' },
                        { label: '🏠 Rumah Dijual', cat: 'listing' },
                        { label: '🏢 Sewa Ruko', cat: 'rent' },
                        { label: '📜 Notaris & PPAT', cat: 'layanan' },
                        { label: '🔨 Kontraktor', cat: 'layanan' },
                      ].map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setActiveCategory(item.cat);
                            setShowFavoritesOnly(false);
                          }}
                          className={`px-3 py-1 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                            activeCategory === item.cat && !showFavoritesOnly
                              ? 'bg-blue-600 text-white shadow-xs' 
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                  </div>
                </div>

                {/* ============================================================ */}
                {/* 2B. SECTION 1: TERAKHIR DILIHAT (6 Cards Grid)              */}
                {/* ============================================================ */}
                <section className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                        <span>Terakhir Dilihat</span>
                        {showFavoritesOnly && (
                          <span className="text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200 px-2 py-0.5 rounded-full">
                            Mode Favorit
                          </span>
                        )}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium">
                        Listing properti dan jasa terbaru yang baru saja diperbarui
                      </p>
                    </div>
                    {showFavoritesOnly && (
                      <button 
                        onClick={() => setShowFavoritesOnly(false)}
                        className="text-xs font-extrabold text-blue-600 hover:underline"
                      >
                        Tampilkan Semua
                      </button>
                    )}
                  </div>

                  {filteredRecent.length === 0 ? (
                    <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl p-10 text-center space-y-2">
                      <span className="text-3xl">🔍</span>
                      <h4 className="text-sm font-extrabold text-slate-800">Tidak ada listing ditemukan</h4>
                      <p className="text-xs text-slate-500">Coba ubah kata kunci pencarian atau reset filter kategori.</p>
                      <button 
                        onClick={() => { setActiveCategory('all'); setSearchQuery(''); setShowFavoritesOnly(false); }}
                        className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-extrabold mt-2 cursor-pointer"
                      >
                        Reset Filter
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                      {filteredRecent.slice(0, recentLimit).map((item) => (
                        <div 
                          key={item.id}
                          onClick={() => setSelectedDetailItem(item)}
                          className="bg-white border-2 border-slate-200 hover:border-blue-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between"
                        >
                          <div>
                            {/* Card Image */}
                            <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                              />
                              
                              {/* Category Badge */}
                              <div className="absolute top-3 left-3">
                                <span className="bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-lg border border-white/20">
                                  {item.categoryLabel}
                                </span>
                              </div>

                              {/* Favorite Heart Button */}
                              <button 
                                onClick={(e) => toggleFavorite(item, e)}
                                className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md ${
                                  isFav(item.id) 
                                    ? 'bg-rose-500 text-white' 
                                    : 'bg-white/90 hover:bg-white text-slate-700'
                                }`}
                                title="Simpan ke Favorit"
                              >
                                {isFav(item.id) ? '❤️' : '🤍'}
                              </button>

                              {/* Verified Escrow Tag */}
                              <div className="absolute bottom-3 left-3">
                                <span className="bg-emerald-600/90 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md flex items-center gap-1">
                                  <span>🛡️</span>
                                  <span>Verified NARA</span>
                                </span>
                              </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-4 space-y-2">
                              <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                                <span className="flex items-center gap-1">
                                  <span>📍</span>
                                  <span className="line-clamp-1">{item.location}</span>
                                </span>
                                <span>{item.date}</span>
                              </div>

                              <h3 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                                {item.title}
                              </h3>

                              <p className="text-xs text-slate-500 font-medium line-clamp-1">
                                {item.specs}
                              </p>
                            </div>
                          </div>

                          {/* Card Footer: Price & CTA */}
                          <div className="px-4 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between">
                            <div>
                              <span className="text-[10px] text-slate-400 block font-semibold">Harga / Nilai</span>
                              <strong className="text-sm sm:text-base font-black text-blue-700">{item.price}</strong>
                            </div>
                            <span className="text-xs font-black text-slate-700 group-hover:text-blue-600 flex items-center gap-1">
                              <span>Detail</span>
                              <span className="group-hover:translate-x-1 transition-transform">➔</span>
                            </span>
                          </div>

                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tampilkan Lebih Banyak Link (Exact as sketch) */}
                  {filteredRecent.length > recentLimit && (
                    <div className="text-center pt-2">
                      <button 
                        onClick={() => setRecentLimit(prev => prev + 6)}
                        className="inline-block text-xs sm:text-sm font-black text-slate-900 hover:text-blue-600 border-b-2 border-slate-900 hover:border-blue-600 pb-0.5 transition-all cursor-pointer uppercase tracking-wider"
                      >
                        Tampilkan Lebih Banyak
                      </button>
                    </div>
                  )}
                </section>

                {/* ============================================================ */}
                {/* 2C. SECTION 2: PROPERTY DI SEKITARMU (6 Cards Grid)         */}
                {/* ============================================================ */}
                {!showFavoritesOnly && (
                  <section className="space-y-4 pt-4 border-t border-slate-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                          Property Di Sekitarmu
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium">
                          Listing dan jasa terdekat berdasarkan lokasi geospasial Anda
                        </p>
                      </div>
                      <span className="text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full hidden sm:inline-block">
                        📍 Lokasi Terdeteksi: Maros & Makassar
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                      {filteredNearby.slice(0, nearLimit).map((item) => (
                        <div 
                          key={item.id}
                          onClick={() => setSelectedDetailItem(item)}
                          className="bg-white border-2 border-slate-200 hover:border-blue-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between"
                        >
                          <div>
                            {/* Card Image */}
                            <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                              />
                              
                              {/* Category Badge */}
                              <div className="absolute top-3 left-3">
                                <span className="bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-lg border border-white/20">
                                  {item.categoryLabel}
                                </span>
                              </div>

                              {/* Distance Badge */}
                              <div className="absolute bottom-3 right-3">
                                <span className="bg-blue-600/95 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                                  {item.distance}
                                </span>
                              </div>

                              {/* Favorite Heart Button */}
                              <button 
                                onClick={(e) => toggleFavorite(item, e)}
                                className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md ${
                                  isFav(item.id) 
                                    ? 'bg-rose-500 text-white' 
                                    : 'bg-white/90 hover:bg-white text-slate-700'
                                }`}
                                title="Simpan ke Favorit"
                              >
                                {isFav(item.id) ? '❤️' : '🤍'}
                              </button>
                            </div>

                            {/* Card Body */}
                            <div className="p-4 space-y-2">
                              <div className="flex items-center text-[11px] text-slate-500 font-semibold gap-1">
                                <span>📍</span>
                                <span className="line-clamp-1">{item.location}</span>
                              </div>

                              <h3 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                                {item.title}
                              </h3>

                              <p className="text-xs text-slate-500 font-medium line-clamp-1">
                                {item.specs}
                              </p>
                            </div>
                          </div>

                          {/* Card Footer: Price & CTA */}
                          <div className="px-4 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between">
                            <div>
                              <span className="text-[10px] text-slate-400 block font-semibold">Harga / Tarif</span>
                              <strong className="text-sm sm:text-base font-black text-teal-700">{item.price}</strong>
                            </div>
                            <span className="text-xs font-black text-slate-700 group-hover:text-blue-600 flex items-center gap-1">
                              <span>Detail</span>
                              <span className="group-hover:translate-x-1 transition-transform">➔</span>
                            </span>
                          </div>

                        </div>
                      ))}
                    </div>

                    {/* Tampilkan Lebih Banyak Link */}
                    {filteredNearby.length > nearLimit && (
                      <div className="text-center pt-2">
                        <button 
                          onClick={() => setNearLimit(prev => prev + 6)}
                          className="inline-block text-xs sm:text-sm font-black text-slate-900 hover:text-blue-600 border-b-2 border-slate-900 hover:border-blue-600 pb-0.5 transition-all cursor-pointer uppercase tracking-wider"
                        >
                          Tampilkan Lebih Banyak
                        </button>
                      </div>
                    )}
                  </section>
                )}

              </main>

            </div>
          </div>

          {/* ============================================================ */}
          {/* 3. RUNNING ANNOUNCEMENT MARQUEE (Exact as sketch)          */}
          {/* ============================================================ */}
          <div className="bg-white border-y-2 border-slate-200 py-3 overflow-hidden select-none">
            <div className="animate-marquee-infinite text-xs sm:text-sm font-black tracking-widest text-slate-800 uppercase flex items-center gap-8">
              <span>PASANG LISTING ANDA DI SINI GRATIS</span>
              <span className="text-slate-300">//</span>
              <span>PASANG LISTING ANDA DI SINI GRATIS</span>
              <span className="text-slate-300">//</span>
              <span>PASANG LISTING ANDA DI SINI GRATIS</span>
              <span className="text-slate-300">//</span>
              <span>PASANG LISTING ANDA DI SINI GRATIS</span>
              <span className="text-slate-300">//</span>
              <span>PASANG LISTING ANDA DI SINI GRATIS</span>
              <span className="text-slate-300">//</span>
              <span>PASANG LISTING ANDA DI SINI GRATIS</span>
              <span className="text-slate-300">//</span>
              <span>PASANG LISTING ANDA DI SINI GRATIS</span>
              <span className="text-slate-300">//</span>
              <span>PASANG LISTING ANDA DI SINI GRATIS</span>
              <span className="text-slate-300">//</span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* 4. CLEAN FOOTER BOX (Exact as sketch)                       */}
          {/* ============================================================ */}
          <footer className="max-w-4xl mx-auto px-4 py-8 w-full">
            <div className="bg-white border-2 border-slate-200/90 rounded-2xl p-6 text-center space-y-3 shadow-xs">
              
              {/* Tentang Kami Button / Link */}
              <div>
                <button 
                  onClick={() => setIsAboutModalOpen(true)}
                  className="inline-block text-xs sm:text-sm font-black text-slate-900 hover:text-blue-600 border-b-2 border-slate-900 hover:border-blue-600 pb-0.5 transition-all cursor-pointer uppercase tracking-wider"
                >
                  Tentang Kami
                </button>
              </div>

              {/* Social Media Channels */}
              <div className="text-xs sm:text-sm text-slate-600 font-medium pt-1">
                <span>Temukan Kami Di : </span>
                <span className="font-bold text-slate-900 space-x-1">
                  <a href="https://facebook.com" target="_blank" className="hover:text-blue-600 transition-colors">Facebook</a>,
                  <a href="https://instagram.com" target="_blank" className="hover:text-pink-600 transition-colors"> Instagram</a>,
                  <a href="https://x.com" target="_blank" className="hover:text-slate-950 transition-colors"> X</a>,
                  <a href="https://tiktok.com" target="_blank" className="hover:text-slate-950 transition-colors"> Tiktok</a>,
                  <a href="https://linkedin.com" target="_blank" className="hover:text-blue-700 transition-colors"> LinkedIn</a>
                </span>
              </div>

              <div className="text-[11px] text-slate-400 font-semibold pt-2 border-t border-slate-100">
                © 2026 NaraEcosystem® Indonesia. All rights reserved. Platform Jual, Beli, Sewa Properti & Escrow.
              </div>

            </div>
          </footer>

          {/* ============================================================ */}
          {/* 5. MOBILE BOTTOM NAVIGATION BAR (Fixed at bottom on mobile)  */}
          {/* ============================================================ */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2 flex items-center justify-around shadow-lg">
            
            {/* Cari */}
            <button 
              onClick={() => setIsSearchOverlayOpen(true)}
              className="flex flex-col items-center gap-1 text-slate-600 hover:text-blue-600 p-1"
            >
              <span className="text-lg">🔍</span>
              <span className="text-[10px] font-extrabold">Cari</span>
            </button>

            {/* Favorite */}
            <button 
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`flex flex-col items-center gap-1 p-1 relative ${showFavoritesOnly ? 'text-rose-600' : 'text-slate-600 hover:text-rose-600'}`}
            >
              <span className="text-lg">❤️</span>
              <span className="text-[10px] font-extrabold">Favorite</span>
              {favorites.length > 0 && (
                <span className="absolute -top-1 right-1 bg-rose-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Update */}
            <button 
              onClick={() => setIsUpdatesModalOpen(true)}
              className="flex flex-col items-center gap-1 text-slate-600 hover:text-blue-600 p-1"
            >
              <span className="text-lg">🔔</span>
              <span className="text-[10px] font-extrabold">Update</span>
            </button>

            {/* Inbox */}
            <button 
              onClick={() => setIsInboxModalOpen(true)}
              className="flex flex-col items-center gap-1 text-slate-600 hover:text-blue-600 p-1"
            >
              <span className="text-lg">💬</span>
              <span className="text-[10px] font-extrabold">Inbox</span>
            </button>

            {/* CS Nara */}
            <button 
              onClick={() => setIsCareModalOpen(true)}
              className="flex flex-col items-center gap-1 text-teal-700 p-1"
            >
              <span className="text-lg">🎧</span>
              <span className="text-[10px] font-extrabold">CS Nara</span>
            </button>

          </div>

          {/* ============================================================ */}
          {/* 6. MODALS & DRAWERS (No Dummy Pages, Fully Functional)       */}
          {/* ============================================================ */}

          {/* A. AUTH MODAL (SIGN IN / REGISTER / GOOGLE SSO) */}
          {isAuthModalOpen && (
            <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white border-2 border-slate-300 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🔐</span>
                    <h3 className="text-lg font-black text-slate-900">
                      {authTab === 'login' ? 'Masuk ke Akun NARA' : 'Daftar Mitra NARA'}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setIsAuthModalOpen(false)}
                    className="text-slate-400 hover:text-slate-700 text-lg font-bold p-1"
                  >
                    ✕
                  </button>
                </div>

                {/* Google SSO Button */}
                <button
                  type="button"
                  onClick={handleGoogleSso}
                  className="w-full py-3 px-4 bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-800 font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-xs flex items-center justify-center gap-3 cursor-pointer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span>Lanjutkan dengan Google</span>
                </button>

                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-slate-200"></div>
                  <span className="text-[11px] font-bold text-slate-400">ATAU EMAIL / NO. HP</span>
                  <div className="flex-1 h-px bg-slate-200"></div>
                </div>

                <form onSubmit={handleAuthSubmit} className="space-y-3.5">
                  {authTab === 'register' && (
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Nama Lengkap</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Contoh: Budi Santoso"
                        value={authName}
                        onChange={(e) => setAuthName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Email / Nomor WhatsApp</label>
                    <input 
                      type="text" 
                      required
                      placeholder="contoh@gmail.com / 08123456789"
                      value={authEmail}
                      onChange={(e) => setAuthEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Kata Sandi</label>
                    <input 
                      type="password" 
                      required
                      placeholder="••••••••"
                      value={authPassword}
                      onChange={(e) => setAuthPassword(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  {authTab === 'register' && (
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Peran Utama Anda</label>
                      <select 
                        value={authRole}
                        onChange={(e) => setAuthRole(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="Investor">Investor Properti / Modal</option>
                        <option value="Pemilik Lahan">Pemilik Lahan & Developer</option>
                        <option value="Kontraktor">Kontraktor Sipil & Bangunan</option>
                        <option value="Notaris">Notaris & PPAT</option>
                        <option value="Agen Marketing">Agen Marketing & Broker</option>
                        <option value="Pembeli Umum">Masyarakat Umum / Pembeli</option>
                      </select>
                    </div>
                  )}

                  <button 
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                  >
                    {authTab === 'login' ? 'Masuk Sekarang' : 'Daftar Akun NARA'}
                  </button>
                </form>

                <div className="text-center pt-2">
                  <button 
                    type="button"
                    onClick={() => setAuthTab(authTab === 'login' ? 'register' : 'login')}
                    className="text-xs font-bold text-blue-600 hover:underline"
                  >
                    {authTab === 'login' ? 'Belum punya akun? Daftar di sini' : 'Sudah punya akun? Masuk di sini'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* B. + LISTING MODAL */}
          {isListingModalOpen && (
            <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white border-2 border-slate-300 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">➕</span>
                    <h3 className="text-lg font-black text-slate-900">Pasang Listing Gratis</h3>
                  </div>
                  <button 
                    onClick={() => setIsListingModalOpen(false)}
                    className="text-slate-400 hover:text-slate-700 text-lg font-bold p-1"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleListingSubmit} className="space-y-3.5">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Judul Listing / Properti</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Contoh: Rumah Minimalis 2 Lantai Dekat Bandara"
                      value={newListingData.title}
                      onChange={(e) => setNewListingData({...newListingData, title: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Kategori</label>
                      <select 
                        value={newListingData.category}
                        onChange={(e) => setNewListingData({...newListingData, category: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="listing">Listing (Jual Properti/Tanah)</option>
                        <option value="rent">Rent (Sewa Ruko/Rumah/Villa)</option>
                        <option value="layanan">Layanan (Jasa/Notaris/Kontraktor)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Harga / Tarif</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Contoh: Rp 750 Juta"
                        value={newListingData.price}
                        onChange={(e) => setNewListingData({...newListingData, price: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Lokasi Properti / Jasa</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Contoh: Maros, Sulawesi Selatan"
                      value={newListingData.location}
                      onChange={(e) => setNewListingData({...newListingData, location: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Spesifikasi Singkat</label>
                    <input 
                      type="text" 
                      placeholder="Contoh: LT 120m² • LB 80m² • 3 KT • SHM"
                      value={newListingData.specs}
                      onChange={(e) => setNewListingData({...newListingData, specs: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">URL Foto Properti</label>
                    <input 
                      type="text" 
                      placeholder="https://..."
                      value={newListingData.image}
                      onChange={(e) => setNewListingData({...newListingData, image: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-800 space-y-1">
                    <span className="font-extrabold block">🛡️ Proteksi NARA Escrow Active</span>
                    <span>Listing Anda otomatis mendapatkan verifikasi awal dan dilindungi Rekening Bersama.</span>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    Tayangkan Listing Sekarang
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* C. DETAIL ITEM MODAL */}
          {selectedDetailItem && (
            <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white border-2 border-slate-300 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
                <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[10px] font-black bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded uppercase">
                      {selectedDetailItem.categoryLabel}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-1">{selectedDetailItem.title}</h3>
                    <span className="text-xs text-slate-500 font-semibold flex items-center gap-1 mt-0.5">
                      📍 {selectedDetailItem.location}
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedDetailItem(null)}
                    className="text-slate-400 hover:text-slate-700 text-xl font-bold p-1"
                  >
                    ✕
                  </button>
                </div>

                <div className="relative rounded-2xl overflow-hidden h-60 sm:h-72 bg-slate-100 border border-slate-200">
                  <img 
                    src={selectedDetailItem.image} 
                    alt={selectedDetailItem.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <button 
                      onClick={(e) => toggleFavorite(selectedDetailItem, e)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md ${isFav(selectedDetailItem.id) ? 'bg-rose-500 text-white' : 'bg-white text-slate-700'}`}
                    >
                      {isFav(selectedDetailItem.id) ? '❤️' : '🤍'}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-[10px] text-slate-400 block font-semibold">Harga / Nilai</span>
                    <strong className="text-base font-black text-blue-700">{selectedDetailItem.price}</strong>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-[10px] text-slate-400 block font-semibold">Spesifikasi</span>
                    <strong className="text-slate-800 font-extrabold block line-clamp-1">{selectedDetailItem.specs}</strong>
                  </div>
                  <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-emerald-600 block font-semibold">Status Proteksi</span>
                    <strong className="text-emerald-800 font-extrabold">100% Escrow Active</strong>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                  <h4 className="font-extrabold text-slate-900 text-sm">Deskripsi & Legalitas</h4>
                  <p>
                    Listing ini telah terdaftar di database <strong>NaraEcosystem®</strong>. Setiap kesepakatan transaksi, pembayaran booking fee, serta termin konstruksi dilindungi oleh Rekening Bersama Escrow NARA dan diawasi oleh Notaris Mitra PPAT resmi.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a 
                    href="https://wa.me/6281244445555?text=Halo%20NARA%20Care,%20saya%20tertarik%20dengan%20listing:%20" 
                    target="_blank"
                    className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm rounded-xl text-center shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>💬</span>
                    <span>Hubungi via WhatsApp Escrow</span>
                  </a>
                  <button 
                    onClick={() => {
                      setSelectedDetailItem(null);
                      setIsCareModalOpen(true);
                    }}
                    className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs sm:text-sm rounded-xl border border-slate-300 transition-all cursor-pointer"
                  >
                    Konsultasi Due Diligence
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* D. SEARCH OVERLAY MODAL */}
          {isSearchOverlayOpen && (
            <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-start justify-center p-4 pt-20">
              <div className="bg-white border-2 border-slate-300 rounded-3xl p-6 max-w-xl w-full shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                    <span>🔍</span>
                    <span>Pencarian Cepat NARA</span>
                  </h3>
                  <button 
                    onClick={() => setIsSearchOverlayOpen(false)}
                    className="text-slate-400 hover:text-slate-700 text-lg font-bold"
                  >
                    ✕
                  </button>
                </div>

                <input 
                  type="text"
                  autoFocus
                  placeholder="Ketik nama properti, lokasi (Makassar/Maros), tipe..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <div className="flex flex-wrap gap-2">
                  {['Rumah Dijual', 'Tanah Maros', 'Sewa Ruko Panakkukang', 'Notaris PPAT', 'Kontraktor'].map((tag, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSearchQuery(tag);
                        setIsSearchOverlayOpen(false);
                      }}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-xs font-bold rounded-lg transition-all"
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <div className="text-right pt-2">
                  <button 
                    onClick={() => setIsSearchOverlayOpen(false)}
                    className="px-5 py-2 bg-blue-600 text-white rounded-xl text-xs font-black"
                  >
                    Tampilkan Hasil
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* E. UPDATE MODAL */}
          {isUpdatesModalOpen && (
            <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white border-2 border-slate-300 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                    <span>🔔</span>
                    <span>Update & Aktivitas Ekosistem</span>
                  </h3>
                  <button onClick={() => setIsUpdatesModalOpen(false)} className="text-slate-400 hover:text-slate-700 font-bold">✕</button>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl space-y-1">
                    <span className="font-extrabold text-blue-900 block">⚡ Pencairan Termin Escrow #8849</span>
                    <p className="text-slate-600">Rp 2,5 Miliar termin pondasi proyek Sunrise City Maros berhasil dicairkan ke Kontraktor & Toko Bangunan.</p>
                    <span className="text-[10px] text-slate-400">10 menit lalu</span>
                  </div>
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
                    <span className="font-extrabold text-emerald-900 block">✅ Validasi Legalitas Lahan Maros</span>
                    <p className="text-slate-600">Notaris Hj. Ratna Juwita menyelesaikan due diligence SHM seluas 1.500m².</p>
                    <span className="text-[10px] text-slate-400">1 jam lalu</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* F. INBOX MODAL */}
          {isInboxModalOpen && (
            <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white border-2 border-slate-300 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                    <span>💬</span>
                    <span>Kotak Pesan & Konsultasi</span>
                  </h3>
                  <button onClick={() => setIsInboxModalOpen(false)} className="text-slate-400 hover:text-slate-700 font-bold">✕</button>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <span className="font-extrabold text-slate-900 block">Nara Helpdesk Center</span>
                    <p className="text-slate-600">Selamat datang di NaraEcosystem! Ada yang bisa kami bantu terkait transaksi Escrow atau pemasangan listing?</p>
                  </div>
                  <a 
                    href="https://wa.me/6281244445555" 
                    target="_blank"
                    className="block w-full py-2.5 bg-emerald-600 text-white rounded-xl text-center font-extrabold text-xs cursor-pointer"
                  >
                    Buka Chat Langsung WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* G. CS NARA CARE MODAL */}
          {isCareModalOpen && (
            <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white border-2 border-slate-300 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                    <span>🎧</span>
                    <span>Nara Care 24/7 Support</span>
                  </h3>
                  <button onClick={() => setIsCareModalOpen(false)} className="text-slate-400 hover:text-slate-700 font-bold">✕</button>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Layanan bantuan transaksi, panduan pencairan dana rekening bersama Escrow, dan verifikasi sertifikat properti.
                </p>
                <div className="space-y-2 text-xs">
                  <a 
                    href="https://wa.me/6281244445555" 
                    target="_blank"
                    className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl font-bold flex items-center justify-between hover:bg-emerald-100 transition-colors"
                  >
                    <span>💬 WhatsApp Hotline: +62 812-4444-5555</span>
                    <span>➔</span>
                  </a>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700">
                    <span>📧 Email Support: <strong>care@nara.id</strong></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* H. TENTANG KAMI MODAL */}
          {isAboutModalOpen && (
            <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white border-2 border-slate-300 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-black text-slate-900">Tentang NaraEcosystem®</h3>
                  <button onClick={() => setIsAboutModalOpen(false)} className="text-slate-400 hover:text-slate-700 font-bold">✕</button>
                </div>
                <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                  <p>
                    <strong>NaraEcosystem®</strong> adalah platform terintegrasi Proptech & Escrow Marketplace yang menghubungkan Pemilik Lahan, Investor, Kontraktor, Toko Bangunan, Notaris, dan Pembeli Properti dalam satu ekosistem transaksi yang aman, transparan, dan terpercaya.
                  </p>
                  <p>
                    Dilengkapi dengan teknologi <strong>Rekening Bersama Escrow</strong> untuk menjamin setiap sen dana investasi dan pembayaran termin fisik bangunan terbayar secara tepat waktu tanpa risiko sengketa.
                  </p>
                </div>
                <div className="pt-2 text-right">
                  <button 
                    onClick={() => setIsAboutModalOpen(false)}
                    className="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-black"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      );
    }

    // Render React Root
    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  </script>
</body>
</html>

