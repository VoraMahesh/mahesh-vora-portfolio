import React from 'react';

import { FiMonitor, FiUsers, FiBox, FiClock } from 'react-icons/fi';
import profileImage from "../../assets/images/Mahesh-Vora.png";

const About = () => {
    const stats = [
        { label: 'Projects Completed', value: 60, suffix: '+', icon: <FiMonitor size={24} className="text-cyan-400" /> },
        { label: 'Happy Clients', value: 30, suffix: '+', icon: <FiUsers size={24} className="text-purple-400" /> },
        { label: 'Custom Plugins', value: 20, suffix: '+', icon: <FiBox size={24} className="text-blue-400" /> },
        { label: 'Years Experience', value: 6, suffix: '+', icon: <FiClock size={24} className="text-pink-400" /> },
    ];

    return (
        <section id="about" className="py-24 bg-[#0f172a] relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative" data-aos="fade-right">
                        <div className="inline-block relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 rounded-2xl transform translate-x-4 translate-y-4"></div>
                            <img
                                src={profileImage}
                                alt="About Mahesh Vora"
                                className="relative z-10 rounded-2xl border border-slate-700 w-full max-w-sm mx-auto object-cover glass grayscale hover:grayscale-0 transition-all duration-500"
                            />

                            {/* Experience Badge */}
                            <div className="absolute -bottom-6 -right-6 z-20 bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-2xl shadow-xl border border-white/10 text-center w-36 h-36 flex flex-col justify-center items-center transform hover:scale-105 transition-transform">
                                <span className="text-3xl font-bold text-white mb-1 drop-shadow-md">6+</span>
                                <span className="text-sm font-medium text-slate-100 uppercase tracking-wider">Years<br />Experience</span>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div data-aos="fade-left">
                        <h3 className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">About Me</h3>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Turning ideas into powerful digital solutions
                        </h2>

                        <div className="text-slate-400 space-y-4 text-lg mb-8">
                            <p>
                                I'm a passionate WordPress and WooCommerce Developer with over 6 years of experience delivering high-quality websites. I specialize in creating custom wordpress and woocommerce websites, Developing and customizing plugins/themes, Gutenberg Block Development, ACF, Headless CMS, API Integration, Payment gateway integration, Performance optimization and site maintenance.
                            </p>
                            <p>
                                I love solving problems with clean code and modern technologies. My goal is to help businesses succeed online with innovative solutions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-800" data-aos="fade-up">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex gap-4 items-center">
                            <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0">
                                {stat.icon}
                            </div>
                            <div>
                                <h4 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                                    {stat.value}
                                    {stat.suffix}
                                </h4>
                                <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
