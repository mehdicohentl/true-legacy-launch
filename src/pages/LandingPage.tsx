import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { setPageMeta } from "@/lib/seo";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WaterSection from "@/components/WaterSection";
import DuoPackageSection from "@/components/DuoPackageSection";
import JoinTeamSection from "@/components/JoinTeamSection";
import ThankYouSection from "@/components/ThankYouSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

interface LandingPageProps {
  lang: "en" | "es";
}

const LandingPage = ({ lang }: LandingPageProps) => {
  const location = useLocation();

  useEffect(() => {
    setPageMeta(
      lang === "en"
        ? "Mehdi Cohen | CEO — Kangen Water, EmGuarde & True Legacy | Wealth, Health & Legacy Worldwide"
        : "Mehdi Cohen | CEO — Agua Kangen, EmGuarde & True Legacy | Riqueza, Salud y Legado Mundial",
      lang === "en"
        ? "Welcome to Mehdi Cohen's official home — CEO and founder of True Legacy. Discover Kangen Water, EmGuarde EMF protection, and how to build wealth, health, and legacy with a global team in 170+ countries."
        : "Bienvenido al sitio oficial de Mehdi Cohen — CEO y fundador de True Legacy. Descubre Agua Kangen, protección EMF EmGuarde y cómo construir riqueza, salud y legado con un equipo global en más de 170 países."
    );
  }, [lang]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} />
      <HeroSection lang={lang} />
      <AboutSection lang={lang} />
      <DuoPackageSection lang={lang} />
      <WaterSection lang={lang} />

      {/* Event CTA strip */}
      <section className="py-10 bg-card/50 border-y border-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/3 via-transparent to-accent/3" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              <p className="font-display font-black text-base md:text-lg text-foreground">
                {lang === "en" ? "Live Zoom Event — Improve Your Health and Income" : "Evento en Vivo — Mejora tu Salud e Ingresos"}
              </p>
            </div>
            <motion.a
              href={lang === "en" ? "/global/events" : "/latam/events"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-body font-black text-sm uppercase tracking-[0.1em] bg-accent text-accent-foreground shadow-gold transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              {lang === "en" ? "See Event Details" : "Ver Detalles del Evento"}
            </motion.a>
          </motion.div>
        </div>
      </section>



      {/* Booking widget moved to ThankYouSection to avoid duplicate empty space */}

      <JoinTeamSection lang={lang} />
      <ThankYouSection lang={lang} />
      <ResourcesSection lang={lang} />
      <Footer lang={lang} />
    </div>
  );
};

export default LandingPage;
