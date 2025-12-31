
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';
import { NAV_ITEMS, COLORS } from '../constants';

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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-amber-500 p-2 rounded-lg">
              <Building2 className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold leading-none ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
                KODIERO
              </span>
              <span className={`text-[10px] tracking-widest font-semibold uppercase ${isScrolled ? 'text-amber-600' : 'text-amber-500'}`}>
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
                className={`text-sm font-medium hover:text-amber-500 transition-colors ${
                  location.pathname === item.path 
                    ? 'text-amber-500' 
                    : isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-amber-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-600 transition-all shadow-lg hover:shadow-amber-500/20"
            >
              Inquire Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={isScrolled ? 'text-gray-900' : 'text-white'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl transition-all duration-300 transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-medium px-4 py-2 rounded-lg ${
                location.pathname === item.path ? 'bg-amber-50 text-amber-600' : 'text-gray-700'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-amber-500 text-white text-center py-3 rounded-lg font-bold shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
