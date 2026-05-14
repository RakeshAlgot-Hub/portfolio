import { useEffect } from 'react';
import { Contact } from '../components/Contact';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function ContactPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Contact />
    </main>
  );
}
