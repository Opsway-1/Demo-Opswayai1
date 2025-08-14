import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Linkedin, Instagram, Shield, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  const goToServicesOverview = () => {
    window.location.hash = '#services-overview';
    window.location.reload();
  };

  const goToTeamPage = () => {
    window.location.hash = '#team-page';
    window.location.reload();
  };

  const footerSections = [
    {
      title: "Contact Info",
      links: [
        { 
          label: "hello@opswayai.com", 
          href: "mailto:hello@opswayai.com", 
          icon: <Mail className="w-4 h-4" />,
          external: true
        },
        { 
          label: "+383 (44) 450-008", 
          href: "tel:+38344450008", 
          icon: <Phone className="w-4 h-4" />,
          external: true
        },
        { 
          label: "Pristina, Kosovo – Serving clients worldwide", 
          href: "#", 
          icon: <MapPin className="w-4 h-4" />,
          external: false
        }
      ]
    },
    {
      title: "Platform",
      links: [
        { label: "Services", href: "#", action: goToServicesOverview },
        { label: "About", href: "#", action: goToTeamPage }
      ]
    },
    {
      title: "Social & Security",
      links: [
        { 
          label: "LinkedIn", 
          href: "https://linkedin.com/company/opswayai", 
          icon: <Linkedin className="w-4 h-4" />,
          external: true
        },
        { 
          label: "Instagram", 
          href: "https://instagram.com/opswayai", 
          icon: <Instagram className="w-4 h-4" />,
          external: true
        },
        { 
          label: "Terms of Service", 
          href: "#", 
          icon: <FileText className="w-4 h-4" />,
          external: false
        }
      ]
    }
  ];

  return (
    <footer className="bg-[#0B192C] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#FF6500]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/2 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="py-16">
            {/* Logo Section */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={scrollToTop}
                className="group flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src="/Artboard 1@4x.png" 
                  alt="OpswayAI Logo" 
                  className="h-16 w-auto"
                />
              </button>
            </motion.div>

            {/* Footer Columns - Clean 4-Column Layout */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {footerSections.map((section, sectionIndex) => (
                <motion.div 
                  key={sectionIndex}
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + (sectionIndex * 0.1) }}
                  viewport={{ once: true }}
                >
                  {/* Section Title */}
                  <h3 className="text-lg font-semibold text-white font-montserrat">
                    {section.title}
                  </h3>

                  {/* Section Links */}
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        {link.action ? (
                          <button
                            onClick={link.action}
                            className="group flex items-start space-x-2 text-white/80 hover:text-[#FF6500] transition-colors duration-300 font-montserrat text-left"
                          >
                            {link.icon && (
                              <span className="text-white/60 group-hover:text-[#FF6500] transition-colors duration-300 mt-0.5 flex-shrink-0">
                                {link.icon}
                              </span>
                            )}
                            <span className="group-hover:translate-x-1 transition-transform duration-300 leading-relaxed">
                              {link.label}
                            </span>
                          </button>
                        ) : (
                          <a
                            href={link.href}
                            target={link.external ? "_blank" : "_self"}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            className="group flex items-start space-x-2 text-white/80 hover:text-[#FF6500] transition-colors duration-300 font-montserrat"
                          >
                            {link.icon && (
                              <span className="text-white/60 group-hover:text-[#FF6500] transition-colors duration-300 mt-0.5 flex-shrink-0">
                                {link.icon}
                              </span>
                            )}
                            <span className="group-hover:translate-x-1 transition-transform duration-300 leading-relaxed">
                              {link.label}
                            </span>
                            {link.external && !link.icon && (
                              <ExternalLink className="w-3 h-3 text-white/40 group-hover:text-[#FF6500] transition-colors duration-300 mt-1 flex-shrink-0" />
                            )}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Horizontal Line */}
          <motion.div 
            className="border-t border-white/10"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          />

          {/* Copyright Section */}
          <motion.div 
            className="py-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright Text */}
              <div className="text-white/60 text-sm font-montserrat">
                © {new Date().getFullYear()} OpswayAI. All rights reserved.
              </div>

              {/* Footer Note */}
              <div className="text-white/80 text-sm font-montserrat text-center md:text-right">
                Join the automation revolution. Your competitors already have.
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white/50 text-xs font-montserrat">
                <div className="flex items-center space-x-4">
                  <span>🇽🇰 Made in Kosovo</span>
                  <span>•</span>
                  <span>🌍 Serving clients worldwide</span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span>All systems operational</span>
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>Built with</span>
                  <span className="text-[#FF6500]">❤️</span>
                  <span>and AI</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;