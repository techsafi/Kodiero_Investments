
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PlayCircle, Image as ImageIcon, Video as VideoIcon, LayoutGrid, List, ChevronRight } from 'lucide-react';
import { GALLERY_VIDEOS } from '../constants';

const IMAGES = [
  { id: 1, src: '/images/exterior.jpg', title: 'Front Facade', category: 'Exterior', type: 'image' },
  { id: 2, src: '/images/exterior_overview.jpg', title: 'Building Overview', category: 'Exterior', type: 'image' },
  { id: 3, src: '/images/compound.jpg', title: 'Main Entrance', category: 'Compound', type: 'image' },
  { id: 4, src: '/images/compound1.jpg', title: 'Parking', category: 'Compound', type: 'image' },
  { id: 5, src: '/images/interior.jpg', title: 'Lobby Area', category: 'Interior', type: 'image' },
  { id: 6, src: '/images/interior1.jpg', title: 'Office', category: 'Interior', type: 'image' },
  { id: 8, src: '/images/corridor.jpg', title: 'Corridor', category: 'Interior', type: 'image' },
  { id: 10, src: '/images/generator.jpg', title: 'Generator', category: 'Facilities', type: 'image' },
];

const Gallery: React.FC = () => {
  const [selectedAsset, setSelectedAsset] = useState<{ src: string, type: 'image' | 'video' } | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'images' | 'videos'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const videoAssets = GALLERY_VIDEOS.map(v => ({ ...v, type: 'video' as const }));
  const imageAssets = IMAGES.map(i => ({ ...i, type: 'image' as const }));
  
  const allAssets = [...videoAssets, ...imageAssets].filter(asset => {
    if (activeTab === 'all') return true;
    if (activeTab === 'images') return asset.type === 'image';
    if (activeTab === 'videos') return asset.type === 'video';
    return true;
  });

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-6xl font-bold text-slate-900 mb-4 font-serif">Gallery</h1>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-2 md:p-3 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
            {/* Category Filter */}
            <div className="flex bg-slate-100 p-1 rounded-xl md:rounded-2xl w-full md:w-auto">
              <button 
                onClick={() => setActiveTab('all')} 
                className={`flex-1 md:flex-none px-4 md:px-8 py-1.5 md:py-2.5 rounded-lg md:rounded-xl text-[10px] md:text-sm font-bold transition-all ${activeTab === 'all' ? 'bg-white text-amber-600 shadow-sm' : 'text-gray-500'}`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveTab('images')} 
                className={`flex-1 md:flex-none px-4 md:px-8 py-1.5 md:py-2.5 rounded-lg md:rounded-xl text-[10px] md:text-sm font-bold transition-all ${activeTab === 'images' ? 'bg-white text-amber-600 shadow-sm' : 'text-gray-500'}`}
              >
                <ImageIcon size={12} className="inline mr-1" /> Photos
              </button>
              <button 
                onClick={() => setActiveTab('videos')} 
                className={`flex-1 md:flex-none px-4 md:px-8 py-1.5 md:py-2.5 rounded-lg md:rounded-xl text-[10px] md:text-sm font-bold transition-all ${activeTab === 'videos' ? 'bg-white text-amber-600 shadow-sm' : 'text-gray-500'}`}
              >
                <VideoIcon size={12} className="inline mr-1" /> Videos
              </button>
            </div>

            {/* View Switcher */}
            <div className="flex bg-slate-100 p-1 rounded-xl md:rounded-2xl shrink-0">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-1.5 md:p-2.5 rounded-lg md:rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white text-amber-600 shadow-sm' : 'text-gray-400'}`}
                title="Grid View"
              >
                <LayoutGrid size={16} />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-1.5 md:p-2.5 rounded-lg md:rounded-xl transition-all ${viewMode === 'list' ? 'bg-white text-amber-600 shadow-sm' : 'text-gray-400'}`}
                title="List View"
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6"
            >
              {allAssets.map((asset) => (
                <motion.div
                  key={asset.id}
                  /* Fix: layoutId expects a string, so we explicitly convert the ID (which can be string or number) to a string */
                  layoutId={String(asset.id)}
                  onClick={() => setSelectedAsset({ src: asset.src, type: asset.type })}
                  className="group relative aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-sm cursor-pointer border border-gray-100"
                >
                  {asset.type === 'video' ? (
                    <div className="relative w-full h-full bg-slate-900">
                      <video className="w-full h-full object-cover opacity-60">
                        <source src={asset.src} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30">
                          <PlayCircle className="text-white" size={24} />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img src={asset.src} alt={asset.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <div>
                      <span className="text-[10px] md:text-xs text-white font-bold block">{asset.title}</span>
                      <span className="text-[8px] md:text-[10px] text-amber-400 font-bold uppercase tracking-wider">{asset.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="list"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3 md:space-y-4 max-w-4xl mx-auto"
            >
              {allAssets.map((asset) => (
                <motion.div
                  key={asset.id}
                  /* Fix: layoutId expects a string, so we explicitly convert the ID to a string */
                  layoutId={String(asset.id)}
                  onClick={() => setSelectedAsset({ src: asset.src, type: asset.type })}
                  className="group flex items-center bg-white p-2 md:p-3 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:border-amber-500/30 transition-all"
                >
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-lg md:rounded-xl overflow-hidden shrink-0 border border-gray-50">
                    {asset.type === 'video' ? (
                      <div className="relative w-full h-full bg-slate-900 flex items-center justify-center">
                        <PlayCircle className="text-white/50" size={20} />
                      </div>
                    ) : (
                      <img src={asset.src} alt={asset.title} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div className="ml-4 md:ml-6 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[8px] md:text-[10px] px-1.5 md:px-2 py-0.5 rounded-full font-bold uppercase tracking-widest ${asset.type === 'video' ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-600'}`}>
                        {asset.type}
                      </span>
                      <span className="text-[8px] md:text-[10px] text-gray-400 font-bold uppercase tracking-wider">{asset.category}</span>
                    </div>
                    <h3 className="text-xs md:text-lg font-bold text-slate-900">{asset.title}</h3>
                  </div>
                  <div className="text-gray-300 group-hover:text-amber-500 transition-colors mr-2">
                    <ChevronRight size={20} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedAsset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/98 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedAsset(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors z-[110]">
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-6xl relative" 
              onClick={e => e.stopPropagation()}
            >
              {selectedAsset.type === 'image' ? (
                <img 
                  src={selectedAsset.src} 
                  className="w-full rounded-2xl md:rounded-[2.5rem] object-contain max-h-[85vh] shadow-2xl" 
                  alt="Full view"
                />
              ) : (
                <div className="aspect-video w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-black">
                  <video controls autoPlay className="w-full h-full">
                    <source src={selectedAsset.src} type="video/mp4" />
                  </video>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
