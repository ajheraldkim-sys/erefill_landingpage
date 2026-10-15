import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  ShieldCheck, 
  Copy, 
  Check, 
  HelpCircle, 
  Smartphone, 
  Calendar, 
  HardDrive, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { EREFILL_CONFIG, INSTALL_STEPS } from '../data/config';

export default function DownloadSection({ onDownloadClick, onOpenInstallModal, onShowToast }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const fullUrl = window.location.origin + EREFILL_CONFIG.downloadUrl;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullUrl).then(() => {
        setCopied(true);
        onShowToast?.("Direct APK download link copied to clipboard!");
        setTimeout(() => setCopied(false), 2500);
      });
    } else {
      onShowToast?.("Direct link: " + fullUrl);
    }
  };

  const specs = [
    { label: "Release Date", value: EREFILL_CONFIG.releaseDate, icon: Calendar },
    { label: "Compatibility", value: EREFILL_CONFIG.minAndroid, icon: Smartphone },
    { label: "Platform", value: "Android (ARM64 & ARMv7)", icon: Smartphone },
    { label: "Format", value: "APK Package", icon: HardDrive },
    { label: "License", value: "Free Download", icon: ShieldCheck },
    { label: "Package ID", value: EREFILL_CONFIG.packageId, icon: Layers },
  ];

  return (
    <section id="download" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Central High-Impact Download Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-[36px] p-8 sm:p-14 border border-slate-200/90 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Glow inside card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-50 rounded-full blur-3xl -z-10 opacity-70" />

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand text-xs font-bold uppercase tracking-wider mb-4">
              Official Android Release
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-800 tracking-tight mb-4">
              Ready to simplify your water refilling operations?
            </h2>

            <p className="text-base text-slate-muted leading-relaxed">
              Download the official eRefill APK directly to your Android device and take full command of orders, empty gallon stock, and delivery dispatches.
            </p>
          </div>

          {/* Primary High-Conversion Download Button */}
          <div className="flex flex-col items-center justify-center gap-4 mb-12">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={EREFILL_CONFIG.downloadUrl}
              download={EREFILL_CONFIG.fileName}
              onClick={onDownloadClick}
              className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 rounded-2xl bg-brand hover:bg-brand-dark text-white font-black text-lg shadow-2xl shadow-brand/35 hover:shadow-brand-glow-lg transition-all min-w-[300px]"
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Download className="w-6 h-6 text-white group-hover:translate-y-0.5 transition-transform animate-bounce" />
              </div>
              <div className="text-left">
                <div className="leading-tight">Download eRefill APK</div>
                <div className="text-xs font-normal text-white/85">
                  Official Package • 100% Free Download
                </div>
              </div>
            </motion.a>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Release • Clean & Verified • 100% Free Download</span>
            </div>
          </div>

          {/* Detailed APK Specifications Grid */}
          <div className="bg-slate-50/90 rounded-3xl p-6 sm:p-8 border border-slate-200/80 mb-12">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-muted mb-4 text-center sm:text-left">
              Package Specifications
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {specs.map((s, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {s.label}
                  </span>
                  <span className="text-sm font-extrabold text-navy-800 mt-0.5 truncate">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Verified Hash Row */}
            <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 overflow-hidden">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-bold text-navy-800 shrink-0">SHA-256 Checksum:</span>
                <span className="font-mono text-[11px] text-slate-500 truncate select-all">{EREFILL_CONFIG.sha256}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (navigator.clipboard) {
                    navigator.clipboard.writeText(EREFILL_CONFIG.sha256);
                    onShowToast?.("SHA-256 checksum copied to clipboard!");
                  }
                }}
                className="inline-flex items-center gap-1 font-bold text-brand hover:underline shrink-0 text-xs self-start sm:self-auto cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Hash</span>
              </button>
            </div>
          </div>

          {/* Quick 5-Step Installation Flow */}
          <div className="border-t border-slate-100 pt-10">
            <h3 className="text-center font-extrabold text-sm uppercase tracking-wider text-navy-800 mb-6">
              Quick Installation Steps
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-bold text-navy-800 mb-8">
              <span className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-brand text-white flex items-center justify-center text-[10px]">1</span>
                Download
              </span>
              <span className="text-brand font-black">→</span>

              <span className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-brand text-white flex items-center justify-center text-[10px]">2</span>
                Open APK
              </span>
              <span className="text-brand font-black">→</span>

              <span className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-brand text-white flex items-center justify-center text-[10px]">3</span>
                Allow installation
              </span>
              <span className="text-brand font-black">→</span>

              <span className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-brand text-white flex items-center justify-center text-[10px]">4</span>
                Install
              </span>
              <span className="text-brand font-black">→</span>

              <span className="px-3 py-1.5 rounded-full bg-brand-50 border border-brand text-brand flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-brand text-white flex items-center justify-center text-[10px]">5</span>
                Start using eRefill
              </span>
            </div>

            {/* Helper actions: Modal & Copy Link */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <button
                type="button"
                onClick={onOpenInstallModal}
                className="inline-flex items-center gap-1.5 font-bold text-brand hover:underline"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Step-by-step Installation Guide</span>
              </button>

              <span className="text-slate-300">•</span>

              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 font-bold text-slate-muted hover:text-navy-800 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Link Copied!" : "Copy Direct Download Link"}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

