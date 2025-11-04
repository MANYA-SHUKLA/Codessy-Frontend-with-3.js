'use client';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, Shield } from 'lucide-react';
import AnimatedSection from '../UI/AnimatedSection';
import ScrollReveal from '../UI/ScrollReveal';
import styles from './Mission.module.css';

export default function Mission() {
  const missionPrinciples = [
    {
      icon: <Heart className={styles.principleIcon} />,
      title: 'Dharma-Driven',
      description: 'Ethical practices and righteous code that serves humanity'
    },
    {
      icon: <Users className={styles.principleIcon} />,
      title: 'Community First',
      description: 'Building solutions that connect and empower communities'
    },
    {
      icon: <Globe className={styles.principleIcon} />,
      title: 'Universal Impact',
      description: 'Creating technology that transcends boundaries and cultures'
    },
    {
      icon: <Shield className={styles.principleIcon} />,
      title: 'Divine Protection',
      description: 'Securing your digital presence with unwavering commitment'
    }
  ];

  const lotusVariants = {
    hidden: { rotate: 0, scale: 0 },
    visible: {
      rotate: 360,
      scale: 1,
      transition: {
        rotate: {
          duration: 20,
          repeat: Infinity
        },
        scale: {
          duration: 1
        }
      }
    }
  };

  const principleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1
      }
    }),
    hover: {
      y: -8,
      scale: 1.05,
      transition: {
        stiffness: 400
      }
    }
  };

  return (
    <AnimatedSection className={styles.mission} id="mission">
      <div className={styles.container}>
        <ScrollReveal direction="up" delay={0.1}>
          <div className={styles.header}>
            <motion.h2 
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Mission
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
              To create <span className={styles.highlight}>digital experiences</span> that embody 
              Lord Krishna's teachings - balanced, beautiful, and beneficial to all beings.
            </motion.p>
          </div>
        </ScrollReveal>

        <div className={styles.content}>
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className={styles.missionStatement}
              whileInView={{ 
                scale: [0.9, 1],
                opacity: [0, 1]
              }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              <motion.h3 
                className={styles.statementTitle}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                The Bhagavad Gita in Code
              </motion.h3>
              <motion.p 
                className={styles.statementText}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Just as Krishna taught the path of selfless action, we build software with 
                purpose beyond profit. Every line of code is a meditation, every design a 
                prayer for better digital experiences.
              </motion.p>
            </motion.div>

            <motion.div 
              className={styles.principles}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {missionPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  className={styles.principleCard}
                  custom={index}
                  variants={principleVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className={styles.principleIconWrapper}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {principle.icon}
                  </motion.div>
                  <motion.h4 
                    className={styles.principleTitle}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                  >
                    {principle.title}
                  </motion.h4>
                  <motion.p 
                    className={styles.principleDescription}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.8 }}
                  >
                    {principle.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.visual}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className={styles.lotusContainer}
              variants={lotusVariants}
              initial="hidden"
              whileInView="visible"
            >
              <div className={styles.lotus}>
                <motion.div 
                  className={styles.lotusLayer}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className={styles.lotusLayer}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className={styles.lotusLayer}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <motion.div 
                className={styles.lotusGlow}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

       
            <motion.div 
              className={styles.krishnaSection}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className={styles.krishnaCard}>
                <motion.div 
                  className={styles.krishnaImage}
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🪶
                </motion.div>
                <motion.p 
                  className={styles.krishnaQuote}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  "Perform your obligatory duty, because action is indeed better than inaction."
                </motion.p>
                <motion.p 
                  className={styles.krishnaReference}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  — Bhagavad Gita (3.8)
                </motion.p>
              </div>
            </motion.div>

    
            <motion.div
              className={styles.floatingDot1}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className={styles.floatingDot2}
              animate={{
                y: [0, 15, 0],
                x: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className={styles.floatingDot3}
              animate={{
                y: [0, -10, 0],
                x: [0, 8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
