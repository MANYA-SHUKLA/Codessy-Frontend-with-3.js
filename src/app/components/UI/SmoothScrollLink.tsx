'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SmoothScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function SmoothScrollLink({ 
  href, 
  children, 
  className = '',
  onClick 
}: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's an external link or mailto/tel, don't prevent default
    if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) {
      return; // Allow default behavior for external links
    }
    
    e.preventDefault();
    
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}