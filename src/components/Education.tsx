import { GraduationCap, ArrowUpRight } from 'lucide-react';
import { SectionLabel } from './Experience';

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Education</SectionLabel>

        <h2
          id="education-heading"
          className="text-2xl sm:text-3xl font-bold mb-12 reveal"
          style={{ color: 'var(--text-primary)' }}
        >
          Academic background
        </h2>

        <div className="max-w-xl reveal">
          <div
            className="p-7 rounded-xl border"
            style={{
              backgroundColor: 'var(--bg-1)',
              borderColor: 'var(--border)',
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: 'var(--teal-bg)',
                  color: 'var(--accent-teal)',
                }}
              >
                <GraduationCap size={20} />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3
                      className="text-base font-semibold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Master of Computer Applications
                    </h3>
                    <p
                      className="text-sm mt-0.5"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <a
                        href="https://www.nizamcollege.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        Nizam College
                        <ArrowUpRight size={12} style={{ color: 'var(--text-tertiary)' }} />
                      </a>
                    </p>
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded text-xs font-mono border shrink-0"
                    style={{
                      backgroundColor: 'var(--bg-2)',
                      borderColor: 'var(--border)',
                      color: 'var(--text-tertiary)',
                    }}
                  >
                    Class of 2022
                  </span>
                </div>

                <div
                  className="flex items-center gap-2 mt-5 pt-4 border-t"
                  style={{ borderTopColor: 'var(--border)' }}
                >
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded border"
                    style={{
                      backgroundColor: 'var(--teal-bg-subtle)',
                      borderColor: 'var(--teal-border)',
                      color: 'var(--accent-teal)',
                    }}
                  >
                    MCA
                  </span>
                  <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                    Hyderabad, Telangana, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
