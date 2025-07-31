'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (!isHomePage) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      el.setAttribute('tabindex', '-1');
      (el as HTMLElement).focus({ preventScroll: true });
    }
  };

  const getHref = (href: string) => {
    return isHomePage ? href : `/${href}`;
  };

  return (
    <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 bg-white/70 dark:bg-gray-900/80 shadow-xl rounded-full px-4 py-1 backdrop-blur-lg flex justify-center items-center min-w-fit max-w-[90vw] border border-gray-200 dark:border-gray-800">
      <ul className="flex justify-center items-center gap-5">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={getHref(link.href)}
              className="text-base font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-1 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label={link.label}
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
