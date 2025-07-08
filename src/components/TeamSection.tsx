import React from 'react';
import { Linkedin, Mail, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  const founders = [
    {
      name: "Egzon Bulliqi",
      role: "CEO & Founder",
      bio: "Product strategist and automation expert, Egzon leads with a passion for building scalable, real-world AI systems.",
      image: "/DSCF2425 copy.JPG",
      linkedin: "#",
      email: "egzon@opswayai.com"
    },
    {
      name: "Erjon Krasniqi",
      role: "CTO & Co-Founder",
      bio: "Technical architect with deep AI knowledge, Erjon turns complex automation into intuitive solutions.",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      linkedin: "#",
      email: "erjon@opswayai.com"
    }
  ];

  const goToTeamPage = () => {
    window.location.hash = '#team-page';
    window.location.reload();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 100);
  };
  return (
    <section id="team" className="section-animate relative overflow-hidden bg-[#0B192C]">
      {/* Dynamic Background - Same as Team Page first section */}
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

      <div className="container mx-auto px-6 lg:px-8 relative z-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-montserrat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Founders Obsessed With Results, Not Hype
            </motion.h2>
            <motion.p 
              className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed font-montserrat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We aren't chasing trends. We're building practical AI systems that help businesses grow with confidence and clarity.
            </motion.p>
          </div>

          {/* Founders Grid - 2 Column Layout */}
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
            <p className="text-xl text-white/90 font-montserrat leading-relaxed max-w-2xl mx-auto">
              Together, they're building the future of business automation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;