import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'John Doe',
            role: 'Business Owner',
            text: '"Mahesh is an excellent developer. He delivered our project on time with perfect quality. Highly recommended!"',
            avatar: 'https://i.pravatar.cc/150?img=11'
        },
        {
            name: 'Sarah Wilson',
            role: 'Marketing Manager',
            text: '"Great communication and technical skills. He understood our requirements perfectly and exceeded our expectations."',
            avatar: 'https://i.pravatar.cc/150?img=5'
        },
        {
            name: 'Michael Brown',
            role: 'CEO, Tech Solutions',
            text: '"Our website speed improved significantly. He is very professional and reliable. Will work with him again!"',
            avatar: 'https://i.pravatar.cc/150?img=8'
        }
    ];

    return (
        <section id="testimonials" className="py-12 bg-[#0f172a] lg:w-1/2 float-right clear-right lg:clear-none">
            <div className="container mx-auto px-6 md:px-12 lg:pl-6">
                <h3 className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-8 uppercase">Testimonials</h3>

                <div className="space-y-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="glass p-6 rounded-2xl border border-white/5"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="flex text-yellow-400 mb-4 text-sm gap-1">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                            <p className="text-slate-300 italic text-sm mb-6 leading-relaxed">
                                {testimonial.text}
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full object-cover border-2 border-slate-700"
                                />
                                <div>
                                    <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                                    <p className="text-slate-500 text-xs">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
