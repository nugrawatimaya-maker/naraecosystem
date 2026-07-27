import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileCheck, 
  Scale, 
  CheckCircle2, 
  AlertTriangle, 
  Lock, 
  FileText, 
  Building2, 
  UserCheck, 
  RefreshCw,
  ExternalLink,
  Download,
  Info
} from 'lucide-react';
import { ACTIVE_DEALS_ESCROW, NOTARIES } from '../data/mockData';

export default function VerificationHub({ selectedActor }) {
  const deal = ACTIVE_DEALS_ESCROW[0];
  const [verificationDocs, setVerificationDocs] = useState(deal.legalDocuments);
  const [riskScore, setRiskScore] = useState(94);
  const [legalNotes, setLegalNotes] = useState('Semua dokumen SHM dan IMB/PBG telah lulus audit 3 lapis tim NARA Legal & Notaris.');

  const toggleDocumentVerification = (docName) => {
    setVerificationDocs(prev => prev.map(doc => {
      if (doc.name === docName) {
        return {
          ...doc,
          status: doc.status === 'VERIFIED' ? 'UNDER_REVIEW' : 'VERIFIED'
        };
      }
      return doc;
    }));
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded uppercase tracking-wider">
              NARA Risk Management System
            </span>
            <span className="text-xs text-slate-400">Due Diligence 3-Lapis</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Verifikasi Legalitas & Auditing Lahan</h1>
          <p className="text-xs text-slate-400">Memastikan legalitas sertifikat tanah, PBG/IMB, AMDAL, & pengikatan notaris bebas wanprestasi.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-slate-900 border border-emerald-500/40 p-3 rounded-2xl flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-emerald-400" />
            <div>
              <div className="text-[10px] text-slate-400 font-semibold uppercase">Risk Score Index</div>
              <div className="text-xl font-extrabold text-emerald-300">{riskScore} / 100 (Low Risk)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Status Auditing Dokumen */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Audit Layer 1: Legitimasi Lahan */}
        <div className="glass-panel p-6 space-y-4 border border-white/10">
          <div className="flex items-center gap-3 border-b border-white/10 pb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">Lapis 1</span>
              <h3 className="text-base font-bold text-white">Auditing Sertifikat & Lahan</h3>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-900/90 rounded-xl border border-emerald-500/20 flex justify-between items-center">
              <div>
                <p className="font-bold text-white">Sertifikat Hak Milik (SHM)</p>
                <p className="text-[11px] text-slate-400">Check BPN Online: Clean & Clear</p>
              </div>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Valid
              </span>
            </div>

            <div className="p-3 bg-slate-900/90 rounded-xl border border-emerald-500/20 flex justify-between items-center">
              <div>
                <p className="font-bold text-white">Tata Ruang (RDTR / Zooning)</p>
                <p className="text-[11px] text-slate-400">Peruntukan Hunian & Komersial</p>
              </div>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Sesuai
              </span>
            </div>

            <div className="p-3 bg-slate-900/90 rounded-xl border border-emerald-500/20 flex justify-between items-center">
              <div>
                <p className="font-bold text-white">Pajak PBB & Bebas Sengketa</p>
                <p className="text-[11px] text-slate-400">PBB 2026 Lunas, No Legal Case</p>
              </div>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Clear
              </span>
            </div>
          </div>
        </div>

        {/* Audit Layer 2: Izin Konstruksi PBG */}
        <div className="glass-panel p-6 space-y-4 border border-white/10">
          <div className="flex items-center gap-3 border-b border-white/10 pb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">Lapis 2</span>
              <h3 className="text-base font-bold text-white">Izin Konstruksi (PBG/IMB)</h3>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-900/90 rounded-xl border border-emerald-500/20 flex justify-between items-center">
              <div>
                <p className="font-bold text-white">PBG (Persetujuan Bangunan Gedung)</p>
                <p className="text-[11px] text-slate-400">Dinas Cipta Karya Tangsel Approved</p>
              </div>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Terbit
              </span>
            </div>

            <div className="p-3 bg-slate-900/90 rounded-xl border border-emerald-500/20 flex justify-between items-center">
              <div>
                <p className="font-bold text-white">Dokumen AMDAL / UKL-UPL</p>
                <p className="text-[11px] text-slate-400">Dinas Lingkungan Hidup Verified</p>
              </div>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Approval
              </span>
            </div>

            <div className="p-3 bg-slate-900/90 rounded-xl border border-emerald-500/20 flex justify-between items-center">
              <div>
                <p className="font-bold text-white">Gambar Arsitektur & Struktur</p>
                <p className="text-[11px] text-slate-400">Disetujui Tim Ahli Bangunan (TABG)</p>
              </div>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Complete
              </span>
            </div>
          </div>
        </div>

        {/* Audit Layer 3: Pengikatan Notaris & Escrow */}
        <div className="glass-panel p-6 space-y-4 border border-white/10">
          <div className="flex items-center gap-3 border-b border-white/10 pb-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">Lapis 3</span>
              <h3 className="text-base font-bold text-white">Pengikatan Legal & Escrow</h3>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-900/90 rounded-xl border border-emerald-500/20 flex justify-between items-center">
              <div>
                <p className="font-bold text-white">Akta Perjanjian Investasi Notaris</p>
                <p className="text-[11px] text-slate-400">Legitimasi Hukum Legally Binding</p>
              </div>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Signed
              </span>
            </div>

            <div className="p-3 bg-slate-900/90 rounded-xl border border-emerald-500/20 flex justify-between items-center">
              <div>
                <p className="font-bold text-white">Klausul Rekening Bersama Escrow</p>
                <p className="text-[11px] text-slate-400">Dana Terkunci Hingga Milestone Physical</p>
              </div>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <Lock className="w-4 h-4 text-amber-400" /> Active
              </span>
            </div>

            <div className="p-3 bg-slate-900/90 rounded-xl border border-emerald-500/20 flex justify-between items-center">
              <div>
                <p className="font-bold text-white">Penjaminan Wanprestasi</p>
                <p className="text-[11px] text-slate-400">Garansi Restitusi Escrow NARA</p>
              </div>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Guaranteed
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Verification Matrix Document Checklist */}
      <div className="glass-panel p-6 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-4 gap-2">
          <div>
            <h3 className="text-lg font-bold text-white">Matriks Verifikasi Berkas Proyek NARA</h3>
            <p className="text-xs text-slate-400">Proyek: {deal.projectName} ({deal.id})</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Dipilih Notaris:</span>
            <span className="text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-lg">
              {deal.parties.notary}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          {verificationDocs.map((doc, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/80 p-4 rounded-xl border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">{doc.name}</h4>
                  <span className="text-xs text-slate-400">Pemeriksa Resmi: {doc.checker}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                  doc.status === 'VERIFIED' || doc.status === 'SIGNED'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {doc.status}
                </span>

                <button
                  onClick={() => toggleDocumentVerification(doc.name)}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 rounded-lg transition-all cursor-pointer"
                >
                  Ubah Status Test
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
