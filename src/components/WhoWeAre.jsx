import React from 'react';
import { Cpu, Target, Users } from 'lucide-react';

export default function WhoWeAre() {
  const pillars = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      title: "TECHNOLOGY-FIRST",
      description: "From custom websites to AI-powered automation, we build future-ready digital products."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "MARKETING THAT CONVERTS",
      description: "Data-driven SEO, paid ads, and social media strategies that bring real ROI."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "COIMBATORE ROOTS, GLOBAL STANDARDS",
      description: "Local expertise with world-class execution for businesses of all sizes."
    }
  ];

  return (
    <section id="about" className="py-14 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Text */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1.5 block">
              WHO WE ARE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              DRIVEN BY TECHNOLOGY. <br />
              FOCUSED ON <span className="text-blue-600">GROWTH.</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pr-4">
              We are DhiGrowth — a Coimbatore-based digital agency that combines technology, creativity, and strategy to deliver measurable business results. Whether you are a startup, SME, or enterprise, our end-to-end digital solutions are built to accelerate your growth.
            </p>
          </div>

          {/* Right 3 Columns with Vertical Line Dividers */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              {pillars.map((pillar, idx) => (
                <div 
                  key={idx} 
                  className="pt-6 md:pt-0 px-4 md:first:pl-0 flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition duration-300">
                    {React.cloneElement(pillar.icon, {
                      className: "w-7 h-7 text-blue-600 group-hover:text-white transition duration-300"
                    })}
                  </div>

                  <h3 className="text-xs font-black text-slate-900 tracking-wider uppercase mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
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
