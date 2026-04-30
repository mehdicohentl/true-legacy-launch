import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventSection from "@/components/EventSection";
import EventResourceLinks from "@/components/EventResourceLinks";
import { setPageMeta } from "@/lib/seo";

interface EventsPageProps {
  lang: "en" | "es";
}

const EventsPage = ({ lang }: EventsPageProps) => {
  useEffect(() => {
    setPageMeta(
      lang === "en"
        ? "Live Wellness Events & Zoom Calls | Biohacking & True Legacy"
        : "Eventos de Bienestar en Vivo & Zoom | Agua Kangen & True Legacy",
      lang === "en"
        ? "Join our live Zoom events. Learn about Kangen Water, EmGuarde EMF protection, and how real people are earning $5K\u2013$10K monthly with True Legacy. Global community events in 51+ countries."
        : "Únete a los eventos en vivo de True Legacy. Aprende sobre Agua Kangen, protección EMF EmGuarde, y cómo generar ingresos con True Legacy. Eventos de comunidad global en más de 51 países."
    );
  }, [lang]);
  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} />
      <div className="pt-20">
        <EventSection lang={lang} />
        <EventResourceLinks lang={lang} />
      </div>
      <Footer lang={lang} />
    </div>
  );
};

export default EventsPage;

