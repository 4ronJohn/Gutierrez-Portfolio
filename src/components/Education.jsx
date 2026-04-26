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
    icon: 'bg-cyan-500/10 text-cyan-400',
    border: 'hover:border-cyan-500/30',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    dot: 'bg-cyan-400',
  },
  indigo: {
    icon: 'bg-indigo-500/10 text-indigo-400',
    border: 'hover:border-indigo-500/30',
    badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    dot: 'bg-indigo-400',
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
          <h3 className="font-bold text-slate-100 text-base leading-tight">{edu.school}</h3>
          <p className="text-slate-400 text-sm mt-1">{edu.degree}</p>
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
            <span className="text-sm text-slate-400">{honor}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Education() {
  const headerRef = useScrollAnimation()

  return (
    <section id="education" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="animate-on-scroll mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">04 / Education</span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
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

  const certs = [
    {
      name: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      year: '2023',
      icon: '🔒',
    },
    {
      name: 'Introduction to IoT',
      issuer: 'Cisco',
      year: '2023',
      icon: '📡',
    },
    {
      name: 'Networking Basics',
      issuer: 'Cisco',
      year: '2023',
      icon: '🌐',
    },
  ]

  return (
    <div ref={ref} className="animate-on-scroll">
      <h3 className="text-lg font-semibold text-slate-300 mb-5 flex items-center gap-2">
        <span className="text-cyan-400">✦</span> Certifications & Badges
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {certs.map((cert) => (
          <div
            key={cert.name}
            className="glass-card p-5 flex flex-col items-center text-center hover:border-cyan-500/30 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl mb-4 group-hover:bg-cyan-500/20 transition-colors">
              {cert.icon}
            </div>
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-1">{cert.issuer}</div>
            <div className="text-sm font-medium text-slate-200 leading-tight mb-2">{cert.name}</div>
            <div className="text-xs text-slate-500 bg-slate-700/50 px-2 py-0.5 rounded-full">{cert.year}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
