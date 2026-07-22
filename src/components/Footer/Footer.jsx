import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0f172a] pt-16 pb-8 border-t border-slate-800">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-4 gap-10 mb-12">

                    {/* Brand Info */}
                    <div className="md:col-span-1 border-r border-slate-800 pr-4">
                        <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 inline-flex items-center gap-2">
                            MV <span className="text-white text-sm font-semibold tracking-wide block mt-1">Mahesh Vora</span>
                        </h2>
                        <p className="text-slate-500 text-xs mb-6">
                            WordPress Developer | Plugin Developer<br />Full Stack Web Developer
                        </p>
                        <div className="flex space-x-3">
                            <a href="https://github.com/voramahesh" target='_blank' rel='noopener noreferrer' className="w-8 h-8 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-purple-900/20 transition-all border border-slate-700">
                                <FiGithub size={14} />
                            </a>
                            <a href="https://in.linkedin.com/in/mahesh-vora-760787200" target='_blank' rel='noopener noreferrer' className="w-8 h-8 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-900/20 transition-all border border-slate-700">
                                <FiLinkedin size={14} />
                            </a>
                            <a href="mailto:[voramahesh63@gmail.com]" className="w-8 h-8 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-rose-900/20 transition-all border border-slate-700">
                                <FiMail size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1"><span className="text-xs">›</span> About</a></li>
                            <li><a href="#skills" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1"><span className="text-xs">›</span> Skills</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1"><span className="text-xs">›</span> Services</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm opacity-0 hidden md:block">Links</h4>
                        <ul className="space-y-2 text-sm mt-0 md:-mt-1">
                            <li><a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1"><span className="text-xs">›</span> Projects</a></li>
                            <li><a href="#experience" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1"><span className="text-xs">›</span> Experience</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Services</h4>
                        <ul className="space-y-2 text-sm mb-6">
                            <li><span className="text-slate-400">Website Development</span></li>
                            <li><span className="text-slate-400">WooCommerce</span></li>
                            <li><span className="text-slate-400">Plugin Development</span></li>
                            <li><span className="text-slate-400">Speed Optimization</span></li>
                            <li><span className="text-slate-400">API Integration</span></li>
                            <li><span className="text-slate-400">Website Maintenance</span></li>
                        </ul>
                    </div>

                    {/* Extra Col for Newsletter (simulated from image layout) */}
                    {/* <div className="md:col-span-4 lg:col-span-1 lg:absolute lg:right-12 xl:right-auto">
                        <h4 className="text-white font-semibold mb-4 text-sm">Newsletter</h4>
                        <p className="text-slate-500 text-xs mb-3">Stay updated with my latest work and articles.</p>
                        <div className="flex">
                            <input type="email" placeholder="Enter your email" className="bg-slate-900 border border-slate-700 text-slate-300 text-xs px-3 py-2 rounded-l-md w-full focus:outline-none focus:border-purple-500" />
                            <button className="bg-purple-600 hover:bg-purple-500 text-white px-3 py-2 rounded-r-md transition-colors flex items-center justify-center">
                                <FiSend size={12} />
                            </button>
                        </div>
                    </div> */}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800 text-xs text-slate-500">
                    <p>© 2026 Mahesh Vora. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
