
import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#FDFCF0] flex flex-col items-center justify-center">
      <div className="relative">
        {/* Outer Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border-4 border-amber-500/10 border-t-amber-500 rounded-full"
        />
        
        {/* Inner Logo pulsing */}
        <motion.div
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img src="/images/logo.jpg" alt="Logo" className="w-12 h-12 rounded-lg shadow-sm" />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <span className="text-xl font-serif font-bold text-slate-900 block">KODIERO</span>
        <span className="text-[10px] tracking-[0.3em] font-extrabold uppercase text-amber-600">Investments</span>
      </motion.div>
    </div>
  );
};

export default Loader;
