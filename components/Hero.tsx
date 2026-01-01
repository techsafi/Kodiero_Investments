
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[85vh] md:h-screen min-h-[550px] flex items-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="/images/hero.jpg"
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/images/video-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-500 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 md:mb-6 border border-amber-500/30 backdrop-blur-md">
              KODIERO BUSINESS CENTER • KONDELE, KISUMU
            </span>
            <h1 className="text-3xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight font-serif">
              The Hub of <br/>
              <span className="text-amber-500 italic">Professional</span> Growth
            </h1>
            <p className="text-sm md:text-xl text-gray-300 mb-6 md:mb-10 leading-relaxed max-w-xl">
              Starting, expanding, or relocating? Welcome to a modern commercial hub strategically located along the busy Kibos Road corridor. Designed for visibility, security, and success.
            </p>
            
            <div className="flex flex-row gap-3 md:gap-4">
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
                Tour
              </Link>
            </div>
          </motion.div>
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
