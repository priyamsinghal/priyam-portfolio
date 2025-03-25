// Home.tsx
import Hero from '../components/home/Hero';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Contact from '../pages/Contact';
import ScrollReveal from '../components/ScrollReveal';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Delay of 100ms (adjust as needed)
    }
  }, [hash]);
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <ScrollReveal>
          <About />
        </ScrollReveal>
      </section>
      <section id="experience">
        <ScrollReveal>
          <Experience />
        </ScrollReveal>
      </section>
      <section id="contact">
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Home;

