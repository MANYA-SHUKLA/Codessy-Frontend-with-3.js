'use client';
import { motion } from 'framer-motion';
import { Eye, Target, Zap, ArrowRight } from 'lucide-react';
import AnimatedSection from '../UI/AnimatedSection';
import ScrollReveal from '../UI/ScrollReveal';
import styles from './Vision.module.css';

export default function Vision() {
  const visionPoints = [
    {
      icon: <Eye className={styles.pointIcon} />,
      title: 'Divine Foresight',
      description: 'Anticipating digital trends with Krishna\'s wisdom to create future-proof solutions.'
    },
    {
      icon: <Target className={styles.pointIcon} />,
      title: 'Perfect Alignment',
      description: 'Ensuring every pixel and line of code serves your business goals with precision.'
    },
    {
      icon: <Zap className={styles.pointIcon} />,
      title: 'Enlightened Innovation',
      description: 'Combining ancient wisdom with modern technology for transformative results.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(212, 175, 55, 0.2)",
      transition: {
        stiffness: 400
      }
    }
  };

  return (
    <AnimatedSection className={styles.vision} id="vision">
      <div className={styles.container}>
        <ScrollReveal direction="up" delay={0.1}>
          <div className={styles.header}>
            <motion.h2 
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Vision
            </motion.h2>
            <motion.div 
              className={styles.divider}
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.p 
              className={styles.lead}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              To be the <span className={styles.highlight}>divine charioteer</span> guiding businesses 
              through the digital battlefield, delivering solutions that are both technologically 
              advanced and spiritually aligned.
            </motion.p>
          </div>
        </ScrollReveal>

        <motion.div
          className={styles.pointsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              className={styles.pointCard}
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className={styles.pointHeader}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div 
                  className={styles.iconWrapper}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {point.icon}
                </motion.div>
                <h3 className={styles.pointTitle}>{point.title}</h3>
                <motion.div
                  className={styles.arrow}
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </motion.div>
              <motion.p 
                className={styles.pointDescription}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              >
                {point.description}
              </motion.p>
              
              {/* Hover Effect Line */}
              <motion.div
                className={styles.hoverLine}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal direction="up" delay={0.6}>
          <motion.div
            className={styles.quote}
            whileInView={{ 
              scale: [0.9, 1],
              opacity: [0, 1]
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <motion.div 
              className={styles.quoteIcon}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ❝
            </motion.div>
            <motion.p 
              className={styles.quoteText}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Just as Lord Krishna guided Arjuna, we guide your digital presence to victory
            </motion.p>
          </motion.div>
        </ScrollReveal>
      </div>

      {/* Background Animation Elements */}
      <div className={styles.backgroundElements}>
        <motion.div
          className={styles.bgOrb1}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
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
            y: [0, 40, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </AnimatedSection>
  );
}