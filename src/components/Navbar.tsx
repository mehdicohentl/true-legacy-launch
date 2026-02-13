import { motion } from "framer-motion";
import trueLegacyLogo from "@/assets/true-legacy-logo.png";
import mehdiLogo from "@/assets/mehdi-logo.png";

interface NavbarProps {
  lang: "en" | "es";
}

const Navbar = ({ lang }: NavbarProps) => {
  const t = {
    en: { water: "Kangen Water", emguarde: "EmGuarde", about: "About", join: "Join The Team", story: "My Story" },
    es: { water: "Agua Kangen", emguarde: "EmGuarde", about: "Acerca de", join: "Únete al Equipo", story: "Mi Historia" },
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-3">
          <img src={trueLegacyLogo} alt="True Legacy" className="h-10 w-auto" />
          <div className="h-6 w-px bg-border" />
          <img src={mehdiLogo} alt="Mehdi Cohen" className="h-8 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-6">
          {Object.entries(t[lang]).map(([key, label]) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="text-sm font-body font-semibold text-muted-foreground hover:text-accent transition-colors uppercase tracking-widest"
            >
              {label}
            </button>
          ))}
        </div>

        <a
          href="https://information.enagic.com/home/article/TRAkt4bArepUdoS2JU9t"
          target="_blank"
          rel="noopener noreferrer"
          className="flag-hover cursor-pointer"
        >
          <span className="text-3xl" role="img" aria-label="American Flag">🇺🇸</span>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
