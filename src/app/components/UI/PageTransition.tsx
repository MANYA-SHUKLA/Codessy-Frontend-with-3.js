'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export default function PageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ 
          opacity: 0, 
          y: 100, 
          rotateX: 10,
          scale: 0.95
        }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          scale: 1
        }}
        exit={{ 
          opacity: 0, 
          y: -100, 
          rotateX: -10,
          scale: 0.95
        }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
        className={`min-h-screen ${className}`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}