import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Logo className="mb-6" />
            <p className="text-brand-muted text-sm leading-relaxed mb-6">
              Empowering leaders, parents, and partners to navigate emotions with clarity, confidence, and compassion.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-brand-muted hover:text-brand-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="text-brand-muted hover:text-brand-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-brand-muted hover:text-brand-accent text-sm transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-brand-muted hover:text-brand-accent text-sm transition-colors">Our Story</Link></li>
              <li><Link to="/services" className="text-brand-muted hover:text-brand-accent text-sm transition-colors">Services</Link></li>
              <li><Link to="/testimonials" className="text-brand-muted hover:text-brand-accent text-sm transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-brand-muted hover:text-brand-accent text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal / Info */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Information</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-brand-muted hover:text-brand-accent text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-brand-muted hover:text-brand-accent text-sm transition-colors">Terms of Service</Link></li>
              <li><Link to="/faq" className="text-brand-muted hover:text-brand-accent text-sm transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-brand-muted text-sm">
                <Mail size={16} className="mt-1 text-brand-accent" />
                <span>hello@mubelleympathy.com</span>
              </li>
              <li className="flex items-start gap-3 text-brand-muted text-sm">
                <Phone size={16} className="mt-1 text-brand-accent" />
                <span>+234 706 778 4443</span>
              </li>
              <li className="flex items-start gap-3 text-brand-muted text-sm">
                <MapPin size={16} className="mt-1 text-brand-accent" />
                <span>House 2, FHA Behind Polaris Bank,<br/>Lugbe, Abuja, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-brand-muted text-xs">
            &copy; {currentYear} Mubell Empathy Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;