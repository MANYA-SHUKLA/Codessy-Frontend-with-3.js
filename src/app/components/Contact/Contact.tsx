'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import AnimatedSection from '../UI/AnimatedSection';
import ScrollReveal from '../UI/ScrollReveal';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className={styles.contactIcon} />,
      title: 'Email Us',
      value: 'shuklamanya99@gmail.com',
      description: 'Send us your queries'
    },
    {
      icon: <Phone className={styles.contactIcon} />,
      title: 'Call Us',
      value: '+91 800 5586588',
      description: 'Mon to Fri, 9am to 6pm'
    },
    {
      icon: <MapPin className={styles.contactIcon} />,
      title: 'Visit Us',
      value: 'Damodar Hostel, JNU NEW DELHI',
      description: 'Available worldwide'
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

  const contactItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1
      }
    }),
    hover: {
      x: 10,
      scale: 1.02,
      transition: {
        stiffness: 400
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <AnimatedSection className={styles.contact} id="contact">
      <div className={styles.container}>
        <ScrollReveal direction="up" delay={0.1}>
          <div className={styles.header}>
            <motion.h2 
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Begin Your Digital Journey
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
              Like Krishna guiding Arjuna, we'll help you navigate your digital transformation
            </motion.p>
          </div>
        </ScrollReveal>

        <div className={styles.content}>
          <motion.div
            className={styles.contactInfo}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.h3 
              className={styles.contactTitle}
              variants={itemVariants}
            >
              Connect With Us
            </motion.h3>
            <motion.p 
              className={styles.contactDescription}
              variants={itemVariants}
            >
              Ready to transform your digital presence? Let's discuss how we can help your business thrive.
            </motion.p>

            <motion.div 
              className={styles.contactItems}
              variants={containerVariants}
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.contactItem}
                  custom={index}
                  variants={contactItemVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className={styles.contactIconWrapper}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className={styles.contactDetails}>
                    <motion.h4 
                      className={styles.contactItemTitle}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                    >
                      {item.title}
                    </motion.h4>
                    <motion.p 
                      className={styles.contactItemValue}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.8 }}
                    >
                      {item.value}
                    </motion.p>
                    <motion.p 
                      className={styles.contactItemDescription}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 1 }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <ScrollReveal direction="up" delay={0.4}>
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
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity 
                  }}
                >
                  🪈
                </motion.div>
                <motion.p 
                  className={styles.quoteText}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  "When the digital world is in chaos, the righteous code shall prevail"
                </motion.p>
              </motion.div>
            </ScrollReveal>
          </motion.div>

          <motion.div
            className={styles.formContainer}
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className={styles.form}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              <motion.div
                className={styles.formGroup}
                variants={itemVariants}
              >
                <label htmlFor="name" className={styles.label}>
                  Your Name *
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Enter your name"
                  whileFocus={{ 
                    scale: 1.02,
                    borderColor: "#d4af37",
                    boxShadow: "0 0 0 3px rgba(212, 175, 55, 0.1)"
                  }}
                />
              </motion.div>

              <motion.div
                className={styles.formGroup}
                variants={itemVariants}
              >
                <label htmlFor="email" className={styles.label}>
                  Email Address *
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Enter your email"
                  whileFocus={{ 
                    scale: 1.02,
                    borderColor: "#d4af37",
                    boxShadow: "0 0 0 3px rgba(212, 175, 55, 0.1)"
                  }}
                />
              </motion.div>

              <motion.div
                className={styles.formGroup}
                variants={itemVariants}
              >
                <label htmlFor="company" className={styles.label}>
                  Company
                </label>
                <motion.input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Your company name"
                  whileFocus={{ 
                    scale: 1.02,
                    borderColor: "#d4af37",
                    boxShadow: "0 0 0 3px rgba(212, 175, 55, 0.1)"
                  }}
                />
              </motion.div>

              <motion.div
                className={styles.formGroup}
                variants={itemVariants}
              >
                <label htmlFor="message" className={styles.label}>
                  Your Message *
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={styles.textarea}
                  placeholder="Tell us about your project..."
                  whileFocus={{ 
                    scale: 1.02,
                    borderColor: "#d4af37",
                    boxShadow: "0 0 0 3px rgba(212, 175, 55, 0.1)"
                  }}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.submitButton} ${
                  submitStatus === 'success' ? styles.success : ''
                } ${submitStatus === 'error' ? styles.error : ''}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: isSubmitting ? 1 : 1.05,
                  boxShadow: isSubmitting ? "none" : "0 10px 30px rgba(212, 175, 55, 0.3)"
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                animate={{
                  background: isSubmitting 
                    ? "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
                    : submitStatus === 'success'
                    ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                    : submitStatus === 'error'
                    ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
                    : "linear-gradient(135deg, #d4af37 0%, #8b5cf6 100%)"
                }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className={styles.spinner}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending Message...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle className={styles.buttonIcon} />
                    Message Sent!
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <AlertCircle className={styles.buttonIcon} />
                    Try Again
                  </>
                ) : (
                  <>
                    <Send className={styles.buttonIcon} />
                    Send Message
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    className={styles.successMessage}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className={styles.successIcon} />
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Thank you! Your message has been received. We'll contact you soon.
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </motion.div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <motion.div
          className={styles.bgElement1}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={styles.bgElement2}
          animate={{
            y: [0, 15, 0],
            x: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className={styles.bgElement3}
          animate={{
            y: [0, -10, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>
    </AnimatedSection>
  );
}