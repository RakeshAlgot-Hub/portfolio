import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { SkillsPage } from './pages/SkillsPage';
import { EducationPage } from './pages/EducationPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const { isDark, toggle } = useTheme();
  const [resumeOpen, setResumeOpen] = useState(false);
  const openResume = useCallback(() => setResumeOpen(true), []);
  const closeResume = useCallback(() => setResumeOpen(false), []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <Nav isDark={isDark} toggleTheme={toggle} onOpenResume={openResume} />
      <Routes>
        <Route path="/" element={<HomePage onOpenResume={openResume} />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <ResumeModal isOpen={resumeOpen} onClose={closeResume} />
    </div>
  );
}

function HomePage({ onOpenResume }: { onOpenResume: () => void }) {
  useScrollReveal();
  return (
    <main id="main-content">
      <Hero onOpenResume={onOpenResume} />
    </main>
  );
}

export default App;
