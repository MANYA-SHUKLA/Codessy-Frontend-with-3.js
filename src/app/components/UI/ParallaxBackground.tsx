'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const midgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const foregroundY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <div ref={ref} className="fixed inset-0 -z-20 pointer-events-none">
      {/* Background Layer - Slowest */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/30"
      />
      
      {/* Midground Layer - Medium */}
      <motion.div 
        style={{ y: midgroundY }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </motion.div>
      
      {/* Foreground Layer - Fastest */}
      <motion.div 
        style={{ y: foregroundY }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-green-400/5 rounded-full blur-2xl" />
      </motion.div>
    </div>
  );
}