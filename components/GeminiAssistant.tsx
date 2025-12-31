
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { AMENITIES, SPACES, CONTACT_INFO } from '../constants';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Hello! I am your Kodiero Assistant. How can I help you find the perfect business space in Kondele today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `
        You are a helpful and professional assistant for Kodiero Investments (Kodiero Business Center) in Kondele, Kisumu.
        Context:
        - Location: Kondele, Kisumu, Kenya.
        - Amenities: ${AMENITIES.map(a => a.title).join(', ')}.
        - Spaces: Shops, Modern Offices, and Storage units.
        - Contact: Phone: ${CONTACT_INFO.phone}, Email: ${CONTACT_INFO.email}, WhatsApp: ${CONTACT_INFO.whatsapp}.
        
        Rules:
        - Be professional, welcoming, and concise.
        - Encourage visitors to book a viewing or call.
        - If you don't know an answer, direct them to contact management via phone.
        - User Query: ${userMsg}
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || "I'm sorry, I couldn't process that. Please contact our office directly." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "Technical difficulties. Please call us at " + CONTACT_INFO.phone }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col overflow-hidden border border-gray-100 h-[500px]">
          <div className="bg-amber-500 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Bot size={20} />
              </div>
              <span className="font-bold">Kodiero AI Support</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-amber-600 p-1 rounded transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                  ? 'bg-amber-500 text-white rounded-br-none shadow-md' 
                  : 'bg-white text-gray-800 rounded-bl-none border border-gray-100 shadow-sm'
                }`}>
                  <p className="leading-relaxed whitespace-pre-wrap">{m.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              placeholder="Ask anything..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              className="bg-amber-500 text-white p-2 rounded-xl hover:bg-amber-600 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-amber-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-bold">Inquire AI</span>
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default GeminiAssistant;
