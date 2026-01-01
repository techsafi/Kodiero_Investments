
import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Building2,
  Store,
  Users,
  MapPin,
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  Zap,
  Droplets,
  // Fix: Added TrendingUp to imports
  TrendingUp
} from 'lucide-react';
import { CONTACT_INFO, GALLERY_VIDEOS } from '../constants';
import { Link } from 'react-router-dom';

const Spaces: React.FC = () => {
  const interiorVideo = GALLERY_VIDEOS.find(v => v.id === 'v4') || GALLERY_VIDEOS[1];

  return (
    <div className="pt-20 min-h-screen bg-[#FDFCF0]">
      {/* Header Section: Spaces Overview */}
      <section className="bg-slate-900 py-16 md:py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-6 border border-amber-500/30">
              Leasing & Availability
            </span>
            <h1 className="text-3xl md:text-7xl font-bold mb-6 font-serif">Flexible Commercial Spaces</h1>
            <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Kodiero Business Center offers modern, adaptable commercial spaces designed to accommodate a wide range of enterprises — from retail outlets to professional offices and corporate consultancies.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-16">

            {/* Office Suites Section */}
            <section id="office-suites" className="scroll-mt-32">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-6">
                  <div className="bg-amber-100 w-14 h-14 rounded-2xl flex items-center justify-center text-amber-600">
                    <Building2 size={32} />
                  </div>
                  <h2 className="text-3xl font-bold font-serif text-slate-900">Office Suites</h2>
                  <p className="text-gray-600 leading-relaxed italic">Professional, Comfortable, and Fully Functional</p>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Our office suites are designed for focused work and professional engagement, providing a polished impression for your clients and a productive environment for your team.
                  </p>

                  <div className="grid grid-cols-2 gap-4 md:gap-8 pt-4">
                    <div>
                      <h4 className="font-bold text-slate-800 text-[9px] md:text-sm uppercase tracking-widest mb-4">Ideal For:</h4>
                      <ul className="space-y-2">
                        {['NGOs & Non-profits', 'Law Firms', 'IT Startups', 'Consultants'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-[9px] md:text-sm text-gray-500 font-medium leading-tight">
                            <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-amber-500 rounded-full shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-[9px] md:text-sm uppercase tracking-widest mb-4">Suite Features:</h4>
                      <ul className="space-y-2">
                        {['Well-lit for Focus', 'Quiet & Private', 'Flexible Layouts', 'Industrial Power'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-[9px] md:text-sm text-gray-500 font-medium leading-tight">
                            <CheckCircle2 size={10} className="text-emerald-500 shrink-0 md:w-3.5 md:h-3.5" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mt-8">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Users size={18} className="text-amber-500" /> Why Choose Our Office Suites?
                    </h4>
                    <ul className="space-y-3">
                      <li className="text-sm text-gray-600">• Establish your business in a prime Kisumu location.</li>
                      <li className="text-sm text-gray-600">• Offer clients a professional, polished impression.</li>
                      <li className="text-sm text-gray-600">• Benefit from on-site management support for smooth operations.</li>
                    </ul>
                    <Link to="/contact" className="mt-6 inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-slate-800 transition-all">
                      View Available Suites <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Interior Video Showcase */}
            <section className="py-8">
              <div className="text-center mb-8">
                <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-[10px]">Virtual Walkthrough</span>
                <h3 className="text-2xl font-bold font-serif text-slate-900 mt-2">Take an Interior Tour</h3>
              </div>
              <div className="aspect-video bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl relative group border-4 border-white">
                <video
                  controls
                  poster="/images/interior1.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src={interiorVideo.src} type="video/mp4" />
                </video>
                <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-white text-[10px] font-bold flex items-center gap-2 border border-white/10">
                  <PlayCircle size={14} /> {interiorVideo.title}
                </div>
              </div>
            </section>

            {/* Retail Spaces Section */}
            <section id="retail-spaces" className="scroll-mt-32">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-6">
                  <div className="bg-slate-900 w-14 h-14 rounded-2xl flex items-center justify-center text-amber-500">
                    <Store size={32} />
                  </div>
                  <h2 className="text-3xl font-bold font-serif text-slate-900">Retail & Shop Spaces</h2>
                  <p className="text-gray-600 leading-relaxed italic">High-Visibility Units Designed for Customer-Facing Businesses</p>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Perfectly situated for maximum exposure, our retail units capture high footfall from the Kibos Road corridor, providing a vibrant commercial hub for service providers.
                  </p>

                  <div className="grid grid-cols-2 gap-4 md:gap-8 pt-4">
                    <div>
                      <h4 className="font-bold text-slate-800 text-[9px] md:text-sm uppercase tracking-widest mb-4">Perfect For:</h4>
                      <ul className="space-y-2">
                        {['Clinics & Wellness', 'Salons & Spas', 'Electronics Hubs', 'Fashion Stores'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-[9px] md:text-sm text-gray-500 font-medium leading-tight">
                            <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-amber-500 rounded-full shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-[9px] md:text-sm uppercase tracking-widest mb-4">Retail Features:</h4>
                      <ul className="space-y-2">
                        {['Max Visibility', 'High Walk-in', 'Signage-Ready', 'Safe Premises'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-[9px] md:text-sm text-gray-500 font-medium leading-tight">
                            <CheckCircle2 size={10} className="text-emerald-500 shrink-0 md:w-3.5 md:h-3.5" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-500 p-8 rounded-3xl text-white shadow-xl shadow-amber-500/20 mt-8">
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <TrendingUp size={18} /> Additional Benefits:
                    </h4>
                    <ul className="space-y-3 mb-8">
                      <li className="text-sm opacity-90 flex gap-2"><ArrowRight size={14} className="shrink-0 mt-1" /> Easy access for customers and deliveries.</li>
                      <li className="text-sm opacity-90 flex gap-2"><ArrowRight size={14} className="shrink-0 mt-1" /> Ample parking and safe premises for evening shoppers.</li>
                      <li className="text-sm opacity-90 flex gap-2"><ArrowRight size={14} className="shrink-0 mt-1" /> Unparalleled brand exposure in a high-traffic hub.</li>
                    </ul>
                    <Link to="/contact" className="w-full sm:w-auto inline-block text-center bg-white text-amber-600 px-8 py-4 rounded-xl font-bold text-sm hover:bg-slate-900 hover:text-white transition-all shadow-md">
                      Explore Retail Spaces
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar / Inquiry Box */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              {/* Strategic Address Card */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl">
                <h3 className="text-xl font-bold mb-6 font-serif text-slate-900">Make Kodiero Your Address</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  Kodiero Business Center is more than a space — it’s a credible, professional business address in one of Kisumu’s fastest-growing commercial districts.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                    <div className="bg-white p-2 rounded-xl text-amber-600 shadow-sm">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Location</p>
                      <p className="text-sm font-bold text-slate-800">Kondele, Kibos Road</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                    <div className="bg-white p-2 rounded-xl text-amber-600 shadow-sm">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Status</p>
                      <p className="text-sm font-bold text-slate-800">Secure & Credible</p>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Inquiring about available space`}
                  target="_blank"
                  className="block w-full text-center bg-amber-500 text-white py-4 rounded-2xl font-bold text-sm shadow-lg hover:bg-amber-600 transition-colors"
                >
                  Book a Site Visit
                </a>
                <p className="text-[10px] text-center text-gray-400 mt-4 font-medium uppercase tracking-wider">Site visits available daily</p>
              </div>

              {/* Tenant Support Card */}
              <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
                <h3 className="text-xl font-bold mb-4 font-serif text-amber-500">Tenant Support</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  We handle the infrastructure, you focus on growth.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                  <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                    <Users size={16} className="text-amber-500 shrink-0" />
                    <div>
                      <p className="text-[10px] md:text-xs font-bold mb-0.5">Responsive Management</p>
                      <p className="text-[9px] md:text-[10px] text-gray-500 leading-tight">On-site support for tenant needs.</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                    <Zap size={16} className="text-amber-500 shrink-0" />
                    <div>
                      <p className="text-[10px] md:text-xs font-bold mb-0.5">Reliable Utilities</p>
                      <p className="text-[9px] md:text-[10px] text-gray-500 leading-tight">Zero-downtime backup systems.</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-3 col-span-2 md:col-span-1 border-t border-white/5 pt-4 md:border-none md:pt-0">
                    <ShieldCheck size={16} className="text-amber-500 shrink-0" />
                    <div>
                      <p className="text-[10px] md:text-xs font-bold mb-0.5">Secure Environment</p>
                      <p className="text-[9px] md:text-[10px] text-gray-500 leading-tight">24-hour guarded surveillance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 mb-6">Inquire About Availability Today</h2>
          <p className="text-gray-500 text-sm md:text-xl mb-12">
            Spaces are limited, and demand is growing due to the strategic location and modern facilities. Don’t miss the opportunity to secure a prime commercial unit in Kondele.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-amber-500 text-white px-10 py-5 rounded-2xl font-bold text-sm md:text-lg shadow-2xl hover:bg-amber-600 transition-all">
              Contact Management
            </Link>
            <Link to="/gallery" className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold text-sm md:text-lg hover:bg-slate-50 transition-all">
              Virtual Walkthrough
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Spaces;
