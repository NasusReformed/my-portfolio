'use client';
import React from "react";

const navLinks = [
  { href: '#home', label: 'Inicio' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#education', label: 'Formación' },
  { href: '#contact', label: 'Contacto' },
];

const NavBar: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        el.setAttribute('tabindex', '-1');
        (el as HTMLElement).focus({ preventScroll: true });
      }
    }
  };

  return (
    <nav className="w-full bg-white/80 dark:bg-gray-900/80 shadow-sm py-2 px-4 fixed top-0 left-0 z-50 backdrop-blur">
      <ul className="flex justify-center items-center gap-6">
        {navLinks.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-2 py-1 rounded"
              aria-label={link.label}
              onClick={e => handleScroll(e, link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;