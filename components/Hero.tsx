
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-slate-900">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          alt="Kodiero Business Center" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-wider mb-6 border border-amber-500/30">
              Modern Office & Shop Spaces
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Grow Your Business at <span className="text-amber-500">Kodiero</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              Strategically located in Kondele, Kisumu, offering premium, affordable, and secure spaces tailored for success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/spaces"
                className="flex items-center justify-center space-x-2 bg-amber-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-600 transition-all shadow-xl hover:shadow-amber-500/30 transform hover:-translate-y-1"
              >
                <span>View Available Spaces</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white border-2 border-white/30 hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm"
              >
                Inquire Now
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
