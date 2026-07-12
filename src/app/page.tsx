"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Target, 
  Lightbulb, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  MessageCircleQuestion,
  TrendingUp,
  Banknote,
  Flame,
  ArrowRight,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Wrench,
  Trophy,
  Menu,
  X
} from 'lucide-react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          
          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Brand */}
          <Link href="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/azam-auto-logo-nobg.png" alt="Azam Auto Logo" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
            <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>A-Cond Auto Expert</span>
          </Link>
          
          {/* Desktop Links */}
          <div className="nav-links desktop-only">
            <Link href="#masalah" className="nav-link">Masalah</Link>
            <Link href="#solusi" className="nav-link">Solusi AAE</Link>
            <Link href="#bukti" className="nav-link">Bukti Prestasi</Link>
            <Link href="#tawaran" className="nav-link">Pelaburan</Link>
            <a href="https://api.whatsapp.com/send?phone=60123741726&text=Saya%20berminat%20tentang%20AAE" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem' }} target="_blank" rel="noopener noreferrer">
              WhatsApp Kami
            </a>
          </div>

          {/* Mobile Dropdown */}
          <div className={`mobile-dropdown ${isMobileMenuOpen ? 'open' : ''}`}>
            <Link href="#masalah" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Masalah</Link>
            <Link href="#solusi" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Solusi AAE</Link>
            <Link href="#bukti" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Bukti Prestasi</Link>
            <Link href="#tawaran" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Pelaburan</Link>
            <a href="https://api.whatsapp.com/send?phone=60123741726&text=Saya%20berminat%20tentang%20AAE" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              WhatsApp Kami
            </a>
          </div>
        </div>
      </nav>

      {/* Floating CTA */}
      <a href="https://api.whatsapp.com/send?phone=60123741726&text=Saya%20berminat%20tentang%20AAE" className="floating-cta icon-only" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Kami">
        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Hero Section */}
      <section className="hero-section" style={{ overflow: 'hidden' }}>
        <div className="ambient-glow-blue"></div>
        <div className="ambient-glow-red"></div>
        <div className="hero-content reveal">
          <h1 className="hero-title">
            <span style={{ color: 'var(--red-primary)' }}>BERHENTI</span> BUKA BENGKEL SENDIRI KALAU TAK TAHU CARANYA!
            "Pencen Dah Dekat, Duit Ganjaran LTAT Pun Dah Ada... Tapi Tuan Masih Buntu Nak Buat Bisnes Apa Yang 'Confirm' Jalan & Tak Langgar Dinding?"
          </h1>
          <p className="hero-subtitle animate-fade-in delay-100">
            Khas untuk wira negara: Ketahui bagaimana Tuan boleh miliki perniagaan bengkel pakar penyaman udara kereta yang bersistem penuh. Kami 'suap' A-Z sistemnya, Tuan hanya pantau dan jana untung!
          </p>
          <div className="animate-fade-in delay-200">
            <a href="https://api.whatsapp.com/send?phone=60123741726&text=Saya%20berminat%20tentang%20AAE" className="btn btn-primary btn-large" target="_blank" rel="noopener noreferrer">
              KLIK SINI UNTUK TAHU RAHSIA BINA LEGASI BISNES
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="masalah" className="section" style={{ overflow: 'hidden', position: 'relative' }}>
        <div className="ambient-glow-red" style={{ top: '-20%', left: '-15%' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-red uppercase tracking-wide bold text-center reveal" style={{ fontSize: '0.875rem', marginBottom: '1rem', letterSpacing: '2px' }}>KENALI MASALAH TUAN</p>
          <h2 className="section-title text-center reveal">Adakah Tuan Sedang Berhadapan Situasi Begini?</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '1.5rem' }} className="reveal">
            
            {/* Card 1 — Financial Risk */}
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(220,38,38,0.25)', background: 'var(--bg-secondary)', transition: 'transform 0.4s ease, box-shadow 0.4s ease' }} className="problem-card">
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop&q=80" alt="Risiko Kewangan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-secondary) 0%, transparent 60%)' }}></div>
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--red-primary), var(--red-highlight))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Target size={20} style={{ color: '#fff' }} />
                </div>
              </div>
              <div style={{ padding: '1.25rem 1.5rem 1.75rem' }}>
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.15rem' }}>Ada duit tapi tak tahu arah</h3>
                <p className="text-muted" style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>Takut lebur dan pisang berbuah dua kali kalau tersalah langkah atau ditipu pihak tak bertanggungjawab.</p>
              </div>
            </div>
            
            {/* Card 2 — No Experience */}
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(251,191,36,0.25)', background: 'var(--bg-secondary)', transition: 'transform 0.4s ease, box-shadow 0.4s ease' }} className="problem-card">
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=400&fit=crop&q=80" alt="Risiko Prestasi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-secondary) 0%, transparent 60%)' }}></div>
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--yellow-primary), var(--yellow-highlight))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Lightbulb size={20} style={{ color: '#000' }} />
                </div>
              </div>
              <div style={{ padding: '1.25rem 1.5rem 1.75rem' }}>
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.15rem' }}>Minat ada, kosong pengalaman</h3>
                <p className="text-muted" style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>Minat nak berniaga, tapi tak ada pengalaman urus bisnes atau teknikal kereta.</p>
              </div>
            </div>
            
            {/* Card 3 — Trapped */}
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(37,99,235,0.25)', background: 'var(--bg-secondary)', transition: 'transform 0.4s ease, box-shadow 0.4s ease' }} className="problem-card">
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop&q=80" alt="Risiko Masa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-secondary) 0%, transparent 60%)' }}></div>
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--blue-primary), var(--blue-highlight))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Clock size={20} style={{ color: '#fff' }} />
                </div>
              </div>
              <div style={{ padding: '1.25rem 1.5rem 1.75rem' }}>
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.15rem' }}>Terperangkap di kedai</h3>
                <p className="text-muted" style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>Nak bisnes yang berautomasi supaya ada masa berkualiti untuk keluarga tanpa terperuk di kedai 24 jam.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solusi" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="ambient-glow-blue" style={{ right: 'auto', left: '-20%', top: '20%' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-title text-blue reveal">Sistem Terbukti Bersama AAE</h2>
          <div className="grid grid-2 reveal">
            <div>
              <p className="text-muted" style={{ fontSize: '1.125rem' }}>
                Perniagaan berstruktur di bawah naungan <strong>Azam Auto Body Work & Services (M) Sdn Bhd</strong>. Melalui <em>Brand Operating Monitoring Programme (BOMP)</em>, kami memindahkan segala kepakaran operasi, teknikal, dan pentadbiran terus ke tangan Tuan.
              </p>
              
              <div className="solid-card mt-10" style={{ backgroundColor: 'var(--bg-tertiary)', borderLeft: '4px solid var(--blue-primary)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Trophy className="text-yellow flex-shrink-0" size={28} style={{ marginTop: '2px' }} />
                  <p style={{ margin: 0 }}><strong>Kredibiliti Diiktiraf:</strong> Penerima Anugerah Ikon Usahawan Industri Automotif Negeri Kelantan 2024-2025 melalui Anugerah AURA MARA.</p>
                </div>
              </div>
            </div>
            <div>
              <ul className="check-list">
                <li>
                  <CheckCircle2 className="check-icon text-blue" size={24} />
                  <div><strong>SOP Dah Sedia Ada:</strong> Pantau jualan dan inventori secara real-time melalui sistem Webmax.</div>
                </li>
                <li>
                  <CheckCircle2 className="check-icon text-blue" size={24} />
                  <div><strong>Marketing Kami Yang Buat:</strong> Iklan berpusat agresif diuruskan sepenuhnya oleh HQ.</div>
                </li>
                <li>
                  <CheckCircle2 className="check-icon text-blue" size={24} />
                  <div><strong>Latihan Zero ke Hero:</strong> Latihan teknikal & pengurusan berstruktur disediakan.</div>
                </li>
                <li>
                  <CheckCircle2 className="check-icon text-blue" size={24} />
                  <div><strong>Margin Tinggi:</strong> Keistimewaan harga pemborong terus dari HQ.</div>
                </li>
                <li>
                  <CheckCircle2 className="check-icon text-blue" size={24} />
                  <div><strong>Sokongan Kewangan & Susun Atur:</strong> Bantuan set infrastruktur Standard OEM & dana PUNB/MARA.</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="table-container mt-10">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Kategori Barang</th>
                  <th>Harga Pemborong (RM)</th>
                  <th>Untung Kasar (RM)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Minyak Enjin Lubrex 5W40 (4L)</td><td>105.00</td><td className="text-green bold">38.00</td></tr>
                <tr><td>Pemampat Denso Tulen</td><td>350.00</td><td className="text-green bold">145.00</td></tr>
                <tr><td>Blower Motor Myvi/Alza Local</td><td>80.00</td><td className="text-green bold">55.00</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="bukti" className="section" style={{ position: 'relative', overflow: 'hidden', backgroundImage: 'url("/workshop-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(10, 15, 29, 0.85)', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-title mb-2 reveal">Bukti Realiti On-Ground Result</h2>
          <p className="text-muted mb-6 reveal" style={{ fontSize: '1.125rem' }}>Prestasi Cawangan AAE Gua Musang (Bulan 1 - Sept 2025)</p>

          <div className="stats-grid reveal">
            <div className="stat-card">
              <TrendingUp className="text-white mb-4" size={28} />
              <span className="stat-label">Jumlah Jualan</span>
              <span className="stat-value">RM 39,023.00</span>
            </div>
            <div className="stat-card" style={{ borderColor: 'var(--gold-primary)', backgroundColor: 'var(--bg-tertiary)' }}>
              <Banknote className="text-gold mb-4" size={28} />
              <span className="stat-label text-gold">Keuntungan Kasar</span>
              <span className="stat-value text-gold">RM 16,821.64</span>
              <span className="text-muted" style={{ fontSize: '0.875rem', marginTop: '0.5rem', display: 'block' }}>(Margin: 43.11%)</span>
            </div>
            <div className="stat-card">
              <CheckCircle2 className="text-green mb-4" size={28} />
              <span className="stat-label text-green">Keuntungan Bersih</span>
              <span className="stat-value text-green">RM 10,278.47</span>
            </div>
          </div>
          
          <div className="mt-10" style={{ display: 'inline-block', backgroundColor: 'rgba(16,185,129,0.1)', border: '1px solid var(--green-primary)', padding: '1rem 2rem', borderRadius: 'var(--radius-sm)' }}>
            <strong className="text-green">Jangkaan Titik Pulang Modal (ROI): 8 hingga 12 bulan sahaja!</strong>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="tawaran" className="section bg-grid-pattern" style={{ overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="section-title text-center">Transparensi Modal Pelaburan</h2>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Kategori Perbelanjaan</th>
                  <th style={{ textAlign: 'right' }}>Anggaran Kos (RM)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Yuran Program (Brand Fee - Termasuk Latihan & Papan Tanda)</td><td style={{ textAlign: 'right' }}>20,000.00</td></tr>
                <tr><td>Infrastruktur & Pengubahsuaian</td><td style={{ textAlign: 'right' }}>25,000.00</td></tr>
                <tr><td>Sistem & Pentadbiran</td><td style={{ textAlign: 'right' }}>14,000.00</td></tr>
                <tr><td>Kelengkapan Automotif</td><td style={{ textAlign: 'right' }}>30,500.00</td></tr>
                <tr><td>Pematuhan Perundangan</td><td style={{ textAlign: 'right' }}>4,500.00</td></tr>
                <tr><td>Inventori Permulaan & Modal Pusingan</td><td style={{ textAlign: 'right' }}>56,000.00</td></tr>
                <tr className="total-row"><td>JUMLAH KESELURUHAN (ANGGARAN)</td><td className="text-gold" style={{ textAlign: 'right', fontSize: '1.25rem' }}>150,000.00</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <p className="text-muted mb-6 text-center" style={{ fontStyle: 'italic' }}>*Nota: Jika bajet Tuan kurang dari jumlah ini, beritahu kami. HQ sedia membimbing permohonan pembiayaan agensi!</p>
            <div className="solid-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', backgroundColor: 'var(--bg-tertiary)' }}>
              <ShieldCheck className="text-gold flex-shrink-0" size={32} />
              <p><strong>Jaminan 100% Hak Milik Mutlak:</strong> Tuan adalah pemilik mutlak perniagaan dan aset bengkel tanpa campur tangan hak milik.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scarcity & CTA */}
      <section className="scarcity-banner reveal">
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'var(--red-primary)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: 'var(--radius-full)', marginBottom: '1.5rem' }}>
            <Flame size={24} />
            <span style={{ fontWeight: 700, letterSpacing: '1px' }}>ZON KAWASAN TERHAD</span>
          </div>
          <h2 className="section-title text-red" style={{ marginBottom: '1.5rem', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>PELUANG SANGAT TERHAD!</h2>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2.5rem', fontWeight: 600, lineHeight: 1.6 }}>
            Tindakan pantas diperlukan sebelum zon kawasan Tuan dipenuhi. Jangan biarkan duit pencen lebur begitu sahaja di bank atau hangus ke tangan scammer kerana tiada hala tuju. Bina legasi perniagaan yang kukuh untuk anak cucu hari ini.
          </p>
          <a href="https://api.whatsapp.com/send?phone=60123741726&text=Saya%20berminat%20tentang%20AAE" className="btn btn-red btn-large" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.125rem' }}>
            SAYA BERMINAT! NAK SEMBANG SANTAI <ArrowRight size={24} />
          </a>
          <p style={{ marginTop: '1.5rem', fontWeight: 700, opacity: 0.85 }}>Kita sembang dari hati ke hati tanpa sebarang komitmen kewangan untuk hari ini.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="ambient-glow-red" style={{ top: '0%', left: 'auto', right: '-10%' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-title text-center reveal">Soalan Lazim (FAQ)</h2>
          <div className="faq-container reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
            
            <details className="faq-item">
              <summary className="faq-summary">
                <span style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <MessageCircleQuestion className="text-blue" size={24} />
                  Adakah saya perlu pandai baiki kereta untuk buka bengkel AAE?
                </span>
                <ChevronDown className="faq-icon" size={20} />
              </summary>
              <div className="faq-content">
                Tidak. Modul latihan Zero to Hero kami akan melatih Tuan pengurusan, dan mekanik dari segi teknikal. Automasi webmax bantu Tuan memantau kerja.
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">
                <span style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <MessageCircleQuestion className="text-gold" size={24} />
                  Bagaimana jika modal pencen saya tak cukup RM150,000?
                </span>
                <ChevronDown className="faq-icon" size={20} />
              </summary>
              <div className="faq-content">
                Jangan risau. Pasukan AABW sedia membimbing dan menguruskan permohonan pembiayaan agensi kerajaan seperti PUNB atau MARA.
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
          <div className="footer-grid">
            
            {/* Column 1: Brand & Socials */}
            <div className="footer-col">
              <h2 className="text-white" style={{ marginBottom: '1.25rem' }}>
                <img src="/azam-auto-logo-nobg.png" alt="Azam Auto Logo" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
              </h2>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '2rem' }}>
                A-Cond Auto Expert (AAE) adalah jenama di bawah Azam Auto Body Work (M) Sdn Bhd.
              </p>
              <div className="social-links">
                <a href="https://www.tiktok.com/@azamautohqkubangkerian" className="social-icon" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100067465844743&mibextid=wwXIfr" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://api.whatsapp.com/send?phone=60123741726&text=Saya%20berminat%20tentang%20AAE" className="social-icon" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Column 2: Contact Info */}
            <div className="footer-col">
              <h3 className="footer-heading text-blue">HUBUNGI KAMI</h3>
              <ul className="contact-list">
                <li>
                  <MapPin className="text-red flex-shrink-0" size={20} />
                  <span>Lot 1966a, Jalan Wakaf Stan, Kubang Kerian, 16150 Kota Bharu, Kelantan.</span>
                </li>
                <li>
                  <Phone className="text-red flex-shrink-0" size={20} />
                  <span>+60 12-374 1726</span>
                </li>
                <li>
                  <Mail className="text-red flex-shrink-0" size={20} />
                  <span>adminhq@aabwsb.com</span>
                </li>
              </ul>
              
              <div className="footer-divider"></div>
              
              <h3 className="footer-heading text-blue">WAKTU OPERASI</h3>
              <p className="text-muted mb-1" style={{ fontSize: '0.95rem' }}>Sab - Kha: 9:30 AM - 6:00 PM</p>
              <p className="text-red" style={{ fontWeight: 700, fontSize: '0.95rem' }}>Jumaat: Tutup</p>
            </div>

            {/* Column 3: Map */}
            <div className="footer-col">
              <h3 className="footer-heading text-blue">CARI KAMI</h3>
              <div className="map-container" style={{ width: '100%', height: '100%', minHeight: '200px' }}>
                <iframe 
                  src="https://maps.google.com/maps?q=Lot+1966a,+Jalan+Wakaf+Stan,+Kubang+Kerian,+16150+Kota+Bharu,+Kelantan&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: 'var(--radius-md)', minHeight: '200px' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>

          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="container">
            <p>© {new Date().getFullYear()} AZAM AUTO BODYWORKS & SERVICES (M) SDN BHD. Hak Cipta Terpelihara.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
