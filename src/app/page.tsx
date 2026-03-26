import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Projects from '@/components/Projects';
import Arsenal from '@/components/Arsenal';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen selection:bg-white/30">
      <div className="relative w-full">
        <Overlay />
        <ScrollyCanvas />
      </div>
      <Projects />
      <Arsenal />
      <About />
      <Experience />
      <Contact />
    </main>
  );
}
