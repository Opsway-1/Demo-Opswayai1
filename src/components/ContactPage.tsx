import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, Heart, MessageSquare, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';

const ContactPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const goToBookDemo = () => {
    window.location.hash = '#book-demo';
    window.location.reload();
  };

  const goToScheduleCall = () => {
    window.location.hash = '#schedule-call';
    window.location.reload();
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "hello@opswayai.com",
      link: "mailto:hello@opswayai.com",
      description: "Get in touch for any questions"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+383 (44) 450-008",
      link: "tel:+38344450008",
      description: "Call us during business hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Address",
      value: "Pristina, Kosovo, Europe",
      link: "#",
      description: "Serving clients worldwide"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Business Hours",
      value: "Mon-Fri: 9AM-6PM CET",
      link: "#",
      description: "24/7 support for Enterprise clients"
    }
  ];

  const contactMethods = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Live Chat",
      description: "Get instant answers to your questions",
      action: "Start Chat",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Schedule Call",
      description: "Book a 30-minute strategy session",
      action: "Book Now",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Send Email",
      description: "Detailed questions and proposals",
      action: "Email Us",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Full-Screen Hero Section */}
      <section className="relative min-h-screen bg-[#0B192C] overflow-hidden flex items-center pt-20">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-[#FF6500]/15 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 4, repeat: Infinity }}
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

          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto py-12">
            
            {/* Hero Content */}
            <div className="text-center mb-16">
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight mb-8 font-montserrat"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Ready to See What's
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#FF6500] to-[#ff8533] bg-clip-text text-transparent relative">
                  Possible?
                  <motion.div 
                    className="absolute -inset-4 bg-[#FF6500]/20 blur-2xl rounded-lg opacity-50"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-16 font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Reach out and we'll build a smarter path forward together.
              </motion.p>

              {/* Animated Contact Information Box */}
              <motion.div 
                className="max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 relative overflow-hidden shadow-2xl">
                  {/* Background animation elements */}
                  <div className="absolute inset-0">
                    <motion.div 
                      className="absolute top-0 left-0 w-32 h-32 bg-[#FF6500]/10 rounded-full blur-2xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        x: [0, 20, 0],
                        y: [0, -10, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"
                      animate={{ 
                        scale: [1.1, 1, 1.1],
                        x: [0, -15, 0],
                        y: [0, 10, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    />
                  </div>

                  {/* Header */}
                  <div className="relative z-10 text-center mb-8">
                    <motion.h3 
                      className="text-2xl sm:text-3xl font-bold text-white mb-4 font-montserrat"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      How to Connect With Us
                    </motion.h3>
                    <motion.p 
                      className="text-white/80 font-montserrat leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                    >
                      Choose the method that works best for you. Our goal is to understand your needs and show you exactly how AI can transform your business operations.
                    </motion.p>
                  </div>

                  {/* Contact Methods Grid */}
                  <div className="relative z-10 grid md:grid-cols-3 gap-6 mb-8">
                    {contactMethods.map((method, index) => (
                      <motion.div 
                        key={index}
                        className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/10 hover:border-[#FF6500]/30 transition-all duration-400 cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.2 + (index * 0.1) }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        onClick={index === 0 ? goToBookDemo : index === 1 ? goToBookDemo : () => window.location.href = 'mailto:hello@opswayai.com'}
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          {method.icon}
                        </div>
                        <h4 className="text-white font-bold mb-2 font-montserrat group-hover:text-[#FF6500] transition-colors duration-300">
                          {method.title}
                        </h4>
                        <p className="text-white/80 text-sm font-montserrat leading-relaxed mb-4">
                          {method.description}
                        </p>
                        <div className="flex items-center text-[#FF6500] font-semibold text-sm font-montserrat group-hover:translate-x-1 transition-transform duration-300">
                          {method.action}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </div>

                        {/* Hover effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF6500]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12 pointer-events-none rounded-2xl" />
                      </motion.div>
                    ))}
                  </div>

                  {/* What to Expect */}
                  <motion.div 
                    className="relative z-10 bg-white/5 rounded-2xl p-6 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                  >
                    <h4 className="text-white font-bold mb-4 font-montserrat text-center">
                      What to Expect When You Reach Out
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { step: "1", title: "Quick Response", desc: "We'll get back to you within 2 hours during business hours" },
                        { step: "2", title: "Understanding", desc: "We'll listen to your challenges and goals" },
                        { step: "3", title: "Custom Solution", desc: "We'll show you exactly how AI can help your business" }
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          className="text-center"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 1.7 + (index * 0.1) }}
                        >
                          <div className="w-8 h-8 bg-[#FF6500] rounded-full flex items-center justify-center text-white font-bold text-sm font-montserrat mx-auto mb-2">
                            {item.step}
                          </div>
                          <h5 className="text-white font-semibold text-sm font-montserrat mb-1">
                            {item.title}
                          </h5>
                          <p className="text-white/70 text-xs font-montserrat leading-relaxed">
                            {item.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Trust Indicators */}
                  <motion.div 
                    className="relative z-10 flex flex-wrap justify-center gap-4 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 2.0 }}
                  >
                    {[
                      { icon: <CheckCircle className="w-4 h-4" />, text: "No sales pressure" },
                      { icon: <CheckCircle className="w-4 h-4" />, text: "Free consultation" },
                      { icon: <CheckCircle className="w-4 h-4" />, text: "Expert guidance" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 bg-white/5 rounded-lg px-3 py-2">
                        <div className="text-green-400">{item.icon}</div>
                        <span className="text-white/90 text-sm font-montserrat">{item.text}</span>
                      </div>
                    ))}
                  </motion.div>

                  {/* Animated border */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl border-2 border-[#FF6500]/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section - Enhanced Single Column Layout */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl sm:text-5xl font-bold text-[#0B192C] leading-tight font-montserrat mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Get in Touch
              </motion.h2>

              <motion.p 
                className="text-lg text-gray-600 leading-relaxed font-montserrat max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                No setup fees, 30-day free trial, cancel anytime
              </motion.p>
            </div>

            {/* Contact Information Grid - 2x2 Layout */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="group bg-[#F4F4F4] rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-400 border border-transparent hover:border-[#FF6500]/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-14 h-14 bg-[#FF6500] rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {info.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0B192C] mb-2 font-montserrat group-hover:text-[#FF6500] transition-colors duration-300">
                        {info.label}
                      </h3>
                      {info.link !== '#' ? (
                        <a 
                          href={info.link}
                          className="text-[#FF6500] font-semibold font-montserrat hover:underline block mb-3 text-lg"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-[#FF6500] font-semibold font-montserrat mb-3 text-lg">
                          {info.value}
                        </div>
                      )}
                      <p className="text-gray-600 font-montserrat leading-relaxed">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced CTA Section */}
            <motion.div 
              className="bg-gradient-to-r from-[#0B192C] to-[#1a2b4a] rounded-3xl p-12 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Background elements */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#FF6500]/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
              </div>
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-3xl sm:text-4xl font-bold text-white mb-6 font-montserrat"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Prefer a Personal Touch?
                </motion.h3>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-montserrat leading-relaxed">
                  Schedule a free 30-minute consultation with our automation experts to discuss your specific needs and goals.
                </p>
                
                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {[
                    { icon: "🚀", title: "Quick Setup", desc: "Get started in minutes" },
                    { icon: "💡", title: "Expert Guidance", desc: "Personalized recommendations" },
                    { icon: "🎯", title: "Custom Solutions", desc: "Tailored to your needs" }
                  ].map((benefit, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-3xl mb-3">{benefit.icon}</div>
                      <h4 className="text-white font-bold mb-2 font-montserrat">{benefit.title}</h4>
                      <p className="text-white/80 text-sm font-montserrat">{benefit.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <Button
                  onClick={goToScheduleCall}
                  className="group bg-[#FF6500] hover:bg-[#FF6500]/90 text-white font-bold px-12 py-6 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden font-montserrat"
                >
                  <span className="relative z-10 flex items-center">
                    Schedule Consultation
                    <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                </Button>

                <p className="text-white/70 mt-6 font-montserrat">
                  No commitment required • Free consultation • Expert advice
                </p>
              </div>
            </motion.div>

            {/* Company Information */}
            <motion.div 
              className="mt-16 grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              {/* About Kosovo */}
              <div className="bg-[#F4F4F4] rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">🇽🇰</span>
                  <h4 className="font-bold text-[#0B192C] font-montserrat text-xl">Based in Kosovo</h4>
                </div>
                <p className="text-gray-600 font-montserrat leading-relaxed mb-4">
                  Kosovo is emerging as a technology hub in Southeast Europe, with a young, talented workforce and a growing tech ecosystem.
                </p>
                <div className="text-[#FF6500] font-semibold font-montserrat">
                  Innovation from the heart of the Balkans
                </div>
              </div>

              {/* Global Reach */}
              <div className="bg-[#F4F4F4] rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">🌍</span>
                  <h4 className="font-bold text-[#0B192C] font-montserrat text-xl">Global Reach</h4>
                </div>
                <p className="text-gray-600 font-montserrat leading-relaxed mb-4">
                  We serve clients across 25+ countries worldwide, providing AI automation solutions that work across different time zones and business cultures.
                </p>
                <div className="text-[#FF6500] font-semibold font-montserrat">
                  Local expertise, global impact
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#0B192C] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-80 h-80 bg-[#FF6500]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight font-montserrat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready to Get
              <br />
              <span className="bg-gradient-to-r from-[#FF6500] to-[#ff8533] bg-clip-text text-transparent">
                Started?
              </span>
            </motion.h2>

            <motion.p 
              className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-montserrat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join hundreds of businesses already transforming their operations with OpswayAI. Start your automation journey today.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={goToBookDemo}
                className="group bg-[#FF6500] hover:bg-[#FF6500]/90 text-white font-bold px-16 py-8 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6500]/40 relative overflow-hidden font-montserrat"
              >
                <span className="relative z-10 flex items-center">
                  Demo Build
                  <ArrowRight className="ml-4 w-7 h-7 transition-transform group-hover:translate-x-2" />
                </span>
                
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </Button>
            </motion.div>

            <motion.p 
              className="text-white/60 mt-6 font-montserrat"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
            >
              No setup fees • 30-day free trial • Cancel anytime
            </motion.p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;