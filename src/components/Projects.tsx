import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from './Experience';
import { PROJECTS, type Project, LABEL_COLORS } from '../data/projects';

export function Projects() {
  const featured = PROJECTS.find(p => p.featured)!;
  const rest = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Projects</SectionLabel>

        <h2
          id="projects-heading"
          className="text-2xl sm:text-3xl font-bold mb-3 reveal"
          style={{ color: 'var(--text-primary)' }}
        >
          Featured work
        </h2>
        <p
          className="text-sm mb-12 reveal reveal-delay-1"
          style={{ color: 'var(--text-tertiary)' }}
        >
          Production systems built for real users.
        </p>

        {/* Featured card */}
        <div className="mb-6 reveal">
          <ProjectCard project={featured} large />
        </div>

        {/* Grid of 3 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <div
              key={project.title}
              className={`reveal reveal-delay-${i + 1}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const colors = LABEL_COLORS[project.labelColor];

  return (
    <article
      className={`group relative rounded-xl border overflow-hidden transition-all duration-250 hover:border-opacity-60 ${
        large ? 'p-7 sm:p-8' : 'p-5 sm:p-6'
      }`}
      style={{
        backgroundColor: 'var(--bg-1)',
        borderColor: 'var(--border)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(79,70,229,0.35)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
            style={{
              backgroundColor: 'rgba(79, 70, 229, 0.1)',
              color: 'var(--accent-blue)',
            }}
          >
            {project.icon}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3
                className={`font-semibold ${large ? 'text-xl' : 'text-base'}`}
                style={{ color: 'var(--text-primary)' }}
              >
                {project.title}
              </h3>
              <span
                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono border"
                style={{
                  backgroundColor: colors.bg,
                  borderColor: colors.border,
                  color: colors.text,
                }}
              >
                {project.label}
              </span>
            </div>
            <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>
              {project.description}
            </p>
          </div>
        </div>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title}`}
            className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-150 opacity-0 group-hover:opacity-100"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text-tertiary)',
              backgroundColor: 'var(--bg-2)',
            }}
          >
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>

      {/* Detail text */}
      <p
        className={`leading-relaxed mb-5 ${large ? 'text-sm' : 'text-xs'}`}
        style={{ color: 'var(--text-tertiary)', lineHeight: '1.7' }}
      >
        {project.detail}
      </p>

      {/* Stack chips */}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map(s => (
          <span
            key={s}
            className="px-2 py-0.5 rounded text-xs font-mono border"
            style={{
              backgroundColor: 'var(--bg-2)',
              borderColor: 'var(--border)',
              color: 'var(--text-tertiary)',
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}
