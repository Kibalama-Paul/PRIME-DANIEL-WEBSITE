import React from 'react';
import { ShieldCheck, Clock, DollarSign, Headphones, Truck } from 'lucide-react';

export const PartnersAndBenefitsSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white font-['DM_Sans',sans-serif] py-16 px-4 sm:px-8 lg:px-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Brand Logos Header */}
        <div className="text-center space-y-8">
          <p className="text-xs sm:text-sm font-normal text-white/70 tracking-wider">
            Partners of world leading companies
          </p>

          {/* Logos Row - Pure White Monochrome */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-90">
            {/* Ferrari */}
            <div className="flex items-center space-x-2 font-serif tracking-widest text-lg sm:text-xl font-bold text-white hover:opacity-100 transition-opacity">
              <span className="font-['Playfair_Display',serif] italic font-semibold tracking-tighter text-2xl">Ferrari</span>
            </div>

            {/* Toyota */}
            <div className="flex items-center space-x-2 text-white hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.87.64-3.59 1.72-4.96C6.72 8.44 9.17 9.5 12 9.5s5.28-1.06 6.28-2.46C19.36 8.41 20 10.13 20 12c0 4.41-3.59 8-8 8zm0-15c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
              <span className="font-bold tracking-widest text-sm sm:text-base uppercase">TOYOTA</span>
            </div>

            {/* Tesla */}
            <div className="flex items-center space-x-2 text-white hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 4.5C8 4.5 4.5 6 3 8l1.5 1.5C6 8 9 7 12 7s6 1 7.5 2.5L21 8c-1.5-2-5-3.5-9-3.5zM12 2L2 6v2l10-3 10 3V6L12 2zm0 6c-3 0-6 .8-7.5 2L6 11.5C7.2 10.6 9.5 10 12 10s4.8.6 6 1.5l1.5-1.5C18 8.8 15 8 12 8z"/>
              </svg>
              <span className="font-bold tracking-[0.3em] text-sm sm:text-base uppercase">T E S L A</span>
            </div>

            {/* Higer */}
            <div className="flex items-center space-x-2 text-white hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center font-bold text-xs italic">
                H
              </div>
              <span className="font-extrabold tracking-widest text-sm sm:text-base uppercase">HIGER</span>
            </div>

            {/* Marcopolo */}
            <div className="flex items-center space-x-2 text-white hover:opacity-100 transition-opacity">
              <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center font-bold text-[10px]">
                M
              </div>
              <span className="font-semibold tracking-wider text-sm sm:text-base italic">Marcopolo</span>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto pt-6">
          {/* Key Benefits Tag */}
          <div>
            <span className="bg-[#ff4500] text-white text-[11px] font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-lg inline-block">
              Key Benefits
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white leading-tight">
            BENEFITS OF OUR SERVICES
          </h2>
        </div>

        {/* 4 Feature Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-4">
          
          {/* 1. Safety & top quality */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-end space-y-4 hover:border-white/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-white leading-snug">
              Safety & top quality
            </h3>
          </div>

          {/* 2. On time delivery (Orange Accent Featured Card) */}
          <div className="bg-[#ff4500] text-white rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden group">
            {/* Subtle background overlay */}
            <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none">
              <Truck className="w-40 h-40" />
            </div>

            <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white">
              <Truck className="w-5 h-5" />
            </div>

            <div className="space-y-2 z-10">
              <h3 className="text-xl font-bold text-white">
                On time delivery
              </h3>
              <p className="text-xs text-white/90 leading-relaxed font-normal">
                Streamlined luxury chauffeur solutions ensure smooth, reliable and timely transportation.
              </p>
            </div>
          </div>

          {/* 3. Insurance coverage */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-end space-y-4 hover:border-white/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-white leading-snug">
              Insurance coverage
            </h3>
          </div>

          {/* 4. 24/7 customer support */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-end space-y-4 hover:border-white/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <Headphones className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-white leading-snug">
              24/7 customer support
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
};
