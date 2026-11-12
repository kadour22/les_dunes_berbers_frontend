
import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Calendar,
  Clock,
  Users,
  Send,
  CheckCircle2,
  Coffee,
  RefreshCw,
  ArrowLeft
} from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL =
  "http://13.140.221.228:9000/reservations/reservations/create/";

const initialForm = {
  name: "",
  phone_number: "",
  date: "",
  time: "",
  number_of_guests: "",
};

const fields = [
  {
    id: "name",
    label: "Nom complet",
    type: "text",
    icon: User,
    placeholder: "Votre nom complet",
    autoComplete: "name",
    fullWidth: true,
  },
  {
    id: "phone_number",
    label: "Téléphone",
    type: "tel",
    icon: Phone,
    placeholder: "+216 XX XXX XXX",
    autoComplete: "tel",
  },
  {
    id: "date",
    label: "Date",
    type: "date",
    icon: Calendar,
  },
  {
    id: "time",
    label: "Heure",
    type: "time",
    icon: Clock,
  },
];

const inputStyle =
  "w-full rounded-xl border bg-[#17140f] py-4 pl-12 pr-4 text-sm text-white outline-none transition-all placeholder:text-stone-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20";

const Reservation = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (id) => (event) => {
    setForm((prev) => ({
      ...prev,
      [id]: event.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [id]: undefined,
      general: undefined,
    }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Veuillez indiquer votre nom.";
    }

    if (!form.phone_number.trim()) {
      nextErrors.phone_number =
        "Veuillez indiquer votre numéro de téléphone.";
    } else if (!/^[\d\s+()-]{6,}$/.test(form.phone_number.trim())) {
      nextErrors.phone_number = "Numéro de téléphone invalide.";
    }

    if (!form.date) {
      nextErrors.date = "Veuillez choisir une date.";
    } else {
      const selectedDate = new Date(`${form.date}T00:00:00`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        nextErrors.date = "Veuillez choisir une date future.";
      }
    }

    if (!form.time) {
      nextErrors.time = "Veuillez choisir une heure.";
    }

    if (!form.number_of_guests) {
      nextErrors.number_of_guests =
        "Veuillez indiquer le nombre de convives.";
    } else if (Number(form.number_of_guests) < 1) {
      nextErrors.number_of_guests =
        "Au moins un convive est requis.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setSubmitting(true);

      const reservationData = {
        name: form.name.trim(),
        phone_number: form.phone_number.trim(),
        date: form.date,
        time: form.time,
        number_of_guests: Number(form.number_of_guests),
      };

      await axios.post(API_URL, reservationData);

      setSubmitted(true);
    } catch (error) {
      console.error("Reservation error:", error.response?.data || error);

      const responseData = error.response?.data;

      if (responseData && typeof responseData === "object") {
        const backendErrors = {};

        Object.entries(responseData).forEach(([key, value]) => {
          backendErrors[key] = Array.isArray(value)
            ? value.join(" ")
            : typeof value === "string"
              ? value
              : "Veuillez vérifier cette information.";
        });

        setErrors(backendErrors);
      } else {
        setErrors({
          general: "Une erreur est survenue. Veuillez réessayer.",
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section
      id="reservation"
      className="relative overflow-hidden bg-[#17140f] px-4 py-24 text-white sm:px-8 md:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-20 -top-20 select-none font-serif text-[22rem] leading-none text-amber-500/[0.035]">
        ⵣ
      </div>
        <div className="mb-8 flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-3 rounded-full border border-stone-700 bg-[#211d17] px-5 py-3 text-sm font-medium text-stone-300 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-[#17140f]"
          >
            <ArrowLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Retour
          </button>
         </div>
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-amber-600/[0.06] blur-[100px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
            <Coffee size={16} />
            Les Dunes Berbère
          </span>

          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Réservez votre{" "}
            <span className="italic text-amber-500">table</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-400 sm:text-base">
            Offrez-vous un moment hors du temps. Préparez votre visite
            et laissez-nous prendre soin de votre expérience.
          </p>

          <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-amber-500" />
        </motion.div>

        {/* Reservation Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-3xl border border-stone-800 bg-[#211d17] shadow-2xl shadow-black/30"
        >
          {/* Card top decoration */}
          <div className="h-1.5 w-full bg-gradient-to-r from-amber-800 via-amber-400 to-amber-800" />

          <div className="p-6 sm:p-10 md:p-14">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center py-12 text-center"
                role="status"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10">
                  <CheckCircle2
                    size={40}
                    className="text-amber-500"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="mt-7 font-serif text-3xl font-bold">
                  Demande envoyée !
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-stone-400">
                  Merci {form.name.split(" ")[0]} ! Votre demande de
                  réservation a bien été reçue. Notre équipe vous
                  contactera pour confirmer votre table.
                </p>

                <div className="mt-8 rounded-2xl border border-stone-700 bg-[#17140f] p-6 text-left">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-amber-500">
                    Votre réservation
                  </p>

                  <div className="space-y-3 text-sm text-stone-300">
                    <p className="flex items-center gap-3">
                      <Calendar size={16} className="text-amber-500" />
                      {new Date(`${form.date}T00:00:00`).toLocaleDateString(
                        "fr-FR",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>

                    <p className="flex items-center gap-3">
                      <Clock size={16} className="text-amber-500" />
                      {form.time}
                    </p>

                    <p className="flex items-center gap-3">
                      <Users size={16} className="text-amber-500" />
                      {form.number_of_guests}{" "}
                      {Number(form.number_of_guests) > 1
                        ? "personnes"
                        : "personne"}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="mt-9 inline-flex items-center gap-2 rounded-full border border-amber-500/40 px-7 py-3 text-sm font-semibold text-amber-400 transition hover:bg-amber-500 hover:text-[#17140f]"
                >
                  <RefreshCw size={16} />
                  Nouvelle réservation
                </button>
              </motion.div>
            ) : (
              <>
                <div className="mb-9">
                  <h3 className="font-serif text-2xl font-semibold">
                    Vos informations
                  </h3>

                  <p className="mt-2 text-sm text-stone-500">
                    Remplissez les informations ci-dessous pour réserver.
                  </p>
                </div>

                {errors.general && (
                  <div
                    role="alert"
                    className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                  >
                    {errors.general}
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-7"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    {fields.map(
                      ({
                        id,
                        label,
                        type,
                        icon: Icon,
                        placeholder,
                        autoComplete,
                        fullWidth,
                      }) => (
                        <div
                          key={id}
                          className={fullWidth ? "sm:col-span-2" : ""}
                        >
                          <label
                            htmlFor={id}
                            className="mb-3 block text-xs font-semibold uppercase tracking-wider text-stone-400"
                          >
                            {label}
                          </label>

                          <div className="relative">
                            <Icon
                              size={17}
                              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-amber-500"
                            />

                            <input
                              id={id}
                              name={id}
                              type={type}
                              value={form[id]}
                              onChange={handleChange(id)}
                              placeholder={placeholder}
                              autoComplete={autoComplete}
                              aria-invalid={Boolean(errors[id])}
                              aria-describedby={
                                errors[id] ? `${id}-error` : undefined
                              }
                              className={`${inputStyle} ${
                                errors[id]
                                  ? "border-red-500"
                                  : "border-stone-700 hover:border-stone-600"
                              }`}
                            />
                          </div>

                          {errors[id] && (
                            <p
                              id={`${id}-error`}
                              className="mt-2 text-xs text-red-400"
                            >
                              {errors[id]}
                            </p>
                          )}
                        </div>
                      )
                    )}

                    {/* Number of guests */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="number_of_guests"
                        className="mb-3 block text-xs font-semibold uppercase tracking-wider text-stone-400"
                      >
                        Nombre de convives
                      </label>

                      <div className="relative">
                        <Users
                          size={17}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-amber-500"
                        />

                        <select
                          id="number_of_guests"
                          name="number_of_guests"
                          value={form.number_of_guests}
                          onChange={handleChange("number_of_guests")}
                          aria-invalid={Boolean(errors.number_of_guests)}
                          aria-describedby={
                            errors.number_of_guests
                              ? "number_of_guests-error"
                              : undefined
                          }
                          className={`${inputStyle} appearance-none ${
                            errors.number_of_guests
                              ? "border-red-500"
                              : "border-stone-700 hover:border-stone-600"
                          } ${
                            !form.number_of_guests ? "text-stone-500" : ""
                          }`}
                        >
                          <option value="" disabled>
                            Choisissez le nombre de convives
                          </option>

                          {Array.from({ length: 10 }, (_, i) => i + 1).map(
                            (number) => (
                              <option
                                key={number}
                                value={number}
                                className="bg-[#211d17] text-white"
                              >
                                {number}{" "}
                                {number > 1 ? "personnes" : "personne"}
                              </option>
                            )
                          )}
                        </select>
                      </div>

                      {errors.number_of_guests && (
                        <p
                          id="number_of_guests-error"
                          className="mt-2 text-xs text-red-400"
                        >
                          {errors.number_of_guests}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="border-t border-stone-800 pt-7">
                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={{ scale: submitting ? 1 : 1.015 }}
                      whileTap={{ scale: submitting ? 1 : 0.98 }}
                      className="flex w-full items-center justify-center gap-3 rounded-full bg-amber-500 px-8 py-4 text-sm font-bold tracking-wide text-[#17140f] shadow-lg shadow-amber-900/20 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#17140f]/30 border-t-[#17140f]" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send size={17} />
                          Confirmer la réservation
                        </>
                      )}
                    </motion.button>

                    <p className="mt-4 text-center text-xs leading-6 text-stone-500">
                      Notre équipe vous contactera pour confirmer
                      votre réservation.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reservation;
