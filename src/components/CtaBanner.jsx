import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function CtaBanner({ onOpenConsultation }) {
  const handleWhatsApp = () => {
    window.open('https://wa.me/917534567890?text=Hi%20DhiGrowth,%20I%20want%20to%20grow%20my%20business%20in%20Coimbatore!', '_blank');
  };

  return (
    <section className="relative bg-blue-600 text-white py-16 md:py-20 overflow-hidden shadow-2xl">
      
      {/* Background Watermark Text */}
      <div className="absolute right-0 bottom-0 top-0 flex items-center justify-end pointer-events-none opacity-15 overflow-hidden select-none">
        <span className="text-8xl md:text-9xl font-black tracking-widest text-white whitespace-nowrap translate-x-1/4">
          DHI GROWTH
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Text */}
          <div className="text-left max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              READY TO GROW YOUR BUSINESS IN COIMBATORE?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Talk to our digital growth experts today. Get a free audit of your website, ads, or social media — and a custom roadmap to scale your business faster.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-7 py-3.5 bg-white text-blue-600 hover:bg-blue-50 font-bold text-sm rounded-xl shadow-lg transition transform hover:-translate-y-0.5 text-center flex items-center justify-center space-x-2"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="px-7 py-3.5 bg-blue-700/80 hover:bg-blue-800 border border-blue-400/40 text-white font-bold text-sm rounded-xl transition shadow-md flex items-center justify-center space-x-2.5"
            >
              <MessageCircle className="w-5 h-5 fill-current text-white" />
              <span>WhatsApp Us Now</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
