
import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  Clock,
  Compass,
  ArrowUpRight,
  MapPinned,
} from "lucide-react";

const LOCATION = {
  lat: 33.6687037,
  lng: 9.814305,
};

const mapUrl = `https://www.google.com/maps?q=${LOCATION.lat},${LOCATION.lng}&z=16&output=embed`;

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${LOCATION.lat},${LOCATION.lng}`;

const LocationSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#17140f] py-24 text-white sm:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-amber-500" />
            <span className="text-xs uppercase tracking-[0.35em] text-amber-400">
              Retrouvez-nous
            </span>
            <span className="h-px w-10 bg-amber-500" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
            Notre <span className="italic text-amber-400">Emplacement</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            Au cœur de Zraoua, découvrez un lieu unique où
            authenticité, détente et hospitalité se rencontrent.
            Nous vous attendons aux Dunes Berbère.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">

          {/* Information card */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between rounded-3xl border border-amber-400/20 bg-gradient-to-br from-[#302316] to-[#1d1811] p-8 sm:p-10"
          >
            <div>
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/10">
                <MapPinned size={27} className="text-amber-400" />
              </div>

              <span className="text-xs uppercase tracking-[0.3em] text-amber-400">
                Les Dunes Berbère
              </span>

              <h3 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">
                Votre prochaine
                <br />
                <span className="italic text-amber-400">
                  destination.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-8 text-white/55">
                Prenez le temps de découvrir notre espace et profitez
                d'une expérience chaleureuse dans un cadre inspiré
                de notre patrimoine berbère.
              </p>

              {/* Location details */}
              <div className="mt-10 space-y-7">
                <div className="flex gap-4">
                  <MapPin className="mt-1 shrink-0 text-amber-400" size={21} />
                  <div>
                    <h4 className="text-sm font-semibold">Notre adresse</h4>
                    <p className="mt-2 text-sm leading-6 text-white/50">
                      Les Dunes Berbère
                      <br />
                      Zraoua Nouvelle, Tunisie
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Compass className="mt-1 shrink-0 text-amber-400" size={21} />
                  <div>
                    <h4 className="text-sm font-semibold">Nos coordonnées GPS</h4>
                    <p className="mt-2 text-sm text-white/50">
                      33.6687037, 9.814305
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="mt-1 shrink-0 text-amber-400" size={21} />
                  <div>
                    <h4 className="text-sm font-semibold">Horaires</h4>
                    <p className="mt-2 text-sm leading-6 text-white/50">
                      Contactez-nous pour connaître
                      <br />
                      nos horaires d'ouverture.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions button */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-12 flex items-center justify-center gap-3 rounded-full bg-amber-500 px-7 py-4 text-sm font-semibold text-black transition hover:bg-amber-400"
            >
              <Navigation size={18} />
              Obtenir l'itinéraire
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-[#21190f] lg:min-h-full"
          >
            {/* Map */}
            <iframe
              src={mapUrl}
              title="Localisation des Dunes Berbère sur Google Maps"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "480px",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />

            {/* Top location label */}
            <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#17140f]/90 p-4 shadow-xl backdrop-blur-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-black">
                <MapPin size={21} />
              </div>
              <div>
                <p className="text-sm font-semibold">Les Dunes Berbère</p>
                <p className="text-xs text-white/50">
                  Zraoua Nouvelle, Tunisie
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row"
        >
          <p className="text-center font-serif text-xl italic text-white/70 sm:text-left">
            "Chaque visite est une nouvelle histoire."
          </p>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-amber-400 transition hover:text-amber-300"
          >
            Voir sur Google Maps
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default LocationSection;
