import React from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles, Smartphone, ShieldCheck } from 'lucide-react';
import { EREFILL_CONFIG } from '../data/config';

export default function FinalCtaSection({ onDownloadClick }) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-brand text-white">
      {/* Decorative ambient water glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-xs text-white text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Start Today • Zero Setup Fee</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight max-w-3xl mx-auto">
          Manage your water refilling station smarter with eRefill.
        </h2>

        <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto mb-10">
          Join station owners and households across the region. Track gallon inventory, manage customer orders, and request doorstep water refills with total peace of mind.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href={EREFILL_CONFIG.downloadUrl}
            download={EREFILL_CONFIG.fileName}
            onClick={onDownloadClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-2xl bg-white hover:bg-slate-50 text-navy-800 font-extrabold text-base shadow-2xl transition-all"
          >
            <Download className="w-5 h-5 text-brand" />
            <span>Download eRefill APK</span>
          </motion.a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/80 font-medium">
          <div className="flex items-center gap-1.5">
            <Smartphone className="w-4 h-4" />
            <span>Android 8.0+ Compatible</span>
          </div>
          <span className="opacity-40">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified Official Build</span>
          </div>
        </div>

      </div>
    </section>
  );
}

