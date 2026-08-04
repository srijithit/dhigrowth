import React, { useState } from 'react';
import { X, CheckCircle, Send, Phone, Mail, User, Building } from 'lucide-react';
import { trackAdEvent } from '../utils/analytics';

export default function ConsultationModal({ isOpen, onClose, preselectedService }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: 'Website Development',
    message: ''
  });

  React.useEffect(() => {
    if (isOpen) {
      let serviceOption = 'Website Development';
      if (preselectedService) {
        const title = preselectedService;
        if (title.includes('Website')) {
          serviceOption = 'Website Development';
        } else if (title.includes('Application')) {
          serviceOption = 'Application Development';
        } else if (title.includes('AI') || title.includes('Automation')) {
          serviceOption = 'AI Automation & Solutions';
        } else if (title.includes('SEO') || title.includes('Marketing') || title.includes('Development')) {
          if (title.includes('WhatsApp')) {
            serviceOption = 'WhatsApp Marketing';
          } else if (title.includes('Meta') || title.includes('Ads')) {
            serviceOption = 'Meta & Google Ads';
          } else {
            serviceOption = 'Digital Marketing & SEO';
          }
        } else if (title.includes('Video') || title.includes('Shoot')) {
          serviceOption = 'Video Editing & Ad Shoot';
        }
      }
      setFormData(prev => ({
        ...prev,
        service: serviceOption
      }));
    }
  }, [isOpen, preselectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    trackAdEvent('Lead', { 
      content_name: 'Free Strategy Session Request', 
      service_needed: formData.service 
    });

    const text = `*New Growth Audit Request — DhiGrowth*\n\n` +
      `\u{1F464} *Name:* ${formData.name}\n` +
      `\u{1F4DE} *Phone:* ${formData.phone}\n` +
      `\u{2709}\u{FE0F} *Email:* ${formData.email}\n` +
      `\u{1F3E2} *Company:* ${formData.company || 'N/A'}\n` +
      `\u{1F6E0}\u{FE0F} *Service:* ${formData.service}\n` +
      `\u{1F3AF} *Goals:* ${formData.message || 'N/A'}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=919361088012&text=${encodeURIComponent(text)}`;
    window.location.href = whatsappUrl;
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-blue via-bright-blue to-brand-blue p-6 text-white relative">
          <button
            onClick={handleReset}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1 transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-block px-3 py-1 bg-white/20 text-xs font-semibold rounded-full mb-2 tracking-wide uppercase">
            Claim Your Free Audit & Roadmap
          </div>
          <h3 className="text-2xl font-bold tracking-tight">Get Your Free Growth Audit</h3>
          <p className="text-blue-100 text-sm mt-1">
            Get a tailored digital scaling blueprint & free website/marketing audit from our experts.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-2">Request Received!</h4>
              <p className="text-slate-600 mb-6 max-w-md mx-auto">
                Thank you <span className="font-semibold text-slate-800">{formData.name || 'there'}</span>. Our digital growth strategist will contact you within 2 business hours.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition shadow-md"
              >
                Back to Homepage
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Arun Kumar"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-bright-blue focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-bright-blue focus:bg-white transition"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="arun@business.com"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-bright-blue focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Company / Business Name
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Coimbatore Enterprises"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-bright-blue focus:bg-white transition"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Primary Service Needed
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-bright-blue focus:bg-white transition text-slate-700 font-medium"
                >
                  <option>Website Development</option>
                  <option>Application Development</option>
                  <option>AI Automation & Solutions</option>
                  <option>Digital Marketing & SEO</option>
                  <option>Meta & Google Ads</option>
                  <option>WhatsApp Marketing</option>
                  <option>Video Editing & Ad Shoot</option>
                  <option>Full-Stack Digital Growth</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Tell us about your business goals
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="We want to scale our leads and launch a modern mobile app in Coimbatore..."
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-bright-blue focus:bg-white transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg shadow-green-600/30 flex items-center justify-center space-x-2.5 transition transform active:scale-95 cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.288 1.498 4.76 1.499 5.263.003 9.616-4.248 9.62-9.48.002-2.533-.986-4.914-2.784-6.712C16.446 2.662 14.062 1.675 11.53 1.67c-5.266 0-9.618 4.25-9.622 9.48-.001 1.705.474 3.292 1.446 4.708L2.34 20.25l4.307-1.096zM17.65 14.659c-.318-.16-1.884-.93-2.176-1.036-.293-.107-.507-.16-.72.16-.213.32-.826 1.036-1.012 1.25-.187.213-.373.24-.69.08-.319-.16-1.348-.497-2.568-1.585-.949-.847-1.59-1.893-1.776-2.213-.187-.32-.02-.493.14-.652.143-.143.319-.373.479-.56.16-.187.213-.32.319-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.986-2.373-.26-.626-.525-.541-.72-.55-.187-.01-.4-.01-.613-.01-.213 0-.56.08-.853.4-.293.32-1.12 1.1-1.12 2.68 0 1.58 1.147 3.11 1.307 3.323.16.213 2.257 3.447 5.47 4.837.763.33 1.359.527 1.823.674.767.243 1.464.21 2.016.128.614-.092 1.884-.77 2.15-1.517.266-.747.266-1.387.187-1.517-.079-.13-.293-.21-.612-.37z"/>
                </svg>
                <span>Claim My Free Audit via WhatsApp</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
