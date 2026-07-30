import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Check 
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="bg-slate-50 text-slate-600 pt-16 pb-8 border-t border-slate-200/80 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200/80">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-2.5">
              <img src="/logo.png" alt="DHI GROWTH Logo" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xs font-sans">
              India's Leading Digital Growth Partner helping businesses scale with cutting-edge web, app, AI, and marketing solutions.
            </p>
          </div>

          {/* Column 3: Services */}
          <div className="text-left">
            <h4 className="text-sm font-bebas font-bold uppercase tracking-wider text-slate-800 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li><a href="#services" className="hover:text-bright-blue transition">Website Development</a></li>
              <li><a href="#services" className="hover:text-bright-blue transition">Application Development</a></li>
              <li><a href="#services" className="hover:text-bright-blue transition">AI & Automation</a></li>
              <li><a href="#services" className="hover:text-bright-blue transition">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-bright-blue transition">SEO</a></li>
              <li><a href="#services" className="hover:text-bright-blue transition">Ads Shooting & Editing</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-3.5 text-left">
            <h4 className="text-sm font-bebas font-bold uppercase tracking-wider text-slate-800 mb-4">
              Contact Us
            </h4>
            <a 
              href="https://wa.me/919361088012" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 text-xs hover:text-bright-blue transition group font-sans text-slate-700"
              title="Chat on WhatsApp"
            >
              <Phone className="w-4 h-4 text-bright-blue shrink-0 group-hover:scale-110 transition" />
              <span className="hover:underline font-semibold">+91 93610 88012</span>
            </a>
            <a 
              href="mailto:dhinesh@dhigrowth.com?subject=Growth%20Consultation%20Inquiry%20-%20DhiGrowth&body=Hi%20Dhinesh%2C%0A%0AI%20visited%20DhiGrowth%20and%20would%20like%20to%20schedule%20a%20consultation%20to%20discuss%20growing%20my%20business%20online.%0A%0AHere%20are%20my%20details%3A%0A-%20Name%3A%20%0A-%20Company%20Name%3A%20%0A-%20Requirements%3A%20%0A%0ALooking%20forward%20to%20hearing%20from%20you%21" 
              className="flex items-center space-x-2.5 text-xs font-sans text-slate-700 hover:text-bright-blue transition group"
            >
              <Mail className="w-4 h-4 text-bright-blue shrink-0 group-hover:scale-110 transition" />
              <span className="hover:underline">dhinesh@dhigrowth.com</span>
            </a>
            <a 
              href="https://www.google.com/maps/place/Dhigrowth+Business+Pvt+Ltd/@11.0485934,77.0421634,19z/data=!3m1!4b1!4m6!3m5!1s0x3ba85700608f4393:0x7a612ef883b16359!8m2!3d11.0485934!4d77.0428071!16s%2Fg%2F11njtdfg3_?entry=tts&g_ep=EgoyMDI2MDcyNi4wIPu8ASoASAFQAw%3D%3D&skid=9788cfeb-797b-489b-bd6b-3131448a25a5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start space-x-2.5 text-xs hover:text-bright-blue transition group font-sans text-slate-700"
              title="Open location on Google Maps"
            >
              <MapPin className="w-4 h-4 text-bright-blue shrink-0 mt-0.5 group-hover:scale-110 transition" />
              <span className="hover:underline">Dhigrowth Business Pvt Ltd, Coimbatore</span>
            </a>

            {/* Social SVG Icons */}
            <div className="flex items-center space-x-3 pt-3">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/dhigrowth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-pink-600/10 text-pink-500 hover:bg-pink-600 hover:text-white flex items-center justify-center transition shadow-sm" 
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* Column 5: Newsletter */}
          <div className="text-left font-sans">
            <h4 className="text-sm font-bebas font-bold uppercase tracking-wider text-slate-800 mb-3">
              Newsletter
            </h4>
            <p className="text-xs text-slate-500 mb-3 leading-relaxed">
              Stay updated with the latest digital growth tips & updates.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center bg-white border border-slate-300 rounded-lg overflow-hidden p-1 focus-within:border-bright-blue transition">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="p-2 bg-brand-blue hover:bg-bright-blue text-white rounded-md transition shrink-0 cursor-pointer"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
              {subscribed && (
                <span className="text-[10px] text-green-600 font-semibold block">
                  Subscribed successfully!
                </span>
              )}
            </form>
          </div>

        </div>

        <div className="pt-6 text-center text-xs text-slate-500 font-sans border-t border-slate-200/40">
          <p>© {new Date().getFullYear()} DhiGrowth. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
