import Intro from '@/components/intro';
import SectionDivider from '@/components/section-divider';
import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/components/about'));
const Projects = dynamic(() => import('@/components/projects'));
const Skills = dynamic(() => import('@/components/skills'));
const Experience = dynamic(() => import('@/components/experience'));
const Testimonials = dynamic(() => import('@/components/testimonials'));
const Contact = dynamic(() => import('@/components/contact'));

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
  );
}
