
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle, TrendingUp, MapPin, Building2, ShieldCheck, Zap, Users, Award, LucideIcon } from 'lucide-react';
import SectionDivider from '../components/SectionDivider';

interface AdvantageItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const About: React.FC = () => {
  const kondeleAdvantages: AdvantageItem[] = [
    { icon: MapPin, title: "Transport Hub", desc: "Major connection point linking Kibos Road to key city routes." },
    { icon: TrendingUp, title: "Economic Activity", desc: "Vibrant day-and-night economy with high customer traffic." },
    { icon: Building2, title: "Growth Hub", desc: "Surrounded by expanding residential and institutional areas." },
    { icon: ShieldCheck, title: "Future Proof", desc: "Strategic positioning ensures strong long-term growth prospects." }
  ];

  const coreFacilities: AdvantageItem[] = [
    { icon: Zap, title: "Full Backup", desc: "Automatic generator standby." },
    { icon: ShieldCheck, title: "24/7 Safety", desc: "CCTV and security personnel." },
    { icon: Users, title: "Management", desc: "On-site tenant support." },
    { icon: Building2, title: "Maintenance", desc: "Regular facility care." }
  ];

  return (
    <div className="pt-20 bg-[#FDFCF0] min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-900 py-12 md:py-32 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-500 text-[9px] md:text-xs font-bold uppercase tracking-widest mb-4 border border-amber-500/30">
              PROPERTY MANAGEMENT LEADER
            </span>
            <h1 className="text-3xl md:text-7xl font-bold mb-4 font-serif leading-tight">
              Crafting Foundations for <span className="text-amber-500 italic">Success</span>
            </h1>
            <p className="text-gray-400 text-xs md:text-xl leading-relaxed max-w-xl mx-auto font-light">
              Kodiero Investments is a property development leader committed to providing high-quality, sustainable commercial spaces in Kisumu City.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two Narratives - Company & Property */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
            {/* The Company */}
            <div className="space-y-4">
              <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-[8px] md:text-xs">The Company</span>
              <h2 className="text-xl md:text-4xl font-bold text-slate-900 font-serif">Kodiero Investments</h2>
              <p className="text-gray-600 text-xs md:text-lg leading-relaxed">
                We represent a vision of creating spaces where businesses can operate efficiently, attract customers easily, and grow sustainably. Our focus is on modern construction standards and long-term value for every tenant who joins our ecosystem.
              </p>
              <div className="grid grid-cols-1 gap-y-2 pt-2">
                {[
                  'Strategic Property Selections',
                  'Modern Construction Standards',
                  'Reliable Facility Management',
                  'Tenant-First Communication'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[10px] md:text-sm font-semibold text-slate-700">
                    <CheckCircle className="text-amber-500 shrink-0" size={16} /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* The Property */}
            <div className="space-y-4">
              <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-[8px] md:text-xs">The Property</span>
              <h2 className="text-xl md:text-4xl font-bold text-slate-900 font-serif">Kodiero Business Center</h2>
              <p className="text-gray-600 text-xs md:text-lg leading-relaxed">
                Kodiero Business Center is a purpose-built commercial building designed to serve a wide range of enterprises—from retail shops to corporate consultancies. Located in the heart of Kondele, the building is the nexus of Kisumu's northern commercial growth.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center">
                  <div className="font-bold text-amber-600 text-sm md:text-lg">High Visibility</div>
                  <p className="text-[8px] md:text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-bold">Signage & Branding</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center">
                  <div className="font-bold text-amber-600 text-sm md:text-lg">Modern Build</div>
                  <p className="text-[8px] md:text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-bold">Reliable Utilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Location Advantage */}
      <section className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-20">
            <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-[8px] md:text-xs">Strategic Context</span>
            <h2 className="text-2xl md:text-5xl font-bold text-slate-900 font-serif mt-2">Location Advantage: <span className="text-amber-600">Kondele</span></h2>
            <p className="text-xs md:text-lg text-gray-500 max-w-2xl mx-auto mt-4">Kondele is Kisumu’s fastest-growing commercial hub, experiencing rapid transformation driven by improved infrastructure and expanding population.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {kondeleAdvantages.map((adv, i) => (
              <div key={i} className="bg-white p-5 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-gray-100 text-center flex flex-col items-center shadow-sm">
                <div className="text-amber-500 mb-3 md:mb-6">
                  <adv.icon size={24} />
                </div>
                <h4 className="font-bold text-[10px] md:text-lg mb-1 md:mb-3 text-slate-800 leading-tight">{adv.title}</h4>
                <p className="text-[8px] md:text-sm text-gray-400 leading-tight md:leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-slate-900 p-8 md:p-12 rounded-[2.5rem] text-white flex flex-col"
          >
            <div className="bg-amber-500/20 w-12 h-12 rounded-2xl flex items-center justify-center text-amber-500 mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-xl md:text-3xl font-bold mb-4 font-serif">Our Mission</h3>
            <p className="text-gray-400 text-xs md:text-lg leading-relaxed">
              To provide high-quality managed spaces that foster entrepreneurship in Kisumu. We aim to be the foundation upon which your business builds its future.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-amber-500 p-8 md:p-12 rounded-[2.5rem] text-white flex flex-col shadow-xl shadow-amber-500/20"
          >
            <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6">
              <Eye size={24} />
            </div>
            <h3 className="text-xl md:text-3xl font-bold mb-4 font-serif">Our Vision</h3>
            <p className="text-amber-50 text-xs md:text-lg leading-relaxed">
              To be the leading commercial real estate partner in Western Kenya, recognized for modern infrastructure, transparency, and tenant growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Facilities */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-20">
            <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-[8px] md:text-xs">Why Partner With Us</span>
            <h2 className="text-2xl md:text-5xl font-bold text-slate-900 font-serif mt-2">Core Facilities</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {coreFacilities.map((adv, i) => (
              <div key={i} className="bg-slate-50 p-5 md:p-10 rounded-[1.5rem] border border-gray-100 flex flex-col items-center text-center">
                <div className="text-amber-500 mb-3">
                  <adv.icon size={24} />
                </div>
                <h4 className="font-bold text-[10px] md:text-lg mb-1 text-slate-800">{adv.title}</h4>
                <p className="text-[8px] md:text-sm text-gray-400 leading-tight">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Spotlight */}
      <section className="py-12 md:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-5xl font-bold font-serif leading-tight">
                Nexus of Kisumu's <br/>
                <span className="text-amber-500">Northern Growth</span>
              </h2>
              <p className="text-gray-400 text-xs md:text-lg leading-relaxed">
                Positioned strategically along Kibos Road, Kodiero Business Center captures both morning and evening transit traffic. It serves as an ideal anchor for retail banks, clinics, and professional consultancies that require easy client access and maximum brand visibility.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl">
                  <div className="text-amber-500 font-bold text-lg md:text-2xl">High</div>
                  <div className="text-[8px] uppercase tracking-widest text-gray-500">Visibility Frontage</div>
                </div>
                <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl">
                  <div className="text-amber-500 font-bold text-lg md:text-2xl">Vibrant</div>
                  <div className="text-[8px] uppercase tracking-widest text-gray-500">Economy Center</div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden border border-white/10 grayscale opacity-70">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.088151213093!2d34.7709337!3d-0.0886475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa48d3c010d49%3A0x6a10067b8a74e2d3!2sKondele%2C%20Kisumu!5e0!3m2!1sen!2ske!4v1715000000000!5m2!1sen!2ske" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" 
                title="Kodiero Business Center Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-24 bg-[#FDFCF0] text-center px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-slate-900">Experience the Center Firsthand</h2>
          <p className="text-xs md:text-lg text-gray-600">We invite you to schedule a private tour of our facilities and find the perfect unit for your business goals.</p>
          <div className="pt-4">
            <motion.a 
              href="/#/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-amber-500 text-white px-10 py-4 rounded-2xl font-bold text-sm md:text-lg shadow-xl"
            >
              Book Site Visit
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
