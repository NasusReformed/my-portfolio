'use client'

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-stone-900 to-gray-950 text-gray-100 p-4 shadow-lg border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or name of portfolio */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide text-red-600 hover:text-red-500 transition duration-300">
          <span className="font-medieval">DracoDev</span>
        </Link>

        {/* Navigation links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/about" className="text-lg hover:text-red-400 transition duration-300 font-medium tracking-wide">
              <span className='font-medieval'>Acerca de</span>
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-lg hover:text-red-400 transition duration-300 font-medium tracking-wide">
              <span className='font-medieval'>Proyectos</span>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg hover:text-red-400 transition duration-300 font-medium tracking-wide">
              <span className='font-medieval'>Contacto</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}