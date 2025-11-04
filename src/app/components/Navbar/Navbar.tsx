'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles } from 'lucide-react';
import SmoothScrollLink from '../UI/SmoothScrollLink';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      

      const sections = ['hero', 'vision', 'mission', 'tech', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Vision', href: '#vision' },
    { name: 'Mission', href: '#mission' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Contact', href: '#contact' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: 50 },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
   
        <div className={styles.background}>
          <motion.div
            className={styles.navOrb1}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className={styles.navOrb2}
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className={styles.container}>
       
          <motion.div
            className={styles.logo}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SmoothScrollLink href="#hero" className={styles.logoLink}>
              <motion.div 
                className={styles.fluteIcon}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🪈
                <motion.div
                  className={styles.sparkle}
                  animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Sparkles size={12} />
                </motion.div>
              </motion.div>
              <motion.span 
                className={styles.logoText}
                animate={{ backgroundPosition: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              >
                Codessy
              </motion.span>
            </SmoothScrollLink>
          </motion.div>


          <motion.div 
            className={styles.desktopNav}
            variants={containerVariants}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                className={styles.navItem}
                variants={itemVariants}
              >
                <SmoothScrollLink
                  href={item.href}
                  className={`${styles.navLink} ${
                    activeSection === item.href.replace('#', '') ? styles.active : ''
                  }`}
                  onClick={closeMobileMenu}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item.name}
                  </motion.span>
                  {activeSection === item.href.replace('#', '') && (
                    <motion.div
                      className={styles.activeIndicator}
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </SmoothScrollLink>
              </motion.div>
            ))}
          </motion.div>

      
          <motion.div
            className={styles.ctaContainer}
            variants={itemVariants}
          >
            <SmoothScrollLink
              href="#contact"
              className={styles.ctaButton}
              onClick={closeMobileMenu}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.span>
            </SmoothScrollLink>
          </motion.div>

 
          <motion.button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

   
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
     
            <motion.div
              className={styles.mobileBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />
            

            <motion.div
              className={styles.mobileMenu}
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >

              <div className={styles.mobileBackground}>
                <motion.div
                  className={styles.mobileOrb1}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className={styles.mobileOrb2}
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </div>

            
              <motion.div
                className={styles.mobileLogo}
                variants={mobileItemVariants}
              >
                <div className={styles.mobileLogoContent}>
                  <motion.div 
                    className={styles.mobileFluteIcon}
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    🪈
                  </motion.div>
                  <motion.span 
                    className={styles.mobileLogoText}
                    animate={{ backgroundPosition: ['0%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                  >
                    Codessy
                  </motion.span>
                </div>
              </motion.div>


              <motion.div 
                className={styles.mobileNavItems}
                variants={containerVariants}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className={styles.mobileNavItem}
                    variants={mobileItemVariants}
                    custom={index}
                  >
                    <SmoothScrollLink
                      href={item.href}
                      className={`${styles.mobileNavLink} ${
                        activeSection === item.href.replace('#', '') ? styles.mobileActive : ''
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <motion.span
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {item.name}
                      </motion.span>
                      {activeSection === item.href.replace('#', '') && (
                        <motion.div
                          className={styles.mobileActiveIndicator}
                          layoutId="mobileActiveIndicator"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </SmoothScrollLink>
                  </motion.div>
                ))}
              </motion.div>

           
              <motion.div
                className={styles.mobileCtaContainer}
                variants={mobileItemVariants}
              >
                <SmoothScrollLink
                  href="#contact"
                  className={styles.mobileCtaButton}
                  onClick={closeMobileMenu}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Begin Your Journey
                  </motion.span>
                </SmoothScrollLink>
              </motion.div>


              <motion.div
                className={styles.mobileFooter}
                variants={mobileItemVariants}
              >
                <p className={styles.mobileFooterText}>
                  Divine Digital Solutions
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
