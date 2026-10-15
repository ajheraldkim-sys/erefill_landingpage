import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, LayoutDashboard, Truck, Receipt, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/config';

const stepIcons = [ShoppingCart, LayoutDashboard, Truck, Receipt];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand text-xs font-bold uppercase tracking-wider mb-3">
            Streamlined Flow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 tracking-tight mb-4">
            How eRefill Works
          </h2>
          <p className="text-base sm:text-lg text-slate-muted leading-relaxed">
            Four seamless steps to coordinate clean water orders from placement to doorstep handoff and digital payment reconciliation.
          </p>
        </div>

        {/* 4 Step Connected Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          
          {WORKFLOW_STEPS.map((step, index) => {
            const Icon = stepIcons[index] || CheckCircle2;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-subtle-card hover:shadow-card-hover transition-all flex flex-col justify-between relative group"
              >
                <div>
                  {/* Step Number Top Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand text-white flex items-center justify-center font-black text-lg shadow-md shadow-brand/20">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand flex items-center justify-center border border-brand-100">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-navy-800 mb-1 group-hover:text-brand transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-bold text-brand uppercase tracking-wider mb-4">
                    {step.tagline}
                  </div>

                  <p className="text-sm text-slate-muted leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs font-bold text-navy-800">
                    <span className="text-brand font-black text-sm">{step.metric}</span>
                    <span className="text-slate-muted font-normal block text-[10px]">{step.metricLabel}</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

