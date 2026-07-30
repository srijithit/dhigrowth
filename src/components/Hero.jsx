import React from 'react';
import {
  Monitor,
  Smartphone,
  BrainCircuit,
  Megaphone,
  TrendingUp
} from 'lucide-react';

export default function Hero({ onOpenConsultation }) {
  return (
    <section id="home" className="relative pt-8 pb-16 bg-white overflow-hidden min-h-[90vh] flex items-center border-b border-slate-200/50">
      
      {/* Background Giant Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span 
          className="text-[12vw] font-black tracking-widest uppercase font-bebas opacity-[0.03] whitespace-nowrap"
          style={{
            WebkitTextStroke: '2px #000000',
            color: 'transparent'
          }}
        >
          DHI GROWTH
        </span>
      </div>

      {/* Grid of Dots Pattern (Subtle blue-grey) */}
      <div className="absolute right-0 bottom-0 w-96 h-96 pointer-events-none opacity-10 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="2.5" fill="#4A72EB" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left py-4">

            {/* Brand Kicker */}
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-bright-blue font-zen block">
              India's Leading Digital Growth Partner
            </span>

            {/* Main Headline */}
            <h1 className="font-bebas text-5xl sm:text-6xl md:text-[80px] font-bold text-slate-900 leading-[0.9] tracking-wider uppercase">
              WE DON'T JUST MARKET.<br />
              WE DRIVE <span className="text-bright-blue">REAL GROWTH</span>.
            </h1>

            {/* Services Kicker */}
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-500 font-zen block">
              Web, App, AI & Marketing Solutions
            </h2>

            {/* Paragraph Body */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              DhiGrowth is a full-service digital agency helping businesses across India scale faster with cutting-edge website development, mobile app development, AI automation, and result-driven digital marketing. From Meta Ads and Google Ads to WhatsApp marketing, SEO, and video production — we build everything your business needs to grow online.
            </p>

            {/* Action CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-4 bg-brand-blue hover:bg-bright-blue text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-brand-blue/20 transition transform hover:-translate-y-0.5 text-center cursor-pointer"
              >
                Get a Free Consultation
              </button>

              <a
                href="#services"
                className="px-8 py-4 bg-transparent hover:bg-brand-blue/5 text-brand-blue border-2 border-brand-blue/30 hover:border-brand-blue font-bold text-sm uppercase tracking-wider rounded-xl transition text-center"
              >
                Explore Our Services
              </a>
            </div>

          </div>

          {/* Right Column Visual Container */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Container Card with Angled Slant */}
            <div
              className="relative w-full h-[460px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group bg-white/80 backdrop-blur-sm"
              style={{
                clipPath: typeof window !== 'undefined' && window.innerWidth >= 1024 ? 'polygon(7% 0, 100% 0, 100% 100%, 0% 100%)' : 'none'
              }}
            >

              {/* Real Coimbatore Skyline Background Image (Lightened overlay) */}
              <img
                src="/coimbatore_skyline.jpg"
                alt="Coimbatore City Skyline"
                className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.03] grayscale-[0.2] opacity-80"
              />

              {/* Light Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-transparent to-transparent"></div>

              {/* SVG Spoke Arrow Lines & Concentric Rings Layer */}
              <div className="absolute inset-0 flex items-center justify-center">

                <svg className="absolute w-full h-full pointer-events-none" viewBox="0 0 500 500">
                  <defs>
                    <marker id="blueDot" markerWidth="6" markerHeight="6" refX="3" refY="3">
                      <circle cx="3" cy="3" r="3" fill="#4A72EB" />
                    </marker>
                  </defs>

                  {/* Outer Concentric Ring */}
                  <circle cx="250" cy="250" r="105" fill="none" stroke="#4A72EB" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="4 4" className="animate-spin-slow" />
                  <circle cx="250" cy="250" r="80" fill="none" stroke="#4A72EB" strokeWidth="1.2" strokeOpacity="0.15" />

                  {/* 5 Spoke Connector Lines */}
                  <line x1="250" y1="195" x2="250" y2="135" stroke="#4A72EB" strokeWidth="2.5" strokeOpacity="0.5" markerEnd="url(#blueDot)" />
                  <line x1="295" y1="215" x2="365" y2="160" stroke="#4A72EB" strokeWidth="2.5" strokeOpacity="0.5" markerEnd="url(#blueDot)" />
                  <line x1="290" y1="290" x2="355" y2="340" stroke="#4A72EB" strokeWidth="2.5" strokeOpacity="0.5" markerEnd="url(#blueDot)" />
                  <line x1="210" y1="290" x2="145" y2="340" stroke="#4A72EB" strokeWidth="2.5" strokeOpacity="0.5" markerEnd="url(#blueDot)" />
                  <line x1="205" y1="215" x2="135" y2="160" stroke="#4A72EB" strokeWidth="2.5" strokeOpacity="0.5" markerEnd="url(#blueDot)" />
                </svg>

                {/* Center D Hub Icon */}
                <div className="relative z-20 w-24 h-24 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-xl ring-4 ring-white/60 border-2 border-bright-blue animate-pulse-glow cursor-pointer">
                  <span className="text-4xl font-bold tracking-tighter font-zen select-none text-white">
                    D
                  </span>
                </div>

                {/* 5 Circular Nodes */}

                {/* Node 1: Top Center - WEB DEVELOPMENT */}
                <div className="absolute top-9 flex flex-col items-center animate-float">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-brand-blue shadow-lg flex items-center justify-center text-brand-blue transition hover:scale-110 duration-300">
                    <Monitor className="w-6 h-6 text-brand-blue" />
                  </div>
                  <span className="mt-1.5 bg-white border border-slate-200/80 px-3 py-0.5 rounded-full text-[10px] font-bold text-slate-800 shadow-md uppercase tracking-wider text-center font-bebas">
                    WEB DEVELOPMENT
                  </span>
                </div>

                {/* Node 2: Top Right - MOBILE APP DEVELOPMENT */}
                <div className="absolute right-3 md:right-6 top-24 flex flex-col items-center animate-float-delayed">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-brand-blue shadow-lg flex items-center justify-center text-brand-blue transition hover:scale-110 duration-300">
                    <Smartphone className="w-6 h-6 text-brand-blue" />
                  </div>
                  <span className="mt-1.5 bg-white border border-slate-200/80 px-3 py-0.5 rounded-full text-[10px] font-bold text-slate-800 shadow-md uppercase tracking-wider text-center max-w-[120px] leading-tight font-bebas">
                    MOBILE APP DEVELOPMENT
                  </span>
                </div>

                {/* Node 3: Bottom Right - ADS & SEO SOLUTIONS */}
                <div className="absolute right-4 md:right-8 bottom-4 flex flex-col items-center animate-float">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-brand-blue shadow-lg flex items-center justify-center text-brand-blue transition hover:scale-110 duration-300">
                    <TrendingUp className="w-6 h-6 text-brand-blue" />
                  </div>
                  <span className="mt-1.5 bg-white border border-slate-200/80 px-3 py-0.5 rounded-full text-[10px] font-bold text-slate-800 shadow-md uppercase tracking-wider text-center max-w-[120px] leading-tight font-bebas">
                    ADS & SEO SOLUTIONS
                  </span>
                </div>

                {/* Node 4: Bottom Left - DIGITAL MARKETING */}
                <div className="absolute left-4 md:left-8 bottom-4 flex flex-col items-center animate-float-delayed">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-brand-blue shadow-lg flex items-center justify-center text-brand-blue transition hover:scale-110 duration-300">
                    <Megaphone className="w-6 h-6 text-brand-blue" />
                  </div>
                  <span className="mt-1.5 bg-white border border-slate-200/80 px-3 py-0.5 rounded-full text-[10px] font-bold text-slate-800 shadow-md uppercase tracking-wider text-center max-w-[120px] leading-tight font-bebas">
                    DIGITAL MARKETING
                  </span>
                </div>

                {/* Node 5: Top Left - AI AUTOMATION */}
                <div className="absolute left-3 md:left-6 top-24 flex flex-col items-center animate-float">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-brand-blue shadow-lg flex items-center justify-center text-brand-blue transition hover:scale-110 duration-300">
                    <BrainCircuit className="w-6 h-6 text-brand-blue" />
                  </div>
                  <span className="mt-1.5 bg-white border border-slate-200/80 px-3 py-0.5 rounded-full text-[10px] font-bold text-slate-800 shadow-md uppercase tracking-wider text-center max-w-[120px] leading-tight font-bebas">
                    AI AUTOMATION
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
