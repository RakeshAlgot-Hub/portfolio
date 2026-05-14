import { useState } from 'react';
import { Briefcase, ArrowUpRight } from 'lucide-react';

const ACHIEVEMENTS = [
  'Contributed to backend pipelines for data retrieval and processing in production systems',
  'Built REST APIs using FastAPI with structured logging, RBAC, and Docker deployment',
  'Reduced API latency by ~40% through Redis caching and query optimization',
  'Designed asynchronous worker pipelines for large-scale ingestion and background processing',
  'Improved retrieval performance and response quality by 20–30% via ranking optimization',
  'Reduced system costs by optimizing local processing and minimizing external API usage',
  'Integrated AI/LLM retrieval components into backend services',
];

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Experience</SectionLabel>

        <h2
          id="experience-heading"
          className="text-2xl sm:text-3xl font-bold mb-12 reveal"
          style={{ color: 'var(--text-primary)' }}
        >
          Where I've worked
        </h2>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 reveal">
          {/* Company info */}
          <div>
            <div
              className="sticky top-24 p-6 rounded-xl border"
              style={{
                backgroundColor: 'var(--bg-1)',
                borderColor: 'var(--border)',
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(79, 70, 229, 0.1)' }}
              >
                <CompanyLogo />
              </div>

              <div className="mb-3">
                <h3 className="text-base font-semibold">
                  <a
                    href="https://yensi.solutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Yensi Solutions
                    <ArrowUpRight size={13} style={{ color: 'var(--text-tertiary)' }} />
                  </a>
                </h3>
                <p
                  className="text-sm mt-0.5"
                  style={{ color: 'var(--accent-blue)' }}
                >
                  Backend Engineer
                </p>
              </div>

              <div
                className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono border"
                style={{
                  backgroundColor: 'var(--bg-2)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-tertiary)',
                }}
              >
                2024 – Present
              </div>

              <div className="mt-4 pt-4 border-t" style={{ borderTopColor: 'var(--border)' }}>
                <div
                  className="flex items-center gap-1.5 text-xs font-mono"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: 'var(--accent-green)' }}
                  />
                  Full-time · Current
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-3">
            {ACHIEVEMENTS.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl border transition-all duration-200 hover:border-blue-400 reveal"
                style={{
                  backgroundColor: 'var(--bg-1)',
                  borderColor: 'var(--border)',
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                <span
                  className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: 'var(--accent-teal)' }}
                />
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const COMPANY_LOGO_URL = 'https://yensi.solutions/YensiLogo.svg';

function CompanyLogo() {
  const [failed, setFailed] = useState(false);
  if (failed) return <Briefcase size={18} style={{ color: 'var(--accent-blue)' }} />;
  return (
    <img
      src={COMPANY_LOGO_URL}
      alt="Yensi Solutions"
      className="w-5 h-5"
      onError={() => setFailed(true)}
    />
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4 reveal">
      <span
        className="inline-flex items-center px-2.5 py-1 rounded text-xs font-mono font-medium border"
        style={{
          backgroundColor: 'rgba(79, 70, 229, 0.06)',
          borderColor: 'rgba(79, 70, 229, 0.2)',
          color: 'var(--accent-blue)',
        }}
      >
        {children}
      </span>
      <div
        className="h-px flex-1 max-w-16"
        style={{ backgroundColor: 'var(--border)' }}
      />
    </div>
  );
}


