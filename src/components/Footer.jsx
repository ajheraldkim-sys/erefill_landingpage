import React from 'react';
import { Download, ShieldCheck, Heart } from 'lucide-react';
import { EREFILL_CONFIG } from '../data/config';
import BrandLogo from './BrandLogo';

export default function Footer({ onOpenInstallModal, onDownloadClick }) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="md" showSubtitle={true} theme="dark" />
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Smart Order and Inventory Manager for Water Refilling Stations & Customers. Built for seamless operations, container tracking, and doorstep fulfillment.
            </p>

            <div className="flex items-center gap-2 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-brand-400" />
              <span>Official Release • SHA-256 Verified Official Build</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About eRefill</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Key Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
            </ul>
          </div>

          {/* Product & Roles */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">Ecosystem</h4>
            <ul className="space-y-2.5">
              <li><a href="#roles" className="hover:text-white transition-colors">Station Owner</a></li>
              <li><a href="#roles" className="hover:text-white transition-colors">Customer & Household</a></li>
              <li><a href="#screenshots" className="hover:text-white transition-colors">App Previews</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Download & Specs */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">Direct Download</h4>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href={EREFILL_CONFIG.downloadUrl} 
                  download={EREFILL_CONFIG.fileName}
                  onClick={onDownloadClick}
                  className="text-brand-400 hover:text-brand-300 font-bold flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download APK</span>
                </a>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={onOpenInstallModal}
                  className="hover:text-white transition-colors text-left"
                >
                  Installation Guide
                </button>
              </li>
              <li className="pt-2 text-slate-400">
                <span>Release: <strong className="text-white">{EREFILL_CONFIG.releaseDate}</strong></span>
              </li>
              <li className="text-slate-400">
                <span>License: <strong className="text-white">Free Download</strong></span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div>
            © {new Date().getFullYear()} eRefill. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built with care for water refilling station communities</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

