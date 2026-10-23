import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BoutonWhatsAppFlottant from '@/components/BoutonWhatsAppFlottant';
import config from '@/data/config.json';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const metadata = {
  title: `${config.nom} - ${config.slogan}`,
  description: `${config.description} Situé au quartier ${config.quartier} à ${config.ville}, ${config.pays}.`,
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-blanc text-noir antialiased font-sans selection:bg-rouge selection:text-blanc min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BoutonWhatsAppFlottant />
      </body>
    </html>
  );
}

