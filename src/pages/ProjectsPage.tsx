import { useEffect } from 'react';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from '../components/Projects';
import { SectionLabel } from '../components/Experience';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function ProjectsPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Projects</SectionLabel>
        <h1
          className="text-3xl sm:text-4xl font-bold mb-3 reveal"
          style={{ color: 'var(--text-primary)' }}
        >
          All projects
        </h1>
        <p
          className="text-sm mb-12 reveal reveal-delay-1"
          style={{ color: 'var(--text-tertiary)' }}
        >
          Production systems built for real users.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
