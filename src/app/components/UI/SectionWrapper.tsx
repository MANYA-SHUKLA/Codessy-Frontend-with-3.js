'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  parallaxIntensity?: number;
}

export default function SectionWrapper({ 
  children, 
  className = '', 
  parallaxIntensity = 30 
}: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [parallaxIntensity, -parallaxIntensity]);
  // Remove cross-fade to avoid sections looking faded; keep full opacity
  // const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.section
      ref={ref}
      style={{
        y,
        // Keep sections fully opaque to match Hero visibility
        opacity: 1,
        scale
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}