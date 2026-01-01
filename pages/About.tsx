
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, CheckCircle, TrendingUp, MapPin, Building2, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <section className="bg-slate-900 py-16 md:py-32 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-7xl font-bold mb-6 font-serif leading-tight">
              Crafting Foundations for <span className="text-amber-500 italic">Success</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-xl leading-relaxed">
              Kodiero Investments is a property development and management leader committed to providing high-quality, sustainable commercial spaces in Kisumu City.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two Narratives */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-6">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">The Company</span>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 font-serif">Kodiero Investments</h2>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                We represent a vision of creating spaces where businesses can operate efficiently, attract customers easily, and grow sustainably. Our focus is on modern construction standards and long-term value for every tenant who joins our ecosystem.
              </p>
              <ul className="space-y-3">
                {['Strategic Property Selections', 'Modern Construction Standards', 'Reliable Facility Management', 'Tenant-First Communication'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle className="text-amber-500" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">The Property</span>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 font-serif">Kodiero Business Center</h2>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                Kodiero Business Center is a purpose-built commercial building designed to serve a wide range of enterprises—from retail shops to corporate consultancies. Located in the heart of Kondele, the building is the nexus of Kisumu's northern commercial growth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-gray-100">
                  <div className="font-bold text-amber-600 text-lg">High Visibility</div>
                  <p className="text-[10px] text-gray-500">Perfect for signage and retail branding.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-gray-100">
                  <div className="font-bold text-amber-600 text-lg">Modern Infrastructure</div>
                  <p className="text-[10px] text-gray-500">Reliable utilities and backup systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantage */}
      <section className="py-12 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl md:text-5xl font-bold font-serif mb-4">Location Advantage: <span className="text-amber-600">Kondele</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Kondele is Kisumu’s fastest-growing commercial hub, experiencing rapid transformation driven by improved infrastructure and expanding population.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <MapPin />, title: "Transport Hub", desc: "Major connection point linking Kibos Road to key city routes." },
              { icon: <TrendingUp />, title: "Economic Activity", desc: "Vibrant day-and-night economy with high customer traffic." },
              { icon: <Building2 />, title: "Growth Hub", desc: "Surrounded by expanding residential and institutional areas." },
              { icon: <ShieldCheck />, title: "Future Proof", desc: "Strategic positioning ensures strong long-term growth prospects." }
            ].map((adv, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                <div className="text-amber-500 mb-6 flex justify-center">{adv.icon}</div>
                <h4 className="font-bold mb-2">{adv.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 p-12 rounded-[3rem] text-white">
              <Target className="text-amber-500 mb-6" size={32} />
              <h3 className="text-3xl font-bold mb-4 font-serif">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">To provide high-quality managed spaces that foster entrepreneurship in Kisumu. We aim to be the foundation upon which your business builds its future.</p>
            </div>
            <div className="bg-amber-500 p-12 rounded-[3rem] text-white">
              <Eye className="text-white mb-6" size={32} />
              <h3 className="text-3xl font-bold mb-4 font-serif">Our Vision</h3>
              <p className="text-amber-100 leading-relaxed">To be the leading commercial real estate partner in Western Kenya, recognized for modern infrastructure, transparency, and tenant growth.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
