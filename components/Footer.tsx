
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
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
            <p className="text-sm leading-relaxed">
              Prime commercial business hub in Kondele, Kisumu. Providing high-quality, sustainable spaces for local and international businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-amber-500 transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spaces */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Our Spaces</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/spaces" className="hover:text-amber-500 transition-colors">Executive Offices</Link></li>
              <li><Link to="/spaces" className="hover:text-amber-500 transition-colors">Ground Floor Shops</Link></li>
              <li><Link to="/spaces" className="hover:text-amber-500 transition-colors">Storage Facilities</Link></li>
              <li><Link to="/spaces" className="hover:text-amber-500 transition-colors">Shared Workspaces</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-amber-500 mt-1 shrink-0" size={18} />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-amber-500 shrink-0" size={18} />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-amber-500 shrink-0" size={18} />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Kodiero Investments. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
