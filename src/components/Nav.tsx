import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Education', href: '/education' },
  { label: 'Contact', href: '/contact' },
];

const SECTION_IDS: string[] = [];

interface NavProps {
  isDark: boolean;
  toggleTheme: () => void;
  onOpenResume: () => void;
}

export function Nav({ isDark, toggleTheme, onOpenResume }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const pathname = location.pathname;
  const sectionActive = useActiveSection(SECTION_IDS);
  const active = sectionActive || pathname.slice(1);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) menuToggleRef.current?.focus();
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface border-b border-surface'
            : 'bg-transparent'
        }`}
        style={{
          backgroundColor: scrolled ? 'var(--bg)' : 'transparent',
          borderBottomColor: scrolled ? 'var(--border)' : 'transparent',
        }}
      >
        <nav
          className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2"
            aria-label="Rakesh Algot — home"
          >
            <RaLogo />
            <span
              className="font-mono text-sm font-medium hidden sm:block"
              style={{ color: 'var(--text-secondary)' }}
            >
              rakesh algot
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => {
              const sectionId = link.href.startsWith('#') ? link.href.slice(1) : link.href.slice(1);
              const isActive = active === sectionId;
              const cls = `px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-150 ${
                isActive ? 'text-primary' : 'text-secondary hover:text-primary'
              }`;
              const style = {
                color: isActive ? 'var(--accent-blue)' : 'var(--text-secondary)',
                backgroundColor: isActive ? 'var(--bg-1)' : 'transparent',
                border: '1px solid',
                borderColor: isActive ? 'var(--border)' : 'transparent',
                boxShadow: isActive ? '0 1px 3px rgba(0,0,0,0.05)' : 'none',
              };
              return link.href.startsWith('/') ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cls}
                  style={style}
                  onClick={link.href === '/' ? () => window.scrollTo({ top: 0, behavior: 'smooth' }) : undefined}
                >
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} className={cls} style={style}>
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-md text-sm font-medium border transition-all duration-150 hover:opacity-80 cursor-pointer"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-secondary)',
                backgroundColor: 'transparent',
              }}
            >
              Resume
            </button>
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-8 h-8 rounded-md flex items-center justify-center transition-colors duration-150 hover:opacity-70"
              style={{ color: 'var(--text-secondary)' }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              ref={menuToggleRef}
              className="md:hidden w-8 h-8 rounded-md flex items-center justify-center transition-colors"
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              style={{ color: 'var(--text-secondary)' }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-200 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'var(--bg)' }}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col pt-20 px-6 gap-1">
          {NAV_LINKS.map(link => {
            const sectionId = link.href.startsWith('#') ? link.href.slice(1) : link.href.slice(1);
            const isActive = active === sectionId;
            const mobileCls = 'py-3 px-3 rounded-lg text-base font-medium transition-all duration-150';
            const mobileStyle = {
              color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
              backgroundColor: isActive ? 'var(--bg-1)' as const : 'transparent',
              border: '1px solid',
              borderColor: isActive ? 'var(--border)' as const : 'transparent',
            };
            if (link.href.startsWith('/')) {
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={link.href === '/' ? () => { handleNavClick(); window.scrollTo({ top: 0, behavior: 'smooth' }); } : handleNavClick}
                  className={mobileCls}
                  style={mobileStyle}
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="py-3 px-3 rounded-lg text-base font-medium transition-colors border-b"
                style={{
                  color: 'var(--text-primary)',
                  borderBottomColor: 'var(--border-subtle)',
                }}
              >
                {link.label}
              </a>
            );
          })}<button
            onClick={() => { handleNavClick(); onOpenResume(); }}
            className="mt-4 py-3 px-3 rounded-lg text-base font-medium text-center cursor-pointer"
            style={{ color: 'var(--accent-blue)', backgroundColor: 'transparent' }}
          >
            Resume
          </button>
        </div>
      </div>
    </>
  );
}

function RaLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
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
