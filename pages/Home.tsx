
import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  MapPin, 
  TrendingUp, 
  ArrowRight, 
  Building2, 
  Briefcase, 
  Zap, 
  ShieldCheck, 
  Droplets,
  Phone,
  Mail
} from 'lucide-react';
import Hero from '../components/Hero';
import SectionDivider from '../components/SectionDivider';
import { SPACES, CONTACT_INFO } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="pb-10 bg-[#FDFCF0]">
      <Hero />

      {/* Quick Value Highlights */}
      <section className="py-8 md:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-amber-50 p-3 rounded-2xl text-amber-600">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight">Strategic Location</h4>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold">Kibos Road Corridor</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-amber-50 p-3 rounded-2xl text-amber-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight">24/7 Security</h4>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold">CCTV & Guarded Access</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-amber-50 p-3 rounded-2xl text-amber-600">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight">Zero Downtime</h4>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold">Automatic Power Backup</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-amber-50 p-3 rounded-2xl text-amber-600">
                <TrendingUp size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight">High Footfall</h4>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold">Maximum Brand Visibility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Introduction (About Preview) */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs">About Kodiero Investments</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-serif leading-tight">
                Kisumu's Premier Address for <span className="text-amber-500 italic">Professional Excellence</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                Managed by Kodiero Investments, Kodiero Business Center represents the next evolution of commercial real estate in Kisumu. We provide a structured, modern environment designed to empower both growing entrepreneurs and established corporate entities.
              </p>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                Our facility is more than just a building; it is a professional ecosystem where security, accessibility, and modern infrastructure converge to give your business the competitive edge it deserves.
              </p>
              <div className="pt-4">
                <Link to="/about" className="inline-flex items-center gap-2 text-amber-600 font-bold hover:gap-3 transition-all">
                  The Kodiero Advantage <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="/images/exterior_overview.jpg" alt="Kodiero Business Center Exterior" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-slate-900 text-white p-8 rounded-[2rem] hidden md:block max-w-xs shadow-2xl border border-white/10">
                <p className="text-sm italic text-gray-400 mb-4">"Our mission is to provide the foundation upon which Kisumu's businesses build their future."</p>
                <p className="font-bold text-amber-500 uppercase tracking-widest text-[10px]">Kodiero Management Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Spaces Overview (Preview) */}
      <section className="py-16 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs">Versatile Leasing Options</span>
              <h2 className="text-3xl md:text-6xl font-bold text-slate-900 font-serif mt-2">Tailored Commercial Spaces</h2>
              <p className="text-gray-500 mt-4 text-sm md:text-lg">Whether you require high-visibility retail frontage or quiet, professional office suites, our layouts are designed to adapt to your specific operational needs.</p>
            </div>
            <Link to="/spaces" className="bg-white px-8 py-4 rounded-2xl shadow-sm border border-gray-100 font-bold text-slate-800 hover:bg-amber-50 transition-colors flex items-center gap-2">
              View All Floorplans <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SPACES.map((space) => (
              <motion.div
                key={space.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={space.image} alt={space.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md text-slate-900 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {space.type}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-slate-800 font-serif">{space.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    Designed for high functionality and comfort, our {space.type.toLowerCase()} units offer the perfect balance of aesthetics and utility.
                  </p>
                  <div className="grid grid-cols-2 gap-y-3 mb-8">
                    {space.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-gray-600 font-medium">
                        <CheckCircle2 size={14} className="text-amber-500 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm text-center hover:bg-slate-800 transition-colors">
                    Request Availability
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Snapshot */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 space-y-6">
              <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs">Uncompromising Standards</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900">Facilities Built for Business Continuity</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                We understand that downtime is costly. That's why Kodiero Business Center is equipped with industrial-grade infrastructure to ensure your operations run smoothly 24/7.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex gap-4">
                  <div className="text-amber-500"><Zap size={20}/></div>
                  <p className="text-sm font-semibold text-slate-700">Automatic switch-over generators for uninterrupted power.</p>
                </li>
                <li className="flex gap-4">
                  <div className="text-amber-500"><Droplets size={20}/></div>
                  <p className="text-sm font-semibold text-slate-700">Combined underground and overhead water storage reserves.</p>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: <ShieldCheck size={28} />, label: "Security", desc: "Constant surveillance." },
                { icon: <Zap size={28} />, label: "Power", desc: "Reliable backup." },
                { icon: <Briefcase size={28} />, label: "Pro-Staff", desc: "On-site management." },
                { icon: <Building2 size={28} />, label: "Modern", desc: "Premium finishes." },
                { icon: <TrendingUp size={28} />, label: "Signs", desc: "Brand visibility." },
                { icon: <MapPin size={28} />, label: "Access", desc: "Ample parking." },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-xl transition-all group">
                  <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="font-bold text-sm md:text-lg text-slate-800 mb-1">{item.label}</h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantage */}
      <section className="py-16 md:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           <img src="/images/exterior.jpg" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs">The Kondele Advantage</span>
              <h2 className="text-3xl md:text-6xl font-bold font-serif leading-tight mt-4">
                The Pulse of North <br/>
                <span className="text-amber-500 italic">Kisumu's Economy</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-lg leading-relaxed mt-6">
                Situated at the strategic junction of Kibos Road and major transit corridors, our location offers unparalleled brand exposure. Kondele is Kisumu's fastest-growing economic hub, providing your business direct access to a high-density, high-activity consumer market.
              </p>
              <div className="flex flex-wrap gap-4 pt-8">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl">
                  <h5 className="text-amber-500 font-bold text-xl">High</h5>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Traffic Flow</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl">
                  <h5 className="text-amber-500 font-bold text-xl">Rapid</h5>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Economic Growth</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full aspect-square md:aspect-video rounded-[3rem] overflow-hidden border-8 border-white/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.088151213093!2d34.7709337!3d-0.0886475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa48d3c010d49%3A0x6a10067b8a74e2d3!2sKondele%2C%20Kisumu!5e0!3m2!1sen!2ske!4v1715000000000!5m2!1sen!2ske" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" 
                title="Kodiero Business Center Map"
                className="grayscale opacity-80 contrast-125"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Call-to-Action */}
      <section className="px-4 py-16 md:py-32">
        <div className="max-w-7xl mx-auto bg-amber-500 rounded-[3rem] md:rounded-[5rem] py-16 md:py-32 px-8 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-7xl font-bold text-white mb-8 font-serif leading-tight">
              Secure Your Business <span className="text-slate-900 italic">Future Today.</span>
            </h2>
            <p className="text-amber-50 text-sm md:text-xl mb-12 opacity-90">
              Join a curated community of professionals and retailers at Kisumu’s most strategic commercial address. Site visits are available daily by appointment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-sm md:text-lg shadow-2xl hover:bg-slate-800 transition-all">
                Inquire About Space
              </Link>
              <Link to="/gallery" className="bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-sm md:text-lg border border-white/30 backdrop-blur-md hover:bg-white/30 transition-all">
                Virtual Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Homepage Contact Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs">Direct Support</span>
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-slate-900 mt-4">Speak with Our Management Team</h2>
          <p className="text-gray-500 mt-6 text-sm md:text-lg">
            Our leasing office is ready to guide you through our available units and provide customized quotes based on your requirements.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex flex-col items-center p-8 rounded-3xl bg-slate-50 border border-gray-100 hover:border-amber-500/30 transition-all group">
              <div className="bg-amber-100 p-4 rounded-2xl text-amber-600 mb-4 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Call Us</span>
              <span className="text-slate-900 font-bold text-lg md:text-xl mt-1">{CONTACT_INFO.phone}</span>
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex flex-col items-center p-8 rounded-3xl bg-slate-50 border border-gray-100 hover:border-amber-500/30 transition-all group">
              <div className="bg-amber-100 p-4 rounded-2xl text-amber-600 mb-4 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Email Us</span>
              <span className="text-slate-900 font-bold text-lg md:text-xl mt-1 break-all">{CONTACT_INFO.email}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer-Style Closing Statement */}
      <div className="py-12 text-center">
        <p className="text-gray-400 text-sm italic font-serif">
          Kodiero Investments: Professional Spaces. Strategic Growth. Your Address for Success in Kisumu.
        </p>
      </div>
    </div>
  );
};

export default Home;
