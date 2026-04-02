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
        ? "Live Wellness Events & Zoom Calls | Kangen Water & True Legacy | Mehdi Cohen"
        : "Eventos de Bienestar en Vivo & Zoom | Agua Kangen & True Legacy | Mehdi Cohen",
      lang === "en"
        ? "Join Mehdi Cohen's live Zoom events. Learn about Kangen Water, EmGuarde EMF protection, and how to build income with True Legacy. Global community events in 51+ countries."
        : "Únete a los eventos en vivo de Mehdi Cohen. Aprende sobre Agua Kangen, protección EMF EmGuarde, y cómo generar ingresos con True Legacy. Eventos de comunidad global en más de 51 países."
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

