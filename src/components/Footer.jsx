import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react'
import { navLinks } from '../data/features'

const hours = [
  { day: 'Lun – Ven', time: '7h00 – 21h00' },
  { day: 'Samedi', time: '8h00 – 22h00' },
  { day: 'Dimanche', time: '8h00 – 18h00' },
]

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-coffee text-background/80 pt-20 pb-8 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <a href="#home" className="font-heading text-2xl text-background">
            <span className="text-gradient-gold font-semibold">Les Dunes</span> Berbères
          </a>
          <p className="mt-4 text-sm leading-relaxed text-background/60">
            Un café inspiré du Sahara — élaboré avec l’hospitalité amazighe, servi avec
            intention.
          </p>
          <div className="flex gap-3 mt-6">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-gradient-gold hover:text-coffee hover:border-transparent transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg text-background mb-5">Liens Rapides</h3>
          <ul className="space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-background/60 hover:text-gold transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg text-background mb-5">Horaires d’Ouverture</h3>
          <ul className="space-y-3 text-sm text-background/60">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg text-background mb-5">Contact</h3>
          <ul className="space-y-4 text-sm text-background/60">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
              <span>12 Rue des Sables, Marrakech, Maroc</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <span>+212 5 24 00 00 00</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <span>hello@lesdunesberberes.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-background/10 text-center text-xs text-background/40">
        © {new Date().getFullYear()} Les Dunes Berbères. Tous droits réservés.
      </div>
    </footer>
  )
}
