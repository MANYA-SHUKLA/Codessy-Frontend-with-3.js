'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronDown, Code2, Palette, Smartphone, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';

interface Particle {
  id: number;
  left: number;
  xOffset: number;
  duration: number;
  delay: number;
  color: string;
}

export default function Hero() {
  const ref = useRef(null);
  const [particles, setParticles] = useState<Particle[]>([]);


  useEffect(() => {
    const generatedParticles: Particle[] = [...Array(15)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      xOffset: Math.random() * 50 - 25,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
      color: i % 3 === 0 ? '#d4af37' : i % 3 === 1 ? '#8b5cf6' : '#10b981',
    }));
    setParticles(generatedParticles);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        stiffness: 400
      }
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section ref={ref} className={styles.hero}>
    
      <motion.div style={{ y }} className={styles.parallaxBackground}>
        <motion.div 
          className={styles.floatingOrb1}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className={styles.floatingOrb2}
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className={styles.floatingOrb3}
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>

      <motion.div 
        style={{ opacity, scale }}
        className={styles.heroContent}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
   
        <motion.div
          className={styles.logoSection}
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
            <motion.h1 
              className={styles.title}
              animate={{ backgroundPosition: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            >
              Codessy
            </motion.h1>
          </motion.div>
          
          <motion.p 
            className={styles.subtitle}
            variants={itemVariants}
          >
            Where <motion.span 
              className={styles.highlight}
              animate={{ 
                backgroundPosition: ['0%', '100%'] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: 'reverse' 
              }}
            >Divine Code</motion.span> Meets Digital Destiny
          </motion.p>
        </motion.div>

      
        <motion.div 
          className={styles.features}
          variants={containerVariants}
        >
          <motion.div 
            className={styles.feature}
            variants={featureVariants}
            whileHover="hover"
          >
            <motion.div 
              className={styles.featureIconWrapper}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Code2 className={styles.featureIcon} />
            </motion.div>
            <span>Modern Development</span>
          </motion.div>
          
          <motion.div 
            className={styles.feature}
            variants={featureVariants}
            whileHover="hover"
          >
            <motion.div 
              className={styles.featureIconWrapper}
              whileHover={{ rotate: -360 }}
              transition={{ duration: 0.5 }}
            >
              <Palette className={styles.featureIcon} />
            </motion.div>
            <span>Divine Design</span>
          </motion.div>
          
          <motion.div 
            className={styles.feature}
            variants={featureVariants}
            whileHover="hover"
          >
            <motion.div 
              className={styles.featureIconWrapper}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Smartphone className={styles.featureIcon} />
            </motion.div>
            <span>Flawless Experience</span>
          </motion.div>
        </motion.div>

  
        <motion.div
          className={styles.ctaContainer}
          variants={itemVariants}
        >
          <motion.div
            className={styles.ctaButton}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 10px rgba(255,255,255,0.5)",
                  "0 0 0px rgba(255,255,255,0)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              Begin Your Digital Journey
            </motion.span>
          </motion.div>
        </motion.div>

     
        <motion.div
          className={styles.scrollIndicator}
          variants={itemVariants}
        >
          <motion.div
            className={styles.scrollLink}
            onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className={styles.scrollIcon} />
            </motion.div>
            <motion.p
              className={styles.scrollText}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to Explore
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>


      <div className={styles.floatingParticles}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={styles.particle}
            animate={{
              y: [0, -100, 0],
              x: [0, particle.xOffset, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
            style={{
              left: `${particle.left}%`,
              background: particle.color,
            }}
          />
        ))}
      </div>
    </section>
  );
}
