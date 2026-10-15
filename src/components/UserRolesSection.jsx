import React from 'react';
import { motion } from 'framer-motion';
import { Store, Users, Check, ArrowRight } from 'lucide-react';
import { USER_ROLES } from '../data/config';

const roleIcons = {
  Store,
  Users
};

export default function UserRolesSection({ onDownloadClick }) {
  return (
    <section id="roles" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand text-xs font-bold uppercase tracking-wider mb-3">
            Ecosystem Roles
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 tracking-tight mb-4">
            Tailored for Station Owners & Customers
          </h2>
          <p className="text-base sm:text-lg text-slate-muted leading-relaxed">
            eRefill provides dedicated, purpose-built interfaces designed specifically for station operations and customer doorstep refills.
          </p>
        </div>

        {/* 2 User Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {USER_ROLES.map((role, index) => {
            const Icon = roleIcons[role.iconName] || Store;
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/90 shadow-subtle-card hover:shadow-card-hover transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-200/60 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-muted">
                      {role.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-navy-800 mb-1">
                    {role.roleName}
                  </h3>
                  <div className="text-xs font-bold text-brand uppercase tracking-wider mb-4">
                    {role.tagline}
                  </div>

                  <p className="text-sm text-slate-muted leading-relaxed mb-6">
                    {role.description}
                  </p>

                  <div className="pt-6 border-t border-slate-100">
                    <div className="text-xs font-extrabold text-navy-800 uppercase tracking-wider mb-3">
                      Core Workflows:
                    </div>
                    <ul className="space-y-2.5">
                      {role.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs font-semibold text-navy-800">
                          <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-100">
                  <a
                    href="#download"
                    className="w-full py-3.5 rounded-xl bg-slate-100 hover:bg-brand hover:text-white text-navy-800 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Download App as {role.roleName}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
