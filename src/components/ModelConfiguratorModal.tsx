import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface ModelConfiguratorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const COLOR_OPTIONS = [
  { name: 'Obsidian Sapphire', hex: '#112233', bgClass: 'bg-blue-950' },
  { name: 'Midnight Onyx', hex: '#0f0f0f', bgClass: 'bg-neutral-900' },
  { name: 'Monaco Pure Silver', hex: '#cccccc', bgClass: 'bg-slate-300' },
  { name: 'Starlight Metallic', hex: '#e2e8f0', bgClass: 'bg-slate-100' },
];

const BATTERY_OPTIONS = [
  { name: 'Standard Range+', range: '350 miles', speed: '0-60 in 3.4s', price: '$89,000' },
  { name: 'Performance Dual-Motor', range: '420 miles', speed: '0-60 in 2.5s', price: '$109,000' },
  { name: 'Apex Quad-Motor Spec', range: '510 miles', speed: '0-60 in 1.9s', price: '$135,000' },
];

export const ModelConfiguratorModal: React.FC<ModelConfiguratorModalProps> = ({ isOpen, onClose }) => {
  const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0]);
  const [selectedTrim, setSelectedTrim] = useState(BATTERY_OPTIONS[1]);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 font-['DM_Sans']">
      <div className="relative w-full max-w-4xl bg-black border border-white/20 rounded-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mx-auto text-white">
              <Check className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">Order Specification Saved</h2>
            <p className="text-white/80 max-w-md mx-auto text-sm">
              Your custom PRIME DANIEL vehicle build ({selectedTrim.name} in {selectedColor.name}) has been reserved. A PRIME DANIEL specialist will reach out to verify delivery timeline.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="luxus-pill-btn px-8 py-2.5 text-sm font-medium mt-4"
            >
              Close Configurator
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            <div>
              <span className="text-xs tracking-[0.2em] text-white/60 uppercase font-semibold">Configurator</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                Customize Your PRIME DANIEL EV
              </h2>
            </div>

            {/* Color & Specification Badge */}
            <div className="relative w-full bg-black rounded-xl border border-white/20 p-8 flex flex-col items-center justify-center text-center space-y-2">
              <span className="text-[11px] text-white/50 uppercase tracking-[0.3em]">Selected Spec</span>
              <p className="text-xl font-bold tracking-widest text-white uppercase">{selectedColor.name}</p>
              <p className="text-xs text-white/70">{selectedTrim.name} • {selectedTrim.range} Range</p>
            </div>

            {/* Color Selection */}
            <div>
              <label className="text-xs uppercase tracking-wider text-white/70 font-semibold block mb-3">
                Exterior Color
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {COLOR_OPTIONS.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`p-3 rounded-xl border text-left flex items-center space-x-3 transition-all cursor-pointer ${
                      selectedColor.name === color.name
                        ? 'border-white bg-white/10'
                        : 'border-white/15 bg-white/5 hover:border-white/30'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full border border-white/30 ${color.bgClass}`}
                    />
                    <span className="text-xs font-medium text-white truncate">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Trim & Battery Spec */}
            <div>
              <label className="text-xs uppercase tracking-wider text-white/70 font-semibold block mb-3">
                Powertrain & Performance
              </label>
              <div className="space-y-3">
                {BATTERY_OPTIONS.map((trim) => (
                  <div
                    key={trim.name}
                    onClick={() => setSelectedTrim(trim)}
                    className={`p-4 rounded-xl border cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all ${
                      selectedTrim.name === trim.name
                        ? 'border-white bg-white/10'
                        : 'border-white/15 bg-white/5 hover:border-white/30'
                    }`}
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">{trim.name}</p>
                      <p className="text-xs text-white/70 mt-1">Range: {trim.range} • Acceleration: {trim.speed}</p>
                    </div>
                    <span className="text-sm font-bold text-white">{trim.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-white/60 uppercase tracking-widest block">Estimated Total</span>
                <span className="text-xl font-bold text-white">{selectedTrim.price}</span>
              </div>
              <button
                onClick={() => setSubmitted(true)}
                className="luxus-pill-btn px-8 py-3 text-sm font-semibold text-white w-full sm:w-auto"
              >
                Confirm Specification
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
