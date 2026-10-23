import Hero from '@/components/Hero';
import PlatsPhares from '@/components/PlatsPhares';
import Histoire from '@/components/Histoire';
import HorairesAdresse from '@/components/HorairesAdresse';
import BandeauWhatsApp from '@/components/BandeauWhatsApp';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <PlatsPhares />
      <Histoire />
      <HorairesAdresse />
      <BandeauWhatsApp />
    </div>
  );
}

