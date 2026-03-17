import { motion } from "framer-motion";
import combinedLogo from "@/assets/combined-logo.png";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavbarProps {
  lang: "en" | "es";
}

const Navbar = ({ lang }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const landingPath = lang === "en" ? "/global" : "/latam";
  const isOnLandingPage = location.pathname === landingPath;
  
  const links = lang === "en"
    ? [
        { id: "water", label: "Kangen Water" },
        { id: "story", label: "Mehdi's Story" },
        { id: "emguarde", label: "EmGuarde" },
        { id: "resources", label: "Resources" },
        { id: "join", label: "Build With Us" },
      ]
    : [
        { id: "water", label: "El Agua" },
        { id: "story", label: "Historia" },
        { id: "emguarde", label: "EmGuarde" },
        { id: "resources", label: "Recursos" },
        { id: "join", label: "Únete" },
      ];

  const eventLink = lang === "en" ? "/global/events" : "/latam/events";
  const productsLink = lang === "en" ? "/global/products" : "/latam/products";
  const resourcesLink = lang === "en" ? "/global/resources" : "/latam/resources";

  const scrollTo = (id: string) => {
    if (isOnLandingPage) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`${landingPath}#${id}`);
    }
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-border/50"
    >
      <div className="container mx-auto flex items-center justify-between py-3.5 px-4">
        <div className="flex items-center gap-4">
          <a href="/"><img src={combinedLogo} alt="Mehdi Cohen True Legacy CEO Kangen water wealth health legacy mehdicohen.com" className="h-14 md:h-18 w-auto" /></a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-xs font-mono font-bold text-foreground/70 hover:text-foreground transition-colors uppercase tracking-[0.15em] relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <a
            href={productsLink}
            className="text-xs font-mono font-bold text-foreground/70 hover:text-foreground transition-colors uppercase tracking-[0.15em] relative group"
          >
            {lang === "en" ? "Products" : "Productos"}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href={resourcesLink}
            className="text-xs font-mono font-bold text-foreground/70 hover:text-foreground transition-colors uppercase tracking-[0.15em] relative group"
          >
            {lang === "en" ? "Resources" : "Recursos"}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href={eventLink}
            className="text-xs font-mono font-bold text-accent hover:text-accent/80 transition-colors uppercase tracking-[0.15em] relative group"
          >
            {lang === "en" ? "Live Event" : "Evento"}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={lang === "en" ? "/latam" : "/global"}
            className="flag-hover cursor-pointer"
            title={lang === "en" ? "Cambiar a Español" : "Switch to English"}
          >
            <span className="text-sm font-mono font-bold text-foreground uppercase tracking-wider">
              {lang === "en" ? "LATAM" : "EN"}
            </span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border/50 px-4 py-4 space-y-3"
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left text-base font-body font-bold text-foreground/80 hover:text-foreground transition-colors uppercase tracking-[0.1em] py-3"
            >
              {link.label}
            </button>
          ))}
          <a
            href={productsLink}
            className="block w-full text-left text-base font-body font-bold text-foreground/80 hover:text-foreground transition-colors uppercase tracking-[0.1em] py-3"
          >
            {lang === "en" ? "Products" : "Productos"}
          </a>
          <a
            href={resourcesLink}
            className="block w-full text-left text-base font-body font-bold text-foreground/80 hover:text-foreground transition-colors uppercase tracking-[0.1em] py-3"
          >
            {lang === "en" ? "Resources" : "Recursos"}
          </a>
          <a
            href={eventLink}
            className="block w-full text-left text-base font-body font-bold text-accent hover:text-accent/80 transition-colors uppercase tracking-[0.1em] py-3"
          >
            {lang === "en" ? "🔴 Live Event" : "🔴 Evento"}
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
