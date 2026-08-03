import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { trackAdEvent } from '../utils/analytics';

export default function CtaBanner({ onOpenConsultation }) {
  const handleWhatsAppClick = () => {
    trackAdEvent('Contact', { method: 'WhatsApp', placement: 'CTA Banner' });
  };

  return (
    <section className="relative bg-gradient-to-r from-light-blue/20 via-white to-light-blue/10 text-slate-900 py-20 overflow-hidden shadow-sm border-y border-slate-200/60">
      
      {/* Background Watermark Text */}
      <div className="absolute right-0 bottom-0 top-0 flex items-center justify-end pointer-events-none opacity-[0.03] overflow-hidden select-none">
        <span className="text-9xl md:text-[180px] font-black tracking-widest text-black whitespace-nowrap translate-x-1/4 font-bebas">
          DHI GROWTH
        </span>
      </div>

      {/* Radial Blue Light Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Text */}
          <div className="text-left max-w-2xl space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-bright-blue font-zen block">
              Start Your Journey
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas font-bold tracking-wide mb-4 leading-none text-slate-900">
              Ready to grow your business in India?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Talk to our digital growth experts today. Get a free audit of your website, ads, or social media — and a custom roadmap to scale your business faster.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto shrink-0 font-sans">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-brand-blue hover:bg-bright-blue text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-brand-blue/20 transition transform hover:-translate-y-0.5 text-center flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Get My Free Growth Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://api.whatsapp.com/send?phone=919361088012&text=Hi%20DhiGrowth%2C%20I%20want%20to%20grow%20my%20business%20in%20India%21"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="px-8 py-4 bg-transparent hover:bg-brand-blue/5 border-2 border-brand-blue/30 hover:border-brand-blue text-brand-blue font-bold text-sm uppercase tracking-wider rounded-xl transition shadow-md flex items-center justify-center space-x-2.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current text-brand-blue" />
              <span>WhatsApp Us Now</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
