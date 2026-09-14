import { useScrollAnimation } from '../hooks/useScrollAnimation'

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'gutierrezjohn409@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&to=gutierrezjohn409@gmail.com',
    cta: 'Send Email',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+63 969 426 5810',
    href: 'tel:+639694265810',
    cta: 'Call Now',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'aron-john-gutierrez-34b499273',
    href: 'https://www.linkedin.com/in/aron-john-gutierrez-34b499273/',
    cta: 'View Profile',
  },
]

export default function Contact() {
  const headerRef = useScrollAnimation()
  const cardsRef = useScrollAnimation()

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={headerRef} className="animate-on-scroll text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-violet-400/40 max-w-24" />
            <span className="text-violet-600 text-sm font-semibold tracking-widest uppercase">06 / Contact</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-violet-400/40 max-w-24" />
          </div>
          <h2 className="section-title text-center">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-600 text-base max-w-lg mx-auto">
            I'm actively looking for new opportunities. Whether you have a question, a project,
            or just want to say hi — my inbox is open.
          </p>
        </div>

        <div ref={cardsRef} className="animate-on-scroll">
          {/* CTA Banner */}
          <div className="relative glass-card p-8 mb-8 overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-transparent to-fuchsia-50 pointer-events-none" />
            <div className="relative z-10">
              <div className="text-4xl mb-4">👋</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Open to Work</h3>
              <p className="text-slate-600 mb-6 max-w-md mx-auto">
                Entry-level IT roles, web development projects, and workflow automation gigs —
                I'm ready to contribute and grow with your team.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&to=gutierrezjohn409@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Say Hello
              </a>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-card p-5 flex flex-col gap-3 hover:border-violet-200 hover:bg-violet-50/50 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-700 group-hover:bg-violet-200 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">{item.label}</div>
                  <div className="text-sm text-slate-700 font-medium break-all leading-snug">{item.value}</div>
                </div>
                <div className="text-xs text-violet-700 font-medium flex items-center gap-1 mt-auto">
                  {item.cta}
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
