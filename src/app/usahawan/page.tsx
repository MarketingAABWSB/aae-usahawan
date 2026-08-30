"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  Check,
  ChevronDown,
  AlertTriangle,
  TrendingUp,
  Settings,
  ShieldCheck,
  Briefcase,
  Layers,
  BarChart4
} from 'lucide-react';

function Accordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const items = [
    { title: "Berapa margin keuntungan purata (ROI)?", desc: "Margin perkhidmatan automotif adalah tinggi. Kami akan bentangkan unjuran kewangan (financial projection) terperinci semasa sesi perjumpaan VIP." },
    { title: "Adakah saya perlu berada di bengkel?", desc: "Bergantung pada struktur pengurusan syarikat anda. Kami sediakan sistem dashboard supaya anda boleh pantau pergerakan jualan harian bersama pengurus cawangan anda dari jauh." }
  ];
  return (
    <div className="accordion-wrapper reveal" style={{ marginTop: '40px', maxWidth: '800px', marginInline: 'auto' }}>
      {items.map((it, i) => (
        <div key={i} className={`accordion-item ${openIdx === i ? 'open' : ''}`} onClick={() => setOpenIdx(openIdx === i ? null : i)}>
          <div className="accordion-title" style={{ padding: '20px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', marginBottom: '10px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.1rem', fontWeight: 600 }}>
              <Check size={20} color="var(--green-highlight)" /> {it.title}
            </span>
            <ChevronDown size={20} style={{ transition: 'transform 0.3s', transform: openIdx === i ? 'rotate(180deg)' : 'rotate(0)' }} />
          </div>
          <div className="accordion-content" style={{ maxHeight: openIdx === i ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out' }}>
            <p style={{ padding: '0 20px 20px 55px', color: 'var(--text-muted)' }}>{it.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function UsahawanPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const whatsappLink = "https://api.whatsapp.com/send?phone=60123741726&text=Saya%20berminat%20untuk%20bincang%20potensi%20bisnes%20AAE%20(Blueprint%20Usahawan)";

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .hero-green {
          position: relative;
          min-height: 100svh;
          color: #fff;
          padding: 80px 0 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 80% 15%, rgba(29, 164, 92, 0.2), transparent 40%),
            linear-gradient(120deg, rgba(2, 6, 23, 0.95) 0%, rgba(10, 20, 30, 0.85) 50%, rgba(15, 25, 35, 0.9) 100%),
            url('/bg.jpg') center/cover no-repeat;
        }
        .hero-green::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(#1da45c11 1px, transparent 1px),
            linear-gradient(90deg, #1da45c11 1px, transparent 1px);
          background-size: 44px 44px;
          mask-image: linear-gradient(#000, transparent);
          -webkit-mask-image: linear-gradient(#000, transparent);
        }
        .btn-green {
          background: linear-gradient(135deg, var(--green-primary), #10b981);
          color: #fff;
          box-shadow: 0 14px 32px rgba(29, 164, 92, 0.34);
        }
        .btn-green:hover {
          box-shadow: 0 18px 40px rgba(29, 164, 92, 0.45);
        }
        .hero-tag-green {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 15px;
          border: 1px solid rgba(52, 211, 153, 0.4);
          background: rgba(52, 211, 153, 0.05);
          border-radius: var(--radius-full);
          color: var(--green-highlight);
          font-size: 0.8rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .hero-tag-green::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--green-primary);
          box-shadow: 0 0 0 4px rgba(29, 164, 92, 0.25);
        }
      `}} />

      {/* ── Navigation ─────────────────────────────── */}
      <nav className="navbar" style={{ borderBottom: '1px solid rgba(29, 164, 92, 0.15)' }}>
        <div className="container nav-container">
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link href="/" className="nav-brand">
            <img src="/aae-logo.png" alt="A-Cond Auto Expert" className="nav-logo" />
            <div className="nav-brand-divider"></div>
            <img src="/azam-auto-logo-nobg.png" alt="Azam Auto Logo" className="nav-logo azam-logo" />
          </Link>

          <div className="nav-links desktop-only">
            <a href="#cabaran" className="nav-link">Cabaran</a>
            <a href="#solusi" className="nav-link">Ekosistem</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href={whatsappLink} className="btn btn-green btn-large" style={{ padding: '0.6rem 1.25rem' }} target="_blank" rel="noopener noreferrer">
              Bincang Potensi Bisnes
            </a>
          </div>

          <div className={`mobile-dropdown ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href="#cabaran" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Cabaran</a>
            <a href="#solusi" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Ekosistem</a>
            <a href="#faq" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
            <a href={whatsappLink} className="btn btn-green btn-large" target="_blank" rel="noopener noreferrer">
              Bincang Potensi Bisnes
            </a>
          </div>
        </div>
      </nav>

      {/* ── Floating WhatsApp CTA ────────────────── */}
      <a href={whatsappLink} className="floating-cta icon-only" style={{ backgroundColor: 'var(--green-primary)' }} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Kami">
        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* ── 1. Hero Section ──────────────────────── */}
      <header className="hero-green">
        <div className="container hero-grid" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '40px' }}>
          <div className="reveal" style={{ maxWidth: '900px' }}>
            <span className="hero-tag-green mb-1" style={{ marginBottom: '25px' }}>KHAS UNTUK FOUNDER PRODUK, PEMILIK F&B & SYARIKAT LOGISTIK</span>
            <h1 className="hero-h1 text-white">
              Kembangkan Portfolio 'Cashflow' Syarikat Anda Ke <span className="text-green">Industri Automotif</span>
            </h1>
            <p className="hero-lead center" style={{ margin: '20px auto 35px auto', fontSize: '1.25rem', color: '#bce1cc' }}>
              Bisnes utama anda sudah stabil, tapi mencari ruang pelaburan baru yang kalis ekonomi? Jangan buang masa bermula dari sifar. Buka cawangan francais A-Cond Auto Expert (AAE) yang dilengkapi SOP, rangkaian pembekal termurah, dan jenama kukuh.
            </p>
            <div className="hero-actions center" style={{ justifyContent: 'center' }}>
              <a href={whatsappLink} className="btn btn-green btn-large" target="_blank" rel="noopener noreferrer">
                Bincang Potensi Bisnes
              </a>
            </div>
            
            <div className="mini-trust center" style={{ marginTop: '40px', justifyContent: 'center', color: 'var(--text-muted)' }}>
              <span>Diversifikasi Risiko</span>
              <span>Ekonomi Skala</span>
              <span>SOP Plug-and-Play</span>
              <span>Data-Driven</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── 2. Pain Points Section ───────────────── */}
      <section id="cabaran" className="section-block" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header center reveal">
            <div className="kick" style={{ color: 'var(--green-highlight)' }}>Realiti Pasaran</div>
            <h2>Cabaran Mengembangkan Sayap Ke Industri Baru</h2>
            <p className="lead">Sebagai usahawan berpengalaman, anda tahu bahawa masuk ke industri tanpa perancangan adalah satu perjudian.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginTop: '50px' }}>
            {/* Card 1 */}
            <div className="reveal" style={{ background: 'var(--bg-primary)', padding: '40px 30px', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: 'var(--shadow)' }}>
              <div style={{ width: '60px', height: '60px', background: 'rgba(220, 38, 38, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
                <AlertTriangle size={32} color="var(--red-primary)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>Kos 'Try & Error' Sangat Mahal</h3>
              <p className="text-muted">Sama seperti masa awal bisnes anda sekarang, membina sistem, jenama, dan pemasaran untuk industri automotif dari bawah memakan beratus ribu ringgit dan masa bertahun-tahun.</p>
            </div>
            
            {/* Card 2 */}
            <div className="reveal" style={{ background: 'var(--bg-primary)', padding: '40px 30px', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: 'var(--shadow)', transitionDelay: '0.1s' }}>
              <div style={{ width: '60px', height: '60px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
                <Briefcase size={32} color="var(--yellow-highlight)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>Sukar Cari Pembekal Jujur</h3>
              <p className="text-muted">Dalam F&B/Logistik anda ada 'supplier' tetap, tapi dalam automotif anda mungkin 'disembelih' harga alat ganti (spare parts) jika tiada jaringan dan kuota berskala besar.</p>
            </div>
            
            {/* Card 3 */}
            <div className="reveal" style={{ background: 'var(--bg-primary)', padding: '40px 30px', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: 'var(--shadow)', transitionDelay: '0.2s' }}>
              <div style={{ width: '60px', height: '60px', background: 'rgba(29, 164, 92, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
                <Settings size={32} color="var(--green-highlight)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>Ketiadaan Sistem & SOP Automatik</h3>
              <p className="text-muted">Agak mustahil untuk scale-up jika operasi harian bengkel hanya bergantung pada 'mood' atau kemahiran teknikal seorang dua mekanik sahaja tanpa sistem terpusat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Solution Section ──────────────────── */}
      <section id="solusi" className="section-block bg-workshop">
        <div className="container">
          <div className="section-header center reveal">
            <div className="kick" style={{ color: 'var(--green-highlight)' }}>Strategi Pelaburan</div>
            <h2>Dominasi Pasaran Pantas Dengan Ekosistem AAE</h2>
            <p className="lead light">Gunakan kelebihan kami. Kami telah bina ekosistem yang kukuh, anda hanya perlu melabur dan uruskan cawangan.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '50px auto 0 auto' }}>
            {/* Point 1 */}
            <div className="reveal" style={{ display: 'flex', gap: '25px', background: 'rgba(29, 164, 92, 0.08)', padding: '30px', borderRadius: 'var(--radius-lg)', backdropFilter: 'blur(10px)', border: '1px solid rgba(29, 164, 92, 0.2)' }}>
              <div style={{ flexShrink: 0, width: '50px', height: '50px', background: 'var(--green-primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={28} color="#fff" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'var(--green-highlight)' }}>SOP & Blueprint Kejayaan</h3>
                <p style={{ color: '#cbd5e1', lineHeight: 1.6 }}>Anda terima model perniagaan (plug-and-play) yang sudah dites di pasaran. Pengurusan inventori, operasi harian, dan jualan semuanya tertakluk pada SOP kami yang sedang rancak menjana profit.</p>
              </div>
            </div>
            
            {/* Point 2 */}
            <div className="reveal" style={{ display: 'flex', gap: '25px', background: 'rgba(29, 164, 92, 0.08)', padding: '30px', borderRadius: 'var(--radius-lg)', backdropFilter: 'blur(10px)', border: '1px solid rgba(29, 164, 92, 0.2)', transitionDelay: '0.1s' }}>
              <div style={{ flexShrink: 0, width: '50px', height: '50px', background: 'var(--green-primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Layers size={28} color="#fff" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'var(--green-highlight)' }}>Rantaian Bekalan Berpusat (Centralized Supply)</h3>
                <p style={{ color: '#cbd5e1', lineHeight: 1.6 }}>Anda nikmati kelebihan ekonomi skala. Akses bekalan minyak pelincir berkualiti (jenama AZAMU) dan alat ganti pada kos terendah industri untuk memaksimumkan margin keuntungan cawangan anda.</p>
              </div>
            </div>
            
            {/* Point 3 */}
            <div className="reveal" style={{ display: 'flex', gap: '25px', background: 'rgba(29, 164, 92, 0.08)', padding: '30px', borderRadius: 'var(--radius-lg)', backdropFilter: 'blur(10px)', border: '1px solid rgba(29, 164, 92, 0.2)', transitionDelay: '0.2s' }}>
              <div style={{ flexShrink: 0, width: '50px', height: '50px', background: 'var(--green-primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TrendingUp size={28} color="#fff" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'var(--green-highlight)' }}>Sokongan Pemasaran Berpusat</h3>
                <p style={{ color: '#cbd5e1', lineHeight: 1.6 }}>Anda fokus pada jualan dan operasi. Pasukan marketing HQ kami yang akan jalankan kempen iklan (TikTok/Meta/Google) untuk memancing pelanggan terus ke cawangan bengkel anda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. FAQ Section ───────────────────────── */}
      <section id="faq" className="section-block">
        <div className="container">
          <div className="section-header center reveal">
            <div className="kick" style={{ color: 'var(--green-highlight)' }}>Pertanyaan Anda</div>
            <h2>Soalan Lazim (FAQ)</h2>
          </div>
          <Accordion />
        </div>
      </section>

      {/* ── 5. Warning / CTA Section ─────────────── */}
      <section className="section-block" style={{ background: 'linear-gradient(135deg, var(--navy2), var(--bg-primary))', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid rgba(29, 164, 92, 0.15)' }}>
        <div className="container center reveal" style={{ maxWidth: '800px' }}>
          <div style={{ width: '80px', height: '80px', background: 'rgba(29, 164, 92, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px auto' }}>
            <BarChart4 size={40} color="var(--green-highlight)" />
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '20px' }}>Usahawan Bijak Melabur Pada Sistem & Data, Bukan Sekadar Jenama.</h2>
          <p className="lead" style={{ marginBottom: '40px' }}>
            Kembangkan aliran tunai (cashflow) syarikat anda bersama ekosistem automotif yang sedang berkembang pesat. <strong>Slot francais bagi kawasan berpotensi tinggi adalah terhad.</strong>
          </p>
          <a href={whatsappLink} className="btn btn-green btn-large" style={{ padding: '1rem 2.5rem', fontSize: '1.25rem', boxShadow: '0 20px 40px rgba(29,164,92,0.4)' }} target="_blank" rel="noopener noreferrer">
            Tempah Slot Perbincangan VIP
          </a>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────── */}
      <footer style={{ background: 'var(--bg-primary)', padding: '60px 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container center">
          <img src="/aae-logo.png" alt="AAE Logo" style={{ height: '60px', margin: '0 auto 20px auto', opacity: 0.8 }} />
          <p className="text-muted" style={{ fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} A-Cond Auto Expert. Hak Cipta Terpelihara.<br/>
            Sebahagian daripada ekosistem Azam Auto Group.
          </p>
        </div>
      </footer>
    </>
  );
}
