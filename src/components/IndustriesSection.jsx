import React from 'react';
import { 
  Factory, 
  ShoppingCart, 
  HeartPulse, 
  GraduationCap, 
  Hotel, 
  Building2, 
  Rocket, 
  Building 
} from 'lucide-react';

export default function IndustriesSection() {
  const industries = [
    { name: "Textile & Manufacturing", icon: <Factory className="w-6 h-6 text-brand-blue" /> },
    { name: "Retail & E-commerce", icon: <ShoppingCart className="w-6 h-6 text-brand-blue" /> },
    { name: "Healthcare & Wellness", icon: <HeartPulse className="w-6 h-6 text-brand-blue" /> },
    { name: "Education & Training", icon: <GraduationCap className="w-6 h-6 text-brand-blue" /> },
    { name: "Hospitality & Travel", icon: <Hotel className="w-6 h-6 text-brand-blue" /> },
    { name: "Real Estate & Construction", icon: <Building2 className="w-6 h-6 text-brand-blue" /> },
    { name: "Technology Startups", icon: <Rocket className="w-6 h-6 text-brand-blue" /> },
  ];

  return (
    <section id="industries" className="py-16 md:py-24 bg-white text-neutral-dark border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column Description */}
          <div className="lg:col-span-5 flex items-start space-x-5 text-left">
            <div className="w-16 h-16 rounded-2xl bg-brand-blue text-white flex items-center justify-center shrink-0 shadow-lg shadow-brand-blue/20">
              <Building className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-bright-blue font-zen mb-1 block">
                Who We Serve
              </span>
              <h2 className="text-4xl sm:text-5xl font-bebas font-bold text-black tracking-wide mb-3 uppercase leading-tight">
                Industries <br />
                We <span className="text-bright-blue">Serve</span>
              </h2>
              <p className="text-neutral-gray text-sm sm:text-base leading-relaxed font-normal">
                We work with businesses across India — from textile and manufacturing to retail, healthcare, education, hospitality, real estate, and technology startups.
              </p>
            </div>
          </div>

          {/* Right Column Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 divide-x divide-slate-100 gap-y-6 lg:gap-y-0">
              {industries.map((ind, idx) => (
                <div
                  key={idx}
                  className="px-3 flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1.5 transition duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-light-blue/10 border border-light-blue/20 flex items-center justify-center mb-3 group-hover:bg-brand-blue group-hover:border-brand-blue transition duration-300 shadow-sm">
                    {React.cloneElement(ind.icon, {
                      className: "w-6 h-6 text-brand-blue group-hover:text-white transition duration-300"
                    })}
                  </div>
                  
                  <span className="text-xs font-bold text-black leading-snug tracking-tight font-sans">
                    {ind.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
