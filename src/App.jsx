import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="bg-[#020617] min-h-screen text-slate-100 font-sans selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
