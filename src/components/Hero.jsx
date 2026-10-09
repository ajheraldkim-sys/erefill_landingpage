import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  ArrowRight, 
  ShieldCheck, 
  Smartphone, 
  Sparkles, 
  CheckCircle2, 
  Droplet,
  Truck,
  Layers,
  HelpCircle,
  TrendingUp,
  Activity
} from 'lucide-react';
import { EREFILL_CONFIG } from '../data/config';

export default function Hero({ onDownloadClick, onOpenInstallModal }) {
  const [stationOpen, setStationOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, CTAs, Trust Elements (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Pill Announcement Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand text-xs font-bold mb-6 shadow-xs"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              <span>Official Release • Android APK {EREFILL_CONFIG.version}</span>
              <span className="w-1 h-1 rounded-full bg-brand-300"></span>
              <span className="text-slate-muted font-normal">Free Download</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy-800 tracking-tight leading-[1.12] mb-6">
              Smart Water Refilling Management,{' '}
              <span className="relative inline-block text-brand">
                Made Simple.
                {/* Subtle curved underline accent */}
                <svg 
                  className="absolute left-0 -bottom-2 w-full h-2.5 text-brand/30" 
                  viewBox="0 0 100 12" 
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0,8 Q50,0 100,8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-muted leading-relaxed max-w-2xl mb-8">
              eRefill connects water refilling stations and customers seamlessly. Station owners effortlessly manage orders, track water and empty gallon inventory, and monitor debts—while customers order fresh water with doorstep delivery and digital payments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={EREFILL_CONFIG.downloadUrl}
                download={EREFILL_CONFIG.fileName}
                onClick={onDownloadClick}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-brand hover:bg-brand-dark text-white font-extrabold text-base shadow-xl shadow-brand/30 hover:shadow-brand-glow-lg transition-all"
              >
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                  <Download className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="leading-tight">Download eRefill APK</span>
                  <span className="text-[11px] font-normal text-white/80">
                    Latest {EREFILL_CONFIG.version} • {EREFILL_CONFIG.fileSize}
                  </span>
                </div>
              </motion.a>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-navy-800 font-bold text-sm border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all"
              >
                <span>Explore Features</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand" />
              </a>
            </div>

            {/* Trust and Compatibility Badges */}
            <div className="pt-6 border-t border-slate-200/80 w-full flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-muted font-medium">
              <div className="flex items-center gap-1.5 text-navy-800 font-semibold">
                <Smartphone className="w-4 h-4 text-brand" />
                <span>Android APK</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Version: <strong className="text-navy-800 font-bold">{EREFILL_CONFIG.version}</strong></span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand" />
                <span>Free Download</span>
              </div>
              <span className="text-slate-300">•</span>
              <button 
                type="button"
                onClick={onOpenInstallModal}
                className="text-brand hover:underline font-semibold flex items-center gap-1"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>How to Install</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Realistic Device Mockup & Floating Cards (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center relative"
          >
            
            {/* Ambient Background Glow Behind Phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 via-cyan-400/10 to-transparent rounded-full filter blur-3xl transform scale-90 -z-10" />

            {/* Floating Glassmorphic Stat Chip: Sales (Top Left) */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute -top-4 -left-8 bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-lg rounded-2xl p-3 items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand flex items-center justify-center font-bold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-muted tracking-wider">Today's Revenue</div>
                <div className="text-base font-extrabold text-navy-800">₱4,850.00</div>
                <div className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5">
                  <span>↑ 18% vs yesterday</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Glassmorphic Stat Chip: Offline SQLite Sync (Bottom Right) */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg rounded-2xl p-3 items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Activity className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-muted tracking-wider">Offline Sync</div>
                <div className="text-xs font-extrabold text-emerald-700">SQLite Active</div>
                <div className="text-[10px] font-medium text-slate-muted">Zero deadzones</div>
              </div>
            </motion.div>

            {/* Realistic Smartphone Chassis Frame */}
            <div className="relative w-full max-w-[320px] bg-slate-900 rounded-[44px] p-2.5 shadow-2xl ring-1 ring-slate-800/80">
              
              {/* Outer Phone Bezel Accent */}
              <div className="relative bg-slate-950 rounded-[38px] p-1 overflow-hidden ring-1 ring-slate-700/50">
                
                {/* Dynamic Island / Speaker Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
                  <div className="w-8 h-1 rounded-full bg-slate-800 ml-2" />
                </div>

                {/* Internal App Screen */}
                <div className="relative bg-surface-page rounded-[34px] overflow-hidden flex flex-col h-[580px] text-xs font-sans select-none">
                  
                  {/* Phone Status Bar */}
                  <div className="bg-brand text-white pt-2 px-6 pb-1.5 flex justify-between items-center text-[10px] font-semibold">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <span>4G</span>
                      <span className="w-2.5 h-1.5 border border-white rounded-[2px] relative inline-block">
                        <span className="absolute inset-0 bg-white" />
                      </span>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="bg-brand text-white px-4 py-3 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <img 
                          src="/assets/images/app-icon-192.png" 
                          alt="eRefill" 
                          className="w-7 h-7 rounded-lg object-contain shadow-xs border border-white/20 bg-white"
                        />
                        <div>
                          <div className="font-extrabold text-sm leading-tight">AquaPure Station</div>
                          <div className="text-[10px] text-white/80">Owner Dashboard</div>
                        </div>
                      </div>

                      {/* Interactive Open/Closed Toggle */}
                      <button 
                        type="button"
                        onClick={() => setStationOpen(!stationOpen)}
                        className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold tracking-wider transition-colors ${
                          stationOpen 
                            ? 'bg-emerald-400/30 text-emerald-100 border border-emerald-300/40' 
                            : 'bg-red-400/30 text-red-100 border border-red-300/40'
                        }`}
                        title="Click to toggle station status"
                      >
                        {stationOpen ? '● OPEN' : '○ CLOSED'}
                      </button>
                    </div>

                    {/* Quick Metric Pills */}
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="bg-white/10 backdrop-blur-xs rounded-lg p-2">
                        <div className="text-[9px] text-white/80 font-medium">TODAY'S REVENUE</div>
                        <div className="text-sm font-black text-white">₱4,850</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-xs rounded-lg p-2">
                        <div className="text-[9px] text-white/80 font-medium">GALLONS DELIVERED</div>
                        <div className="text-sm font-black text-white">138 Units</div>
                      </div>
                    </div>
                  </div>

                  {/* Screen Content Body */}
                  <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-slate-50/80">
                    
                    {/* Gallon Inventory Overview Widget */}
                    <div className="bg-white rounded-xl p-3 border border-slate-200/90 shadow-xs">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-bold text-[11px] text-navy-800">5-Gal Inventory</span>
                        <span className="text-[9px] font-bold text-brand">340 Total</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
                        <div className="bg-blue-50/70 p-1.5 rounded-md border border-blue-100/60">
                          <div className="text-[8px] text-slate-muted font-medium">Slim Ready</div>
                          <div className="font-black text-brand text-xs">62</div>
                        </div>
                        <div className="bg-emerald-50/70 p-1.5 rounded-md border border-emerald-100/60">
                          <div className="text-[8px] text-slate-muted font-medium">Round Ready</div>
                          <div className="font-black text-emerald-700 text-xs">54</div>
                        </div>
                        <div className="bg-amber-50/70 p-1.5 rounded-md border border-amber-100/60">
                          <div className="text-[8px] text-slate-muted font-medium">With Clients</div>
                          <div className="font-black text-amber-800 text-xs">194</div>
                        </div>
                      </div>
                    </div>

                    {/* Active Live Orders Section */}
                    <div>
                      <div className="flex justify-between items-center mb-2 px-0.5">
                        <span className="font-bold text-[11px] text-navy-800">Active Orders (3)</span>
                        <span className="text-[9px] font-bold text-brand">Dispatch All</span>
                      </div>

                      <div className="space-y-2">
                        {/* Order 1: Out for Delivery */}
                        <div className="bg-white rounded-xl p-2.5 border border-slate-200/90 shadow-xs">
                          <div className="flex justify-between items-start mb-1">
                            <div>
                              <div className="font-bold text-navy-800 text-[11px]">#ORD-1082 • Juan D.</div>
                              <div className="text-[9px] text-slate-muted">3x 5-gal Slim Alkaline</div>
                            </div>
                            <span className="px-1.5 py-0.5 bg-blue-50 text-brand rounded font-bold text-[8px] border border-blue-200">
                              Out for Delivery
                            </span>
                          </div>
                          <div className="flex justify-between items-center pt-1.5 mt-1 border-t border-slate-100 text-[9px]">
                            <span className="text-slate-muted">ETA 6 mins • GCash</span>
                            <span className="font-bold text-navy-800">₱135.00</span>
                          </div>
                        </div>

                        {/* Order 2: Dispensing */}
                        <div className="bg-white rounded-xl p-2.5 border border-slate-200/90 shadow-xs">
                          <div className="flex justify-between items-start mb-1">
                            <div>
                              <div className="font-bold text-navy-800 text-[11px]">#ORD-1083 • Elena S.</div>
                              <div className="text-[9px] text-slate-muted">2x 5-gal Round Purified</div>
                            </div>
                            <span className="px-1.5 py-0.5 bg-amber-50 text-amber-700 rounded font-bold text-[8px] border border-amber-200">
                              Dispensing
                            </span>
                          </div>
                          <div className="flex justify-between items-center pt-1.5 mt-1 border-t border-slate-100 text-[9px]">
                            <span className="text-brand font-semibold">+ Dispatch Delivery</span>
                            <span className="font-bold text-navy-800">₱70.00</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Phone Bottom Tab Bar */}
                  <div className="bg-white border-t border-slate-200/90 px-4 py-2 flex justify-between items-center text-[9px] text-slate-muted">
                    <button 
                      onClick={() => setActiveTab('dashboard')} 
                      className={`flex flex-col items-center gap-0.5 font-bold ${activeTab === 'dashboard' ? 'text-brand' : ''}`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Home</span>
                    </button>
                    <button 
                      onClick={() => setActiveTab('orders')} 
                      className={`flex flex-col items-center gap-0.5 font-bold ${activeTab === 'orders' ? 'text-brand' : ''}`}
                    >
                      <Droplet className="w-3.5 h-3.5" />
                      <span>Orders</span>
                    </button>
                    <button 
                      onClick={() => setActiveTab('inventory')} 
                      className={`flex flex-col items-center gap-0.5 font-bold ${activeTab === 'inventory' ? 'text-brand' : ''}`}
                    >
                      <Truck className="w-3.5 h-3.5" />
                      <span>Delivery</span>
                    </button>
                  </div>

                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

