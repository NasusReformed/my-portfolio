'use client';

import React, { useState } from "react";

const actions = [
  { href: "#home", label: "Inicio", icon: "🏠" },
  { href: "#about", label: "Sobre mí", icon: "👤" },
  { href: "#projects", label: "Proyectos", icon: "💻" },
  { href: "#skills", label: "Habilidades", icon: "🛠️" },
  { href: "#experience", label: "Experiencia", icon: "💼" },
  { href: "#education", label: "Formación", icon: "🎓" },
  { href: "#contact", label: "Contacto", icon: "✉️" },
];

export default function SpeedDial() {
  const [open, setOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {actions.map((action, i) => (
        <a
          key={action.href}
          href={action.href}
          className={`flex items-center mb-2 px-3 py-2 rounded-full bg-white text-gray-800 shadow transition-all duration-300
            ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
          `}
          style={{ transitionDelay: `${i * 60}ms` }}
          onClick={e => handleScroll(e, action.href)}
        >
          <span className="mr-2">{action.icon}</span>
          <span className="font-medium">{action.label}</span>
        </a>
      ))}
      <button
        className={`w-14 h-14 rounded-full bg-blue-600 text-white text-3xl flex items-center justify-center shadow-lg hover:bg-blue-700 transition
          ${open ? "rotate-45" : ""}
        `}
        aria-label="Abrir menú rápido"
        onClick={() => setOpen((v) => !v)}
      >
        +
      </button>
    </div>
  );
}