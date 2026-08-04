import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, BookOpen } from 'lucide-react'
import SandParticles from './SandParticles'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen min-h-[640px] w-full overflow-hidden flex items-center justify-center"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110"
      >
        <img
          src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2000&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
      </motion.div>

      {/* Amazigh symbol watermark */}
      <span
        aria-hidden="true"
        className="absolute -right-10 top-1/4 text-[24rem] leading-none font-heading text-background/5 select-none pointer-events-none"
      >
        ⵣ
      </span>

      <SandParticles />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="uppercase tracking-[0.35em] text-gold text-xs md:text-sm font-body mb-6"
        >
          Fondé au cœur du Sahara
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-background leading-[1.05] tracking-wide"
        >
          Les Dunes Berbères
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-5 font-heading italic text-xl md:text-2xl text-gold"
        >
          Un café inspiré du Sahara
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 max-w-xl mx-auto text-background/80 font-body text-sm md:text-base leading-relaxed"
        >
          Ancrée dans des siècles d’hospitalité amazighe, chaque tasse que nous servons
          porte la chaleur du désert, la générosité de son peuple et le rituel de se retrouver
          autour de l’essentiel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#menu"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-coffee font-semibold text-sm tracking-wide shadow-glow overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10">Découvrir le Menu</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-background/40 text-background font-semibold text-sm tracking-wide backdrop-blur-sm transition-all hover:bg-background/10"
          >
            <BookOpen className="w-4 h-4" />
            Notre Histoire
          </a>
        </motion.div>
      </motion.div>

      {/* Floating coffee cup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="hidden lg:block absolute right-10 bottom-10 z-10 animate-float"
      >
        <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-card border-4 border-background/20">
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=600&auto=format&fit=crop"
            alt="Tasse de café signature avec latte art"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Steam */}
        <div aria-hidden="true" className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="w-2 h-10 rounded-full bg-background/40 blur-sm animate-steam" />
          <span
            className="w-2 h-10 rounded-full bg-background/40 blur-sm animate-steam"
            style={{ animationDelay: '1.3s' }}
          />
          <span
            className="w-2 h-10 rounded-full bg-background/40 blur-sm animate-steam"
            style={{ animationDelay: '2.6s' }}
          />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-background/50 flex justify-center pt-2">
          <motion.span
            className="w-1 h-2 rounded-full bg-gold"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
