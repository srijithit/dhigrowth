import React from 'react';

export default function StatsBar() {
  const stats = [
    { number: "100+", label: "Projects delivered" },
    { number: "50+", label: "Clients in Coimbatore" },
    { number: "5+", label: "Years of expertise" },
    { number: "13+", label: "Services offered" },
  ];

  return (
    <section className="bg-blue-600 text-white py-8 shadow-inner relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-blue-400/40 text-center gap-6 md:gap-0">
          {stats.map((stat, idx) => (
            <div key={idx} className="pt-4 md:pt-0 px-4">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-1">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-blue-100 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
