import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      description: "We learn about your business, goals, and competition to build a tailored growth plan."
    },
    {
      num: "02",
      title: "Strategise",
      description: "Our team crafts a data-backed digital strategy aligned to your industry and target audience."
    },
    {
      num: "03",
      title: "Execute",
      description: "From development to campaigns — we build, launch, and manage with precision."
    },
    {
      num: "04",
      title: "Grow",
      description: "We monitor, optimise, and scale — continuously improving your results month after month."
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-white text-neutral-dark border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headline */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-bright-blue font-zen mb-2 block">
            How We Work
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas font-bold text-black tracking-wide uppercase leading-tight">
            Our process — simple, transparent, <span className="text-brand-blue">results-driven</span>
          </h2>
        </div>

        {/* 4 Steps Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-start group">
              
              {/* Connector Arrow (Desktop Only) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-6 text-light-blue z-10">
                  <ArrowRight className="w-5 h-5 opacity-60 animate-pulse" />
                </div>
              )}

              {/* Step Circle & Title */}
              <div className="flex items-center space-x-4 mb-5 w-full justify-start">
                {/* Step Circle with Zen Dots font */}
                <div className="w-16 h-16 rounded-2xl bg-brand-blue text-white font-zen text-lg flex items-center justify-center shadow-md shadow-brand-blue/20 group-hover:bg-bright-blue group-hover:scale-110 transition duration-300 shrink-0">
                  {step.num}
                </div>

                <h3 className="text-xl md:text-2xl font-bebas font-bold text-black tracking-wider uppercase">
                  {step.title}
                </h3>
              </div>

              {/* Step Description */}
              <p className="text-neutral-gray text-xs sm:text-sm leading-relaxed pl-1 font-normal">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
