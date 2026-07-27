import React, { useState } from 'react';
import { 
  Globe, 
  ShieldCheck, 
  LayoutGrid, 
  Search, 
  Handshake, 
  FileText, 
  Building, 
  BadgePercent,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Building2,
  Users,
  HardHat,
  Store,
  FileCheck,
  Scale,
  TrendingUp,
  Lock,
  DollarSign
} from 'lucide-react';
import { FLOW_STEPS, ACTORS, NARA_METRICS } from '../data/mockData';

export default function WorkflowVisualizer({ onSelectStep, onOpenCalculator }) {
  const [selectedStepId, setSelectedStepId] = useState(1);
  const currentStep = FLOW_STEPS.find(s => s.step === selectedStepId) || FLOW_STEPS[0];

  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5" />;
      case 'Search': return <Search className="w-5 h-5" />;
      case 'Handshake': return <Handshake className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'Building': return <Building className="w-5 h-5" />;
      case 'BadgePercent': return <BadgePercent className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0d172a] border border-amber-500/20 p-8 lg:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Ekosistem Properti & Konstruksi Terpadu</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-sans leading-tight">
            Marketplace <span className="gradient-text-gold">NARA</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Menghubungkan <strong>7+ Aktor Utama</strong> dalam 1 Alur Transaksi Terintegrasi. 
            Platform berperan sebagai <strong>Pihak Penjamin (Escrow)</strong> dan <strong>Manajer Risiko Legal & Konstruksi</strong> dengan komisi transparan <strong className="text-amber-300">5% – 10%</strong> dari nilai deal yang berhasil.
          </p>

          {/* 3 Model Bisnis Terbukti */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-slate-900/80 backdrop-blur border border-white/10 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
                <LayoutGrid className="w-4 h-4" />
                <span>Marketplace B2B / B2C</span>
              </div>
              <p className="text-xs text-slate-400">Pencarian & matching otomatis antara permintaan lahan/rumah & supply jasa kontraktor & supplier.</p>
            </div>

            <div className="bg-slate-900/80 backdrop-blur border border-emerald-500/30 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                <Lock className="w-4 h-4" />
                <span>Rekening Bersama Escrow</span>
              </div>
              <p className="text-xs text-slate-400">Dana investasi & DP ditahan aman oleh NARA hingga milestone fisik proyek terverifikasi.</p>
            </div>

            <div className="bg-slate-900/80 backdrop-blur border border-blue-500/30 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm mb-1">
                <Scale className="w-4 h-4" />
                <span>Risk Audit & Notaris</span>
              </div>
              <p className="text-xs text-slate-400">Due diligence dokumen sertifikat, PBG/IMB, & kontrak legally binding oleh notaris mitra.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <button
              onClick={onOpenCalculator}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <BadgePercent className="w-5 h-5" />
              <span>Simulasikan Komisi NARA (5–10%)</span>
            </button>
          </div>

        </div>
      </div>

      {/* 8 Jenis Aktor Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">8 Jenis Aktor Dalam Ekosistem NARA</h2>
            <p className="text-xs text-slate-400">Seluruh pemangku kepentingan terintegrasi dalam satu platform dengan hak akses terukur.</p>
          </div>
          <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
            NARA Verified Network
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {ACTORS.map(actor => (
            <div 
              key={actor.id} 
              className="glass-panel p-4 hover:border-amber-500/40 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-2">
                <img 
                  src={actor.avatar} 
                  alt={actor.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/20 group-hover:border-amber-400 transition-all"
                />
                <div>
                  <h3 className="font-bold text-sm text-slate-200 group-hover:text-amber-300 transition-colors leading-tight">
                    {actor.shortName}
                  </h3>
                  <span className="text-[10px] text-slate-400 font-medium">{actor.activeUsersCount} Terdaftar</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">{actor.kebutuhan}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Flowchart Alur Transaksi 8 Steps (Interactive Flow) */}
      <div className="glass-panel p-6 lg:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Diagram Alur Kerja Resmi</span>
            <h2 className="text-2xl font-bold text-white tracking-tight">Alur Transaksi & Penjaminan NARA</h2>
            <p className="text-xs text-slate-400">Klik setiap tahapan di bawah untuk melihat simulasi proses & pertukaran dokumen.</p>
          </div>

          <div className="flex items-center gap-3 bg-slate-900/90 px-4 py-2 rounded-xl border border-white/10 text-xs">
            <span className="text-slate-400">Model Fee Platform:</span>
            <span className="font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
              5% s/d 10% Total Deal
            </span>
          </div>
        </div>

        {/* Stepper Timeline */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
          {FLOW_STEPS.map(stepObj => {
            const isSelected = selectedStepId === stepObj.step;
            return (
              <button
                key={stepObj.step}
                onClick={() => setSelectedStepId(stepObj.step)}
                className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-amber-500/20 to-slate-900 border-amber-400 shadow-lg shadow-amber-500/15'
                    : 'bg-slate-900/50 border-white/10 hover:border-white/30 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {stepObj.step}
                  </span>
                  <span className={`text-[10px] ${isSelected ? 'text-amber-300 font-semibold' : 'text-slate-500'}`}>
                    {stepObj.badge.split(':')[0]}
                  </span>
                </div>

                <div className="mt-1">
                  <div className={`p-1.5 rounded-lg w-fit mb-1.5 ${isSelected ? 'bg-amber-400/20 text-amber-300' : 'bg-slate-800 text-slate-400'}`}>
                    {getStepIcon(stepObj.icon)}
                  </div>
                  <h4 className={`text-xs font-bold line-clamp-2 ${isSelected ? 'text-amber-200' : 'text-slate-300'}`}>
                    {stepObj.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Step Detailed Interactive Breakdown */}
        <div className="bg-slate-900/90 rounded-2xl border border-amber-500/30 p-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                {getStepIcon(currentStep.icon)}
              </div>
              <div>
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-widest">
                  TAHAP {currentStep.step} DARI 8 — {currentStep.badge}
                </span>
                <h3 className="text-xl font-bold text-white">{currentStep.title}</h3>
                <p className="text-xs text-slate-400">{currentStep.subtitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={selectedStepId === 1}
                onClick={() => setSelectedStepId(prev => Math.max(1, prev - 1))}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-medium text-slate-300 disabled:opacity-40 cursor-pointer hover:bg-slate-700"
              >
                ← Sebelumnya
              </button>
              <button
                disabled={selectedStepId === 8}
                onClick={() => setSelectedStepId(prev => Math.min(8, prev + 1))}
                className="px-3 py-1.5 rounded-lg bg-amber-500 text-xs font-bold text-slate-950 disabled:opacity-40 cursor-pointer hover:bg-amber-400 flex items-center gap-1"
              >
                <span>Berikutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-200 mb-1">Deskripsi Proses Tahapan:</h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-white/5">
                  {currentStep.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-200 mb-2">Aktor Utama Yang Terlibat Pada Tahap Ini:</h4>
                <div className="flex flex-wrap gap-2">
                  {ACTORS.slice(0, selectedStepId % 2 === 0 ? 5 : 8).map(actor => (
                    <span key={actor.id} className="bg-slate-800 text-slate-200 text-xs font-medium px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      {actor.shortName}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Action Preview Card for this Step */}
            <div className="bg-gradient-to-br from-slate-950 to-slate-900 p-5 rounded-xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">SIMULATION_OUTPUT_NODE #{currentStep.step}</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Stage
                </span>
              </div>

              {selectedStepId === 1 && (
                <div className="space-y-3">
                  <div className="text-xs text-amber-300 font-semibold">Status Pendaftaran Portal:</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-900 p-2.5 rounded border border-white/10 text-slate-300">📈 Investor: 340 User</div>
                    <div className="bg-slate-900 p-2.5 rounded border border-white/10 text-slate-300">🏗️ Developer: 185 User</div>
                    <div className="bg-slate-900 p-2.5 rounded border border-white/10 text-slate-300">👷 Kontraktor: 220 User</div>
                    <div className="bg-slate-900 p-2.5 rounded border border-white/10 text-slate-300">🏪 Toko Bangunan: 155 Vendor</div>
                  </div>
                </div>
              )}

              {selectedStepId === 2 && (
                <div className="space-y-2 text-xs">
                  <div className="text-emerald-300 font-semibold">Checklist Auditing Tim NARA:</div>
                  <div className="bg-slate-900 p-2 rounded border border-emerald-500/20 text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Cek Keabsahan SHM & Sertifikat Lahan di BPN
                  </div>
                  <div className="bg-slate-900 p-2 rounded border border-emerald-500/20 text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Verifikasi PBG/IMB & Tata Ruang Pemda
                  </div>
                  <div className="bg-slate-900 p-2 rounded border border-emerald-500/20 text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Background Check Financial & Track Record Kontraktor
                  </div>
                </div>
              )}

              {selectedStepId === 6 && (
                <div className="space-y-2 text-xs">
                  <div className="text-amber-300 font-semibold">Legitimasi Notaris Mitra NARA:</div>
                  <div className="bg-slate-900 p-3 rounded border border-amber-500/30 text-slate-300">
                    <p className="font-mono text-amber-200">Akta Perjanjian Investasi & Pemborongan Konstruksi No. 14</p>
                    <p className="text-[11px] text-slate-400 mt-1">Mengikat 7 pihak secara legally binding dengan klausul penguncian Rekening Bersama Escrow NARA.</p>
                  </div>
                </div>
              )}

              {(selectedStepId === 7 || selectedStepId === 8) && (
                <div className="space-y-3 text-xs">
                  <div className="text-emerald-300 font-semibold">Escrow Release & Platform Commission (5–10%):</div>
                  <div className="bg-slate-900 p-3 rounded border border-emerald-500/30 text-slate-300 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Total Nilai Deal:</span>
                      <span className="font-bold text-white">Rp 10.000.000.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-amber-400">Komisi Platform NARA (7.5%):</span>
                      <span className="font-bold text-amber-400">Rp 750.000.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-400">Pencairan Kontraktor & Toko Material:</span>
                      <span className="font-bold text-emerald-400">Rp 9.250.000.000 (Termin)</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedStepId !== 1 && selectedStepId !== 2 && selectedStepId !== 6 && selectedStepId !== 7 && selectedStepId !== 8 && (
                <div className="p-4 bg-slate-900 rounded border border-white/10 text-xs text-slate-300 space-y-2">
                  <p>🔹 <strong>Matching Engine:</strong> Mengkalkulasi skor kecocokan profil proyek & investor.</p>
                  <p>🔹 <strong>Penjadwalan Offline:</strong> Fasilitasi ruang rapat fisik & verifikasi berkas cetak.</p>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
