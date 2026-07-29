import React, { useState } from 'react';
import { Clock, Calendar, ArrowRight, X, User, Tag } from 'lucide-react';

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      category: "AI AUTOMATION",
      title: "How AI Automation Can Save 40+ Hours Weekly for Local Businesses",
      excerpt: "Discover how smart automated workflows, lead scraping, and WhatsApp API bots are transforming business operations in Coimbatore.",
      readTime: "5 min read",
      date: "July 24, 2026",
      author: "DhiGrowth Tech Team",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
      content: `
        <p class="mb-4">Automation is no longer a luxury exclusive to Fortune 500 companies. Small and medium enterprises (SMEs) across Coimbatore are leveraging artificial intelligence and automated workflows to cut operating costs and double their sales speed.</p>
        
        <h4 class="text-lg font-bold text-slate-900 mt-6 mb-2">1. Automated Lead Capture & Instant WhatsApp Response</h4>
        <p class="mb-4">When a customer inquires on your website or Meta Ad, waiting even 15 minutes drops conversion rates by 80%. With DhiGrowth's custom WhatsApp API bots, leads are greeted instantly 24/7, qualified with dynamic questions, and booked straight onto your sales calendar.</p>

        <h4 class="text-lg font-bold text-slate-900 mt-6 mb-2">2. Workflow Automation via n8n & Make</h4>
        <p class="mb-4">Instead of manually copying invoice data into Excel or CRM spreadsheets, AI document parsers extract data instantly and update your accounting system automatically—eliminating human errors.</p>

        <h4 class="text-lg font-bold text-slate-900 mt-6 mb-2">3. Predictive Customer Insights</h4>
        <p class="mb-4">AI algorithms analyze past purchase trends to send personalized re-engagement offers to existing clients when they are most likely to reorder.</p>
      `
    },
    {
      id: 2,
      category: "SEO & MARKETING",
      title: "Top 7 SEO Strategies to Rank #1 on Google in Coimbatore in 2026",
      excerpt: "Learn local SEO techniques, Google Business Profile optimizations, and high-intent keyword targeting to dominate search results.",
      readTime: "7 min read",
      date: "July 18, 2026",
      author: "DhiGrowth SEO Team",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
      content: `
        <p class="mb-4">Ranking on the first page of Google in your local target market generates sustainable, high-converting organic traffic without paying for every single click.</p>
        
        <h4 class="text-lg font-bold text-slate-900 mt-6 mb-2">1. Optimize Google Business Profile (GBP)</h4>
        <p class="mb-4">Ensure your business NAP (Name, Address, Phone) is identical across all online directories. Regularly publish geotagged photos of your work and encourage satisfied clients to leave keyword-rich reviews.</p>

        <h4 class="text-lg font-bold text-slate-900 mt-6 mb-2">2. High-Intent Commercial Keyword Targeting</h4>
        <p class="mb-4">Instead of generic terms, target long-tail transactional phrases such as <em>"best web development agency in Coimbatore"</em> or <em>"AI automation services near me"</em>.</p>

        <h4 class="text-lg font-bold text-slate-900 mt-6 mb-2">3. Core Web Vitals & Mobile-First Performance</h4>
        <p class="mb-4">Google prioritizes lightning-fast sites built on modern React architectures that load in under 1.5 seconds on mobile devices.</p>
      `
    },
    {
      id: 3,
      category: "APP DEVELOPMENT",
      title: "React Native vs Flutter: Choosing the Right Mobile App Stack",
      excerpt: "A detailed technical breakdown of cross-platform app performance, development speed, and cost efficiency for growing startups.",
      readTime: "6 min read",
      date: "July 10, 2026",
      author: "DhiGrowth Mobile Lead",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80",
      content: `
        <p class="mb-4">Building separate iOS and Android native apps can quickly double your budget and launch timeline. Cross-platform frameworks deliver near-native 60fps performance at a fraction of the cost.</p>
        
        <h4 class="text-lg font-bold text-slate-900 mt-6 mb-2">Why Choose React Native?</h4>
        <p class="mb-4">If your team already uses JavaScript/React, React Native offers massive code reuse, hot reloading, and access to a vast npm package ecosystem.</p>

        <h4 class="text-lg font-bold text-slate-900 mt-6 mb-2">Why Choose Flutter?</h4>
        <p class="mb-4">Flutter compiles directly to native ARM code using Dart, making it ideal for UI-heavy applications requiring pixel-perfect custom animations.</p>
      `
    }
  ];

  return (
    <section id="blog" className="py-16 md:py-24 bg-white text-slate-900 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-14 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
            LATEST INSIGHTS & ARTICLES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            DIGITAL GROWTH & TECH <span className="text-blue-600">BLOG</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Expert articles on AI automation, web development, SEO strategies, and digital marketing tailored for business leaders in Coimbatore & beyond.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedArticle(item)}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-blue-500 hover:-translate-y-1.5 transition duration-300 overflow-hidden cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Article Image Banner */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-slate-400 mb-3 font-medium">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      <span>{item.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-blue-500" />
                      <span>{item.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition leading-snug mb-3 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 font-normal mb-4">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100/80">
                <span className="text-xs font-semibold text-slate-500 flex items-center space-x-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.author}</span>
                </span>

                <span className="text-xs font-bold text-blue-600 group-hover:translate-x-1 transition flex items-center space-x-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Blog Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto border border-slate-100">
            
            {/* Modal Header Image Banner */}
            <div className="relative h-56 sm:h-64 bg-slate-900">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 backdrop-blur-md transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-blue-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider mb-2 inline-block">
                  {selectedArticle.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold leading-tight">
                  {selectedArticle.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center space-x-4 text-xs text-slate-500 mb-6 border-b border-slate-100 pb-4">
                <span className="font-semibold text-slate-900 flex items-center space-x-1">
                  <User className="w-3.5 h-3.5 text-blue-600" />
                  <span>{selectedArticle.author}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{selectedArticle.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{selectedArticle.readTime}</span>
                </span>
              </div>

              <div 
                className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed font-normal"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              ></div>

              {/* CTA Inside Article */}
              <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-xl text-center">
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  Want to implement this for your business?
                </h4>
                <p className="text-xs text-slate-600 mb-4">
                  Talk with DhiGrowth experts in Coimbatore today for a free custom audit.
                </p>
                <a
                  href="https://wa.me/919361088012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wide rounded-lg shadow-md transition"
                >
                  Chat on WhatsApp
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
