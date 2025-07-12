'use client'

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo o nombre del portafolio */}
        <Link href="/" className="text-white text-2xl font-bold hover:text-blue-400 transition-colors duration-300">
          Ignacio Quevedo
        </Link>

        {/* Botón del menú para móviles */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>

        {/* Enlaces de navegación - Escritorio */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg">
            Inicio
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg">
            Acerca de
          </Link>
          <Link href="/projects" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg">
            Proyectos
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg">
            Contacto
          </Link>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-700 rounded-md">
          <Link
            href="/"
            onClick={toggleMenu}
            className="block py-2 px-4 text-white hover:bg-gray-600 transition-colors duration-300 rounded-md"
          >
            Inicio
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="block py-2 px-4 text-white hover:bg-gray-600 transition-colors duration-300 rounded-md"
          >
            Acerca de
          </Link>
          <Link
            href="/projects"
            onClick={toggleMenu}
            className="block py-2 px-4 text-white hover:bg-gray-600 transition-colors duration-300 rounded-md"
          >
            Proyectos
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="block py-2 px-4 text-white hover:bg-gray-600 transition-colors duration-300 rounded-md"
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
};
