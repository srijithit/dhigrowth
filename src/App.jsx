import React, { useState } from 'react';
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
