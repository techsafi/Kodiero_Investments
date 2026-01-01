
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageSquare, X, Send, Bot, Sparkles, Power } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

const GeminiAssistant: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Hello! I am your Kodiero Assistant. How can I help you find the perfect business space in Kondele today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Periodic nudge logic
  useEffect(() => {
    if (!isVisible || isOpen) {
      setShowHint(false);
      return;
    }

    const hints = [
      "Looking for office space?",
      "Ask about availability!",
      "Need a site visit?",
      "I can help with pricing!"
    ];
    
    const interval = setInterval(() => {
      if (!isOpen && isVisible) {
        setShowHint(true);
        setTimeout(() => setShowHint(false), 6000); // Show for 6 seconds
      }
    }, 20000); // Every 20 seconds

    return () => clearInterval(interval);
  }, [isOpen, isVisible]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : undefined;

    if (!apiKey) {
      setMessages(prev => [...prev, { role: 'bot', text: "Service temporarily unavailable. Please call us at " + CONTACT_INFO.phone }]);
      return;
    }

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: apiKey as string });
      const prompt = `
        You are a helpful and professional assistant for Kodiero Investments (Kodiero Business Center) in Kondele, Kisumu.
        Context:
        - Location: Kondele along Kibos Road, Kisumu, Kenya.
        - Amenities: CCTV, 24/7 Security, Backup Generator, Underground Water Reserves, Fire Alarms, Ample Parking.
        - Strategic Advantages: High foot traffic, easy signage placement, transport connection point.
        - Space Types: Offices (Corporate, Consultancies, NGOs), Retail (Clinics, Salons, Fashion outlets).
        - Contact: Phone: ${CONTACT_INFO.phone}, Email: ${CONTACT_INFO.email}, WhatsApp: ${CONTACT_INFO.whatsapp}.
        
        Rules:
        - Be professional, welcoming, and concise.
        - Use the phone number ${CONTACT_INFO.phone} for all inquiries.
        - Encourage visitors to book a site visit.
        - Do NOT use Markdown formatting (no asterisks).
        - Use plain text and double line breaks.
        - User Query: ${userMsg}
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt
      });

      let rawText = response.text || "I'm sorry, I couldn't process that. Please contact our office directly at " + CONTACT_INFO.phone;
      const cleanText = rawText.replace(/\*/g, '').trim();

      setMessages(prev => [...prev, { role: 'bot', text: cleanText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "Technical difficulties. Please call us at " + CONTACT_INFO.phone }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen ? (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="bg-white rounded-3xl shadow-2xl w-[320px] sm:w-[400px] flex flex-col overflow-hidden border border-gray-100 h-[550px]"
          >
            <div className="bg-slate-900 p-5 text-white flex justify-between items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px] rounded-full" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="bg-amber-500 p-2 rounded-xl shadow-lg shadow-amber-500/20">
                  <Bot size={22} />
                </div>
                <div>
                  <span className="font-bold text-sm block">Kodiero Assistant</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Online Now</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 relative z-20">
                <button 
                  title="Dismiss AI Assistant"
                  onClick={() => {
                    setIsOpen(false);
                    setIsVisible(false);
                  }}
                  className="bg-red-500/20 hover:bg-red-500/40 p-2 rounded-xl transition-colors text-red-200"
                >
                  <Power size={18} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-5 bg-slate-50">
              {messages.map((m, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] shadow-sm leading-relaxed ${
                    m.role === 'user' 
                    ? 'bg-amber-500 text-white rounded-br-none' 
                    : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
                  }`}>
                    <p className="whitespace-pre-wrap">{m.text}</p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm">
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce delay-75"></div>
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce delay-150"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-5 bg-white border-t border-gray-100 flex gap-3">
              <input 
                type="text" 
                placeholder="Ask about availability..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                className="bg-slate-900 text-white p-3.5 rounded-2xl hover:bg-slate-800 transition-colors shadow-xl active:scale-95"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="relative group/trigger">
            {/* Dismiss Button on Trigger */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsVisible(false);
              }}
              className="absolute -top-2 -left-2 bg-slate-900 text-white p-1 rounded-full shadow-lg opacity-0 group-hover/trigger:opacity-100 transition-opacity z-20 border border-white/20 hover:bg-red-500"
              title="Close AI Assistant"
            >
              <X size={12} />
            </button>

            {/* Nudge Bubble */}
            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  className="absolute bottom-full right-0 mb-4 bg-white px-5 py-3 rounded-2xl shadow-2xl border border-gray-100 whitespace-nowrap"
                >
                  <p className="text-xs font-bold text-slate-800 flex items-center gap-2">
                    <Sparkles size={14} className="text-amber-500" />
                    Need help with spaces?
                  </p>
                  <div className="absolute top-full right-6 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45 -mt-1.5" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Button */}
            <motion.button 
              initial={{ scale: 0, rotate: -20 }}
              animate={{ 
                scale: 1, 
                rotate: 0,
                y: [0, -10, 0] // Floating oscillation
              }}
              transition={{
                scale: { type: 'spring', damping: 15 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="bg-amber-500 text-white p-5 rounded-full shadow-2xl hover:bg-amber-600 relative group overflow-hidden"
            >
              {/* Pulse Ring */}
              <span className="absolute inset-0 rounded-full bg-amber-500/40 animate-ping" />
              
              <div className="relative flex items-center gap-3">
                <MessageSquare size={26} className="relative z-10" />
                <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-bold text-sm">
                  Inquire Now
                </span>
              </div>
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GeminiAssistant;
