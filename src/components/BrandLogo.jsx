import React from 'react';

/**
 * Reusable, pixel-consistent Brand Logo component for eRefill.
 * Ensures the exact same logo mark, typography, and styling everywhere.
 */
export default function BrandLogo({ 
  size = "md", 
  showSubtitle = true, 
  theme = "light",
  className = "" 
}) {
  const iconSizes = {
    sm: "w-7 h-7 rounded-lg",
    md: "w-9 h-9 rounded-xl",
    lg: "w-11 h-11 rounded-2xl"
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  const isDark = theme === "dark";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Official eRefill Icon */}
      <div className={`${iconSizes[size] || iconSizes.md} overflow-hidden shadow-xs border ${isDark ? 'border-slate-700 bg-slate-800' : 'border-slate-200/80 bg-white'} flex items-center justify-center flex-shrink-0`}>
        <img 
          src="/assets/images/app-icon-192.png" 
          alt="eRefill" 
          className="w-full h-full object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            if (e.currentTarget.nextSibling) {
              e.currentTarget.nextSibling.style.display = 'flex';
            }
          }}
        />
        <div className="hidden w-full h-full items-center justify-center bg-brand text-white font-black text-xs">
          eR
        </div>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <span className={`${textSizes[size] || textSizes.md} font-black tracking-tight ${isDark ? 'text-white' : 'text-navy-800'}`}>
          e<span className={isDark ? 'text-brand-400' : 'text-brand'}>Refill</span>
        </span>
        {showSubtitle && (
          <span className={`text-[10px] font-semibold uppercase tracking-wider mt-1 ${isDark ? 'text-slate-400' : 'text-slate-muted'}`}>
            Water Station Manager
          </span>
        )}
      </div>
    </div>
  );
}

