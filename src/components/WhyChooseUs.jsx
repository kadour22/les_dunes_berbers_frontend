import { motion } from 'framer-motion'
import { Coffee, Flame, Sparkles, HeartHandshake } from 'lucide-react'
import { features } from '../data/features'

const icons = { Coffee, Flame, Sparkles, HeartHandshake }

export default function WhyChooseUs() {
  return (
    <section className="py-28 md:py-36 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="uppercase tracking-[0.3em] text-sand text-xs font-semibold">
            Pourquoi Nous Choisir
          </span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl text-coffee">
            L’essence <span className="text-gradient-gold italic">du désert</span>, dans
            chaque tasse
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = icons[feature.icon]
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -10 }}
                className="rounded-3xl bg-gradient-to-b from-white to-background p-8 shadow-soft hover:shadow-card transition-shadow duration-500 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-gold flex items-center justify-center shadow-glow">
                  <Icon className="w-7 h-7 text-coffee" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-heading text-xl text-coffee">{feature.title}</h3>
                <p className="mt-2 text-sm text-coffee/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
