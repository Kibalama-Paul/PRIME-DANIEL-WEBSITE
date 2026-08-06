import React from 'react';
import { Sparkles } from 'lucide-react';
import { ActiveModal } from '../types';
import { motion } from 'motion/react';

interface HeroBannerProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenModal }) => {
  return (
    <section className="relative w-full py-16 sm:py-24 md:py-32 flex flex-col justify-center items-center px-4 sm:px-8 bg-transparent text-white overflow-hidden font-['DM_Sans',sans-serif]">
      
      {/* Center Container */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col items-center text-center max-w-4xl z-10 space-y-8"
      >
        
        {/* Early Access Beta Pill Badge */}
        <div 
          onClick={() => onOpenModal('get-started')}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/20 px-4 py-1.5 rounded-full text-xs font-medium text-white/90 cursor-pointer hover:bg-white/10 hover:border-white/40 transition-all shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-white fill-white/80" />
          <span>Early Access Beta</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl">
          Travel in Comfort. Arrive in Style.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-3xl px-2">
          Experience premium chauffeur services tailored for your lifestyle. Whether it's your daily commute, airport transfer, school run, or a private city tour, Prime Daniel Luxury Chauffeur delivers comfort, safety, and professionalism every mile of the journey.
        </p>

        {/* Action Buttons Row */}
        <div className="pt-2 flex flex-row items-center justify-center space-x-4">
          <button
            onClick={() => onOpenModal('get-started')}
            className="bg-white text-black hover:bg-white/90 px-8 py-3 rounded-full text-sm font-semibold tracking-tight cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            Get Started
          </button>
        </div>

      </motion.div>

    </section>
  );
};

