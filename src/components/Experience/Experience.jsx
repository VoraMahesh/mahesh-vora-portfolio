import React from 'react';

const Experience = () => {
    const experiences = [
        {
            period: '2023 - Present',
            role: 'Senior WordPress Developer',
            description: 'Working with global clients on complex WordPress projects, custom plugins, and WooCommerce solutions.',
        },
        {
            period: '2021 - 2023',
            role: 'WordPress Developer',
            description: 'Developed custom themes, plugins, and websites for various businesses and industries.',
        },
        {
            period: '2019 - 2021',
            role: 'Junior Web Developer',
            description: 'Built dynamic websites and web applications using PHP, MySQL, and JavaScript.',
        },
        {
            period: '2018 - 2019',
            role: 'Started Learning Web Development',
            description: 'Began my journey of learning web development.',
        },
    ];

    return (
        <section id="experience" className="py-12 bg-[#0f172a] lg:w-1/2 float-left">
            <div className="container mx-auto px-6 md:px-12 lg:pr-6">
                <h3 className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-8 uppercase">Experience</h3>

                <div className="relative border-l border-slate-700 ml-3 md:ml-4 space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8" data-aos="fade-up" data-aos-delay={index * 100}>
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-[#0f172a]"></div>

                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                                <span className="text-xs font-semibold text-cyan-400 bg-cyan-900/20 px-2 py-1 rounded inline-block w-max">
                                    {exp.period}
                                </span>
                                <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                            </div>
                            <p className="text-slate-400 text-sm">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
