import React, { useState } from 'react';
import { X, ShieldCheck, Cpu, BatteryCharging, Headphones, Sparkles, MapPin, Mail, Phone } from 'lucide-react';
import { ActiveModal } from '../types';
import { PricingOrderModal } from './PricingOrderModal';

interface NavModalProps {
  modal: ActiveModal;
  onClose: () => void;
  onOpenBuild: () => void;
}

export const NavModal: React.FC<NavModalProps> = ({ modal, onClose, onOpenBuild }) => {
  const [orderModalPackage, setOrderModalPackage] = useState<string | null>(null);

  if (!modal || modal === 'none' || modal === 'get-started' || modal === 'build-yours' || modal === 'explore-models') {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 font-['DM_Sans']">
      <div className="relative w-full max-w-2xl bg-black border border-white/20 rounded-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {modal === 'models' && (
          <div className="space-y-6 text-white font-['DM_Sans']">
            <div>
              <span className="text-xs tracking-[0.25em] text-white/60 uppercase font-semibold">About Us</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                Luxury Transportation with a Personal Touch
              </h2>
            </div>
            
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              At Prime Daniel Luxury Chauffeur, we believe transportation is more than simply getting from one place to another—it's about providing an exceptional travel experience. Our professional chauffeurs are trained to deliver punctual, discreet, and first-class service while ensuring your comfort and safety throughout every journey.
            </p>

            <p className="text-sm text-white/80 leading-relaxed">
              Whether you're a business executive, a family, or a visitor exploring the city, we provide dependable transportation solutions designed around your schedule.
            </p>

            <div className="pt-2">
              <h3 className="text-base font-bold text-white uppercase tracking-wider mb-3">
                Why Choose Us?
              </h3>
              <ul className="space-y-2.5 text-sm text-white/90">
                <li className="flex items-center space-x-3 p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-white shrink-0" />
                  <span>Professional & experienced chauffeurs</span>
                </li>
                <li className="flex items-center space-x-3 p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-white shrink-0" />
                  <span>Luxury, clean, and well-maintained vehicles</span>
                </li>
                <li className="flex items-center space-x-3 p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-white shrink-0" />
                  <span>Safe and reliable transportation</span>
                </li>
                <li className="flex items-center space-x-3 p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-white shrink-0" />
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-center space-x-3 p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-white shrink-0" />
                  <span>Affordable luxury pricing</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setOrderModalPackage('Executive Chauffeur Service')}
              className="w-full py-3 rounded-xl bg-white hover:bg-white/90 text-xs sm:text-sm font-extrabold text-black transition-all cursor-pointer shadow-md hover:scale-[1.02] active:scale-95 mt-2 uppercase tracking-wider"
            >
              Order Now
            </button>
          </div>
        )}

        {modal === 'pricing' && (
          <div className="space-y-6 text-white font-['DM_Sans']">
            <div>
              <span className="text-xs tracking-[0.25em] text-[#ff4500] uppercase font-bold">Luxury Chauffeur Services</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                Pricing & <span className="font-serif italic font-normal">Packages</span>
              </h2>
              <p className="text-xs text-white/70 mt-1">
                Transparent pricing tailored to your needs. Exceptional service guaranteed.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Package 1 */}
              <div className="bg-[#121216] border border-white/10 rounded-2xl p-5 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-white/50 uppercase">Essential</span>
                  <h3 className="text-lg font-bold text-white">Airport & Single Trip</h3>
                  <div className="text-xl font-extrabold text-white">AED 250 <span className="text-xs font-normal text-white/50">/ trip</span></div>
                  <ul className="text-xs text-white/70 space-y-1.5 pt-2">
                    <li>• Airport Transfers (Flight tracking)</li>
                    <li>• Personal Chauffeur per trip</li>
                    <li>• Meet & Greet & Luggage aid</li>
                  </ul>
                </div>
                <button
                  onClick={() => setOrderModalPackage('Airport Transfers & Single Trip (AED 250)')}
                  className="w-full py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-xs font-bold text-white transition-all cursor-pointer hover:scale-[1.02] active:scale-95"
                >
                  Order Now
                </button>
              </div>

              {/* Package 2 */}
              <div className="bg-[#181a24] border border-[#ff4500]/50 rounded-2xl p-5 flex flex-col justify-between space-y-4 relative shadow-lg">
                <div className="absolute -top-2.5 right-4 bg-[#ff4500] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Popular
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[#ff4500] uppercase font-semibold">City & Day</span>
                  <h3 className="text-lg font-bold text-white">City Tour & Daily</h3>
                  <div className="text-xl font-extrabold text-white">AED 800 <span className="text-xs font-normal text-white/50">/ day</span></div>
                  <ul className="text-xs text-white/70 space-y-1.5 pt-2">
                    <li>• Full-Day City Guide Tours</li>
                    <li>• School Pick-up & Drop-off</li>
                    <li>• Hotel & Venue transfers</li>
                  </ul>
                </div>
                <button
                  onClick={() => setOrderModalPackage('City Tour & Daily Chauffeur (AED 800/day)')}
                  className="w-full py-2.5 rounded-xl bg-white hover:bg-white/90 text-xs font-extrabold text-black transition-all cursor-pointer shadow-md hover:scale-[1.02] active:scale-95"
                >
                  Order Now
                </button>
              </div>

              {/* Package 3 */}
              <div className="bg-[#121216] border border-white/10 rounded-2xl p-5 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-white/50 uppercase">VIP Elite</span>
                  <h3 className="text-lg font-bold text-white">Executive Protection</h3>
                  <div className="text-xl font-extrabold text-white">AED 6,500 <span className="text-xs font-normal text-white/50">/ month</span></div>
                  <ul className="text-xs text-white/70 space-y-1.5 pt-2">
                    <li>• Chauffeur + Trained Security</li>
                    <li>• Unlimited Airport Transfers*</li>
                    <li>• 24/7 VIP Concierge Support</li>
                  </ul>
                </div>
                <button
                  onClick={() => setOrderModalPackage('Executive Protection VIP Elite (AED 6,500/month)')}
                  className="w-full py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-xs font-bold text-white transition-all cursor-pointer hover:scale-[1.02] active:scale-95"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        )}

        {modal === 'services' && (
          <div className="space-y-6 text-white font-['DM_Sans']">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs tracking-[0.25em] text-[#ff4500] uppercase font-bold">Our Premium Services</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                  Services Designed Around <span className="font-serif italic font-normal">Your Lifestyle</span>
                </h2>
              </div>
              <a
                href="https://wa.me/971582833390?text=Hello%20Prime%20Daniel,%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20chauffeur%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md active:scale-95 w-fit"
              >
                <span>WhatsApp Concierge</span>
              </a>
            </div>
            
            <div className="grid grid-cols-1 gap-4 max-h-[60vh] overflow-y-auto pr-1">
              {[
                {
                  num: '01',
                  title: 'School Pick-up & Drop-off',
                  desc: 'Reliable and safe transportation for your children. Our trusted chauffeurs ensure timely arrivals and departures, giving parents complete peace of mind.',
                  tags: ['Safe & Reliable', 'Child Safety', 'Timely Arrivals'],
                },
                {
                  num: '02',
                  title: 'Personal Chauffeur',
                  desc: 'Enjoy the convenience of having a dedicated professional driver for meetings, shopping, events, or daily travel while you relax or stay productive.',
                  tags: ['Dedicated Driver', 'Executive Travel', 'Shopping & Events'],
                },
                {
                  num: '03',
                  title: 'Airport Transfers',
                  desc: 'Never miss a flight or wait for a ride. We provide punctual airport pickups and drop-offs with flight monitoring for a seamless travel experience.',
                  tags: ['Flight Monitoring', 'Punctual Pickup', 'Luggage Support'],
                },
                {
                  num: '04',
                  title: 'City Guide Tours',
                  desc: 'Discover the city\'s most iconic destinations with a knowledgeable chauffeur who makes exploring comfortable, convenient, and memorable.',
                  tags: ['Iconic Destinations', 'Local Insights', 'Custom Itineraries'],
                },
                {
                  num: '05',
                  title: 'Executive Bodyguard Services',
                  desc: 'Travel confidently with trained security personnel who provide discreet personal protection for executives, VIPs, and special events.',
                  tags: ['Trained Security', 'Discreet Protection', 'VIP Convoy'],
                },
              ].map((s) => (
                <div key={s.num} className="bg-[#121214] border border-white/10 rounded-2xl p-5 space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-white/40">{s.num}</span>
                    <a
                      href={`https://wa.me/971582833390?text=${encodeURIComponent(`Hello Prime Daniel, I would like to book the ${s.title} service.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#ff4500] hover:bg-[#ff5714] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md cursor-pointer"
                      title={`Book ${s.title} on WhatsApp (+971582833390)`}
                    >
                      <span className="text-base font-bold leading-none">+</span>
                    </a>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{s.title}</h3>
                  <p className="text-xs text-white/70 leading-relaxed">{s.desc}</p>
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {s.tags.map((t) => (
                        <span key={t} className="text-[10px] font-medium text-white/60 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`https://wa.me/971582833390?text=${encodeURIComponent(`Hello Prime Daniel, I would like to book the ${s.title} service.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-400 font-bold hover:underline flex items-center space-x-1"
                    >
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {modal === 'contact' && (
          <div className="space-y-6">
            <div>
              <span className="text-xs tracking-[0.25em] text-white/60 uppercase font-semibold">Direct Concierge</span>
              <h2 className="text-2xl font-bold text-white mt-1">Contact PRIME DANIEL Headquarters</h2>
            </div>
            <div className="space-y-4 text-sm text-white/80">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <MapPin className="w-5 h-5 text-white" />
                <div>
                  <p className="font-medium text-white">Global Headquarters & Atelier</p>
                  <p className="text-xs text-white/60">100 Electric Way, Silicon Valley, CA 94025</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <Mail className="w-5 h-5 text-white" />
                <div>
                  <p className="font-medium text-white">Client Experience Email</p>
                  <a href="mailto:dsetongo@yahoo.com" className="text-xs text-blue-400 hover:underline">dsetongo@yahoo.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <Phone className="w-5 h-5 text-white" />
                <div>
                  <p className="font-medium text-white">Direct Call</p>
                  <a href="tel:+971582737082" className="text-xs text-white/80 hover:text-white">+971 58 273 7082</a>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <Headphones className="w-5 h-5 text-emerald-400" />
                <div>
                  <p className="font-medium text-white">WhatsApp Concierge</p>
                  <a href="https://wa.me/971582833390" target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-400 hover:underline">+971 58 283 3390</a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      <PricingOrderModal
        isOpen={!!orderModalPackage}
        onClose={() => setOrderModalPackage(null)}
        initialPackage={orderModalPackage || undefined}
      />
    </div>
  );
};
