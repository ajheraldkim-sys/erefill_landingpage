import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Users, Droplets, CreditCard } from 'lucide-react';

export default function LiveStatsBar() {
  const stats = [
    {
      icon: ClipboardList,
      value: "Live Order Queue",
      label: "Organize walk-in, phone & app refills",
      accent: "text-brand bg-brand-50 border-brand-200"
    },
    {
      icon: Droplets,
      value: "Slim & Round",
      label: "Dual 5-gallon container tracking",
      accent: "text-cyan-600 bg-cyan-50 border-cyan-200"
    },
    {
      icon: Users,
      value: "Owner & Customer",
      label: "Dedicated interfaces for both",
      accent: "text-indigo-600 bg-indigo-50 border-indigo-200"
    },
    {
      icon: CreditCard,
      value: "GCash, Maya & COD",
      label: "Cashless payments & Utang ledger",
      accent: "text-emerald-600 bg-emerald-50 border-emerald-200"
    }
  ];

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-200/50"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className={`flex items-center gap-4 ${idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}
              >
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center flex-shrink-0 ${stat.accent}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-black text-navy-800 leading-snug">{stat.value}</div>
                  <div className="text-xs text-slate-muted font-medium">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
