import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  Droplet, 
  FileText, 
  MapPin, 
  ShoppingCart, 
  Navigation,
  CheckCircle2, 
  Download,
  Clock,
  PhoneCall,
  Check,
  Truck,
  MessageSquare,
  Send,
  Camera
} from 'lucide-react';
import { APP_SCREENS, EREFILL_CONFIG } from '../data/config';

export default function InteractiveAppShowcase({ onDownloadClick }) {
  const [activeScreenId, setActiveScreenId] = useState('dashboard');

  const currentScreen = APP_SCREENS.find(s => s.id === activeScreenId) || APP_SCREENS[0];

  const tabs = [
    { id: 'dashboard', label: 'Owner Dashboard', icon: Layers },
    { id: 'orders', label: 'Orders Queue', icon: Droplet },
    { id: 'inventory', label: 'Gallon Inventory', icon: Layers },
    { id: 'credits', label: 'Customer Utang Ledger', icon: FileText },
    { id: 'customer_order', label: 'Customer Ordering', icon: ShoppingCart },
    { id: 'customer_tracking', label: 'Live Delivery Tracker', icon: MapPin },
    { id: 'rider_view', label: 'Rider Dispatch', icon: Truck },
    { id: 'chat_system', label: 'In-App Live Chat', icon: MessageSquare },
  ];

  return (
    <section id="screenshots" className="py-20 md:py-28 bg-slate-50/70 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand text-xs font-bold uppercase tracking-wider mb-3">
            App Previews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 tracking-tight mb-4">
            Experience the Real eRefill Interface
          </h2>
          <p className="text-base sm:text-lg text-slate-muted leading-relaxed">
            Explore authentic views of the eRefill mobile app designed exclusively for water station owners and customer doorstep refills.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeScreenId === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveScreenId(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  isActive 
                    ? 'bg-brand text-white shadow-md shadow-brand/25' 
                    : 'bg-white text-slate-muted hover:text-navy-800 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Showcase Grid: Device Frame + Detailed Feature Specs */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left / Mockup Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[310px] bg-slate-900 rounded-[42px] p-2.5 shadow-2xl ring-1 ring-slate-800">
              <div className="bg-slate-950 rounded-[36px] p-1 overflow-hidden">
                
                {/* Dynamic Screen Container */}
                <div className="bg-surface-page rounded-[32px] overflow-hidden flex flex-col h-[540px] text-xs font-sans relative select-none">
                  
                  {/* Status Bar */}
                  <div className="bg-brand text-white pt-2 px-6 pb-1.5 flex justify-between items-center text-[10px] font-semibold">
                    <span>9:41</span>
                    <span>4G • 98%</span>
                  </div>

                  {/* Dynamic App Screens via AnimatePresence */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeScreenId}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="flex-1 flex flex-col overflow-hidden"
                    >
                      {/* Screen 1: Dashboard (Owner) */}
                      {activeScreenId === 'dashboard' && (
                        <div className="flex-1 flex flex-col">
                          <div className="bg-brand text-white p-3.5 shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
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
                            <div className="grid grid-cols-2 gap-2 mt-2">
                              <div className="bg-white/10 rounded-lg p-2">
                                <div className="text-[8px] text-white/80">TODAY'S SALES</div>
                                <div className="text-sm font-black">₱4,850</div>
                              </div>
                              <div className="bg-white/10 rounded-lg p-2">
                                <div className="text-[8px] text-white/80">COMPLETED</div>
                                <div className="text-sm font-black">34 Orders</div>
                              </div>
                            </div>
                          </div>

                          <div className="flex-1 p-3 space-y-2.5 overflow-y-auto bg-slate-50">
                            <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                              <div className="text-[10px] font-bold text-navy-800 mb-1">Station Status</div>
                              <div className="flex justify-between text-[9px] text-slate-muted">
                                <span className="text-emerald-700 font-bold">● Open & Accepting Orders</span>
                                <span className="text-brand font-bold">Tap to toggle</span>
                              </div>
                            </div>

                            <div className="text-[10px] font-bold text-navy-800">Recent Transactions</div>
                            <div className="bg-white p-2.5 rounded-xl border border-slate-200 space-y-1.5">
                              <div className="flex justify-between text-[10px] font-bold">
                                <span>#ORD-1082 (Juan D.)</span>
                                <span className="text-emerald-600">₱135</span>
                              </div>
                              <div className="text-[8px] text-slate-muted">3x Slim Alkaline • GCash Paid</div>
                            </div>
                            <div className="bg-white p-2.5 rounded-xl border border-slate-200 space-y-1.5">
                              <div className="flex justify-between text-[10px] font-bold">
                                <span>#ORD-1081 (Maria S.)</span>
                                <span className="text-emerald-600">₱70</span>
                              </div>
                              <div className="text-[8px] text-slate-muted">2x Round Purified • COD Completed</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Screen 2: Orders Queue (Owner) */}
                      {activeScreenId === 'orders' && (
                        <div className="flex-1 flex flex-col">
                          <div className="bg-brand text-white p-3.5 shadow-sm">
                            <div className="flex justify-between items-center">
                              <span className="font-extrabold text-sm">Live Orders Queue</span>
                              <span className="bg-white text-brand px-2 py-0.5 rounded-md text-[9px] font-bold">+ New Walk-in</span>
                            </div>
                            <div className="text-[10px] text-white/80">Real-time Order Processing</div>
                          </div>

                          <div className="flex-1 p-3 space-y-2 overflow-y-auto bg-slate-50">
                            <div className="bg-white p-2.5 rounded-xl border-l-4 border-l-brand border border-slate-200">
                              <div className="flex justify-between items-start">
                                <span className="font-bold text-[10px]">#ORD-1085 • Brgy. Health Center</span>
                                <span className="bg-amber-100 text-amber-800 text-[8px] font-bold px-1.5 py-0.5 rounded">Pending Dispense</span>
                              </div>
                              <div className="text-[9px] text-slate-muted mt-1">10x 5-gal Slim Purified</div>
                              <div className="flex justify-between items-center mt-2 pt-1 border-t border-slate-100">
                                <span className="text-[9px] text-brand font-bold">Mark Dispensing →</span>
                                <span className="font-bold text-[10px]">₱350</span>
                              </div>
                            </div>

                            <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                              <div className="flex justify-between items-start">
                                <span className="font-bold text-[10px]">#ORD-1082 • Juan Dela Cruz</span>
                                <span className="bg-blue-100 text-brand text-[8px] font-bold px-1.5 py-0.5 rounded">Out for Delivery</span>
                              </div>
                              <div className="text-[9px] text-slate-muted mt-1">3x Slim Alkaline • GCash Paid</div>
                              <div className="flex justify-between items-center mt-2 pt-1 border-t border-slate-100">
                                <span className="text-[8px] text-slate-muted">📍 Mabini St.</span>
                                <span className="font-bold text-[10px]">₱135</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Screen 3: Gallon Inventory (Owner) */}
                      {activeScreenId === 'inventory' && (
                        <div className="flex-1 flex flex-col">
                          <div className="bg-brand text-white p-3.5 shadow-sm">
                            <div className="flex justify-between items-center">
                              <span className="font-extrabold text-sm">Gallon Inventory</span>
                              <span className="bg-white text-brand px-2 py-0.5 rounded-md text-[9px] font-bold">+ Log Stock</span>
                            </div>
                            <div className="text-[10px] text-white/80">Slim & Round Jug Tracking</div>
                          </div>

                          <div className="flex-1 p-3 space-y-3 overflow-y-auto bg-slate-50">
                            <div className="bg-white p-3 rounded-xl border border-slate-200">
                              <div className="flex justify-between font-bold text-[10px] text-navy-800 mb-2">
                                <span>5-GAL SLIM CONTAINERS</span>
                                <span className="text-brand">220 Units</span>
                              </div>
                              <div className="grid grid-cols-3 gap-1 text-center">
                                <div className="bg-slate-100 p-1.5 rounded">
                                  <div className="text-[8px] text-slate-muted">Available</div>
                                  <div className="font-black text-emerald-700 text-xs">145</div>
                                </div>
                                <div className="bg-slate-100 p-1.5 rounded">
                                  <div className="text-[8px] text-slate-muted">With Client</div>
                                  <div className="font-black text-brand text-xs">63</div>
                                </div>
                                <div className="bg-slate-100 p-1.5 rounded">
                                  <div className="text-[8px] text-slate-muted">Washing</div>
                                  <div className="font-black text-amber-700 text-xs">12</div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white p-3 rounded-xl border border-slate-200">
                              <div className="flex justify-between font-bold text-[10px] text-navy-800 mb-2">
                                <span>5-GAL ROUND CONTAINERS</span>
                                <span className="text-brand">180 Units</span>
                              </div>
                              <div className="grid grid-cols-3 gap-1 text-center">
                                <div className="bg-slate-100 p-1.5 rounded">
                                  <div className="text-[8px] text-slate-muted">Available</div>
                                  <div className="font-black text-emerald-700 text-xs">112</div>
                                </div>
                                <div className="bg-slate-100 p-1.5 rounded">
                                  <div className="text-[8px] text-slate-muted">With Client</div>
                                  <div className="font-black text-brand text-xs">58</div>
                                </div>
                                <div className="bg-slate-100 p-1.5 rounded">
                                  <div className="text-[8px] text-slate-muted">Washing</div>
                                  <div className="font-black text-amber-700 text-xs">10</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Screen 4: Customer Utang / Debt Ledger (Owner) */}
                      {activeScreenId === 'credits' && (
                        <div className="flex-1 flex flex-col">
                          <div className="bg-brand text-white p-3.5 shadow-sm">
                            <div className="flex justify-between items-center">
                              <span className="font-extrabold text-sm">Customer Debt Ledger</span>
                              <span className="bg-white text-brand px-2 py-0.5 rounded-md text-[9px] font-bold">+ Record Utang</span>
                            </div>
                            <div className="text-[10px] text-white/80">Track Credits & Balances Offline</div>
                          </div>

                          <div className="flex-1 p-3 space-y-2.5 overflow-y-auto bg-slate-50">
                            <div className="bg-white p-3 rounded-xl border border-slate-200">
                              <div className="flex justify-between text-[10px] font-bold mb-1">
                                <span className="text-navy-800">TOTAL OUTSTANDING</span>
                                <span className="text-brand font-black">₱1,450.00</span>
                              </div>
                              <div className="text-[8px] text-slate-muted">Across 8 regular customers</div>
                            </div>

                            <div className="text-[10px] font-bold text-navy-800">Unpaid Balances</div>
                            
                            <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                              <div className="flex justify-between font-bold text-[10px]">
                                <span>Aling Nena's Sari-Sari</span>
                                <span className="text-red-600 font-black">₱350.00</span>
                              </div>
                              <div className="text-[8px] text-slate-muted">10 gallons unpaid • Oct 04</div>
                              <div className="mt-2 flex gap-1.5">
                                <button className="flex-1 py-1 bg-brand text-white font-bold rounded text-[8px]">Settle Payment</button>
                                <button className="flex-1 py-1 bg-slate-100 text-navy-800 font-bold rounded text-[8px]">View History</button>
                              </div>
                            </div>

                            <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                              <div className="flex justify-between font-bold text-[10px]">
                                <span>Barangay Tanod Post</span>
                                <span className="text-amber-700 font-black">₱140.00</span>
                              </div>
                              <div className="text-[8px] text-slate-muted">4 gallons unpaid • Oct 08</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Screen 5: Customer Ordering (Customer) */}
                      {activeScreenId === 'customer_order' && (
                        <div className="flex-1 flex flex-col">
                          <div className="bg-brand text-white p-3.5 shadow-sm">
                            <div className="flex items-center gap-2">
                              <img 
                                src="/assets/images/app-icon-192.png" 
                                alt="eRefill" 
                                className="w-7 h-7 rounded-lg object-contain shadow-xs border border-white/20 bg-white"
                              />
                              <div>
                                <span className="font-extrabold text-sm leading-tight block">Hello, Juan 👋</span>
                                <div className="text-[10px] text-white/80">Order Clean Drinking Water</div>
                              </div>
                            </div>
                          </div>

                          <div className="flex-1 p-3 space-y-2.5 overflow-y-auto bg-slate-50">
                            <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-200 flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center font-bold text-xs">💧</div>
                              <div>
                                <div className="font-bold text-[10px] text-navy-800">AquaPure Station (0.6 km)</div>
                                <div className="text-[8px] text-emerald-700 font-bold">● Open • Fast Delivery</div>
                              </div>
                            </div>

                            <div className="text-[10px] font-bold text-navy-800">Select Refill Type</div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-white p-2.5 rounded-xl border-2 border-brand">
                                <div className="text-[9px] font-black text-brand">Alkaline Refill</div>
                                <div className="text-xs font-black text-navy-800 my-0.5">₱45 / gal</div>
                                <div className="text-[8px] text-slate-muted">pH 8.5+ Ionized</div>
                                <div className="mt-2 bg-brand text-white text-center py-1 rounded text-[8px] font-bold">Selected (3)</div>
                              </div>
                              <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                                <div className="text-[9px] font-black text-navy-800">Purified Water</div>
                                <div className="text-xs font-black text-navy-800 my-0.5">₱30 / gal</div>
                                <div className="text-[8px] text-slate-muted">16-Stage Filter</div>
                                <div className="mt-2 bg-slate-100 text-navy-800 text-center py-1 rounded text-[8px] font-bold">+ Select</div>
                              </div>
                            </div>

                            <div className="bg-white p-2 rounded-xl border border-slate-200 flex justify-between items-center text-[9px]">
                              <span className="text-slate-muted font-medium">Payment:</span>
                              <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">GCash (PayMongo)</span>
                            </div>

                            <button className="w-full py-2 bg-brand text-white font-extrabold rounded-xl text-[10px] shadow-sm">
                              Place Order • ₱135.00
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Screen 6: Customer Delivery Tracker (Customer) */}
                      {activeScreenId === 'customer_tracking' && (
                        <div className="flex-1 flex flex-col">
                          <div className="bg-brand text-white p-3.5 shadow-sm">
                            <span className="font-extrabold text-sm">Track Order #ORD-1082</span>
                            <div className="text-[10px] text-white/80">AquaPure Station Delivery</div>
                          </div>

                          <div className="flex-1 p-3 space-y-3 overflow-y-auto bg-slate-50">
                            {/* Live Status Badge */}
                            <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
                              <div className="text-[9px] uppercase font-bold text-brand tracking-wider">CURRENT STATUS</div>
                              <div className="font-black text-sm text-navy-800 mt-0.5">Out for Delivery</div>
                              <div className="text-[9px] text-slate-muted mt-1">Estimated delivery in 8 minutes</div>
                            </div>

                            {/* 4-Step Progress Chain */}
                            <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-2">
                              <div className="flex items-center gap-2 text-[9px] font-bold text-emerald-700">
                                <Check className="w-3.5 h-3.5 bg-emerald-100 text-emerald-700 rounded-full p-0.5" />
                                <span>Order Placed (9:15 AM)</span>
                              </div>
                              <div className="flex items-center gap-2 text-[9px] font-bold text-emerald-700">
                                <Check className="w-3.5 h-3.5 bg-emerald-100 text-emerald-700 rounded-full p-0.5" />
                                <span>Dispensed & Sanitized (9:25 AM)</span>
                              </div>
                              <div className="flex items-center gap-2 text-[9px] font-bold text-brand">
                                <Clock className="w-3.5 h-3.5 bg-blue-100 text-brand rounded-full p-0.5 animate-spin" />
                                <span>On the way to your doorstep</span>
                              </div>
                              <div className="flex items-center gap-2 text-[9px] font-bold text-slate-300">
                                <span className="w-3.5 h-3.5 border border-slate-300 rounded-full inline-block" />
                                <span>Delivered & Receipt</span>
                              </div>
                            </div>

                            {/* Drop-off Details */}
                            <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-[9px] space-y-1">
                              <div className="font-bold text-navy-800">Delivery Address:</div>
                              <div className="text-slate-muted">📍 Purok 3, Mabini St., Brgy. San Jose</div>
                              <div className="pt-1.5 border-t border-slate-100 font-bold text-navy-800 flex justify-between">
                                <span>Total: ₱135.00</span>
                                <span className="text-emerald-700">Paid via GCash</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Screen 7: Rider Dispatch & Navigation (Rider) */}
                      {activeScreenId === 'rider_view' && (
                        <div className="flex-1 flex flex-col">
                          <div className="bg-brand text-white p-3.5 shadow-sm">
                            <div className="flex justify-between items-center">
                              <span className="font-extrabold text-sm">Delivery Stop 2 of 4</span>
                              <span className="bg-emerald-400/30 text-emerald-100 border border-emerald-300/40 px-2 py-0.5 rounded text-[8px] font-bold">● Active Route</span>
                            </div>
                            <div className="text-[10px] text-white/80">Rider Marco • AquaPure Fleet</div>
                          </div>

                          <div className="flex-1 p-3 space-y-2.5 overflow-y-auto bg-slate-50">
                            <div className="bg-white p-3 rounded-xl border border-slate-200">
                              <div className="flex justify-between font-bold text-[10px]">
                                <span className="text-navy-800">#ORD-1082 • Juan D.</span>
                                <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-black text-[8px]">Paid GCash</span>
                              </div>
                              <div className="text-[9px] text-slate-muted mt-1">📍 Purok 3, Mabini St. (1.2 km away)</div>
                              <div className="text-[9px] font-semibold text-navy-800 mt-0.5">📦 3x 5-gal Slim Alkaline</div>
                              
                              <div className="mt-2.5 flex gap-1.5">
                                <button className="flex-1 py-1 bg-brand text-white font-bold rounded text-[8px] flex items-center justify-center gap-1">
                                  <Navigation className="w-3 h-3" />
                                  <span>Navigate Map</span>
                                </button>
                                <button className="py-1 px-2.5 bg-slate-100 text-navy-800 font-bold rounded text-[8px] flex items-center justify-center gap-1">
                                  <PhoneCall className="w-3 h-3" />
                                  <span>Call</span>
                                </button>
                              </div>
                            </div>

                            <div className="bg-white p-2.5 rounded-xl border border-slate-200 space-y-1.5">
                              <div className="text-[10px] font-bold text-navy-800">Empty Jug Collection</div>
                              <div className="flex justify-between items-center text-[9px] bg-slate-50 p-2 rounded-lg">
                                <span>Collected 3x Slim Jugs:</span>
                                <span className="font-black text-brand bg-blue-50 px-2 py-0.5 rounded border border-blue-200">3 Verified</span>
                              </div>
                            </div>

                            <button className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl text-[10px] shadow-sm flex items-center justify-center gap-1.5">
                              <Check className="w-3.5 h-3.5" />
                              <span>Complete Drop-off & Next Stop</span>
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Screen 8: In-App Realtime Chat (Customer & Station) */}
                      {activeScreenId === 'chat_system' && (
                        <div className="flex-1 flex flex-col">
                          <div className="bg-brand text-white p-3.5 shadow-sm">
                            <div className="flex items-center gap-2">
                              <img 
                                src="/assets/images/app-icon-192.png" 
                                alt="eRefill" 
                                className="w-6 h-6 rounded-md object-contain bg-white"
                              />
                              <div>
                                <span className="font-extrabold text-xs block leading-tight">AquaPure Station Support</span>
                                <span className="text-[8px] text-white/80">Ref: #ORD-1082 (Out for Delivery)</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex-1 p-3 space-y-2 overflow-y-auto bg-slate-50 text-[9px]">
                            {/* Customer Message */}
                            <div className="flex flex-col items-end">
                              <div className="bg-brand text-white p-2 rounded-xl rounded-tr-xs max-w-[85%] leading-tight">
                                Good morning po! Please leave the 3 alkaline jugs by our front porch gate.
                              </div>
                              <span className="text-[7px] text-slate-400 mt-0.5">9:20 AM • Read</span>
                            </div>

                            {/* Station Dispatch Response */}
                            <div className="flex flex-col items-start">
                              <div className="bg-white border border-slate-200 text-navy-800 p-2 rounded-xl rounded-tl-xs max-w-[85%] leading-tight shadow-xs">
                                Noted po Sir Juan! Rider Marco is on his way with your 3 Slim gallons, ETA is 8 minutes.
                              </div>
                              <span className="text-[7px] text-slate-400 mt-0.5">9:22 AM</span>
                            </div>

                            {/* Rider Note */}
                            <div className="flex flex-col items-start">
                              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-2 rounded-xl rounded-tl-xs max-w-[85%] leading-tight">
                                Rider Marco: Hello po! I've arrived at your gate with the refill jugs.
                              </div>
                              <span className="text-[7px] text-slate-400 mt-0.5">9:28 AM</span>
                            </div>
                          </div>

                          {/* Chat Input Bar */}
                          <div className="bg-white border-t border-slate-200 p-2 flex items-center gap-1.5">
                            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                              <Camera className="w-3 h-3" />
                            </div>
                            <div className="flex-1 bg-slate-100 rounded-lg px-2 py-1 text-[8px] text-slate-400">
                              Type a message...
                            </div>
                            <div className="w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center">
                              <Send className="w-3 h-3" />
                            </div>
                          </div>
                        </div>
                      )}

                    </motion.div>
                  </AnimatePresence>

                  {/* App Bottom Navigation bar */}
                  <div className="bg-white border-t border-slate-200/90 px-4 py-2 flex justify-around text-[9px] text-slate-muted">
                    <span className="text-brand font-bold">● Active View</span>
                    <span>Official Build</span>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Right / Screen Details & Highlights (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand text-xs font-bold uppercase tracking-wider mb-3">
              {currentScreen.roleBadge}
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-navy-800 mb-3 tracking-tight">
              {currentScreen.title}
            </h3>

            <p className="text-base text-slate-muted leading-relaxed mb-6">
              {currentScreen.description}
            </p>

            {/* Feature Highlights Checklist */}
            <div className="w-full space-y-3 mb-8">
              {currentScreen.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-navy-800">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Direct Download Button */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={EREFILL_CONFIG.downloadUrl}
              download={EREFILL_CONFIG.fileName}
              onClick={onDownloadClick}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-brand hover:bg-brand-dark text-white font-bold text-sm shadow-md shadow-brand/20 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download App to Test Live</span>
            </motion.a>
          </div>

        </div>

      </div>
    </section>
  );
}
