import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { menu } from '../data/menu'
import { Link } from 'react-router-dom'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function SignatureCoffee() {
  return (
    <section id="menu" className="relative py-28 md:py-36 px-6 lg:px-10 bg-coffee/[0.03]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="uppercase tracking-[0.3em] text-sand text-xs font-semibold">
            Cafés Signature
          </span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl text-coffee">
            Conçus pour les <span className="text-gradient-gold italic">palais exigeants</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menu.map((coffee) => (
            <motion.article
              key={coffee.id}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className="group rounded-3xl bg-white overflow-hidden shadow-soft hover:shadow-card transition-shadow duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-2xl text-coffee">{coffee.name}</h3>
                  <span className="font-heading text-xl text-gradient-gold font-semibold whitespace-nowrap">
                    {coffee.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-coffee/60 leading-relaxed">
                  {coffee.description}
                </p>
                <button
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-coffee px-5 py-2.5 rounded-full bg-gradient-gold shadow-soft transition-transform hover:scale-105"
                  aria-label={`Commander ${coffee.name}`}
                >
                  <Plus className="w-3.5 h-3.5" />
                  Commander
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <div className="mt-14 text-center">
  <Link
    to="/menu"
    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-gold text-coffee font-semibold text-sm uppercase tracking-wide shadow-soft hover:scale-105 transition-transform"
  >
    Voir tout le menu
  </Link>
</div>
      </div>
    </section>
  )
}
