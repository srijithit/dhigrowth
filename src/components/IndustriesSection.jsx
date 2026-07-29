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
    { name: "Textile & Manufacturing", icon: <Factory className="w-6 h-6 text-blue-600" /> },
    { name: "Retail & E-commerce", icon: <ShoppingCart className="w-6 h-6 text-blue-600" /> },
    { name: "Healthcare & Wellness", icon: <HeartPulse className="w-6 h-6 text-blue-600" /> },
    { name: "Education & Training", icon: <GraduationCap className="w-6 h-6 text-blue-600" /> },
    { name: "Hospitality & Travel", icon: <Hotel className="w-6 h-6 text-blue-600" /> },
    { name: "Real Estate & Construction", icon: <Building2 className="w-6 h-6 text-blue-600" /> },
    { name: "Technology Startups", icon: <Rocket className="w-6 h-6 text-blue-600" /> },
  ];

  return (
    <section id="industries" className="py-16 md:py-24 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column Description */}
          <div className="lg:col-span-5 flex items-start space-x-5">
            <div className="w-20 h-20 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xl shadow-blue-600/30">
              <Building className="w-10 h-10" />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3 uppercase leading-none">
                INDUSTRIES <br className="hidden sm:block" />
                WE <span className="text-blue-600">SERVE</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                We work with businesses across Coimbatore and India — from textile and manufacturing to retail, healthcare, education, hospitality, real estate, and technology startups.
              </p>
            </div>
          </div>

          {/* Right Column 7 Vertical Columns with Divider Lines */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 divide-x divide-slate-200 gap-y-6 lg:gap-y-0">
              {industries.map((ind, idx) => (
                <div
                  key={idx}
                  className="px-3 flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1.5 transition duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:border-blue-600 transition duration-300 shadow-sm">
                    {React.cloneElement(ind.icon, {
                      className: "w-7 h-7 text-blue-600 group-hover:text-white transition duration-300"
                    })}
                  </div>
                  
                  <span className="text-xs font-black text-slate-900 leading-snug tracking-tight">
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
