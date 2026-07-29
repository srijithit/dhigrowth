import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with Brand Icon Badge */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="flex items-center space-x-2.5 group"
          >
            <img 
              src="/logo.svg" 
              alt="DHI GROWTH Logo" 
              className="w-10 h-10 object-contain shadow-sm rounded-full group-hover:scale-105 transition duration-300"
            />
            <span className="text-2xl font-black tracking-tight text-blue-600 font-sans">
              DHI <span className="text-blue-600">GROWTH</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7 h-full">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-sm font-bold text-blue-600 transition flex items-center h-full border-b-2 border-blue-600 px-1"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div 
              className="relative flex items-center h-full group"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <a 
                href="#services"
                onClick={(e) => scrollToSection(e, 'services')}
                className="flex items-center space-x-1.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition h-full border-b-2 border-transparent hover:border-blue-600 group-hover:text-blue-600 px-1"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:rotate-180 transition duration-300" />
              </a>

              {servicesDropdown && (
                <div 
                  className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 py-3 z-50 animate-fadeIn"
                >
                  <a href="#services" onClick={(e) => { setServicesDropdown(false); scrollToSection(e, 'services'); }} className="block px-4 py-2 text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition">
                    Website Development
                  </a>
                  <a href="#services" onClick={(e) => { setServicesDropdown(false); scrollToSection(e, 'services'); }} className="block px-4 py-2 text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition">
                    Application Development
                  </a>
                  <a href="#services" onClick={(e) => { setServicesDropdown(false); scrollToSection(e, 'services'); }} className="block px-4 py-2 text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition">
                    AI Automation & ML Models
                  </a>
                  <a href="#services" onClick={(e) => { setServicesDropdown(false); scrollToSection(e, 'services'); }} className="block px-4 py-2 text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition">
                    Digital Marketing & SEO
                  </a>
                  <a href="#services" onClick={(e) => { setServicesDropdown(false); scrollToSection(e, 'services'); }} className="block px-4 py-2 text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition">
                    WhatsApp & Paid Ads
                  </a>
                  <a href="#services" onClick={(e) => { setServicesDropdown(false); scrollToSection(e, 'services'); }} className="block px-4 py-2 text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition">
                    Ads Shooting & Video Editing
                  </a>
                </div>
              )}
            </div>

            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition flex items-center h-full border-b-2 border-transparent hover:border-blue-600 px-1"
            >
              About Us
            </a>

            <a 
              href="#work" 
              onClick={(e) => scrollToSection(e, 'work')}
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition flex items-center h-full border-b-2 border-transparent hover:border-blue-600 px-1"
            >
              Our Work
            </a>

            <a 
              href="#industries" 
              onClick={(e) => scrollToSection(e, 'industries')}
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition flex items-center h-full border-b-2 border-transparent hover:border-blue-600 px-1"
            >
              Industries
            </a>

            <a 
              href="#blog" 
              onClick={(e) => scrollToSection(e, 'blog')}
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition flex items-center h-full border-b-2 border-transparent hover:border-blue-600 px-1"
            >
              Blog
            </a>

            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition flex items-center h-full border-b-2 border-transparent hover:border-blue-600 px-1"
            >
              Contact Us
            </a>
          </nav>

          {/* Right CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wide rounded-lg shadow-md shadow-blue-600/20 hover:shadow-lg transition transform hover:-translate-y-0.5"
            >
              Get a Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-bold text-blue-600"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-700 hover:text-blue-600"
          >
            Services (13 Solutions)
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-700 hover:text-blue-600"
          >
            About Us
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-700 hover:text-blue-600"
          >
            Our Work
          </a>
          <a
            href="#industries"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-700 hover:text-blue-600"
          >
            Industries
          </a>
          <a
            href="#blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-700 hover:text-blue-600"
          >
            Blog
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-700 hover:text-blue-600"
          >
            Contact Us
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 bg-blue-600 text-white font-bold text-sm uppercase rounded-lg shadow-md"
            >
              Get a Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
