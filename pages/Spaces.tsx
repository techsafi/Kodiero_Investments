
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Building2, Store, Users, MapPin } from 'lucide-react';
import { SPACES, CONTACT_INFO } from '../constants';

const Spaces: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-[#FDFCF0]">
      <div className="bg-slate-900 py-10 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-7xl font-bold mb-3 font-serif">Spaces</h1>
          <p className="text-[11px] md:text-xl text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
            Flexible commercial spaces suitable for retail, consultancy, and corporate needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-24">
        <div className="grid md:grid-cols-2 gap-6 md:gap-16">
          <div className="space-y-6">
            {/* Office Section */}
            <div className="bg-white p-6 md:p-12 rounded-[2rem] border border-gray-100 shadow-sm">
              <div className="bg-amber-100 w-12 h-12 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                <Building2 size={24} />
              </div>
              <h2 className="text-xl font-bold mb-4 font-serif">Office Suites</h2>
              
              <div className="mb-6">
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[8px] mb-3">Ideal For:</p>
                <div className="grid grid-cols-2 gap-2">
                  {['NGOs', 'Law Firms', 'IT Firms', 'Consultants'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] text-gray-700 font-medium">
                      <div className="w-1 h-1 bg-amber-500 rounded-full" /> {item}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex gap-2 text-gray-500 text-[10px]"><CheckCircle2 size={12} className="text-emerald-500 shrink-0"/> Well-lit professional rooms</div>
                <div className="flex gap-2 text-gray-500 text-[10px]"><CheckCircle2 size={12} className="text-emerald-500 shrink-0"/> Quiet working environment</div>
              </div>
            </div>

            {/* Retail Section */}
            <div className="bg-slate-900 p-6 md:p-12 rounded-[2rem] text-white">
              <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center text-amber-500 mb-6">
                <Store size={24} />
              </div>
              <h2 className="text-xl font-bold mb-4 font-serif">Retail Spaces</h2>
              
              <div className="mb-6">
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[8px] mb-3">Ideal For:</p>
                <div className="grid grid-cols-2 gap-2">
                  {['Clinics', 'Salons', 'Electronics', 'Fashion'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] text-gray-300 font-medium">
                      <div className="w-1 h-1 bg-amber-500 rounded-full" /> {item}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex gap-2 text-gray-300 text-[10px]"><CheckCircle2 size={12} className="text-amber-500 shrink-0"/> High visibility walk-in traffic</div>
                <div className="flex gap-2 text-gray-300 text-[10px]"><CheckCircle2 size={12} className="text-amber-500 shrink-0"/> Kibos Road frontage</div>
              </div>
            </div>
          </div>

          {/* Inquiry Box */}
          <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm self-start md:sticky md:top-28">
            <h3 className="text-lg font-bold mb-4 font-serif">Make Kodiero Your Address</h3>
            <div className="space-y-4 mb-6">
               <div className="flex items-center gap-3">
                 <div className="bg-slate-50 p-2 rounded-lg"><MapPin className="text-amber-600" size={16}/></div>
                 <div>
                   <p className="text-[8px] font-bold text-gray-400 uppercase">Location</p>
                   <p className="text-[11px] font-bold text-slate-800">Kondele, Kibos Road</p>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <div className="bg-slate-50 p-2 rounded-lg"><Users className="text-amber-600" size={16}/></div>
                 <div>
                   <p className="text-[8px] font-bold text-gray-400 uppercase">Tenant Support</p>
                   <p className="text-[11px] font-bold text-slate-800">Responsive Management</p>
                 </div>
               </div>
            </div>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Inquiring about space`}
              target="_blank"
              className="block w-full text-center bg-amber-500 text-white py-3 rounded-xl font-bold text-xs shadow-lg"
            >
              Inquire Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spaces;
