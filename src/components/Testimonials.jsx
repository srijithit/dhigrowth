import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState(0);

  const testimonials = [
    {
      quote: "DhiGrowth built our website and ran ads that 3x our leads in just 90 days. Highly professional team!",
      name: "Arun Kumar",
      role: "Managing Director",
      location: "Coimbatore",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80"
    },
    {
      quote: "Their AI automation solution saved us 40+ hours of manual work every week. Excellent support!",
      name: "Priya Natarajan",
      role: "CEO, FabriTech",
      location: "Coimbatore",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80"
    },
    {
      quote: "SEO and content strategy from DhiGrowth helped us rank on top for key search terms. Great job!",
      name: "Karthik R",
      role: "Founder, EduSpark",
      location: "Coimbatore",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
    },
    {
      quote: "From ad shooting to video editing, they understood our brand perfectly. Very creative team!",
      name: "Meena Suresh",
      role: "Marketing Head, D Zone",
      location: "Coimbatore",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            WHAT OUR CLIENTS IN COIMBATORE SAY ABOUT <span className="text-blue-600">DHIGROWTH</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500 hover:-translate-y-1 transition duration-300 flex flex-col justify-between relative"
            >
              <div>
                <Quote className="w-8 h-8 text-blue-200 mb-3" />
                
                {/* 5-Star rating */}
                <div className="flex items-center space-x-1 mb-3 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-blue-600/30"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                  <p className="text-[11px] text-slate-500">{item.role}</p>
                  <p className="text-[10px] font-semibold text-blue-600">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={() => setActiveTab(0)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeTab === 0 ? 'bg-blue-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
            }`}
          ></button>
          <button
            onClick={() => setActiveTab(1)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeTab === 1 ? 'bg-blue-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
            }`}
          ></button>
          <button
            onClick={() => setActiveTab(2)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeTab === 2 ? 'bg-blue-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
            }`}
          ></button>
        </div>

      </div>
    </section>
  );
}
