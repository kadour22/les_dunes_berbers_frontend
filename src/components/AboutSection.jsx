
import { motion } from "framer-motion";
import {
  Mountain,
  Landmark,
  Clapperboard,
  BookOpen,
  ShieldCheck,
  ArrowUpRight,
  History,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const highlights = [
  {
    icon: History,
    number: "1500+",
    title: "Ans d'histoire",
    description:
      "Un patrimoine exceptionnel dont les origines remontent à plus de quinze siècles.",
  },
  {
    icon: Landmark,
    number: "Tradition",
    title: "Architecture berbère",
    description:
      "Des maisons en pierre locale, des toitures en palmiers et des constructions traditionnelles.",
  },
  {
    icon: Clapperboard,
    number: "Cinéma",
    title: "Un décor légendaire",
    description:
      "Un village qui a accueilli plusieurs productions cinématographiques internationales.",
  },
  {
    icon: BookOpen,
    number: "850+",
    title: "Ans de mémoire",
    description:
      "Des manuscrits anciens témoignant de la richesse culturelle et intellectuelle du village.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#17140f] py-24 text-white sm:py-32"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-amber-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-orange-800/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-amber-500" />
            <span className="text-xs uppercase tracking-[0.35em] text-amber-400">
              L'âme de notre région
            </span>
            <span className="h-px w-10 bg-amber-500" />
          </div>

          <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Notre <span className="italic text-amber-400">Histoire</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            Bien plus qu'un lieu de détente, Les Dunes Berbère
            s'inspirent d'une terre riche en histoire, en traditions
            et en authenticité.
          </p>
        </motion.div>

        {/* Main story */}
        <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Left editorial panel */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-[#302316] via-[#21190f] to-[#17140f] p-8 sm:p-10">

              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-amber-400/10" />
              <div className="absolute -right-4 -top-4 h-36 w-36 rounded-full border border-amber-400/10" />

              <div className="relative z-10">
                <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/10">
                  <Mountain className="text-amber-400" size={28} />
                </div>

                <span className="text-xs uppercase tracking-[0.3em] text-amber-400">
                  Au cœur de Matmata
                </span>

                <h3 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                  Zraoua,
                  <br />
                  <span className="italic text-amber-400">
                    un héritage vivant.
                  </span>
                </h3>

                <p className="mt-7 text-sm leading-8 text-white/65">
                  Perché sur un haut plateau calcaire des monts de
                  Matmata, Zraoua est l'un des plus anciens villages
                  de Tunisie. Ses pierres racontent une histoire
                  vieille de plus de 1500 ans.
                </p>

                <div className="mt-10 border-t border-white/10 pt-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-4xl text-amber-400">
                        1500+
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-widest text-white/45">
                        Ans de patrimoine
                      </p>
                    </div>

                    <div className="h-12 w-px bg-white/15" />

                    <div>
                      <p className="font-serif text-4xl text-amber-400">
                        850+
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-widest text-white/45">
                        Ans de manuscrits
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 flex items-center gap-2 text-xs text-white/40">
              <MapPinIcon />
              Zraoua — Monts de Matmata, Tunisie
            </p>
          </motion.div>

          {/* Right historical content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.15 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-4 font-serif text-2xl sm:text-3xl">
                Un village façonné par le temps
              </h3>

              <p className="text-sm leading-8 text-white/60 sm:text-base">
                Le village de Zraoua compte parmi les plus anciens
                villages de Tunisie. Son édification remonte à plus
                de 1500 ans, voire à l'époque de l'Empire romain.
                Construit par ses premiers habitants sur un plateau
                calcaire, il conserve encore aujourd'hui une
                architecture traditionnelle remarquable.
              </p>

              <p className="mt-4 text-sm leading-8 text-white/60 sm:text-base">
                Ses habitations sont bâties en pierre locale avec
                des liants traditionnels appelés « chehba ».
                Leurs toitures associent troncs de palmiers,
                palmes et troncs d'arbres. À l'intérieur du village,
                d'étroites pistes relient les maisons et leurs
                différents espaces de vie : cuisine, stockage et élevage.
              </p>
            </div>

            {/* Defense heritage */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-4 flex items-center gap-3">
                <ShieldCheck className="text-amber-400" size={23} />
                <h4 className="font-serif text-xl">
                  Une ingénieuse stratégie de défense
                </h4>
              </div>

              <p className="text-sm leading-7 text-white/55">
                Les anciens habitants avaient développé un système
                défensif remarquable, reposant sur trois éléments :
              </p>

              <ul className="mt-5 space-y-4">
                {[
                  "Des sentinelles postées sur les collines environnantes pour surveiller les alentours.",
                  "Des ouvertures étroites dans les murs des habitations, utilisées comme postes de tir.",
                  "Un réseau de tunnels reliant les maisons et débouchant vers la plaine dans quatre directions.",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 text-sm leading-7 text-white/65">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-xs text-amber-400">
                      0{index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="mt-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-amber-400">
              Un patrimoine exceptionnel
            </span>
            <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
              Les trésors de Zraoua
            </h3>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ y: -8 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-amber-400/40 hover:bg-amber-400/[0.05]"
                >
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 transition group-hover:bg-amber-400 group-hover:text-black">
                    <Icon size={23} />
                  </div>

                  <span className="text-xs uppercase tracking-[0.2em] text-amber-400">
                    {item.number}
                  </span>

                  <h4 className="mt-3 font-serif text-xl">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Cinema heritage */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid items-center gap-8 rounded-3xl border border-amber-400/20 bg-gradient-to-r from-[#302316] to-[#1d1811] p-8 sm:p-12 lg:grid-cols-[1fr_auto]"
        >
          <div>
            <div className="mb-4 flex items-center gap-3 text-amber-400">
              <Clapperboard size={23} />
              <span className="text-xs uppercase tracking-[0.25em]">
                Zraoua sur grand écran
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl">
              Un décor qui traverse les frontières.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-white/60">
              La beauté architecturale et l'authenticité de Zraoua
              ont attiré des cinéastes internationaux. Le village
              a notamment servi de décor à plusieurs productions :
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Le Sacre de l'Homme",
                "Mary of Nazareth",
                "L'Or Noir",
              ].map((film) => (
                <span
                  key={film}
                  className="rounded-full border border-amber-400/25 px-5 py-2.5 text-sm text-amber-200"
                >
                  {film}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden h-28 w-28 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 lg:flex">
            <Clapperboard size={42} className="text-amber-400" />
          </div>
        </motion.div>

        {/* Preservation */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-24 max-w-3xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-amber-400">
            Notre engagement
          </span>

          <h3 className="mt-5 font-serif text-3xl leading-tight sm:text-5xl">
            Préserver le passé,
            <br />
            <span className="italic text-amber-400">
              transmettre l'avenir.
            </span>
          </h3>

          <p className="mt-7 text-sm leading-8 text-white/60 sm:text-base">
            Nous souhaitons contribuer à la restauration du village
            dans son état d'origine et à sa valorisation comme site
            de tourisme archéologique, lieu de tournage
            cinématographique et étape incontournable des circuits
            touristiques régionaux.
          </p>

          <p className="mt-5 text-sm leading-8 text-white/60 sm:text-base">
            Nous aspirons également à préserver, restaurer et mettre
            en valeur nos précieux manuscrits datant de plus de
            850 ans, témoins d'une mémoire culturelle à transmettre
            aux générations futures.
          </p>

          <div className="mt-9 flex justify-center">
            <a
              href="/reservation"
              className="group flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              Vivez l'expérience
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// Small location icon
const MapPinIcon = () => (
  <Mountain size={15} className="text-amber-400" />
);

export default AboutSection;
