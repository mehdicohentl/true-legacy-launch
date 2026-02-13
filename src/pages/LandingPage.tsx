import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WaterSection from "@/components/WaterSection";
import EmGuardeSection from "@/components/EmGuardeSection";
import JoinTeamSection from "@/components/JoinTeamSection";
import ThankYouSection from "@/components/ThankYouSection";
import Footer from "@/components/Footer";

interface LandingPageProps {
  lang: "en" | "es";
}

const LandingPage = ({ lang }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} />
      <HeroSection lang={lang} />
      <AboutSection lang={lang} />
      <WaterSection lang={lang} />
      <EmGuardeSection lang={lang} />
      <JoinTeamSection lang={lang} />
      <ThankYouSection lang={lang} />
      <Footer lang={lang} />
    </div>
  );
};

export default LandingPage;
