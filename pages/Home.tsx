
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, MapPin, TrendingUp, Users, Play, Quote, Star, ChevronLeft, ChevronRight, Building2, Briefcase, Store } from 'lucide-react';
import Hero from '../components/Hero';
import { AMENITIES, SPACES, getIcon } from '../constants';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const TESTIMONIALS = [
  { name: "S. Omondi", role: "CEO, TechLoom", text: "Moving to Kodiero was the best decision for our startup. The constant power and high-speed fiber have been game-changers." },
  { name: "Samuel Kamau", role: "Retailer", text: "The ground floor shops have incredible visibility. Our foot traffic doubled within three months of relocating here." },
  { name: "Jane Anyango", role: "Architect", text: "Secure, professional, and excellently managed. It's the perfect environment for client meetings and focus work." },
];

const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pb-10 md:pb-20">
      <Hero />

      {/* Trust Statement / Sub-Hero */}
      <section className="py-12 md:py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-xl md:text-4xl font-serif mb-6 leading-relaxed italic text-gray-300">
              "The latest addition to Kisumu City’s growing commercial landscape, Kodiero Business Center is designed to meet the demands of today’s businesses — combining modern infrastructure, reliable utilities, and convenience under one roof."
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-10 md:mb-20"
          >
            <h2 className="text-2xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 font-serif tracking-tight leading-tight">
              A Foundation for <span className="text-amber-500 text-6xl">Success.</span>
            </h2>
            <p className="text-sm md:text-xl text-gray-500 leading-relaxed">
              We understand that a business location is more than just a building — it is the cornerstone of your brand's growth in the heart of Kisumu.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
            {[
              { 
                icon: <MapPin className="text-amber-500" size={24} />, 
                title: "Strategic Location", 
                desc: "Kondele is a major transport nexus linking Kibos Road to key city routes." 
              },
              { 
                icon: <TrendingUp className="text-amber-500" size={24} />, 
                title: "High Potential", 
                desc: "Experience rapid transformation with high foot and vehicle traffic daily." 
              },
              { 
                icon: <Users className="text-amber-500" size={24} />, 
                title: "Long-term Value", 
                desc: "Operating here places your business in a high-growth prospect zone." 
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-slate-50 p-6 md:p-12 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="mb-4 md:mb-8 bg-white p-3 md:p-5 rounded-2xl shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-sm md:text-2xl font-bold mb-2 md:mb-4 text-slate-800">{item.title}</h3>
                <p className="text-[10px] md:text-base text-gray-600 leading-tight">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Consider Section */}
      <section className="py-12 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-5xl font-bold text-slate-900 font-serif">Who Should Consider Us?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <TrendingUp />, label: "Startups & Growing SMEs", desc: "Scale your business in a credible environment designed for expansion." },
              { icon: <Briefcase />, label: "Professionals & Firms", desc: "Perfect for law firms, consultancies, IT hubs, and corporate offices." },
              { icon: <Store />, label: "Retailers & Entrepreneurs", desc: "Gain visibility with strategic frontage and high walk-in traffic." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:translate-y-[-5px] transition-all">
                <div className="text-amber-500 mb-4">{item.icon}</div>
                <h4 className="font-bold text-lg mb-2">{item.label}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Units */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-5xl font-bold text-slate-900 font-serif">Flexible Spaces</h2>
              <p className="text-gray-500 text-sm mt-2">Whether consulting or retailing, we have the right unit for you.</p>
            </div>
            <Link to="/spaces" className="text-amber-600 font-bold text-xs md:text-base flex items-center gap-2 hover:translate-x-1 transition-transform">
              Explore All Units <TrendingUp size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
            {SPACES.map((space) => (
              <motion.div
                key={space.id}
                className="bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row group hover:shadow-xl transition-all"
              >
                <div className="relative h-48 md:h-auto md:w-2/5 overflow-hidden">
                  <img src={space.image} alt={space.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 md:p-10 flex-1 flex flex-col justify-center">
                  <span className="text-amber-600 text-[10px] font-bold uppercase tracking-widest mb-2">{space.type}</span>
                  <h3 className="text-lg md:text-3xl font-bold mb-4 text-slate-800 font-serif">{space.title}</h3>
                  <div className="space-y-2 mb-6">
                    {space.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                        <CheckCircle2 size={14} className="text-emerald-500" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact" 
                    className="mt-auto inline-block text-center py-3 px-8 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-amber-500 transition-colors"
                  >
                    Inquire Availability
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto bg-amber-500 rounded-[3rem] md:rounded-[4rem] py-16 md:py-32 px-6 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-6xl font-bold text-white mb-6 md:mb-10 font-serif leading-tight">Your Business. Your Address.<br/>Your Growth.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-white text-amber-600 px-10 py-5 rounded-2xl font-extrabold text-lg shadow-lg hover:-translate-y-1 transition-all">Book Site Visit</Link>
              <Link to="/about" className="bg-amber-700/30 text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/20 backdrop-blur-sm hover:bg-amber-700/50 transition-all">The Location Advantage</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
