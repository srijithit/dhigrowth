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
    <section id="industries" className="py-14 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Description */}
          <div className="lg:col-span-5 flex items-start space-x-4">
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/30">
              <Building className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2 uppercase">
                INDUSTRIES WE SERVE
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We work with businesses across Coimbatore and India — from textile and manufacturing to retail, healthcare, education, hospitality, real estate, and technology startups.
              </p>
            </div>
          </div>

          {/* Right Column 7 Vertical Columns with Divider Lines */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 divide-x divide-slate-200 gap-y-4 lg:gap-y-0">
              {industries.map((ind, idx) => (
                <div
                  key={idx}
                  className="px-2 flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1 transition duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-2 group-hover:bg-blue-600 transition duration-300">
                    {React.cloneElement(ind.icon, {
                      className: "w-5 h-5 text-blue-600 group-hover:text-white transition duration-300"
                    })}
                  </div>
                  
                  <span className="text-[10px] font-extrabold text-slate-900 leading-tight">
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
