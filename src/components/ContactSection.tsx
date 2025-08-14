import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, CheckCircle, Star, Users, TrendingUp, Zap, Shield, Clock, Mail, Phone, MapPin, Calendar, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  const goToBookDemo = () => {
    window.location.hash = '#book-demo';
    window.location.reload();
  };

  const benefits = [
    "No setup fees",
    "Free demo in 12 hours"
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      value: "hello@opswayai.com",
      description: "Get detailed answers to your questions",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      value: "+383 (44) 450-008",
      description: "Speak directly with our experts",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Book a Meeting",
      value: "Schedule instantly",
      description: "30-minute personalized demo",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const whyChooseUs = [
    {
      icon: "🚀",
      title: "Lightning Fast Setup",
      description: "Get your AI agents running in under 48 hours with our streamlined onboarding process."
    },
    {
      icon: "🛡️",
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance and end-to-end encryption."
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Serving clients across 25+ countries with 24/7 multilingual support."
    }
  ];

  return (
    <section id="contact" className="section-animate relative overflow-hidden">
      {/* Full-width deep navy background */}
      <div className="bg-[#0B192C] py-24 lg:py-32 relative">
        {/* Enhanced dynamic background elements */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#FF6500]/10 rounded-full blur-3xl animate-float-slow opacity-60" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed opacity-40" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF6500]/5 rounded-full blur-3xl animate-pulse" />
          
          {/* Additional floating orbs for more filling */}
          <div className="absolute top-32 right-1/4 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl animate-float opacity-50" />
          <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-green-500/8 rounded-full blur-3xl animate-float-delayed opacity-45" />
          
          {/* Floating geometric shapes */}
          <div className="absolute top-32 right-32 w-4 h-4 bg-[#FF6500] rounded-full animate-float opacity-80" />
          <div className="absolute top-48 left-48 w-6 h-6 border-2 border-white/30 rotate-45 animate-float-delayed" />
          <div className="absolute bottom-48 left-32 w-8 h-8 bg-white/10 rounded-lg rotate-12 animate-float-slow" />
          <div className="absolute bottom-32 right-48 w-3 h-3 bg-[#FF6500]/60 rounded-full animate-pulse" />
          
          {/* Additional geometric elements */}
          <div className="absolute top-1/4 left-1/3 w-5 h-5 bg-blue-400/40 rounded-full animate-float" />
          <div className="absolute bottom-1/4 right-1/3 w-7 h-7 border border-white/20 rounded-lg rotate-45 animate-float-delayed" />
          
          {/* Enhanced grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-16 gap-4 h-full">
              {Array.from({ length: 256 }).map((_, i) => (
                <div 
                  key={i} 
                  className="border border-white/10 animate-pulse" 
                  style={{ animationDelay: `${i * 0.02}s` }}
                />
              ))}
            </div>
          </div>

          {/* Scanning lines for more visual interest */}
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#FF6500]/20 to-transparent animate-scanning"
              style={{ left: '20%' }}
            />
            <div 
              className="absolute h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-scanning"
              style={{ left: '80%', animationDelay: '4s' }}
            />
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* Enhanced floating badge */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center bg-[#FF6500]/20 border border-[#FF6500]/30 rounded-full px-6 py-3 mb-8">
                <Sparkles className="w-5 h-5 text-[#FF6500] mr-2" />
                <span className="text-[#FF6500] font-semibold font-montserrat">Ready to Transform Your Business?</span>
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.h2 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight mb-8 font-montserrat text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              See What AI Can Do for Your Business Today
              <br />
            </motion.h2>

            {/* Subheadline */}
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-16 font-montserrat text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We'll build and send your working system in less than 12 hours, no charge.
            </motion.p>

            {/* Contact Methods Grid */}
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {contactMethods.map((method, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-400 group text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{method.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-montserrat group-hover:text-[#FF6500] transition-colors duration-300">
                    {method.title}
                  </h3>
                  {method.title === "Call Us" ? (
                    <a 
                      href="https://wa.me/38344450008"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF6500] font-semibold mb-3 font-montserrat text-lg hover:text-white transition-colors duration-300 block"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <div className="text-[#FF6500] font-semibold mb-3 font-montserrat text-lg">
                      {method.value}
                    </div>
                  )}
                  <p className="text-white/80 font-montserrat text-sm leading-relaxed">
                    {method.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Why Choose Us Section */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 font-montserrat">
                Why Choose <span className="text-[#FF6500]">OpswayAI</span>?
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                {whyChooseUs.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-400 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.1 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 font-montserrat group-hover:text-[#FF6500] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-white/80 text-sm font-montserrat leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Main CTA Button */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={goToBookDemo}
                size="lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative bg-[#FF6500] hover:bg-[#FF6500]/90 text-white font-bold px-16 py-8 rounded-2xl text-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6500]/40 overflow-hidden font-montserrat"
              >
                <span className="relative z-10 flex items-center">
                  Get Free Demo
                  <ArrowRight className="ml-4 w-7 h-7 transition-transform group-hover:translate-x-2" />
                </span>
                
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6500] via-[#ff7a1a] to-[#FF6500] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                
                {/* Pulsing glow */}
                <motion.div 
                  className="absolute inset-0 bg-[#FF6500]/30 rounded-2xl blur-xl"
                  animate={{ 
                    scale: isHovered ? [1, 1.1, 1] : 1,
                    opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="grid md:grid-cols-3 gap-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-[#FF6500]/30 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-[#FF6500]" />
                  <span className="text-white font-montserrat">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator for mobile */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 sm:hidden"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-[#FF6500]/50 transition-colors">
            <motion.div 
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B192C] mb-6 leading-tight font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto leading-[1.6] font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Smart automation that saves you time, cuts costs, and drives real growth without the overhead.
              </motion.p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-6">
              {[
                {
                  question: "What exactly will I get in the free demo?",
                  answer: "You'll get a working AI system built specifically for your business, delivered within 12 hours. No setup required on your end."
                },
                {
                  question: "Do I need to manage or install anything?",
                  answer: "No. We handle setup and delivery. You just test the system, no technical skills required."
                },
                {
                  question: "Will the system be tailored to my business?",
                  answer: "Yes. We ask for a few key details and build it around your specific workflows and goals."
                },
                {
                  question: "Can this integrate with my CRM or website?",
                  answer: "Absolutely. We work with tools like HubSpot, Notion, Webflow, Gmail, Calendly, and more."
                },
                {
                  question: "Is there a cost after the free demo?",
                  answer: "Only if you choose to move forward. The demo is 100% free with no obligation."
                },
                {
                  question: "What happens after I test the system?",
                  answer: "If you like what you see, we can refine it, expand it, or launch it into your stack."
                }
              ].map((faq, index) => (
                <FAQItem 
                  key={index} 
                  question={faq.question} 
                  answer={faq.answer} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 + (index * 0.08) }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isHovered ? 'rgba(255, 101, 0, 0.3)' : 'rgb(229, 231, 235)',
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF6500] focus:ring-offset-2 group cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        aria-describedby={`faq-question-${index}`}
      >
        <h3 
          id={`faq-question-${index}`}
          className="text-lg font-semibold text-[#0B192C] font-montserrat pr-6 leading-[1.4] group-hover:text-[#FF6500] transition-colors duration-300 cursor-pointer"
          style={{ fontSize: '18px' }}
        >
          {question}
        </h3>
        <motion.div
          animate={{ 
            rotate: isOpen ? 45 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-[#FF6500] group-focus:bg-[#FF6500] transition-all duration-300 cursor-pointer"
        >
          <div className="relative w-4 h-4">
            <motion.div 
              className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-[#FF6500] group-hover:bg-white group-focus:bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-300"
              initial={false}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-[#FF6500] group-hover:bg-white group-focus:bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-90 transition-colors duration-300"
              initial={false}
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </motion.div>
      </button>
      
      <motion.div
        id={`faq-answer-${index}`}
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ 
          duration: 0.3, 
          ease: "easeInOut",
          opacity: { delay: isOpen ? 0.1 : 0 }
        }}
        className="overflow-hidden"
        role="region"
        aria-labelledby={`faq-question-${index}`}
      >
        <div className="px-8 pb-8 pt-2">
          <motion.p 
            className="text-gray-700 leading-[1.6] font-montserrat"
            style={{ fontSize: '16px' }}
            initial={{ y: -10 }}
            animate={{ y: isOpen ? 0 : -10 }}
            transition={{ duration: 0.2, delay: isOpen ? 0.1 : 0 }}
          >
            {answer}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;