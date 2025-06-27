import React from 'react';
import { CheckCircle, Users, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Automate repetitive tasks in seconds"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Focused",
      description: "Built for modern teams that value efficiency"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results Driven",
      description: "Measurable improvements in operations"
    }
  ];

  const benefits = [
    "Reduce manual work by up to 80%",
    "Improve response times dramatically",
    "Scale operations without hiring",
    "Focus on high-value activities"
  ];

  return (
    <section id="about" className="section-animate py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 stagger-1">
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B192C] mb-6 animate-header-fade"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Why Choose <span className="text-[#FF6500]">OpswayAI</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We help modern teams streamline operations using practical AI solutions.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className={`feature-card bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#FF6500]/20 hover:shadow-xl transition-all duration-400`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-[#FF6500]/10 rounded-xl flex items-center justify-center text-[#FF6500] mb-6">
                  {feature.icon}
                </div>
                <motion.h3 
                  className="text-xl font-bold text-[#0B192C] mb-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="stagger-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-[#0B192C] mb-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Transform Your Operations
              </motion.h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-6 h-6 text-[#FF6500] flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="stagger-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[#0B192C] to-[#1a2b4a] p-8 rounded-2xl text-white">
                <motion.h4 
                  className="text-xl font-bold mb-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Ready to Get Started?
                </motion.h4>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Join hundreds of teams already using OpswayAI to automate their operations.
                </p>
                <div className="flex items-center space-x-4 text-sm text-white/80">
                  <span>✓ No setup fees</span>
                  <span>✓ 30-day trial</span>
                  <span>✓ Cancel anytime</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;