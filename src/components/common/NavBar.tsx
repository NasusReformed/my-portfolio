'use client';
import React from "react";

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About me' },
  { href: '#projects', label: 'Proyects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/90 dark:bg-gray-900/90 shadow-md rounded-full px-6 py-1 backdrop-blur flex justify-center items-center min-w-fit max-w-[90vw]">
      <ul className="flex justify-center items-center gap-4">
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