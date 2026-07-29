import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MessageSquare, PhoneCall, Check } from 'lucide-react';

export default function AiChatbot({ onOpenConsultation }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! 👋 I'm DhiGrowth's AI Assistant. How can I help accelerate your business growth in Coimbatore today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickQuestions = [
    "🌐 Website Development",
    "🤖 AI & Workflow Automation",
    "📱 Mobile App Development",
    "📈 SEO & Google/Meta Ads",
    "📞 Talk to Consultant"
  ];

  const getBotReply = (userText) => {
    const text = userText.toLowerCase();
    
    if (text.includes('website') || text.includes('web')) {
      return "We build ultra-fast, responsive React & Next.js websites tailored for high conversion rates and top Google speed scores! Would you like a free website audit for your business?";
    } else if (text.includes('ai') || text.includes('automation') || text.includes('bot')) {
      return "Our AI automation solutions build custom WhatsApp bots, Make/n8n workflows, document parsers, and lead scrapers that save local businesses 40+ hours every week!";
    } else if (text.includes('app') || text.includes('mobile')) {
      return "We develop high-performance cross-platform iOS and Android apps using Flutter and React Native, complete with push notifications, payment gateways, and cloud backends.";
    } else if (text.includes('seo') || text.includes('ads') || text.includes('marketing')) {
      return "Our digital marketing team specializes in local Coimbatore SEO, Google Performance Max ads, Meta high-ROAS campaigns, and viral video ad shooting.";
    } else if (text.includes('talk') || text.includes('consult') || text.includes('contact') || text.includes('book')) {
      return "Awesome! You can click the button below to book a free 1-on-1 strategy call with our senior consultants or chat live on WhatsApp!";
    } else {
      return "DhiGrowth is Coimbatore's premier digital growth partner. We offer end-to-end Website & App Development, AI Automation, SEO, and Paid Marketing. Let us know what service you are looking for!";
    }
  };

  const handleSend = (textToSend) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMessages = [...messages, { sender: 'user', text: query, time }];
    setMessages(newMessages);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = getBotReply(query);
      setMessages([...newMessages, { sender: 'bot', text: reply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Bot Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group flex items-center space-x-2.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3.5 rounded-full shadow-2xl hover:scale-105 transition duration-300 border-2 border-white/20 animate-pulse-glow"
        >
          <div className="relative">
            <Bot className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-blue-600 animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-blue-600"></span>
          </div>
          <span className="text-xs font-black tracking-wide uppercase pr-1 hidden sm:inline">
            AI Assistant
          </span>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[520px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-fadeIn">
          
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold flex items-center space-x-1.5">
                  <span>DhiGrowth AI</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-current" />
                </h4>
                <span className="text-[10px] text-emerald-300 font-semibold flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  <span>Online • Instant Answers</span>
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/60">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-xs leading-relaxed font-medium shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-slate-400 mt-1 px-1">{msg.time}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-1.5 bg-white border border-slate-200/80 px-3.5 py-2 rounded-2xl rounded-tl-none w-16">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          <div className="p-2.5 bg-white border-t border-slate-100 flex items-center space-x-1.5 overflow-x-auto no-scrollbar scrollbar-none">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="whitespace-nowrap text-[10px] font-bold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white px-3 py-1.5 rounded-full transition duration-300 border border-blue-100 shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input & Actions */}
          <div className="p-3 bg-white border-t border-slate-200/80">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask DhiGrowth AI..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
              />
              <button
                type="submit"
                className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition shrink-0 shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
              <a
                href="https://wa.me/919361088012"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 font-bold hover:underline flex items-center space-x-1"
              >
                <span>WhatsApp Live Chat</span>
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenConsultation();
                }}
                className="text-blue-600 font-bold hover:underline"
              >
                Book Consultation
              </button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
