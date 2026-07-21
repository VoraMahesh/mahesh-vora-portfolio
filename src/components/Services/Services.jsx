import React from 'react';
import { FiGlobe, FiShoppingCart, FiSettings, FiZap, FiDatabase, FiShield } from 'react-icons/fi';

const ServiceCard = ({ icon, title, description, delay }) => {
    return (
        <div
            className="glass p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 group hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div className="w-14 h-14 rounded-xl bg-slate-800/80 flex items-center justify-center mb-6 text-purple-400 group-hover:text-cyan-400 group-hover:bg-slate-700/80 transition-colors shadow-inner">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
                {description}
            </p>
        </div>
    );
};

const Services = () => {
    const services = [
        {
            icon: <FiGlobe size={28} />,
            title: 'Website Development',
            description: 'Modern, responsive, and SEO-friendly websites that represent your business perfectly.',
        },
        {
            icon: <FiShoppingCart size={28} />,
            title: 'WooCommerce Development',
            description: 'Build powerful online stores with custom features and seamless payment integration.',
        },
        {
            icon: <FiSettings size={28} />,
            title: 'Custom Plugin Development',
            description: 'Create custom WordPress plugins tailored to your specific business requirements.',
        },
        {
            icon: <FiZap size={28} />,
            title: 'Speed Optimization',
            description: 'Improve website speed, Core Web Vitals, and performance for better user experience.',
        },
        {
            icon: <FiDatabase size={28} />,
            title: 'API Integration',
            description: 'Integrate third-party APIs, payment gateways, CRMs, and other external services.',
        },
        {
            icon: <FiShield size={28} />,
            title: 'Website Maintenance',
            description: 'Regular updates, backups, security monitoring, and ongoing support for your website.',
        },
    ];

    return (
        <section id="services" className="py-24 bg-[#0f172a]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h3 className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">Services</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">What I Do</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
