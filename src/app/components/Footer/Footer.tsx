'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Heart, Mail, Phone, Copyright, Code2, Sparkles } from 'lucide-react';
import SmoothScrollLink from '../UI/SmoothScrollLink';
import styles from './Footer.module.css';

interface FloatingElement {
  id: number;
  left: number;
  xOffset: number;
  duration: number;
  delay: number;
  width: number;
  height: number;
  color: string;
}

export default function Footer() {
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);
  const currentYear = new Date().getFullYear();

  // Generate floating elements only on client side to avoid hydration mismatch
  useEffect(() => {
    const elements: FloatingElement[] = [...Array(8)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      xOffset: Math.random() * 20 - 10,
      duration: 4 + Math.random() * 2,
      delay: Math.random() * 2,
      width: 2 + Math.random() * 4,
      height: 2 + Math.random() * 4,
      color: i % 3 === 0 ? '#d4af37' : i % 3 === 1 ? '#8b5cf6' : '#10b981',
    }));
    setFloatingElements(elements);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.footer 
      className={styles.footer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Animated Background */}
      <div className={styles.background}>
        <motion.div
          className={styles.bgOrb1}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={styles.bgOrb2}
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className={styles.bgOrb3}
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
        >
          {/* Logo and Description */}
          <motion.div 
            className={styles.brandSection}
            variants={itemVariants}
          >
            <motion.div
              className={styles.logo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
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
                  <Sparkles size={16} />
                </motion.div>
              </motion.div>
              <motion.h3 
                className={styles.brandName}
                animate={{ backgroundPosition: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              >
                Codessy
              </motion.h3>
            </motion.div>
            
            <motion.p 
              className={styles.tagline}
              variants={itemVariants}
            >
              Where <span className={styles.highlight}>Divine Code</span> Meets Digital Destiny
            </motion.p>

            <motion.p 
              className={styles.description}
              variants={itemVariants}
            >
              Crafting digital experiences with the wisdom of Krishna and the power of modern technology.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className={styles.linksSection}
            variants={itemVariants}
          >
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <div className={styles.links}>
              <SmoothScrollLink href="#vision" className={styles.link}>
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Our Vision
                </motion.span>
              </SmoothScrollLink>
              <SmoothScrollLink href="#mission" className={styles.link}>
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Our Mission
                </motion.span>
              </SmoothScrollLink>
              <SmoothScrollLink href="#tech" className={styles.link}>
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Technologies
                </motion.span>
              </SmoothScrollLink>
              <SmoothScrollLink href="#contact" className={styles.link}>
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Get in Touch
                </motion.span>
              </SmoothScrollLink>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className={styles.contactSection}
            variants={itemVariants}
          >
            <h4 className={styles.sectionTitle}>Connect With Me</h4>
            <div className={styles.contactInfo}>
              <motion.div 
                className={styles.contactItem}
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  className={styles.contactIcon}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <Mail size={18} />
                </motion.div>
                <a 
                  href="mailto:shuklamanya99@gmail.com" 
                  className={styles.contactLink}
                >
                  shuklamanya99@gmail.com
                </a>
              </motion.div>
              
              <motion.div 
                className={styles.contactItem}
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  className={styles.contactIcon}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <Phone size={18} />
                </motion.div>
                <a 
                  href="tel:+918005586588" 
                  className={styles.contactLink}
                >
                  +91 80055 86588
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div 
            className={styles.servicesSection}
            variants={itemVariants}
          >
            <h4 className={styles.sectionTitle}>What We Do</h4>
            <div className={styles.services}>
              <motion.div 
                className={styles.service}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Code2 size={16} className={styles.serviceIcon} />
                <span>Web Development</span>
              </motion.div>
              <motion.div 
                className={styles.service}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Code2 size={16} className={styles.serviceIcon} />
                <span>Mobile Apps</span>
              </motion.div>
              <motion.div 
                className={styles.service}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Code2 size={16} className={styles.serviceIcon} />
                <span>UI/UX Design</span>
              </motion.div>
              <motion.div 
                className={styles.service}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Code2 size={16} className={styles.serviceIcon} />
                <span>Digital Solutions</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className={styles.bottomBar}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div 
            className={styles.copyright}
            variants={itemVariants}
          >
            <motion.div
              className={styles.copyrightContent}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Copyright size={16} className={styles.copyrightIcon} />
              <span>{currentYear} Made with</span>
              <motion.div
                className={styles.heartIcon}
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Heart size={16} />
              </motion.div>
              <span>by Manya Shukla</span>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className={styles.socialLinks}
            variants={itemVariants}
          >
            <motion.a
              href="mailto:shuklamanya99@gmail.com"
              className={styles.socialLink}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={18} />
            </motion.a>
            <motion.a
              href="tel:+918005586588"
              className={styles.socialLink}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Phone size={18} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className={styles.floatingElements}>
          {floatingElements.map((element) => (
            <motion.div
              key={element.id}
              className={styles.floatingElement}
              animate={{
                y: [0, -30, 0],
                x: [0, element.xOffset, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                delay: element.delay,
              }}
              style={{
                left: `${element.left}%`,
                background: element.color,
                width: `${element.width}px`,
                height: `${element.height}px`,
              }}
            />
          ))}
        </div>
      </div>
    </motion.footer>
  );
}