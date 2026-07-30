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

      </div>
    </section>
  );
}
