import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  Filter, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  HardHat, 
  Store, 
  FileCheck, 
  Scale,
  Users,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  DollarSign,
  PlusCircle,
  Truck
} from 'lucide-react';
import { PROPERTY_PROJECTS, CONTRACTORS, MATERIAL_SUPPLIERS, NOTARIES, ACTORS } from '../data/mockData';

export default function EcosystemMarketplace({ selectedActor, onOpenEscrowDeal }) {
  const [activeCategory, setActiveCategory] = useState('projects'); // 'projects', 'contractors', 'materials', 'legal'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All');

  // Filtered lists
  const filteredProjects = PROPERTY_PROJECTS.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredContractors = CONTRACTORS.filter(c => 
    c.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSuppliers = MATERIAL_SUPPLIERS.filter(m => 
    m.storeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredNotaries = NOTARIES.filter(n => 
    n.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    n.jurisdiction.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Marketplace Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">NARA Ecosystem Network</span>
          <h1 className="text-3xl font-black text-white tracking-tight">Marketplace Multi-Aktor Properti & Konstruksi</h1>
          <p className="text-xs text-slate-400">Temukan peluang investasi, jasa pemborongan, suplier material, & legalitas terverifikasi.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1 bg-slate-900/80 p-1.5 rounded-xl border border-white/10">
          <button
            onClick={() => setActiveCategory('projects')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeCategory === 'projects'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Investasi & Lahan</span>
          </button>

          <button
            onClick={() => setActiveCategory('contractors')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeCategory === 'contractors'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <HardHat className="w-4 h-4" />
            <span>Kontraktor & Sub</span>
          </button>

          <button
            onClick={() => setActiveCategory('materials')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeCategory === 'materials'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Store className="w-4 h-4" />
            <span>Toko Bangunan</span>
          </button>

          <button
            onClick={() => setActiveCategory('legal')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeCategory === 'legal'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>Notaris & Legal</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="glass-panel p-4 flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari berdasarkan nama proyek, lokasi, nama toko material, atau spesifikasi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/90 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select 
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="bg-slate-900 border border-white/10 text-xs text-slate-300 rounded-xl px-3 py-2.5 focus:outline-none"
          >
            <option value="All">📍 Seluruh Wilayah (Jabodetabek & Bali)</option>
            <option value="BSD">Tangerang & BSD</option>
            <option value="Jakarta">DKI Jakarta</option>
            <option value="Bali">Bali</option>
          </select>
          
          <button 
            onClick={() => { setSearchQuery(''); setSelectedLocation('All'); }}
            className="px-3 py-2.5 bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-medium rounded-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Reset Filter
          </button>
        </div>
      </div>

      {/* Category 1: Projects / Properties */}
      {activeCategory === 'projects' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(proj => {
            const fundingPercent = Math.round((proj.collectedInvestment / proj.targetInvestment) * 100);
            return (
              <div key={proj.id} className="glass-panel overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={proj.image} 
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-bold text-[10px] uppercase px-2.5 py-1 rounded-full shadow-lg">
                      {proj.category}
                    </span>
                    <span className="absolute top-3 right-3 bg-emerald-500/90 backdrop-blur text-white font-bold text-[10px] px-2.5 py-1 rounded-full border border-emerald-300/40">
                      NARA Escrow Verified
                    </span>
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-slate-200 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{proj.location}</span>
                    </div>
                  </div>

                  <div className="p-5 space-y-4">
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2">{proj.description}</p>

                    {/* Funding Progress Bar */}
                    <div className="space-y-1.5 bg-slate-900 p-3 rounded-xl border border-white/5">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-400">Target Investasi:</span>
                        <span className="text-amber-300">Rp {(proj.targetInvestment / 1000000000).toFixed(1)} Miliar</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full"
                          style={{ width: `${fundingPercent}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-400">
                        <span>Terkumpul: {fundingPercent}%</span>
                        <span className="text-emerald-400 font-semibold">ROI: {proj.projectedRoi}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-400">Notaris Pendamping:</span>
                        <span className="font-semibold text-slate-200">{proj.assignedNotary.split(',')[0]}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-400">Kontraktor Pelaksana:</span>
                        <span className="font-semibold text-slate-200">{proj.assignedContractor}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-400">Legal Risk Score:</span>
                        <span className="font-bold text-emerald-400">{proj.riskScore.split(' ')[0]} {proj.riskScore.split(' ')[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={onOpenEscrowDeal}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-amber-300 font-bold text-xs transition-all border border-amber-500/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Masuk NARA Escrow Deal Room</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Category 2: Contractors */}
      {activeCategory === 'contractors' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredContractors.map(c => (
            <div key={c.id} className="glass-panel p-6 border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between">
              <div className="flex gap-4">
                <img src={c.image} alt={c.companyName} className="w-20 h-20 rounded-2xl object-cover border border-white/10" />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-white">{c.companyName}</h3>
                    <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded">
                      {c.naraBadge}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-amber-400">{c.specialty}</p>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" /> {c.location} | License: {c.license}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 bg-slate-900/80 p-3 rounded-xl border border-white/5 my-4 text-center">
                <div>
                  <div className="text-[10px] text-slate-400">Rating Performance</div>
                  <div className="text-sm font-bold text-amber-400">⭐ {c.rating} / 5.0</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Proyek Selesai</div>
                  <div className="text-sm font-bold text-white">{c.completedProjects} Proyek</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Total Track Value</div>
                  <div className="text-sm font-bold text-emerald-400">{c.completedValue}</div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 text-xs pt-2">
                <span className="text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Jaminan Termin via Escrow NARA
                </span>
                <button 
                  onClick={onOpenEscrowDeal}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition-all cursor-pointer"
                >
                  Ajukan Bidding Proyek
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Category 3: Building Materials */}
      {activeCategory === 'materials' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSuppliers.map(s => (
            <div key={s.id} className="glass-panel p-6 border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between">
              <div className="flex gap-4">
                <img src={s.image} alt={s.storeName} className="w-20 h-20 rounded-2xl object-cover border border-white/10" />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-white">{s.storeName}</h3>
                    <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold px-2 py-0.5 rounded">
                      NARA Supply Chain Partner
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-300">{s.category}</p>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" /> {s.location} | Armada: {s.deliveryFleet}
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/90 p-3 rounded-xl border border-white/5 my-4 space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Sistem Pembayaran PO:</span>
                  <span className="font-semibold text-emerald-400">{s.paymentTerm}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Total Produk Material:</span>
                  <span className="font-semibold text-amber-300">{s.itemsCount}+ Item Siap Kirim</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 text-xs pt-2">
                <span className="text-slate-400 flex items-center gap-1">
                  <Truck className="w-4 h-4 text-amber-400" /> Pengiriman Langsung ke Proyek
                </span>
                <button 
                  onClick={onOpenEscrowDeal}
                  className="px-4 py-2 bg-slate-800 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-bold rounded-lg transition-all border border-amber-500/30 cursor-pointer"
                >
                  Buat PO Material via Escrow
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Category 4: Notaries & Legal */}
      {activeCategory === 'legal' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredNotaries.map(n => (
            <div key={n.id} className="glass-panel p-6 border border-white/10 hover:border-amber-500/40 transition-all space-y-4">
              <div className="flex gap-4 items-center">
                <img src={n.image} alt={n.name} className="w-16 h-16 rounded-full object-cover border border-amber-500/40" />
                <div>
                  <h3 className="text-base font-bold text-white">{n.name}</h3>
                  <p className="text-xs text-amber-400 font-semibold">Wilayah Kerja: {n.jurisdiction}</p>
                  <p className="text-[11px] text-slate-400">Pengalaman {n.experience} | ⭐ {n.rating} / 5.0</p>
                </div>
              </div>

              <div className="bg-slate-900/90 p-3 rounded-xl border border-white/5 text-xs space-y-1">
                <span className="text-slate-400 block">Spesialisasi Legalitas Properti:</span>
                <p className="text-slate-200 font-medium">{n.specialization}</p>
              </div>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-white/5">
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> {n.verifiedDealsOnNara} Deal NARA Disahkan
                </span>
                <button 
                  onClick={onOpenEscrowDeal}
                  className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold rounded-lg transition-all cursor-pointer"
                >
                  Pilih Notaris Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
