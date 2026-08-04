import React from 'react';
import { Cpu, Target, Globe } from 'lucide-react';

export default function WhoWeAre() {
  const pillars = [
    {
      icon: <Cpu className="w-8 h-8 text-brand-blue" />,
      title: "Technology-first",
      description: "From custom websites to AI-powered automation, we build future-ready digital products."
    },
    {
      icon: <Target className="w-8 h-8 text-brand-blue" />,
      title: "Marketing that converts",
      description: "Data-driven SEO, paid ads, and social media strategies that bring real ROI."
    },
    {
      icon: <Globe className="w-8 h-8 text-brand-blue" />,
      title: "Coimbatore roots, global standards",
      description: "Coimbatore heritage with world-class execution helping businesses across India scale."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white text-neutral-dark border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 text-left space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-bright-blue font-zen block">
              Who we are
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas font-bold text-black tracking-wide leading-tight">
              DRIVEN BY TECHNOLOGY.<br />
              FOCUSED ON <span className="text-bright-blue">GROWTH</span>.
            </h2>
            <p className="text-neutral-gray text-sm sm:text-base leading-relaxed pr-4 font-normal">
              We are DhiGrowth — a digital agency that combines technology, creativity, and strategy to deliver measurable business results for clients across India. Whether you are a startup, SME, or enterprise, our end-to-end digital solutions are built to accelerate your growth.
            </p>
          </div>

          {/* Right Column: 3 Value Pillars */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 gap-y-8 md:gap-y-0">
              {pillars.map((pillar, idx) => (
                <div 
                  key={idx} 
                  className="pt-6 md:pt-0 px-4 md:first:pl-0 flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-light-blue/20 border border-light-blue/40 flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:border-brand-blue transition duration-300 shadow-sm">
                    {React.cloneElement(pillar.icon, {
                      className: "w-8 h-8 text-brand-blue group-hover:text-white transition duration-300"
                    })}
                  </div>

                  <h3 className="text-base font-bebas font-bold text-black tracking-wider uppercase mb-2 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-neutral-gray text-xs sm:text-sm leading-relaxed max-w-xs font-normal">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Founder Spotlight / Meet the Founder */}
        <div className="mt-16 pt-16 border-t border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-brand-blue/20 shadow-xl group">
              <img 
                src="/dhinesh.png" 
                alt="Dhinesh - Founder of DhiGrowth"
                className="w-full h-full object-cover filter brightness-[0.98] transition group-hover:scale-105 duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center pb-3">
                <span className="text-white text-xs font-bold font-sans">Dhinesh</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 text-left space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-bright-blue font-zen block">
              Meet the Founder
            </span>
            <h3 className="text-3xl font-bebas font-bold text-black tracking-wide leading-tight">
              Dhinesh
            </h3>
            <p className="text-neutral-gray text-sm leading-relaxed font-normal">
              "We started DhiGrowth with a simple mission: to build technology and marketing systems that generate actual revenue, not just vanity metrics. E-commerce brands, local manufacturing businesses in Coimbatore, and tech companies across India don't buy SEO or website rebuilds—they buy growth. That's why we audit your entire sales funnel before recommending a single service."
            </p>
            <div className="flex items-center space-x-6 pt-1">
              <div className="text-xs text-slate-500 font-sans">
                <span className="font-bold text-slate-700">Email:</span> <a href="mailto:dhinesh@dhigrowth.com" className="text-brand-blue hover:underline">dhinesh@dhigrowth.com</a>
              </div>
              <div className="text-xs text-slate-500 font-sans">
                <span className="font-bold text-slate-700">LinkedIn:</span> <a href="https://www.linkedin.com/in/dinesh-gopalan/" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Connect on LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
