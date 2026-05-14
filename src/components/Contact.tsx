import { Mail, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { SectionLabel } from './Experience';

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Contact</SectionLabel>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: headline + links */}
          <div>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-bold mb-4 reveal"
              style={{ color: 'var(--text-primary)', lineHeight: '1.15' }}
            >
              Let's build
              <br />
              <span style={{ color: 'var(--accent-blue)' }}>something great.</span>
            </h2>

            <p
              className="text-sm leading-relaxed mb-10 max-w-md reveal reveal-delay-1"
              style={{ color: 'var(--text-secondary)', lineHeight: '1.75' }}
            >
              Open to backend engineering and AI systems roles, freelance work, and impactful
              product opportunities. If you're building something serious, let's talk.
            </p>

            <div className="space-y-3 reveal reveal-delay-2">
              <ContactLink
                href="mailto:rakeshalgot.career@gmail.com"
                icon={<Mail size={15} />}
                label="rakeshalgot.career@gmail.com"
                primary
              />
              <ContactLink
                href="https://linkedin.com/in/algot-rakesh"
                icon={<Linkedin size={15} />}
                label="linkedin.com/in/algot-rakesh"
                external
              />
              <ContactLink
                href="https://github.com/RakeshAlgot-Hub"
                icon={<Github size={15} />}
                label="github.com/RakeshAlgot-Hub"
                external
              />
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm"
                style={{ color: 'var(--text-tertiary)' }}
              >
                <MapPin size={15} />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          {/* Right: card */}
          <div className="reveal reveal-delay-2">
            <div
              className="p-8 rounded-xl border"
              style={{
                backgroundColor: 'var(--bg-1)',
                borderColor: 'var(--border)',
              }}
            >
              <div
                className="flex items-center gap-2 mb-6 text-xs font-mono"
                style={{ color: 'var(--text-tertiary)' }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: 'var(--accent-green)' }}
                />
                Available for new projects
              </div>

              <h3
                className="text-base font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Ready to collaborate?
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: 'var(--text-secondary)' }}
              >
                Reach out directly via email. Response time is typically within 24 hours.
              </p>

              <a
                href="mailto:rakeshalgot.career@gmail.com"
                className="inline-flex items-center gap-2 w-full justify-center py-3 px-5 rounded-lg text-sm font-medium transition-all duration-150 hover:opacity-90 active:scale-95"
                style={{
                  backgroundColor: 'var(--accent-blue)',
                  color: '#fff',
                }}
              >
                <Mail size={15} />
                Send an email
              </a>

              <div
                className="mt-6 pt-5 border-t space-y-2"
                style={{ borderTopColor: 'var(--border)' }}
              >
                {[
                  'Backend Engineering roles',
                  'AI Systems & LLM Infrastructure',
                  'Freelance & contract work',
                  'Technical collaboration',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: 'var(--accent-teal)' }}
                    />
                    <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  icon,
  label,
  primary = false,
  external = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  primary?: boolean;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-3 px-4 py-3 rounded-lg border text-sm transition-all duration-150"
      style={{
        backgroundColor: primary ? 'rgba(79, 70, 229, 0.06)' : 'var(--bg-1)',
        borderColor: primary ? 'rgba(96, 165, 250, 0.2)' : 'var(--border)',
        color: primary ? 'var(--accent-blue)' : 'var(--text-secondary)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(79,70,229,0.4)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = primary ? 'rgba(79, 70, 229, 0.2)' : 'var(--border)';
      }}
    >
      {icon}
      <span className="flex-1">{label}</span>
      {external && (
        <ArrowUpRight
          size={13}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: 'var(--text-tertiary)' }}
        />
      )}
    </a>
  );
}
