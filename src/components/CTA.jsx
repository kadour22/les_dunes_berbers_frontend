import { motion } from 'framer-motion'
import { CalendarCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="relative py-28 md:py-36 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-coffee" />
      <span
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 -top-10 text-[20rem] leading-none font-heading text-background/[0.04] select-none"
      >
        ⵣ
      </span>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <span className="uppercase tracking-[0.35em] text-gold text-xs font-semibold">
          Rejoignez-nous
        </span>
        <h2 className="mt-5 font-heading text-4xl sm:text-5xl md:text-6xl text-background leading-tight">
          Vivez le Café Comme <span className="text-gradient-gold italic">Jamais Auparavant</span>
        </h2>
        <p className="mt-6 text-background/70 max-w-xl mx-auto leading-relaxed">
          Entrez dans un espace où chaque détail — la lumière, le parfum, le silence entre deux
          gorgées — a été pensé pour vous inviter à ralentir.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 inline-flex items-center gap-2 px-9 py-4 rounded-full bg-gradient-gold text-coffee font-semibold text-sm tracking-wide shadow-glow"
        >
          <CalendarCheck className="w-4 h-4" />
          <Link to="/reservation">Réserver une table</Link>
        </motion.a>
      </motion.div>
    </section>
  )
}
