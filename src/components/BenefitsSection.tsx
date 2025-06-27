import React, { useRef } from 'react';
import { Zap, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Move Quicker Across Every Task",
      description: "Our systems speed up everything from outreach to follow-up without extra effort.",
      color: "from-[#FF6500] to-[#ff8533]"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "More Time to Focus on Growth",
      description: "Automation clears your schedule so you can spend time where it really matters.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Operations",
      description: "Handle more leads, requests, and clients without expanding your team.",
      color: "from-green-500 to-green-600"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const goToBookDemo = () => {
    window.location.hash = '#book-demo';
    window.location.reload();
  };

  const goToScheduleCall = () => {
    window.location.hash = '#schedule-call';
    window.location.reload();
  };
  return (
    <section ref={sectionRef} id="benefits" className="section-animate py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#FF6500]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 stagger-1">
            <div className="inline-flex items-center bg-[#FF6500]/10 border border-[#FF6500]/20 rounded-full px-6 py-2 mb-6">
              <span className="text-[#FF6500] font-semibold text-sm">Why Choose OpswayAI</span>
            </div>
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0B192C] mb-6 leading-tight animate-header-fade font-montserrat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Say Goodbye to Manual Work
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-montserrat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              AI automation is helping growing businesses work faster, smoother, and more intelligently.
            </motion.p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className={`benefit-card group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#FF6500]/20 transition-all duration-400 overflow-hidden`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {benefit.icon}
                </div>
                
                {/* Content */}
                <motion.h3 
                  className="text-xl font-semibold text-[#0B192C] mb-4 group-hover:text-[#FF6500] transition-colors duration-300 font-montserrat"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {benefit.title}
                </motion.h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300 font-montserrat">
                  {benefit.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="text-center bg-gradient-to-r from-[#0B192C] to-[#1a2b4a] rounded-3xl p-12 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#FF6500]/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
            </div>
            
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl sm:text-4xl font-semibold text-white mb-6 font-montserrat"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Want to Automate but Don't Know Where to Start
              </motion.h3>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto font-montserrat">
                We do the hard part for you. Just tell us what you need and we'll build it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={goToBookDemo}
                  size="lg"
                  className="group bg-[#FF6500] hover:bg-[#FF6500]/90 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden font-montserrat"
                >
                  <span className="relative z-10 flex items-center">
                    Start Free Demo
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                </Button>
                <button 
                  onClick={goToScheduleCall}
                  className="text-white/90 hover:text-white font-semibold text-lg transition-colors duration-300 px-6 py-3 rounded-xl hover:bg-white/10 font-montserrat"
                >
                  Schedule a Call
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;