import { useEffect } from 'react';
import { Education } from '../components/Education';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function EducationPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Education />
    </main>
  );
}
