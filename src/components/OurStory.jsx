import { motion } from 'framer-motion'
import { stats } from '../data/features'

export default function OurStory() {
  return (
    <section id="story" className="relative py-28 md:py-36 px-6 lg:px-10 overflow-hidden">
      <span
        aria-hidden="true"
        className="absolute -left-16 bottom-0 text-[16rem] leading-none font-heading text-coffee/[0.04] select-none"
      >
        ⵣ
      </span>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-card aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=1200&auto=format&fit=crop"
              alt="Artisan amazigh préparant un café traditionnel dans le désert"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden sm:block absolute -bottom-10 -right-8 w-44 h-44 rounded-3xl overflow-hidden shadow-card border-4 border-background"
          >
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop"
              alt="Gros plan sur des grains de café fraîchement torréfiés"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
        >
          <span className="uppercase tracking-[0.3em] text-sand text-xs font-semibold">
            Notre Histoire
          </span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl leading-tight text-coffee">
            Un rituel transmis à travers les <span className="text-gradient-gold italic">générations</span>
          </h2>
          <p className="mt-6 text-coffee/70 leading-relaxed">
            Bien avant que les cafés ne bordent les rues des villes, le peuple amazigh du Sahara
            se rassemblait autour du feu et de l’hospitalité — partageant histoires, thé et
            chaleur avec chaque voyageur croisant leur chemin. Les Dunes Berbères est né de cet
            esprit : un lieu où chaque tasse est servie avec intention, et chaque invité accueilli
            comme un membre de la famille.
          </p>
          <p className="mt-4 text-coffee/70 leading-relaxed">
            Nous travaillons directement avec des producteurs qui respectent la terre, torréfions
            en petites quantités pour préserver chaque nuance de saveur, et concevons chaque
            recoin de notre espace pour évoquer les textures, les couleurs et la sérénité du
            désert.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="rounded-2xl bg-white/60 backdrop-blur-sm shadow-soft p-5 text-center"
              >
                <p className="font-heading text-3xl md:text-4xl text-gradient-gold font-semibold">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-coffee/60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
