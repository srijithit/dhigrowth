import React from 'react';

export default function StatsBar() {
  const stats = [
    { number: "100+", label: "Projects delivered" },
    { number: "50+", label: "Clients in Coimbatore" },
    { number: "5+", label: "Years of expertise" },
    { number: "13+", label: "Services offered" },
  ];

  return (
    <section className="bg-blue-600 text-white py-7 shadow-md relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/25 text-center gap-6 md:gap-0">
          {stats.map((stat, idx) => (
            <div key={idx} className="pt-4 md:pt-0 px-4 flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black tracking-widest font-mono mb-1 text-white">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white/90 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
