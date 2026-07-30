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

  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable common Inspect & developer tool shortcut keys
    const handleKeyDown = (e) => {
      // 1. Disable F12
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
      }

      // 2. Disable Ctrl+Shift+I / Cmd+Opt+I (Inspect)
      //    Disable Ctrl+Shift+J / Cmd+Opt+J (Console)
      //    Disable Ctrl+Shift+C / Cmd+Opt+C (Element selector)
      const isInspectShortcut = (e.ctrlKey && e.shiftKey) || (e.metaKey && e.altKey);
      if (isInspectShortcut && (
        e.key === 'i' || e.key === 'I' || e.keyCode === 73 ||
        e.key === 'j' || e.key === 'J' || e.keyCode === 74 ||
        e.key === 'c' || e.key === 'C' || e.keyCode === 67
      )) {
        e.preventDefault();
        return false;
      }

      // 3. Disable Ctrl+U / Cmd+Opt+U (View Source Code)
      const isSourceShortcut = e.ctrlKey || (e.metaKey && e.altKey);
      if (isSourceShortcut && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOpenGeneralConsultation = () => {
    setPreselectedService('');
    setIsConsultationOpen(true);
    trackAdEvent('InitiateCheckout', { placement: 'General CTA' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-blue selection:text-white">
      <CustomCursor />
      {/* Top Navbar */}
      <Navbar onOpenConsultation={handleOpenGeneralConsultation} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenConsultation={handleOpenGeneralConsultation} />
        <StatsBar />
        <WhoWeAre />
        <ServicesGrid onSelectService={(service) => setSelectedService(service)} />
        <WhyChooseUs />
        <ProcessSection />
        <IndustriesSection />
        <Testimonials />
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
    </div>
  );
}
