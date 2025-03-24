// Home.tsx
import Hero from '../components/home/Hero';
import About from '../pages/About';
import Experience from '../pages/Experience'; // if available
import Contact from '../pages/Contact';       // if available
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  return (
    <div>
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Experience />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </div>
  );
};

export default Home;

