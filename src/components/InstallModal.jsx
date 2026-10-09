import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ShieldCheck, Check, Smartphone } from 'lucide-react';
import { EREFILL_CONFIG, INSTALL_STEPS } from '../data/config';

export default function InstallModal({ isOpen, onClose, onDownloadClick }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 shadow-2xl z-10 my-8"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-navy-800 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand bg-brand-50 px-2.5 py-1 rounded-full">
              Installation Guide
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-navy-800 mt-2 mb-1">
              How to Install eRefill APK
            </h3>
            <p className="text-xs text-slate-muted">
              Follow these simple steps to install the official package on any Android device.
            </p>
          </div>

          {/* 5 Steps List */}
          <div className="space-y-3.5 mb-8">
            {INSTALL_STEPS.map((s) => (
              <div key={s.step} className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-xl bg-brand text-white flex items-center justify-center font-black text-xs flex-shrink-0 shadow-xs">
                  {s.step}
                </div>
                <div>
                  <div className="text-sm font-bold text-navy-800">{s.title}</div>
                  <div className="text-xs text-slate-muted leading-relaxed mt-0.5">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Android Security Notice Box */}
          <div className="bg-blue-50/80 rounded-2xl p-4 border border-blue-200/80 mb-6 text-xs text-navy-800">
            <div className="flex items-center gap-2 font-bold mb-1 text-brand">
              <ShieldCheck className="w-4 h-4" />
              <span>Why does Android prompt "Allow from this source"?</span>
            </div>
            <p className="text-slate-muted leading-relaxed text-[11px]">
              Because you are downloading directly from the official website rather than Google Play, Android asks for your confirmation. eRefill is completely safe and virus-free.
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <a
              href={EREFILL_CONFIG.downloadUrl}
              download={EREFILL_CONFIG.fileName}
              onClick={() => {
                onClose();
                onDownloadClick?.();
              }}
              className="flex-1 py-3.5 rounded-xl bg-brand hover:bg-brand-dark text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-brand/20 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download APK Now</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-800 text-xs sm:text-sm font-bold transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

