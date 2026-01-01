
import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider: React.FC<{ light?: boolean }> = ({ light = false }) => {
  return (
    <div className="relative w-full h-px overflow-hidden max-w-7xl mx-auto px-4">
      <div className={`w-full h-full ${light ? 'bg-white/10' : 'bg-slate-200'}`} />
      <motion.div
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"
      />
    </div>
  );
};

export default SectionDivider;
