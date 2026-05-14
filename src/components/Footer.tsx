import { Github, Linkedin, Mail } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/algot-rakesh', external: true },
  { label: 'GitHub', href: 'https://github.com/RakeshAlgot-Hub', external: true },
  { label: 'MedBridge', href: 'https://medbridge.yensi.solutions', external: true },
  { label: 'AfterCareDesk', href: 'https://aftercaredesk.com', external: true },
  { label: 'AH Ledger', href: 'https://aigizmo.io/', external: true },
  { label: 'Email', href: 'mailto:rakeshalgot.career@gmail.com', external: false },
];

export function Footer() {
  return (
    <footer
      className="border-t py-12"
      style={{ borderTopColor: 'var(--border)' }}
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <RaLogo />
              <span
                className="font-mono text-sm font-medium"
                style={{ color: 'var(--text-primary)' }}
              >
                Rakesh Algot
              </span>
            </div>
            <p className="text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>
              Backend Engineer · AI Systems · LLM Infrastructure
            </p>
            <p className="text-xs mt-1.5 font-mono" style={{ color: 'var(--text-tertiary)' }}>
              Resume updated May 2026
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {[
              { href: 'mailto:rakeshalgot.career@gmail.com', icon: <Mail size={15} />, label: 'Email Rakesh' },
              { href: 'https://linkedin.com/in/algot-rakesh', icon: <Linkedin size={15} />, label: 'LinkedIn profile' },
              { href: 'https://github.com/RakeshAlgot-Hub', icon: <Github size={15} />, label: 'GitHub profile' },
            ].map(({ href, icon, label }) => (
              <a
                key={href}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-150 hover:opacity-70"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text-tertiary)',
                  backgroundColor: 'var(--bg-1)',
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div
          className="mt-8 pt-6 flex flex-wrap gap-x-6 gap-y-2 border-t"
          style={{ borderTopColor: 'var(--border)' }}
        >
          {QUICK_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="text-xs transition-colors duration-150 hover:opacity-60"
              style={{ color: 'var(--text-tertiary)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="mt-6 text-xs font-mono"
          style={{ color: 'var(--text-tertiary)' }}
        >
          © {new Date().getFullYear()} Rakesh Algot. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function RaLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="var(--accent-blue)" fillOpacity="0.12" />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="13"
        fontWeight="700"
        fill="var(--accent-blue)"
        letterSpacing="-0.5"
      >
        RA
      </text>
    </svg>
  );
}
