import React from 'react';
import { motion } from 'framer-motion';
import { Store, Users, Check } from 'lucide-react';

export default function AboutSection({ onDownloadClick }) {
  const audiences = [
    {
      title: "Water Station Owners",
      role: "Operations & Assets",
      icon: Store,
      badge: "Station Oversight",
      description: "Replace lost paper notebooks with automated order queues, track every Slim and Round 5-gallon container, monitor customer debt (utang), and check daily sales reports with ease.",
      highlights: [
        "Live order queue & walk-in recording", 
        "Slim & Round 5-gallon container tracking", 
        "Customer debt / utang digital ledger",
        "Automated daily sales & volume summaries"
      ]
    },
    {
      title: "Customers & Households",
      role: "Doorstep Ordering",
      icon: Users,
      badge: "Fast Ordering",
      description: "Order fresh purified, alkaline, or mineral water in seconds. Track your delivery progress in real time, view transparent pricing, and pay via GCash, Maya, or Cash on Delivery.",
      highlights: [
        "Select purified, alkaline, or mineral water", 
        "Live doorstep delivery progress updates", 
        "GCash, Maya & Cash on Delivery payments",
        "Direct in-app messaging with your station"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand text-xs font-bold uppercase tracking-wider mb-3">
            Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 tracking-tight mb-4">
            What is eRefill?
          </h2>
          <p className="text-base sm:text-lg text-slate-muted leading-relaxed">
            eRefill is a purpose-built mobile application engineered specifically for the water refilling industry. It connects station owners and customers into a unified system—eliminating misplaced jugs, forgotten refills, and uncollected debts.
          </p>
        </div>

        {/* 2 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audiences.map((aud, index) => {
            const Icon = aud.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-subtle-card hover:shadow-card-hover transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-200/60 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-muted group-hover:bg-brand-50 group-hover:text-brand transition-colors">
                      {aud.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-navy-800 mb-2">
                    {aud.title}
                  </h3>
                  <div className="text-xs font-bold text-brand uppercase tracking-wider mb-4">
                    {aud.role}
                  </div>
                  <p className="text-sm text-slate-muted leading-relaxed mb-6">
                    {aud.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 space-y-3">
                  {aud.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-navy-800">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
