import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav 
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-brand-darker/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                  location.pathname === item.path ? 'text-brand-accent' : 'text-brand-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="primary" to="/contact" className="ml-4 py-2 px-5 text-sm">
              Book a Call
            </Button>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden relative z-50 text-white focus:outline-none hover:text-brand-accent transition-colors p-2"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer (Left Fixed) */}
      <div 
        className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-brand-darker z-[60] transform transition-transform duration-300 ease-in-out shadow-2xl border-r border-white/10 md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-brand-darker">
          <Logo className="scale-90 origin-left" />
          <button 
            onClick={() => setIsOpen(false)}
            className="text-brand-muted hover:text-white transition-colors p-2 focus:outline-none"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col p-6 gap-6 overflow-y-auto flex-grow bg-brand-darker">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`text-xl font-serif transition-colors ${
                location.pathname === item.path ? 'text-brand-accent' : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="mt-auto pt-8 border-t border-white/5">
            <Button variant="primary" to="/contact" className="w-full justify-center text-base py-4 shadow-lg">
              Book a Discovery Call
            </Button>
            <p className="text-xs text-brand-muted text-center mt-6">
              © {new Date().getFullYear()} Mubell Empathy Academy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;