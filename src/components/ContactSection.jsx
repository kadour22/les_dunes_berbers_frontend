import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Phone,
  MessageCircle,
  ArrowUpRight,
  Send,
  Heart,
} from "lucide-react";

const CONTACT = {
  instagram: "https://www.instagram.com/dunesberbereszraoua?dlrf=MTJsc28xd3J6cmZjag==",
  facebook: "https://www.facebook.com/share/1EBdW8DT8F/",
  phone: "+21623165820",
  whatsapp: "21623165820",
};

const socialLinks = [
  {
    name: "Instagram",
    description: "Découvrez nos photos et nos moments.",
    username: "@Les Dunes Berbère",
    href: CONTACT.instagram,
    icon: Instagram,
  },
  {
    name: "Facebook",
    description: "Suivez notre actualité et nos événements.",
    username: "Les Dunes Berbère",
    href: CONTACT.facebook,
    icon: Facebook,
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#17140f] py-24 text-white sm:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-amber-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-amber-500" />
            <span className="text-xs uppercase tracking-[0.35em] text-amber-400">
              Restons en contact
            </span>
            <span className="h-px w-10 bg-amber-500" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
            Parlons <span className="italic text-amber-400">ensemble.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            Une question, une réservation ou simplement envie
            d'en savoir plus ? Nous serions ravis de vous accueillir
            et de partager notre univers avec vous.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid gap-6 md:grid-cols-3">

          {/* Instagram */}
          {socialLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-amber-400/40 hover:bg-amber-400/[0.04]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-400/5 blur-2xl transition group-hover:bg-amber-400/15" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-400 transition group-hover:bg-amber-400 group-hover:text-black">
                      <Icon size={27} />
                    </div>

                    <ArrowUpRight
                      size={21}
                      className="text-white/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber-400"
                    />
                  </div>

                  <h3 className="mt-8 font-serif text-2xl">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {item.description}
                  </p>

                  <div className="mt-7 border-t border-white/10 pt-5">
                    <span className="text-sm font-medium text-amber-400">
                      {item.username}
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}

          {/* Phone */}
          <motion.a
            href={`tel:${CONTACT.phone}`}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-amber-400/40 hover:bg-amber-400/[0.04]"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-400 transition group-hover:bg-amber-400 group-hover:text-black">
                <Phone size={26} />
              </div>

              <ArrowUpRight
                size={21}
                className="text-white/30 transition group-hover:text-amber-400"
              />
            </div>

            <h3 className="mt-8 font-serif text-2xl">
              Téléphone
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/50">
              Contactez-nous directement pour toute information
              ou réservation.
            </p>

            <div className="mt-7 border-t border-white/10 pt-5">
              <span className="text-sm font-medium text-amber-400">
                {CONTACT.phone}
              </span>
            </div>
          </motion.a>

        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-12 overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-r from-[#302316] to-[#1d1811] p-8 sm:p-12"
        >
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border border-amber-400/10" />
          <div className="absolute -right-5 -top-16 h-52 w-52 rounded-full border border-amber-400/10" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <div className="mb-4 flex items-center justify-center gap-2 text-amber-400 md:justify-start">
                <MessageCircle size={21} />
                <span className="text-xs uppercase tracking-[0.25em]">
                  Nous sommes à votre écoute
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl">
                Une envie de nous <span className="italic text-amber-400">contacter ?</span>
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">
                Écrivez-nous directement sur WhatsApp.
                Notre équipe sera heureuse de vous répondre.
              </p>
            </div>

            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-3 rounded-full bg-amber-500 px-8 py-4 text-sm font-semibold text-black transition hover:bg-amber-400"
            >
              <MessageCircle size={19} />
              Nous écrire
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>

        {/* Closing signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-amber-400">
            <Heart size={15} />
            <span className="text-xs uppercase tracking-[0.3em]">
              Les Dunes Berbère
            </span>
            <Heart size={15} />
          </div>

          <p className="mt-5 font-serif text-2xl italic text-white/70">
            L'authenticité se partage.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;
