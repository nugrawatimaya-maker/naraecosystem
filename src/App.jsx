import React, { useState } from 'react';
import Navbar from './components/Navbar';
import WorkflowVisualizer from './components/WorkflowVisualizer';
import EcosystemMarketplace from './components/EcosystemMarketplace';
import VerificationHub from './components/VerificationHub';
import EscrowDealRoom from './components/EscrowDealRoom';
import CommissionCalculatorModal from './components/CommissionCalculatorModal';
import { ShieldCheck, Lock, Layers, BadgePercent, Building2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('flow'); // 'flow', 'marketplace', 'verification', 'escrow'
  const [selectedActor, setSelectedActor] = useState('investor');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 flex flex-col justify-between selection:bg-amber-500 selection:text-slate-950">
      
      {/* Navigation Bar */}
      <div>
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedActor={selectedActor}
          setSelectedActor={setSelectedActor}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === 'flow' && (
            <WorkflowVisualizer
              onSelectStep={(stepId) => {
                if (stepId === 3) setActiveTab('marketplace');
                else if (stepId === 2 || stepId === 6) setActiveTab('verification');
                else if (stepId === 7 || stepId === 8) setActiveTab('escrow');
              }}
              onOpenCalculator={() => setIsCalculatorOpen(true)}
            />
          )}

          {activeTab === 'marketplace' && (
            <EcosystemMarketplace
              selectedActor={selectedActor}
              onOpenEscrowDeal={() => setActiveTab('escrow')}
            />
          )}

          {activeTab === 'verification' && (
            <VerificationHub
              selectedActor={selectedActor}
            />
          )}

          {activeTab === 'escrow' && (
            <EscrowDealRoom
              selectedActor={selectedActor}
              onOpenCalculator={() => setIsCalculatorOpen(true)}
            />
          )}
        </main>
      </div>

      {/* Calculator Modal */}
      <CommissionCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-8 mt-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black text-lg">
              N
            </div>
            <div>
              <p className="font-bold text-white text-sm">NARA (NLD Hub Ecosystem)</p>
              <p className="text-[11px] text-slate-500">Platform Penjamin Escrow & Manajemen Risiko Properti & Konstruksi</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-emerald-400">
              <Lock className="w-3.5 h-3.5" /> Escrow Account Protected
            </span>
            <span className="flex items-center gap-1 text-amber-400">
              <BadgePercent className="w-3.5 h-3.5" /> Komisi Transaksi 5% – 10%
            </span>
            <span className="flex items-center gap-1 text-blue-400">
              <ShieldCheck className="w-3.5 h-3.5" /> Legal Due Diligence 3-Lapis
            </span>
          </div>

          <p className="text-[11px] text-slate-500">© 2026 NARA Ecosystem. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}
