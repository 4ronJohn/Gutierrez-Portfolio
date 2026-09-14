import { useScrollAnimation } from '../hooks/useScrollAnimation'

const experiences = [
  {
    role: 'Freelancer',
    company: 'Self-Employed',
    period: 'August 2025 – March 2026',
    type: 'Freelance',
    color: 'cyan',
    bullets: [
      'Built and deployed web applications using React and Tailwind CSS, along with low-code/no-code platforms',
      'Developed automated workflows and API integrations using Buildship, Make, and N8N',
      'Wrote JavaScript and SQL for data handling and workflow customization',
      'Diagnosed and resolved technical issues across systems',
    ],
    tags: ['React', 'Tailwind CSS', 'N8N', 'Make', 'Buildship', 'JavaScript', 'SQL'],
  },
  {
    role: 'IT Intern',
    company: 'Reyes Tacandong & Co.',
    period: 'March 2025 – June 2025',
    type: 'Internship',
    color: 'indigo',
    bullets: [
      'Installed, configured, and provided technical support for laptops and desktop computers',
      'Diagnosed and resolved hardware, software, and network connectivity issues',
      'Managed user accounts and permissions through Active Directory',
      'Administered biometric devices and handled service requests via ticketing system',
    ],
    tags: ['IT Support', 'Active Directory', 'Networking', 'Hardware', 'Ticketing Systems'],
  },
]

const colorMap = {
  cyan: {
    dot: 'bg-violet-500',
    ring: 'ring-violet-200',
    badge: 'bg-violet-50 text-violet-700 border-violet-200',
    tag: 'bg-violet-50 text-violet-700 border-violet-200',
  },
  indigo: {
    dot: 'bg-fuchsia-500',
    ring: 'ring-fuchsia-200',
    badge: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
    tag: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
  },
}

function ExperienceCard({ exp, index }) {
  const ref = useScrollAnimation()
  const c = colorMap[exp.color]

  return (
    <div ref={ref} className="animate-on-scroll relative pl-16">
      {/* Timeline dot */}
      <div className={`absolute left-4 top-6 w-4 h-4 rounded-full ${c.dot} ring-4 ${c.ring} z-10 -translate-x-1/2`} />

      <div className="glass-card p-6 hover:border-violet-200 transition-all duration-300 hover:shadow-[0_18px_40px_rgba(109,40,217,0.08)]">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
            <p className="text-slate-600 text-sm mt-0.5">{exp.company}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${c.badge}`}>
              {exp.type}
            </span>
            <span className="text-slate-500 text-xs flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {exp.period}
            </span>
          </div>
        </div>

        <ul className="space-y-2.5 mb-5">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm leading-relaxed">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
              {b}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span key={tag} className={`px-2.5 py-1 rounded-md text-xs font-medium border ${c.tag}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const headerRef = useScrollAnimation()

  return (
    <section id="experience" className="py-24 px-6 bg-white/70">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="animate-on-scroll mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-violet-600 text-sm font-semibold tracking-widest uppercase">02 / Experience</span>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-400/40 to-transparent" />
          </div>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">My professional journey and hands-on work</p>
        </div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="timeline-line" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.role} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
