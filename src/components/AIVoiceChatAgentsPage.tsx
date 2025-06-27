import React, { useState, useEffect } from 'react';
import { CheckCircle, Bot, MessageSquare, Phone, Headphones, Clock, Users, TrendingUp, Play, Star, Shield, Zap, ArrowRight, Globe, Monitor, Smartphone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';

const AIVoiceChatAgentsPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeDemo, setActiveDemo] = useState('voice');
  const [activeChannel, setActiveChannel] = useState(0);

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

  // Auto-progress through channels
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveChannel((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToBookDemo = () => {
    window.location.hash = '#book-demo';
    window.location.reload();
  };

  const benefits = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Natural conversation flow",
      description: "Advanced NLP technology enables human-like conversations that understand context, intent, and emotion for seamless customer interactions."
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Voice assistant integration",
      description: "Seamlessly integrates with existing phone systems and voice platforms to provide consistent omnichannel support experiences."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Multichannel availability",
      description: "Deploy across website chat, phone calls, SMS, social media, and messaging apps with unified conversation management."
    }
  ];

  const supportChannels = [
    {
      id: 1,
      title: "Website Chat",
      description: "Instant responses to website visitors",
      icon: <Monitor className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      status: "Always Online",
      details: "AI agents handle website chat inquiries instantly, providing product information, troubleshooting, and seamless handoffs to human agents when needed."
    },
    {
      id: 2,
      title: "Social Media",
      description: "Manage Facebook, Twitter, Instagram messages",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      status: "Multi-Platform",
      details: "Monitor and respond to social media messages across all platforms, maintaining brand voice while providing quick resolutions to customer inquiries."
    },
    {
      id: 3,
      title: "Mobile Support",
      description: "SMS and mobile app assistance",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      status: "Real-Time",
      details: "Provide support through SMS, mobile apps, and messaging platforms with context-aware responses that understand customer history and preferences."
    },
    {
      id: 4,
      title: "Voice Calls",
      description: "Phone support with natural conversation",
      icon: <Phone className="w-6 h-6" />,
      color: "from-[#FF6500] to-[#ff8533]",
      status: "Human-Like",
      details: "Handle phone calls with natural voice AI that can understand complex requests, provide detailed explanations, and escalate to humans when appropriate."
    }
  ];

  const features = [
    {
      title: "Intelligent Call Routing",
      description: "AI analyzes caller intent and routes to the most appropriate agent or department automatically.",
      icon: "📞"
    },
    {
      title: "Appointment Booking",
      description: "Automatically schedule meetings, consultations, and service appointments with calendar integration.",
      icon: "📅"
    },
    {
      title: "Order Processing",
      description: "Handle product orders, payment processing, and order tracking with secure transaction management.",
      icon: "🛒"
    },
    {
      title: "FAQ Automation",
      description: "Instantly answer common questions with accurate, up-to-date information from your knowledge base.",
      icon: "❓"
    },
    {
      title: "Sentiment Analysis",
      description: "Real-time emotion detection to escalate frustrated customers to human agents when needed.",
      icon: "😊"
    },
    {
      title: "Multi-language Support",
      description: "Communicate with customers in over 50 languages with native-level fluency and cultural awareness.",
      icon: "🌍"
    }
  ];

  const demoConversations = {
    voice: [
      { type: 'ai', text: "Hello! Thank you for calling OpswayAI. How can I assist you today?" },
      { type: 'user', text: "Hi, I'd like to schedule a demo for your AI automation services." },
      { type: 'ai', text: "I'd be happy to help you schedule a demo! Let me check our available time slots. What's your preferred date and time?" },
      { type: 'user', text: "How about tomorrow afternoon?" },
      { type: 'ai', text: "Perfect! I have availability at 2 PM or 4 PM tomorrow. Which works better for you?" }
    ],
    chat: [
      { type: 'ai', text: "Hi there! 👋 I'm your AI assistant. How can I help you today?" },
      { type: 'user', text: "I need help with my recent order" },
      { type: 'ai', text: "I'd be happy to help with your order! Could you please provide your order number or the email address used for the purchase?" },
      { type: 'user', text: "Order #12345" },
      { type: 'ai', text: "Found it! Your order was shipped yesterday and should arrive by Friday. Here's your tracking link: track.example.com/12345" }
    ]
  };

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
                    Support That Feels Human,
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#FF6500] to-[#ff8533] bg-clip-text text-transparent relative">
                    Available 24/7
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
                  Our voice agents and chatbots can take orders, book appointments, and answer FAQs just like a real team member.
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
                      Test the Agent
                      <Bot className="ml-3 w-5 h-5 transition-transform group-hover:scale-110" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                  </Button>

                </motion.div>

                {/* Customer Support Channels Visualization */}
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
                        How We Handle All Your Customer Channels
                      </h3>
                      <p className="text-white/80 font-montserrat">
                        Watch our AI manage website traffic, social media, and phone calls simultaneously
                      </p>
                    </div>

                    {/* Support Channels */}
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                      {supportChannels.map((channel, index) => (
                        <motion.div
                          key={channel.id}
                          className={`relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                            activeChannel === index
                              ? 'bg-white/20 border-[#FF6500]/50 scale-105'
                              : 'bg-white/5 border-white/20 hover:bg-white/10'
                          }`}
                          onClick={() => setActiveChannel(index)}
                          whileHover={{ y: -2 }}
                        >
                          {/* Channel number */}
                          <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#FF6500] rounded-full flex items-center justify-center text-white font-bold text-sm font-montserrat">
                            {channel.id}
                          </div>

                          {/* Icon */}
                          <div className={`w-12 h-12 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center text-white mb-4 mx-auto`}>
                            {channel.icon}
                          </div>

                          {/* Content */}
                          <h4 className="text-white font-bold text-center mb-2 font-montserrat text-sm">
                            {channel.title}
                          </h4>
                          <p className="text-white/80 text-center text-xs font-montserrat leading-relaxed mb-3">
                            {channel.description}
                          </p>
                          
                          {/* Status */}
                          <div className="bg-[#FF6500]/20 rounded-lg px-3 py-1 text-center">
                            <span className="text-[#FF6500] font-bold text-xs font-montserrat">
                              {channel.status}
                            </span>
                          </div>

                          {/* Active indicator */}
                          {activeChannel === index && (
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

                    {/* Detailed explanation for active channel */}
                    <motion.div
                      key={activeChannel}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white/5 rounded-2xl p-6 border border-white/10"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-r ${supportChannels[activeChannel].color} rounded-lg flex items-center justify-center text-white`}>
                          {supportChannels[activeChannel].icon}
                        </div>
                        <h4 className="text-xl font-bold text-white font-montserrat">
                          {supportChannels[activeChannel].title}
                        </h4>
                      </div>
                      <p className="text-white/90 font-montserrat leading-relaxed">
                        {supportChannels[activeChannel].details}
                      </p>
                    </motion.div>

                    {/* Progress indicators */}
                    <div className="flex justify-center mt-6 space-x-2">
                      {supportChannels.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveChannel(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === activeChannel 
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
                      Demo This Agent
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Column - Interactive Demo */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {/* Demo Toggle */}
                <div className="flex justify-center mb-8">
                  <div className="bg-gray-100 rounded-2xl p-2 flex">
                    <button
                      onClick={() => setActiveDemo('voice')}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 font-montserrat ${
                        activeDemo === 'voice'
                          ? 'bg-[#FF6500] text-white shadow-lg'
                          : 'text-gray-600 hover:text-[#FF6500]'
                      }`}
                    >
                      <Phone className="w-4 h-4 inline mr-2" />
                      Voice Agent
                    </button>
                    <button
                      onClick={() => setActiveDemo('chat')}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 font-montserrat ${
                        activeDemo === 'chat'
                          ? 'bg-[#FF6500] text-white shadow-lg'
                          : 'text-gray-600 hover:text-[#FF6500]'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Chat Agent
                    </button>
                  </div>
                </div>

                {/* Demo Interface */}
                <div className="relative bg-gradient-to-br from-[#0B192C] to-[#1a2b4a] rounded-3xl p-8 shadow-2xl overflow-hidden">
                  {/* Background elements */}
                  <div className="absolute inset-0">
                    <div className="absolute top-8 right-8 w-32 h-32 bg-[#FF6500]/20 rounded-full blur-2xl" />
                    <div className="absolute bottom-8 left-8 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                  </div>

                  {/* Demo content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#FF6500] rounded-full flex items-center justify-center">
                          {activeDemo === 'voice' ? <Phone className="w-5 h-5 text-white" /> : <MessageSquare className="w-5 h-5 text-white" />}
                        </div>
                        <div>
                          <div className="text-white font-semibold font-montserrat">
                            {activeDemo === 'voice' ? 'Voice Assistant' : 'Chat Assistant'}
                          </div>
                          <div className="text-white/60 text-sm font-montserrat">
                            {activeDemo === 'voice' ? 'Call in progress...' : 'Online now'}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-white/80 text-sm font-montserrat">Active</span>
                      </div>
                    </div>

                    {/* Conversation */}
                    <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
                      {demoConversations[activeDemo].map((message, index) => (
                        <motion.div
                          key={index}
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.5 }}
                        >
                          <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                            message.type === 'user'
                              ? 'bg-[#FF6500] text-white rounded-tr-sm'
                              : 'bg-white/10 text-white/90 rounded-tl-sm'
                          }`}>
                            <p className="text-sm font-montserrat leading-relaxed">{message.text}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Input/Controls */}
                    {activeDemo === 'voice' ? (
                      <div className="flex items-center justify-center space-x-4">
                        <button className="w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300">
                          <Phone className="w-6 h-6 text-white transform rotate-135" />
                        </button>
                        <div className="text-white/80 text-sm font-montserrat">
                          Call Duration: 2:34
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-3">
                        <input
                          type="text"
                          placeholder="Type your message..."
                          className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:ring-2 focus:ring-[#FF6500] focus:border-transparent transition-all duration-200 font-montserrat"
                        />
                        <button className="bg-[#FF6500] hover:bg-[#FF6500]/90 rounded-xl p-3 transition-colors duration-200">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Floating elements around demo */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-[#F4F4F4]">
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
                Advanced Features for
                <br />
                <span className="bg-gradient-to-r from-[#FF6500] to-[#ff8533] bg-clip-text text-transparent">
                  Superior Support
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
              Ready to Deploy Your
              <br />
              <span className="bg-gradient-to-r from-[#FF6500] to-[#ff8533] bg-clip-text text-transparent">
                AI Support Team?
              </span>
            </motion.h2>

            <motion.p 
              className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-montserrat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Experience the future of customer support with AI agents that never sleep, never get frustrated, and always deliver exceptional service.
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
                { icon: <Shield className="w-5 h-5" />, text: "Enterprise Security" },
                { icon: <Star className="w-5 h-5" />, text: "Always Available" },
                { icon: <Headphones className="w-5 h-5" />, text: "Human Backup" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <div className="text-[#FF6500]">{item.icon}</div>
                  <span className="text-white/90 font-semibold font-montserrat">{item.text}</span>
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
                className="group bg-[#FF6500] hover:bg-[#FF6500]/90 text-white font-bold px-16 py-8 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6500]/40 relative overflow-hidden font-montserrat"
              >
                <span className="relative z-10 flex items-center">
                  Get Agent Demo
                  <Bot className="ml-4 w-7 h-7 transition-transform group-hover:scale-110" />
                </span>
                
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIVoiceChatAgentsPage;