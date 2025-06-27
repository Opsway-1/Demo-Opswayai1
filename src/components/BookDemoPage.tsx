import React, { useState, useEffect } from 'react';
import { CheckCircle, User, Building, Mail, Settings, Sparkles, Zap, Clock, Shield, Star, ArrowRight, Play, Lock, FileCheck, UserCheck, RefreshCw, Database, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';

const BookDemoPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    serviceOfInterest: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentStep, setCurrentStep] = useState(0);
  const [activeAutomation, setActiveAutomation] = useState(0);

  // Scroll to top when component mounts - ensure it's immediate
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // Auto-progress through automation steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAutomation((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const serviceOptions = [
    { value: '', label: 'Select a service...' },
    { value: 'lead-generation', label: 'Lead Generation', icon: '🎯', description: 'Automate prospect identification and outreach' },
    { value: 'ai-assistants', label: 'AI Assistants', icon: '🤖', description: '24/7 intelligent customer support' },
    { value: 'automation', label: 'Automation', icon: '⚡', description: 'Streamline workflows and processes' },
    { value: 'website-development', label: 'Website Development', icon: '🌐', description: 'AI-powered responsive websites' }
  ];

  const automationWorkflows = [
    {
      id: 1,
      title: "Email Follow-ups",
      description: "Automated email sequences based on customer behavior",
      icon: <Send className="w-5 h-5" />,
      color: "from-blue-500 to-blue-600",
      status: "Smart Timing",
      details: "AI analyzes customer engagement patterns to send follow-up emails at optimal times, increasing response rates and maintaining consistent communication."
    },
    {
      id: 2,
      title: "CRM Integration",
      description: "Sync customer data across all your business systems",
      icon: <Database className="w-5 h-5" />,
      color: "from-green-500 to-green-600",
      status: "Real-Time Sync",
      details: "Automatically update customer records, track interactions, and maintain clean data across your CRM, email platform, and other business tools."
    },
    {
      id: 3,
      title: "Task Automation",
      description: "Handle repetitive tasks without manual intervention",
      icon: <RefreshCw className="w-5 h-5" />,
      color: "from-purple-500 to-purple-600",
      status: "Always Running",
      details: "Automate routine tasks like data entry, appointment scheduling, invoice processing, and report generation to free up your team's time."
    },
    {
      id: 4,
      title: "Smart Workflows",
      description: "Custom automation flows tailored to your business",
      icon: <Bot className="w-5 h-5" />,
      color: "from-[#FF6500] to-[#ff8533]",
      status: "Intelligent",
      details: "Create complex automation workflows that adapt to different scenarios, handle exceptions, and make decisions based on your business rules."
    }
  ];

  const testimonials = [
    { name: "Sarah Johnson", company: "TechCorp", text: "OpswayAI transformed our lead generation process. We saw 300% increase in qualified leads within the first month!" },
    { name: "Marcus Chen", company: "GrowthLab", text: "The AI assistants handle 80% of our customer inquiries automatically. Game-changing for our support team." },
    { name: "Elena Rodriguez", company: "ScaleUp Inc", text: "Implementation was seamless. The ROI was evident within weeks of deployment." }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    // Scroll to top after submission
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const goToHeroSection = () => {
    // Clear the hash and go to the main page
    window.location.hash = '';
    window.location.href = '/';
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 100);
  };

  const isFormValid = formData.firstName && formData.lastName && formData.companyName && formData.email && formData.serviceOfInterest;
  const completionPercentage = Object.values(formData).filter(Boolean).length / 5 * 100;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Success Page with proper spacing */}
        <div className="pt-20 min-h-screen bg-gradient-to-br from-[#0B192C] via-[#1a2b4a] to-[#0B192C] relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-20 left-20 w-96 h-96 bg-[#FF6500]/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-20 right-20 w-80 h-80 bg-green-500/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Floating particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10 flex items-center justify-center min-h-screen py-20">
            <div className="max-w-4xl mx-auto text-center">
              {/* Success Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                className="mb-8"
              >
                <motion.div 
                  className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 2, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                >
                  <CheckCircle className="w-12 h-12 text-white" />
                </motion.div>
              </motion.div>

              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-montserrat"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Demo Request
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  Confirmed!
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl text-white/90 mb-8 font-montserrat leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Thanks! We'll be in touch within 24 hours to schedule your personalized demo.
              </motion.p>

              {/* Next Steps Cards */}
              <motion.div 
                className="grid md:grid-cols-3 gap-6 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {[
                  { step: "1", title: "Review & Prepare", desc: "Our team reviews your needs", icon: "📋" },
                  { step: "2", title: "Schedule Call", desc: "We'll contact you within 24 hours", icon: "📅" },
                  { step: "3", title: "Live Demo", desc: "See OpswayAI in action", icon: "🚀" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <div className="w-10 h-10 bg-[#FF6500] rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg font-montserrat">{item.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 font-montserrat">{item.title}</h3>
                    <p className="text-white/80 font-montserrat text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <Button
                  onClick={goToHeroSection}
                  className="group bg-[#FF6500] hover:bg-[#FF6500]/90 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden font-montserrat"
                >
                  <span className="relative z-10 flex items-center">
                    Back to Website
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                </Button>

                <button className="group text-white/90 hover:text-white font-semibold text-lg transition-all duration-300 px-6 py-3 rounded-xl hover:bg-white/10 font-montserrat">
                  <Play className="mr-2 w-5 h-5 inline transition-transform group-hover:scale-110" />
                  Watch Product Tour
                </button>
              </motion.div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Main Form Page with proper spacing from navigation */}
      <div className="pt-20 min-h-screen bg-gradient-to-br from-[#0B192C] via-[#1a2b4a] to-[#0B192C] relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
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
          {Array.from({ length: 15 }).map((_, i) => (
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

        <div className="container mx-auto px-6 lg:px-8 relative z-10 py-12 lg:py-16">
          <div className="min-h-[calc(100vh-10rem)] flex items-center">
            <div className="w-full max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Column - Hero Content */}
                <motion.div 
                  className="space-y-6 lg:space-y-8"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Floating badge */}
                  <motion.div 
                    className="inline-flex items-center bg-[#FF6500]/20 border border-[#FF6500]/30 rounded-full px-4 py-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Sparkles className="w-4 h-4 text-[#FF6500] mr-2" />
                    <span className="text-[#FF6500] font-semibold font-montserrat text-sm">Book Your Free Demo</span>
                  </motion.div>

                  {/* Main headline */}
                  <motion.h1 
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[0.9] tracking-tight font-montserrat"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <span className="inline-block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      Get a Free AI Demo Built for Your Business
                    </span>
                    <br />
                    <span className="inline-block bg-gradient-to-r from-[#FF6500] to-[#ff8533] bg-clip-text text-transparent relative">
                      in 12 Hours
                      <motion.div 
                        className="absolute -inset-4 bg-[#FF6500]/20 blur-2xl rounded-lg opacity-50"
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </span>
                  </motion.h1>

                  {/* Subheadline */}
                  <motion.p 
                    className="text-lg sm:text-xl text-white/90 leading-relaxed font-montserrat"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Fill out the form and we will build a working AI system tailored to your company and deliver it to your inbox within 12 hours.
                  </motion.p>

                  {/* Automation Workflow Visualization */}
                  <motion.div 
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <h3 className="text-white font-bold mb-4 font-montserrat text-center">
                      How Our Automation Works
                    </h3>
                    
                    {/* Automation steps */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {automationWorkflows.map((workflow, index) => (
                        <motion.div
                          key={workflow.id}
                          className={`p-4 rounded-xl border transition-all duration-500 cursor-pointer ${
                            activeAutomation === index
                              ? 'bg-white/15 border-[#FF6500]/50'
                              : 'bg-white/5 border-white/20 hover:bg-white/10'
                          }`}
                          onClick={() => setActiveAutomation(index)}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className={`w-8 h-8 bg-gradient-to-r ${workflow.color} rounded-lg flex items-center justify-center text-white mb-2`}>
                            {workflow.icon}
                          </div>
                          <h4 className="text-white font-semibold text-sm font-montserrat mb-1">
                            {workflow.title}
                          </h4>
                          <p className="text-white/70 text-xs font-montserrat">
                            {workflow.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Active workflow details */}
                    <motion.div
                      key={activeAutomation}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/5 rounded-lg p-4 border border-white/10"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`w-6 h-6 bg-gradient-to-r ${automationWorkflows[activeAutomation].color} rounded-lg flex items-center justify-center text-white`}>
                          {automationWorkflows[activeAutomation].icon}
                        </div>
                        <span className="text-white font-semibold font-montserrat text-sm">
                          {automationWorkflows[activeAutomation].title}
                        </span>
                        <span className="text-[#FF6500] text-xs font-montserrat bg-[#FF6500]/20 px-2 py-1 rounded">
                          {automationWorkflows[activeAutomation].status}
                        </span>
                      </div>
                      <p className="text-white/80 text-xs font-montserrat leading-relaxed">
                        {automationWorkflows[activeAutomation].details}
                      </p>
                    </motion.div>

                    {/* Progress indicators */}
                    <div className="flex justify-center mt-4 space-x-2">
                      {automationWorkflows.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveAutomation(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === activeAutomation 
                              ? 'bg-[#FF6500] scale-125' 
                              : 'bg-white/30 hover:bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right Column - Compact Form */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Progress indicator */}
                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/80 font-montserrat text-sm">Form Progress</span>
                      <span className="text-[#FF6500] font-bold font-montserrat text-sm">{Math.round(completionPercentage)}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-[#FF6500] to-[#ff8533] h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${completionPercentage}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </motion.div>

                  {/* Form Card */}
                  <motion.div 
                    className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Form Header */}
                    <div className="bg-gradient-to-r from-[#FF6500]/20 to-[#ff8533]/20 px-6 py-4 border-b border-white/10">
                      <h2 className="text-xl font-bold text-white font-montserrat flex items-center">
                        <Sparkles className="w-5 h-5 mr-2 text-[#FF6500]" />
                        Get your Free Demo build
                      </h2>
                      <p className="text-white/80 mt-1 font-montserrat text-sm">
                        Get a personalized walkthrough in 30 minutes
                      </p>
                    </div>

                    {/* Form Content */}
                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                      {/* Name Fields Row */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.8 }}
                        >
                          <label htmlFor="firstName" className="block text-sm font-semibold text-white mb-1 font-montserrat">
                            <User className="w-3 h-3 inline mr-1 text-[#FF6500]" />
                            First Name *
                          </label>
                          <motion.input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('firstName')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-[#FF6500] focus:border-transparent transition-all duration-300 font-montserrat backdrop-blur-sm text-sm"
                            placeholder="Enter your first name"
                            whileFocus={{ scale: 1.02 }}
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.9 }}
                          className="relative"
                        >
                          <label htmlFor="lastName" className="block text-sm font-semibold text-white mb-1 font-montserrat">
                            <User className="w-3 h-3 inline mr-1 text-[#FF6500]" />
                            Last Name *
                          </label>
                          <motion.input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('lastName')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-[#FF6500] focus:border-transparent transition-all duration-300 font-montserrat backdrop-blur-sm text-sm"
                            placeholder="Enter your last name"
                            whileFocus={{ scale: 1.02 }}
                          />
                        </motion.div>
                      </div>

                      {/* Company Name */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.0 }}
                        className="relative"
                      >
                        <label htmlFor="companyName" className="block text-sm font-semibold text-white mb-1 font-montserrat">
                          <Building className="w-3 h-3 inline mr-1 text-[#FF6500]" />
                          Company Name *
                        </label>
                        <motion.input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('companyName')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-[#FF6500] focus:border-transparent transition-all duration-300 font-montserrat backdrop-blur-sm text-sm"
                          placeholder="Enter your company name"
                          whileFocus={{ scale: 1.02 }}
                        />
                      </motion.div>

                      {/* Email Address */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.1 }}
                        className="relative"
                      >
                        <label htmlFor="email" className="block text-sm font-semibold text-white mb-1 font-montserrat">
                          <Mail className="w-3 h-3 inline mr-1 text-[#FF6500]" />
                          Email Address *
                        </label>
                        <motion.input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-[#FF6500] focus:border-transparent transition-all duration-300 font-montserrat backdrop-blur-sm text-sm"
                          placeholder="Enter your email address"
                          whileFocus={{ scale: 1.02 }}
                        />
                      </motion.div>

                      {/* Other Message Field */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.25 }}
                        className="relative"
                      >
                        <label htmlFor="otherMessage" className="block text-sm font-semibold text-white mb-1 font-montserrat">
                          <Mail className="w-3 h-3 inline mr-1 text-[#FF6500]" />
                          Other
                        </label>
                        <motion.textarea
                          id="otherMessage"
                          name="otherMessage"
                          rows={6}
                          placeholder="Tell us more about your business needs..."
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-[#FF6500] focus:border-transparent transition-all duration-300 font-montserrat backdrop-blur-sm text-sm resize-none"
                          whileFocus={{ scale: 1.02 }}
                        />
                      </motion.div>

                      {/* Service of Interest */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.3 }}
                        className="relative"
                      >
                        <label htmlFor="serviceOfInterest" className="block text-sm font-semibold text-white mb-1 font-montserrat">
                          <Settings className="w-3 h-3 inline mr-1 text-[#FF6500]" />
                          Service of Interest *
                        </label>
                        <motion.select
                          id="serviceOfInterest"
                          name="serviceOfInterest"
                          value={formData.serviceOfInterest}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('serviceOfInterest')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-[#FF6500] focus:border-transparent transition-all duration-300 font-montserrat backdrop-blur-sm text-sm"
                          whileFocus={{ scale: 1.02 }}
                        >
                          {serviceOptions.map((option) => (
                            <option 
                              key={option.value} 
                              value={option.value} 
                              disabled={!option.value}
                              className="bg-[#0B192C] text-white"
                            >
                              {option.value ? `${option.icon} ${option.label}` : option.label}
                            </option>
                          ))}
                        </motion.select>
                        
                        {/* Service description */}
                        {formData.serviceOfInterest && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-2 p-2 bg-[#FF6500]/10 rounded-lg border border-[#FF6500]/20"
                          >
                            <p className="text-white/90 text-xs font-montserrat">
                              {serviceOptions.find(opt => opt.value === formData.serviceOfInterest)?.description}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>

                      {/* Submit Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.4 }}
                        className="pt-2"
                      >
                        <motion.button
                          type="submit"
                          disabled={!isFormValid || isLoading}
                          className="w-full group bg-gradient-to-r from-[#FF6500] to-[#ff8533] hover:from-[#FF6500]/90 hover:to-[#ff8533]/90 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-bold px-6 py-3 rounded-lg text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden font-montserrat"
                          whileHover={{ scale: isFormValid ? 1.05 : 1 }}
                          whileTap={{ scale: isFormValid ? 0.95 : 1 }}
                        >
                          <span className="relative z-10 flex items-center justify-center">
                            {isLoading ? (
                              <>
                                <motion.div 
                                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                />
                                Processing...
                              </>
                            ) : (
                              <>
                                Send Me My Demo
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                              </>
                            )}
                          </span>
                          
                          {!isLoading && isFormValid && (
                            <motion.div 
                              className="absolute inset-0 bg-white/20"
                              initial={{ x: '-100%' }}
                              whileHover={{ x: '100%' }}
                              transition={{ duration: 0.6 }}
                              style={{ skewX: '12deg' }}
                            />
                          )}
                        </motion.button>
                      </motion.div>

                      {/* Form Footer */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 1.5 }}
                        className="text-center pt-2"
                      >
                        <p className="text-white/60 text-xs font-montserrat">
                          We will never share your data. It is only used to create your custom AI demo.
                        </p>
                      </motion.div>
                    </form>
                  </motion.div>

                  {/* Floating elements around form */}
                  <motion.div 
                    className="absolute -top-3 -right-3 w-12 h-12 bg-[#FF6500]/20 backdrop-blur-sm rounded-xl border border-[#FF6500]/30 flex items-center justify-center"
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Zap className="w-6 h-6 text-[#FF6500]" />
                  </motion.div>
                  
                  <motion.div 
                    className="absolute -bottom-3 -left-3 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center"
                    animate={{ 
                      y: [0, 8, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  >
                    <Star className="w-5 h-5 text-white" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BookDemoPage;