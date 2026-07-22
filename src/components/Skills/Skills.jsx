import React from 'react';

const SkillBar = ({ name, percentage }) => (
    <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-slate-300">{name}</span>
            <span className="text-xs text-slate-400 font-semibold">{percentage}%</span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div
                className="bg-gradient-to-r from-purple-500 to-cyan-500 h-1.5 rounded-full relative"
                style={{ width: `${percentage}%` }}
                data-aos="fade-right"
                data-aos-duration="1000"
            >
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]"></div>
            </div>
        </div>
    </div>
);

const Skills = () => {
    const skillCategories = [
        {
            title: "WordPress",
            skills: [
                { name: 'WordPress', percentage: 99 },
                { name: 'WooCommerce', percentage: 99 },
                { name: 'Elementor', percentage: 98 },
                { name: 'Custom Plugins', percentage: 90 },
                { name: 'ACF', percentage: 99 },
                { name: 'WPML', percentage: 90 },
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: 'PHP', percentage: 95 },
                { name: 'MySQL', percentage: 85 },
                { name: 'REST API', percentage: 90 },
                { name: 'JQuery', percentage: 95 },
                { name: 'JavaScript', percentage: 85 },
            ]
        },
        {
            title: "Frontend",
            skills: [
                { name: 'HTML5', percentage: 95 },
                { name: 'CSS3', percentage: 90 },
                { name: 'React', percentage: 75 },
                { name: 'Bootstrap', percentage: 85 },
                { name: 'Tailwind CSS', percentage: 75 },
            ]
        },
        {
            title: "Tools",
            skills: [
                { name: 'AI Tool', percentage: 90 },
                { name: 'GitHub', percentage: 95 },
                { name: 'VS Code', percentage: 90 },
                { name: 'Figma', percentage: 95 },
                { name: 'Postman', percentage: 85 },
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-[#020617] relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h3 className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">My Skills</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Expertise</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl border border-white/5" data-aos="fade-up" data-aos-delay={idx * 100}>
                            <h4 className="text-lg font-bold text-white mb-6 pb-2 border-b border-slate-700">{category.title}</h4>
                            <div className="space-y-2">
                                {category.skills.map((skill, index) => (
                                    <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
