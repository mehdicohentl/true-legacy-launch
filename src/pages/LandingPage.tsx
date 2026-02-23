import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WaterSection from "@/components/WaterSection";
import EmGuardeSection from "@/components/EmGuardeSection";
import JoinTeamSection from "@/components/JoinTeamSection";
import ThankYouSection from "@/components/ThankYouSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

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
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive" />
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

      <JoinTeamSection lang={lang} />
      <ThankYouSection lang={lang} />
      <Footer lang={lang} />

      {/* Floating WhatsApp button – Spanish/LATAM only */}
      {lang === "es" && (
        <a
          href="https://wa.me/+573001844049"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-200"
        >
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current">
            <path d="M16.004 2.002c-7.72 0-13.996 6.276-13.996 13.996 0 2.468.655 4.878 1.9 6.99L2 30l7.212-1.89A13.94 13.94 0 0016.004 30c7.72 0 13.996-6.276 13.996-13.998S23.724 2.002 16.004 2.002zm0 25.594a11.58 11.58 0 01-5.908-1.62l-.424-.252-4.39 1.15 1.172-4.276-.276-.44a11.567 11.567 0 01-1.776-6.16c0-6.396 5.204-11.6 11.602-11.6 6.398 0 11.6 5.204 11.6 11.6 0 6.398-5.202 11.598-11.6 11.598zm6.36-8.686c-.348-.174-2.062-1.018-2.382-1.134-.32-.116-.552-.174-.784.174-.232.348-.9 1.134-1.102 1.366-.204.232-.406.262-.754.088-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.062-1.936-2.41-.204-.348-.022-.536.153-.71.158-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.03-.61-.088-.174-.784-1.89-.1074-2.586-.282-.68-.57-.588-.784-.598l-.668-.012c-.232 0-.61.088-.928.436-.32.348-1.218 1.19-1.218 2.9s1.248 3.364 1.422 3.596c.174.232 2.456 3.75 5.95 5.26.832.358 1.482.572 1.988.732.836.266 1.596.228 2.198.138.67-.1 2.062-.844 2.352-1.66.29-.814.29-1.514.204-1.66-.088-.144-.32-.232-.668-.406z" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default LandingPage;
