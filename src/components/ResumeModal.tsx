import { useEffect, useCallback } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

const RESUME_URL = '/Rakesh_Algot_Backend_Engineer_AI.pdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume preview"
    >
      <div
        className="relative flex flex-col w-full max-w-4xl max-h-[90vh] rounded-xl border shadow-2xl overflow-hidden"
        style={{
          backgroundColor: 'var(--bg)',
          borderColor: 'var(--border)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-3 border-b shrink-0"
          style={{ borderBottomColor: 'var(--border)' }}
        >
          <h2
            className="text-sm font-semibold font-mono"
            style={{ color: 'var(--text-primary)' }}
          >
            Resume — Rakesh Algot
          </h2>
          <div className="flex items-center gap-2">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-all duration-150 hover:opacity-80"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--bg-1)',
              }}
            >
              <ExternalLink size={13} />
              Open
            </a>
            <a
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-150 hover:opacity-80"
              style={{
                backgroundColor: 'var(--accent-blue)',
                color: '#fff',
              }}
            >
              <Download size={13} />
              Download
            </a>
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-md flex items-center justify-center transition-colors duration-150 hover:opacity-70"
              style={{ color: 'var(--text-tertiary)' }}
              aria-label="Close resume preview"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* PDF viewer */}
        <div className="flex-1 min-h-0 bg-[#52525b]">
          <iframe
            src={`${RESUME_URL}#toolbar=0`}
            className="w-full h-full"
            style={{ minHeight: '70vh' }}
            title="Resume PDF"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
