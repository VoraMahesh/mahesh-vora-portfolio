import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload } from 'react-icons/fi';
import { FaWordpress, FaLaravel, FaElementor, FaPhp, FaRobot } from 'react-icons/fa';
import { SiWoocommerce, SiJquery, SiMysql, SiPostman } from 'react-icons/si';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen"></div>

            <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div data-aos="fade-up">
                    <h2 className="text-xl md:text-2xl text-cyan-400 font-medium mb-2">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                        Mahesh Vora
                    </h1>
                    <div className="text-2xl md:text-3xl font-semibold mb-6 flex flex-wrap gap-2 text-slate-300">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                            <TypeAnimation
                                sequence={[
                                    'WordPress Developer',
                                    2000,
                                    'WooCommerce Developer',
                                    2000,
                                    'Plugin Developer',
                                    2000,
                                    'Theme Developer',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </div>

                    <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
                        I build fast, secure, and scalable websites, custom WordPress plugins, WooCommerce stores, and web applications that help businesses grow online.
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-3 mb-10">
                        <div className="flex items-center gap-2 glass px-4 py-2 rounded-full text-sm">
                            <FaWordpress className="text-blue-400" /> WordPress
                        </div>
                        <div className="flex items-center gap-2 glass px-4 py-2 rounded-full text-sm">
                            <SiWoocommerce className="text-purple-500" /> WooCommerce
                        </div>
                        <div className="flex items-center gap-2 glass px-4 py-2 rounded-full text-sm">
                            <FaElementor className="text-pink-500" /> Elementor
                        </div>
                        <div className="flex items-center gap-2 glass px-4 py-2 rounded-full text-sm">
                            <FaPhp className="text-indigo-400" /> PHP
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-5 mb-10">
                        <a href="#projects" className="btn-primary flex items-center gap-2">
                            View My Work <FiArrowRight />
                        </a>
                        <a href="/resume.pdf" className="btn-outline flex items-center gap-2 pb-3 pt-3">
                            Download Resume <FiDownload />
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-sm text-slate-400 uppercase tracking-wider font-medium">Follow Me</span>
                        <div className="w-12 h-[1px] bg-slate-700"></div>
                        <div className="flex space-x-4">
                            <a href="https://github.com/voramahesh" className="w-10 h-10 rounded-full glass border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-500 hover:bg-purple-900/20 transition-all">
                                <FiGithub size={20} />
                            </a>
                            <a href="https://in.linkedin.com/in/mahesh-vora-760787200" className="w-10 h-10 rounded-full glass border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 hover:bg-blue-900/20 transition-all">
                                <FiLinkedin size={20} />
                            </a>
                            <a href="mailto:[voramahesh63@gmail.com]" className="w-10 h-10 rounded-full glass border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-rose-500 hover:bg-rose-900/20 transition-all">
                                <FiMail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Image / Graphic Content */}
                <div className="relative" data-aos="fade-left" data-aos-delay="200">
                    <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
                        {/* Glowing Ring */}
                        <div className="absolute inset-4 rounded-full border-2 border-transparent bg-gradient-to-tr from-purple-500 via-transparent to-cyan-500 mx-auto animate-[spin_10s_linear_infinite]" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', padding: '2px' }}></div>

                        {/* Image placeholder - in real project replace with actual image */}
                        <div className="w-80 h-80 bg-slate-800 rounded-full overflow-hidden border-4 border-slate-900 z-10 box-shadow-xl relative">
                            <img src="../src/assets/images/Mahesh-Vora.png" alt="Mahesh Vora" className="w-full h-full object-cover" />
                        </div>

                        {/* Floating Icons */}
                        <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute top-10 left-10 glass p-3 rounded-2xl z-20 shadow-lg border border-purple-500/30">
                            <FaWordpress className="text-3xl text-blue-400" title="WordPress" />
                        </motion.div>
                        <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }} className="absolute bottom-20 left-0 glass p-3 rounded-2xl z-20 shadow-lg border border-indigo-500/30">
                            <FaPhp className="text-3xl text-indigo-400 php" title="PH" />
                        </motion.div>
                        <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }} className="absolute top-20 right-0 glass p-3 rounded-2xl z-20 shadow-lg border border-purple-500/30">
                            <SiWoocommerce className="text-3xl text-purple-400" title="WooCommerce" />
                        </motion.div>
                        <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 2.5, delay: 1.5 }} className="absolute bottom-10 right-10 glass p-3 rounded-2xl z-20 shadow-lg border border-cyan-500/30">
                            <span className="font-bold text-xl text-cyan-400" title="HTML/CSS">&lt;/&gt;</span>
                        </motion.div>
                        {/* New WP Backend related Floating Icons */}
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4.5, delay: 0.2 }} className="absolute -top-4 left-1/3 glass p-2 rounded-xl z-20 shadow-lg border border-blue-500/30">
                            <SiMysql className="text-2xl text-blue-500" title="MySQL" />
                        </motion.div>
                        <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 3.8, delay: 0.8 }} className="absolute -bottom-4 left-1/2 glass p-2 rounded-xl z-20 shadow-lg border border-blue-400/30">
                            <SiJquery className="text-2xl text-blue-400" title="jQuery" />
                        </motion.div>
                        <motion.div animate={{ x: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3.2, delay: 1.2 }} className="absolute top-1/2 -left-4 glass p-2 rounded-xl z-20 shadow-lg border border-orange-500/30">
                            <SiPostman className="text-2xl text-orange-500" title="Postman" />
                        </motion.div>
                        <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4.2, delay: 0.6 }} className="absolute top-1/2 -right-4 glass p-2 rounded-xl z-20 shadow-lg border border-teal-500/30">
                            <FaRobot className="text-2xl text-teal-500" title="AI Tools" />
                        </motion.div>
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3.6, delay: 1.8 }} className="absolute top-4 right-1/4 glass p-2 rounded-xl z-20 shadow-lg border border-yellow-500/30 font-bold text-xs text-yellow-500 flex items-center justify-center">
                            AJAX
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </a>
            </div>

            {/* Decorative Wave Divider at bottom - approximate of the design */}
            <div className="absolute bottom-0 w-full overflow-hidden leading-none z-0">
                <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C7.2,4.6,14.61,9.08,22.25,13.43c75.69,42.4,166.44,53.4,251.69,41.97,15.86-2.12,31.62-4.99,47.45-8.96Z" fill="#0f172a"></path>
                    <path d="M1200 120L0 120 0 0 1200 0 1200 120z" fill="none" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2" strokeDasharray="5,5"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
