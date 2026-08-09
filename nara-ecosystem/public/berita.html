<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Berita & Analisis Resmi — NARA Ecosystem</title>
  <meta name="description" content="Baca siaran pers, analisis pasar investasi properti, dan berita terkini pengembangan NARA Ecosystem." />

  <!-- Google Fonts: Plus Jakarta Sans, Fraunces (Editorial Serif), IBM Plex Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=IBM+Plex+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Plus Jakarta Sans', 'sans-serif'],
            serif: ['Fraunces', 'serif'],
            mono: ['IBM Plex Mono', 'monospace'],
          },
          colors: {
            naraTeal: '#1ac1b9',
            naraDark: '#0b1329',
            naraEmerald: '#064e3b',
            naraGold: '#f59e0b',
          }
        }
      }
    }
  </script>

  <style>
    body {
      margin: 0;
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #0b1329;
      color: #f8fafc;
      min-height: 100vh;
    }
    .editorial-title {
      font-family: 'Fraunces', serif;
      letter-spacing: -0.02em;
    }
    .glass-card {
      background: rgba(19, 28, 49, 0.75);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    .article-content p {
      margin-bottom: 1.5rem;
      line-height: 1.85;
      font-size: 1.05rem;
      color: #cbd5e1;
    }
    .article-content h3 {
      font-family: 'Fraunces', serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: #ffffff;
      margin-top: 2.25rem;
      margin-bottom: 1rem;
    }
    .article-content blockquote {
      border-left: 4px solid #1ac1b9;
      padding-left: 1.25rem;
      font-style: italic;
      color: #e2e8f0;
      background: rgba(26, 193, 185, 0.05);
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      border-radius: 0 12px 12px 0;
      margin: 1.5rem 0;
    }
  </style>

  <!-- React 18, ReactDOM 18, Babel -->
  <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    const { useState, useEffect } = React;

    const DEFAULT_ARTICLE = {
      headlineCategory: '📢 SIARAN PERS & HIGHLIGHT RESMI',
      headingPre: 'Terhubung dengan mitra yang tepat,',
      headingHighlight: 'capai kesepakatan yang menguntungkan.',
      author: 'Tri Wijaya — Founder & Managing Director NARA Ecosystem',
      authorRole: '10+ Tahun Praktisi Properti & Penggagas Sistem NLD Hub',
      publishDate: '10 Agustus 2026',
      readTime: '4 Menit Baca',
      coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      description: 'NARA Ecosystem mempertemukan investor, pemilik lahan, kontraktor, toko bangunan, notaris, dan masyarakat umum dalam satu platform bergaransi Rekening Escrow resmi.',
      articleBody: `
### Transformasi Ekosistem Properti Melalui Transparansi & Escrow Terpusat

Industri properti dan pengembangan lahan seringkali menghadapi tantangan besar terkait asimetri informasi, kepastian hukum, dan keamanan aliran dana perputaran proyek. NARA Ecosystem hadir sebagai solusi terintegrasi yang menghubungkan 12 entitas strategis ke dalam satu wadah kolaborasi mutualistik.

Setiap transaksi kemitraan yang terjalin melalui NLD Hub diamankan dengan skema **Rekening Bersama (Escrow)** dan diverifikasi melalui audit legal 3-lapis oleh Notaris/PPAT berpengalaman, menjamin dana investor dan hak pemilik lahan terlindungi 100%.

> "Kekuatan sejati sebuah ekosistem terletak pada kepercayaan dan keamanan setiap pihak yang terlibat di dalamnya. NARA hadir bukan hanya sebagai marketplace, melainkan sebagai benteng kepastian transaksi properti Indonesia."

### Tiga Pilar Utama NARA Ecosystem:

1. **Jaminan Aliran Dana Berbasis Milestone**: Pencairan dana konstruksi hanya dilakukan saat progres fisik lapangan telah diverifikasi oleh tim pengawas independen.
2. **Keterlibatan Notaris & PPAT Terverifikasi**: Seluruh akad perjanjian kerjasama (Joint Venture) memiliki kekuatan hukum mengikat sejak hari pertama.
3. **Peluang Investasi Terkurasi**: Setiap proposal proyek yang tayang telah melewati penilaian kelayakan finansial (Feasibility Study) dan mitigasi risiko komprehensif.

Dengan pendekatan ini, NARA Ecosystem terus memperluas ekspansi klaster perumahan dan kawasan komersial strategis di seluruh wilayah Indonesia.
      `
    };

    function NewsArticleApp() {
      const [article, setArticle] = useState(DEFAULT_ARTICLE);
      const [isCopied, setIsCopied] = useState(false);

      useEffect(() => {
        // Load live article from LocalStorage or Backend API
        const savedData = localStorage.getItem('nara_cms_config');
        if (savedData) {
          try {
            const parsed = JSON.parse(savedData);
            if (parsed.heroConfig) {
              setArticle({
                ...DEFAULT_ARTICLE,
                ...parsed.heroConfig
              });
            }
          } catch(e) {}
        }

        // Fetch from API
        fetch('/api/v1/cms-config')
          .then(res => res.json())
          .then(res => {
            if (res && res.data && res.data.heroConfig) {
              setArticle({
                ...DEFAULT_ARTICLE,
                ...res.data.heroConfig
              });
            }
          })
          .catch(() => {});
      }, []);

      const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2500);
      };

      // Formatter for simple markdown to paragraphs
      const renderContent = (bodyText) => {
        if (!bodyText) return null;
        const lines = bodyText.trim().split('\n\n');
        return lines.map((para, idx) => {
          if (para.startsWith('### ')) {
            return <h3 key={idx}>{para.replace('### ', '')}</h3>;
          }
          if (para.startsWith('> ')) {
            return <blockquote key={idx}>{para.replace('> ', '')}</blockquote>;
          }
          if (para.startsWith('1. ') || para.startsWith('2. ') || para.startsWith('3. ')) {
            return (
              <div key={idx} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 my-3 text-slate-200">
                {para}
              </div>
            );
          }
          return <p key={idx}>{para}</p>;
        });
      };

      return (
        <div className="min-h-screen flex flex-col justify-between selection:bg-teal-500 selection:text-slate-950">
          
          {/* TOP NAV BAR */}
          <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-xl border-b border-slate-800">
            <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
              
              <a href="./index.html" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-[#1ac1b9] text-slate-950 font-black flex items-center justify-center shadow-lg group-hover:scale-105 transition-all">
                  N
                </div>
                <div>
                  <span className="font-extrabold text-sm text-white tracking-wide block">NARA ECOSYSTEM</span>
                  <span className="text-[10px] text-teal-400 font-mono">Official Newsroom</span>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <a 
                  href="./index.html" 
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition-all flex items-center gap-1.5"
                >
                  <span>🏛️ Ke Marketplace</span>
                </a>
                
                <a 
                  href="./admin.html" 
                  className="px-3.5 py-2 bg-[#1ac1b9]/15 hover:bg-[#1ac1b9]/25 text-[#1ac1b9] text-xs font-bold rounded-xl border border-[#1ac1b9]/30 transition-all"
                >
                  <span>✏️ Edit di CMS</span>
                </a>
              </div>

            </div>
          </header>

          {/* MAIN ARTICLE HERO */}
          <main className="max-w-4xl mx-auto px-6 py-10 space-y-8 flex-1 w-full">
            
            {/* Breadcrumb & Badge */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <a href="./index.html" className="text-slate-400 hover:text-teal-400">Home</a>
                <span className="text-slate-600">/</span>
                <span className="text-teal-400">Berita & Headline</span>
                <span className="text-slate-600">/</span>
                <span className="bg-teal-500/10 text-teal-400 border border-teal-500/20 px-2.5 py-0.5 rounded-full font-bold">
                  {article.headlineCategory || '📢 SIARAN PERS RESMI'}
                </span>
              </div>

              {/* Title */}
              <h1 className="editorial-title text-3xl md:text-5xl font-black text-white leading-tight">
                {article.headingPre} <span className="text-amber-400 underline decoration-amber-400/50">{article.headingHighlight}</span>
              </h1>

              {/* Lead Paragraph */}
              <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed border-l-2 border-teal-400 pl-4 py-1">
                {article.description}
              </p>
            </div>

            {/* Author & Meta Box */}
            <div className="glass-card p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center text-slate-950 font-black text-lg shadow-md shrink-0">
                  TW
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white">{article.author || 'Tri Wijaya'}</h4>
                  <p className="text-xs text-slate-400">{article.authorRole || 'Founder & Praktisi Properti NARA'}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span>🗓️ {article.publishDate || '10 Agustus 2026'}</span>
                <span>⏱️ {article.readTime || '4 Menit Baca'}</span>
                <button 
                  onClick={handleShare}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-teal-300 font-bold rounded-lg border border-slate-700 transition-all cursor-pointer"
                >
                  {isCopied ? '✅ Tautan Tersalin!' : '🔗 Bagikan'}
                </button>
              </div>
            </div>

            {/* Featured Image */}
            {article.coverImage && (
              <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <img 
                  src={article.coverImage} 
                  alt="Headline Cover" 
                  className="w-full h-80 md:h-[420px] object-cover"
                />
              </div>
            )}

            {/* Formatted Article Body */}
            <article className="article-content bg-slate-900/40 p-6 md:p-10 rounded-3xl border border-slate-800/80">
              {renderContent(article.articleBody || DEFAULT_ARTICLE.articleBody)}
            </article>

            {/* CTA Box to Explore Marketplace */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#022c22] border border-emerald-500/30 text-white space-y-4 shadow-2xl text-center md:text-left md:flex justify-between items-center">
              <div className="space-y-2">
                <span className="text-[11px] font-mono tracking-wider text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20 font-bold">
                  🚀 SIAP MENJALIN KESEPAKATAN?
                </span>
                <h3 className="text-2xl font-black">Eksplorasi Peluang Properti & Joint Venture</h3>
                <p className="text-xs text-emerald-100 max-w-lg">
                  Temukan ratusan listing lahan siap bangun, kontraktor bersertifikat, dan skema bagi hasil terlindungi Escrow.
                </p>
              </div>

              <a 
                href="./index.html"
                className="inline-block mt-4 md:mt-0 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all"
              >
                🏛️ Masuk Ke Marketplace
              </a>
            </div>

          </main>

          {/* FOOTER */}
          <footer className="bg-slate-950 border-t border-slate-800 py-8 text-center text-xs text-slate-500">
            <div className="max-w-4xl mx-auto px-6 space-y-2">
              <p className="font-bold text-slate-400">© 2026 NARA Ecosystem. All Rights Reserved.</p>
              <p>Platform Industri Terintegrasi: Investor • Pemilik Lahan • Kontraktor • Notaris PPAT • Perbankan</p>
            </div>
          </footer>

        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<NewsArticleApp />);
  </script>
</body>
</html>
