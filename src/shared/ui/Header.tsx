'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { ROUTES } from '@/shared/config';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-green-400 border-b-4 border-purple-700 shadow-[0_4px_0_0_#000]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <Link
          href="/"
          className="text-xl sm:text-2xl md:text-3xl font-extrabold text-purple-900 tracking-wider drop-shadow-[2px_2px_#000] truncate"
        >
          <span className="hidden sm:inline">Rick & Morty Portal</span>
          <span className="sm:hidden">R&M Portal</span>
        </Link>

        <nav className="hidden md:flex gap-4 lg:gap-6">
          {Object.values(ROUTES).map((item) => (
            <Link
              className="font-bold text-black hover:text-purple-900 transition-colors duration-200 px-2 py-1 rounded hover:bg-yellow-300"
              href={item}
              key={item}
            >
              {item.slice(1).toUpperCase()}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-purple-900 hover:text-black transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-yellow-300 border-t-2 border-purple-700 px-4 py-2">
          <div className="flex flex-col space-y-2">
            {Object.values(ROUTES).map((item) => (
              <Link
                className="font-bold text-purple-900 hover:text-black transition-colors duration-200 py-2 px-3 rounded hover:bg-green-300 border-b border-purple-200 last:border-b-0"
                href={item}
                key={item}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.slice(1).toUpperCase()}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
