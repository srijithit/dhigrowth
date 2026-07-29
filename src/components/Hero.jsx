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
    <section id="home" className="relative pt-6 pb-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left py-4">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-[44px] font-black text-slate-900 leading-[1.12] tracking-tight">
              COIMBATORE’S LEADING <br />
              DIGITAL GROWTH PARTNER — <br />
              <span className="text-blue-600">
                WEB, APP, AI & MARKETING SOLUTIONS
              </span>
            </h1>

            {/* Paragraph Body */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              DhiGrowth is a full-service digital agency in Coimbatore helping businesses scale faster with cutting-edge website development, mobile app development, AI automation, and result-driven digital marketing. From Meta Ads and Google Ads to WhatsApp marketing, SEO, and video production — we build everything your business needs to grow online.
            </p>

            {/* Action CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-lg shadow-md transition transform hover:-translate-y-0.5 text-center"
              >
                Get a Free Consultation
              </button>
              
              <a
                href="#services"
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-blue-600 border border-blue-600 font-bold text-sm rounded-lg transition text-center shadow-sm"
              >
                Explore Our Services
              </a>
            </div>

          </div>

          {/* Right Column Visual Container with Angled Slant & Connected Arrow Spoke Lines */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Container Card */}
            <div className="relative w-full h-[440px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
              
              {/* Real Coimbatore Skyline Background Image */}
              <img
                src="/coimbatore_skyline.jpg"
                alt="Coimbatore City Skyline"
                className="w-full h-full object-cover object-center filter brightness-[0.94] contrast-[1.05]"
              />

              {/* Light Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>

              {/* Watermark Outline Text centered top & lowered slightly */}
              <div className="absolute top-7 left-0 right-0 flex justify-center pointer-events-none select-none z-0">
                <span 
                  className="text-5xl md:text-6xl font-black tracking-widest uppercase font-sans opacity-85"
                  style={{
                    WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.45)',
                    color: 'transparent'
                  }}
                >
                  DHI GROWTH
                </span>
              </div>

              {/* SVG Spoke Arrow Lines & Concentric Rings Layer */}
              <div className="absolute inset-0 flex items-center justify-center">
                
                <svg className="absolute w-full h-full pointer-events-none" viewBox="0 0 500 500">
                  <defs>
                    <marker id="blueDot" markerWidth="6" markerHeight="6" refX="3" refY="3">
                      <circle cx="3" cy="3" r="3" fill="#0052FF" />
                    </marker>
                  </defs>

                  {/* Outer Concentric Ring */}
                  <circle cx="250" cy="250" r="105" fill="none" stroke="#0052FF" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
                  <circle cx="250" cy="250" r="80" fill="none" stroke="#0052FF" strokeWidth="1.2" strokeOpacity="0.6" />

                  {/* 5 Spoke Connector Lines with Blue Arrow Dots pointing outward to the nodes */}
                  
                  {/* Spoke 1: Top (Web Development) */}
                  <line x1="250" y1="195" x2="250" y2="135" stroke="#0052FF" strokeWidth="2.5" markerEnd="url(#blueDot)" />

                  {/* Spoke 2: Top Right (Mobile App Development) */}
                  <line x1="295" y1="215" x2="365" y2="160" stroke="#0052FF" strokeWidth="2.5" markerEnd="url(#blueDot)" />

                  {/* Spoke 3: Bottom Right (Ads & SEO Solutions) */}
                  <line x1="290" y1="290" x2="355" y2="340" stroke="#0052FF" strokeWidth="2.5" markerEnd="url(#blueDot)" />

                  {/* Spoke 4: Bottom Left (Digital Marketing) */}
                  <line x1="210" y1="290" x2="145" y2="340" stroke="#0052FF" strokeWidth="2.5" markerEnd="url(#blueDot)" />

                  {/* Spoke 5: Top Left (AI Automation) */}
                  <line x1="205" y1="215" x2="135" y2="160" stroke="#0052FF" strokeWidth="2.5" markerEnd="url(#blueDot)" />
                </svg>

                {/* Center D Hub Icon (Styled matching reference) */}
                <div className="relative z-20 w-24 h-24 md:w-26 md:h-26 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl ring-4 ring-white border-2 border-blue-400">
                  <span className="text-4xl md:text-5xl font-black tracking-tighter font-sans select-none">
                    D
                  </span>
                </div>

                {/* 5 Circular Nodes matching exact positions and labels in reference screenshot */}

                {/* Node 1: Top Center - WEB DEVELOPMENT */}
                <div className="absolute top-9 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-blue-600 shadow-xl flex items-center justify-center text-blue-600 transition hover:scale-105">
                    <Monitor className="w-8 h-8 text-blue-600" />
                  </div>
                  <span className="mt-1.5 bg-white/95 backdrop-blur-sm px-3 py-0.5 rounded-full text-[11px] font-black text-slate-900 shadow-md uppercase tracking-wider text-center">
                    WEB DEVELOPMENT
                  </span>
                </div>

                {/* Node 2: Top Right - MOBILE APP DEVELOPMENT */}
                <div className="absolute right-3 md:right-6 top-24 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-blue-600 shadow-xl flex items-center justify-center text-blue-600 transition hover:scale-105">
                    <Smartphone className="w-8 h-8 text-blue-600" />
                  </div>
                  <span className="mt-1.5 bg-white/95 backdrop-blur-sm px-3 py-0.5 rounded-full text-[11px] font-black text-slate-900 shadow-md uppercase tracking-wider text-center max-w-[120px] leading-tight">
                    MOBILE APP DEVELOPMENT
                  </span>
                </div>

                {/* Node 3: Bottom Right - ADS & SEO SOLUTIONS */}
                <div className="absolute right-4 md:right-8 bottom-4 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-blue-600 shadow-xl flex items-center justify-center text-blue-600 transition hover:scale-105">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <span className="mt-1.5 bg-white/95 backdrop-blur-sm px-3 py-0.5 rounded-full text-[11px] font-black text-slate-900 shadow-md uppercase tracking-wider text-center max-w-[120px] leading-tight">
                    ADS & SEO SOLUTIONS
                  </span>
                </div>

                {/* Node 4: Bottom Left - DIGITAL MARKETING */}
                <div className="absolute left-4 md:left-8 bottom-4 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-blue-600 shadow-xl flex items-center justify-center text-blue-600 transition hover:scale-105">
                    <Megaphone className="w-8 h-8 text-blue-600" />
                  </div>
                  <span className="mt-1.5 bg-white/95 backdrop-blur-sm px-3 py-0.5 rounded-full text-[11px] font-black text-slate-900 shadow-md uppercase tracking-wider text-center max-w-[120px] leading-tight">
                    DIGITAL MARKETING
                  </span>
                </div>

                {/* Node 5: Top Left - AI AUTOMATION */}
                <div className="absolute left-3 md:left-6 top-24 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-blue-600 shadow-xl flex items-center justify-center text-blue-600 transition hover:scale-105">
                    <BrainCircuit className="w-8 h-8 text-blue-600" />
                  </div>
                  <span className="mt-1.5 bg-white/95 backdrop-blur-sm px-3 py-0.5 rounded-full text-[11px] font-black text-slate-900 shadow-md uppercase tracking-wider text-center max-w-[120px] leading-tight">
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
