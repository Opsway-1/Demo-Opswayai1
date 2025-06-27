import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Bot, Target, Play, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-[#0B192C] via-[#0f1f35] to-[#1a2b4a] overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#FF6500]/10 rounded-full blur-3xl animate-float-slow opacity-60" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed opacity-40" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6500]/5 rounded-full blur-3xl animate-pulse" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 right-32 w-4 h-4 bg-[#FF6500] rounded-full animate-float opacity-80" />
        <div className="absolute top-48 left-48 w-6 h-6 border-2 border-white/30 rotate-45 animate-float-delayed" />
        <div className="absolute bottom-48 left-32 w-8 h-8 bg-white/10 rounded-lg rotate-12 animate-float-slow" />
        <div className="absolute bottom-32 right-48 w-3 h-3 bg-[#FF6500]/60 rounded-full animate-pulse" />
        
        {/* Parallax grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-white/5 animate-pulse" 
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>

        {/* Mouse-following gradient */}
        <div 
          className="absolute w-96 h-96 bg-[#FF6500]/5 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="flex flex-col justify-center min-h-screen py-20">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Floating badges */}
            <div className="relative mb-16">
              <div className="absolute -top-8 -left-8 bg-[#FF6500]/20 backdrop-blur-sm border border-[#FF6500]/30 rounded-full px-4 py-2 animate-float">
                <span className="text-[#FF6500] text-sm font-medium flex items-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-Powered
                </span>
              </div>
              <div className="absolute -top-4 -right-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 animate-float-delayed">
                <span className="text-white text-sm font-medium">Trusted by 100+</span>
              </div>
            </div>

            {/* Main headline */}
            <div className="hero-content space-y-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight">
                <span className="inline-block hero-text-1 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Automate Your
                </span>
                <br />
                <span className="inline-block hero-text-2 bg-gradient-to-r from-[#FF6500] to-[#ff8533] bg-clip-text text-transparent relative">
                  Operations
                  <div className="absolute -inset-2 bg-[#FF6500]/20 blur-xl rounded-lg opacity-50 animate-pulse" />
                </span>
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed hero-text-3 font-light">
                Build AI agents in minutes to automate workflows, save time, and grow your business.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center hero-text-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('contact')}
                  className="group relative bg-[#FF6500] hover:bg-[#FF6500]/90 text-white font-semibold px-12 py-6 rounded-2xl text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6500]/30 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Try for free
                    <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6500] via-[#ff7a1a] to-[#FF6500] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                </Button>

                <button 
                  onClick={() => scrollToSection('benefits')}
                  className="group flex items-center text-white/90 hover:text-white font-semibold text-lg transition-all duration-300 px-6 py-3 rounded-xl hover:bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20"
                >
                  <Play className="mr-3 w-5 h-5 transition-transform group-hover:scale-110" />
                  Request a custom agent
                </button>
              </div>

              {/* Trust indicators */}
              <div className="hero-text-5 pt-8">
                <div className="flex justify-center items-center space-x-8 text-white/50 text-sm">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                    No setup required
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                    Free trial
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                    Cancel anytime
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-[#FF6500]/50 transition-colors">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;