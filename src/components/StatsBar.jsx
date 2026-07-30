import React from 'react';

export default function StatsBar() {
  const stats = [
    { number: "100+", label: "Projects delivered" },
    { number: "50+", label: "Clients across India" },
    { number: "5+", label: "Years of expertise" },
    { number: "13+", label: "Services offered" },
  ];

  return (
    <section className="bg-white text-neutral-dark py-8 shadow-sm relative z-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-center gap-6 md:gap-0">
          {stats.map((stat, idx) => (
            <div key={idx} className="pt-4 md:pt-0 px-4 flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-zen font-black tracking-normal mb-2 text-brand-blue">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 font-bebas">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
