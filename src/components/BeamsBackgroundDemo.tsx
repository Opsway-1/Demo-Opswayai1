import { BeamsBackground } from "@/components/ui/beams-background";
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export function BeamsBackgroundDemo() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
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
        <div className="relative min-h-screen overflow-hidden bg-[#0B192C]">
            {/* Futuristic Background Elements */}
            <div className="absolute inset-0">
                {/* Animated Grid */}
                <div className="absolute inset-0 opacity-20">
                    <div 
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(255, 101, 0, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255, 101, 0, 0.1) 1px, transparent 1px)
                            `,
                            backgroundSize: '50px 50px',
                            animation: 'grid-move 20s linear infinite'
                        }}
                    />
                </div>

                {/* Floating Orbs */}
                <motion.div 
                    className="absolute top-20 left-20 w-96 h-96 bg-[#FF6500]/10 rounded-full blur-3xl"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                        x: [0, 50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                    className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{ 
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.7, 0.4],
                        x: [0, -40, 0],
                        y: [0, 20, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Geometric Shapes */}
                <motion.div 
                    className="absolute top-32 right-32 w-4 h-4 bg-[#FF6500] rounded-full"
                    animate={{ 
                        y: [0, -20, 0],
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                    className="absolute top-48 left-48 w-6 h-6 border-2 border-white/30 rotate-45"
                    animate={{ 
                        rotate: [45, 225, 45],
                        y: [0, -15, 0]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                    className="absolute bottom-48 left-32 w-8 h-8 bg-white/10 rounded-lg"
                    animate={{ 
                        rotate: [0, 180, 360],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Particle System */}
                {Array.from({ length: 50 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/40 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: 6 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Scanning Lines */}
                <motion.div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `linear-gradient(90deg, 
                            transparent 0%, 
                            rgba(255, 101, 0, 0.1) 50%, 
                            transparent 100%
                        )`,
                        width: '200px',
                        height: '100%'
                    }}
                    animate={{
                        x: ['-200px', 'calc(100vw + 200px)']
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6500]/5 to-transparent opacity-30" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-8">
                <div className="flex flex-col justify-center min-h-screen py-20">
                    <div className="max-w-6xl mx-auto text-center">
                        
                        {/* Main headline with enhanced animations */}
                        <div className="hero-content space-y-8">
                            <motion.h1 
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight font-montserrat"
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ 
                                    duration: 1.2, 
                                    delay: 0.2,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10
                                }}
                            >
                                <motion.div
                                    className="overflow-hidden"
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                >
                                    <motion.span 
                                        className="inline-block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
                                        initial={{ opacity: 0, y: 100, rotateX: -90 }}
                                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                        transition={{ 
                                            duration: 1.0, 
                                            delay: 0.5,
                                            type: "spring",
                                            stiffness: 120,
                                            damping: 12
                                        }}
                                    >
                                        Try Before You Trust
                                    </motion.span>
                                </motion.div>
                                <br />
                                <motion.div
                                    className="overflow-hidden"
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                >
                                    <motion.span 
                                        className="inline-block bg-gradient-to-r from-[#FF6500] to-[#ff8533] bg-clip-text text-transparent relative"
                                        initial={{ opacity: 0, y: 100, rotateX: -90 }}
                                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                        transition={{ 
                                            duration: 1.0, 
                                            delay: 0.9,
                                            type: "spring",
                                            stiffness: 120,
                                            damping: 12
                                        }}
                                    >
                                        We Deliver First
                                        <motion.div 
                                            className="absolute -inset-4 bg-[#FF6500]/20 blur-2xl rounded-lg"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.8, 1.1, 0.8] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                                        />
                                    </motion.span>
                                </motion.div>
                            </motion.h1>

                            <motion.p 
                                className="text-xl sm:text-2xl md:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light font-montserrat"
                                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ 
                                    duration: 1.2, 
                                    delay: 1.3,
                                    type: "spring",
                                    stiffness: 80,
                                    damping: 15
                                }}
                            >
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 1.5 }}
                                >
                                    Discover exactly how AI can streamline your business with a hands-on system built specifically for you
                                </motion.span>
                            </motion.p>

                            {/* Enhanced CTA Buttons */}
                            <motion.div 
                                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ 
                                    duration: 1, 
                                    delay: 1.8,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15
                                }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button 
                                        size="lg" 
                                        onClick={goToBookDemo}
                                        className="group relative bg-[#FF6500] hover:bg-[#FF6500]/90 text-white font-semibold px-12 py-6 rounded-2xl text-lg transition-all duration-500 transform hover:shadow-2xl hover:shadow-[#FF6500]/30 overflow-hidden font-montserrat"
                                    >
                                        <span className="relative z-10 flex items-center">
                                            Get Your Free Demo
                                            <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                        </span>
                                        
                                        {/* Multiple animated backgrounds */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6500] via-[#ff7a1a] to-[#FF6500] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                                        
                                        {/* Pulsing glow */}
                                        <motion.div 
                                            className="absolute inset-0 bg-[#FF6500]/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-60"
                                            animate={{ 
                                                scale: [1, 1.1, 1],
                                                opacity: [0, 0.6, 0]
                                            }}
                                            transition={{ 
                                                duration: 2, 
                                                repeat: Infinity,
                                                repeatDelay: 1
                                            }}
                                        />
                                    </Button>
                                </motion.div>

                                <motion.button 
                                    onClick={goToScheduleCall}
                                    className="group flex items-center text-white/90 hover:text-white font-semibold text-lg transition-all duration-300 px-6 py-3 rounded-xl hover:bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 font-montserrat relative overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Calendar className="mr-3 w-5 h-5 transition-transform group-hover:scale-110" />
                                    Schedule a Call
                                    
                                    {/* Hover effect */}
                                    <motion.div 
                                        className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                                        initial={false}
                                    />
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced scroll indicator */}
            <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <motion.div 
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-[#FF6500]/50 transition-colors relative overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                >
                    <motion.div 
                  Schedule a Call
                        animate={{ 
                            opacity: [0.3, 1, 0.3],
                            y: [0, 8, 0]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    
                    {/* Glow effect */}
                    <motion.div 
                        className="absolute inset-0 bg-[#FF6500]/20 rounded-full blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                    />
                </motion.div>
            </motion.div>

            {/* CSS for grid animation */}
            <style jsx>{`
                @keyframes grid-move {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(50px, 50px); }
                }
            `}</style>
        </div>
    );
}