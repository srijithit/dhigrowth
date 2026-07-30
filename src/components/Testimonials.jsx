import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "DhiGrowth built our website and ran ads that 3x our leads in just 90 days. Highly professional team!",
      name: "Arun Kumar",
      role: "Managing Director",
      company: "Kumar Textile Mills",
      location: "Coimbatore",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80"
    },
    {
      quote: "Their AI automation solution saved us 40+ hours of manual work every week. Excellent support!",
      name: "Priya Natarajan",
      role: "CEO",
      company: "FabriTech Manufacturing",
      location: "Chennai",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80"
    },
    {
      quote: "SEO and content strategy from DhiGrowth helped us rank on top for key search terms. Great job!",
      name: "Karthik R",
      role: "Founder",
      company: "EduSpark Academics",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
    },
    {
      quote: "From ad shooting to video editing, they understood our brand perfectly. Very creative team!",
      name: "Meena Suresh",
      role: "Marketing Head",
      company: "D Zone Fashion Retail",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white text-neutral-dark border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-bright-blue font-zen mb-2 block">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas font-bold text-black tracking-wide uppercase leading-tight">
            What our clients across India say about <span className="text-brand-blue">DhiGrowth</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-bright-blue hover:-translate-y-1 transition duration-300 flex flex-col justify-between relative group"
            >
              <div>
                <Quote className="w-8 h-8 text-light-blue opacity-50 mb-4" />
                
                {/* 5-Star rating */}
                <div className="flex items-center space-x-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-current" />
                  ))}
                </div>

                <p className="text-neutral-gray text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center space-x-3.5 pt-5 border-t border-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-light-blue group-hover:border-bright-blue transition duration-300"
                />
                <div className="text-left">
                  <h4 className="text-sm font-bold text-black">{item.name}</h4>
                  <p className="text-[11px] text-slate-500 font-semibold">{item.role}, {item.company}</p>
                  <p className="text-[10px] font-bold text-bright-blue uppercase tracking-wider">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
