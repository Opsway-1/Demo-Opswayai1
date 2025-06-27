import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronDown, MessageSquare, Bot, Workflow, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services-page', 'team', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      // Update scrolled state
      setScrolled(window.scrollY > 50);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  };

  const goToHeroSection = () => {
    // Clear any hash and navigate to main page
    window.location.hash = '';
    window.location.href = '/';
  };

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

  const goToServicesOverview = () => {
    window.location.hash = '#services-overview';
    window.location.reload();
  };

  const goToTeamPage = () => {
    window.location.hash = '#team-page';
    window.location.reload();
  };

  const goToContactPage = () => {
    window.location.hash = '#contact-page';
    window.location.reload();
  };

  const navItems = [
    { id: 'contact', label: 'Contact Us', action: goToContactPage }
  ];

  const serviceItems = [
    {
      id: 'lead-generation',
      label: 'Lead Generation',
      icon: <MessageSquare className="w-4 h-4" />,
      description: 'Automated outreach',
      action: goToLeadGeneration
    },
    {
      id: 'ai-assistants',
      label: 'AI Agents',
      icon: <Bot className="w-4 h-4" />,
      description: '24/7 support',
      action: goToAIVoiceChat
    },
    {
      id: 'workflow-automation',
      label: 'Automation',
      icon: <Workflow className="w-4 h-4" />,
      description: 'Streamline processes',
      action: goToWorkflowAutomations
    },
    {
      id: 'website-development',
      label: 'Smart Websites',
      icon: <Globe className="w-4 h-4" />,
      description: 'AI-powered sites',
      action: goToSmartWebsites
    }
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100/50 shadow-xl shadow-black/5' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Enhanced Logo - Updated to go to Hero section */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={goToHeroSection}
              className={`group relative flex items-center space-x-3 transition-all duration-500 ${
                scrolled 
                  ? 'text-[#0B192C] hover:text-[#FF6500]' 
                  : 'text-white hover:text-[#FF6500]'
              }`}
            >
              {/* Logo Image - changes based on background */}
              <img 
                src={scrolled ? "/Artboard 1@4x copy.png" : "/web (1).png"}
                alt="OpswayAI Logo" 
                className="h-8 w-auto transition-all duration-500"
              />
              
              {/* Hover glow effect */}
              <motion.div 
                className="absolute -inset-3 bg-[#FF6500]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                initial={false}
              />
            </button>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2">
              {/* Services Dropdown */}
              <div className="relative">
                <motion.button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  className={`relative px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-400 font-montserrat tracking-wide flex items-center ${
                    activeSection === 'services-page' || servicesDropdownOpen
                      ? scrolled
                        ? 'text-[#FF6500] bg-[#FF6500]/10 shadow-lg shadow-[#FF6500]/20'
                        : 'text-[#FF6500] bg-white/15 backdrop-blur-sm shadow-lg'
                      : scrolled
                        ? 'text-[#0B192C] hover:text-[#FF6500] hover:bg-[#FF6500]/5'
                        : 'text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Services</span>
                  <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  
                  {/* Active indicator */}
                  {activeSection === 'services-page' && (
                    <motion.div 
                      className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#FF6500] rounded-full"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Hover background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#FF6500]/5 to-[#ff8533]/5 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.button>

                {/* Services Dropdown Menu - Minimized */}
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/50 overflow-hidden z-50"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <div className="p-2">
                        {serviceItems.map((service, index) => (
                          <motion.button
                            key={service.id}
                            onClick={service.action}
                            className="w-full text-left p-3 rounded-xl hover:bg-[#FF6500]/10 transition-all duration-300 group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-[#FF6500]/10 rounded-lg flex items-center justify-center text-[#FF6500] group-hover:bg-[#FF6500] group-hover:text-white transition-all duration-300">
                                {service.icon}
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-[#0B192C] group-hover:text-[#FF6500] transition-colors duration-300 font-montserrat text-sm">
                                  {service.label}
                                </h3>
                                <p className="text-xs text-gray-600 mt-0.5 font-montserrat">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </motion.button>
                        ))}
                      </div>
                      
                      {/* View All Services Button */}
                      <div className="border-t border-gray-100 p-3">
                        <button
                          onClick={goToServicesOverview}
                          className="w-full bg-gradient-to-r from-[#FF6500] to-[#ff8533] text-white font-semibold py-2.5 rounded-xl hover:shadow-lg transition-all duration-300 font-montserrat text-sm"
                        >
                          View All Services
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Meet the Team Button */}
              <motion.button
                onClick={goToTeamPage}
                className={`relative px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-400 font-montserrat tracking-wide ${
                  scrolled
                    ? 'text-[#0B192C] hover:text-[#FF6500] hover:bg-[#FF6500]/5'
                    : 'text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">About Us</span>
                
                {/* Hover background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#FF6500]/5 to-[#ff8533]/5 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.button>

              {/* Other Navigation Items */}
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={item.action}
                  className={`relative px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-400 font-montserrat tracking-wide ${
                    activeSection === item.id
                      ? scrolled
                        ? 'text-[#FF6500] bg-[#FF6500]/10 shadow-lg shadow-[#FF6500]/20'
                        : 'text-[#FF6500] bg-white/15 backdrop-blur-sm shadow-lg'
                      : scrolled
                        ? 'text-[#0B192C] hover:text-[#FF6500] hover:bg-[#FF6500]/5'
                        : 'text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div 
                      className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#FF6500] rounded-full"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Hover background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#FF6500]/5 to-[#ff8533]/5 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.button>
              ))}
              
              {/* Enhanced CTA Button */}
              <motion.button
                onClick={goToBookDemo}
                className="group relative ml-6 bg-gradient-to-r from-[#FF6500] to-[#ff8533] hover:from-[#FF6500]/90 hover:to-[#ff8533]/90 text-white font-bold px-8 py-3 rounded-xl text-sm transition-all duration-400 transform hover:scale-105 hover:shadow-xl hover:shadow-[#FF6500]/30 overflow-hidden font-montserrat tracking-wide"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" />
                  Free Demo
                </span>
                
                {/* Animated background gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#ff7a1a] to-[#FF6500] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                
                {/* Shimmer effect */}
                <motion.div 
                  className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"
                  initial={false}
                />
                
                {/* Glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-[#FF6500]/30 rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10"
                  initial={false}
                />
              </motion.button>
            </div>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative inline-flex items-center justify-center p-3 rounded-xl transition-all duration-300 ${
                scrolled
                  ? 'text-[#0B192C] hover:text-[#FF6500] hover:bg-[#FF6500]/10'
                  : 'text-white hover:text-[#FF6500] hover:bg-white/10 backdrop-blur-sm'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
              
              {/* Mobile button glow */}
              <motion.div 
                className="absolute inset-0 bg-[#FF6500]/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"
                initial={false}
              />
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <motion.div 
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          initial={false}
        >
          <motion.div 
            className="px-4 pt-4 pb-8 space-y-3 bg-white/95 backdrop-blur-xl border-t border-gray-100/50 rounded-b-3xl shadow-2xl shadow-black/10 mt-2"
            initial={false}
            animate={isOpen ? { y: 0 } : { y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Mobile Services with Dropdown */}
            <div>
              <motion.button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`flex items-center justify-between w-full text-left px-6 py-4 text-base font-semibold rounded-xl transition-all duration-300 font-montserrat ${
                  activeSection === 'services-page' || mobileServicesOpen
                    ? 'text-[#FF6500] bg-[#FF6500]/10 shadow-lg shadow-[#FF6500]/20'
                    : 'text-[#0B192C] hover:text-[#FF6500] hover:bg-[#FF6500]/5'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center">
                  Services
                  {activeSection === 'services-page' && (
                    <motion.div 
                      className="ml-3 w-2 h-2 bg-[#FF6500] rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              {/* Mobile Services Submenu */}
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    className="ml-4 mt-2 space-y-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {serviceItems.map((service, index) => (
                      <motion.button
                        key={service.id}
                        onClick={service.action}
                        className="w-full text-left p-3 rounded-xl bg-gray-50 hover:bg-[#FF6500]/5 transition-all duration-300 group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-[#FF6500]/10 rounded-lg flex items-center justify-center text-[#FF6500] group-hover:bg-[#FF6500] group-hover:text-white transition-all duration-300">
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-[#0B192C] group-hover:text-[#FF6500] transition-colors duration-300 font-montserrat text-sm">
                              {service.label}
                            </h3>
                            <p className="text-xs text-gray-600 mt-0.5 font-montserrat">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                    
                    {/* Mobile View All Services Button */}
                    <motion.button
                      onClick={goToServicesOverview}
                      className="w-full bg-gradient-to-r from-[#FF6500] to-[#ff8533] text-white font-semibold py-2.5 rounded-xl hover:shadow-lg transition-all duration-300 font-montserrat mt-3 text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      View All Services
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Meet the Team Button */}
            <motion.button
              onClick={goToTeamPage}
              className="block w-full text-left px-6 py-4 text-base font-semibold rounded-xl transition-all duration-300 font-montserrat text-[#0B192C] hover:text-[#FF6500] hover:bg-[#FF6500]/5"
              initial={{ opacity: 0, x: -20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              About Us
            </motion.button>

            {/* Other Mobile Navigation Items */}
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={item.action}
                className={`block w-full text-left px-6 py-4 text-base font-semibold rounded-xl transition-all duration-300 font-montserrat ${
                  activeSection === item.id
                    ? 'text-[#FF6500] bg-[#FF6500]/10 shadow-lg shadow-[#FF6500]/20'
                    : 'text-[#0B192C] hover:text-[#FF6500] hover:bg-[#FF6500]/5'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: (index + 3) * 0.05 }}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center">
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div 
                      className="ml-auto w-2 h-2 bg-[#FF6500] rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </span>
              </motion.button>
            ))}
            
            {/* Mobile CTA Button */}
            <motion.button
              onClick={goToBookDemo}
              className="w-full mt-6 group bg-gradient-to-r from-[#FF6500] to-[#ff8533] hover:from-[#FF6500]/90 hover:to-[#ff8533]/90 text-white font-bold px-6 py-4 rounded-xl text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden font-montserrat"
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
                Free Demo
              </span>
              
              {/* Mobile button shimmer */}
              <motion.div 
                className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"
                initial={false}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;