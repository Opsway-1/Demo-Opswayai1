import React, { useState, useEffect } from 'react';
import { CheckCircle, Globe, Calendar, Database, Bot, ArrowRight, Star, Shield, Zap, Users, TrendingUp, Code, Smartphone, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';

const SmartWebsitesPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(0);

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

  // Auto-progress through website features
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToBookDemo = () => {
    window.location.hash = '#book-demo';
    window.location.reload();
  };

  const benefits = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Lead Collection",
      description: "Advanced lead capture forms with smart validation, progressive profiling, and automatic CRM integration to maximize conversion rates."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Booking Systems",
      description: "Integrated appointment scheduling with calendar sync, automated reminders, and payment processing for seamless customer experience."
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Real-time Integrations",
      description: "Connect your website to all your business tools with live data sync, automated workflows, and intelligent customer journey tracking."
    }
  ];

  const websiteFeatures = [
    {
      id: 1,
      title: "Smart Contact Forms",
      description: "AI-powered forms that adapt to user behavior",
      icon: <Database className="w-5 h-5" />,
      color: "from-blue-500 to-blue-600",
      status: "Live Capture",
      details: "Contact forms that intelligently collect visitor information, validate data in real-time, and automatically route leads to the right team members based on inquiry type."
    },
    {
      id: 2,
      title: "Live Chat Integration",
      description: "24/7 AI chatbot with human handoff",
      icon: <Bot className="w-5 h-5" />,
      color: "from-green-500 to-green-600",
      status: "Always Online",
      details: "Intelligent chatbots that handle common questions, qualify leads, and seamlessly transfer complex inquiries to human agents when needed."
    },
    {
      id: 3,
      title: "Booking Calendar",
      description: "Automated appointment scheduling system",
      icon: <Calendar className="w-5 h-5" />,
      color: "from-purple-500 to-purple-600",
      status: "Auto-Sync",
      details: "Integrated calendar system that allows visitors to book appointments directly from your website, with automatic confirmations and reminder emails."
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Real-time visitor behavior tracking",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "from-[#FF6500] to-[#ff8533]",
      status: "Real-Time",
      details: "Comprehensive analytics that track visitor behavior, conversion rates, and engagement metrics to optimize your website's performance continuously."
    }
  ];

  const features = [
    {
      title: "AI-Powered Optimization",
      description: "Machine learning algorithms continuously optimize your website's performance, layout, and content for maximum conversions.",
      icon: "🤖",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Mobile-First Design",
      description: "Responsive designs that look perfect on every device, with touch-optimized interfaces and lightning-fast mobile performance.",
      icon: "📱",
      color: "from-green-500 to-green-600"
    },
    {
      title: "SEO Optimization",
      description: "Built-in SEO tools and optimization features that help your website rank higher in search results and attract more visitors.",
      icon: "🔍",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting tools that provide insights into visitor behavior and conversion performance.",
      icon: "📊",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Security & Performance",
      description: "Enterprise-grade security features with SSL certificates, DDoS protection, and optimized hosting for maximum uptime.",
      icon: "🔒",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Content Management",
      description: "Easy-to-use content management system that allows you to update your website without any technical knowledge.",
      icon: "✏️",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-[#0B192C] overflow-hidden">
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
          <div className="pt-32 pb-20">
            <div className="max-w-6xl mx-auto">
              
              {/* Hero Content */}
              <div className="text-center mb-16">
                <motion.h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight mb-8 font-montserrat"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Websites That Work Like a
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#FF6500] to-[#ff8533] bg-clip-text text-transparent relative">
                    Team Member
                    <motion.div 
                      className="absolute -inset-4 bg-[#FF6500]/20 blur-2xl rounded-lg opacity-50"
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </span>
                </motion.h1>

                <motion.p 
                  className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12 font-montserrat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  We don't just design good-looking sites. We build sites that convert, automate, and integrate seamlessly with your business operations.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Button
                    onClick={goToBookDemo}
                    className="group bg-[#FF6500] hover:bg-[#FF6500]/90 text-white font-semibold px-12 py-6 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden font-montserrat"
                  >
                    <span className="relative z-10 flex items-center">
                      Demo Smart Website
                      <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                  </Button>
                </motion.div>

                {/* Website Features Visualization */}
                <motion.div 
                  className="max-w-5xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 relative overflow-hidden">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2 font-montserrat">
                        How We Integrate Automation Into Your Website
                      </h3>
                      <p className="text-white/80 font-montserrat">
                        Watch how smart features work together on your site
                      </p>
                    </div>

                    {/* Website Features Grid */}
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                      {websiteFeatures.map((feature, index) => (
                        <motion.div
                          key={feature.id}
                          className={`relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                            activeFeature === index
                              ? 'bg-white/20 border-[#FF6500]/50 scale-105'
                              : 'bg-white/5 border-white/20 hover:bg-white/10'
                          }`}
                          onClick={() => setActiveFeature(index)}
                          whileHover={{ y: -2 }}
                        >
                          {/* Feature number */}
                          <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#FF6500] rounded-full flex items-center justify-center text-white font-bold text-sm font-montserrat">
                            {feature.id}
                          </div>

                          {/* Icon */}
                          <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-4 mx-auto`}>
                            {feature.icon}
                          </div>

                          {/* Content */}
                          <h4 className="text-white font-bold text-center mb-2 font-montserrat text-sm">
                            {feature.title}
                          </h4>
                          <p className="text-white/80 text-center text-xs font-montserrat leading-relaxed mb-3">
                            {feature.description}
                          </p>
                          
                          {/* Status */}
                          <div className="bg-[#FF6500]/20 rounded-lg px-3 py-1 text-center">
                            <span className="text-[#FF6500] font-bold text-xs font-montserrat">
                              {feature.status}
                            </span>
                          </div>

                          {/* Active indicator */}
                          {activeFeature === index && (
                            <motion.div
                              className="absolute inset-0 bg-[#FF6500]/10 rounded-2xl"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Detailed explanation for active feature */}
                    <motion.div
                      key={activeFeature}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white/5 rounded-2xl p-6 border border-white/10"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-r ${websiteFeatures[activeFeature].color} rounded-lg flex items-center justify-center text-white`}>
                          {websiteFeatures[activeFeature].icon}
                        </div>
                        <h4 className="text-xl font-bold text-white font-montserrat">
                          {websiteFeatures[activeFeature].title}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          <span className="text-green-400 text-sm font-montserrat">
                            {websiteFeatures[activeFeature].status}
                          </span>
                        </div>
                      </div>
                      <p className="text-white/90 font-montserrat leading-relaxed">
                        {websiteFeatures[activeFeature].details}
                      </p>
                    </motion.div>

                    {/* Progress indicators */}
                    <div className="flex justify-center mt-6 space-x-2">
                      {websiteFeatures.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveFeature(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === activeFeature 
                              ? 'bg-[#FF6500] scale-125' 
                              : 'bg-white/30 hover:bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column - Benefits */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="space-y-8">
                  {benefits.map((benefit, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      {/* Icon Badge */}
                      <div className="flex-shrink-0 w-12 h-12 bg-[#FF6500] rounded-xl flex items-center justify-center text-white shadow-lg">
                        {benefit.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#0B192C] mb-2 font-montserrat">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed font-montserrat">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional CTA */}
                <motion.div 
                  className="pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Button
                    onClick={goToBookDemo}
                    className="group bg-[#0B192C] hover:bg-[#0B192C]/90 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden font-montserrat"
                  >
                    <span className="relative z-10 flex items-center">
                      Build My Website
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Column - Website Mockup */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative bg-gradient-to-br from-[#0B192C] to-[#1a2b4a] rounded-3xl p-8 shadow-2xl overflow-hidden">
                  {/* Background elements */}
                  <div className="absolute inset-0">
                    <div className="absolute top-8 right-8 w-32 h-32 bg-[#FF6500]/20 rounded-full blur-2xl" />
                    <div className="absolute bottom-8 left-8 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                  </div>

                  {/* Website mockup */}
                  <div className="relative z-10 space-y-6">
                    {/* Browser header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                        <div className="w-3 h-3 bg-green-400 rounded-full" />
                      </div>
                      <div className="bg-white/10 rounded-lg px-4 py-1">
                        <span className="text-white/60 text-sm font-montserrat">yourwebsite.com</span>
                      </div>
                    </div>
                    
                    {/* Website content */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-white font-bold text-lg font-montserrat">Your Business</div>
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-[#FF6500] rounded-lg" />
                          <div className="w-8 h-8 bg-blue-500 rounded-lg" />
                        </div>
                      </div>

                      {/* Hero section */}
                      <div className="bg-white/5 rounded-xl p-4 mb-4">
                        <div className="text-white font-semibold font-montserrat mb-2">Transform Your Business</div>
                        <div className="text-white/70 text-sm font-montserrat mb-3">Get started with our solutions today</div>
                        <div className="bg-[#FF6500] text-white px-4 py-2 rounded-lg text-sm font-montserrat inline-block">
                          Book Demo
                        </div>
                      </div>

                      {/* Features grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { icon: "📊", title: "Analytics" },
                          { icon: "🔒", title: "Security" },
                          { icon: "📱", title: "Mobile" },
                          { icon: "⚡", title: "Fast" }
                        ].map((item, index) => (
                          <div key={index} className="bg-white/5 rounded-lg p-3 text-center">
                            <div className="text-lg mb-1">{item.icon}</div>
                            <div className="text-white/80 text-xs font-montserrat">{item.title}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Performance indicators */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-white/80 font-montserrat">Live & Optimizing</span>
                      </div>
                      <div className="text-[#FF6500] font-montserrat">High Performance</div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-16 left-16 w-4 h-4 bg-[#FF6500]/60 rounded-full animate-float" />
                  <div className="absolute bottom-20 right-20 w-6 h-6 border-2 border-white/30 rounded-lg rotate-12 animate-float-delayed" />
                </div>

                {/* Floating stats around mockup */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-[#FF6500]" />
                    <div>
                      <div className="text-[#0B192C] font-bold text-sm font-montserrat">Fast</div>
                      <div className="text-gray-600 text-xs font-montserrat">Load Time</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <div>
                      <div className="text-[#0B192C] font-bold text-sm font-montserrat">High</div>
                      <div className="text-gray-600 text-xs font-montserrat">Conversions</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-20">
              <motion.h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B192C] mb-6 leading-tight font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Modern Features for
                <br />
                <span className="bg-gradient-to-r from-[#FF6500] to-[#ff8533] bg-clip-text text-transparent">
                  Smart Websites
                </span>
              </motion.h2>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#FF6500]/20 transition-all duration-400 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {/* Feature Icon */}
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  {/* Feature Content */}
                  <h3 className="text-xl font-bold text-[#0B192C] mb-4 group-hover:text-[#FF6500] transition-colors duration-300 font-montserrat">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed font-montserrat">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 lg:py-32 bg-[#FF6500] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
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
              Ready to Build Your
              <br />
              Smart Website?
            </motion.h2>

            <motion.p 
              className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-montserrat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join hundreds of businesses already using smart websites to convert more visitors, automate operations, and grow faster.
            </motion.p>

            {/* Trust indicators */}
            <motion.div 
              className="grid md:grid-cols-3 gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {[
                { icon: <Shield className="w-5 h-5" />, text: "SSL Security" },
                { icon: <Star className="w-5 h-5" />, text: "5-Star Support" },
                { icon: <Zap className="w-5 h-5" />, text: "Fast Delivery" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <div className="text-white">{item.icon}</div>
                  <span className="text-white font-semibold font-montserrat">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={goToBookDemo}
                className="group bg-white hover:bg-white/90 text-[#FF6500] font-bold px-16 py-8 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden font-montserrat"
              >
                <span className="relative z-10 flex items-center">
                  Get Website Demo
                  <ArrowRight className="ml-4 w-7 h-7 transition-transform group-hover:translate-x-2" />
                </span>
                
                <div className="absolute inset-0 bg-[#FF6500]/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartWebsitesPage;