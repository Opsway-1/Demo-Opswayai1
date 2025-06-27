import React from 'react';
import { ArrowRight, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ShowcaseSection = () => {
  const goToBookDemo = () => {
    window.location.hash = '#book-demo';
    window.location.reload();
  };

  const goToScheduleCall = () => {
    window.location.hash = '#schedule-call';
    window.location.reload();
  };

  const benefits = [
    "Respond in real time",
    "Automate the boring stuff",
    "Grow faster, not heavier",
    "Keep full control without micromanaging"
  ];

  return (
    <section id="showcase" className="section-animate py-24 lg:py-32 relative overflow-hidden">
      {/* Dynamic Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B192C] via-[#1a2b4a] to-[#0B192C]">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#FF6500]/10 rounded-full blur-3xl animate-float-slow opacity-60" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed opacity-40" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6500]/5 rounded-full blur-3xl animate-pulse" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 right-32 w-4 h-4 bg-[#FF6500] rounded-full animate-float opacity-80" />
        <div className="absolute top-48 left-48 w-6 h-6 border-2 border-white/30 rotate-45 animate-float-delayed" />
        <div className="absolute bottom-48 left-32 w-8 h-8 bg-white/10 rounded-lg rotate-12 animate-float-slow" />
        <div className="absolute bottom-32 right-48 w-3 h-3 bg-[#FF6500]/60 rounded-full animate-pulse" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-white/10 animate-pulse" 
                style={{ animationDelay: `${i * 0.05}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Main Headline */}
              <motion.h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                This Is How Scaling Should Feel
              </motion.h2>

              {/* Subheading */}
              <motion.p 
                className="text-xl text-white/80 leading-relaxed font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Join businesses replacing chaos with clarity through real automation.
              </motion.p>

              {/* Benefits List */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-6 h-6 text-[#FF6500] flex-shrink-0" />
                    <span className="text-white/90 font-montserrat">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button
                  onClick={goToBookDemo}
                  size="lg"
                  className="group bg-[#FF6500] hover:bg-[#FF6500]/90 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden font-montserrat"
                >
                  <span className="relative z-10 flex items-center">
                    Try Free Demo
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                </Button>
                
                <button 
                  onClick={goToScheduleCall}
                  className="group flex items-center text-white/90 hover:text-white font-semibold text-lg transition-all duration-300 px-6 py-3 rounded-xl hover:bg-white/10 border border-white/20 hover:border-white/40 font-montserrat"
                >
                  <Calendar className="mr-3 w-5 h-5 transition-transform group-hover:scale-110" />
                  Schedule a Call
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Dashboard Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Main Image Container */}
              <div className="relative">
                {/* Professional dashboard illustration */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden">
                  {/* Background elements */}
                  <div className="absolute inset-0">
                    <div className="absolute top-8 right-8 w-32 h-32 bg-[#FF6500]/20 rounded-full blur-2xl" />
                    <div className="absolute bottom-8 left-8 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                  </div>

                  {/* Professional business scene illustration */}
                  <div className="relative z-10 space-y-6">
                    {/* Header with company branding */}
                    <div className="flex items-center justify-between">
                      <div className="text-white font-bold text-lg font-montserrat">Business Dashboard</div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-white/80 text-sm font-montserrat">Live</span>
                      </div>
                    </div>

                    {/* Metrics cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="text-[#FF6500] text-2xl font-bold font-montserrat">247</div>
                        <div className="text-white/80 text-sm font-montserrat">Leads Generated</div>
                        <div className="w-full bg-white/20 rounded-full h-1 mt-2">
                          <div className="bg-[#FF6500] h-1 rounded-full w-3/4" />
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="text-green-400 text-2xl font-bold font-montserrat">100%</div>
                        <div className="text-white/80 text-sm font-montserrat">Delivery Rate</div>
                        <div className="w-full bg-white/20 rounded-full h-1 mt-2">
                          <div className="bg-green-400 h-1 rounded-full w-full" />
                        </div>
                      </div>
                    </div>

                    {/* Activity feed */}
                    <div className="space-y-3">
                      <div className="text-white/90 font-semibold text-sm font-montserrat">Recent Activity</div>
                      {[
                        { action: "New lead qualified", time: "2 min ago", status: "success" },
                        { action: "Campaign launched", time: "5 min ago", status: "info" },
                        { action: "Meeting scheduled", time: "8 min ago", status: "warning" }
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center space-x-3 bg-white/5 rounded-lg p-3">
                          <div className={`w-2 h-2 rounded-full ${
                            activity.status === 'success' ? 'bg-green-400' :
                            activity.status === 'info' ? 'bg-blue-400' : 'bg-yellow-400'
                          }`} />
                          <div className="flex-1">
                            <div className="text-white/90 text-sm font-montserrat">{activity.action}</div>
                            <div className="text-white/60 text-xs font-montserrat">{activity.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom action bar */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="text-white/80 text-sm font-montserrat">OpswayAI Active</div>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-[#FF6500] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-montserrat">⚡</span>
                        </div>
                        <span className="text-white/90 text-sm font-montserrat">Automating...</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements around the main container */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FF6500]/20 backdrop-blur-sm rounded-2xl border border-[#FF6500]/30 flex items-center justify-center animate-float">
                  <span className="text-[#FF6500] text-2xl">📈</span>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-float-delayed">
                  <span className="text-white text-lg">👥</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;