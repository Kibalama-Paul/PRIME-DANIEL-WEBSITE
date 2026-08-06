import React from 'react';
import { X, ArrowRight, Zap, Shield, Gauge } from 'lucide-react';

interface ExploreModelsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBuild: () => void;
}

const MODELS_LIST = [
  {
    id: 'luxus-gt',
    name: 'PRIME DANIEL GT',
    tagline: 'Grand Touring Electric Performance',
    acceleration: '2.5s',
    topSpeed: '185 mph',
    range: '420 mi',
    price: '$109,000',
    description: 'The pinnacle of luxury electric engineering combining zero-emissions endurance with track-grade precision handling.'
  },
  {
    id: 'luxus-vision',
    name: 'PRIME DANIEL VISION S',
    tagline: 'Autonomous Luxury Saloon',
    acceleration: '2.9s',
    topSpeed: '168 mph',
    range: '480 mi',
    price: '$125,000',
    description: 'Designed around serene executive interior comfort, next-generation AI autopilot, and ultra-fast 800V charging.'
  },
  {
    id: 'luxus-apex',
    name: 'PRIME DANIEL APEX R',
    tagline: 'Hyper-Performance Quad-Motor',
    acceleration: '1.9s',
    topSpeed: '210 mph',
    range: '380 mi',
    price: '$165,000',
    description: '1,200 horsepower raw electrical output featuring active aerodynamic winglets and torque vectoring.'
  }
];

export const ExploreModelsModal: React.FC<ExploreModelsModalProps> = ({ isOpen, onClose, onSelectBuild }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 font-['DM_Sans']">
      <div className="relative w-full max-w-5xl bg-black border border-white/20 rounded-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-8">
          <div>
            <span className="text-xs tracking-[0.25em] text-white/60 uppercase font-semibold">Lineup Showcase</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Explore PRIME DANIEL Electric Models
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MODELS_LIST.map((m) => (
              <div
                key={m.id}
                className="bg-white/5 border border-white/15 rounded-xl p-5 flex flex-col justify-between hover:border-white/40 transition-all group"
              >
                <div>
                  <div className="aspect-[16/9] w-full mb-4 rounded-lg bg-black border border-white/10 flex flex-col items-center justify-center text-center p-4">
                    <span className="text-[10px] text-white/40 tracking-[0.25em] uppercase">Specification Series</span>
                    <span className="text-lg font-bold tracking-widest text-white mt-1">{m.name}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{m.name}</h3>
                  <p className="text-xs text-white/60 tracking-wider uppercase mt-0.5">{m.tagline}</p>
                  <p className="text-xs text-white/80 mt-3 leading-relaxed">{m.description}</p>
                  
                  <div className="grid grid-cols-3 gap-2 my-4 pt-4 border-t border-white/10 text-center">
                    <div>
                      <div className="flex items-center justify-center text-white/60 mb-1"><Zap className="w-3.5 h-3.5" /></div>
                      <span className="text-xs font-bold text-white block">{m.acceleration}</span>
                      <span className="text-[10px] text-white/50 uppercase">0-60mph</span>
                    </div>
                    <div>
                      <div className="flex items-center justify-center text-white/60 mb-1"><Gauge className="w-3.5 h-3.5" /></div>
                      <span className="text-xs font-bold text-white block">{m.topSpeed}</span>
                      <span className="text-[10px] text-white/50 uppercase">Top Speed</span>
                    </div>
                    <div>
                      <div className="flex items-center justify-center text-white/60 mb-1"><Shield className="w-3.5 h-3.5" /></div>
                      <span className="text-xs font-bold text-white block">{m.range}</span>
                      <span className="text-[10px] text-white/50 uppercase">Range</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-white/10">
                  <span className="text-sm font-bold text-white">{m.price}</span>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectBuild();
                    }}
                    className="luxus-pill-btn px-4 py-1.5 text-xs font-medium flex items-center space-x-1"
                  >
                    <span>Configure</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
