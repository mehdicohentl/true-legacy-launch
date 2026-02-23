import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventSection from "@/components/EventSection";

interface EventsPageProps {
  lang: "en" | "es";
}

const EventsPage = ({ lang }: EventsPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} />
      <div className="pt-20">
        <EventSection lang={lang} />
      </div>
      <Footer lang={lang} />
    </div>
  );
};

export default EventsPage;
