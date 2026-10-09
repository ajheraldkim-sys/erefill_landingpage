import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardList, 
  Droplets, 
  Receipt, 
  ShoppingCart, 
  CreditCard, 
  MapPin, 
  BarChart3, 
  RefreshCw, 
  Database,
  ArrowUpRight
} from 'lucide-react';
import { KEY_FEATURES } from '../data/config';

const iconMap = {
  ClipboardList,
  Droplets,
  Receipt,
  ShoppingCart,
  CreditCard,
  MapPin,
  BarChart3,
  RefreshCw,
  Database
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-slate-50/70 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand text-xs font-bold uppercase tracking-wider mb-3">
            Core Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 tracking-tight mb-4">
            Engineered for Real-World Water Stations
          </h2>
          <p className="text-base sm:text-lg text-slate-muted leading-relaxed">
            Every feature in eRefill is built to solve the real daily challenges of managing clean drinking water distribution and refill operations.
          </p>
        </div>

        {/* 9 Features Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {KEY_FEATURES.map((feat, index) => {
            const Icon = iconMap[feat.iconName] || Droplets;
            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-subtle-card hover:shadow-card-hover hover:border-brand-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors border border-brand-100">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-muted group-hover:bg-brand-50 group-hover:text-brand transition-colors">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-navy-800 mb-2 leading-snug group-hover:text-brand transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-slate-muted leading-relaxed mb-4">
                    {feat.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand">
                  <span className="text-[11px] text-slate-muted font-medium">{feat.bullet}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

