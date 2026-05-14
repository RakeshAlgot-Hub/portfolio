import { useEffect } from 'react';
import { Skills } from '../components/Skills';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function SkillsPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Skills />
    </main>
  );
}
