import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="animate-on-scroll">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-violet-600 text-sm font-semibold tracking-widest uppercase">01 / About</span>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-400/40 to-transparent" />
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">Get to know who I am and what drives me</p>

          <div className="grid md:grid-cols-5 gap-10 items-center">
            {/* Avatar */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-200/80 to-fuchsia-200/70 blur-xl" />
                <div className="relative w-56 md:w-64 rounded-3xl overflow-hidden border border-violet-100 shadow-[0_20px_45px_rgba(109,40,217,0.12)] bg-white/90">
                  <img
                    src="/projects/profile.jpg"
                    alt="Aron John Gutierrez"
                    className="w-full h-auto object-contain"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white border border-violet-100 rounded-xl px-3 py-2 shadow-lg">
                  <div className="text-xs text-slate-500">Based in</div>
                  <div className="text-sm font-semibold text-slate-800">Taguig, 🇵🇭</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 space-y-5">
              <p className="text-slate-700 text-lg leading-relaxed">
                Hi! I'm <span className="text-violet-700 font-semibold">Aron John</span>, an entry-level IT professional
                and fresh graduate with a{' '}
                <span className="text-violet-700 font-semibold">Bachelor of Science in Information Technology</span>{' '}
                from Polytechnic University of the Philippines, graduating{' '}
                <span className="text-violet-700 font-semibold">Cum Laude</span>.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I have hands-on experience in IT support, web development with React and Tailwind CSS,
                and building automated workflows using tools like Buildship, Make, and N8N. I'm passionate
                about leveraging technology to improve system efficiency and solve real-world problems.
              </p>

              {/* Quick info */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { label: 'Location', value: 'Taguig, PH' },
                  { label: 'Email', value: 'gutierrezjohn409@gmail.com' },
                  { label: 'Degree', value: 'BS Information Technology' },
                  { label: 'Status', value: 'Open to Work' },
                ].map((item) => (
                  <div key={item.label} className="glass-card p-3">
                    <div className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">{item.label}</div>
                    <div className="text-sm text-slate-800 font-medium truncate">{item.value}</div>
                  </div>
                ))}
              </div>

              {/* Contact links */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=gutierrezjohn409@gmail.com"
                  className="btn-primary text-sm py-2.5"
                >
                  Get In Touch
                </a>
                <a
                  href="https://www.linkedin.com/in/aron-john-gutierrez-34b499273/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm py-2.5 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
