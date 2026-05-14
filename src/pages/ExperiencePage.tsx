import { useEffect } from 'react';
import { Experience } from '../components/Experience';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function ExperiencePage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Experience />
    </main>
  );
}
