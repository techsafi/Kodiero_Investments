
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-amber-500 p-2 rounded-lg">
                <Building2 className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none">KODIERO</span>
                <span className="text-[10px] tracking-widest font-semibold uppercase text-amber-500">Investments</span>
              </div>
            </Link>
            <p className="text-xs md:text-sm leading-relaxed max-w-sm">
              Kodiero Business Center is a modern commercial property located in Kondele, Kisumu, along Kibos Road. Managed by Kodiero Investments, we provide secure, accessible, and affordable spaces for businesses of all sizes.
            </p>
            <div className="font-bold text-white text-xs md:text-sm italic border-l-2 border-amber-500 pl-4">
              "Your business. Your address. Your growth."
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-bold mb-6 text-sm md:text-lg">Explore</h3>
                <ul className="space-y-3 text-xs md:text-sm">
                  {NAV_ITEMS.map(item => (
                    <li key={item.path}>
                      <Link to={item.path} className="hover:text-amber-500 transition-colors">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-6 text-sm md:text-lg">Services</h3>
                <ul className="space-y-3 text-xs md:text-sm">
                  <li><Link to="/spaces" className="hover:text-amber-500 transition-colors">Offices</Link></li>
                  <li><Link to="/spaces" className="hover:text-amber-500 transition-colors">Retail Stores</Link></li>
                  <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Site Viewing</Link></li>
                  <li><Link to="/gallery" className="hover:text-amber-500 transition-colors">Virtual Tour</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5">
            <h3 className="text-white font-bold mb-6 text-sm md:text-lg">Contact Center</h3>
            <ul className="space-y-5 text-xs md:text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="text-amber-500 shrink-0" size={18} />
                <span>Kondele - Kibos Road, Kisumu, Kenya</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-amber-500 shrink-0" size={18} />
                <span className="text-white font-bold">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-amber-500 shrink-0" size={18} />
                <span className="break-all">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs text-center md:text-left">
          <p>© {new Date().getFullYear()} Kodiero Investments. Modern commercial hubs in Kisumu City.</p>
          <div className="flex gap-8 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Admin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
