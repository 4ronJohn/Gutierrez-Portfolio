export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-violet-100 py-8 px-6 bg-white/70">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold gradient-text">AG.</span>
          <span className="text-slate-500 text-sm">Aron John R. Gutierrez</span>
        </div>

        <p className="text-slate-600 text-sm">
          © {year} · Built with React & Tailwind CSS
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://mail.google.com/mail/?view=cm&to=gutierrezjohn409@gmail.com"
            className="w-9 h-9 rounded-lg bg-white border border-violet-100 flex items-center justify-center text-slate-600 hover:text-violet-700 hover:border-violet-200 transition-all duration-200"
            aria-label="Email"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/aron-john-gutierrez-34b499273/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-white border border-violet-100 flex items-center justify-center text-slate-600 hover:text-violet-700 hover:border-violet-200 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
