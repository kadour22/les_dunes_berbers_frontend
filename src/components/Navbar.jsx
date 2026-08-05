import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { navLinks } from '../data/features'

export default function Navbar() {
  const scrolled = useScrollPosition(40)
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-soft py-3' : 'bg-transparent py-6'
      }`}
    >
      <nav
        aria-label="Primary"
        className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between"
      >
        <a
          href="#home"
          className="font-heading text-2xl md:text-3xl tracking-wide text-coffee flex items-center gap-2"
        >
          <span className="text-gradient-gold font-semibold">Les Dunes</span>
          <span className="text-coffee/80 italic">Berbères</span>
        </a>

        <ul className="hidden lg:flex items-center gap-9 font-body text-sm tracking-wide uppercase text-coffee/80">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 transition-colors hover:text-brown group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-gradient-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* <button
            aria-label="Voir le panier"
            className="relative p-2.5 rounded-full hover:bg-coffee/5 transition-colors"
          >
            <ShoppingBag className="w-5 h-5 text-coffee" strokeWidth={1.75} />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gradient-gold text-[10px] flex items-center justify-center text-background font-semibold">
              2
            </span>
          </button> */}

          <button
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2.5 rounded-full hover:bg-coffee/5 transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden glass"
          >
            <ul className="flex flex-col items-center gap-6 py-8 font-body uppercase text-sm tracking-wide text-coffee/80">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
