
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';

const IMAGES = [
  { id: 1, src: 'https://picsum.photos/seed/k1/1200/800', title: 'Modern Facade', category: 'Exterior' },
  { id: 2, src: 'https://picsum.photos/seed/k2/1200/800', title: 'Ground Floor Shops', category: 'Retail' },
  { id: 3, src: 'https://picsum.photos/seed/k3/1200/800', title: 'Executive Hallway', category: 'Interior' },
  { id: 4, src: 'https://picsum.photos/seed/k4/1200/800', title: 'Natural Lighting Office', category: 'Offices' },
  { id: 5, src: 'https://picsum.photos/seed/k5/1200/800', title: 'Secure Parking', category: 'Exterior' },
  { id: 6, src: 'https://picsum.photos/seed/k6/1200/800', title: 'Storage Units', category: 'Utility' },
  { id: 7, src: 'https://picsum.photos/seed/k7/1200/800', title: 'Boardroom Setup', category: 'Offices' },
  { id: 8, src: 'https://picsum.photos/seed/k8/1200/800', title: 'Reception Area', category: 'Interior' },
  { id: 9, src: 'https://picsum.photos/seed/k9/1200/800', title: 'Business Hub Night View', category: 'Exterior' },
];

const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(IMAGES.map(img => img.category))];

  const filteredImages = filter === 'All' 
    ? IMAGES 
    : IMAGES.filter(img => img.category === filter);

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-serif">Property Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            A visual tour of Kodiero Business Center. Explore our amenities, spaces, and professional environment.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2.5 rounded-full font-bold transition-all ${
                  filter === cat 
                  ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' 
                  : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img) => (
            <motion.div
              layout
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImg(img.src)}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-amber-500 text-xs font-bold uppercase mb-1">{img.category}</span>
                <h3 className="text-white font-bold">{img.title}</h3>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Search className="text-white" size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:text-amber-500 transition-colors">
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImg} 
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
