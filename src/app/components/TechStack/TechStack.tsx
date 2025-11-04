'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Database, Smartphone, Globe, Cpu, Zap, Shield, Brain, Rocket } from 'lucide-react';
import AnimatedSection from '../UI/AnimatedSection';
import ScrollReveal from '../UI/ScrollReveal';
import styles from './TechStack.module.css';

export default function TechStack() {
  const [activeTech, setActiveTech] = useState('mern');

  const techCategories = {
    mern: {
      name: 'MERN Stack',
      icon: <Globe className={styles.categoryIcon} />,
      color: '#61dafb',
      technologies: [
        { name: 'MongoDB', level: 95, icon: '🟢' },
        { name: 'Express.js', level: 90, icon: '⚡' },
        { name: 'React.js', level: 92, icon: '⚛️' },
        { name: 'Node.js', level: 88, icon: '🟢' },
        { name: 'Next.js', level: 90, icon: '▲' },
        { name: 'TypeScript', level: 85, icon: '🔷' }
      ]
    },
    flutter: {
      name: 'Flutter & Mobile',
      icon: <Smartphone className={styles.categoryIcon} />,
      color: '#02569b',
      technologies: [
        { name: 'Flutter', level: 88, icon: '💙' },
        { name: 'Dart', level: 85, icon: '🎯' },
        { name: 'React Native', level: 80, icon: '📱' },
        { name: 'iOS', level: 75, icon: '🍎' },
        { name: 'Android', level: 78, icon: '🤖' },
        { name: 'PWA', level: 82, icon: '🌐' }
      ]
    },
    backend: {
      name: 'Backend & DevOps',
      icon: <Cpu className={styles.categoryIcon} />,
      color: '#f05138',
      technologies: [
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'PostgreSQL', level: 80, icon: '🐘' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'AWS', level: 70, icon: '☁️' },
        { name: 'Firebase', level: 82, icon: '🔥' },
        { name: 'GraphQL', level: 78, icon: '📊' }
      ]
    },
    database: {
      name: 'Database & Storage',
      icon: <Database className={styles.categoryIcon} />,
      color: '#336791',
      technologies: [
        { name: 'MongoDB', level: 80, icon: '🍃' },
        { name: 'Redis', level: 75, icon: '🔴' },
        { name: 'MySQL', level: 78, icon: '🐬' },
        { name: 'Elasticsearch', level: 72, icon: '🔍' },
        { name: 'Supabase', level: 76, icon: '⚡' },
        { name: 'DynamoDB', level: 70, icon: '⚡' }
      ]
    },
    ai: {
      name: 'AI & Machine Learning',
      icon: <Brain className={styles.categoryIcon} />,
      color: '#10a37f',
      technologies: [
        { name: 'TensorFlow', level: 75, icon: '🧠' },
        { name: 'PyTorch', level: 78, icon: '🔥' },
        { name: 'OpenAI API', level: 82, icon: '🤖' },
        { name: 'LangChain', level: 76, icon: '⛓️' },
        { name: 'Hugging Face', level: 74, icon: '🤗' },
        { name: 'Scikit-learn', level: 80, icon: '📊' }
      ]
    },
    deployment: {
      name: 'Deployment & DevOps',
      icon: <Rocket className={styles.categoryIcon} />,
      color: '#7e57c2',
      technologies: [
        { name: 'Kubernetes', level: 72, icon: '⚓' },
        { name: 'GitHub Actions', level: 80, icon: '⚡' },
        { name: 'Terraform', level: 70, icon: '🏗️' },
        { name: 'Jenkins', level: 68, icon: '🤖' },
        { name: 'Vercel', level: 85, icon: '▲' },
        { name: 'Netlify', level: 82, icon: '🌐' }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const techCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1
      }
    }),
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        stiffness: 400
      }
    }
  };

  return (
    <AnimatedSection className={styles.techStack} id="tech">
      <div className={styles.container}>
          <div className={styles.header}>
            <motion.h2 
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              viewport={{ once: true, amount: 0.8 }}
              animate={{
                textShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 10px rgba(97, 218, 251, 0.5)",
                  "0 0 20px rgba(2, 86, 155, 0.5)",
                  "0 0 0px rgba(255,255,255,0)"
                ]
              }}
            >
              Divine Technology Stack
            </motion.h2>
            <motion.div 
              className={styles.divider}
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.8 }}
            />
            <motion.p 
              className={styles.lead}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              viewport={{ once: true, amount: 0.8 }}
            >
              Harnessing the power of modern technologies with the precision of Krishna's Sudarshan Chakra
            </motion.p>
          </div>

        <div className={styles.content}>
          <motion.div
            className={styles.categories}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {Object.entries(techCategories).map(([key, category]) => (
              <motion.button
                key={key}
                className={`${styles.categoryButton} ${
                  activeTech === key ? styles.active : ''
                }`}
                onClick={() => setActiveTech(key)}
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  borderColor: activeTech === key ? category.color : 'transparent'
                }}
              >
                <motion.div 
                  className={styles.categoryHeader}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: activeTech === key ? 360 : 0 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <span className={styles.categoryName}>{category.name}</span>
                </motion.div>
                <motion.div 
                  className={styles.activeIndicator}
                  style={{ backgroundColor: category.color }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeTech === key ? 1 : 0 }}
                />
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className={styles.techDisplay}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={styles.techContent}
              >
                <motion.div 
                  className={styles.techHeader}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className={styles.techIcon}
                    style={{ color: techCategories[activeTech as keyof typeof techCategories].color }}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    {techCategories[activeTech as keyof typeof techCategories].icon}
                  </motion.div>
                  <h3 className={styles.techTitle}>
                    {techCategories[activeTech as keyof typeof techCategories].name}
                  </h3>
                </motion.div>

                <motion.div 
                  className={styles.techGrid}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {techCategories[activeTech as keyof typeof techCategories].technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className={styles.techCard}
                      custom={index}
                      variants={techCardVariants}
                      whileHover="hover"
                    >
                      <motion.div 
                        className={styles.techInfo}
                        whileHover={{ x: 5 }}
                      >
                        <motion.span 
                          className={styles.techEmoji}
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: index * 0.2
                          }}
                        >
                          {tech.icon}
                        </motion.span>
                        <span className={styles.techName}>{tech.name}</span>
                      </motion.div>
                      <div className={styles.skillBar}>
                        <motion.div
                          className={styles.skillLevel}
                          style={{ 
                            backgroundColor: techCategories[activeTech as keyof typeof techCategories].color,
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.1 + 0.3,
                            ease: "easeOut"
                          }}
                        />
                        <motion.span 
                          className={styles.skillPercent}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                        >
                          {tech.level}%
                        </motion.span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          className={styles.features}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div 
            className={styles.feature}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity 
              }}
            >
              <Zap className={styles.featureIcon} />
            </motion.div>
            <h4>Lightning Fast</h4>
            <p>Optimized performance with modern build tools</p>
          </motion.div>
          <motion.div 
            className={styles.feature}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity 
              }}
            >
              <Shield className={styles.featureIcon} />
            </motion.div>
            <h4>Secure & Scalable</h4>
            <p>Enterprise-grade security and scalability</p>
          </motion.div>
          <motion.div 
            className={styles.feature}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <motion.div
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 1
              }}
            >
              <Database className={styles.featureIcon} />
            </motion.div>
            <h4>Modern Databases</h4>
            <p>Efficient data management with latest technologies</p>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}