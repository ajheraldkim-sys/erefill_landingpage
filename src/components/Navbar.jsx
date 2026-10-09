import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, Droplet, Sparkles } from 'lucide-react';
import { EREFILL_CONFIG } from '../data/config';
import BrandLogo from './BrandLogo';

export default function Navbar({ onDownloadClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Screenshots', href: '#screenshots' },
    { label: 'User Roles', href: '#roles' },
    { label: 'Download', href: '#download' },
    { label: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'features', 'how-it-works', 'screenshots', 'roles', 'download', 'faq'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3' 
          : 'bg-white/60 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#hero" 
            className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg"
            aria-label="eRefill Home"
          >
            <BrandLogo size="md" showSubtitle={true} theme="light" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-slate-muted hover:text-navy-800 hover:bg-white/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-brand rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={EREFILL_CONFIG.downloadUrl}
              download={EREFILL_CONFIG.fileName}
              onClick={onDownloadClick}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand hover:bg-brand-dark text-white text-xs sm:text-sm font-bold shadow-md shadow-brand/25 hover:shadow-brand-glow transition-all"
            >
              <Download className="w-4 h-4 animate-bounce" />
              <span>Download APK</span>
              <span className="px-1.5 py-0.5 bg-white/20 rounded-md text-[10px] font-medium tracking-wide">
                {EREFILL_CONFIG.version}
              </span>
            </motion.a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-navy-800 hover:bg-slate-100 border border-slate-200 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-5 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-navy-800 hover:text-brand hover:bg-blue-50/70 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-slate-300">→</span>
                </a>
              ))}
              
              <div className="pt-3 mt-2 border-t border-slate-100">
                <a
                  href={EREFILL_CONFIG.downloadUrl}
                  download={EREFILL_CONFIG.fileName}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onDownloadClick?.();
                  }}
                  className="w-full py-3 rounded-xl bg-brand text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-brand/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download eRefill APK ({EREFILL_CONFIG.version})</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

