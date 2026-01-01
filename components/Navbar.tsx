
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-2 left-2 right-2 md:top-4 md:left-4 md:right-4 z-50 transition-all duration-500 rounded-2xl md:rounded-3xl ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl py-1 md:py-2' 
          : 'bg-black/20 backdrop-blur-sm border border-white/10 py-2 md:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
            <motion.img 
              whileHover={{ rotate: 5, scale: 1.05 }}
              src="/images/logo.jpg" 
              alt="Kodiero Logo" 
              className={`transition-all duration-300 ${isScrolled ? 'h-8 md:h-10' : 'h-10 md:h-14'} rounded-lg shadow-lg border border-white/20`}
            />
            <div className="flex flex-col">
              <span className={`text-sm md:text-xl font-bold leading-none tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
                KODIERO
              </span>
              <span className={`text-[8px] md:text-[10px] tracking-widest font-extrabold uppercase ${isScrolled ? 'text-amber-600' : 'text-amber-500'}`}>
                Investments
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold tracking-wide hover:text-amber-500 transition-all relative group ${
                  location.pathname === item.path 
                    ? 'text-amber-500' 
                    : isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-amber-500 text-white px-6 py-2.5 rounded-2xl text-sm font-bold hover:bg-amber-600 transition-all shadow-lg hover:shadow-amber-500/40 active:scale-95"
            >
              Inquire Now
            </Link>
          </div>

          {/* Mobile Toggle - Smaller for more desktop feel */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-1.5 rounded-xl transition-colors ${isScrolled ? 'text-gray-900 hover:bg-black/5' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - More compact */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden bg-white/98 backdrop-blur-2xl rounded-2xl mx-2 mt-2 shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className="px-4 py-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-bold px-4 py-2.5 rounded-xl transition-all ${
                    location.pathname === item.path ? 'bg-amber-500 text-white' : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-amber-500 text-white text-center py-3 rounded-xl font-bold text-sm"
              >
                Inquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
