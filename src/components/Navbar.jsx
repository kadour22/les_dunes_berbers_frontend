import React from 'react'
import {motion} from 'framer-motion';
import logo from '../assets/logo.png'
import { ArrowRight } from 'lucide-react';
const Navbar = () => {
  return (
   
        <motion.nav
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between border-b border-white/15 py-6"
        >
          <a href="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Les Dunes Berbère"
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <h2 className="font-serif text-lg tracking-wide">
                LES DUNES
              </h2>
              <p className="text-[10px] tracking-[0.35em] text-amber-400">
                BERBÈRE
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-9 text-sm text-white/80 md:flex">
            <a href="/" className="transition hover:text-amber-400">Accueil</a>
            <a href="/menu" className="transition hover:text-amber-400">Notre menu</a>
            <a href="#experience" className="transition hover:text-amber-400">Expérience</a>
            <a href="#contact" className="transition hover:text-amber-400">Contact</a>
          </div>

          <a
            href="/reservation"
            className="hidden items-center gap-2 rounded-full border border-amber-400/70 px-6 py-3 text-sm font-medium text-amber-300 transition hover:bg-amber-400 hover:text-black sm:flex"
          >
            Réserver une table
            <ArrowRight size={16} />
          </a>
        </motion.nav>

  )
}

export default Navbar
