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
            {/* Logo or name of the portfolio */}
            <Link href="/" className="text-white text-xl font-bold">
                Ignacio Quevedo
            </Link>
        </div>

    </nav>
  );
}
