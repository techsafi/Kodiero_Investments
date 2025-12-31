
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Search, Info } from 'lucide-react';
import { SPACES, getIcon } from '../constants';

const Spaces: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-serif">Spaces Tailored for You</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From open-plan retail stores to secure executive offices, we offer diverse layouts to match your unique business needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SPACES.map((space) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-72">
                <img src={space.image} alt={space.title} className="w-full h-full object-cover" />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-white/90 backdrop-blur text-amber-600 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
                    {space.type}
                  </span>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-sm ${
                    space.status === 'Available' ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}>
                    {space.status}
                  </span>
                </div>
              </div>

              <div className="p-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{space.title}</h3>
                
                <div className="flex items-center gap-2 mb-6 p-3 bg-slate-50 rounded-2xl">
                  <div className="bg-amber-100 p-2 rounded-xl text-amber-600">
                    {getIcon('Building2', 'w-5 h-5')}
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block uppercase font-bold tracking-tighter">Approx. Size</span>
                    <span className="text-slate-900 font-bold">{space.size}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Features & Inclusions</p>
                  {space.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-emerald-500" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-slate-900 font-bold">
                    <span className="text-xs text-gray-400 block font-normal">Starting at</span>
                    {space.priceRange}
                  </div>
                  <a 
                    href={`https://wa.me/2547XXXXXXXX?text=Hello, I am interested in the ${space.title}`}
                    target="_blank"
                    className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-500 transition-colors flex items-center gap-2"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Availability Info */}
        <div className="mt-20 bg-amber-50 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 border border-amber-100">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <Info className="text-amber-500 w-10 h-10" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Space Availability Disclaimer</h3>
            <p className="text-gray-600">
              Please note that our spaces are highly sought after. Listings above are subject to current tenancy status. For the most up-to-date availability, we recommend scheduling a direct call or site visit with our property management team.
            </p>
          </div>
          <button className="whitespace-nowrap bg-amber-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20">
            Call Management
          </button>
        </div>
      </div>
    </div>
  );
};

export default Spaces;
