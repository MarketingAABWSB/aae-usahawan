"use client";
import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Star,
  Check,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const MOU_IMAGES = [
  { src: '/iktbn1.jpeg', alt: '' },
  { src: '/tandatangan_iktbn.jpeg', alt: '' },
  { src: '/iktbn2.jpeg', alt: '' },
];

function Lightbox({ images, startIndex, onClose }: { images: { src: string; alt: string }[]; startIndex: number; onClose: () => void }) {
  const [idx, setIdx] = useState(startIndex);

  const goPrev = useCallback(() => setIdx((i) => (i - 1 + images.length) % images.length), [images.length]);
  const goNext = useCallback(() => setIdx((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handler);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handler);
    };
  }, [onClose, goPrev, goNext]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close"><X size={28} /></button>

      <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Previous">
        <ChevronLeft size={32} />
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[idx].src} alt={images[idx].alt} loading="lazy" />
        <p className="lightbox-caption">{images[idx].alt}</p>
        <span className="lightbox-counter">{idx + 1} / {images.length}</span>
      </div>

      <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Next">
        <ChevronRight size={32} />
      </button>
    </div>
  );
}

const HERO_SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1000&fit=crop&q=80',
    alt: 'Jurutera Profesional',
    label: 'Sistem Berstruktur',
    sub: 'Operasi moden, telus dan dipantau melalui sistem pintar.',
  },
  {
    src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=1000&fit=crop&q=80',
    alt: 'Pemantauan Mudah',
    label: 'Pemantauan Mudah',
    sub: 'Sesuai untuk profesional yang sibuk dengan kerja hakiki.',
  },
];

function HeroPhotoStack() {
  const [active, setActive] = useState(0);

  return (
    <div className="hero-visual">
      {HERO_SLIDES.map((slide, i) => {
        const isBig = i === active;
        return (
          <div
            key={i}
            className={`hero-photo ${isBig ? 'hero-photo-big' : 'hero-photo-small'}`}
            onClick={() => setActive(i)}
          >
            <img src={slide.src} alt={slide.alt} />
            <div className="hero-photo-overlay">
              <b>{slide.label}</b>
              <small>{slide.sub}</small>
            </div>
          </div>
        );
      })}

      <div className="hero-badge">
        Ikon Usahawan<br />Industri Automotif<br /><small>AURA MARA</small>
      </div>
    </div>
  );
}
function SolutionAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const items = [
    { title: "SOP & Blueprint Kejayaan", desc: "Kami serahkan model perniagaan (plug-and-play) yang sudah dites di pasaran. Anda tak perlu cipta sistem dari sifar." },
    { title: "Rantaian Bekalan Berpusat (HQ)", desc: "Anda nikmati kelebihan ekonomi skala. Dapat bekalan pelincir jenama AZAMU dan alat ganti pada kos terendah untuk margin maksima." },
    { title: "Sokongan Pemasaran Berpusat", desc: "Fokus pada operasi bengkel, pasukan pemasaran HQ akan tembak iklan (TikTok/Meta/Google) untuk pancing trafik terus ke cawangan anda." },
  ];
  return (
    <div className="accordion-wrapper reveal">
      {items.map((it, i) => (
        <div key={i} className={`accordion-item ${openIdx === i ? 'open' : ''}`} onClick={() => setOpenIdx(openIdx === i ? null : i)}>
          <div className="accordion-title">
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={18} color="var(--gold)" /> <b>{it.title}</b></span>
            <ChevronDown size={18} className="accordion-icon" />
          </div>
          <div className="accordion-content">
            <p>{it.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [mouLightboxIdx, setMouLightboxIdx] = useState<number | null>(null);

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

  return (
    <>
      {/* ── Navigation ─────────────────────────────── */}
      <nav className="navbar">
        <div className="container nav-container">
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <a href="#" className="nav-brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0 }); }}>
            <img src="/aae-logo.png" alt="A-Cond Auto Expert" className="nav-logo" />
            <div className="nav-brand-divider"></div>
            <img src="/azam-auto-logo-nobg.png" alt="Azam Auto Logo" className="nav-logo azam-logo" />
          </a>

          <div className="nav-links desktop-only">
            <a href="#masalah" className="nav-link">Masalah</a>
            <a href="#peluang" className="nav-link">Peluang</a>
            <a href="#solusi" className="nav-link">Solusi</a>
            <a href="#bukti" className="nav-link">Bukti</a>
            <a href="#tawaran" className="nav-link">Pelaburan</a>
            <a href="#hubungi" className="nav-link">Hubungi</a>
            <a href="https://api.whatsapp.com/send?phone=60123741726&text=Saya%20berminat%20tentang%20Peluang%20Francais%20AAE%20untuk%20Usahawan" className="btn btn-primary btn-large" style={{ padding: '0.6rem 1.25rem' }} target="_blank" rel="noopener noreferrer">
              Sembang Dengan Kami
            </a>
          </div>

          <div className={`mobile-dropdown ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href="#masalah" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Masalah</a>
            <a href="#peluang" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Peluang</a>
            <a href="#solusi" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Solusi</a>
            <a href="#bukti" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Bukti</a>
            <a href="#tawaran" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Pelaburan</a>
            <a href="#hubungi" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Hubungi</a>
            <a href="https://api.whatsapp.com/send?phone=60123741726&text=Saya%20berminat%20tentang%20Peluang%20Francais%20AAE%20untuk%20Usahawan" className="btn btn-primary btn-large" target="_blank" rel="noopener noreferrer">
              Sembang Dengan Kami
            </a>
          </div>
        </div>
      </nav>

      {/* ── Floating WhatsApp CTA ────────────────── */}
      <a href="https://api.whatsapp.com/send?phone=60123741726&text=Saya%20berminat%20tentang%20Peluang%20Francais%20AAE%20untuk%20Usahawan" className="floating-cta icon-only" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Kami">
        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>

      {/* ═══════════════════════════════════════════════
          1 ▸ HERO
      ═══════════════════════════════════════════════ */}
      <header className="hero">
        <div className="container hero-grid">
          {/* Left — Text */}
          <div>
            <span className="hero-tag">KHAS UNTUK FOUNDER PRODUK, PEMILIK F&B & SYARIKAT LOGISTIK</span>

            <h1 className="hero-h1">
              Kembangkan Portfolio 'Cashflow' Syarikat Anda Ke Industri Automotif.
            </h1>

            <p className="hero-lead">
              Bisnes utama anda sudah stabil, tapi mencari ruang pelaburan baru? Jangan buang masa bermula dari sifar. Buka cawangan francais A-Cond Auto Expert (AAE) yang dilengkapi SOP, rangkaian pembekal termurah, dan jenama kukuh.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary btn-large" href="#peluang">Lihat Pelan Pelaburan</a>
              <a className="btn btn-ghost" href="https://api.whatsapp.com/send?phone=60123741726&text=Saya%20berminat%20tentang%20Peluang%20Francais%20AAE%20untuk%20Usahawan" target="_blank" rel="noopener noreferrer">Jadualkan Konsultasi</a>
            </div>

            <div className="mini-trust">
              <span>SOP Plug-and-Play</span>
              <span>Ekonomi Skala</span>
              <span>Marketing Berpusat</span>
            </div>

          </div>

          {/* Right — Rotating Photo Stack */}
          <HeroPhotoStack />
        </div>

      </header>

      {/* Stat Bar */}
      <div className="stat-bar">
        <div className="container stat-bar-inner">
          <div className="stat-bar-item">
            <b>33 Juta+</b>
            <span>Kenderaan berdaftar</span>
          </div>
          <div className="stat-bar-item">
            <b>Aircond</b>
            <span>Keperluan harian</span>
          </div>
          <div className="stat-bar-item">
            <b>2 Sumber</b>
            <span>Parts + upah kerja</span>
          </div>
          <div className="stat-bar-item">
            <b>Sistem</b>
            <span>Pantau melalui dashboard</span>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          2 ▸ PROBLEM / PAIN
      ═══════════════════════════════════════════════ */}
      <section id="masalah" className="section-block">
        <div className="container two-col">
          {/* Newspaper Card */}
          <div className="newspaper-card reveal">
            <div className="newspaper-top">
              <span>LAPORAN KOSMO!</span>
              <span>1 FEB 2023</span>
            </div>
            <h3 className="newspaper-headline">
              'Kenderaan lebih banyak daripada penduduk Malaysia'
            </h3>
            <div className="newspaper-img">
              <img
                src="/news-pic.jpg"
                alt="Keratan Akhbar Kosmo"
              />
            </div>
            <p className="newspaper-body">
              KUALA LUMPUR: Rekod sejarah! Industri pasca-jualan automotif (aftermarket) dijangka meledak susulan data pendaftaran kenderaan yang terus meningkat. Bayangkan potensi permintaan untuk pusat servis kenderaan.
            </p>
            <a
              href="https://www.kosmo.com.my/2023/02/01/kenderaan-lebih-banyak-daripada-penduduk-malaysia/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ width: '100%', marginTop: '16px', fontSize: '0.85rem' }}
            >
              Baca Fakta Pasaran Penuh
            </a>
          </div>

          {/* Pain Points */}
          <div className="reveal">
            <h2 className="section-title">
              3 Cabaran Usahawan Mengembangkan Sayap Ke Industri Baru
            </h2>

            <div className="pain-list">
              <div className="pain-item">
                <span className="pain-num">01</span>
                <div>
                  <b>Kos 'Try & Error' Sangat Mahal</b>
                  <p>Membina sistem, jenama, dan pemasaran untuk industri automotif dari bawah memakan beratus ribu ringgit dan masa bertahun-tahun.</p>
                </div>
              </div>
              <div className="pain-item">
                <span className="pain-num">02</span>
                <div>
                  <b>Sukar Cari Pembekal Jujur</b>
                  <p>Dalam F&B/Logistik anda ada 'supplier' tetap, tapi dalam automotif anda mungkin 'disembelih' harga alat ganti tanpa jaringan kuat.</p>
                </div>
              </div>
              <div className="pain-item">
                <span className="pain-num">03</span>
                <div>
                  <b>Ketiadaan Sistem & SOP Automatik</b>
                  <p>Susah nak scale-up jika operasi harian bengkel hanya bergantung pada 'mood' atau kemahiran teknikal seorang dua mekanik sahaja.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3 ▸ INDUSTRY FACTS (DARK)
      ═══════════════════════════════════════════════ */}
      <section id="peluang" className="section-block dark-section">
        <div className="container">
          <div className="section-header center reveal">
            <p className="kick gold">Kenapa Industri Aircond Kereta?</p>
            <h2 className="section-title">Permintaan Yang Sentiasa Ada. Margin Dari Dua Arah.</h2>
            <p className="lead">
              Di Malaysia, aircond kereta bukan sekadar keselesaan. Apabila aircond panas,
              pelanggan mahu masalah diselesaikan segera.
            </p>
          </div>

          <div className="facts-grid">
            <article className="fact-card reveal">
              <span className="fact-num">1</span>
              <h3>Lambakan Kenderaan</h3>
              <p>Jutaan kenderaan berada di jalan raya dan semuanya perlukan servis berkala.</p>
            </article>
            <article className="fact-card reveal">
              <span className="fact-num">2</span>
              <h3>Cuaca Panas Terik</h3>
              <p>Aircond ialah keperluan harian. Kerosakan biasanya tidak boleh ditangguhkan lama.</p>
            </article>
            <article className="fact-card reveal">
              <span className="fact-num">3</span>
              <h3>Dua Sumber Keuntungan</h3>
              <ul>
                <li>Margin alat ganti pada harga borong.</li>
                <li>Upah servis, flushing dan troubleshooting.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4 ▸ SOLUTION
      ═══════════════════════════════════════════════ */}
      <section id="solusi" className="section-block">
        <div className="container two-col">
          {/* Left — Text */}
          <div className="reveal">
            <p className="kick">Penyelesaian Berjenama</p>
            <h2 className="section-title">
              Dominasi Pasaran Pantas Dengan Ekosistem Sedia Ada AAE.
            </h2>
            <p className="lead">
              AAE ialah ekosistem perniagaan berstruktur di bawah Azam Auto Body Work &amp;
              Services (M) Sdn. Bhd. Melalui sistem terpusat, ia dicipta khas untuk pelaburan yang kalis risiko.
            </p>

            <SolutionAccordion />

            <a className="btn btn-primary btn-large" href="https://api.whatsapp.com/send?phone=60123741726&text=Saya%20berminat%20tentang%20Peluang%20Francais%20AAE%20untuk%20Usahawan" target="_blank" rel="noopener noreferrer" style={{ marginTop: '1.5rem' }}>
              Saya Mahu Tahu Sistem AAE
            </a>
          </div>

          {/* Right — Dashboard Mockup */}
          <div className="dashboard reveal">
            <div className="dash-top">
              <b>AAE Business Dashboard</b>
              <span className="dash-live">● Live</span>
            </div>
            <div className="dash-grid">
              <div className="dash-card">
                <small>Jualan Bulan Ini</small>
                <b>RM39,023</b>
              </div>
              <div className="dash-card">
                <small>Untung Kasar</small>
                <b>43.11%</b>
              </div>
              <div className="dash-card">
                <small>Stok Aktif</small>
                <b>238 Item</b>
              </div>
              <div className="dash-card">
                <small>Job Selesai</small>
                <b>96 Unit</b>
              </div>
              <div className="dash-card dash-chart">
                <small>Prestasi Mingguan</small>
                <div className="dash-bars">
                  <i style={{ height: '35%' }} />
                  <i style={{ height: '52%' }} />
                  <i style={{ height: '44%' }} />
                  <i style={{ height: '70%' }} />
                  <i style={{ height: '61%' }} />
                  <i style={{ height: '86%' }} />
                  <i style={{ height: '94%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5 ▸ TRUST / MoU
      ═══════════════════════════════════════════════ */}
      <section className="section-block trust-section">
        <div className="container two-col">
          {/* MoU Document */}
          <div className="mou-card reveal">
            <div className="mou-logos" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ background: '#0f172a', padding: '6px 12px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                  <img src="/aae-logo.png" alt="AAE Logo" style={{ maxHeight: '35px', maxWidth: '100%', objectFit: 'contain' }} />
                </div>
              </div>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <b style={{ fontSize: '0.8rem', textAlign: 'center' }}>MEMORANDUM<br />OF UNDERSTANDING</b>
              </div>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <img src="/iktbn-logo.png" alt="IKTBN Logo" style={{ maxHeight: '60px', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
            </div>
            <h3 className="mou-title">Kerjasama Pembangunan Kemahiran Automotif</h3>
            <div className="mou-body" style={{ textAlign: 'justify', fontSize: '0.9rem', lineHeight: '1.6' }}>
              <p>
                <strong>BACHOK:</strong> Institut Kemahiran Tinggi Belia Negara (IKTBN) Bachok telah memeterai Memorandum Persefahaman (MoU) dengan rakan industri, iaitu Azam Auto Body Work &amp; Services (M) Sdn. Bhd. dan Grand Riverview Hotel pada 2 Julai lalu. Majlis menandatangani MoU tersebut telah berlangsung di Bilik Mesyuarat Utama IKTBN Bachok bermula jam 10.00 pagi. Majlis ini turut diserikan dengan kehadiran Pengarah IKTBN Bachok, Encik Mohd Soufi Bin Mohd Ibrahim serta wakil-wakil daripada pihak syarikat.
              </p>
              <br />
              <p>
                Menerusi jalinan kerjasama strategik bersama Azam Auto Body Work &amp; Services, kedua-dua pihak telah mencapai persefahaman dalam beberapa skop utama bagi memperkasakan ekosistem latihan kemahiran. Antara inisiatif yang ditekankan adalah penyediaan penempatan Latihan Industri (LI) dan pembukaan peluang pekerjaan kepada pelajar IKTBN sebaik sahaja mereka menamatkan latihan. Selain itu, program ini juga akan memberi manfaat kepada tenaga pengajar menerusi Latihan Sangkutan Industri (LSI).
              </p>
              <br />
              <p>
                Pihak industri turut komited untuk menyumbang kepakaran teknologi, bahan guna habis, kelengkapan mesin latihan, serta memberikan khidmat nasihat bagi menambah baik kurikulum latihan sedia ada agar selari dengan keperluan semasa. Sebagai timbal balik, pihak IKTBN Bachok akan terus menyokong pihak industri dengan menawarkan penyertaan dalam program-program anjuran Kementerian Belia dan Sukan (KBS) seperti pameran interaktif dan temu duga terbuka. Langkah proaktif ini dijangka akan terus melonjakkan kebolehpasaran graduan TVET dan merapatkan hubungan antara institusi latihan kerajaan dengan sektor swasta.
              </p>
            </div>

          </div>

          {/* Trust Points */}
          <div className="reveal">
            <p className="kick">Credential &amp; Trust</p>
            <h2 className="section-title">Sistem Yang Dipercayai Institusi Kerajaan.</h2>
            <p className="lead">
              Kerjasama rasmi ini merangkumi pembangunan kurikulum, latihan industri,
              jaminan pekerjaan dan perkongsian teknologi automotif.
            </p>
            <div className="trust-points">
              <div className="trust-point">
                <b>Kurikulum Teknikal</b>
                <span>Membantu membentuk dan mengemas kini latihan pelajar.</span>
              </div>
              <div className="trust-point">
                <b>Latihan Industri &amp; Kerjaya</b>
                <span>Menyediakan tempat OJT dan laluan pekerjaan.</span>
              </div>
              <div className="trust-point">
                <b>Pakar Rujuk Automotif</b>
                <span>Perkongsian teknologi terkini kepada tenaga pengajar.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container reveal" style={{ marginTop: '80px', maxWidth: '850px' }}>
          <div className="section-header center">
            <h3 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '25px' }}>Sekitar Majlis Menandatangani MoU</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1fr', gap: '15px', alignItems: 'center' }}>
            <img onClick={() => setMouLightboxIdx(0)} src="/iktbn1.jpeg" alt="Bergambar bersama Pengarah" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', aspectRatio: '4/3', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', cursor: 'pointer' }} />
            <img onClick={() => setMouLightboxIdx(1)} src="/tandatangan_iktbn.jpeg" alt="Sesi Tandatangan MoU" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', aspectRatio: '4/3', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', transform: 'scale(1.05)', zIndex: 1, position: 'relative', cursor: 'pointer' }} />
            <img onClick={() => setMouLightboxIdx(2)} src="/iktbn2.jpeg" alt="Mesyuarat IKTBN" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', aspectRatio: '4/3', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', cursor: 'pointer' }} />
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
          7 ▸ BENEFITS
      ═══════════════════════════════════════════════ */}
      <section className="section-block bg-workshop">
        <div className="container">
          <div className="section-header center reveal">
            <p className="kick">Manfaat Secara Langsung</p>
            <h2 className="section-title">Masuk Dengan Keyakinan. Operasi Disokong Oleh Sistem.</h2>
          </div>

          <div className="benefits-grid">
            {[
              { num: '01', title: 'Automasi Operasi Harian', desc: 'Sistem POS & inventori mengawal segala transaksi tanpa perlu anda berada di bengkel setiap masa.' },
              { num: '02', title: 'Rangkaian Pembekal Berpusat', desc: 'Akses terus kepada kilang dan pembekal utama dengan harga borong (ekonomi skala) yang jauh lebih murah.' },
              { num: '03', title: 'Sokongan Pemasaran Digital', desc: 'Fokus urus bengkel, HQ akan uruskan iklan berbayar (Ads) untuk pastikan cawangan sentiasa menerima trafik pelanggan.' },
              { num: '04', title: 'Penyediaan Tenaga Mahir', desc: 'Masalah cari pekerja selesai. Bantuan saringan dan latihan mekanik diuruskan oleh pakar HQ bersama IKTBN.' },
              { num: '05', title: 'Sistem Francais Turnkey', desc: 'Kami sediakan segalanya: daripada ubah suai kedai, kelengkapan mesin sehinggalah susun atur bengkel sedia beroperasi.' },
            ].map((b) => (
              <article key={b.num} className="benefit-card reveal" data-n={b.num}>
                <span className="benefit-icon">{b.num}</span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          8 ▸ SOCIAL PROOF (DARK)
      ═══════════════════════════════════════════════ */}
      <section id="bukti" className="section-block dark-section">
        <div className="container proof-grid">
          {/* Left — Metrics */}
          <div className="reveal">
            <p className="kick gold">Bukti Angka Sebenar</p>
            <h2 className="section-title">
              Prestasi Bulan Pertama Cawangan AAE Gua Musang.
            </h2>
            <p className="lead">
              Rekod JBG Auto Garage menunjukkan potensi sistem apabila operasi, harga,
              stok dan pemasaran bergerak dalam satu rangka kerja.
            </p>

            <div className="metrics">
              <div className="metric-item">
                <span>Jualan Keseluruhan</span>
                <b>RM39,023.00</b>
              </div>
              <div className="metric-item">
                <span>Untung Kasar — 43.11%</span>
                <b>RM16,821.64</b>
              </div>
              <div className="metric-item metric-hot">
                <span>Untung Bersih Masuk Poket</span>
                <b>RM10,278.47</b>
              </div>
            </div>
          </div>

          {/* Right — ROI */}
          <div className="roi-card reveal">
            <small>Jangkaan Balik Modal</small>
            <div className="roi-big">18</div>
            <p>BULAN</p>
            <small>Bergantung pada prestasi dan keadaan operasi sebenar.</small>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          9 ▸ OFFER / INVESTMENT
      ═══════════════════════════════════════════════ */}
      <section id="tawaran" className="section-block">
        <div className="container offer-grid">
          {/* Price Card */}
          <div className="price-card reveal">
            <small>Anggaran Pelaburan Keseluruhan</small>
            <div className="price-big">RM150,000</div>
            <p>
              Tiada kos tersembunyi. Anggaran ini merangkumi komponen utama untuk
              memulakan bengkel AAE.
            </p>
            <div className="include-grid">
              <span>✓ Yuran jenama</span>
              <span>✓ Ubah suai kedai</span>
              <span>✓ Komputer &amp; CCTV</span>
              <span>✓ Mesin aircond</span>
              <span>✓ Setem guaman</span>
              <span>✓ Stok permulaan</span>
            </div>
          </div>

          {/* Side Notes */}
          <div className="side-notes">
            <div className="side-note reveal">
              <b>Bajet Belum Cukup?</b>
              <p>
                Pasukan boleh membantu menyediakan kertas kerja permohonan dana atau
                pembiayaan seperti PUNB dan MARA.
              </p>
            </div>
            <div className="side-note reveal">
              <b>Hak Milik Mutlak 100%</b>
              <p>
                Ini bukan share saham. Bengkel ialah milik Tuan; AAE membekalkan sistem
                dan jenama.
              </p>
            </div>
            <div className="side-note reveal">
              <b>Setup 1–2 Bulan</b>
              <p>
                Selepas lokasi disahkan, proses ubah suai dan setup penuh dianggarkan
                mengambil masa satu hingga dua bulan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          10 ▸ GUARANTEE
      ═══════════════════════════════════════════════ */}
      <section className="section-block guarantee-section">
        <div className="container two-col">
          {/* Seal */}
          <div className="guarantee-seal reveal">
            <div>
              <b>100%</b>
              <span>Hak Milik Tuan</span>
            </div>
          </div>

          {/* Text */}
          <div className="reveal">
            <p className="kick">Pembalikan Risiko</p>
            <h2 className="section-title">Tuan Adalah Bos Besar Bengkel Tuan Sendiri.</h2>
            <p className="lead">
              AAE menyediakan sistem, latihan, jenama dan sokongan. Pemilikan perniagaan
              kekal pada Tuan.
            </p>
            <div className="scarcity-notice">
              <b>Kuota Mengikut Zon Adalah Terhad</b>
              <span>
                Demi menjaga kualiti dan eksklusiviti, satu kawasan tidak dibuka secara
                berlebihan. Zon yang telah diambil mungkin tidak lagi tersedia.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          11 ▸ CTA
      ═══════════════════════════════════════════════ */}
      <section id="hubungi" className="section-block cta-section">
        <div className="container">
          <div className="cta-box reveal">
            <span className="hero-tag">Sesi Penilaian Eksklusif (Percuma)</span>
            <h2 className="section-title" style={{ marginTop: '1.25rem' }}>
              Jangan Buat Keputusan Sebelum Meneliti Angka & Fakta.
            </h2>
            <p className="lead">
              Fahami unjuran ROI, struktur pengurusan risiko, dan teliti kelayakan kawasan anda sebelum menyertai rangkaian francais kami.
            </p>

            <div className="steps-grid">
              <div className="step-card">
                <b>01</b>
                <span>Tempah slot jadual melalui WhatsApp.</span>
              </div>
              <div className="step-card">
                <b>02</b>
                <span>Sesi pembentangan ROI & operasi (Zoom / Bersemuka).</span>
              </div>
              <div className="step-card">
                <b>03</b>
                <span>Pemilihan lokasi dan pendaftaran bermula.</span>
              </div>
            </div>

            <a
              className="btn btn-wa btn-large"
              href="https://api.whatsapp.com/send?phone=60123741726&text=Saya%20berminat%20tentang%20Peluang%20Francais%20AAE%20untuk%20Usahawan."
              target="_blank"
              rel="noopener noreferrer"
            >
              Tempah Sesi Konsultasi Eksklusif <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          12 ▸ FAQ
      ═══════════════════════════════════════════════ */}
      <section className="section-block">
        <div className="container">
          <div className="section-header center">
            <p className="kick">Soalan Lazim</p>
            <h2 className="section-title">Perkara Yang Selalu Ditanya.</h2>
          </div>

          <div className="faq-list">
            <details className="faq-item" open>
              <summary className="faq-summary">
                <span>Saya tiada latar belakang teknikal automotif, adakah bisnes ini sesuai untuk saya kembangkan?</span>
                <ChevronDown className="faq-icon" size={20} />
              </summary>
              <div className="faq-content">
                Sangat sesuai. Anda berfungsi sebagai pengarah dan pemantau. Urusan teknikal harian dan bekalan tenaga kerja mekanik diuruskan sepenuhnya oleh ekosistem AAE.
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">
                <span>Macam mana saya nak tahu bengkel buat untung?</span>
                <ChevronDown className="faq-icon" size={20} />
              </summary>
              <div className="faq-content">
                Sistem Point-of-Sale (POS) dan Jobsheet digital kami membolehkan anda melihat laporan kewangan secara real-time yang tidak boleh dimanipulasi.
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">
                <span>Berapa lama nak siapkan bengkel?</span>
                <ChevronDown className="faq-icon" size={20} />
              </summary>
              <div className="faq-content">
                Selepas lokasi disahkan, proses ubah suai dan setup penuh dianggarkan
                mengambil masa lebih kurang satu hingga dua bulan.
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">
                <span>Betul ke HQ bantu bab marketing?</span>
                <ChevronDown className="faq-icon" size={20} />
              </summary>
              <div className="faq-content">
                Ya. Pasukan marketing HQ akan menjalankan kempen Facebook, TikTok dan
                Google yang memfokuskan penduduk sekitar radius bengkel.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          13 ▸ WARNING BANNER
      ═══════════════════════════════════════════════ */}
      <section className="warning-banner">
        <div className="container warning-inner">
          <span className="warning-icon">!</span>
          <div>
            <h2>Usahawan Bijak Melabur Pada Sistem, Bukan Sekadar Jenama.</h2>
            <p>
              Kembangkan aliran tunai (cashflow) syarikat anda bersama ekosistem automotif yang sedang berkembang pesat. Kawasan berpotensi tinggi terhad.
            </p>
          </div>
          <a className="btn btn-ghost" href="#hubungi">Tempah Slot Perbincangan VIP</a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          14 ▸ FOOTER
      ═══════════════════════════════════════════════ */}
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
                <a href="https://www.tiktok.com/@acond.auto.expert" className="social-icon" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" /></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61584142345060&mibextid=wwXIfr&rdid=Pn6oXsAQyeH4lPBE&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19YXpFWLvd%2F%3Fmibextid%3DwwXIfr#" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                <a href="https://api.whatsapp.com/send?phone=60123741726&text=Saya%20berminat%20tentang%20Peluang%20Francais%20AAE%20untuk%20Usahawan" className="social-icon" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
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

              <div className="footer-divider" />

              <h3 className="footer-heading text-blue">WAKTU OPERASI</h3>
              <p className="text-muted mb-1" style={{ fontSize: '0.95rem' }}>Sab - Kha: 9:30 AM - 6:00 PM</p>
              <p className="text-red" style={{ fontWeight: 700, fontSize: '0.95rem' }}>Jumaat: Tutup</p>
            </div>

            {/* Column 3: Map */}
            <div className="footer-col">
              <h3 className="footer-heading text-blue">CARI KAMI</h3>
              <div className="map-container" style={{ width: '100%', height: '100%', minHeight: '200px' }}>
                <iframe
                  src="https://maps.google.com/maps?q=Azam+Auto+Body+Work+Kubang+Kerian&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: 'var(--radius-md)', minHeight: '200px' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p>© {new Date().getFullYear()} AZAM AUTO BODYWORKS &amp; SERVICES (M) SDN BHD. Hak Cipta Terpelihara.</p>
          </div>
        </div>
      </footer>


      {mouLightboxIdx !== null && (
        <Lightbox images={MOU_IMAGES} startIndex={mouLightboxIdx} onClose={() => setMouLightboxIdx(null)} />
      )}
    </>
  );
}
