
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

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pb-10 md:pb-20">
      <Hero />

      {/* Sub-Hero / Trust Statement */}
      <section className="py-12 md:py-24 bg-slate-900 text-white overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-xl md:text-5xl font-serif mb-8 leading-tight italic text-gray-200">
              "Combining modern infrastructure, reliable utilities, and strategic convenience under one roof to meet the demands of today’s Kisumu businesses."
            </h2>
            <div className="flex justify-center items-center gap-4 text-amber-500 font-bold tracking-widest uppercase text-xs">
              <span className="w-12 h-px bg-amber-500/30"></span>
              Kodiero Investments Vision
              <span className="w-12 h-px bg-amber-500/30"></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-6xl font-extrabold text-slate-900 mb-6 font-serif tracking-tight leading-tight">
              A Foundation for <span className="text-amber-500 italic">Success.</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed">
              Whether you are starting, expanding, or relocating, Kodiero Business Center offers a secure and professional environment along the busy Kibos Road corridor—Kisumu’s fastest-growing commercial hub.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {[
              { 
                icon: <MapPin className="text-amber-500" size={32} />, 
                title: "Location Advantage", 
                desc: "Kondele is a major transport connection point within Kisumu, linking Kibos Road to key city routes." 
              },
              { 
                icon: <TrendingUp className="text-amber-500" size={32} />, 
                title: "High Demand Area", 
                desc: "Benefit from high foot and vehicle traffic with day-and-night economic activity at your doorstep." 
              },
              { 
                icon: <Users className="text-amber-500" size={32} />, 
                title: "Business Growth", 
                desc: "Join a vibrant community of startups, retailers, and established corporate firms." 
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-slate-50 p-8 md:p-14 rounded-[3rem] border border-gray-100 shadow-sm flex flex-col items-center text-center md:items-start md:text-left transition-all"
              >
                <div className="mb-6 md:mb-10 bg-white p-4 md:p-6 rounded-[2rem] shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-800">{item.title}</h3>
                <p className="text-sm md:text-lg text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Units - Enhanced Copy */}
      <section className="py-12 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-6xl font-bold text-slate-900 font-serif">Flexible Spaces</h2>
              <p className="text-gray-600 text-sm md:text-lg mt-4">
                From corporate offices to high-traffic retail storefronts, we provide the infrastructure needed to support your specific business model.
              </p>
            </div>
            <Link to="/spaces" className="bg-white text-amber-600 px-8 py-4 rounded-2xl font-bold shadow-sm flex items-center gap-3 hover:bg-amber-50 transition-colors">
              View All Spaces <TrendingUp size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            {SPACES.map((space) => (
              <motion.div
                key={space.id}
                // Fixed: Changed 'shadow' to 'boxShadow' as 'shadow' is not a valid framer-motion property
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }}
                className="bg-white rounded-[3rem] overflow-hidden border border-gray-100 flex flex-col md:flex-row group transition-all"
              >
                <div className="relative h-64 md:h-auto md:w-5/12 overflow-hidden">
                  <img src={space.image} alt={space.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1 rounded-full bg-white/90 backdrop-blur-md text-amber-600 text-[10px] font-bold uppercase tracking-widest shadow-sm">
                      {space.type}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-4xl font-bold mb-6 text-slate-800 font-serif leading-tight">{space.title}</h3>
                  <div className="space-y-3 mb-8">
                    {space.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm md:text-base text-gray-600 font-medium">
                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact" 
                    className="mt-auto inline-block text-center py-4 px-10 bg-slate-900 text-white rounded-2xl font-bold text-sm md:text-base hover:bg-amber-500 transition-colors shadow-lg"
                  >
                    Check Availability
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Primary Call to Action */}
      <section className="px-4 py-12 md:py-24">
        <div className="max-w-7xl mx-auto bg-amber-500 rounded-[3rem] md:rounded-[5rem] py-20 md:py-40 px-6 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-7xl font-bold text-white mb-8 md:mb-14 font-serif leading-tight">
              Ready to Secure Your Space?<br/>
              <span className="text-amber-100 opacity-90 italic">Make Kodiero Your Official Address.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8">
              <Link to="/contact" className="bg-white text-amber-600 px-12 py-6 rounded-[2rem] font-extrabold text-xl shadow-xl hover:-translate-y-1 active:scale-95 transition-all">Book Site Visit</Link>
              <Link to="/about" className="bg-amber-700/30 text-white px-12 py-6 rounded-[2rem] font-bold text-xl border border-white/30 backdrop-blur-md hover:bg-amber-700/50 transition-all">Why Kondele?</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
