import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const location = useLocation()

  React.useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 rounded-full text-sm tracking-wide transition-colors ${
          isActive
            ? 'text-white bg-white/10 backdrop-blur-[2px] border border-white/20'
            : 'text-white/80 hover:text-white hover:bg-white/5'
        }`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl">
          <Link to="/" className="group inline-flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 blur-md opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="relative grid h-9 w-9 place-items-center rounded-lg bg-black/80 border border-white/20">
                <span className="text-xs font-bold tracking-wider text-white">W</span>
              </div>
            </div>
            <span className="font-semibold tracking-[0.2em] text-white">itzwish.me</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItem('/', 'Home')}
            {navItem('/about', 'About')}
            {navItem('/projects', 'Projects')}
            {navItem('/contact', 'Contact')}
          </nav>

          <button className="md:hidden grid place-items-center h-10 w-10 rounded-xl border border-white/15 text-white/90 bg-white/5" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl">
            <div className="flex flex-col p-2">
              <NavLink to="/" className="px-4 py-3 rounded-xl text-white/90 hover:bg-white/5">Home</NavLink>
              <NavLink to="/about" className="px-4 py-3 rounded-xl text-white/90 hover:bg-white/5">About</NavLink>
              <NavLink to="/projects" className="px-4 py-3 rounded-xl text-white/90 hover:bg-white/5">Projects</NavLink>
              <NavLink to="/contact" className="px-4 py-3 rounded-xl text-white/90 hover:bg-white/5">Contact</NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
