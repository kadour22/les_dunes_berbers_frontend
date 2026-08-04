import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 md:py-36 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="uppercase tracking-[0.3em] text-sand text-xs font-semibold">
            Avis
          </span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl text-coffee">
            Adoré par nos <span className="text-gradient-gold italic">clients</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative rounded-3xl bg-white p-8 shadow-soft hover:shadow-card transition-shadow duration-500"
            >
              <Quote className="w-8 h-8 text-gold/40" />
              <div className="flex gap-1 mt-4" aria-label="5 étoiles sur 5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-4 text-coffee/70 leading-relaxed text-sm">{t.quote}</p>
              <footer className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt=""
                  aria-hidden="true"
                  className="w-11 h-11 rounded-full object-cover border-2 border-gold/40"
                />
                <div>
                  <cite className="not-italic font-heading text-coffee text-lg block">
                    {t.name}
                  </cite>
                  <span className="text-xs text-coffee/50">{t.role}</span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
