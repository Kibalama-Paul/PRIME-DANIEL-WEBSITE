const { useState, useEffect, useRef } = React;

// --- SVG ICON HELPERS ---
const IconSparkles = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const IconChevronDown = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const IconShieldCheck = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconTruck = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1e1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1m-4 0a1 1 0 102 0m-2 0a1 1 0 112 0m6 0a1 1 0 102 0m-2 0a1 1 0 112 0" />
  </svg>
);

const IconDollarSign = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconHeadphones = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 00-14 0m14 0a2 2 0 012 2v6a2 2 0 01-2 2h-1a2 2 0 01-2-2v-6a2 2 0 012-2m-12 0a2 2 0 00-2 2v6a2 2 0 002 2h1a2 2 0 002-2v-6a2 2 0 00-2-2" />
  </svg>
);

const IconAward = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const IconStar = ({ className = "w-3 h-3" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const IconPhone = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const IconMessageSquare = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const IconCopy = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const IconCheck = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const IconMapPin = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconGlobe = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const IconShare = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 107.032-2.096 3 3 0 00-7.032 2.096zm0 9.21a3 3 0 107.032 2.096 3 3 0 00-7.032-2.096z" />
  </svg>
);

const IconCompass = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const IconHome = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const IconArrowUp = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
);

const IconX = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconArrowRight = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const IconCalendar = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const IconClock = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconUsers = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const IconMail = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconUser = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const IconSend = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

// --- BRAND LOGO COMPONENT ---
const PrimeDanielLogo = ({ size = 'md', className = '' }) => {
  const heightMap = { sm: 38, md: 48, lg: 64, xl: 90 };
  const h = heightMap[size] || 48;

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none text-white ${className}`}>
      <svg
        viewBox="0 0 320 135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto max-h-full"
        style={{ height: `${h}px` }}
      >
        <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 40 40 C 60 25, 115 16, 185 16 C 215 16, 235 24, 275 42 C 282 45, 282 50, 272 52 C 255 54, 222 52, 205 52" />
          <path d="M 38 40 C 30 38, 22 38, 18 40 C 14 42, 14 48, 22 50 C 30 52, 42 52, 58 52" />
          <path d="M 75 52 L 75 32 C 75 32, 98 28, 118 36 C 128 40, 120 52, 92 52 Z" strokeWidth="2" />
          <path d="M 132 52 L 132 29 C 132 29, 172 26, 188 38 C 198 46, 172 52, 132 52 Z" strokeWidth="2" />
          <circle cx="225" cy="52" r="14" strokeWidth="2.2" />
          <path d="M 68 52 C 68 40, 86 40, 86 52" />
        </g>
        <text
          x="160"
          y="95"
          textAnchor="middle"
          fill="currentColor"
          fontSize="25"
          fontWeight="800"
          letterSpacing="0.16em"
          fontFamily="'DM Sans', system-ui, sans-serif"
        >
          PRIME DANIEL
        </text>
        <text
          x="160"
          y="118"
          textAnchor="middle"
          fill="currentColor"
          opacity="0.82"
          fontSize="11"
          fontWeight="600"
          letterSpacing="0.3em"
          fontFamily="'DM Sans', system-ui, sans-serif"
        >
          LUXURY CHAUFFEUR
        </text>
      </svg>
    </div>
  );
};

// --- BACKGROUND CANVAS SCROLL ANIMATION COMPONENT ---
function BackgroundCanvas() {
  const canvasRef = useRef(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const TOTAL_FRAMES = 236;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const imgs = [];
    let count = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const padded = String(i).padStart(3, '0');
      img.src = `frames/ezgif-frame-${padded}.jpg`;

      img.onload = () => {
        count++;
        setLoadedCount(count);
        if (count === 1) drawCover(img);
      };
      img.onerror = () => {
        count++;
        setLoadedCount(count);
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      renderFrame();
    }

    function drawCover(img) {
      if (!img || !img.complete || img.naturalWidth === 0) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const scale = Math.max(cw / iw, ch / ih);
      const nw = iw * scale;
      const nh = ih * scale;
      const x = (cw - nw) / 2;
      const y = (ch - nh) / 2;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, x, y, nw, nh);
    }

    function updateTargetFrame() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) {
        targetFrameRef.current = 0;
        return;
      }
      const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));
      targetFrameRef.current = scrollFraction * (TOTAL_FRAMES - 1);
    }

    let animId;
    function renderFrame() {
      currentFrameRef.current += (targetFrameRef.current - currentFrameRef.current) * 0.12;
      const idx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(currentFrameRef.current)));
      const img = imagesRef.current[idx];
      if (img) drawCover(img);
      animId = requestAnimationFrame(renderFrame);
    }

    window.addEventListener('resize', resize);
    window.addEventListener('scroll', updateTargetFrame, { passive: true });
    window.addEventListener('wheel', updateTargetFrame, { passive: true });

    resize();
    updateTargetFrame();
    renderFrame();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', updateTargetFrame);
      window.removeEventListener('wheel', updateTargetFrame);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 block"
      />
      {loadedCount < TOTAL_FRAMES && (
        <div
          className={`fixed inset-0 z-50 bg-[#0b0c10] flex flex-col items-center justify-center transition-opacity duration-500 ${
            loadedCount > 15 ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div className="mb-4">
            <PrimeDanielLogo size="lg" />
          </div>
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-150"
              style={{ width: `${(loadedCount / TOTAL_FRAMES) * 100}%` }}
            />
          </div>
        </div>
      )}
    </>
  );
}

// --- NAVBAR COMPONENT ---
function Navbar({ onOpenModal }) {
  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 z-20 relative bg-black/20 backdrop-blur-md text-white border-b border-white/10 rounded-b-2xl">
      <div className="w-full md:w-auto flex items-center justify-between">
        <div
          onClick={() => onOpenModal('none')}
          className="cursor-pointer flex items-center select-none hover:opacity-90 transition-opacity"
        >
          <PrimeDanielLogo size="md" />
        </div>
        <div className="md:hidden">
          <button
            onClick={() => onOpenModal('order')}
            className="bg-white text-black hover:bg-white/90 px-4 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all cursor-pointer shadow-md active:scale-95"
          >
            Get Started
          </button>
        </div>
      </div>

      <nav className="flex items-center justify-center space-x-3 sm:space-x-8 text-xs sm:text-sm font-semibold text-white/90 w-full md:w-auto py-1 sm:py-0 border-t border-white/10 md:border-t-0 pt-2.5 md:pt-0">
        <button
          onClick={() => onOpenModal('models')}
          className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors cursor-pointer px-2.5 py-1.5 rounded-lg bg-white/5 md:bg-transparent hover:bg-white/10 active:bg-white/20"
        >
          <span>About Us</span>
          <IconChevronDown className="w-3.5 h-3.5 opacity-70" />
        </button>
        <button
          onClick={() => onOpenModal('services')}
          className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors cursor-pointer px-2.5 py-1.5 rounded-lg bg-white/5 md:bg-transparent hover:bg-white/10 active:bg-white/20"
        >
          <span>Services</span>
          <IconChevronDown className="w-3.5 h-3.5 opacity-70" />
        </button>
        <button
          onClick={() => onOpenModal('booking')}
          className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors cursor-pointer px-2.5 py-1.5 rounded-lg bg-white/5 md:bg-transparent hover:bg-white/10 active:bg-white/20"
        >
          <span>Pricing</span>
          <IconChevronDown className="w-3.5 h-3.5 opacity-70" />
        </button>
      </nav>

      <div className="hidden md:flex items-center space-x-6">
        <button
          onClick={() => onOpenModal('order')}
          className="bg-white text-black hover:bg-white/90 px-5 py-2 rounded-full text-sm font-semibold tracking-tight transition-all cursor-pointer shadow-md hover:scale-[1.02] active:scale-95"
        >
          Get Started
        </button>
      </div>
    </header>
  );
}

// --- HERO BANNER COMPONENT ---
function HeroBanner({ onOpenModal }) {
  return (
    <section className="relative w-full min-h-[85vh] py-20 sm:py-28 md:py-36 flex flex-col justify-center items-center px-4 sm:px-8 text-white overflow-hidden font-['DM_Sans',sans-serif]">
      <div className="flex flex-col items-center text-center max-w-4xl z-10 space-y-8 bg-black/20 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl">
        <div
          onClick={() => onOpenModal('order')}
          className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-medium text-white/90 cursor-pointer hover:bg-white/20 hover:border-white/40 transition-all shadow-sm"
        >
          <IconSparkles className="w-3.5 h-3.5 text-white" />
          <span>Early Access Beta</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl">
          Travel in Comfort. Arrive in Style.
        </h1>

        <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-3xl px-2">
          Experience premium chauffeur services tailored for your lifestyle. Whether it's your daily commute, airport transfer, school run, or a private city tour, Prime Daniel Luxury Chauffeur delivers comfort, safety, and professionalism every mile of the journey.
        </p>

        <div className="pt-2 flex flex-row items-center justify-center space-x-4">
          <button
            onClick={() => onOpenModal('order')}
            className="bg-white text-black hover:bg-white/90 px-8 py-3.5 rounded-full text-sm font-semibold tracking-tight cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

// --- PARTNERS & BENEFITS SECTION ---
function PartnersAndBenefitsSection() {
  return (
    <section className="w-full bg-black/20 backdrop-blur-md text-white font-['DM_Sans',sans-serif] py-20 px-4 sm:px-8 lg:px-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-8">
          <p className="text-xs sm:text-sm font-normal text-white/70 tracking-wider">
            Partners of world leading companies
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-90">
            <div className="flex items-center space-x-2 text-white">
              <span className="font-['Playfair_Display',serif] italic font-semibold tracking-tighter text-2xl">Ferrari</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <span className="font-bold tracking-widest text-sm sm:text-base uppercase">TOYOTA</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <span className="font-bold tracking-[0.3em] text-sm sm:text-base uppercase">T E S L A</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center font-bold text-xs italic">H</div>
              <span className="font-extrabold tracking-widest text-sm sm:text-base uppercase">HIGER</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <span className="font-semibold tracking-wider text-sm sm:text-base italic">Marcopolo</span>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6 max-w-3xl mx-auto pt-6">
          <div>
            <span className="bg-[#ff4500] text-white text-[11px] font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-lg inline-block">
              Key Benefits
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white leading-tight">
            BENEFITS OF OUR SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-end space-y-4 hover:border-white/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <IconShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-white leading-snug">Safety & top quality</h3>
          </div>

          <div className="bg-[#ff4500] text-white rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white">
              <IconTruck className="w-5 h-5" />
            </div>
            <div className="space-y-2 z-10">
              <h3 className="text-xl font-bold text-white">On time delivery</h3>
              <p className="text-xs text-white/90 leading-relaxed font-normal">
                Streamlined luxury chauffeur solutions ensure smooth, reliable and timely transportation.
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-end space-y-4 hover:border-white/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <IconDollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-white leading-snug">Insurance coverage</h3>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-end space-y-4 hover:border-white/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <IconHeadphones className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-white leading-snug">24/7 customer support</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- OUR TEAM SECTION ---
function OurTeamSection() {
  const teamMembers = [
    {
      id: 'team-1',
      name: 'Sentongo Daniel',
      role: 'Founder & Managing Director',
      experience: '14+ Yrs Experience',
      rating: '5.0',
      phone: '+971 58 273 7082',
      whatsapp: 'https://wa.me/971582833390',
      image: 'https://res.cloudinary.com/dirfcqs1f/image/upload/v1785981462/Grok_Image_2026-07-14_at_18.28.37_qvk08j.jpg',
    },
    {
      id: 'team-2',
      name: 'Jabari Osei',
      role: 'Head of VIP Chauffeur Operations',
      experience: '11+ Yrs Experience',
      rating: '4.9',
      phone: '+971 58 273 7082',
      whatsapp: 'https://wa.me/971582833390',
      image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'team-3',
      name: 'Malik Adeleke',
      role: 'Senior Executive Chauffeur',
      experience: '9+ Yrs Experience',
      rating: '5.0',
      phone: '+971 58 273 7082',
      whatsapp: 'https://wa.me/971582833390',
      image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'team-4',
      name: 'Kibalama Paul',
      role: 'Web Master & Graphics Editor',
      experience: '12+ Yrs Experience',
      rating: '4.9',
      phone: '+256757460297',
      whatsapp: 'https://wa.me/256757460297',
      image: 'https://res.cloudinary.com/dirfcqs1f/image/upload/v1748599977/OBI_8725_arcf8s.jpg',
    },
  ];

  return (
    <section className="w-full bg-black/25 backdrop-blur-md text-white font-['DM_Sans',sans-serif] py-20 px-4 sm:px-8 lg:px-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-white/80 uppercase">
            <IconAward className="w-3.5 h-3.5 text-white" />
            <span>Executive Leadership & Drivers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Meet Our Team
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-normal leading-relaxed">
            Our highly trained, discreet executive chauffeurs and leaders ensure every journey meets the highest luxury standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {teamMembers.map((m) => (
            <div
              key={m.id}
              className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/15 rounded-2xl p-5 flex flex-col justify-between hover:border-white/40 transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10 space-y-4">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 shadow-lg">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white flex items-center space-x-1 shadow-md">
                    <IconStar className="w-3 h-3 text-amber-400" />
                    <span>{m.rating}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-md border border-white/30 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white tracking-wide shadow-md">
                    {m.experience}
                  </div>
                </div>

                <div className="pt-1">
                  <h3 className="text-lg font-bold text-white tracking-tight">{m.name}</h3>
                  <p className="text-xs font-medium text-white/70 leading-snug mt-0.5">{m.role}</p>
                </div>
              </div>

              <div className="relative z-10 pt-5 mt-4 border-t border-white/10 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${m.phone.replace(/\s+/g, '')}`}
                  className="py-2.5 px-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-xs font-semibold text-white flex items-center justify-center space-x-1.5 transition-all cursor-pointer shadow-sm hover:scale-[1.02] active:scale-95"
                >
                  <IconPhone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
                <a
                  href={m.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-emerald-600/80 hover:bg-emerald-600 border border-emerald-400/40 rounded-xl text-xs font-semibold text-white flex items-center justify-center space-x-1.5 transition-all cursor-pointer shadow-sm hover:scale-[1.02] active:scale-95"
                >
                  <IconMessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- TESTIMONIALS SECTION ---
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Executive Vice President',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&h=256&q=80',
      quote: "Prime Daniel has transformed my business travel routine. From seamless airport pickups to late-night executive meetings, their chauffeurs are always punctual, discrete, and exceptionally professional.",
    },
    {
      name: 'David Patel',
      role: 'Private Wealth Advisor',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&h=256&q=80',
      quote: "I booked Prime Daniel for a full-day private city tour with VIP clients. The immaculate vehicle condition and chauffeur's attentive service exceeded all expectations.",
    },
    {
      name: 'Emily Carter',
      role: 'Luxury Event Coordinator',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&h=256&q=80',
      quote: 'Managing guest transit for international galas demands absolute reliability. Prime Daniel delivers smooth, safe, and first-class chauffeur services every single journey.',
    },
  ];

  return (
    <section className="w-full bg-black/20 backdrop-blur-md text-white font-['DM_Sans',sans-serif] py-20 px-4 sm:px-8 lg:px-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            What people say
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-normal leading-relaxed">
            Discover what our distinguished clients have to say about their journey experiences with Prime Daniel Luxury Chauffeur services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white/[0.04] backdrop-blur-md border border-white/15 rounded-2xl p-8 flex flex-col justify-between space-y-6 hover:bg-white/[0.07] hover:border-white/30 transition-all duration-300 shadow-xl group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-white/30 shadow-md bg-neutral-800">
                  <img src={item.avatar} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{item.name}</h3>
                  <p className="text-xs text-white/60 font-medium mt-0.5">{item.role}</p>
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal pt-2">{item.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- CONTACT & LOCATION SECTION ---
function ContactLocationSection() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'dsetongo@yahoo.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full bg-black/25 backdrop-blur-md text-white font-['DM_Sans',sans-serif] py-20 px-4 sm:px-8 lg:px-12 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full bg-white/[0.03] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[520px]">
          <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-14 flex flex-col justify-between z-10 space-y-8 bg-black/60 backdrop-blur-md">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Say hello to us!
              </h2>
              <p className="text-sm sm:text-base text-white/70 font-normal leading-relaxed max-w-md">
                Let’s talk business or just have a coffee. We would love to hear from you!
              </p>
            </div>

            <div className="space-y-6 text-sm">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase block mb-1">ADDRESS</span>
                <p className="text-white text-sm sm:text-base font-medium leading-snug">
                  PRIME DANIEL Headquarters, Sheikh Mohammed bin Rashid Blvd, Downtown Dubai, UAE
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase block mb-1">DIRECT CALL</span>
                  <a href="tel:+971582737082" className="text-white text-sm sm:text-base font-medium hover:text-blue-400 transition-colors">
                    +971 58 273 7082
                  </a>
                </div>
                <div>
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase block mb-1">WHATSAPP CONCIERGE</span>
                  <a href="https://wa.me/971582833390" target="_blank" rel="noopener noreferrer" className="text-emerald-400 text-sm sm:text-base font-medium hover:underline">
                    +971 58 283 3390
                  </a>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase block mb-1">E-MAIL</span>
                <a href={`mailto:${emailAddress}`} className="text-white text-sm sm:text-base font-medium hover:text-blue-400 transition-colors">
                  {emailAddress}
                </a>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={handleCopyEmail}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-xs sm:text-sm font-medium flex items-center space-x-2 cursor-pointer transition-all"
              >
                {copied ? (
                  <>
                    <IconCheck className="w-4 h-4 text-emerald-400" />
                    <span>Copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <IconCopy className="w-4 h-4 text-white" />
                    <span>Copy E-mail address</span>
                  </>
                )}
              </button>

              <div className="flex items-center space-x-3">
                <a href="#dubai" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20">
                  <IconMapPin className="w-4 h-4" />
                </a>
                <a href="#global" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20">
                  <IconGlobe className="w-4 h-4" />
                </a>
                <a href="#share" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20">
                  <IconShare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-full bg-neutral-900 overflow-hidden border-t lg:border-t-0 lg:border-l border-white/15">
            <iframe
              title="PRIME DANIEL Dubai Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28884.28188168598!2d55.2635!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sDowntown%20Dubai%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              className="w-full h-full min-h-[380px] lg:min-h-full border-0 grayscale contrast-125 brightness-75 filter"
              allowFullScreen={false}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 flex flex-col items-center">
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-blue-500 opacity-40"></span>
                <div className="relative w-6 h-6 rounded-full bg-white border-4 border-black flex items-center justify-center shadow-2xl">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>
              </div>
              <div className="mt-3 bg-black/90 border border-white/30 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wider text-white shadow-xl flex items-center space-x-1.5">
                <IconCompass className="w-3.5 h-3.5 text-blue-400" />
                <span>PRIME DANIEL Dubai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- SOCIAL LINKS FOOTER ---
function SocialLinksFooter({ onGoHome }) {
  const [clickedPlatform, setClickedPlatform] = useState(null);

  const handleGoHome = () => {
    if (onGoHome) onGoHome();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = (name, url) => {
    setClickedPlatform(name);
    setTimeout(() => setClickedPlatform(null), 2000);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const socials = [
    { id: 'whatsapp', name: 'WhatsApp', border: 'from-emerald-400 to-green-600', url: 'https://wa.me/971582833390' },
    { id: 'facebook', name: 'Facebook', border: 'from-blue-500 to-cyan-500', url: 'https://facebook.com' },
    { id: 'instagram', name: 'Instagram', border: 'from-yellow-400 via-pink-500 to-purple-600', url: 'https://instagram.com' },
    { id: 'tiktok', name: 'TikTok', border: 'from-cyan-400 to-rose-600', url: 'https://tiktok.com' },
  ];

  return (
    <footer className="w-full bg-black/30 backdrop-blur-md text-white font-['DM_Sans',sans-serif] py-20 px-4 sm:px-8 lg:px-12 border-t border-white/10 relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-12">
        <div className="text-center space-y-3 flex flex-col items-center">
          <PrimeDanielLogo size="lg" />
          <span className="text-[11px] font-semibold tracking-[0.25em] text-white/50 uppercase block pt-2">Official Channels</span>
          <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white">Connect with PRIME DANIEL</h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {socials.map((s) => (
            <div key={s.id} className="flex flex-col items-center space-y-3 group">
              <button
                onClick={() => handleClick(s.name, s.url)}
                className={`p-[2px] rounded-3xl bg-gradient-to-br ${s.border} cursor-pointer transition-all duration-300 transform group-hover:-translate-y-1.5`}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#07090e] rounded-[22px] flex items-center justify-center relative overflow-hidden transition-colors group-hover:bg-[#0c0f17]">
                  <span className="text-white font-bold text-xs">{s.name}</span>
                </div>
              </button>
              <span className="text-xs font-normal text-white/70 tracking-wide group-hover:text-white transition-colors">{s.name}</span>
            </div>
          ))}
        </div>

        {clickedPlatform && (
          <div className="text-xs text-white/80 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
            Opening PRIME DANIEL {clickedPlatform}...
          </div>
        )}

        <div className="pt-2">
          <button
            onClick={handleGoHome}
            className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-[#181a24] hover:bg-[#222534] border border-white/20 text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg backdrop-blur-md group"
          >
            <IconHome className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
            <span>Return to Home</span>
            <IconArrowUp className="w-3.5 h-3.5 text-white/50 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="pt-8 border-t border-white/10 w-full text-center">
          <p className="text-xs text-white/40 tracking-widest uppercase">© 2026 PAUL TECHNOLOGIES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// --- BOOKING MODAL ---
function GetStartedBookingModal({ isOpen, onClose }) {
  const [tripType, setTripType] = useState('oneway');
  const [fromLocation, setFromLocation] = useState('Dubai International Airport (DXB)');
  const [toLocation, setToLocation] = useState('Burj Al Arab Executive Suite');
  const [departDate, setDepartDate] = useState('2026-08-10');
  const [returnDate, setReturnDate] = useState('2026-08-15');
  const [vehicleClass, setVehicleClass] = useState('First Class Sedan (2 Passengers)');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 font-['DM_Sans'] overflow-y-auto">
      <div className="relative w-full max-w-2xl my-auto bg-gradient-to-br from-[#1b1c24]/90 via-[#121319]/85 to-[#0a0a0e]/90 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-30 text-white/70 hover:text-white p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
        >
          <IconX className="w-5 h-5" />
        </button>

        <div className="w-full p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8 z-10 bg-black/40 backdrop-blur-xl">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white/60 text-xs font-mono tracking-widest uppercase">
              <IconSparkles className="w-4 h-4 text-[#ff4500]" />
              <span>Prime Daniel Chauffeur Reservations</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Where are we driving?</h1>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="inline-flex p-1.5 rounded-full bg-[#16171f]/80 backdrop-blur-md border border-white/10">
                <button
                  type="button"
                  onClick={() => setTripType('oneway')}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${tripType === 'oneway' ? 'bg-white text-black font-bold' : 'text-white/60'}`}
                >
                  One way
                </button>
                <button
                  type="button"
                  onClick={() => setTripType('round')}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${tripType === 'round' ? 'bg-white text-black font-bold' : 'text-white/60'}`}
                >
                  Round trip
                </button>
                <button
                  type="button"
                  onClick={() => setTripType('hourly')}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${tripType === 'hourly' ? 'bg-white text-black font-bold' : 'text-white/60'}`}
                >
                  Hourly Chauffeur
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-medium text-white/50 tracking-wider uppercase pl-2">From</label>
                  <div className="relative">
                    <IconMapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="text"
                      value={fromLocation}
                      onChange={(e) => setFromLocation(e.target.value)}
                      required
                      className="w-full bg-[#161720]/80 text-white text-xs font-medium pl-10 pr-4 py-3.5 rounded-2xl border border-white/10 focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-medium text-white/50 tracking-wider uppercase pl-2">To</label>
                  <div className="relative">
                    <IconMapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ff4500]" />
                    <input
                      type="text"
                      value={toLocation}
                      onChange={(e) => setToLocation(e.target.value)}
                      required
                      className="w-full bg-[#161720]/80 text-white text-xs font-medium pl-10 pr-4 py-3.5 rounded-2xl border border-white/10 focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-medium text-white/50 tracking-wider uppercase pl-2">Depart</label>
                  <div className="relative">
                    <IconCalendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" />
                    <input
                      type="date"
                      value={departDate}
                      onChange={(e) => setDepartDate(e.target.value)}
                      className="w-full bg-[#161720]/80 text-white text-xs font-medium pl-9 pr-3 py-3 rounded-2xl border border-white/10 focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-medium text-white/50 tracking-wider uppercase pl-2">{tripType === 'hourly' ? 'Hours' : 'Return'}</label>
                  <div className="relative">
                    <IconClock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" />
                    <input
                      type={tripType === 'hourly' ? 'number' : 'date'}
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full bg-[#161720]/80 text-white text-xs font-medium pl-9 pr-3 py-3 rounded-2xl border border-white/10 focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-medium text-white/50 tracking-wider uppercase pl-2">Class & Guests</label>
                  <div className="relative">
                    <IconUsers className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" />
                    <select
                      value={vehicleClass}
                      onChange={(e) => setVehicleClass(e.target.value)}
                      className="w-full bg-[#161720]/80 text-white text-xs font-medium pl-9 pr-3 py-3 rounded-2xl border border-white/10 focus:outline-none focus:border-white/40 appearance-none cursor-pointer"
                    >
                      <option value="First Class Sedan (2 Passengers)">First Class Sedan</option>
                      <option value="VIP SUV Escalade (6 Passengers)">VIP SUV Escalade</option>
                      <option value="Maybach Luxury (3 Passengers)">Maybach Luxury</option>
                      <option value="Armored Security Escort">Armored Escort</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#ff4500] to-[#ff6a00] text-white font-bold text-sm tracking-wide rounded-2xl shadow-lg hover:brightness-110 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Book Now</span>
                  <IconArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6 py-6 bg-white/5 border border-white/15 rounded-3xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <IconCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Chauffeur Reserved!</h3>
                <p className="text-xs text-white/70 leading-relaxed max-w-sm mx-auto">
                  Thank you! Our VIP dispatch team will contact you shortly to confirm your trip from <strong className="text-white">{fromLocation}</strong> to <strong className="text-white">{toLocation}</strong>.
                </p>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 rounded-full border border-white/20 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Modify Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// --- PRICING ORDER MODAL (Get Started → Join us in a Snap) ---
function PricingOrderModal({ isOpen, onClose }) {
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('Male');
  const [selectedPackage, setSelectedPackage] = useState('City Tour & Daily Chauffeur (AED 800/day)');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [virtualToken, setVirtualToken] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const generateToken = () => {
    const a = Math.floor(1000 + Math.random() * 9000);
    const b = Math.floor(1000 + Math.random() * 9000);
    return `PD-${a}-${b}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setVirtualToken(generateToken()); setIsSubmitting(false); }, 600);
  };

  const handleCopy = () => {
    if (virtualToken) { navigator.clipboard.writeText(virtualToken); setIsCopied(true); setTimeout(() => setIsCopied(false), 2500); }
  };

  const handleReset = () => { setVirtualToken(null); setFullName(''); setEmail(''); setContact(''); onClose(); };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 font-['DM_Sans'] overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#15141e] border border-white/10 rounded-[2rem] p-6 sm:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(139,92,246,0.12)] text-white space-y-6 my-auto overflow-hidden">
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-indigo-600/20 rounded-full blur-[80px] pointer-events-none" />
        <button onClick={onClose} className="absolute top-5 right-5 text-white/60 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition-all cursor-pointer z-20" title="Close">
          <IconX className="w-5 h-5" />
        </button>

        {!virtualToken ? (
          <>
            <div className="text-center space-y-2 relative z-10 pt-2">
              <span className="text-[11px] font-mono tracking-[0.25em] text-purple-400 font-bold uppercase block">VIP Package Reservation</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Join us in a Snap</h2>
              <p className="text-xs text-white/60 max-w-xs mx-auto">Complete your details below to place your luxury chauffeur order.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10 pt-1">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-white/80 pl-1 block">Full Name</label>
                <div className="relative">
                  <IconUser className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input type="text" required value={fullName} onChange={e => setFullName(e.target.value)} placeholder="John Doe" className="w-full bg-[#1c1b28] text-white text-xs font-medium pl-10 pr-4 py-3.5 rounded-xl border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] focus:outline-none focus:border-purple-500/60 transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-white/80 pl-1 block">Gender</label>
                  <select value={gender} onChange={e => setGender(e.target.value)} className="w-full bg-[#1c1b28] text-white text-xs font-medium px-3.5 py-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-purple-500/60 transition-all cursor-pointer appearance-none">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-white/80 pl-1 block">Package Chosen</label>
                  <select value={selectedPackage} onChange={e => setSelectedPackage(e.target.value)} className="w-full bg-[#1c1b28] text-white text-xs font-medium px-3.5 py-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-purple-500/60 transition-all cursor-pointer appearance-none truncate">
                    <option value="Airport Transfers & Single Trip (AED 250)">Airport Transfer (AED 250)</option>
                    <option value="City Tour & Daily Chauffeur (AED 800/day)">City Tour & Daily (AED 800)</option>
                    <option value="Executive Protection VIP Elite (AED 6,500/month)">VIP Protection (AED 6,500/mo)</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-white/80 pl-1 block">Email Address</label>
                <div className="relative">
                  <IconMail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="example@site.com" className="w-full bg-[#1c1b28] text-white text-xs font-medium pl-10 pr-4 py-3.5 rounded-xl border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] focus:outline-none focus:border-purple-500/60 transition-all" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-white/80 pl-1 block">Contact / Phone Number</label>
                <div className="relative">
                  <IconPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input type="tel" required value={contact} onChange={e => setContact(e.target.value)} placeholder="+971 50 123 4567" className="w-full bg-[#1c1b28] text-white text-xs font-medium pl-10 pr-4 py-3.5 rounded-xl border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] focus:outline-none focus:border-purple-500/60 transition-all" />
                </div>
              </div>
              <div className="pt-3">
                <button type="submit" disabled={isSubmitting} className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wide shadow-[0_10px_25px_rgba(147,51,234,0.4)] hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50">
                  {isSubmitting ? <span>Processing Order...</span> : <><span>Begin Your Journey</span><IconSend className="w-4 h-4" /></>}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center space-y-6 relative z-10 py-2">
            <div className="w-14 h-14 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-300 flex items-center justify-center mx-auto shadow-lg">
              <IconCheck className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">Order Submitted Successfully</span>
              <h2 className="text-2xl font-bold text-white">Your Virtual Token</h2>
              <p className="text-xs text-white/70 max-w-sm mx-auto">Thank you, <strong className="text-white">{fullName}</strong>! Your order has been dispatched.</p>
            </div>
            <div className="bg-[#1e1c2b] border-2 border-purple-500/50 rounded-2xl p-5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 block">Official Reservation Token</span>
              <div className="flex items-center justify-center space-x-3 bg-black/40 border border-purple-500/30 rounded-xl py-3 px-4">
                <span className="font-mono text-xl sm:text-2xl font-extrabold text-purple-300 tracking-wider">{virtualToken}</span>
                <button onClick={handleCopy} className="p-2 rounded-lg bg-purple-600/30 hover:bg-purple-600/50 border border-purple-400/40 text-purple-200 transition-all cursor-pointer" title="Copy Token">
                  <IconCopy className="w-4 h-4" />
                </button>
              </div>
              {isCopied && <span className="text-[11px] text-emerald-400 font-semibold block">Token copied to clipboard!</span>}
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-left text-xs space-y-2">
              <div className="flex items-center space-x-2 text-white/80 font-medium"><IconMail className="w-3.5 h-3.5 text-purple-400 shrink-0" /><span>Virtual token sent to: <strong className="text-white">{email}</strong></span></div>
              <div className="flex items-center space-x-2 text-white/80 font-medium"><IconShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" /><span>Order details forwarded to CEO: <strong className="text-white">dsetongo@yahoo.com</strong></span></div>
            </div>
            <button onClick={handleReset} className="w-full py-3.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-all cursor-pointer">Done & Return to Site</button>
          </div>
        )}
      </div>
    </div>
  );
}

// --- NAV MODAL (ABOUT US, SERVICES, PRICING) ---
function NavModal({ modal, onClose }) {
  if (!modal || modal === 'none' || modal === 'get-started' || modal === 'order') return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 font-['DM_Sans']">
      <div className="relative w-full max-w-2xl bg-black border border-white/20 rounded-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <IconX className="w-6 h-6" />
        </button>

        {modal === 'models' && (
          <div className="space-y-6">
            <div>
              <span className="text-xs tracking-[0.25em] text-white/60 uppercase font-semibold">About Us</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                Luxury Transportation with a Personal Touch
              </h2>
            </div>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              At Prime Daniel Luxury Chauffeur, we believe transportation is more than simply getting from one place to another—it's about providing an exceptional travel experience. Our professional chauffeurs are trained to deliver punctual, discreet, and first-class service while ensuring your comfort and safety throughout every journey.
            </p>
            <div className="pt-2 space-y-2">
              <h3 className="text-base font-bold text-white uppercase tracking-wider mb-3">Why Choose Us?</h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="p-2.5 rounded-lg bg-white/5 border border-white/10">• Professional & experienced chauffeurs</li>
                <li className="p-2.5 rounded-lg bg-white/5 border border-white/10">• Luxury, clean, and well-maintained vehicles</li>
                <li className="p-2.5 rounded-lg bg-white/5 border border-white/10">• Safe and reliable transportation</li>
                <li className="p-2.5 rounded-lg bg-white/5 border border-white/10">• 24/7 customer support</li>
              </ul>
            </div>
          </div>
        )}

        {modal === 'booking' && (
          <div className="space-y-6">
            <div>
              <span className="text-xs tracking-[0.25em] text-[#ff4500] uppercase font-bold">Luxury Chauffeur Services</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">Pricing & Packages</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#121216] border border-white/10 rounded-2xl p-5 space-y-3">
                <h3 className="text-lg font-bold text-white">Airport Transfer</h3>
                <div className="text-xl font-extrabold text-white">AED 250</div>
                <p className="text-xs text-white/70">Punctual flight tracking and meet & greet aid.</p>
              </div>
              <div className="bg-[#181a24] border border-[#ff4500]/50 rounded-2xl p-5 space-y-3 relative shadow-lg">
                <h3 className="text-lg font-bold text-white">City Tour & Daily</h3>
                <div className="text-xl font-extrabold text-white">AED 800</div>
                <p className="text-xs text-white/70">Full-day luxury chauffeur for meetings or leisure.</p>
              </div>
              <div className="bg-[#121216] border border-white/10 rounded-2xl p-5 space-y-3">
                <h3 className="text-lg font-bold text-white">VIP Protection</h3>
                <div className="text-xl font-extrabold text-white">AED 6,500</div>
                <p className="text-xs text-white/70">Executive Protection & bodyguard escort.</p>
              </div>
            </div>
          </div>
        )}

        {modal === 'services' && (
          <div className="space-y-6">
            <div>
              <span className="text-xs tracking-[0.25em] text-[#ff4500] uppercase font-bold">Our Premium Services</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">Services Tailored for You</h2>
            </div>
            <div className="space-y-3">
              {[
                { title: 'School Pick-up & Drop-off', desc: 'Reliable, safe transportation for your children.' },
                { title: 'Personal Chauffeur', desc: 'Dedicated driver for meetings, events, or daily travel.' },
                { title: 'Airport Transfers', desc: 'Punctual airport pickups with live flight monitoring.' },
                { title: 'City Guide Tours', desc: 'Explore Dubai and cities with experienced guides.' },
                { title: 'Executive Protection', desc: 'Trained security personnel for VIP travel.' },
              ].map((s, idx) => (
                <div key={idx} className="bg-[#121214] border border-white/10 rounded-xl p-4 space-y-1">
                  <h3 className="text-base font-bold text-white">{s.title}</h3>
                  <p className="text-xs text-white/70">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// --- MAIN APP ENTRY COMPONENT ---
function App() {
  const [activeModal, setActiveModal] = useState('none');

  return (
    <div className="min-h-screen relative text-white font-['DM_Sans',sans-serif] selection:bg-white selection:text-black flex flex-col antialiased">
      {/* Background Smooth Canvas Scroll Sequence */}
      <BackgroundCanvas />

      {/* Foreground Content Layout */}
      <div className="relative z-10 flex-1 flex flex-col">
        <Navbar onOpenModal={setActiveModal} />

        <main className="flex-1 flex flex-col">
          <HeroBanner onOpenModal={setActiveModal} />
          <PartnersAndBenefitsSection />
          <OurTeamSection />
          <TestimonialsSection />
          <ContactLocationSection />
          <SocialLinksFooter onGoHome={() => setActiveModal('none')} />
        </main>
      </div>

      {/* Modals */}
      <PricingOrderModal
        isOpen={activeModal === 'order'}
        onClose={() => setActiveModal('none')}
      />

      <GetStartedBookingModal
        isOpen={activeModal === 'booking'}
        onClose={() => setActiveModal('none')}
      />

      <NavModal
        modal={activeModal}
        onClose={() => setActiveModal('none')}
      />
    </div>
  );
}

// Render React App
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
