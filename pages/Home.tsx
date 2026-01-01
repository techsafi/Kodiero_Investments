
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, TrendingUp, Users, ArrowRight, Building2, Briefcase, Zap, ShieldCheck, Droplets } from 'lucide-react';
import Hero from '../components/Hero';
import SectionDivider from '../components/SectionDivider';
import { SPACES } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="pb-10 bg-[#FDFCF0]">
      <Hero />

      {/* Sub-Hero - Shrunk desktop style */}
      <section className="py-12 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-lg md:text-5xl font-serif mb-6 leading-relaxed italic text-gray-300 px-4">
              "A synergy of modern infrastructure and strategic convenience, designed to elevate Kisumu's professional landscape."
            </h2>
            <div className="flex justify-center items-center gap-3 text-amber-500 font-bold tracking-[0.2em] uppercase text-[8px] md:text-xs">
              <span className="w-8 h-px bg-amber-500/30"></span>
              The Standard of Excellence
              <span className="w-8 h-px bg-amber-500/30"></span>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Highlights - 2 Column Grid on Mobile */}
      <section className="py-12 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-24">
            <h2 className="text-xl md:text-6xl font-bold text-slate-900 mb-3 font-serif">Strategic Advantage</h2>
            <p className="text-xs md:text-xl text-gray-500 px-4">Experience growth in the heart of Kisumu's northern business district.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-12">
            {[
              { icon: <MapPin size={18} />, title: "Prime Spot", desc: "Central location." },
              { icon: <TrendingUp size={18} />, title: "Traffic", desc: "High footfall." },
              { icon: <Users size={18} />, title: "Security", desc: "CCTV & Guards." },
              { icon: <Building2 size={18} />, title: "Modern", desc: "Pro design." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-slate-50 p-5 md:p-12 rounded-3xl border border-gray-100 flex flex-col items-center text-center transition-all"
              >
                <div className="mb-3 bg-white p-2.5 rounded-xl shadow-sm text-amber-500">
                  {item.icon}
                </div>
                <h3 className="text-xs md:text-xl font-bold mb-1 text-slate-800">{item.title}</h3>
                <p className="text-[10px] md:text-base text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Available Units - Horizontal Scroll on Mobile */}
      <section className="py-12 md:py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8 text-left">
            <div>
              <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-[8px]">Select Your Unit</span>
              <h2 className="text-xl md:text-6xl font-bold text-slate-900 font-serif">Flexible Spaces</h2>
            </div>
            <Link to="/spaces" className="text-amber-600 font-bold text-[10px] flex items-center gap-1">
              View All <ArrowRight size={12} />
            </Link>
          </div>

          <div className="flex md:grid md:grid-cols-2 overflow-x-auto gap-4 pb-6 snap-x no-scrollbar">
            {SPACES.map((space) => (
              <div
                key={space.id}
                className="min-w-[75vw] md:min-w-0 bg-white rounded-[2rem] overflow-hidden border border-gray-100 flex flex-col snap-center group shadow-sm"
              >
                <div className="relative h-40 md:h-64 overflow-hidden">
                  <img src={space.image} alt={space.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3">
                    <div className="bg-emerald-500 text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase">
                      {space.status}
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-10 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-3 text-slate-800 font-serif">{space.title}</h3>
                  <div className="space-y-2 mb-6 flex-1">
                    {space.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px] text-gray-500">
                        <CheckCircle2 size={12} className="text-amber-500 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact" 
                    className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] text-center"
                  >
                    Check Price
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Grid - 3 Column on Mobile */}
      <section className="py-12 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-lg md:text-4xl font-bold font-serif">Modern Facilities</h2>
            <div className="w-10 h-1 bg-amber-500 mx-auto mt-2 rounded-full" />
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-3 gap-3">
            {[
              { icon: <Zap size={20} />, label: "Power" },
              { icon: <ShieldCheck size={20} />, label: "Security" },
              { icon: <Droplets size={20} />, label: "Water" },
              { icon: <Building2 size={20} />, label: "Admin" },
              { icon: <Briefcase size={20} />, label: "IT Ready" },
              { icon: <TrendingUp size={20} />, label: "Signs" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                <div className="text-amber-500 mb-2">{item.icon}</div>
                <h4 className="font-bold text-[9px] text-slate-800">{item.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Global Section */}
      <section className="px-4 py-8 md:py-24">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[2.5rem] md:rounded-[5rem] py-12 md:py-32 px-6 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-7xl font-bold text-white mb-6 font-serif leading-tight">
              Scale Your Business <br/> 
              <span className="text-amber-500 italic">In Kisumu.</span>
            </h2>
            <div className="flex flex-row justify-center gap-3">
              <Link to="/contact" className="bg-amber-50 text-amber-600 px-6 py-3 rounded-xl font-bold text-xs shadow-xl">Contact</Link>
              <Link to="/about" className="bg-white/5 text-white px-6 py-3 rounded-xl font-bold text-xs border border-white/10 backdrop-blur-md">Advantage</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
