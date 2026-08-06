import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ActiveModal } from '../types';
import { PrimeDanielLogo } from './PrimeDanielLogo';

interface NavbarProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 z-20 relative bg-black text-white">
      {/* Top Row on Mobile: Logo and Get Started */}
      <div className="w-full md:w-auto flex items-center justify-between">
        <div 
          onClick={() => onOpenModal('none')}
          className="cursor-pointer flex items-center select-none hover:opacity-90 transition-opacity"
        >
          <PrimeDanielLogo size="md" />
        </div>

        {/* Get Started Button for Mobile View */}
        <div className="md:hidden">
          <button
            onClick={() => onOpenModal('get-started')}
            className="bg-white text-black hover:bg-white/90 px-4 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all cursor-pointer shadow-md active:scale-95"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Nav Links - Displayed on BOTH Mobile & Desktop */}
      <nav className="flex items-center justify-center space-x-3 sm:space-x-8 text-xs sm:text-sm font-semibold text-white/90 w-full md:w-auto py-1 sm:py-0 border-t border-white/10 md:border-t-0 pt-2.5 md:pt-0">
        <button
          onClick={() => onOpenModal('models')}
          className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors cursor-pointer px-2.5 py-1.5 rounded-lg bg-white/5 md:bg-transparent hover:bg-white/10 active:bg-white/20"
        >
          <span>About Us</span>
          <ChevronDown className="w-3.5 h-3.5 opacity-70" />
        </button>
        <button
          onClick={() => onOpenModal('services')}
          className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors cursor-pointer px-2.5 py-1.5 rounded-lg bg-white/5 md:bg-transparent hover:bg-white/10 active:bg-white/20"
        >
          <span>Services</span>
          <ChevronDown className="w-3.5 h-3.5 opacity-70" />
        </button>
        <button
          onClick={() => onOpenModal('pricing')}
          className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors cursor-pointer px-2.5 py-1.5 rounded-lg bg-white/5 md:bg-transparent hover:bg-white/10 active:bg-white/20"
        >
          <span>Pricing</span>
          <ChevronDown className="w-3.5 h-3.5 opacity-70" />
        </button>
      </nav>

      {/* Right Side Actions: Get Started (Desktop only) */}
      <div className="hidden md:flex items-center space-x-6">
        <button
          onClick={() => onOpenModal('get-started')}
          className="bg-white text-black hover:bg-white/90 px-5 py-2 rounded-full text-sm font-semibold tracking-tight transition-all cursor-pointer shadow-md hover:scale-[1.02] active:scale-95"
        >
          Get Started
        </button>
      </div>
    </header>
  );
};

