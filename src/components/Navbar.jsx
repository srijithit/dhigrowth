import React from 'react';

export default function Navbar({ onOpenConsultation }) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Icon */}
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-2.5 group"
          >
            <img 
              src="/logo.png" 
              alt="DHI GROWTH Logo" 
              className="h-10 w-auto object-contain transition duration-300 group-hover:scale-102"
            />
          </a>

          {/* Right CTA Button (visible on mobile and desktop) */}
          <div className="flex items-center">
            <button
              onClick={onOpenConsultation}
              className="px-4 py-2 sm:px-5 sm:py-2.5 bg-brand-blue hover:bg-bright-blue text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider rounded-lg shadow-md shadow-brand-blue/20 hover:shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer"
            >
              Get a Free Consultation
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
