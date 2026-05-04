import { useState, useEffect, useCallback } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const projects = [
  {
    id: 'cincinnati-hotel',
    title: 'Cincinnati Hotel AI Chatbot',
    subtitle: 'Production-ready hotel concierge system powered by RAG + OpenAI',
    description:
      'A full-stack hotel information system where guests chat with an AI concierge that answers questions strictly based on an uploaded PDF knowledge base. Admins manage the knowledge base and monitor real-time usage analytics. When the AI cannot answer, it triggers an automated email workflow to hotel staff.',
    features: [
      'RAG-powered AI chatbot using OpenAI GPT-4.1 Mini + Supabase pgvector for accurate, document-grounded answers',
      'PDF knowledge base management — admin uploads a PDF, n8n auto-processes it into vector embeddings',
      'Real-time admin dashboard with session counts, topic analytics bar chart, and email request tracking',
      'Automated email inquiry workflow via n8n that summarizes the conversation and emails hotel staff',
      'Dual-role system: Regular User (chat) and Admin (dashboard + PDF upload)',
    ],
    stack: ['React 18', 'Node.js', 'Express', 'n8n Cloud', 'OpenAI GPT-4.1', 'Supabase', 'pgvector', 'Railway', 'Vite', 'Axios'],
    liveUrl: 'https://entrance-task-cincinnati-hotel-production.up.railway.app/',
    githubUrl: 'https://github.com/4ronJohn/Entrance-task-Cincinnati-Hotel',
    screenshots: [
      { label: 'Landing Page', file: '/projects/cincinnati-hotel/landing.png' },
      { label: 'AI Chat', file: '/projects/cincinnati-hotel/chat.png' },
      { label: 'Contact Form', file: '/projects/cincinnati-hotel/contact-form.png' },
      { label: 'Admin Dashboard', file: '/projects/cincinnati-hotel/admin.png' },
      { label: 'n8n Workflows', file: '/projects/cincinnati-hotel/n8n-chat.png' },
    ],
  },
]

// Lightbox modal — renders over the full page
function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-800/90 border border-slate-600/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-200 z-10"
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Label */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-600/60 text-slate-300 text-sm font-medium">
        {alt}
      </div>

      {/* Image — stop propagation so clicking the image doesn't close */}
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full rounded-xl shadow-2xl object-contain border border-slate-700/50"
        style={{ maxHeight: 'calc(100vh - 6rem)' }}
      />

      {/* Hint */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 text-xs">
        Click outside or press Esc to close
      </p>
    </div>
  )
}

function ProjectCard({ project }) {
  const [activeShot, setActiveShot] = useState(0)
  const [lightbox, setLightbox] = useState(null) // { src, alt } or null
  const ref = useScrollAnimation()

  const openLightbox = useCallback((src, alt) => {
    setLightbox({ src, alt })
  }, [])

  const closeLightbox = useCallback(() => setLightbox(null), [])

  const currentShot = project.screenshots[activeShot]

  return (
    <>
      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />
      )}

      <div ref={ref} className="animate-on-scroll">
        {/* Header badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            ✦ Featured Project
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Live
          </span>
        </div>

        <div className="glass-card overflow-hidden hover:border-slate-600/70 transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-0">

            {/* Screenshot Panel */}
            <div className="relative bg-slate-900/60 border-b lg:border-b-0 lg:border-r border-slate-700/50">
              {/* Tab bar */}
              <div className="flex items-center gap-1 px-3 pt-3 pb-0 overflow-x-auto scrollbar-none">
                {project.screenshots.map((shot, i) => (
                  <button
                    key={shot.label}
                    onClick={() => setActiveShot(i)}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-t-lg text-xs font-medium transition-all duration-200 ${
                      activeShot === i
                        ? 'bg-slate-700/80 text-cyan-300 border border-b-0 border-slate-600/60'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {shot.label}
                  </button>
                ))}
              </div>

              {/* Screenshot with hover + click to enlarge */}
              <div
                className="group relative mx-3 mb-3 rounded-xl overflow-hidden bg-slate-800/60 border border-slate-700/40 cursor-zoom-in"
                style={{ aspectRatio: '16/10' }}
                onClick={() => openLightbox(currentShot.file, `${project.title} — ${currentShot.label}`)}
              >
                <img
                  src={currentShot.file}
                  alt={`${project.title} — ${currentShot.label}`}
                  className="w-full h-full object-cover object-top transition-all duration-300 group-hover:scale-[1.02] group-hover:brightness-75"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextSibling.style.display = 'flex'
                  }}
                />

                {/* Fallback placeholder */}
                <div
                  className="absolute inset-0 items-center justify-center flex-col gap-3 bg-slate-800/80"
                  style={{ display: 'none' }}
                >
                  <div className="text-4xl">🖼️</div>
                  <p className="text-slate-500 text-sm text-center px-4">
                    Save screenshot as<br />
                    <code className="text-cyan-400 text-xs">public{currentShot.file}</code>
                  </p>
                </div>

                {/* Hover overlay — zoom icon in center */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                    <span className="text-white text-xs font-medium bg-black/50 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                      Click to enlarge
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Panel */}
            <div className="p-6 lg:p-8 flex flex-col">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-100 mb-1 leading-tight">
                  {project.title}
                </h3>
                <p className="text-cyan-400 text-sm font-medium mb-4">{project.subtitle}</p>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span className="leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tag text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-700/50">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2.5 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm py-2.5 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Projects() {
  const headerRef = useScrollAnimation()

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="animate-on-scroll mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">03 / Projects</span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">Things I've built and shipped</p>
        </div>

        <div className="space-y-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
