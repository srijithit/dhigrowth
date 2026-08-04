import React from 'react';
import {
  Monitor,
  Smartphone,
  BrainCircuit,
  Megaphone,
  TrendingUp
} from 'lucide-react';
import { trackAdEvent } from '../utils/analytics';

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
              SCALE YOUR BUSINESS WITH AN<br />
              <span className="text-bright-blue">AI-POWERED GROWTH PARTNER</span>
            </h1>

            {/* Services Kicker */}
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-500 font-zen block">
              Get More Qualified Leads, Better Websites & Smarter Automation Under One Roof
            </h2>

            {/* Paragraph Body */}
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl font-normal">
              DhiGrowth helps businesses across India scale faster with high-performance web development, mobile apps, AI automation, and result-driven Meta & Google Ads.
            </p>

            {/* Inline Above-The-Fold Lead Form */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.name.value;
                const phone = e.target.phone.value;
                const service = e.target.service.value;
                
                trackAdEvent('Lead', { 
                  content_name: 'Free Strategy Session Request (Hero Inline)', 
                  service_needed: service 
                });

                const text = `*New Growth Audit Request (Hero Inline) — DhiGrowth*\n\n` +
                  `\u{1F464} *Name:* ${name}\n` +
                  `\u{1F4DE} *Phone:* ${phone}\n` +
                  `\u{1F6E0}\u{FE0F} *Service:* ${service}\n` +
                  `\u{1F3AF} *Goals:* Hero inline form request`;

                const whatsappUrl = `https://api.whatsapp.com/send?phone=919361088012&text=${encodeURIComponent(text)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="mt-6 p-5 bg-slate-50 border border-slate-200/80 rounded-2xl max-w-md shadow-sm space-y-3.5 font-sans relative z-10"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wide">
                  Claim Your Free Digital Audit & Roadmap
                </span>
                <span className="bg-red-100 text-red-700 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase animate-pulse">
                  Only 3 slots left
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name *" 
                  required 
                  className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-bright-blue focus:bg-white transition"
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number *" 
                  required 
                  className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-bright-blue focus:bg-white transition"
                />
              </div>
              <select 
                name="service"
                required
                className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-bright-blue focus:bg-white transition"
              >
                <option value="">Select Service Needed *</option>
                <option value="Website Development">Website Development</option>
                <option value="Application Development">Application Development</option>
                <option value="AI Development & Automation">AI Development & Automation</option>
                <option value="Meta & Google Ads">Meta & Google Ads</option>
                <option value="WhatsApp & SEO Marketing">WhatsApp & SEO Marketing</option>
              </select>
              <button
                type="submit"
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-green-600/20 flex items-center justify-center space-x-2 transition transform active:scale-95 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.288 1.498 4.76 1.499 5.263.003 9.616-4.248 9.62-9.48.002-2.533-.986-4.914-2.784-6.712C16.446 2.662 14.062 1.675 11.53 1.67c-5.266 0-9.618 4.25-9.622 9.48-.001 1.705.474 3.292 1.446 4.708L2.34 20.25l4.307-1.096zM17.65 14.659c-.318-.16-1.884-.93-2.176-1.036-.293-.107-.507-.16-.72.16-.213.32-.826 1.036-1.012 1.25-.187.213-.373.24-.69.08-.319-.16-1.348-.497-2.568-1.585-.949-.847-1.59-1.893-1.776-2.213-.187-.32-.02-.493.14-.652.143-.143.319-.373.479-.56.16-.187.213-.32.319-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.986-2.373-.26-.626-.525-.541-.72-.55-.187-.01-.4-.01-.613-.01-.213 0-.56.08-.853.4-.293.32-1.12 1.1-1.12 2.68 0 1.58 1.147 3.11 1.307 3.323.16.213 2.257 3.447 5.47 4.837.763.33 1.359.527 1.823.674.767.243 1.464.21 2.016.128.614-.092 1.884-.77 2.15-1.517.266-.747.266-1.387.187-1.517-.079-.13-.293-.21-.612-.37z"/>
                </svg>
                <span>Claim My Free Audit on WhatsApp</span>
              </button>
            </form>

            {/* Above-the-fold Social Proof Trust Badge */}
            <div className="pt-2 flex items-center space-x-3 text-slate-700 font-sans text-xs">
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5">
                  <div className="flex text-amber-500 text-sm">★★★★★</div>
                  <span className="font-bold text-slate-800 text-[11px] sm:text-xs">4.9/5 Google Rating</span>
                </div>
                <span className="text-slate-500 text-[10px] sm:text-[11px]">Trusted by 100+ Businesses scaled across India</span>
              </div>
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
