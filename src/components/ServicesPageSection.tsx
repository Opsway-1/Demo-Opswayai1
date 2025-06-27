import React, { useState } from 'react';
import { MessageSquare, Bot, Workflow, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesPageSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
      description: "Automatically identify, qualify, and engage high-value leads without writing a single email.",
      color: "from-[#FF6500] to-[#ff8533]",
      action: goToLeadGeneration
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Voice & Chat Agents",
      description: "Deliver 24/7 conversations that convert, from answering questions to booking appointments.",
      color: "from-blue-500 to-blue-600",
      action: goToAIVoiceChat
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Workflow Automation",
      description: "Replace repetitive tasks with intelligent systems that keep your operations running smoothly.",
      color: "from-green-500 to-green-600",
      action: goToWorkflowAutomations
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Smart Websites",
      description: "Turn your site into a conversion machine with AI-powered features built directly into the flow.",
      color: "from-purple-500 to-purple-600",
      action: goToSmartWebsites
    }
  ];

  return (
    <section id="services-page" className="section-animate py-24 lg:py-32 bg-white relative">
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
              Built to Solve Real Problems, Not Just Look Smart
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-montserrat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We focus on impact, not gimmicks. Our systems deliver tangible improvements across support, sales, and ops.
            </motion.p>
          </div>

          {/* Services Grid - 2x2 Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#FF6500]/20 transition-all duration-400 overflow-hidden"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
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

                  {/* Learn more button */}
                  <button 
                    onClick={service.action}
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
        </div>
      </div>
    </section>
  );
};

export default ServicesPageSection;