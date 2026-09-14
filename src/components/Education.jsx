import { useState, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const education = [
  {
    school: 'Polytechnic University of the Philippines – San Juan',
    degree: 'Bachelor of Science in Information Technology',
    period: '2021 – 2025',
    honors: [
      'CUM Laude',
      "President's Lister (A.Y. 2021–2025)",
      'Junior Programmer of the Year',
      'Member, PUPSJ Governing League of I.T. Challengers',
    ],
    icon: '🎓',
    color: 'cyan',
  },
  {
    school: 'Systems Technology Institute (STI) College Novaliches',
    degree: 'STEM Strand',
    period: '2019 – 2021',
    honors: [
      'With Honors (A.Y. 2019–2020)',
      'With Honors (A.Y. 2020–2021)',
    ],
    icon: '📚',
    color: 'indigo',
  },
]

const colorMap = {
  cyan: {
    icon: 'bg-violet-100 text-violet-700',
    border: 'hover:border-violet-200',
    badge: 'bg-violet-50 text-violet-700 border-violet-200',
    dot: 'bg-violet-500',
  },
  indigo: {
    icon: 'bg-fuchsia-100 text-fuchsia-700',
    border: 'hover:border-fuchsia-200',
    badge: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
    dot: 'bg-fuchsia-500',
  },
}

function EducationCard({ edu }) {
  const ref = useScrollAnimation()
  const c = colorMap[edu.color]

  return (
    <div ref={ref} className={`animate-on-scroll glass-card p-6 transition-all duration-300 ${c.border}`}>
      <div className="flex items-start gap-4 mb-5">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${c.icon}`}>
          {edu.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-slate-900 text-base leading-tight">{edu.school}</h3>
          <p className="text-slate-600 text-sm mt-1">{edu.degree}</p>
          <span className={`inline-flex items-center gap-1 mt-2 px-2.5 py-0.5 rounded-full text-xs font-medium border ${c.badge}`}>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {edu.period}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {edu.honors.map((honor) => (
          <div key={honor} className="flex items-center gap-2.5">
            <span className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
            <span className="text-sm text-slate-600">{honor}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Education() {
  const headerRef = useScrollAnimation()

  return (
    <section id="education" className="py-24 px-6 bg-white/70">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="animate-on-scroll mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-violet-600 text-sm font-semibold tracking-widest uppercase">05 / Education</span>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-400/40 to-transparent" />
          </div>
          <h2 className="section-title">
            Education &{' '}
            <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-subtitle">My academic background and achievements</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {education.map((edu) => (
            <EducationCard key={edu.school} edu={edu} />
          ))}
        </div>

        {/* Certifications sub-section */}
        <CertificationsInline />
      </div>
    </section>
  )
}

function CertificationsInline() {
  const ref = useScrollAnimation()
  const [lightbox, setLightbox] = useState(null)

  const certs = [
    {
      name: 'Introduction to GenAI',
      issuer: 'Google Skills',
      year: '2026',
      image: '/badges/IntroGenAI.png',
    },
    {
      name: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      year: '2023',
      image: '/badges/cisco-cybersecurity.png',
    },
    {
      name: 'Introduction to IoT',
      issuer: 'Cisco Networking Academy',
      year: '2023',
      image: '/badges/cisco-iot.png',
    },
    {
      name: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      year: '2023',
      image: '/badges/cisco-networking-basics.png',
    },
  ]

  useEffect(() => {
    if (!lightbox) return

    const onKey = (event) => {
      if (event.key === 'Escape') setLightbox(null)
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox])

  return (
    <div ref={ref} className="animate-on-scroll">
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-800/90 border border-slate-600/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-200 z-10"
            aria-label="Close certificate"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-600/60 text-slate-300 text-sm font-medium">
            {lightbox.name}
          </div>

          <img
            src={lightbox.image}
            alt={lightbox.name}
            onClick={(event) => event.stopPropagation()}
            className="max-w-full max-h-[calc(100vh-6rem)] rounded-2xl object-contain shadow-2xl border border-white/10 bg-white/5"
          />

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-300 text-xs">
            Click outside or press Esc to close
          </p>
        </div>
      )}

      <h3 className="text-lg font-semibold text-slate-800 mb-5 flex items-center gap-2">
        <span className="text-violet-600">✦</span> Certifications & Badges
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {certs.map((cert) => (
          <div
            key={cert.name}
            className="glass-card p-5 flex flex-col items-center text-center hover:border-violet-200 transition-all duration-300 group cursor-pointer"
            onClick={() => setLightbox(cert)}
          >
            <div className="w-full max-w-[220px] aspect-square mb-4 rounded-[1.25rem] overflow-hidden flex items-center justify-center bg-white ring-1 ring-violet-100 shadow-sm group-hover:scale-[1.02] transition-transform duration-300">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-full object-contain p-3"
              />
            </div>
            <div className="text-xs font-semibold text-violet-700 uppercase tracking-wide mb-1">{cert.issuer}</div>
            <div className="text-sm font-medium text-slate-800 leading-tight mb-2">{cert.name}</div>
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-600 bg-violet-50 px-2.5 py-0.5 rounded-full">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Verified · {cert.year}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
