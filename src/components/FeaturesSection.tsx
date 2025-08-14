import React from 'react';
import { MessageSquare, Bot, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Lead Gen Campaigns That Don't Miss a Beat",
      description: "Launch targeted campaigns that write, personalize, and follow up automatically."
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Agents That Handle Calls and Chats Around the Clock",
      description: "Instantly respond to customer inquiries and book appointments, day or night."
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Pipeline Updates Without You Touching a Button",
      description: "Keep your systems updated in real time with zero manual effort."
    }
  ];

  return (
    <section id="features" className="section-animate py-24 lg:py-32 bg-[#F4F4F4] relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Text Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B192C] leading-tight font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                From First Click to Closed Deal
                <br />
                We Automate the Flow
              </motion.h2>

              <div className="space-y-8">
                {features.map((feature, index) => (
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
                      {feature.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#0B192C] mb-2 font-montserrat">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-montserrat">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Illustration/Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br from-[#0B192C] to-[#1a2b4a] rounded-3xl p-12 shadow-2xl overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-8 right-8 w-32 h-32 bg-[#FF6500]/20 rounded-full blur-2xl" />
                  <div className="absolute bottom-8 left-8 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                </div>

                {/* Stylized illustration content */}
                <div className="relative z-10 space-y-8">
                  {/* Dashboard mockup */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-[#FF6500] rounded-full" />
                        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                        <div className="w-3 h-3 bg-green-400 rounded-full" />
                      </div>
                      <div className="text-white/60 text-sm font-montserrat">OpswayAI Dashboard</div>
                    </div>
                    
                    {/* Mock content */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-white font-semibold font-montserrat">Active Campaigns</div>
                        <div className="text-[#FF6500] font-bold font-montserrat">12</div>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-[#FF6500] h-2 rounded-full w-3/4" />
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-white/80 font-montserrat">Leads Generated: 247</div>
                      </div>
                    </div>
                  </div>

                  {/* Chat interface mockup */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[#FF6500] rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white/10 rounded-lg px-3 py-2 max-w-xs">
                          <p className="text-white/90 text-sm font-montserrat">Hi! How can I help you today?</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 justify-end">
                        <div className="bg-[#FF6500] rounded-lg px-3 py-2 max-w-xs">
                          <p className="text-white text-sm font-montserrat">I need help with pricing</p>
                        </div>
                        <div className="w-8 h-8 bg-white/20 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Workflow visualization */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-[#FF6500] rounded-xl flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-8 h-0.5 bg-white/30" />
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-8 h-0.5 bg-white/30" />
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <Workflow className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-16 left-16 w-4 h-4 bg-[#FF6500]/60 rounded-full animate-float" />
                <div className="absolute bottom-20 right-20 w-6 h-6 border-2 border-white/30 rounded-lg rotate-12 animate-float-delayed" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;