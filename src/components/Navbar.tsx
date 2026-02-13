import { motion } from "framer-motion";
import trueLegacyLogo from "@/assets/true-legacy-logo.png";
import mehdiLogo from "@/assets/mehdi-logo.png";
import { useState } from "react";

interface NavbarProps {
  lang: "en" | "es";
}

const Navbar = ({ lang }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const links = lang === "en"
    ? [
        { id: "water", label: "The Water" },
        { id: "story", label: "Mehdi's Story" },
        { id: "emguarde", label: "EmGuarde" },
        { id: "join", label: "Build With Us" },
      ]
    : [
        { id: "water", label: "El Agua" },
        { id: "story", label: "Historia" },
        { id: "emguarde", label: "EmGuarde" },
        { id: "join", label: "Únete" },
      ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
          <img src={trueLegacyLogo} alt="True Legacy" className="h-12 md:h-14 w-auto" />
          <div className="h-7 w-px bg-accent/30" />
          <img src={mehdiLogo} alt="Mehdi Cohen" className="h-10 md:h-12 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-[11px] font-mono font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.2em] relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://information.enagic.com/home/article/TRAkt4bArepUdoS2JU9t"
            target="_blank"
            rel="noopener noreferrer"
            className="flag-hover cursor-pointer"
          >
            <span className="text-2xl" role="img" aria-label="American Flag">🇺🇸</span>
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
              className="block w-full text-left text-sm font-mono font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.15em] py-2"
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
