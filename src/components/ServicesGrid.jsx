import React from 'react';
import { 
  Code, 
  Smartphone, 
  BrainCircuit, 
  Bot, 
  MessageSquare, 
  Cog, 
  TrendingUp, 
  Search, 
  Megaphone, 
  Share2, 
  Target, 
  Video, 
  Film 
} from 'lucide-react';

export default function ServicesGrid({ onSelectService }) {
  const services = [
    {
      id: "1",
      title: "1. WEBSITE DEVELOPMENT",
      shortTitle: "Website Development",
      icon: <Code className="w-7 h-7 text-blue-600" />,
      description: "Custom, responsive, SEO-ready websites built for speed and conversions.",
      features: [
        "React & Vite / Next.js High Performance Architecture",
        "Responsive Mobile-First UI/UX Design",
        "SEO Meta Optimization & Ultra-Fast Load Speeds",
        "CMS Integration (Headless CMS / WordPress)",
        "E-commerce Payment Gateway Integration"
      ]
    },
    {
      id: "2",
      title: "2. APPLICATION DEVELOPMENT",
      shortTitle: "Application Development",
      icon: <Smartphone className="w-7 h-7 text-blue-600" />,
      description: "iOS, Android & cross-platform apps designed for seamless user experiences.",
      features: [
        "Flutter & React Native Cross-Platform Apps",
        "Native Android (Kotlin) & iOS (Swift) Apps",
        "Secure REST API & Backend Architecture",
        "App Store & Google Play Publishing",
        "Push Notifications & Offline Support"
      ]
    },
    {
      id: "3",
      title: "3. AI DEVELOPMENT",
      shortTitle: "AI Development",
      icon: <BrainCircuit className="w-7 h-7 text-blue-600" />,
      description: "Smart AI products — chatbots, recommendation engines & custom ML models.",
      features: [
        "Custom LLM & GPT Agents Integration",
        "Automated Customer Support Chatbots",
        "Predictive Analytics & Recommendation Engines",
        "Computer Vision & NLP Solutions",
        "Tailored Machine Learning Pipelines"
      ]
    },
    {
      id: "4",
      title: "4. AI AUTOMATION",
      shortTitle: "AI Automation",
      icon: <Bot className="w-7 h-7 text-blue-600" />,
      description: "Automate repetitive tasks and workflows using intelligent AI solutions.",
      features: [
        "Zapier / Make / n8n Workflow Automation",
        "AI Email & Document Processing",
        "Lead Scraping & Enrichment Automation",
        "CRM & Data Sync Automation",
        "Automated Reporting Dashboards"
      ]
    },
    {
      id: "5",
      title: "5. WHATSAPP MARKETING",
      shortTitle: "WhatsApp Marketing",
      icon: <MessageSquare className="w-7 h-7 text-blue-600" />,
      description: "High-engagement campaigns via WhatsApp Business API to drive sales.",
      features: [
        "WhatsApp Official Business API Setup & Green Tick",
        "Automated Drip Broadcasts & Catalog Marketing",
        "Interactive Chatbot Lead Capture",
        "Abandoned Cart Recovery on WhatsApp",
        "High Open Rate Broadcast Campaigns"
      ]
    },
    {
      id: "6",
      title: "6. BUSINESS AUTOMATION",
      shortTitle: "Business Automation",
      icon: <Cog className="w-7 h-7 text-blue-600" />,
      description: "Streamline operations, reduce costs & boost efficiency with smart automation.",
      features: [
        "Custom ERP & CRM System Setup",
        "Inventory & Order Automation",
        "Billing & Invoicing Workflow Automation",
        "HR & Payroll Process Automation",
        "Operational Bottleneck Audits"
      ]
    },
    {
      id: "7",
      title: "7. BUSINESS DEVELOPMENT",
      shortTitle: "Business Development",
      icon: <TrendingUp className="w-7 h-7 text-blue-600" />,
      description: "Strategic consulting and execution to expand your market presence.",
      features: [
        "Go-To-Market (GTM) Strategy for Coimbatore & Beyond",
        "Competitor Market Intelligence & Audits",
        "B2B Lead Generation Strategy",
        "Franchise & Partner Scaling Framework",
        "Revenue Growth Consulting"
      ]
    },
    {
      id: "8",
      title: "8. SEO",
      shortTitle: "SEO",
      icon: <Search className="w-7 h-7 text-blue-600" />,
      description: "Rank higher on Google with technical SEO, content strategy & link building.",
      features: [
        "Technical SEO & Speed Optimization",
        "Local SEO & Google Business Profile Ranking",
        "High-Intent Keyword Strategy & Content",
        "High-DA Backlink Acquisition",
        "Monthly Ranking & Traffic Audit Reports"
      ]
    },
    {
      id: "9",
      title: "9. DIGITAL MARKETING",
      shortTitle: "Digital Marketing",
      icon: <Megaphone className="w-7 h-7 text-blue-600" />,
      description: "Full-funnel digital campaigns that attract, engage and convert customers.",
      features: [
        "Full-Funnel Campaign Architecture",
        "Customer Acquisition Cost (CAC) Optimization",
        "Retargeting & Remarketing Strategy",
        "Landing Page Conversion Rate Optimization (CRO)",
        "Omnichannel Brand Presence"
      ]
    },
    {
      id: "10",
      title: "10. SOCIAL MEDIA MARKETING",
      shortTitle: "Social Media Marketing",
      icon: <Share2 className="w-7 h-7 text-blue-600" />,
      description: "Build your brand and community across Instagram, Facebook & LinkedIn.",
      features: [
        "Custom Content Calendar & Graphic Design",
        "Instagram Reels & Viral Short Content Strategy",
        "Community Management & Active Engagement",
        "Influencer Outreach in Coimbatore Region",
        "Brand Identity & Aesthetic Alignment"
      ]
    },
    {
      id: "11",
      title: "11. META & GOOGLE ADS",
      shortTitle: "Meta & Google Ads",
      icon: <Target className="w-7 h-7 text-blue-600" />,
      description: "Targeted paid advertising to maximize ROAS across Google and Meta platforms.",
      features: [
        "Google Search, Performance Max & YouTube Ads",
        "Meta (Facebook & Instagram) High-Conversion Lead Ads",
        "Pixel & Conversion API Integration",
        "A/B Creative & Copy Testing",
        "ROAS Scaling & Daily Budget Optimization"
      ]
    },
    {
      id: "12",
      title: "12. ADS SHOOTING",
      shortTitle: "Ads Shooting",
      icon: <Video className="w-7 h-7 text-blue-600" />,
      description: "Professional ad film production — creative concepts to camera-ready content.",
      features: [
        "On-Location 4K Video Production",
        "Creative Scriptwriting & Storyboarding",
        "Professional Lighting, Audio & Cinema Gear",
        "Commercial & Corporate Brand Films",
        "Product Photography & Showcase Shoots"
      ]
    },
    {
      id: "13",
      title: "13. VIDEO EDITING",
      shortTitle: "Video Editing",
      icon: <Film className="w-7 h-7 text-blue-600" />,
      description: "High-quality video editing for reels, ads, brand videos & social content.",
      features: [
        "Instagram Reels & Shorts Fast-Paced Editing",
        "Color Grading, Sound Design & Motion FX",
        "Captions, Text Animations & Visual Hooks",
        "YouTube Long-Form Video Post-Production",
        "Ad Campaign Video Variations"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 text-slate-900 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-12 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            13 SOLUTIONS. 1 GOAL — YOUR <span className="text-blue-600">GROWTH.</span>
          </h2>
        </div>

        {/* Top Row: 7 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-4">
          {services.slice(0, 7).map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-500 hover:-translate-y-1 transition duration-300 cursor-pointer flex flex-col items-center text-center group"
            >
              <div className="mb-4 flex items-center justify-center h-12">
                {React.cloneElement(service.icon, {
                  className: "w-10 h-10 text-blue-600 group-hover:scale-110 transition duration-300 stroke-[1.75]"
                })}
              </div>

              <h3 className="text-xs font-extrabold text-slate-900 tracking-wide uppercase mb-2 line-clamp-2 h-8 flex items-center justify-center">
                {service.title}
              </h3>

              <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row: 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.slice(7, 13).map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-500 hover:-translate-y-1 transition duration-300 cursor-pointer flex flex-col items-center text-center group"
            >
              <div className="mb-4 flex items-center justify-center h-12">
                {React.cloneElement(service.icon, {
                  className: "w-10 h-10 text-blue-600 group-hover:scale-110 transition duration-300 stroke-[1.75]"
                })}
              </div>

              <h3 className="text-xs font-extrabold text-slate-900 tracking-wide uppercase mb-2 line-clamp-2 h-8 flex items-center justify-center">
                {service.title}
              </h3>

              <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
