import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: "1",
      title: "DISCOVER",
      description: "We learn about your business, goals, and competition to build a tailored growth plan."
    },
    {
      num: "2",
      title: "STRATEGISE",
      description: "Our team crafts a data-backed digital strategy aligned to your industry and target audience."
    },
    {
      num: "3",
      title: "EXECUTE",
      description: "From development to campaigns — we build, launch, and manage with precision."
    },
    {
      num: "4",
      title: "GROW",
      description: "We monitor, optimise, and scale — continuously improving your results month after month."
    }
  ];

  return (
    <section id="work" className="py-16 md:py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight">
            OUR PROCESS — SIMPLE, TRANSPARENT, <span className="text-blue-600">RESULTS-DRIVEN</span>
          </h2>
        </div>

        {/* 4 Steps Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-left md:text-left group">
              
              {/* Connector Arrow (Desktop Only) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 -right-6 text-blue-500 z-10">
                  <ArrowRight className="w-5 h-5 opacity-60" />
                </div>
              )}

              {/* Step Circle & Title */}
              <div className="flex items-center space-x-4 mb-4 w-full justify-start">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-blue-600/30 shrink-0 group-hover:scale-110 transition duration-300">
                  {step.num}
                </div>

                <h3 className="text-base font-black text-black tracking-wider uppercase">
                  {step.title}
                </h3>
              </div>

              {/* Step Description */}
              <p className="text-black/85 text-xs sm:text-sm leading-relaxed pl-1 font-medium">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
