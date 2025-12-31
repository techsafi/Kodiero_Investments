
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-900 py-32 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-bold mb-8 font-serif"
          >
            Pioneering Commercial <br/> Excellence in <span className="text-amber-500 underline decoration-amber-500/30">Kisumu</span>
          </motion.h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Kodiero Investments is more than a property developer; we are a partner in your business growth, providing the infrastructure for the next generation of Kisumu entrepreneurs.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1000" 
                alt="Business Discussion" 
                className="rounded-[3rem] shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-serif leading-tight">Empowering Businesses in Kondele</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Founded with a vision to transform the commercial landscape of Kondele, Kodiero Business Center was built to bridge the gap between high-end office requirements and affordability.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our strategic location on the Kondele-Kibos axis places our tenants at the heart of the city's growth, surrounded by a vibrant community and key financial services.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { count: "10+", label: "Years Experience" },
                  { count: "50+", label: "Happy Tenants" },
                  { count: "95%", label: "Occupancy Rate" },
                  { count: "24/7", label: "Operations Support" },
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="text-3xl font-bold text-amber-500 mb-1">{stat.count}</div>
                    <div className="text-sm font-semibold text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[2rem] shadow-xl border border-gray-100"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center text-amber-600 mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6 font-serif">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide accessible, high-quality, and professionally managed commercial spaces that foster entrepreneurship and drive economic development in Kisumu.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[2rem] shadow-xl border border-gray-100"
            >
              <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center text-slate-900 mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6 font-serif">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading commercial real estate partner in Western Kenya, recognized for integrity, modern infrastructure, and exceptional tenant support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 font-serif">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Award size={48} className="text-amber-500" />, 
                title: "Excellence", 
                desc: "We maintain our facilities to the highest standards, ensuring a professional environment at all times." 
              },
              { 
                icon: <CheckCircle size={48} className="text-amber-500" />, 
                title: "Transparency", 
                desc: "Honest lease terms and clear communication are the foundation of our tenant relationships." 
              },
              { 
                icon: <Target size={48} className="text-amber-500" />, 
                title: "Innovation", 
                desc: "We continuously upgrade our infrastructure to meet the evolving digital needs of modern business." 
              },
            ].map((v, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="mb-8">{v.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{v.title}</h4>
                <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
