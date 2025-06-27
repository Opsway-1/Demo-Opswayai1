import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle, Clock, Users, ArrowRight, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';

const ScheduleCallPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [serviceInterest, setServiceInterest] = useState('');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const serviceOptions = [
    { value: '', label: 'Select a service...' },
    { value: 'lead-generation', label: 'Lead Generation' },
    { value: 'ai-agents', label: 'AI Agents' },
    { value: 'automation', label: 'Automation' },
    { value: 'websites', label: 'Websites' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with same background as main hero */}
      <section className="relative min-h-screen overflow-hidden bg-[#0B192C] flex items-center pt-20">
        {/* Dynamic Background - Same as BeamsBackgroundDemo */}
        <div className="absolute inset-0">
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 101, 0, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 101, 0, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                animation: 'grid-move 20s linear infinite'
              }}
            />
          </div>

          {/* Floating Orbs */}
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-[#FF6500]/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
              x: [0, -40, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Mouse-following gradient */}
          <motion.div 
            className="absolute w-96 h-96 bg-[#FF6500]/10 rounded-full blur-3xl pointer-events-none"
            animate={{
              x: mousePosition.x - 192,
              y: mousePosition.y - 192,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
          />

          {/* Geometric Shapes */}
          <motion.div 
            className="absolute top-32 right-32 w-4 h-4 bg-[#FF6500] rounded-full"
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-48 left-48 w-6 h-6 border-2 border-white/30 rotate-45"
            animate={{ 
              rotate: [45, 225, 45],
              y: [0, -15, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-48 left-32 w-8 h-8 bg-white/10 rounded-lg"
            animate={{ 
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Particle System */}
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Scanning Lines */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(90deg, 
                transparent 0%, 
                rgba(255, 101, 0, 0.1) 50%, 
                transparent 100%
              )`,
              width: '200px',
              height: '100%'
            }}
            animate={{
              x: ['-200px', 'calc(100vw + 200px)']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Holographic Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6500]/5 to-transparent opacity-30" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-5rem)] py-12">
              
              {/* Left Column - Content */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Hero Heading */}
                <motion.h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight font-montserrat"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Let's Talk
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#FF6500] to-[#ff8533] bg-clip-text text-transparent relative">
                    Automation
                    <motion.div 
                      className="absolute -inset-4 bg-[#FF6500]/20 blur-2xl rounded-lg opacity-50"
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p 
                  className="text-xl sm:text-2xl text-white/90 leading-relaxed font-montserrat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Book a free strategy call and discover how OpswayAI can streamline your operations.
                </motion.p>

                {/* Confirmation Message */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <p className="text-white font-semibold font-montserrat">
                      Thanks! We'll be in touch shortly to confirm your session.
                    </p>
                  </div>
                  <p className="text-white/80 text-sm font-montserrat">
                    No setup required. Just a conversation to explore what's possible.
                  </p>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div 
                  className="grid grid-cols-3 gap-4 pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  {[
                    { icon: <Shield className="w-5 h-5" />, text: "100% Free" },
                    { icon: <Clock className="w-5 h-5" />, text: "30 Minutes" },
                    { icon: <Star className="w-5 h-5" />, text: "Expert Advice" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.4, delay: 1.0 + (index * 0.1) }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-[#FF6500] mb-2 flex justify-center">{item.icon}</div>
                      <div className="text-white/90 text-sm font-montserrat font-semibold">{item.text}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Column - Calendly Widget */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
                  {/* Widget Header */}
                  <div className="bg-gradient-to-r from-[#FF6500]/20 to-[#ff8533]/20 px-6 py-4 border-b border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#FF6500] rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold font-montserrat">Schedule Your Strategy Call</h4>
                        <p className="text-white/80 text-sm font-montserrat">Choose a time that works for you</p>
                      </div>
                    </div>
                  </div>

                  {/* Calendly Widget */}
                  <div className="p-6">
                    <div 
                      className="calendly-inline-widget" 
                      data-url="https://calendly.com/erjonkrasniqi121?hide_landing_page_details=1&hide_gdpr_banner=1" 
                      style={{ minWidth: '280px', height: '350px' }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CSS for grid animation */}
        <style jsx>{`
          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
        `}</style>
      </section>

      <Footer />
    </div>
  );
};

export default ScheduleCallPage;