
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
    <div className="relative h-[80vh] lg:h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background Pulse Lights */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 bg-amber-500/10 blur-[100px] rounded-full animate-pulse" />
      
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="/images/hero.jpg"
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/images/video-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 lg:via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Content Column - Centered on mobile with smaller fonts */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-500 text-[9px] md:text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/30 backdrop-blur-md">
              KODIERO BUSINESS CENTER • KONDELE
            </span>
            <h1 className="text-3xl md:text-7xl font-bold text-white mb-4 leading-tight font-serif">
              The Hub of <br className="hidden lg:block"/>
              <span className="text-amber-500 italic">Professional</span> Growth
            </h1>
            <p className="text-sm md:text-xl text-gray-400 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
              Modern commercial hub strategically located along the busy Kibos Road corridor. Designed for success.
            </p>
            
            <div className="flex flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                to="/contact"
                className="flex items-center justify-center space-x-2 bg-amber-500 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-amber-600 transition-all shadow-xl active:scale-95"
              >
                <span>Inquire</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/gallery"
                className="flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-white border border-white/10 hover:bg-white/5 transition-all backdrop-blur-md"
              >
                <PlayCircle size={16} className="mr-2" />
                Tour
              </Link>
            </div>
          </motion.div>

          {/* Collage - Hidden on mobile per request */}
          <div className="hidden lg:grid grid-cols-2 gap-4 h-[500px] relative">
            {indices.map((imgIdx, slotIdx) => (
              <motion.div
                key={`slot-${slotIdx}`}
                animate={{ y: slotIdx % 2 === 0 ? [0, -10, 0] : [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: slotIdx * 0.4 }}
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
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
