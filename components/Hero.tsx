
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

const COLLAGE_IMAGES = [
  '/images/exterior.jpg',
  '/images/interior1.jpg',
  '/images/compound.jpg',
  '/images/interior.jpg',
  '/images/exterior_overview.jpg',
  '/images/corridor.jpg'
];

const Hero: React.FC = () => {
  const [indices, setIndices] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndices(prev => {
        const next = [...prev];
        const randomSlot = Math.floor(Math.random() * 4);
        let nextImgIndex = Math.floor(Math.random() * COLLAGE_IMAGES.length);
        // Ensure no duplicates in the current view
        while (next.includes(nextImgIndex)) {
          nextImgIndex = Math.floor(Math.random() * COLLAGE_IMAGES.length);
        }
        next[randomSlot] = nextImgIndex;
        return next;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[90vh] md:h-screen min-h-[600px] flex items-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="/images/hero.jpg"
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/images/video-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-500 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 md:mb-6 border border-amber-500/30 backdrop-blur-md">
              KODIERO BUSINESS CENTER • KONDELE, KISUMU
            </span>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-[1.1] font-serif">
              The Hub of <br/>
              <span className="text-amber-500 italic">Professional</span> Growth
            </h1>
            <p className="text-sm md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-xl">
              Starting, expanding, or relocating? Welcome to a modern commercial hub strategically located along the busy Kibos Road corridor. Designed for visibility, security, and success.
            </p>
            
            <div className="flex flex-row flex-wrap gap-3 md:gap-4">
              <Link
                to="/contact"
                className="flex items-center justify-center space-x-2 bg-amber-500 text-white px-6 md:px-10 py-3 md:py-5 rounded-xl text-sm md:text-lg font-bold hover:bg-amber-600 transition-all shadow-xl active:scale-95"
              >
                <span>Inquire Now</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/gallery"
                className="flex items-center justify-center px-6 md:px-10 py-3 md:py-5 rounded-xl text-sm md:text-lg font-bold text-white border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm group"
              >
                <PlayCircle size={20} className="mr-2 group-hover:text-amber-500 transition-colors" />
                Tour Hub
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Animated Collage */}
          <div className="hidden lg:flex relative h-[500px] w-full items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-full h-full p-4 relative">
              {indices.map((imgIdx, slotIdx) => (
                <motion.div
                  key={`slot-${slotIdx}`}
                  animate={{ 
                    y: slotIdx % 2 === 0 ? [0, -15, 0] : [0, 15, 0] 
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: slotIdx * 0.5
                  }}
                  className={`relative overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white/10 backdrop-blur-sm ${
                    slotIdx === 0 ? 'h-[220px]' : 
                    slotIdx === 1 ? 'h-[260px] mt-8' : 
                    slotIdx === 2 ? 'h-[260px] -mt-10' : 'h-[220px]'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={COLLAGE_IMAGES[imgIdx]}
                      src={COLLAGE_IMAGES[imgIdx]}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 1.2, ease: "anticipate" }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>
              ))}
              
              {/* Decorative Elements */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 border-2 border-amber-500/20 rounded-full flex items-center justify-center"
              >
                <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
              </motion.div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/5 blur-[100px] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center p-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
