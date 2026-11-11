
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  MapPin,
  Utensils,
  Instagram,
} from "lucide-react";
import heroImage from "../assets/hero.jpg";
import logo from "../assets/logo.png";
import familie from "../assets/espace-familie.jpg";
import coffeshop from "../assets/coffeshop.jpg";
const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#17140f] text-white">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Les Dunes Berbère exterior"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17140f] via-transparent to-black/30" />
      </div>

      {/* Decorative glow */}
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-amber-600/10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6">

        {/* Navbar */}
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

        {/* Hero body */}
        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left content */}
          <div className="max-w-2xl">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-amber-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-amber-300">
                Authentic Desert Experience
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-5xl leading-[1.15] sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              L'Art de vivre
              <br />
              <span className="italic text-amber-400">
                autrement.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-7 max-w-lg text-base leading-8 text-white/75 sm:text-lg"
            >
              Bienvenue aux Dunes Berbère, un lieu où authenticité,
              convivialité et élégance se rencontrent pour vous
              offrir une expérience unique.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="/menu"
                className="group flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
              >
                Découvrir notre menu
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="/reservation"
                className="rounded-full border border-white/40 px-8 py-4 text-sm transition hover:border-amber-400 hover:text-amber-300"
              >
                Réserver maintenant
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex items-center gap-3 text-sm text-white/60"
            >
              <MapPin size={17} className="text-amber-400" />
              <span>Un cadre exceptionnel, une expérience authentique.</span>
            </motion.div>
          </div>

          {/* Right image composition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative mx-auto hidden h-[490px] w-full max-w-[480px] lg:block"
          >
            {/* Main image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-0 h-[370px] w-[78%] overflow-hidden rounded-t-full rounded-b-[120px] border border-white/20 shadow-2xl"
            >
              <img
                src={coffeshop}
                alt="Elegant coffee lounge"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>

            {/* Secondary image */}
            <div className="absolute bottom-0 left-0 h-56 w-64 overflow-hidden rounded-2xl border-4 border-[#17140f] shadow-2xl">
              <img
                src={familie}
                alt="Family lounge"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-16 right-0 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-amber-400/50 bg-[#21190f]/90 text-center shadow-xl backdrop-blur-md"
            >
              <Utensils size={21} className="mb-2 text-amber-400" />
              <span className="text-xs font-semibold tracking-widest">
                CAFÉ
              </span>
              <span className="text-[10px] text-amber-300">
                LOUNGE
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <div className="flex items-center justify-between border-t border-white/15 py-6">
          <div className="hidden items-center gap-3 text-xs tracking-widest text-white/50 sm:flex">
            <span className="h-px w-8 bg-amber-400" />
            UN LIEU, MILLE ÉMOTIONS
          </div>

          <a
            href="#experience"
            className="mx-auto flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/60 transition hover:text-amber-400 sm:mx-0"
          >
            Explorez notre univers
            <ArrowDown size={15} className="animate-bounce" />
          </a>

          <a
            href="#contact"
            className="hidden text-white/60 transition hover:text-amber-400 sm:block"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
