'use client'

import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Mi Portafolio
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about" className="hover:text-blue-400">
              Acerca de
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-400">
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;