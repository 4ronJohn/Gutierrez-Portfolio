import { useScrollAnimation } from '../hooks/useScrollAnimation'

const skillGroups = [
  {
    category: 'IT Support & Infrastructure',
    icon: '🖥️',
    skills: [
      'IT Support & Troubleshooting',
      'System Configuration',
      'Hardware & Software Diagnosis',
      'Network Connectivity',
      'Active Directory',
      'User Account Management',
      'Remote Access (TeamViewer)',
      'Ticketing Systems',
      'Biometric Device Administration',
      'Virtualization (Oracle VM VirtualBox)',
    ],
  },
  {
    category: 'Web Development',
    icon: '⚛️',
    skills: [
      'React',
      'Tailwind CSS',
      'JavaScript (ES6+)',
      'HTML & CSS',
      'Vite',
      'Low-code / No-code Platforms',
      'REST API Integration',
      'Responsive Design',
    ],
  },
  {
    category: 'Database & Backend',
    icon: '🗄️',
    skills: [
      'SQL (Queries, Filtering, Joins)',
      'PostgreSQL',
      'Supabase',
      'Database Management',
      'Data Handling',
    ],
  },
  {
    category: 'Workflow Automation',
    icon: '⚡',
    skills: [
      'N8N',
      'Make (Integromat)',
      'Buildship',
      'API Integrations',
      'Workflow Design',
      'Process Automation',
    ],
  },
]

const softSkills = [
  { label: 'Problem-solving & Critical Thinking', icon: '🧠' },
  { label: 'Attention to Detail', icon: '🔍' },
  { label: 'Adaptability & Fast Learning', icon: '⚡' },
  { label: 'Communication & Collaboration', icon: '🤝' },
  { label: 'Leadership & Project Management', icon: '🎯' },
  { label: 'Continuous Learning', icon: '📚' },
]

function SkillGroup({ group }) {
  const ref = useScrollAnimation()
  return (
    <div ref={ref} className="animate-on-scroll glass-card p-6 hover:border-violet-200 transition-all duration-300">
      <div className="flex items-center gap-2 mb-5">
        <span className="text-2xl">{group.icon}</span>
        <h3 className="font-semibold text-slate-800">{group.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span key={skill} className="tag">{skill}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const headerRef = useScrollAnimation()
  const softRef = useScrollAnimation()

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="animate-on-scroll mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-violet-600 text-sm font-semibold tracking-widest uppercase">04 / Skills</span>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-400/40 to-transparent" />
          </div>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {skillGroups.map((group) => (
            <SkillGroup key={group.category} group={group} />
          ))}
        </div>

        {/* Soft Skills */}
        <div ref={softRef} className="animate-on-scroll">
          <h3 className="text-lg font-semibold text-slate-800 mb-5 flex items-center gap-2">
            <span className="text-violet-600">✦</span> Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {softSkills.map((s) => (
              <div
                key={s.label}
                className="glass-card p-4 flex items-center gap-3 hover:border-violet-200 transition-all duration-200"
              >
                <span className="text-xl flex-shrink-0">{s.icon}</span>
                <span className="text-sm text-slate-700 leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
