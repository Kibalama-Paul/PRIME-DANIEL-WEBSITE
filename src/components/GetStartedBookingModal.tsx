import React, { useState } from 'react';
import { X, Calendar, MapPin, Users, ArrowRight, CheckCircle2, Shield, Sparkles, Clock } from 'lucide-react';

interface GetStartedBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedBookingModal: React.FC<GetStartedBookingModalProps> = ({ isOpen, onClose }) => {
  const [tripType, setTripType] = useState<'round' | 'oneway' | 'hourly'>('oneway');
  const [fromLocation, setFromLocation] = useState('Dubai International Airport (DXB)');
  const [toLocation, setToLocation] = useState('Burj Al Arab Executive Suite');
  const [departDate, setDepartDate] = useState('2026-08-10');
  const [returnDate, setReturnDate] = useState('2026-08-15');
  const [vehicleClass, setVehicleClass] = useState('First Class Sedan (2 Passengers)');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 font-['DM_Sans',sans-serif] animate-in fade-in duration-300 overflow-y-auto">
      
      {/* Outer Neumorphic & Glassmorphic Main Frame with subtle transparency & full scrolling support */}
      <div className="relative w-full max-w-2xl my-auto bg-gradient-to-br from-[#1b1c24]/90 via-[#121319]/85 to-[#0a0a0e]/90 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col min-h-[500px] max-h-[90vh] overflow-y-auto">
        
        {/* Close Modal Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-30 text-white/70 hover:text-white p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
          title="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Interactive Neumorphic Form with Translucent Glass */}
        <div className="w-full p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8 z-10 bg-black/25 backdrop-blur-xl">
          
          {/* Header branding & tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white/60 text-xs font-mono tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-[#ff4500]" />
              <span>Prime Daniel Chauffeur Reservations</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-none">
              Where are we driving?
            </h1>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Trip Type Neumorphic Pill Tabs */}
              <div className="inline-flex p-1.5 rounded-full bg-[#16171f]/80 backdrop-blur-md border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.05)]">
                <button
                  type="button"
                  onClick={() => setTripType('oneway')}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                    tripType === 'oneway'
                      ? 'bg-gradient-to-r from-white to-neutral-200 text-black shadow-[0_4px_15px_rgba(255,255,255,0.2)] font-bold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  One way
                </button>
                <button
                  type="button"
                  onClick={() => setTripType('round')}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                    tripType === 'round'
                      ? 'bg-gradient-to-r from-white to-neutral-200 text-black shadow-[0_4px_15px_rgba(255,255,255,0.2)] font-bold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Round trip
                </button>
                <button
                  type="button"
                  onClick={() => setTripType('hourly')}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                    tripType === 'hourly'
                      ? 'bg-gradient-to-r from-white to-neutral-200 text-black shadow-[0_4px_15px_rgba(255,255,255,0.2)] font-bold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Hourly Chauffeur
                </button>
              </div>

              {/* From / To Location Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* From Location Input */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-medium text-white/50 tracking-wider uppercase pl-2">
                    From
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="text"
                      value={fromLocation}
                      onChange={(e) => setFromLocation(e.target.value)}
                      required
                      placeholder="Pickup point"
                      className="w-full bg-[#161720]/70 backdrop-blur-md text-white text-xs font-medium pl-10 pr-4 py-3.5 rounded-2xl border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:outline-none focus:border-white/40 focus:bg-[#1c1d29]/90 transition-all"
                    />
                  </div>
                </div>

                {/* To Location Input */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-medium text-white/50 tracking-wider uppercase pl-2">
                    To
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ff4500]" />
                    <input
                      type="text"
                      value={toLocation}
                      onChange={(e) => setToLocation(e.target.value)}
                      required
                      placeholder="Destination"
                      className="w-full bg-[#161720]/70 backdrop-blur-md text-white text-xs font-medium pl-10 pr-4 py-3.5 rounded-2xl border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:outline-none focus:border-white/40 focus:bg-[#1c1d29]/90 transition-all"
                    />
                  </div>
                </div>

              </div>

              {/* Dates & Vehicle Class Selection Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Depart Date */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-medium text-white/50 tracking-wider uppercase pl-2">
                    Depart
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" />
                    <input
                      type="date"
                      value={departDate}
                      onChange={(e) => setDepartDate(e.target.value)}
                      className="w-full bg-[#161720]/70 backdrop-blur-md text-white text-xs font-medium pl-9 pr-3 py-3 rounded-2xl border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:outline-none focus:border-white/40 transition-all"
                    />
                  </div>
                </div>

                {/* Return Date (if round trip) */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-medium text-white/50 tracking-wider uppercase pl-2">
                    {tripType === 'hourly' ? 'Hours' : 'Return'}
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" />
                    <input
                      type={tripType === 'hourly' ? 'number' : 'date'}
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      placeholder={tripType === 'hourly' ? '4 Hours' : ''}
                      className="w-full bg-[#161720]/70 backdrop-blur-md text-white text-xs font-medium pl-9 pr-3 py-3 rounded-2xl border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:outline-none focus:border-white/40 transition-all"
                    />
                  </div>
                </div>

                {/* Vehicle Class & Passengers */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-medium text-white/50 tracking-wider uppercase pl-2">
                    Class & Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" />
                    <select
                      value={vehicleClass}
                      onChange={(e) => setVehicleClass(e.target.value)}
                      className="w-full bg-[#161720]/70 backdrop-blur-md text-white text-xs font-medium pl-9 pr-3 py-3 rounded-2xl border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:outline-none focus:border-white/40 transition-all appearance-none cursor-pointer"
                    >
                      <option value="First Class Sedan (2 Passengers)">First Class Sedan</option>
                      <option value="VIP SUV Escalade (6 Passengers)">VIP SUV Escalade</option>
                      <option value="Maybach Luxury (3 Passengers)">Maybach Luxury</option>
                      <option value="Armored Security Escort">Armored Escort</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Action Red/Coral Neumorphic CTA Button matching reference image */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#ff4500] to-[#ff6a00] text-white font-bold text-sm tracking-wide rounded-2xl shadow-[0_10px_25px_rgba(255,69,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          ) : (
            <div className="space-y-6 py-6 bg-white/5 border border-white/15 rounded-3xl p-6 text-center animate-in zoom-in-95">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
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

          {/* Footer note & contact snippet */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50">
            <span className="flex items-center space-x-1">
              <Shield className="w-3.5 h-3.5 text-white/40" />
              <span>Discreet & Fully Insured VIP Travel</span>
            </span>
            <span>24/7 Concierge Hotline</span>
          </div>

        </div>

      </div>

    </div>
  );
};
