"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/collection', label: 'Collection' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200/80 bg-white/80 shadow-sm backdrop-blur-sm">
      <div className="relative mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
        {/* Logo */}
        {/* NOTE: Approximating script font with italic serif as custom fonts are not specified */}
        <Link href="/" className="font-serif text-2xl italic text-primary">
          Geeta Collection
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-base font-medium text-text-dark transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden items-center space-x-5 md:flex">
          <button aria-label="Search" className="text-text-dark transition-colors hover:text-primary">
            <Search size={22} />
          </button>
          <button aria-label="Account" className="text-text-dark transition-colors hover:text-primary">
            <User size={22} />
          </button>
          <button aria-label="Shopping Cart" className="relative text-text-dark transition-colors hover:text-primary">
            <ShoppingCart size={22} />
            <span className="absolute -top-1.5 -right-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
              3
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text-dark" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <nav className="flex flex-col space-y-2 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-md px-4 py-2 text-base font-medium text-text-dark hover:bg-light-pink hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center justify-center space-x-8 border-t border-gray-200 pt-4">
                <button aria-label="Search" className="text-text-dark transition-colors hover:text-primary">
                  <Search size={22} />
                </button>
                <button aria-label="Account" className="text-text-dark transition-colors hover:text-primary">
                  <User size={22} />
                </button>
                <button aria-label="Shopping Cart" className="relative text-text-dark transition-colors hover:text-primary">
                  <ShoppingCart size={22} />
                  <span className="absolute -top-1.5 -right-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                    3
                  </span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;