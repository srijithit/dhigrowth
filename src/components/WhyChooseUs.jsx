import React from 'react';
import { Home, Zap, BarChart3, MapPin, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Home className="w-8 h-8 text-white" />,
      title: "ONE AGENCY, EVERY SOLUTION",
      description: "From logo to landing page to lead generation — we handle it all under one roof."
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "AI-POWERED EDGE",
      description: "We integrate AI into your business before your competitors even consider it."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "TRANSPARENT REPORTING",
      description: "Real-time dashboards and monthly reports — you always know where your money goes."
    },
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      title: "COIMBATORE-FOCUSED STRATEGY",
      description: "We understand the local market, culture, and audience better than any remote agency."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "END-TO-END OWNERSHIP",
      description: "From strategy to execution to optimization — we own the entire journey."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Navy Container Box */}
        <div className="bg-[#031B4E] rounded-3xl p-8 sm:p-10 text-white shadow-2xl">
          
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              WHY COIMBATORE BUSINESSES CHOOSE <span className="text-blue-400">DHIGROWTH</span>
            </h2>
          </div>

          {/* 5 Vertical Columns with Divider Lines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-blue-800/80 gap-6 lg:gap-0">
            {points.map((pt, idx) => (
              <div
                key={idx}
                className="pt-6 lg:pt-0 px-4 first:pl-0 flex flex-col items-center text-center group cursor-pointer hover:opacity-90 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-900/60 border border-blue-700/60 flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                  {pt.icon}
                </div>

                <h3 className="text-xs font-black tracking-wider uppercase mb-2 text-white h-9 flex items-center justify-center">
                  {pt.title}
                </h3>

                <p className="text-blue-100/80 text-[11px] leading-relaxed max-w-xs">
                  {pt.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
