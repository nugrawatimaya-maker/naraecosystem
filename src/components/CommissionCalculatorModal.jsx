import React, { useState } from 'react';
import { Calculator, X, BadgePercent, ShieldCheck, DollarSign, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

export default function CommissionCalculatorModal({ isOpen, onClose }) {
  const [dealValue, setDealValue] = useState(10000000000); // 10 Miliar default
  const [commissionRate, setCommissionRate] = useState(7.5); // 7.5% default (between 5% - 10%)
  const [milestonesCount, setMilestonesCount] = useState(4);

  if (!isOpen) return null;

  // Calculations
  const naraCommissionFee = Math.round((dealValue * commissionRate) / 100);
  const netDealDisbursed = dealValue - naraCommissionFee;

  // Sample Breakdown
  const contractorAllocation = Math.round(netDealDisbursed * 0.55); // 55% for General Contractor
  const materialStoreAllocation = Math.round(netDealDisbursed * 0.35); // 35% for Building Material Stores
  const notaryLegalAllocation = Math.round(netDealDisbursed * 0.10); // 10% for Notary & Legal Fees

  const perMilestoneNaraFee = Math.round(naraCommissionFee / milestonesCount);
  const perMilestoneDisbursed = Math.round(netDealDisbursed / milestonesCount);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-amber-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white tracking-tight">Kalkulator Simulation Fee NARA</h2>
              <p className="text-xs text-slate-400">Kalkulasi Komisi Platform 5% – 10% & Payout Distribusi Aktor</p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-slate-950 p-5 rounded-2xl border border-white/5">
          
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
              Total Nilai Deal Proyek (Rp):
            </label>
            <input
              type="number"
              value={dealValue}
              onChange={(e) => setDealValue(Number(e.target.value))}
              step="500000000"
              className="w-full bg-slate-900 border border-amber-500/30 rounded-xl px-3.5 py-2.5 text-sm font-bold text-amber-300 focus:outline-none focus:border-amber-400"
            />
            <span className="text-[11px] text-slate-400">
              Format: Rp {(dealValue / 1000000000).toFixed(2)} Miliar
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                Persentase Komisi NARA:
              </label>
              <span className="text-xs font-extrabold text-amber-400 bg-amber-500/20 border border-amber-500/40 px-2 py-0.5 rounded">
                {commissionRate}%
              </span>
            </div>
            <input
              type="range"
              min="5.0"
              max="10.0"
              step="0.5"
              value={commissionRate}
              onChange={(e) => setCommissionRate(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>Minimal 5.0%</span>
              <span>Standar 7.5%</span>
              <span>Maksimal 10.0%</span>
            </div>
          </div>

        </div>

        {/* Dynamic Calculation Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* NARA Revenue Box */}
          <div className="glass-panel-gold p-5 space-y-2">
            <div className="flex items-center justify-between text-xs text-amber-300 font-bold uppercase tracking-wider">
              <span>Pendapatan Platform NARA</span>
              <BadgePercent className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-black text-amber-300">
              Rp {naraCommissionFee.toLocaleString('id-ID')}
            </div>
            <p className="text-[11px] text-amber-200/80 leading-tight">
              Potongan komisi ({commissionRate}%) langsung diambil saat pelepasan dana milestone dari escrow.
            </p>
          </div>

          {/* Net Disbursement Box */}
          <div className="glass-panel-emerald p-5 space-y-2">
            <div className="flex items-center justify-between text-xs text-emerald-300 font-bold uppercase tracking-wider">
              <span>Net Dana Ke Aktor Terkait</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-black text-emerald-300">
              Rp {netDealDisbursed.toLocaleString('id-ID')}
            </div>
            <p className="text-[11px] text-emerald-200/80 leading-tight">
              Didistribusikan aman ke Kontraktor, Toko Bangunan, Notaris & Legal.
            </p>
          </div>

        </div>

        {/* Detailed Distribution breakdown */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            Simulasi Distribusi Pembayaran Ke Aktor Ekosistem:
          </h4>

          <div className="space-y-2 text-xs">
            <div className="p-3 bg-slate-950 rounded-xl border border-white/5 flex justify-between items-center text-slate-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span> Kontraktor Utama (55% Share Net)
              </span>
              <strong className="text-white font-mono">Rp {contractorAllocation.toLocaleString('id-ID')}</strong>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-white/5 flex justify-between items-center text-slate-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Toko Bangunan Material Vendor (35% Share Net)
              </span>
              <strong className="text-white font-mono">Rp {materialStoreAllocation.toLocaleString('id-ID')}</strong>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-white/5 flex justify-between items-center text-slate-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span> Notaris & Konsultan Legal Audit (10% Share Net)
              </span>
              <strong className="text-white font-mono">Rp {notaryLegalAllocation.toLocaleString('id-ID')}</strong>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
          >
            Terapkan Kalkulasi & Tutup
          </button>
        </div>

      </div>
    </div>
  );
}
