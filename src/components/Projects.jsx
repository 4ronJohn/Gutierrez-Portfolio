import { useState, useEffect, useCallback } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const projects = [
  {
    id: 'nova-os-v2',
    title: 'Nova OS v2',
    subtitle: 'Dental clinic management platform for patient records, scheduling, and sales pipelines',
    description:
      'Version 2 of Nova OS. V1 was built on the No Loco platform, and I created V2 to solve the slow performance of No Loco. The system allows Nova Clinic to manage patient profiles, calendars, and sales pipelines, and it is used by the clinic to access dental patient information efficiently.',
    features: [
      'Patient profile management for all patients',
      'Calendar and appointment scheduling',
      'Sales pipeline tracking',
      'Centralized access to dental patient information',
      'Improved performance and usability compared with the previous No Loco-based version',
      'Modular "side apps" system — admins can add or delete apps (like Consultations, Sales Pipeline, Resources, Dashboard) from the sidebar',
      'Each side app is fully customizable, built from configurable tabs, tables, iframes, and text blocks',
      'Sortable, filterable data tables (locations, appointment status, outcomes, stages) for managing large record sets',
      'Multi-tab navigation within each app (e.g., "Consults Today," "All Consults," "Calendar")',
    ],
    stack: ['React', 'Vite', 'CSS Tailwind', 'Supabase', 'Airtable', 'Lovable'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: [
      { label: 'All Consults', file: '/projects/nova-os-v2/nova-allconsults.jpg' },
      { label: 'Consultation Outcome', file: '/projects/nova-os-v2/nova-consultationoutcome.jpg' },
      { label: 'Consults Today', file: '/projects/nova-os-v2/nova-consults today.jpg' },
      { label: 'Patient Profile', file: '/projects/nova-os-v2/nova-patientprofile.jpg' },
      { label: 'Sales Pipeline', file: '/projects/nova-os-v2/nova-salespipeline.jpg' },
    ],
  },
  {
    id: 'cincinnati-hotel',
    title: 'Cincinnati Hotel AI Chatbot',
    subtitle: 'Production-ready hotel concierge system powered by RAG + OpenAI',
    description:
      'A full-stack hotel information system where guests chat with an AI concierge that answers questions strictly based on an uploaded PDF knowledge base. Admins manage the knowledge base and monitor real-time usage analytics. When the AI cannot answer, it triggers an automated email workflow to hotel staff.',
    features: [
      'RAG-powered AI chatbot using Google Gemini + Supabase pgvector for accurate, document-grounded answers',
      'PDF knowledge base management — admin uploads a PDF, n8n auto-processes it into vector embeddings',
      'Real-time admin dashboard with session counts, topic analytics bar chart, and email request tracking',
      'Automated email inquiry workflow via n8n that summarizes the conversation and emails hotel staff',
      'Dual-role system: Regular User (chat) and Admin (dashboard + PDF upload)',
    ],
    stack: ['React', 'Node.js', 'n8n Cloud', 'Gemini AI', 'Supabase', 'Vercel', 'Vite'],
    liveUrl: 'https://entrance-task-cincinnati-hotel.vercel.app/',
    githubUrl: 'https://github.com/4ronJohn/Entrance-task-Cincinnati-Hotel',
    screenshots: [
      { label: 'Landing Page', file: '/projects/cincinnati-hotel/landing.png' },
      { label: 'AI Chat', file: '/projects/cincinnati-hotel/chat.png' },
      { label: 'Contact Form', file: '/projects/cincinnati-hotel/contact-form.png' },
      { label: 'Admin Dashboard', file: '/projects/cincinnati-hotel/admin.png' },
      { label: 'Chat Workflow', file: '/projects/cincinnati-hotel/n8n-chat.png' },
      { label: 'PDF Workflow', file: '/projects/cincinnati-hotel/n8n-pdf.png' },
      { label: 'Email Workflow', file: '/projects/cincinnati-hotel/n8n-email.png' },
    ],
  },
  {
    id: 'reciepts-tracker',
    title: 'Email Label Tracker & Attachment Organizer',
    subtitle: 'Automate email tracking and organize attachments with Gmail, Google Sheets, and Google Drive.',
    description:
      'An n8n workflow that automatically tracks emails under selected Gmail labels, logs email details in Google Sheets, and organizes attachments in Google Drive by label, date, and sender.',
    features: [
      'Checks selected Gmail labels every 10 minutes and records sender details, subject, message, and received date.',
      'Automatically adds or updates email records using the email ID to prevent duplicate rows.',
      'Creates folders by email label and date, with subfolders for each sender.',
      'Checks existing files before uploading attachments to avoid duplicate uploads.f',
      'Downloads email attachments and uploads them to the appropriate Google Drive folders.',
    ],
    stack: ['n8n', 'Gmail API', 'Google Sheets', 'Google Drive', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: [
      { label: 'Whole Workflow', file: '/projects/reciepts-tracker/0.png' },
      { label: 'Workflow Overview', file: '/projects/reciepts-tracker/1.png' },
      { label: 'Gmail Trigger', file: '/projects/reciepts-tracker/2.png' },
      { label: 'Google Sheets Node', file: '/projects/reciepts-tracker/3.png' },
      { label: 'Google Drive Node', file: '/projects/reciepts-tracker/4.png' },
    ],
  },
  {
    id: 'maullaunch',
    title: 'MailLaunch – Email Campaign CLI',
    subtitle: 'A Python-based CLI tool for personalized email campaigns with automated sending and campaign tracking.',
    description:
      'MailLaunch is a command-line email automation tool that sends personalized emails using CSV recipient data and customizable templates. It integrates with Gmail API and Microsoft Graph, with campaign tracking and persistence to help manage email delivery and resume interrupted campaigns.',
    features: [
      'Personalized emails using CSV data and template variables such as {{first_name}} and {{company}}.',
      'Gmail API and Microsoft Graph integration for sending emails.',
      'Configurable sending delays and daily sending limits.',
      'Campaign status tracking for sent, pending, and failed emails.',
      'SQLite persistence, logging, and campaign-specific resume functionality.',
    ],
    stack: ['Python', 'Gmail API', 'Microsoft Graph API', 'MSAL', 'SQLite', 'OAuth 2.0', 'pytest'],
    liveUrl: '#',
    githubUrl: 'https://github.com/4ronJohn/maillaunch',
    screenshots: [
      { label: 'MailLaunch Commands', file: '/projects/maillaunch/00.png' },
      { label: 'MailLaunch Send', file: '/projects/maillaunch/11.jpg' },
      { label: 'MailLaunch Logs', file: '/projects/maillaunch/22.jpg' },
      { label: 'MailLaunch Status', file: '/projects/maillaunch/33.png' },
    ],
  },
]

function GalleryArrow({ direction, onClick, fullscreen = false }) {
  const isPrevious = direction === 'previous'

  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation()
        onClick()
      }}
      aria-label={isPrevious ? 'Previous image' : 'Next image'}
      className={`absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full transition-colors ${
        fullscreen
          ? 'w-11 h-11 bg-slate-800/90 border border-slate-600/60 text-slate-300 hover:text-white hover:bg-slate-700'
          : 'w-9 h-9 bg-black/60 text-white hover:bg-black/80'
      } ${isPrevious ? 'left-3' : 'right-3'}`}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={isPrevious ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
        />
      </svg>
    </button>
  )
}

// Lightbox modal — renders over the full page
function Lightbox({ shots, activeShot, projectTitle, onPrevious, onNext, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrevious()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onNext, onPrevious])

  const currentShot = shots[activeShot]
  const alt = `${projectTitle} — ${currentShot.label}`

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
        src={currentShot.file}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full rounded-xl shadow-2xl object-contain border border-slate-700/50"
        style={{ maxHeight: 'calc(100vh - 6rem)' }}
      />

      {shots.length > 1 && (
        <>
          <GalleryArrow direction="previous" onClick={onPrevious} fullscreen />
          <GalleryArrow direction="next" onClick={onNext} fullscreen />
        </>
      )}

      {/* Hint */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 text-xs">
        Use arrow keys to browse · Click outside or press Esc to close
      </p>
    </div>
  )
}

function ProjectCard({ project }) {
  const [activeShot, setActiveShot] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const ref = useScrollAnimation()

  const openLightbox = useCallback(() => setLightbox(true), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])
  const navigateShot = useCallback((direction) => {
    setActiveShot((current) =>
      (current + direction + project.screenshots.length) % project.screenshots.length
    )
  }, [project.screenshots.length])
  const previousShot = useCallback(() => navigateShot(-1), [navigateShot])
  const nextShot = useCallback(() => navigateShot(1), [navigateShot])

  const currentShot = project.screenshots[activeShot]

  return (
    <>
      {lightbox && (
        <Lightbox
          shots={project.screenshots}
          activeShot={activeShot}
          projectTitle={project.title}
          onPrevious={previousShot}
          onNext={nextShot}
          onClose={closeLightbox}
        />
      )}

      <div ref={ref} className="animate-on-scroll">
        <div className="glass-card overflow-hidden hover:border-violet-200 transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-0">

            {/* Screenshot Panel */}
            <div className="relative bg-violet-50/60 border-b lg:border-b-0 lg:border-r border-violet-100">
              {/* Tab bar */}
              <div className="flex items-center gap-1 px-3 pt-3 pb-0 overflow-x-auto scrollbar-none">
                {project.screenshots.map((shot, i) => (
                  <button
                    key={shot.label}
                    onClick={() => setActiveShot(i)}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-t-lg text-xs font-medium transition-all duration-200 ${
                      activeShot === i
                        ? 'bg-white text-violet-700 border border-b-0 border-violet-200'
                        : 'text-slate-500 hover:text-violet-700'
                    }`}
                  >
                    {shot.label}
                  </button>
                ))}
              </div>

              {/* Screenshot with hover + click to enlarge */}
              <div
                className="group relative mx-3 mb-3 rounded-xl overflow-hidden bg-white border border-violet-100 cursor-zoom-in"
                style={{ aspectRatio: '16/10' }}
                onClick={openLightbox}
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
                  className="absolute inset-0 items-center justify-center flex-col gap-3 bg-white/90"
                  style={{ display: 'none' }}
                >
                  <div className="text-4xl">🖼️</div>
                  <p className="text-slate-500 text-sm text-center px-4">
                    Save screenshot as<br />
                    <code className="text-violet-700 text-xs">public{currentShot.file}</code>
                  </p>
                </div>

                {project.screenshots.length > 1 && (
                  <>
                    <GalleryArrow direction="previous" onClick={previousShot} />
                    <GalleryArrow direction="next" onClick={nextShot} />
                  </>
                )}

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
                <h3 className="text-2xl font-bold text-slate-900 mb-1 leading-tight">
                  {project.title}
                </h3>
                <p className="text-violet-700 text-sm font-medium mb-4">{project.subtitle}</p>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                        <span className="leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
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
              <div className="flex flex-wrap gap-3 pt-2 border-t border-violet-100">
                {project.liveUrl !== '#' && (
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
                )}
                {project.githubUrl !== '#' && (
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
                )}
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
    <section id="projects" className="py-24 px-6 bg-white/70">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="animate-on-scroll mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-violet-600 text-sm font-semibold tracking-widest uppercase">03 / Projects</span>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-400/40 to-transparent" />
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
