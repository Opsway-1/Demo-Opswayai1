import React, { useEffect } from 'react';
import { Linkedin, Mail, MapPin, Award, Users, Target, Globe, Heart, Zap, Bot, MessageSquare, Workflow, TrendingUp, CheckCircle, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';

const TeamPage = () => {
  const goToBookDemo = () => {
    window.location.hash = '#book-demo';
    window.location.reload();
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const founders = [
    {
      name: "Egzon Bulliqi",
      role: "CEO & Founder",
      bio: "Product strategist and automation expert, Egzon leads with a passion for building scalable, real-world AI systems that transform how businesses operate.",
      image: "/Screenshot 2025-07-08 at 08.23.07.png",
      linkedin: "#",
      email: "egzon@opswayai.com"
    },
    {
      name: "Erjon Krasniqi",
      role: "CTO & Co-Founder",
      bio: "Technical architect with deep AI knowledge, Erjon turns complex automation into intuitive solutions that businesses can actually use.",
      image: "/Screenshot 2025-08-14 at 23.43.56.png",
      linkedin: "#",
      email: "erjon@opswayai.com"
    }
  ];

  const dedicatedServices = [
    {
      title: "Effortless Lead Generation",
      description: "We create smart outreach systems that deliver highly personalized emails to potential clients, so you can win new business without spending hours doing research or writing messages.",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-[#FF6500] to-[#ff8533]"
    },
    {
      title: "AI Assistants That Feel Real",
      description: "Our chatbots and voice agents can handle questions, take orders, book appointments, or redirect callers, working just like a helpful team member, available 24/7.",
      icon: <Bot className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Automation That Handles the Busywork",
      description: "We build automated workflows that manage everyday tasks, such as lead follow-ups, CRM updates, and appointment confirmations, so your team can stay focused while the system handles the rest. No extra hires needed.",
      icon: <Workflow className="w-6 h-6" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Websites That Work Hard for You",
      description: "Beyond just looking good, our websites are built to perform. Whether it's collecting leads, handling bookings, or guiding customers, they become a smart part of your team.",
      icon: <Globe className="w-6 h-6" />,
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
          <div className="max-w-7xl mx-auto py-12">
            
            {/* Hero Content */}
            <div className="text-center mb-16">
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight mb-8 font-montserrat"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  AI, Applied
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#FF6500] to-[#ff8533] bg-clip-text text-transparent relative">
                  Intelligently
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
                Our focus is practical, scalable automation that helps you move faster and grow smarter.
              </motion.p>

              {/* Animated Results-Focused Explanation Box */}
              <motion.div 
                className="max-w-6xl mx-auto"
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
                      Our Focus is Based on Results
                    </motion.h3>
                    <motion.p 
                      className="text-white/80 font-montserrat leading-relaxed max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                    >
                      We don't build AI for the sake of technology. Every system we create is designed to deliver measurable improvements to your business operations, helping you achieve real growth and efficiency gains.
                    </motion.p>
                  </div>

                  {/* Our Approach */}
                  <motion.div 
                    className="relative z-10 bg-white/5 rounded-2xl p-6 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    <h4 className="text-white font-bold mb-4 font-montserrat text-center">
                      How We Ensure Results
                    </h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        { 
                          step: "1", 
                          title: "Understand Your Goals", 
                          desc: "We start by deeply understanding your business challenges and specific objectives",
                          icon: <Target className="w-4 h-4" />
                        },
                        { 
                          step: "2", 
                          title: "Build & Test", 
                          desc: "We create custom solutions and test them thoroughly before deployment",
                          icon: <Zap className="w-4 h-4" />
                        },
                        { 
                          step: "3", 
                          title: "Measure & Optimize", 
                          desc: "We track performance metrics and continuously optimize for better results",
                          icon: <TrendingUp className="w-4 h-4" />
                        }
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          className="text-center"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 1.4 + (index * 0.1) }}
                        >
                          <div className="w-12 h-12 bg-[#FF6500] rounded-xl flex items-center justify-center text-white font-bold text-sm font-montserrat mx-auto mb-3">
                            {item.icon}
                          </div>
                          <h5 className="text-white font-semibold font-montserrat mb-2">
                            {item.title}
                          </h5>
                          <p className="text-white/70 text-sm font-montserrat leading-relaxed">
                            {item.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Animated border */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl border-2 border-[#FF6500]/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2.0 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About OpswayAI Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column - About Content */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.h2 
                  className="text-4xl sm:text-5xl font-bold text-[#0B192C] leading-tight font-montserrat"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  About OpswayAI
                </motion.h2>

                <motion.div 
                  className="space-y-6 text-lg text-gray-600 leading-relaxed font-montserrat"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p>
                    OpswayAI is an automation-first company based in Kosovo, built for businesses that want to grow efficiently in a digital-first world. We help modern teams streamline how they generate leads, handle communication, and manage operations using the practical power of artificial intelligence.
                  </p>
                  
                  <p>
                    Our approach is rooted in simplicity and real-world application. We don't chase trends. We build solutions that make everyday business tasks easier, faster, and more consistent. Whether it's setting up outreach campaigns, integrating smart chatbots, or designing high-converting websites, we turn complex processes into effortless systems.
                  </p>
                  
                  <p>
                    With a growing client base across industries, OpswayAI is proof that smart technology doesn't have to be complicated. It just needs to work, and we make sure it does.
                  </p>
                </motion.div>
              </motion.div>

              {/* Right Column - Visual Element */}
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

                  <div className="relative z-10 text-center">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 bg-[#FF6500] rounded-2xl flex items-center justify-center">
                        <span className="text-white font-bold text-2xl font-montserrat">🇽🇰</span>
                      </div>
                    </div>
                    
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-4 font-montserrat"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      Based in Kosovo
                    </motion.h3>
                    
                    <p className="text-white/90 font-montserrat leading-relaxed mb-6">
                      Serving clients worldwide with cutting-edge AI automation solutions from the heart of the Balkans.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 lg:py-32 bg-[#F4F4F4]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Vision */}
              <motion.div 
                className="bg-white rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-400"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF6500] to-[#ff8533] rounded-2xl flex items-center justify-center mr-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#0B192C] font-montserrat">Vision</h3>
                </div>
                
                <div className="space-y-4 text-gray-600 leading-relaxed font-montserrat">
                  <p>
                    At OpswayAI, we envision a future where businesses are no longer limited by time, staff, or budget. Our vision is to unlock that future by putting the power of artificial intelligence in the hands of every business owner.
                  </p>
                  
                  <p>
                    We want to create a world where operations run more smoothly, communication feels personal, and growth occurs without extra weight on the team. With smart automation, voice-powered tools, and targeted outreach, we help companies accomplish more with fewer resources.
                  </p>
                  
                  <p className="font-semibold text-[#FF6500]">
                    The goal is simple: work smarter, not harder. And with the right tools, even a small business can operate like a large one, without needing to hire more people to keep up.
                  </p>
                </div>
              </motion.div>

              {/* Mission */}
              <motion.div 
                className="bg-white rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-400"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#0B192C] font-montserrat">Mission</h3>
                </div>
                
                <div className="space-y-4 text-gray-600 leading-relaxed font-montserrat">
                  <p className="font-semibold text-[#0B192C] text-lg">
                    Our mission is to help businesses get more done without adding more to their plate.
                  </p>
                  
                  <p>
                    At OpswayAI, we build AI-powered tools that automate repetitive tasks, connect you with the right customers, and keep operations flowing. From generating leads and sending custom emails to answering phone calls and booking appointments, we create systems that run on autopilot.
                  </p>
                  
                  <p>
                    Businesses no longer need to rely on hiring staff for every task. Our solutions do the heavy lifting, so teams can focus on what they do best.
                  </p>
                  
                  <p className="font-semibold text-[#FF6500]">
                    We don't believe in complicated tech. We believe in real tools that save time, cut costs, and help businesses grow with confidence.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Dedicated To Section */}
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
                We are dedicated to:
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Four core areas where we help businesses transform their operations and achieve sustainable growth.
              </motion.p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {dedicatedServices.map((service, index) => (
                <motion.div 
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#FF6500]/20 transition-all duration-400 overflow-hidden"
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
                    
                    <p className="text-gray-600 leading-relaxed font-montserrat">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12 pointer-events-none" />
                </motion.div>
              ))}
            </div>

            {/* Core Promise */}
            <motion.div 
              className="text-center bg-gradient-to-r from-[#0B192C] to-[#1a2b4a] rounded-3xl p-12 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
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
                  Making It Easier to Run a Business
                </motion.h3>
                <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto font-montserrat leading-relaxed">
                  At the core of everything we do is a simple promise: we help you get more done with fewer resources. Whether you're a solo founder or managing a team, our systems are here to lighten the load.
                </p>
                
                <Button
                  onClick={goToBookDemo}
                  className="group bg-[#FF6500] hover:bg-[#FF6500]/90 text-white font-bold px-12 py-6 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden font-montserrat"
                >
                  <span className="relative z-10 flex items-center">
                    Experience Our Solutions
                    <Heart className="ml-3 w-6 h-6 transition-transform group-hover:scale-110" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
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
                Meet the Founders
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                The visionary leaders behind OpswayAI, combining strategic expertise with technical innovation.
              </motion.p>
            </div>

            {/* Founders Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              {founders.map((founder, index) => (
                <motion.div 
                  key={index}
                  className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-400 relative overflow-hidden border border-gray-100 hover:border-[#FF6500]/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {/* Orange accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF6500] to-[#ff8533] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                  
                  {/* Portrait-style layout */}
                  <div className="flex flex-col items-center text-center">
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src={founder.image} 
                          alt={founder.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      {/* Floating accent */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FF6500] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Founder Info */}
                    <div className="mb-6">
                      <motion.h3 
                        className="text-2xl font-bold text-[#0B192C] mb-2 font-montserrat group-hover:text-[#FF6500] transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        {founder.name}
                      </motion.h3>
                      <p className="text-[#FF6500] font-semibold mb-4 font-montserrat text-lg">
                        {founder.role}
                      </p>
                      <p className="text-gray-600 leading-relaxed font-montserrat text-lg max-w-md mx-auto">
                        {founder.bio}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                      <a 
                        href={founder.linkedin}
                        className="w-12 h-12 bg-[#F4F4F4] rounded-full flex items-center justify-center text-gray-400 hover:text-[#FF6500] hover:bg-[#FF6500]/10 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a 
                        href={`mailto:${founder.email}`}
                        className="w-12 h-12 bg-[#F4F4F4] rounded-full flex items-center justify-center text-gray-400 hover:text-[#FF6500] hover:bg-[#FF6500]/10 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        <Mail className="w-6 h-6" />
                      </a>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF6500]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12 pointer-events-none" />
                </motion.div>
              ))}
            </div>

            {/* Closing Statement */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-gray-700 font-montserrat leading-relaxed max-w-2xl mx-auto">
                Together, they're building the future of business automation, one intelligent solution at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
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
              Ready to Transform
              <br />
              <span className="bg-gradient-to-r from-[#FF6500] to-[#ff8533] bg-clip-text text-transparent">
                Your Business?
              </span>
            </motion.h2>

            <motion.p 
              className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-montserrat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join hundreds of businesses already using OpswayAI to automate operations, generate leads, and grow efficiently.
            </motion.p>

            {/* Contact Info */}
            <motion.div 
              className="grid md:grid-cols-3 gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <MapPin className="w-5 h-5 text-[#FF6500]" />
                <span className="text-white/90 font-semibold font-montserrat">Kosovo, Europe</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <Globe className="w-5 h-5 text-[#FF6500]" />
                <span className="text-white/90 font-semibold font-montserrat">Global Reach</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <Mail className="w-5 h-5 text-[#FF6500]" />
                <span className="text-white/90 font-semibold font-montserrat">hello@opswayai.com</span>
              </div>
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
                  Get Started Today
                  <Heart className="ml-4 w-7 h-7 transition-transform group-hover:scale-110" />
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
              No setup fees, 30-day free trial, cancel anytime
            </motion.p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;