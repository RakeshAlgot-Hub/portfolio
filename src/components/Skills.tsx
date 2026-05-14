import { SectionLabel } from './Experience';

interface SkillGroup {
  category: string;
  label: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Backend & API',
    label: 'backend',
    skills: ['Python', 'FastAPI', 'REST APIs', 'API Design', 'Async Processing', 'RBAC', 'Structured Logging'],
  },
  {
    category: 'Databases & Cache',
    label: 'databases',
    skills: ['MongoDB', 'Redis', 'Query Optimization', 'Indexing', 'Caching Strategies', 'Data Modeling'],
  },
  {
    category: 'AI & Retrieval',
    label: 'ai',
    skills: ['RAG Pipelines', 'Hybrid Retrieval', 'Reranking', 'Chunking Strategies', 'Vector Search', 'Embeddings'],
  },
  {
    category: 'LLM Systems',
    label: 'llm',
    skills: ['Prompt Engineering', 'Structured Outputs', 'Evaluation', 'Validation Pipelines', 'LLM APIs', 'OCR Integration'],
  },
  {
    category: 'Infrastructure',
    label: 'infra',
    skills: ['Docker', 'Linux', 'Distributed Systems', 'High-Throughput Systems', 'Background Workers', 'Job Queues'],
  },
  {
    category: 'Data Systems',
    label: 'data',
    skills: ['Qdrant', 'FAISS', 'LangChain', 'Sentence Transformers', 'Pipeline Orchestration'],
  },
];

const CATEGORY_ACCENTS: Record<string, string> = {
  backend: 'var(--accent-blue)',
  databases: 'var(--accent-teal)',
  ai: 'var(--accent-rose)',
  llm: 'var(--accent-amber)',
  infra: 'var(--accent-green)',
  data: 'var(--accent-cyan)',
};

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Skills</SectionLabel>

        <h2
          id="skills-heading"
          className="text-2xl sm:text-3xl font-bold mb-3 reveal"
          style={{ color: 'var(--text-primary)' }}
        >
          Tech stack
        </h2>
        <p
          className="text-sm mb-12 reveal reveal-delay-1"
          style={{ color: 'var(--text-tertiary)' }}
        >
          Tools and technologies I use to build production systems.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, gi) => (
            <div
              key={group.label}
              className={`p-5 rounded-xl border reveal reveal-delay-${(gi % 4) + 1}`}
              style={{
                backgroundColor: 'var(--bg-1)',
                borderColor: 'var(--border)',
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-2.5 h-2.5 rounded-sm"
                  style={{ backgroundColor: CATEGORY_ACCENTS[group.label] }}
                />
                <h3
                  className="text-xs font-mono font-medium uppercase tracking-widest"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <Chip key={skill} accent={CATEGORY_ACCENTS[group.label]}>
                    {skill}
                  </Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Chip({ children, accent }: { children: string; accent: string }) {
  return (
    <span
      className="px-2.5 py-1 rounded-md text-xs font-mono border transition-all duration-150 cursor-default"
      style={{
        backgroundColor: 'var(--bg-2)',
        borderColor: 'var(--border)',
        color: 'var(--text-secondary)',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.backgroundColor = `${accent}12`;
        el.style.borderColor = `${accent}40`;
        el.style.color = accent;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.backgroundColor = 'var(--bg-2)';
        el.style.borderColor = 'var(--border)';
        el.style.color = 'var(--text-secondary)';
      }}
    >
      {children}
    </span>
  );
}
