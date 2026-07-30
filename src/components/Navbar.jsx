import React from 'react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  onOpenAbout,
  onOpenListing,
  onOpenCare,
  globalSearchQuery,
  setGlobalSearchQuery,
  searchCategory,
  setSearchCategory,
  setActiveCategory,
  onOpenLogin,
  onOpenRegister
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-xs">
      
      {/* TOP BAR 1: TOKOPEDIA-STYLE MINIMALIST LIGHT SLATE */}
      <div className="bg-slate-100/80 border-b border-slate-200/80 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-end gap-6 font-medium text-slate-600">
          <button 
            onClick={onOpenAbout}
            className="hover:text-[#0d9488] transition-colors cursor-pointer"
          >
            Tentang Nara Ecosystem
          </button>

          <button 
            onClick={onOpenListing}
            className="hover:text-[#0d9488] transition-colors cursor-pointer"
          >
            Mulai Pasang Listing
          </button>

          <button 
            onClick={onOpenCare}
            className="hover:text-[#0d9488] transition-colors cursor-pointer"
          >
            Nara Care
          </button>
        </div>
      </div>

      {/* MAIN HEADER BAR: LOGO NARA ECOSYSTEM + KATEGORI + PENCARIAN + MASUK & DAFTAR */}
      <div className="bg-white border-b border-slate-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Left: Logo Gambar Resmi NaraEcosystem */}
          <div className="flex items-center cursor-pointer shrink-0" onClick={onOpenAbout}>
            <img 
              src="./nara-logo.png" 
              alt="NaraEcosystem® Logo" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>

          {/* Center: Select Kategori & Kolom Pencarian */}
          <div className="flex flex-1 items-center gap-2 max-w-2xl w-full">
            
            {/* Select Kategori */}
            <select 
              value={searchCategory || 'all'}
              onChange={(e) => {
                if (setSearchCategory) setSearchCategory(e.target.value);
                if (e.target.value !== 'all' && setActiveCategory) {
                  setActiveTab('marketplace');
                  setActiveCategory(e.target.value);
                }
              }}
              className="bg-slate-50 border border-slate-300 text-slate-800 text-xs font-bold rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1ac1b9] shadow-sm shrink-0 cursor-pointer"
            >
              <option value="all">📂 Semua Kategori</option>
              <option value="projects">🏢 Properti & Lahan Investasi</option>
              <option value="contractors">👷 Kontraktor & Sub-Work</option>
              <option value="materials">🏪 Toko Bangunan & Material</option>
              <option value="legal">📜 Notaris & Jasa Legalitas</option>
            </select>

            {/* Kolom Pencarian */}
            <div className="relative flex-1">
              <input 
                type="text"
                placeholder="Cari lahan, rumah, jasa kontraktor, toko material, atau notaris..."
                value={globalSearchQuery || ''}
                onChange={(e) => {
                  if (setGlobalSearchQuery) setGlobalSearchQuery(e.target.value);
                  if (e.target.value.length > 0) setActiveTab('marketplace');
                }}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-3.5 pr-12 py-2 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1ac1b9] shadow-sm"
              />
              <button 
                onClick={() => setActiveTab('marketplace')}
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#1ac1b9] hover:bg-[#16a39d] text-slate-950 font-bold p-1 px-2.5 rounded-lg text-xs transition-all cursor-pointer shadow-sm"
              >
                Cari
              </button>
            </div>

          </div>

          {/* Right: Panel Tombol MASUK & DAFTAR (STYLE TOKOPEDIA) */}
          <div className="flex items-center gap-2 shrink-0">
            <button 
              onClick={onOpenLogin}
              className="px-4 py-1.5 bg-white hover:bg-teal-50/50 text-[#0d9488] font-extrabold text-xs rounded-lg border border-[#0d9488] transition-all cursor-pointer"
            >
              Masuk
            </button>

            <button 
              onClick={onOpenRegister}
              className="px-4 py-1.5 bg-[#1ac1b9] hover:bg-[#16a39d] text-slate-950 font-extrabold text-xs rounded-lg shadow-sm transition-all cursor-pointer"
            >
              Daftar
            </button>
          </div>

        </div>
      </div>

    </header>
  );
}
