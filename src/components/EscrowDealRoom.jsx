import React, { useState } from 'react';
import { 
  BadgePercent, 
  Lock, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  ShieldCheck, 
  ArrowUpRight, 
  FileText, 
  AlertCircle,
  TrendingUp,
  Building,
  Store,
  HardHat,
  Calculator,
  Layers,
  ChevronRight,
  Info
} from 'lucide-react';
import { ACTIVE_DEALS_ESCROW } from '../data/mockData';

export default function EscrowDealRoom({ selectedActor, onOpenCalculator }) {
  const [deal, setDeal] = useState(ACTIVE_DEALS_ESCROW[0]);
  const [selectedMilestoneId, setSelectedMilestoneId] = useState('ms-2');
  const [showPayoutModal, setShowPayoutModal] = useState(false);

  const activeMilestone = deal.milestones.find(m => m.id === selectedMilestoneId) || deal.milestones[1];

  // Function to release milestone payout in simulation
  const handleReleaseMilestone = (msId) => {
    setDeal(prev => ({
      ...prev,
      milestones: prev.milestones.map(m => {
        if (m.id === msId) {
          return {
            ...m,
            status: 'RELEASED',
            inspectorNote: 'Disetujui & Ditingkatkan ke Status RELEASED oleh Tim Penjamin Escrow NARA.'
          };
        }
        return m;
      })
    }));
    setShowPayoutModal(false);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
              <Lock className="w-3 h-3 text-amber-400" /> NARA Escrow Account
            </span>
            <span className="text-xs font-mono text-slate-400">ID: {deal.id}</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">{deal.projectName}</h1>
          <p className="text-xs text-slate-400">Ruang transaksi & pelepasan dana termin milestone dengan jaminan rekening bersama NARA.</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCalculator}
            className="px-4 py-2.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/10"
          >
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>Kalkulator Fee 5-10%</span>
          </button>
        </div>
      </div>

      {/* Escrow Balance Metrics Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        <div className="glass-panel p-5 border border-white/10">
          <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Total Nilai Deal</span>
          <div className="text-2xl font-black text-white mt-1">
            Rp {(deal.dealTotalValue / 1000000000).toFixed(1)} Miliar
          </div>
          <p className="text-[11px] text-slate-400 mt-1">100% Ditahan di Escrow</p>
        </div>

        <div className="glass-panel-gold p-5">
          <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">Komisi Platform NARA</span>
          <div className="text-2xl font-black text-amber-400 mt-1">
            Rp {(deal.platformFeeAmount / 1000000).toFixed(0)} Juta
          </div>
          <p className="text-[11px] text-amber-300/80 mt-1">Tarif Komisi Transaksi {deal.platformFeePercentage}%</p>
        </div>

        <div className="glass-panel-emerald p-5">
          <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider">Dana Sudah Dicairkan</span>
          <div className="text-2xl font-black text-emerald-400 mt-1">
            Rp 2,5 Miliar
          </div>
          <p className="text-[11px] text-emerald-300/80 mt-1">Termin 1 Completed (25%)</p>
        </div>

        <div className="glass-panel p-5 border border-white/10">
          <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Nomor Escrow Account</span>
          <div className="text-sm font-mono font-bold text-amber-300 mt-2 bg-slate-900 px-2.5 py-1 rounded border border-white/10">
            {deal.escrowAccountNo}
          </div>
          <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> Bank Custodian Active
          </p>
        </div>

      </div>

      {/* 7 Parties Engagement Card */}
      <div className="glass-panel p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-400" />
            Mitra Terikat Dalam Kontrak Escrow Deal Ini
          </h3>
          <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30">
            Legally Binding Signed
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
          <div className="bg-slate-900 p-3 rounded-xl border border-white/5 space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase">1. Investor</span>
            <p className="font-semibold text-amber-300 truncate">Konsorsium BSD</p>
          </div>
          <div className="bg-slate-900 p-3 rounded-xl border border-white/5 space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase">2. Developer</span>
            <p className="font-semibold text-white truncate">PT Nusantara Land</p>
          </div>
          <div className="bg-slate-900 p-3 rounded-xl border border-white/5 space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase">3. Kontraktor</span>
            <p className="font-semibold text-blue-300 truncate">PT Karya Beton</p>
          </div>
          <div className="bg-slate-900 p-3 rounded-xl border border-white/5 space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase">4. Toko Bangunan</span>
            <p className="font-semibold text-emerald-300 truncate">Depo Bangunan BSD</p>
          </div>
          <div className="bg-slate-900 p-3 rounded-xl border border-white/5 space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase">5. Notaris</span>
            <p className="font-semibold text-purple-300 truncate">Hj. Ratna Juwita, SH</p>
          </div>
          <div className="bg-slate-900 p-3 rounded-xl border border-white/5 space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase">6. Jasa Legal</span>
            <p className="font-semibold text-rose-300 truncate">Lextrum Partners</p>
          </div>
        </div>
      </div>

      {/* Milestone Timelines & Disbursement Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Milestone List */}
        <div className="lg:col-span-5 space-y-3">
          <h3 className="text-base font-bold text-white flex items-center justify-between">
            <span>Jadwal Termin & Milestone (4 Tahap)</span>
            <span className="text-xs text-slate-400 font-normal">NARA Inspection Engine</span>
          </h3>

          {deal.milestones.map(ms => {
            const isSelected = selectedMilestoneId === ms.id;
            return (
              <div 
                key={ms.id}
                onClick={() => setSelectedMilestoneId(ms.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected 
                    ? 'bg-slate-900 border-amber-500/80 shadow-lg shadow-amber-500/10' 
                    : 'bg-slate-900/50 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-300">{ms.title.split(':')[0]}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    ms.status === 'RELEASED'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : ms.status === 'IN_INSPECTION'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 animate-pulse'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}>
                    {ms.status}
                  </span>
                </div>

                <div className="text-sm font-bold text-white mb-2">{ms.title.split(':')[1]}</div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/5">
                  <span>Alokasi: <strong className="text-amber-300">{ms.percentage}% (Rp {(ms.value / 1000000000).toFixed(2)} M)</strong></span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {ms.inspectionDate.split(':')[0]}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Detailed Disbursement Breakdown for Active Milestone */}
        <div className="lg:col-span-7 glass-panel p-6 space-y-5 border border-white/10">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Detail Pencairan Dana Termin</span>
              <h3 className="text-lg font-bold text-white">{activeMilestone.title}</h3>
            </div>

            {activeMilestone.status === 'IN_INSPECTION' && (
              <button
                onClick={() => setShowPayoutModal(true)}
                className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Setujui Pencairan Dana Termin</span>
              </button>
            )}
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-slate-950 rounded-xl border border-white/5 text-xs text-slate-300">
              <span className="font-bold text-amber-300 block mb-1">Catatan Inspektur Risiko NARA:</span>
              <p className="leading-relaxed">{activeMilestone.inspectorNote}</p>
            </div>

            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mt-4">
              Rincian Distribusi Transfer Escrow (Auto-Split NARA Fee 7.5%):
            </h4>

            {activeMilestone.disbursements.length > 0 ? (
              <div className="space-y-2">
                {activeMilestone.disbursements.map((d, idx) => {
                  const isPlatformFee = d.recipient.includes('NARA Platform');
                  return (
                    <div 
                      key={idx}
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs ${
                        isPlatformFee 
                          ? 'bg-amber-500/10 border-amber-500/40 text-amber-200 font-semibold' 
                          : 'bg-slate-900 border-white/5 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${isPlatformFee ? 'bg-amber-400' : 'bg-emerald-400'}`}></span>
                        <span>{d.recipient}</span>
                      </div>
                      <span className="font-mono font-bold text-white">
                        Rp {d.amount.toLocaleString('id-ID')}
                      </span>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-6 text-center text-xs text-slate-500 bg-slate-950 rounded-xl border border-white/5">
                Pencairan dana untuk termin ini masih terkunci hingga inspeksi fisik tahap sebelumnya diselesaikan.
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Payout Confirmation Modal */}
      {showPayoutModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-md w-full p-6 space-y-5 shadow-2xl">
            <div className="flex items-center gap-3 text-amber-400">
              <ShieldCheck className="w-8 h-8" />
              <div>
                <h3 className="text-lg font-bold text-white">Konfirmasi Pelepasan Escrow</h3>
                <p className="text-xs text-slate-400">Verifikasi Dokumen Inspeksi Fisik Selesai</p>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl text-xs space-y-2 text-slate-300">
              <div className="flex justify-between">
                <span>Nilai Termin 2:</span>
                <strong className="text-white">Rp 3.500.000.000</strong>
              </div>
              <div className="flex justify-between text-amber-400">
                <span>Komisi NARA Fee (7.5%):</span>
                <strong>Rp 262.500.000</strong>
              </div>
              <div className="flex justify-between text-emerald-400">
                <span>Pencairan Kontraktor & Supplier:</span>
                <strong>Rp 3.237.500.000</strong>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Dengan mengklik setujui, sistem NARA akan secara otomatis mentransfer dana dari Rekening Bersama Escrow ke rekening Kontraktor & Toko Material, serta mengkreditkan komisi platform NARA.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowPayoutModal(false)}
                className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 rounded-xl transition-all cursor-pointer"
              >
                Batal
              </button>
              <button
                onClick={() => handleReleaseMilestone('ms-2')}
                className="flex-1 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                Eksekusi Transfer Now
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
