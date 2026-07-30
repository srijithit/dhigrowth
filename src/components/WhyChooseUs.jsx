import React from 'react';
import { Home, Zap, BarChart3, MapPin, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Home className="w-6 h-6 text-brand-blue" />,
      title: "One agency, every solution",
      description: "From logo to landing page to lead generation — we handle it all under one roof."
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-blue" />,
      title: "AI-powered edge",
      description: "We integrate AI into your business before your competitors even consider it."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-brand-blue" />,
      title: "Transparent reporting",
      description: "Real-time dashboards and monthly reports — you always know where your money goes."
    },
    {
      icon: <MapPin className="w-6 h-6 text-brand-blue" />,
      title: "Pan-India growth strategy",
      description: "We understand the diverse Indian markets, local cultures, and audiences to drive nationwide growth."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />,
      title: "End-to-end ownership",
      description: "From strategy to execution to optimisation — we own the entire journey."
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-slate-50 text-slate-900 relative border-y border-slate-200/60 overflow-hidden">
      
      {/* Background Graphic Accents */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-bright-blue/5 blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-bright-blue font-zen mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas font-bold tracking-wide uppercase leading-tight text-slate-900 max-w-4xl mx-auto">
            Why businesses across India choose <span className="text-bright-blue">DhiGrowth</span>
          </h2>
        </div>

        {/* 5 Column Grid (Responsive layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-bright-blue hover:shadow-xl hover:-translate-y-1.5 transition duration-300 group cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-light-blue/10 flex items-center justify-center mb-5 group-hover:bg-brand-blue transition duration-300">
                {React.cloneElement(pt.icon, {
                  className: "w-6 h-6 text-brand-blue group-hover:text-white transition duration-300"
                })}
              </div>

              {/* Title (Bebas Neue) */}
              <h3 className="text-xl sm:text-2xl font-bebas font-bold uppercase tracking-wide mb-3 text-slate-900 group-hover:text-bright-blue transition">
                {pt.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {pt.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
