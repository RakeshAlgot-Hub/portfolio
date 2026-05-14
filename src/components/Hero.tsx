import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, CheckCircle2 } from 'lucide-react';

const TERMINAL_LINES = [
  { prefix: '[init]', text: ' loading backend services...', delay: 300, color: 'var(--text-tertiary)' },
  { prefix: '[init]', text: ' starting AI modules...', delay: 800, color: 'var(--text-tertiary)' },
  { prefix: '[init]', text: ' connecting vector store...', delay: 1300, color: 'var(--text-tertiary)' },
  { prefix: '[init]', text: ' warming up RAG pipeline...', delay: 1800, color: 'var(--text-tertiary)' },
  { prefix: '✓', text: ' all systems ready', delay: 2400, color: 'var(--accent-green)', bold: true },
  { prefix: '', text: '', delay: 2800, isStack: true },
];

const STACK = ['Python', 'FastAPI', 'Redis', 'MongoDB', 'Qdrant', 'Docker', 'RAG', 'LangChain'];

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    TERMINAL_LINES.forEach((line, i) => {
      const t = setTimeout(() => {
        setVisibleLines(prev => [...prev, i]);
      }, line.delay);
      return () => clearTimeout(t);
    });
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-14"
      aria-label="Introduction"
    >
      <div className="max-w-6xl mx-auto px-6 w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium mb-8 border reveal"
              style={{
                backgroundColor: 'var(--green-bg-subtle)',
                borderColor: 'var(--green-border)',
                color: 'var(--accent-green)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" style={{ backgroundColor: 'var(--accent-green)' }} />
              Available for opportunities
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 reveal reveal-delay-1"
              style={{ color: 'var(--text-primary)', lineHeight: '1.1' }}
            >
              Rakesh
              <br />
              <span style={{ color: 'var(--accent-blue)' }}>Algot</span>
            </h1>

            <p
              className="text-base font-mono mb-6 reveal reveal-delay-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              Backend Engineer ·{' '}
              <span style={{ color: 'var(--accent-teal)' }}>AI Systems</span>
              {' '}· LLM Infrastructure
            </p>

            <p
              className="text-base leading-relaxed max-w-lg mb-8 reveal reveal-delay-3"
              style={{ color: 'var(--text-secondary)', lineHeight: '1.75' }}
            >
              Building scalable APIs, async backend systems, and production-grade AI pipelines.
              Focused on RAG, retrieval optimization, and high-performance infrastructure.
            </p>

            <div className="flex items-center gap-2 mb-10 reveal reveal-delay-3" style={{ color: 'var(--text-tertiary)' }}>
              <MapPin size={13} />
              <span className="text-sm font-mono">Hyderabad, Telangana, India</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 reveal reveal-delay-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  backgroundColor: 'var(--accent-blue)',
                  color: 'var(--text-on-accent)',
                }}
              >
                View Projects
                <ArrowRight size={15} />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:opacity-80 active:scale-95"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text-secondary)',
                  backgroundColor: 'var(--bg-1)',
                }}
              >
                <Mail size={14} />
                Get in Touch
              </a>
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:opacity-80 active:scale-95 cursor-pointer"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text-tertiary)',
                  backgroundColor: 'transparent',
                }}
              >
                Resume
              </button>
            </div>
          </div>

          {/* Terminal card */}
          <div className="reveal reveal-delay-2">
            <TerminalCard visibleLines={visibleLines} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TerminalCard({ visibleLines }: { visibleLines: number[] }) {
  return (
    <div
      className="rounded-xl border overflow-hidden font-mono text-sm"
      style={{
        backgroundColor: 'var(--bg-2)',
        borderColor: 'var(--border)',
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{
          backgroundColor: 'var(--bg-3)',
          borderBottomColor: 'var(--border)',
        }}
      >
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f57' }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#febc2e' }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28c840' }} />
        <span
          className="ml-3 text-xs"
          style={{ color: 'var(--text-tertiary)' }}
        >
          rakesh@backend:~$
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 space-y-1.5 min-h-52">
        {TERMINAL_LINES.map((line, i) => {
          const visible = visibleLines.includes(i);
          if (line.isStack) {
            return visible ? (
              <div key={i} className="pt-3 space-y-2">
                <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                  stack:
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {STACK.map(s => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-xs border"
                      style={{
                        backgroundColor: 'var(--blue-bg-subtle)',
                        borderColor: 'var(--blue-border)',
                        color: 'var(--accent-blue)',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ) : null;
          }
          return (
            <div
              key={i}
              className={`flex items-start gap-1.5 transition-all duration-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
              }`}
            >
              <span
                className="shrink-0 text-xs"
                style={{
                  color: line.color,
                  fontWeight: line.bold ? 600 : 400,
                }}
              >
                {line.prefix === '✓' ? (
                  <CheckCircle2 size={14} style={{ color: 'var(--accent-green)', marginTop: 1 }} />
                ) : (
                  line.prefix
                )}
              </span>
              <span
                className="text-xs leading-relaxed"
                style={{
                  color: line.bold ? 'var(--accent-green)' : 'var(--text-secondary)',
                  fontWeight: line.bold ? 600 : 400,
                }}
              >
                {line.text}
              </span>
            </div>
          );
        })}
        {visibleLines.length >= TERMINAL_LINES.length && (
          <div className="flex items-center gap-1 pt-1">
            <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>rakesh@backend:~$</span>
            <span className="cursor-blink" />
          </div>
        )}
      </div>

      {/* Status footer */}
      <div
        className="flex items-center justify-between px-5 py-2.5 border-t"
        style={{
          backgroundColor: 'var(--bg-3)',
          borderTopColor: 'var(--border)',
        }}
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent-green)' }} />
          <span className="text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>
            production
          </span>
        </div>
        <span className="text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>
          uptime: 100%
        </span>
      </div>
    </div>
  );
}
