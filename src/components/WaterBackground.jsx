import React from 'react';
import { motion } from 'framer-motion';

export default function WaterBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Soft Ambient Radial Water Glow 1 (Top Right) */}
      <div 
        className="absolute -top-[15%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(4, 55, 242, 0.4) 0%, rgba(0, 210, 255, 0.15) 50%, transparent 70%)'
        }}
      />

      {/* Soft Ambient Radial Water Glow 2 (Center Left) */}
      <div 
        className="absolute top-[40%] -left-[15%] w-[700px] h-[700px] rounded-full blur-[140px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(46, 91, 255, 0.35) 0%, rgba(232, 239, 255, 0.4) 60%, transparent 80%)'
        }}
      />

      {/* Soft Ambient Radial Water Glow 3 (Bottom Right) */}
      <div 
        className="absolute bottom-[-10%] right-[10%] w-[550px] h-[550px] rounded-full blur-[130px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(4, 55, 242, 0.3) 0%, rgba(6, 95, 70, 0.1) 60%, transparent 80%)'
        }}
      />

      {/* Subtle floating aquatic light particles */}
      <motion.div
        animate={{
          y: [-15, 15, -15],
          x: [-10, 10, -10],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[20%] right-[25%] w-32 h-32 rounded-full bg-blue-400/10 blur-2xl"
      />

      <motion.div
        animate={{
          y: [20, -20, 20],
          x: [15, -15, 15],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[65%] left-[20%] w-44 h-44 rounded-full bg-cyan-400/10 blur-3xl"
      />

      {/* Clean micro-grid pattern for modern tech aesthetic */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(#14213D 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );
}

