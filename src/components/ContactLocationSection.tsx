import React, { useState } from 'react';
import { Copy, Check, MapPin, Phone, Mail, Globe, Share2, Compass } from 'lucide-react';

export const ContactLocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const emailAddress = 'dsetongo@yahoo.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full bg-black text-white font-['DM_Sans',sans-serif] py-20 px-4 sm:px-8 lg:px-12 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Card Frame with dark aesthetic and subtle border */}
        <div className="relative w-full bg-white/[0.03] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[520px]">
          
          {/* Left Column: Contact Details */}
          <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-14 flex flex-col justify-between z-10 space-y-8 bg-black/60 backdrop-blur-md">
            
            {/* Header */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Say hello to us!
              </h2>
              <p className="text-sm sm:text-base text-white/70 font-normal leading-relaxed max-w-md">
                Let’s talk business or just have a coffee. We would love to hear from you!
              </p>
            </div>

            {/* Contact Info Items */}
            <div className="space-y-6 text-sm">
              {/* ADDRESS */}
              <div>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase block mb-1">
                  ADDRESS
                </span>
                <p className="text-white text-sm sm:text-base font-medium leading-snug">
                  PRIME DANIEL Headquarters, Sheikh Mohammed bin Rashid Blvd, Downtown Dubai, UAE
                </p>
              </div>

              {/* PHONE CALL & WHATSAPP */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase block mb-1">
                    DIRECT CALL
                  </span>
                  <a href="tel:+971582737082" className="text-white text-sm sm:text-base font-medium hover:text-blue-400 transition-colors">
                    +971 58 273 7082
                  </a>
                </div>

                <div>
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase block mb-1">
                    WHATSAPP CONCIERGE
                  </span>
                  <a href="https://wa.me/971582833390" target="_blank" rel="noopener noreferrer" className="text-emerald-400 text-sm sm:text-base font-medium hover:underline flex items-center space-x-1">
                    <span>+971 58 283 3390</span>
                  </a>
                </div>
              </div>

              {/* E-MAIL */}
              <div>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase block mb-1">
                  E-MAIL
                </span>
                <a href={`mailto:${emailAddress}`} className="text-white text-sm sm:text-base font-medium hover:text-blue-400 transition-colors">
                  {emailAddress}
                </a>
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={handleCopyEmail}
                className="luxus-pill-btn px-6 py-3 text-xs sm:text-sm font-medium flex items-center space-x-2 cursor-pointer transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-white" />
                    <span>Copy E-mail address</span>
                  </>
                )}
              </button>

              {/* Social / Connect Quick Links */}
              <div className="flex items-center space-x-3">
                <a
                  href="#dubai-showroom"
                  title="Dubai Showroom"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                </a>
                <a
                  href="#global"
                  title="Global Site"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href="#share"
                  title="Share Contact"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Dubai Map Location */}
          <div className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-full bg-neutral-900 overflow-hidden border-t lg:border-t-0 lg:border-l border-white/15">
            
            {/* Embedded Google Map centered on Downtown Dubai */}
            <iframe
              title="PRIME DANIEL Dubai Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28884.28188168598!2d55.2635!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sDowntown%20Dubai%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              className="w-full h-full min-h-[380px] lg:min-h-full border-0 grayscale contrast-125 brightness-75 invert filter"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Dark overlay mask for rich aesthetic cohesion */}
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />

            {/* Radar Pulsing Marker on Dubai Location */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 flex flex-col items-center">
              
              {/* Radar rings */}
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-blue-500 opacity-40"></span>
                <span className="animate-pulse absolute inline-flex h-10 w-10 rounded-full bg-white opacity-30"></span>
                <div className="relative w-6 h-6 rounded-full bg-white border-4 border-black flex items-center justify-center shadow-2xl">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="mt-3 bg-black/90 border border-white/30 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wider text-white shadow-xl flex items-center space-x-1.5">
                <Compass className="w-3.5 h-3.5 text-blue-400" />
                <span>PRIME DANIEL Dubai</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
