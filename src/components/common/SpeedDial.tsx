'use client';

import React, { useState } from 'react';

const actions = [
  { href: '#home', label: 'Inicio', icon: '🏠' },
  { href: '#about', label: 'Sobre mí', icon: '👤' },
  { href: '#projects', label: 'Proyectos', icon: '💻' },
  { href: '#skills', label: 'Habilidades', icon: '🛠️' },
  { href: '#experience', label: 'Experiencia', icon: '💼' },
  { href: '#education', label: 'Formación', icon: '🎓' },
  { href: '#contact', label: 'Contacto', icon: '✉️' },
];

export default function SpeedDial() {
  const [open, setOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        el.setAttribute('tabindex', '-1');
        (el as HTMLElement).focus({ preventScroll: true });
      }
      setOpen(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {actions.map((action, i) => (
        <a
          key={action.href}
          href={action.href}
          className={`flex items-center mb-2 px-4 py-2 rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-gray-100 shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800
            ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
          `}
          style={{ transitionDelay: `${i * 60}ms` }}
          onClick={(e) => handleScroll(e, action.href)}
          aria-label={action.label}
        >
          <span className="mr-2 text-xl">{action.icon}</span>
          <span className="font-medium">{action.label}</span>
        </a>
      ))}
      <button
        className={`w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 text-white text-4xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 border-4 border-white dark:border-gray-900
          ${open ? 'rotate-45' : ''}
        `}
        aria-label="Abrir menú rápido"
        onClick={() => setOpen((v) => !v)}
      >
        +
      </button>
    </div>
  );
}
