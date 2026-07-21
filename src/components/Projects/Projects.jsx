import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaWordpress, FaLaravel } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, tags, demoLink, githubLink }) => {
    return (
        <div className="glass rounded-2xl border border-white/5 overflow-hidden group hover:border-purple-500/30 transition-all duration-300">
            <div className="relative h-48 overflow-hidden bg-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent z-10"></div>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
            </div>
            <div className="p-6 relative z-20 -mt-8">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
                            {tag.icon && <tag.icon className={tag.color} />} {tag.name}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex-1 btn-primary text-center text-sm py-2 px-4 rounded flex items-center justify-center gap-2">
                        Live Demo <FiExternalLink />
                    </a>
                    {/* {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 btn-outline text-center text-sm py-2 px-4 rounded flex items-center justify-center gap-2">
                            GitHub <FiGithub />
                        </a>
                    )} */}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: 'WooCommerce Website',
            description: 'A complete course purchase website with custom features, advanced woocommerce customization and secure payment gateway.',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: [
                { name: 'WooCommerce', color: 'text-purple-400' },
                { name: 'PHP', color: 'text-indigo-400' },
                { name: 'Stripe', color: 'text-blue-500' }
            ],
            demoLink: 'https://joineti.com/',
            githubLink: '#'
        },
        {
            title: 'WordPress Multi-Site Website',
            description: 'Corporate website built with WordPress Multi-site and Elementor, featuring modern design and optimized performance.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: [
                { name: 'WordPress', color: 'text-blue-400' },
                { name: 'Multi-site', color: 'text-pink-500' },
                { name: 'Elementor', color: 'text-teal-400' }
            ],
            demoLink: 'https://ritewayac.com/',
            githubLink: '#'
        },
        {
            title: 'ACF Flexible Content Website',
            description: 'A website built with ACF Flexible Content and esay to mange content featuring modern design.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: [
                { name: 'ACF', color: 'text-red-500' },
                { name: 'WordPress', color: 'text-orange-400' },
                { name: 'Bootstrap', color: 'text-purple-500' }
            ],
            demoLink: 'https://defensestorm.com/',
            githubLink: '#'
        },
        {
            title: 'WordPress Plugin',
            description: 'Search and find all the pages, posts, widgets, Elementor templates and fields where a Contact Form 7 form is used.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: [
                { name: 'WordPress Plugin', color: 'text-blue-400' },
                { name: 'PHP', color: 'text-indigo-400' },
                { name: 'AJAX', color: 'text-yellow-400' }
            ],
            demoLink: 'https://wordpress.org/plugins/mv-form-usage-finder/',
            githubLink: '#'
        },
    ];

    return (
        <section id="projects" className="py-24 bg-[#020617]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h3 className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">Featured Projects</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">My Recent Work</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <div data-aos="fade-up" data-aos-delay={index * 100} key={index}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
