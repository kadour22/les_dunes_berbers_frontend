import { motion } from 'framer-motion'
import { gallery } from '../data/gallery'

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 md:py-36 px-6 lg:px-10 bg-coffee/[0.03]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="uppercase tracking-[0.3em] text-sand text-xs font-semibold">
            Galerie
          </span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl text-coffee">
            Des instants à <span className="text-gradient-gold italic">savourer</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[220px] gap-5">
          {gallery.map((item, i) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative rounded-3xl overflow-hidden shadow-soft group ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/70 via-coffee/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <figcaption className="text-background text-sm uppercase tracking-wide font-semibold">
                  {item.category}
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
