
import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  CheckCircle,
  TrendingUp,
  MapPin,
  Building2,
  ShieldCheck,
  Zap,
  Users,
  Award,
  LucideIcon,
  FlameKindling,
  LineChart,
  Gem
} from 'lucide-react';
import SectionDivider from '../components/SectionDivider';

interface AdvantageItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const About: React.FC = () => {
  const companyPillars = [
    { title: "Strategic Property Selections", desc: "Identifying high-potential locations for long-term growth." },
    { title: "Modern Construction Standards", desc: "Durable, professional, and future-ready buildings." },
    { title: "Reliable Facility Management", desc: "Ensuring uninterrupted business operations." },
    { title: "Tenant-First Communication", desc: "Prompt support and responsive management." }
  ];

  const propertyHighlights = [
    { title: "High Visibility", desc: "Frontage and signage placement maximize customer reach." },
    { title: "Modern Build", desc: "Durable construction, professional layouts, and contemporary design." },
    { title: "Reliable Utilities", desc: "Water, electricity, and backup power systems in place." },
    { title: "Strategic Context", desc: "Located at the heart of Kondele’s commercial growth corridor." }
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
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-500 text-[9px] md:text-xs font-bold uppercase tracking-widest mb-4 border border-amber-500/30">
              PROPERTY MANAGEMENT LEADER
            </span>
            <h1 className="text-3xl md:text-7xl font-bold mb-4 font-serif leading-tight">
              Crafting Foundations for <span className="text-amber-500 italic">Business Success</span>
            </h1>
            <p className="text-gray-400 text-xs md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              Kodiero Investments is a trusted property development leader in Kisumu City, committed to creating high-quality, sustainable commercial spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Company Section */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-[8px] md:text-xs">The Company</span>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 font-serif">Kodiero Investments</h2>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                We represent a vision of creating spaces where businesses operate efficiently, attract customers, and grow sustainably. Our approach is tenant-first, emphasizing reliability, transparency, and proactive management. Kodiero Investments is more than a landlord — we are a partner in business success.
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-4 pt-4">
                {companyPillars.map((pillar, i) => (
                  <div key={i} className="bg-white p-3 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-[10px] md:text-sm mb-1">{pillar.title}</h4>
                    <p className="text-[9px] md:text-xs text-gray-400">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img src="/images/exterior_overview.jpg" alt="Kodiero Overview" className="w-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* The Property Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-[8px] md:text-xs">The Property</span>
          <h2 className="text-2xl md:text-5xl font-bold text-slate-900 font-serif mt-2">Kodiero Business Center</h2>
          <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto mt-4">Purpose-built commercial excellence in Kondele, designed to accommodate a wide range of enterprises from corporate offices to retail shops.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {propertyHighlights.map((highlight, i) => (
            <div key={i} className="bg-slate-50 p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 flex flex-col items-center text-center">
              <div className="bg-white p-2 md:p-4 rounded-xl md:rounded-2xl shadow-sm text-amber-500 mb-3 md:mb-6">
                {i === 0 && <TrendingUp size={16} className="md:w-6 md:h-6" />}
                {i === 1 && <Building2 size={16} className="md:w-6 md:h-6" />}
                {i === 2 && <Zap size={16} className="md:w-6 md:h-6" />}
                {i === 3 && <MapPin size={16} className="md:w-6 md:h-6" />}
              </div>
              <h4 className="font-bold text-slate-800 text-xs md:text-base mb-1 md:mb-2">{highlight.title}</h4>
              <p className="text-[9px] md:text-xs text-gray-500 leading-relaxed">{highlight.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
          <div className="bg-slate-900 p-6 md:p-16 rounded-[2rem] md:rounded-[3rem] text-white">
            <Target className="text-amber-500 mb-4 md:mb-6 w-8 h-8 md:w-10 md:h-10" />
            <h3 className="text-lg md:text-4xl font-bold mb-3 md:mb-6 font-serif">Our Mission</h3>
            <p className="text-gray-400 text-[10px] md:text-xl leading-relaxed">
              To provide high-quality, managed spaces that foster entrepreneurship in Kisumu City. We aim to offer an environment where businesses can focus on growth while we handle the infrastructure, utilities, and security.
            </p>
          </div>
          <div className="bg-amber-500 p-6 md:p-16 rounded-[2rem] md:rounded-[3rem] text-white shadow-2xl shadow-amber-500/20">
            <Eye className="text-white mb-4 md:mb-6 w-8 h-8 md:w-10 md:h-10" />
            <h3 className="text-lg md:text-4xl font-bold mb-3 md:mb-6 font-serif">Our Vision</h3>
            <p className="text-amber-50 text-[10px] md:text-xl leading-relaxed">
              To be the leading commercial real estate partner in Western Kenya, recognized for modern, professional infrastructure, transparency and trust in management, and supporting tenant growth and operational success.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner With Us - Core Facilities */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-[8px] md:text-xs">Reliability First</span>
            <h2 className="text-2xl md:text-5xl font-bold text-slate-900 font-serif mt-2">Why Partner With Us</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Core Facilities */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-amber-500 p-2 rounded-lg text-white"><Zap size={18} /></div>
                <h3 className="text-xl font-bold font-serif text-slate-900">Core Facilities</h3>
              </div>
              <ul className="space-y-4">
                <li className="text-sm text-gray-500 flex gap-3"><CheckCircle size={16} className="text-amber-500 shrink-0 mt-1" /> Reliable power backup with automatic generator standby.</li>
                <li className="text-sm text-gray-500 flex gap-3"><CheckCircle size={16} className="text-amber-500 shrink-0 mt-1" /> Continuous water supply through underground and overhead storage.</li>
              </ul>
            </div>

            {/* Safety & Security */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-amber-500 p-2 rounded-lg text-white"><ShieldCheck size={18} /></div>
                <h3 className="text-xl font-bold font-serif text-slate-900">Safety & Security</h3>
              </div>
              <ul className="space-y-4">
                <li className="text-sm text-gray-500 flex gap-3"><CheckCircle size={16} className="text-amber-500 shrink-0 mt-1" /> CCTV surveillance across the building.</li>
                <li className="text-sm text-gray-500 flex gap-3"><CheckCircle size={16} className="text-amber-500 shrink-0 mt-1" /> 24/7 on-site security personnel.</li>
                <li className="text-sm text-gray-500 flex gap-3"><CheckCircle size={16} className="text-amber-500 shrink-0 mt-1" /> Fire alarm systems installed and monitored.</li>
              </ul>
            </div>

            {/* Management & Support */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-amber-500 p-2 rounded-lg text-white"><Users size={18} /></div>
                <h3 className="text-xl font-bold font-serif text-slate-900">Management & Support</h3>
              </div>
              <ul className="space-y-4">
                <li className="text-sm text-gray-500 flex gap-3"><CheckCircle size={16} className="text-amber-500 shrink-0 mt-1" /> On-site tenant support for all facility needs.</li>
                <li className="text-sm text-gray-500 flex gap-3"><CheckCircle size={16} className="text-amber-500 shrink-0 mt-1" /> Regular maintenance and upkeep of common areas.</li>
                <li className="text-sm text-gray-500 flex gap-3"><CheckCircle size={16} className="text-amber-500 shrink-0 mt-1" /> Quick response to tenant inquiries.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tenant Experience & Market Insights */}
      <section className="py-12 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm">
              <h3 className="text-2xl font-bold font-serif text-slate-900 mb-6 flex items-center gap-3">
                <Award className="text-amber-500" /> Tenant Experience
              </h3>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-6">
                Kodiero Business Center is designed to create a productive, professional, and client-friendly environment. Businesses can operate confidently, knowing the infrastructure and support systems are in place.
              </p>
              <div className="space-y-4">
                {['Clean, organized common areas', 'Well-lit and ventilated spaces', 'Smooth traffic flow for tenants and visitors', 'A professional atmosphere that reflects positively on tenant brands'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <CheckCircle size={14} className="text-emerald-500" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] text-white">
              <h3 className="text-2xl font-bold font-serif mb-6 flex items-center gap-3 text-amber-500">
                <LineChart /> Local Market Insights
              </h3>
              <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-8">
                Kondele is transforming into a commercial epicenter in Kisumu. Operating in Kodiero Business Center enables tenants to ride the wave of growth while securing their brand presence.
              </p>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                {[
                  { label: "High Demand", text: "Increasing foot traffic for retail and office spaces." },
                  { label: "New Presence", text: "Banks, clinics, and service providers establishing a presence." },
                  { label: "Visibility", text: "Strategic location along Kibos Road ensures accessibility." },
                  { label: "Value", text: "Strong potential for long-term property value appreciation." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2 p-3 md:p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="font-bold text-amber-500 text-[8px] md:text-xs uppercase tracking-widest leading-none">{item.label}</div>
                    <p className="text-[9px] md:text-xs text-gray-400 leading-tight">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Location - Final Summary */}
      <section className="py-12 md:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs">Kondele Advantage</span>
              <h2 className="text-3xl md:text-5xl font-bold font-serif leading-tight">
                Strategically Positioned <br />
                <span className="text-amber-500">for Modern Growth</span>
              </h2>
              <p className="text-gray-400 text-xs md:text-lg leading-relaxed">
                Positioned at the nexus of Kisumu's northern growth corridor, our location links Kibos Road to major city routes. It captures the vibrant day-and-night economy of Kondele, surrounded by expanding residential, institutional, and commercial areas. Future-proof your business by establishing it in Kisumu's most dynamic marketplace.
              </p>
            </div>
            <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden border border-white/10 grayscale opacity-70">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.088151213093!2d34.7709337!3d-0.0886475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa48d3c010d49%3A0x6a10067b8a74e2d3!2sKondele%2C%20Kisumu!5e0!3m2!1sen!2ske!4v1715000000000!5m2!1sen!2ske"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
                title="Strategic Kondele Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-24 bg-[#FDFCF0] text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-block bg-amber-100 p-4 rounded-3xl text-amber-600 mb-4">
            <Gem size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-900">Experience the Center Firsthand</h2>
          <p className="text-xs md:text-xl text-gray-600">We invite prospective tenants to schedule a private tour and explore available spaces. Your business deserves a space built for growth.</p>
          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="/#/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-sm md:text-lg shadow-xl"
            >
              Book Site Visit Today
            </motion.a>
            <motion.a
              href="/#/spaces"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold text-sm md:text-lg shadow-sm"
            >
              Explore Spaces
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
