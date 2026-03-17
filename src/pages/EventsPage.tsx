import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventSection from "@/components/EventSection";
import EventResourceLinks from "@/components/EventResourceLinks";
import EventLeadFormModal from "@/components/EventLeadFormModal";

interface EventsPageProps {
  lang: "en" | "es";
}

const EventsPage = ({ lang }: EventsPageProps) => {
  const [leadFormOpen, setLeadFormOpen] = useState(false);
  const eventType = lang === "en" ? "GLOBAL" : "LATAM";

  const openLeadForm = () => setLeadFormOpen(true);
  const closeLeadForm = () => setLeadFormOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} />
      <div className="pt-20">
        <EventSection lang={lang} onOpenLeadForm={openLeadForm} />
        <EventResourceLinks lang={lang} onOpenLeadForm={openLeadForm} />
      </div>
      <Footer lang={lang} />
      <EventLeadFormModal
        isOpen={leadFormOpen}
        onClose={closeLeadForm}
        eventType={eventType}
        lang={lang}
      />
    </div>
  );
};

export default EventsPage;

