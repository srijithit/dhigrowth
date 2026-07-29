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
    <footer id="contact" className="bg-[#090E17] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <img src="/logo.svg" alt="DHI GROWTH Logo" className="w-9 h-9 object-contain" />
              <h3 className="text-2xl font-black text-white tracking-tight">
                DHI <span className="text-blue-500">GROWTH</span>
              </h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Digital Growth Partner for Businesses in Coimbatore & Beyond.
            </p>
            <p className="text-[11px] text-slate-500 pt-4">
              © {new Date().getFullYear()} DhiGrowth. All Rights Reserved.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#work" className="hover:text-blue-400 transition">Our Work</a></li>
              <li><a href="#blog" className="hover:text-blue-400 transition">Blog</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-blue-400 transition">Web Development</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">AI Automation</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">SEO</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Ad Services</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact Us
            </h4>
            <a 
              href="https://wa.me/919361088012" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 text-xs hover:text-blue-400 transition group"
              title="Chat on WhatsApp"
            >
              <Phone className="w-4 h-4 text-blue-500 shrink-0 group-hover:scale-110 transition" />
              <span className="hover:underline font-semibold">+91 93610 88012</span>
            </a>
            <div className="flex items-center space-x-2.5 text-xs">
              <Mail className="w-4 h-4 text-blue-500 shrink-0" />
              <span>hello@dhigrowth.com</span>
            </div>
            <a 
              href="https://maps.app.goo.gl/HzZJtDb9aR68rFAaA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start space-x-2.5 text-xs hover:text-blue-400 transition group"
              title="Open location on Google Maps"
            >
              <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5 group-hover:scale-110 transition" />
              <span className="hover:underline">Coimbatore, Tamil Nadu, India</span>
            </a>

            {/* Social SVG Icons */}
            <div className="flex items-center space-x-3 pt-3">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/dhigrowth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-pink-600/20 text-pink-400 hover:bg-pink-600 hover:text-white flex items-center justify-center transition shadow-sm" 
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/dhigrowth/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white flex items-center justify-center transition shadow-sm" 
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 5: Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Newsletter
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Stay updated with the latest digital growth tips & updates.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center bg-[#0E1626] border border-slate-700 rounded-lg overflow-hidden p-1 focus-within:border-blue-500 transition">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition shrink-0"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
              {subscribed && (
                <span className="text-[10px] text-green-400 font-semibold block">
                  Subscribed successfully!
                </span>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© 2025 DhiGrowth. All Rights Reserved.</p>
          <div className="flex items-center space-x-6 mt-3 sm:mt-0">
            <a href="#" className="hover:text-slate-300 transition">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-300 transition">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
