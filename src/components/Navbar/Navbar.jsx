import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiMoon } from 'react-icons/fi';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Services', to: 'services' },
        { name: 'Projects', to: 'projects' },
        { name: 'Experience', to: 'experience' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link to="home" smooth={true} cursor="pointer" className="text-3xl font-bold cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    MV
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8 text-sm font-medium text-slate-300">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    offset={-70}
                                    className="hover:text-white cursor-pointer transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="contact" smooth={true} offset={-70} className="btn-primary cursor-pointer text-sm">
                        Hire Me
                    </Link>
                    <button className="p-2 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-300 transition-colors">
                        <FiMoon size={18} />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-slate-300 hover:text-white focus:outline-none"
                    >
                        {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass shadow-xl border-t border-slate-800">
                    <ul className="flex flex-col py-4 px-6 space-y-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    offset={-70}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-slate-300 hover:text-white text-lg py-2"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
