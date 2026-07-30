import React from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onBookConsultation }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Top Accent Header */}
        <div className="bg-gradient-to-r from-brand-blue to-bright-blue p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1.5 transition"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
              {service.icon}
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-light-blue font-zen">
              Solution #{service.id}
            </span>
          </div>

          <h3 className="text-3xl font-bebas font-bold tracking-wider">{service.title}</h3>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <p className="text-slate-600 text-sm leading-relaxed">
            {service.description}
          </p>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 font-zen">
              Key Features & Deliverables
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-bright-blue shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 flex items-center space-x-3">
            <button
              onClick={() => {
                onClose();
                onBookConsultation();
              }}
              className="flex-1 py-3 bg-brand-blue hover:bg-bright-blue text-white font-bold text-sm rounded-xl shadow-lg shadow-brand-blue/30 flex items-center justify-center space-x-2 transition cursor-pointer"
            >
              <span>Request Quote for {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
