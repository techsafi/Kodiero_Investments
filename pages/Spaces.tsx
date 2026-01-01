
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Building2, Store, Users, MapPin } from 'lucide-react';
import { SPACES, CONTACT_INFO, getIcon } from '../constants';

const Spaces: React.FC = () => {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="bg-slate-900 py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-7xl font-bold mb-6 font-serif">Available Spaces</h1>
          <p className="text-sm md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Kodiero Business Center offers flexible commercial spaces suitable for different business needs—from consulting firms to high-traffic retail outlets.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Detailed Categories */}
          <div className="space-y-12">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-xl">
              <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center text-amber-600 mb-8">
                <Building2 size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-6 font-serif">Office Spaces</h2>
              <div className="mb-8">
                <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-4">Ideal For:</p>
                <div className="grid grid-cols-2 gap-4">
                  {['Corporate Offices', 'Consultancies', 'NGOs & Institutions', 'Law & IT Firms', 'Training Centers', 'SMEs'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Key Benefits:</p>
                <div className="space-y-2">
                  <div className="flex gap-3 text-gray-600 text-sm"><CheckCircle2 size={16} className="text-emerald-500 shrink-0"/> Well-lit rooms with professional layouts</div>
                  <div className="flex gap-3 text-gray-600 text-sm"><CheckCircle2 size={16} className="text-emerald-500 shrink-0"/> Quiet, focus-oriented working environment</div>
                  <div className="flex gap-3 text-gray-600 text-sm"><CheckCircle2 size={16} className="text-emerald-500 shrink-0"/> Easy access for clients and staff</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] text-white shadow-xl">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-amber-500 mb-8">
                <Store size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-6 font-serif">Retail & Shop Spaces</h2>
              <div className="mb-8">
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-4">Ideal For:</p>
                <div className="grid grid-cols-2 gap-4">
                  {['Retail Shops', 'Service Outlets', 'Clinics & Salons', 'Fashion & Beauty', 'Electronics', 'Showrooms'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Key Benefits:</p>
                <div className="space-y-2">
                  <div className="flex gap-3 text-gray-300 text-sm"><CheckCircle2 size={16} className="text-amber-500 shrink-0"/> High visibility for walk-in customer traffic</div>
                  <div className="flex gap-3 text-gray-300 text-sm"><CheckCircle2 size={16} className="text-amber-500 shrink-0"/> Strategic frontage for brand signage</div>
                  <div className="flex gap-3 text-gray-300 text-sm"><CheckCircle2 size={16} className="text-amber-500 shrink-0"/> Located along the high-traffic Kibos Road</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact & Info */}
          <div className="space-y-8">
             <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm sticky top-28">
               <h3 className="text-2xl font-bold mb-6 font-serif">Make Kodiero Your Address</h3>
               <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                 Operating from Kodiero Business Center places your business in a strategic, high-potential location with strong long-term growth prospects.
               </p>
               <div className="space-y-4 mb-8">
                 <div className="flex items-center gap-4">
                   <div className="bg-slate-50 p-3 rounded-xl"><MapPin className="text-amber-600" size={20}/></div>
                   <div>
                     <p className="text-[10px] font-bold text-gray-400 uppercase">Location</p>
                     <p className="text-sm font-bold">Kondele, Kibos Road Corridor</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="bg-slate-50 p-3 rounded-xl"><Users className="text-amber-600" size={20}/></div>
                   <div>
                     <p className="text-[10px] font-bold text-gray-400 uppercase">Tenant Focus</p>
                     <p className="text-sm font-bold">Responsive Management</p>
                   </div>
                 </div>
               </div>
               <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Inquiring about space availability`}
                target="_blank"
                className="block w-full text-center bg-amber-500 text-white py-4 rounded-2xl font-bold text-lg hover:bg-amber-600 transition-all shadow-lg"
               >
                 Inquire About Pricing
               </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spaces;
