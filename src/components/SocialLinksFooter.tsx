import React, { useState } from 'react';
import { Home, ArrowUp } from 'lucide-react';
import { PrimeDanielLogo } from './PrimeDanielLogo';
import { motion } from 'motion/react';

interface SocialLink {
  id: string;
  name: string;
  gradientBorder: string;
  hoverGlow: string;
  url: string;
  icon: React.ReactNode;
}

interface SocialLinksFooterProps {
  onGoHome?: () => void;
}

export const SocialLinksFooter: React.FC<SocialLinksFooterProps> = ({ onGoHome }) => {
  const [clickedPlatform, setClickedPlatform] = useState<string | null>(null);

  const handleGoHome = () => {
    if (onGoHome) {
      onGoHome();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = (name: string, url: string) => {
    setClickedPlatform(name);
    setTimeout(() => setClickedPlatform(null), 2000);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const socials: SocialLink[] = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      gradientBorder: 'from-emerald-400 via-teal-500 to-green-600',
      hoverGlow: 'hover:shadow-[0_0_25px_rgba(34,197,94,0.35)]',
      url: 'https://wa.me/971582833390',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white" viewBox="0 0 24 24">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.33 4.988L2 22l5.167-1.355c1.458.796 3.1 1.217 4.84 1.218h.004c5.505 0 9.989-4.479 9.99-9.985.001-2.667-1.034-5.174-2.919-7.06C17.2-1.066 14.69-2 12.012-2zm0 1.834c2.18 0 4.23.849 5.772 2.392 1.543 1.543 2.392 3.593 2.391 5.773-.001 4.496-3.659 8.155-8.156 8.155h-.003c-1.428 0-2.827-.376-4.048-1.088l-.29-.17-3.007.789.803-2.93-.187-.298c-.783-1.246-1.197-2.68-1.196-4.148.001-4.496 3.659-8.155 8.156-8.155zm4.614 10.9c-.253-.127-1.503-.742-1.735-.826-.232-.085-.401-.127-.57.127-.17.254-.655.826-.803 1.006-.148.18-.297.201-.55.074-.253-.127-1.07-.394-2.037-1.257-.753-.672-1.261-1.503-1.41-1.756-.148-.254-.016-.39.111-.516.114-.114.254-.297.381-.445.127-.148.17-.254.254-.423.085-.17.042-.317-.021-.445-.064-.127-.57-1.374-.78-1.883-.205-.497-.414-.429-.57-.437-.148-.008-.317-.01-.487-.01-.17 0-.445.064-.677.317-.233.254-.889.868-.889 2.12 0 1.252.911 2.46 1.038 2.63.127.17 1.793 2.738 4.345 3.84 2.552 1.102 2.552.735 3.018.692.466-.042 1.503-.614 1.715-1.208.212-.593.212-1.102.148-1.208-.063-.106-.233-.17-.486-.297z"/>
        </svg>
      ),
    },
    {
      id: 'facebook',
      name: 'Facebook',
      gradientBorder: 'from-blue-500 via-indigo-500 to-cyan-500',
      hoverGlow: 'hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]',
      url: 'https://facebook.com',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      id: 'instagram',
      name: 'Instagram',
      gradientBorder: 'from-yellow-400 via-pink-500 to-purple-600',
      hoverGlow: 'hover:shadow-[0_0_25px_rgba(236,72,153,0.35)]',
      url: 'https://instagram.com',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      gradientBorder: 'from-cyan-400 via-pink-500 to-rose-600',
      hoverGlow: 'hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]',
      url: 'https://tiktok.com',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.33 22a6.33 6.33 0 0 0 6.33-6.33V9.05a8.21 8.21 0 0 0 4.67 1.47V7.07a4.84 4.84 0 0 1-.74-.38z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full bg-transparent text-white font-['DM_Sans',sans-serif] py-20 px-4 sm:px-8 lg:px-12 border-t border-white/10 relative">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-4xl mx-auto flex flex-col items-center space-y-12"
      >
        
        {/* Brand Logo & Title */}
        <div className="text-center space-y-3 flex flex-col items-center">
          <PrimeDanielLogo size="lg" />
          <span className="text-[11px] font-semibold tracking-[0.25em] text-white/50 uppercase block pt-2">
            Official Channels
          </span>
          <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white">
            Connect with PRIME DANIEL
          </h3>
        </div>

        {/* 4 Squercle Icons styled directly from reference image */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {socials.map((social) => (
            <div key={social.id} className="flex flex-col items-center space-y-3 group">
              
              {/* Outer Gradient Border Wrapper */}
              <button
                onClick={() => handleClick(social.name, social.url)}
                className={`p-[2px] rounded-3xl bg-gradient-to-br ${social.gradientBorder} cursor-pointer transition-all duration-300 transform group-hover:-translate-y-1.5 ${social.hoverGlow}`}
                title={`Visit PRIME DANIEL on ${social.name}`}
              >
                {/* Inner Squercle Card */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black/40 backdrop-blur-md border border-white/10 rounded-[22px] flex items-center justify-center relative overflow-hidden transition-colors group-hover:bg-white/[0.04]">
                  
                  {/* Internal ambient highlight */}
                  <div className="absolute inset-0 bg-white/[0.03] group-hover:bg-white/[0.08] transition-colors" />

                  {/* Icon */}
                  <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                  </div>

                </div>
              </button>

              {/* Text Label under icon */}
              <span className="text-xs font-normal text-white/70 tracking-wide group-hover:text-white transition-colors">
                {social.name}
              </span>

            </div>
          ))}
        </div>

        {/* Feedback Message */}
        {clickedPlatform && (
          <div className="text-xs text-white/80 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full animate-fade-in">
            Opening PRIME DANIEL {clickedPlatform}...
          </div>
        )}

        {/* Return to Home / Landing Page Button */}
        <div className="pt-2">
          <button
            onClick={handleGoHome}
            className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.5)] backdrop-blur-md group"
            title="Return to Landing Page"
          >
            <Home className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
            <span>Return to Home</span>
            <ArrowUp className="w-3.5 h-3.5 text-white/50 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Footer Copyright */}
        <div className="pt-8 border-t border-white/10 w-full text-center">
          <p className="text-xs text-white/40 tracking-widest uppercase">
            © 2026 PAUL TECHNOLOGIES. All rights reserved.
          </p>
        </div>

      </motion.div>
    </footer>
  );
};
