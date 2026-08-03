import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { trackAdEvent } from './utils/analytics';
import StatsBar from './components/StatsBar';
import WhoWeAre from './components/WhoWeAre';
import ServicesGrid from './components/ServicesGrid';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessSection from './components/ProcessSection';
import IndustriesSection from './components/IndustriesSection';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
const ConsultationModal = React.lazy(() => import('./components/ConsultationModal'));
const ServiceDetailModal = React.lazy(() => import('./components/ServiceDetailModal'));
import CustomCursor from './components/CustomCursor';
import AiChatbot from './components/AiChatbot';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [preselectedService, setPreselectedService] = useState('');

  const handleOpenGeneralConsultation = () => {
    setPreselectedService('');
    setIsConsultationOpen(true);
    trackAdEvent('InitiateCheckout', { placement: 'General CTA' });
  };

  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-blue selection:text-white">
      <CustomCursor />
      {/* Top Navbar */}
      <Navbar onOpenConsultation={handleOpenGeneralConsultation} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenConsultation={handleOpenGeneralConsultation} />
        <StatsBar />
        <Testimonials />
        <WhyChooseUs />
        <ServicesGrid onSelectService={(service) => setSelectedService(service)} />
        <ProcessSection />
        <IndustriesSection />
        <WhoWeAre />
        <CtaBanner onOpenConsultation={handleOpenGeneralConsultation} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Chatbot Widget (Disabled by default, uncomment to enable) */}
      {/* <AiChatbot onOpenConsultation={handleOpenGeneralConsultation} /> */}

      {/* Suspended modals loaded dynamically on click/trigger */}
      <React.Suspense fallback={null}>
        {/* Consultation Request Modal */}
        <ConsultationModal 
          isOpen={isConsultationOpen} 
          onClose={() => setIsConsultationOpen(false)} 
          preselectedService={preselectedService}
        />

        {/* Service Detail Modal */}
        <ServiceDetailModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
          onBookConsultation={() => {
            setPreselectedService(selectedService.title);
            setIsConsultationOpen(true);
            trackAdEvent('InitiateCheckout', { 
              placement: 'Service Detail Modal', 
              service_title: selectedService.title 
            });
          }}
        />
      </React.Suspense>

      {/* Sticky Mobile CTA Bar (Slides up below the fold) */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-30 p-4 bg-white/95 backdrop-blur-md border-t border-slate-200/85 shadow-lg flex items-center justify-between gap-3 lg:hidden transition-all duration-300 ${
          showStickyCta ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col text-left">
          <span className="text-[9px] font-bold text-bright-blue uppercase font-zen leading-none">Limited Audit Slots</span>
          <span className="text-xs font-bold text-slate-800 font-sans mt-1">Get Your Free Growth Audit</span>
        </div>
        <button
          onClick={handleOpenGeneralConsultation}
          className="px-5 py-2.5 bg-brand-blue hover:bg-bright-blue text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition cursor-pointer"
        >
          Claim Now
        </button>
      </div>
    </div>
  );
}
