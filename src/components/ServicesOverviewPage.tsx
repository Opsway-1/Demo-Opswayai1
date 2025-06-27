import React, { useState, useEffect } from 'react';
import { MessageSquare, Bot, Workflow, Globe, ArrowRight, CheckCircle, Star, Users, TrendingUp, Zap, Shield, Target, Database, Calendar, Send, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';

const ServicesOverviewPage = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeService, setActiveService] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // Auto-progress through services
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const goToBookDemo = () => {
    window.location.hash = '#book-demo';
    window.location.reload();
  };

  const goToLeadGeneration = () => {
    window.location.hash = '#lead-generation';
    window.location.reload();
  };

  const goToAIVoiceChat = () => {
    window.location.hash = '#ai-voice-chat';
    window.location.reload();
  };

  const goToWorkflowAutomations = () => {
    window.location.hash = '#workflow-automations';
    window.location.reload();
  };

  const goToSmartWebsites = () => {
    window.location.hash = '#smart-websites';
    window.location.reload();
  };

  const services = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Lead Generation",
      description: "AI-powered outreach campaigns that identify, qualify, and convert high-value prospects into customers through personalized messaging at scale.",
      features: ["Smart lead scoring", "Multi-channel outreach", "Automated follow-ups", "CRM integration"],
      color: "from-[#FF6500] to-[#ff8533]",
      action: goToLeadGeneration
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Voice & Chat Agents",
      description: "24/7 intelligent customer support agents that handle inquiries, book appointments, and provide instant responses with human-like conversation.",
      features: ["Natural language processing", "Voice & text support", "Appointment booking", "Lead qualification"],
      color: "from-blue-500 to-blue-600",
      action: goToAIVoiceChat
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Workflow Automations",
      description: "Streamline business processes with intelligent automation that handles repetitive tasks, manages data flow, and optimizes team productivity.",
      features: ["Process automation", "Task management", "Data synchronization", "Performance tracking"],
      color: "from-green-500 to-green-600",
      action: goToWorkflowAutomations
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Smart Websites",
      description: "AI-powered websites that adapt to user behavior, optimize conversions, and integrate seamlessly with your automation systems.",
      features: ["Responsive design", "AI optimization", "Conversion tracking", "Automation integration"],
      color: "from-purple-500 to-purple-600",
      action: goToSmartWebsites
    }
  ];

  const automationFlow = [
    {
      id: 1,
      title: "Lead Generation",
      description: "AI finds and qualifies prospects",
      icon: <Target className="w-5 h-5" />,
      color: "from-[#FF6500] to-[#ff8533]",
      status: "Smart Targeting",
      connections: ["CRM", "Email"],
      details: "Our AI system identifies high-quality prospects, researches their business needs, and creates personalized outreach campaigns that convert at higher rates."
    },
    {
      id: 2,
      title: "AI Agents",
      description: "Handle inquiries and book meetings",
      icon: <Bot className="w-5 h-5" />,
      color: "from-blue-500 to-blue-600",
      status: "Always Online",
      connections: ["Calendar", "CRM"],
      details: "Intelligent chatbots and voice agents engage with prospects 24/7, answer questions, qualify leads, and automatically schedule meetings with your sales team."
    },
    {
      id: 3,
      title: "Automation",
      description: "Streamline workflows and tasks",
      icon: <Settings className="w-5 h-5" />,
      color: "from-green-500 to-green-600",
      status: "Auto-Processing",
      connections: ["Database", "Reports"],
      details: "Automated workflows handle data entry, follow-up sequences, task assignments, and reporting, ensuring nothing falls through the cracks."
    },
    {
      id: 4,
      title: "Smart Website",
      description: "Convert visitors into customers",
      icon: <Globe className="w-5 h-5" />,
      color: "from-purple-500 to-purple-600",
      status: "Optimizing",
      connections: ["Analytics", "Forms"],
      details: "Your website becomes a conversion machine with AI-powered forms, chatbots, booking systems, and analytics that continuously optimize performance."
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
                  <span className="bg-gradient-to-r from-[#FF6500] to-[#ff8533] bg-clip-text text-transparent">
                    What We Do
                  </span>
                  <span className="bg-gradient-to-r from-[#FF6500] to-[#ff8533] bg-clip-text text-transparent relative">
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
                  Comprehensive AI solutions designed to transform every aspect of your business operations with cutting-edge automation technology.
                </motion.p>

                {/* Services Automation Flow Visualization */}
                <motion.div 
                  className="max-w-6xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 relative overflow-hidden">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2 font-montserrat">
                        How Our Services Work Together to Scale Your Business
                      </h3>
                      <p className="text-white/80 font-montserrat">
                        Watch how each service connects to create a complete automation ecosystem
                      </p>
                    </div>

                    {/* Automation Flow Grid */}
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                      {automationFlow.map((step, index) => (
                        <motion.div
                          key={step.id}
                          className={`relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                            activeService === index
                              ? 'bg-white/20 border-[#FF6500]/50 scale-105'
                              : 'bg-white/5 border-white/20 hover:bg-white/10'
                          }`}
                          onClick={() => setActiveService(index)}
                          whileHover={{ y: -2 }}
                        >
                          {/* Step number */}
                          <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#FF6500] rounded-full flex items-center justify-center text-white font-bold text-sm font-montserrat">
                            {step.id}
                          </div>

                          {/* Icon */}
                          <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center text-white mb-4 mx-auto`}>
                            {step.icon}
                          </div>

                          {/* Content */}
                          <h4 className="text-white font-bold text-center mb-2 font-montserrat text-sm">
                            {step.title}
                          </h4>
                          <p className="text-white/80 text-center text-xs font-montserrat leading-relaxed mb-3">
                            {step.description}
                          </p>
                          
                          {/* Status */}
                          <div className="bg-[#FF6500]/20 rounded-lg px-3 py-1 text-center">
                            <span className="text-[#FF6500] font-bold text-xs font-montserrat">
                              {step.status}
                            </span>
                          </div>

                          {/* Connection lines */}
                          {index < automationFlow.length - 1 && (
                            <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block">
                              <motion.div
                                className="w-6 h-0.5 bg-[#FF6500]/60"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: activeService >= index ? 1 : 0.3 }}
                                transition={{ duration: 0.5 }}
                              />
                              <motion.div
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#FF6500] rounded-full"
                                initial={{ scale: 0 }}
                                animate={{ scale: activeService >= index ? 1 : 0.5 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                              />
                            </div>
                          )}

                          {/* Active indicator */}
                          {activeService === index && (
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

                    {/* Detailed explanation for active service */}
                    <motion.div
                      key={activeService}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white/5 rounded-2xl p-6 border border-white/10"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-r ${automationFlow[activeService].color} rounded-lg flex items-center justify-center text-white`}>
                          {automationFlow[activeService].icon}
                        </div>
                        <h4 className="text-xl font-bold text-white font-montserrat">
                          {automationFlow[activeService].title}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          <span className="text-green-400 text-sm font-montserrat">
                            {automationFlow[activeService].status}
                          </span>
                        </div>
                      </div>
                      <p className="text-white/90 font-montserrat leading-relaxed mb-4">
                        {automationFlow[activeService].details}
                      </p>
                      
                      {/* Connection indicators */}
                      <div className="flex items-center space-x-2">
                        <span className="text-white/70 text-sm font-montserrat">Integrates with:</span>
                        {automationFlow[activeService].connections.map((connection, idx) => (
                          <span key={idx} className="bg-white/10 px-2 py-1 rounded text-white/80 text-xs font-montserrat">
                            {connection}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Progress indicators */}
                    <div className="flex justify-center mt-6 space-x-2">
                      {automationFlow.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveService(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === activeService 
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

      {/* Services Grid Section */}
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
                Our Core Services
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                30-minute consultation, no sales pressure, actionable insights
              </motion.p>
            </div>

            {/* 2x2 Services Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#FF6500]/20 transition-all duration-400 overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={service.action}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`} />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3 
                      className="text-2xl font-bold text-[#0B192C] mb-4 group-hover:text-[#FF6500] transition-colors duration-300 font-montserrat"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300 font-montserrat">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-[#FF6500] flex-shrink-0" />
                          <span className="text-gray-600 text-sm font-montserrat">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn more button */}
                    <button 
                      className="flex items-center text-[#FF6500] font-semibold group-hover:text-[#0B192C] transition-colors duration-300 font-montserrat"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12 pointer-events-none" />
                </motion.div>
              ))}
            </div>

            {/* Why Choose Us Section */}
            <motion.div 
              className="bg-[#F4F4F4] rounded-3xl p-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-3xl sm:text-4xl font-bold text-[#0B192C] mb-6 font-montserrat"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Why Businesses Choose OpswayAI
              </motion.h3>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-montserrat">
                We combine cutting-edge AI technology with practical business solutions to deliver measurable results.
              </p>
              
            <div className="flex justify-center mb-8">
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl w-full">
                {[
                  { icon: "🚀", title: "Fast Implementation", desc: "Get up and running in days, not months" },
                  { icon: "🔧", title: "Custom Solutions", desc: "Tailored to your specific business needs" },
                  { icon: "🛡️", title: "Enterprise Security", desc: "Bank-level security and compliance" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="font-bold text-[#0B192C] mb-2 font-montserrat">{item.title}</h4>
                    <p className="text-gray-600 text-sm font-montserrat">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              </div>

              <Button
                onClick={goToBookDemo}
                className="group bg-[#FF6500] hover:bg-[#FF6500]/90 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden font-montserrat"
              >
                <span className="relative z-10 flex items-center">
                  Demo Our Services
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
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
              Need Help Choosing
              <br />
              <span className="bg-gradient-to-r from-[#FF6500] to-[#ff8533] bg-clip-text text-transparent">
                a Service?
              </span>
            </motion.h2>

            <motion.p 
              className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-montserrat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our experts will help you identify the perfect AI solutions for your business needs and goals.
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
                { icon: <Zap className="w-5 h-5" />, text: "Free Consultation" },
                { icon: <Star className="w-5 h-5" />, text: "Expert Guidance" },
                { icon: <Shield className="w-5 h-5" />, text: "No Commitment" }
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
                  Get Custom Demo
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
              30-minute consultation • No sales pressure • Actionable insights
            </motion.p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesOverviewPage;