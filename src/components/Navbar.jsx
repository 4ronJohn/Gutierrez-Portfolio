import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-[0_10px_30px_rgba(109,40,217,0.08)] border-b border-violet-100' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleLink('#hero') }}
          className="text-xl font-bold gradient-text tracking-tight"
        >
          AG.
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleLink(link.href)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-violet-700 rounded-lg hover:bg-violet-50 transition-all duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="ml-2">
            <a
              href="https://mail.google.com/mail/?view=cm&to=gutierrezjohn409@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-violet-600 text-white border border-violet-600 hover:bg-violet-500 transition-all duration-200 shadow-[0_8px_20px_rgba(124,58,237,0.18)]"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:text-violet-700 hover:bg-violet-50 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 border-b border-violet-100' : 'max-h-0'
        } bg-white/90 backdrop-blur-md`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleLink(link.href)}
                className="w-full text-left px-4 py-3 text-sm font-medium text-slate-600 hover:text-violet-700 rounded-lg hover:bg-violet-50 transition-all"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="https://mail.google.com/mail/?view=cm&to=gutierrezjohn409@gmail.com"
              className="block w-full text-center px-4 py-3 text-sm font-semibold rounded-lg bg-violet-600 text-white border border-violet-600"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
