import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import AITraining from '@/sections/AITraining';
import Gallery from '@/sections/Gallery';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AITraining />
      <Gallery />
      <Contact />
    </div>
  );
}
