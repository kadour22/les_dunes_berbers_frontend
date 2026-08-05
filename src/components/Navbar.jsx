import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useScrollPosition } from "../hooks/useScrollPosition";

const navLinks = [
  { label: "Accueil", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "Réservation", path: "/reservation" },
];

export default function Navbar() {
  const scrolled = useScrollPosition(40);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink
  to="/"
  className="font-heading text-2xl md:text-3xl tracking-wide text-coffee flex items-center gap-2"
>
  <span className="text-gradient-gold font-semibold">
    Les Dunes
  </span>

  <span className="text-coffee/80 italic">
    Berbères
  </span>
</NavLink>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition font-medium ${
                    isActive
                      ? "text-yellow-600"
                      : "text-stone-700 hover:text-yellow-600"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-full hover:bg-gray-100">
            <ShoppingBag size={22} />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-yellow-500 text-white text-xs flex items-center justify-center">
              2
            </span>
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-md"
          >
            <ul className="flex flex-col py-5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-6 py-3 ${
                        isActive
                          ? "text-yellow-600 font-semibold"
                          : "text-stone-700"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}