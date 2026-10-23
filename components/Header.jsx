'use client';

import { useState } from 'react';
import Link from 'next/link';
import config from '@/data/config.json';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { IconWhatsApp, IconBurger, IconClose } from './Icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = getWhatsAppLink("Bonjour Recette d'Afrique, je souhaite passer une commande.");

  const navLinks = [
    { label: 'Accueil', href: '#' },
    { label: 'Menu', href: '#menu-phares' },
    { label: 'À propos', href: '#histoire' },
    { label: 'Contact', href: '#contact-info' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-noir text-blanc shadow-md">
      <div className="h-20 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo / Nom */}
        <Link href="#" className="flex items-center gap-2">
          <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-blanc">
            {config.nom}
          </span>
          <span className="inline-block px-2 py-0.5 rounded-full bg-noir border border-blanc/20 text-blanc text-xs font-semibold uppercase tracking-wider">
            {config.ville}
          </span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                link.label === 'Accueil'
                  ? 'bg-blanc/10 text-blanc font-bold'
                  : 'text-blanc/80 hover:text-blanc hover:bg-blanc/5 font-medium'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Burger Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-rouge text-blanc text-sm font-semibold hover:opacity-90 active:scale-95 transition-all shadow-sm"
          >
            <IconWhatsApp className="w-4 h-4 mr-2" />
            <span>Commander sur WhatsApp</span>
          </a>

          {/* Bouton Burger Mobile */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-blanc hover:bg-blanc/10 focus:outline-none"
            aria-label="Ouvrir le menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <IconClose className="w-6 h-6" /> : <IconBurger className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Tiroir (optimisé pour 360px+) */}
      {isOpen && (
        <div className="lg:hidden bg-noir border-t border-blanc/10 px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-base text-blanc/90 hover:text-blanc hover:bg-blanc/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-rouge text-blanc text-sm font-semibold hover:opacity-90 transition-all shadow-sm"
            >
              <IconWhatsApp className="w-4 h-4 mr-2" />
              <span>Commander sur WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

