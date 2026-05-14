import { useState } from 'react';
import { Globe } from 'lucide-react';

function FaviconIcon({ url }: { url: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <Globe size={20} />;
  return (
    <img
      src={url}
      alt=""
      className="w-5 h-5"
      onError={() => setFailed(true)}
    />
  );
}

export interface Project {
  title: string;
  description: string;
  detail: string;
  stack: string[];
  label: string;
  labelColor: string;
  url?: string;
  icon: React.ReactNode;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: 'MedBridge',
    description: 'AI-powered medical record intelligence platform',
    detail:
      'Clinical document digitization, structured extraction from unstructured health records, and intelligent patient querying using LLM pipelines and OCR.',
    stack: ['FastAPI', 'MongoDB', 'Docker', 'AsyncIO', 'OCR', 'LLM Pipelines'],
    label: 'Live Product',
    labelColor: 'green',
    url: 'https://medbridge.yensi.solutions',
    icon: <FaviconIcon url="https://medbridge.yensi.solutions/favicon.ico" />,
    featured: true,
  },
  {
    title: 'Citex',
    description: 'Citation-grade context retrieval system',
    detail:
      'Hybrid search with dense and sparse retrieval, cross-encoder reranking, optimized ingestion pipelines with chunking strategies for improved result relevance.',
    stack: ['FastAPI', 'Qdrant', 'Docker', 'Sentence Transformers', 'LangChain'],
    label: 'Live Product',
    labelColor: 'green',
    url: 'https://sitebot.yensi.solutions/',
    icon: <FaviconIcon url="https://sitebot.yensi.solutions/favicon.svg" />,
  },
  {
    title: 'AfterCareDesk',
    description: 'Multi-tenant club operations platform',
    detail:
      'Bookings, attendance, payments, and async workflows with Redis-backed job queues and optimized multi-tenancy across high-throughput workflows.',
    stack: ['FastAPI', 'MongoDB', 'Redis', 'Docker', 'Stripe'],
    label: 'Live Product',
    labelColor: 'green',
    url: 'https://aftercaredesk.com',
    icon: <FaviconIcon url="https://aftercaredesk.com/favicon.ico" />,
  },
  {
    title: 'AH Ledger',
    description: 'AI-powered S106 compliance system',
    detail:
      'Obligations tracking, document extraction, and conflict detection using end-to-end LLM workflows for planning and compliance automation.',
    stack: ['FastAPI', 'MongoDB', 'Docker', 'LLM APIs', 'AsyncIO'],
    label: 'Live Product',
    labelColor: 'green',
    url: 'https://aigizmo.io/',
    icon: <FaviconIcon url="https://aigizmo.io/favicon.ico" />,
  },
  {
    title: 'AI Pujari',
    description: 'AI-Enabled Digital Platform',
    detail:
      'Architected backend APIs with JWT-based authentication and RBAC. Designed n8n workflows orchestrating AI-generated audio/video pipelines. Dockerized services with environment-based configuration for scalable deployment.',
    stack: ['FastAPI', 'MongoDB', 'Keycloak', 'Docker'],
    label: 'Live Product',
    labelColor: 'green',
    url: 'https://pujari.aiyensi.com/',
    icon: <FaviconIcon url="https://pujari.aiyensi.com/images/ai-pujari-logo.ico" />,
  },
  {
    title: 'Golf Addicts',
    description: 'Tournament & League Platform',
    detail:
      'Implemented JWT-based authentication and RBAC. Optimized leaderboard and tournament APIs for performance. Built secure bulk CSV import APIs with validation and error handling.',
    stack: ['FastAPI', 'MongoDB', 'Keycloak'],
    label: 'Live Product',
    labelColor: 'green',
    url: 'https://addicts.aiyensi.com/',
    icon: <FaviconIcon url="https://addicts.aiyensi.com/favicon.ico" />,
  },
];

export const LABEL_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  green: {
    bg: 'rgba(34, 197, 94, 0.08)',
    border: 'rgba(34, 197, 94, 0.2)',
    text: 'var(--accent-green)',
  },
  blue: {
    bg: 'rgba(79, 70, 229, 0.08)',
    border: 'rgba(79, 70, 229, 0.2)',
    text: 'var(--accent-blue)',
  },
};
