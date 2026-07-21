import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-[#020617] clear-both relative border-t border-slate-900/50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div data-aos="fade-right">
                        <h3 className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">Contact Me</h3>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's work together</h2>
                        <p className="text-slate-400 mb-10 text-lg">
                            Have a project in mind? Let's discuss how I can help you achieve your goals.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-purple-400 shrink-0 border border-purple-500/20">
                                    <FiMail size={20} />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Email</p>
                                    <p className="text-white font-medium">voramahesh63@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20">
                                    <FiPhone size={20} />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Phone</p>
                                    <p className="text-white font-medium">+91 87586 23686</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-pink-400 shrink-0 border border-pink-500/20">
                                    <FiMapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Location</p>
                                    <p className="text-white font-medium">Gujarat, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div data-aos="fade-left">
                        <div className="glass p-2 rounded-2xl border border-white/5 h-full min-h-[350px] overflow-hidden">
                            <iframe
                                src="https://maps.google.com/maps?q=Gujarat,%20India&t=&z=6&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full min-h-[350px] rounded-xl invert-[.9] hue-rotate-180 contrast-85 opacity-80 hover:opacity-100 transition-opacity duration-300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Gujarat, India Map"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
