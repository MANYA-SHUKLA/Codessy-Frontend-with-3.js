'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Vision from './components/Vision/Vision';
import Mission from './components/Mission/Mission';
import TechStack from './components/TechStack/TechStack';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import KrishnaBackground from './components/KrishnaBackground/KrishnaBackground';
import PageTransition from './components/UI/PageTransition';
import SectionWrapper from './components/UI/SectionWrapper';
import ParallaxBackground from './components/UI/ParallaxBackground';

export default function Home() {
  const containerRef = useRef(null);
  
  // Main scroll progress for overall page
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Parallax effects for different layers
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 0.8, 0.5]);

  // Section progress tracking
  const { scrollYProgress: heroProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.9]);
  const heroOpacity = useTransform(heroProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <main ref={containerRef} className="relative overflow-hidden w-full">
      {/* Navbar */}
      <Navbar />
      
      {/* Enhanced Background with Parallax - Fixed position to prevent scroll */}
      <motion.div 
        style={{ y: backgroundY, opacity }} 
        className="fixed inset-0 -z-10 h-screen w-full pointer-events-none"
      >
        <KrishnaBackground />
        <ParallaxBackground />
      </motion.div>
      
      {/* Content with subtle parallax */}
      <motion.div 
        style={{ y: contentY }}
        className="relative z-10"
      >
        {/* Hero Section with scale effect */}
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }}>
          <PageTransition>
            <SectionWrapper parallaxIntensity={20}>
              <Hero />
            </SectionWrapper>
          </PageTransition>
        </motion.div>

        {/* Vision Section */}
        <PageTransition>
          <SectionWrapper parallaxIntensity={15}>
            <Vision />
          </SectionWrapper>
        </PageTransition>

        {/* Mission Section */}
        <PageTransition>
          <SectionWrapper parallaxIntensity={10}>
            <Mission />
          </SectionWrapper>
        </PageTransition>

        {/* Tech Stack Section */}
        <PageTransition>
          <SectionWrapper parallaxIntensity={8}>
            <TechStack />
          </SectionWrapper>
        </PageTransition>

        {/* Contact Section */}
        <PageTransition>
          <SectionWrapper parallaxIntensity={5}>
            <Contact />
          </SectionWrapper>
        </PageTransition>

        {/* Footer Section */}
        <PageTransition>
          <Footer />
        </PageTransition>
      </motion.div>

      {/* Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-purple-500 z-50 origin-left"
      />
    </main>
  );
}