import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react';

export default function Footer() {
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const number = '919361088012';
    const text = encodeURIComponent('Hi DhiGrowth, I want to grow my business in India!');
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const url = isMobile 
      ? `https://api.whatsapp.com/send?phone=${number}&text=${text}`
      : `https://web.whatsapp.com/send?phone=${number}&text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <footer id="contact" className="bg-slate-50 text-slate-600 pt-16 border-t border-slate-200/80 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-blue/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Centered Contact Block */}
        <div className="text-center pb-12 max-w-2xl mx-auto space-y-6">
          <h4 className="text-2xl font-bebas font-bold uppercase tracking-wider text-slate-800">
            Contact Us
          </h4>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 font-sans text-xs sm:text-sm text-slate-600">
            
            {/* Phone */}
            <a 
              href="https://wa.me/919361088012" 
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-2 hover:text-bright-blue transition font-semibold cursor-pointer"
              title="Chat on WhatsApp"
            >
              <Phone className="w-4 h-4 text-bright-blue shrink-0" />
              <span>+91 93610 88012</span>
            </a>

            {/* Email */}
            <a 
              href="mailto:dhinesh@dhigrowth.com?subject=Growth%20Consultation%20Inquiry%20-%20DhiGrowth&body=Hi%20Dhinesh%2C%0A%0AI%20visited%20DhiGrowth%20and%20would%20like%20to%20schedule%20a%20consultation%20to%20discuss%20growing%20my%20business%20online.%0A%0AHere%20are%20my%20details%3A%0A-%20Name%3A%20%0A-%20Company%20Name%3A%20%0A-%20Requirements%3A%20%0A%0ALooking%20forward%20to%20hearing%20from%20you%21" 
              className="flex items-center space-x-2 hover:text-bright-blue transition"
            >
              <Mail className="w-4 h-4 text-bright-blue shrink-0" />
              <span>dhinesh@dhigrowth.com</span>
            </a>

            {/* Address */}
            <a 
              href="https://www.google.com/maps/place/Dhigrowth+Business+Pvt+Ltd/@11.0485934,77.0421634,19z/data=!3m1!4b1!4m6!3m5!1s0x3ba85700608f4393:0x7a612ef883b16359!8m2!3d11.0485934!4d77.0428071!16s%2Fg%2F11njtdfg3_?entry=tts&g_ep=EgoyMDI2MDcyNi4wIPu8ASoASAFQAw%3D%3D&skid=9788cfeb-797b-489b-bd6b-3131448a25a5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-bright-blue transition"
              title="Open location on Google Maps"
            >
              <MapPin className="w-4 h-4 text-bright-blue shrink-0" />
              <span className="hover:underline">Coimbatore, Tamil Nadu</span>
            </a>

          </div>
        </div>

      </div>

      {/* Premium Full-Width Brand Blue Bottom Bar */}
      <div className="bg-brand-blue w-full py-12 md:py-16 text-white relative overflow-hidden mt-4">
        
        {/* Inner glow circle decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-4">
            
            {/* Copyright Left */}
            <p className="text-[11px] sm:text-xs font-sans uppercase tracking-widest text-white/90 text-center md:text-left">
              © {new Date().getFullYear()} DHI GROWTH. All rights reserved.
            </p>

            {/* Social Icons Right (Inline SVGs to prevent dependency clashes) */}
            <div className="flex items-center space-x-6">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/dhigrowth" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:scale-110 transition duration-300 text-white hover:text-white/80"
                title="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

          </div>
        </div>

        {/* Giant Watermark Text Background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-full text-center pointer-events-none select-none z-0">
          <span className="text-[10vw] font-black tracking-widest text-white/[0.07] font-bebas uppercase leading-none block">
            DHI GROWTH
          </span>
        </div>

      </div>

    </footer>
  );
}
