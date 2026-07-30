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
      id: "01",
      title: "Website Development",
      icon: <Code className="w-7 h-7 text-brand-blue" />,
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
      id: "02",
      title: "Application Development",
      icon: <Smartphone className="w-7 h-7 text-brand-blue" />,
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
      id: "03",
      title: "AI Development",
      icon: <BrainCircuit className="w-7 h-7 text-brand-blue" />,
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
      id: "04",
      title: "AI Automation",
      icon: <Bot className="w-7 h-7 text-brand-blue" />,
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
      id: "05",
      title: "WhatsApp Marketing",
      icon: <MessageSquare className="w-7 h-7 text-brand-blue" />,
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
      id: "06",
      title: "Business Automation",
      icon: <Cog className="w-7 h-7 text-brand-blue" />,
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
      id: "07",
      title: "Business Development",
      icon: <TrendingUp className="w-7 h-7 text-brand-blue" />,
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
      id: "08",
      title: "SEO",
      icon: <Search className="w-7 h-7 text-brand-blue" />,
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
      id: "09",
      title: "Digital Marketing",
      icon: <Megaphone className="w-7 h-7 text-brand-blue" />,
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
      title: "Social Media Marketing",
      icon: <Share2 className="w-7 h-7 text-brand-blue" />,
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
      title: "Meta & Google Ads",
      icon: <Target className="w-7 h-7 text-brand-blue" />,
      description: "Targeted paid advertising to maximise ROAS across Google and Meta platforms.",
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
      title: "Ads Shooting",
      icon: <Video className="w-7 h-7 text-brand-blue" />,
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
      title: "Video Editing",
      icon: <Film className="w-7 h-7 text-brand-blue" />,
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
    <section id="services" className="py-16 md:py-24 bg-slate-50 text-neutral-dark border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-14 max-w-3xl">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-bright-blue font-zen mb-2 block">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas font-bold text-black tracking-wide leading-tight">
            13 SOLUTIONS. 1 GOAL — YOUR <span className="text-bright-blue">GROWTH</span>.
          </h2>
          <p className="text-neutral-gray text-sm sm:text-base mt-2 font-normal">
            DhiGrowth provides a comprehensive suite of digital growth services to scale your business online. Click on any service card below to view detailed key features and deliverables.
          </p>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-bright-blue hover:-translate-y-1.5 transition duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                
                {/* Numeric Tag (Zen Dots) */}
                <div className="absolute top-4 right-4 text-xs font-zen text-light-blue opacity-50 group-hover:opacity-90 group-hover:text-bright-blue transition duration-300">
                  {service.id}
                </div>

                {/* Service Icon */}
                <div className="mb-6 flex items-center justify-center w-12 h-12 bg-light-blue/10 rounded-xl group-hover:bg-brand-blue transition duration-300">
                  {React.cloneElement(service.icon, {
                    className: "w-6 h-6 text-brand-blue group-hover:text-white transition duration-300 stroke-[2]"
                  })}
                </div>

                {/* Service Title (Bebas Neue) */}
                <h3 className="text-xl md:text-2xl font-bebas font-bold text-black tracking-wide mb-3 leading-snug uppercase">
                  {service.title}
                </h3>

                {/* Short Copy */}
                <p className="text-neutral-gray text-xs sm:text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              {/* View details action indicator */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-blue group-hover:text-bright-blue transition">
                  View Features
                </span>
                <span className="text-xs text-slate-300 group-hover:text-bright-blue group-hover:translate-x-1.5 transition duration-300">
                  →
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
