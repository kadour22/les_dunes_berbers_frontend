import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Phone, Calendar, Clock, Users, Send, CheckCircle2 } from 'lucide-react'

const initialForm = {
  name: '',
  phone_number: '',
  date: '',
  time: '',
  number_of_guests: '',
}

const fields = [
  {
    id: 'name',
    label: 'Nom complet',
    type: 'text',
    icon: User,
    placeholder: 'Votre nom',
    autoComplete: 'name',
  },
  {
    id: 'phone_number',
    label: 'Numéro de téléphone',
    type: 'tel',
    icon: Phone,
    placeholder: '+212 6 00 00 00 00',
    autoComplete: 'tel',
  },
  {
    id: 'date',
    label: 'Date',
    type: 'date',
    icon: Calendar,
  },
  {
    id: 'time',
    label: 'Heure',
    type: 'time',
    icon: Clock,
  },
]

export default function Reservation() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (id) => (e) => {
    setForm((prev) => ({ ...prev, [id]: e.target.value }))
    setErrors((prev) => ({ ...prev, [id]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Veuillez indiquer votre nom.'
    if (!form.phone_number.trim()) {
      next.phone_number = 'Veuillez indiquer votre numéro de téléphone.'
    } else if (!/^[\d\s+()-]{6,}$/.test(form.phone_number.trim())) {
      next.phone_number = 'Numéro de téléphone invalide.'
    }
    if (!form.date) next.date = 'Veuillez choisir une date.'
    if (!form.time) next.time = 'Veuillez choisir une heure.'
    if (!form.number_of_guests) {
      next.number_of_guests = 'Veuillez indiquer le nombre de convives.'
    } else if (Number(form.number_of_guests) < 1) {
      next.number_of_guests = 'Au moins 1 convive est requis.'
    }
    return next
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validation = validate()
    setErrors(validation)
    if (Object.keys(validation).length > 0) return

    setSubmitting(true)
    // Simulate a network request — replace with a real API call when ready.
    await new Promise((resolve) => setTimeout(resolve, 900))
    setSubmitting(false)
    setSubmitted(true)
  }

  const handleReset = () => {
    setForm(initialForm)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <section
      id="reservation"
      className="relative py-28 md:py-36 px-6 lg:px-10 bg-coffee/[0.03] overflow-hidden"
    >
      <span
        aria-hidden="true"
        className="absolute -right-16 -top-10 text-[18rem] leading-none font-heading text-coffee/[0.04] select-none"
      >
        ⵣ
      </span>

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="uppercase tracking-[0.3em] text-sand text-xs font-semibold">
            Réservation
          </span>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl text-coffee">
            Réservez votre <span className="text-gradient-gold italic">table</span>
          </h2>
          <p className="mt-4 text-coffee/60 max-w-xl mx-auto leading-relaxed">
            Offrez-vous un moment hors du temps. Remplissez le formulaire ci-dessous et notre
            équipe confirmera votre réservation dans les plus brefs délais.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="rounded-[2rem] bg-white shadow-card p-8 sm:p-12"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center py-10"
              role="status"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-glow">
                <CheckCircle2 className="w-8 h-8 text-coffee" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-heading text-2xl text-coffee">
                Réservation confirmée !
              </h3>
              <p className="mt-2 text-coffee/60 max-w-sm">
                Merci, {form.name.split(' ')[0]}. Nous vous attendons le{' '}
                {new Date(form.date).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}{' '}
                à {form.time} pour {form.number_of_guests}{' '}
                {Number(form.number_of_guests) > 1 ? 'personnes' : 'personne'}.
              </p>
              <button
                onClick={handleReset}
                className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full border border-coffee/15 text-coffee text-sm font-semibold uppercase tracking-wide hover:bg-coffee/5 transition-colors"
              >
                Nouvelle réservation
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {fields.map(({ id, label, type, icon: Icon, placeholder, autoComplete }) => (
                  <div key={id} className={id === 'name' ? 'sm:col-span-2' : ''}>
                    <label
                      htmlFor={id}
                      className="block text-xs uppercase tracking-wide font-semibold text-coffee/60 mb-2"
                    >
                      {label}
                    </label>
                    <div className="relative">
                      <Icon
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sand pointer-events-none"
                        aria-hidden="true"
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
                        aria-describedby={errors[id] ? `${id}-error` : undefined}
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-background border text-sm text-coffee placeholder:text-coffee/30 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
                          errors[id] ? 'border-red-400' : 'border-coffee/10 focus:border-gold'
                        }`}
                      />
                    </div>
                    {errors[id] && (
                      <p id={`${id}-error`} className="mt-1.5 text-xs text-red-500">
                        {errors[id]}
                      </p>
                    )}
                  </div>
                ))}

                <div className="sm:col-span-2">
                  <label
                    htmlFor="number_of_guests"
                    className="block text-xs uppercase tracking-wide font-semibold text-coffee/60 mb-2"
                  >
                    Nombre de convives
                  </label>
                  <div className="relative">
                    <Users
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sand pointer-events-none"
                      aria-hidden="true"
                    />
                    <select
                      id="number_of_guests"
                      name="number_of_guests"
                      value={form.number_of_guests}
                      onChange={handleChange('number_of_guests')}
                      aria-invalid={Boolean(errors.number_of_guests)}
                      aria-describedby={
                        errors.number_of_guests ? 'number_of_guests-error' : undefined
                      }
                      className={`w-full appearance-none pl-11 pr-4 py-3.5 rounded-xl bg-background border text-sm text-coffee focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
                        errors.number_of_guests
                          ? 'border-red-400'
                          : 'border-coffee/10 focus:border-gold'
                      }`}
                    >
                      <option value="" disabled>
                        Choisissez le nombre de convives
                      </option>
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          {n} {n > 1 ? 'personnes' : 'personne'}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.number_of_guests && (
                    <p id="number_of_guests-error" className="mt-1.5 text-xs text-red-500">
                      {errors.number_of_guests}
                    </p>
                  )}
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: submitting ? 1 : 1.02 }}
                whileTap={{ scale: submitting ? 1 : 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-coffee font-semibold text-sm tracking-wide shadow-glow disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-coffee/40 border-t-coffee animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Confirmer la réservation
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}