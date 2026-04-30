import { motion } from "framer-motion";
import combinedLogo from "@/assets/combined-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  lang: "en" | "es";
}

const Navbar = ({ lang }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const homeLink = lang === "en" ? "/global" : "/latam";
  const eventLink = lang === "en" ? "/global/events" : "/latam/events";
  const productsLink = lang === "en" ? "/global/products" : "/latam/products";
  const resourcesLink = lang === "en" ? "/global/resources" : "/latam/resources";
  const duoLink = lang === "en" ? "/global/duopackage" : "/latam/latam-duo-package";
  const joinTeamUrl = lang === "en"
    ? "https://form.jotform.com/260564894519066"
    : "https://form.jotform.com/260246489849069";

  const whatsappEn = "https://wa.me/18649072149";
  const whatsappLatam = "https://wa.me/573001844049";
  const contactLink = lang === "en" ? whatsappEn : whatsappLatam;

  type NavLink = {
    to?: string;
    href?: string;
    label: string;
    highlight?: boolean;
    cta?: boolean;
    accent?: boolean;
    whatsapp?: boolean;
  };

  const navLinks: NavLink[] = lang === "en"
    ? [
        { to: homeLink, label: "Home" },
        { to: duoLink, label: "Duo Package", highlight: true },
        { to: productsLink, label: "Products" },
        { to: resourcesLink, label: "Resources" },
        { href: joinTeamUrl, label: "Join the Team", cta: true },
        { to: eventLink, label: "Live Event", accent: true },
        { href: contactLink, label: "Contact", whatsapp: true },
      ]
    : [
        { to: homeLink, label: "Inicio" },
        { to: duoLink, label: "Paquete Duo", highlight: true },
        { to: productsLink, label: "Productos" },
        { to: resourcesLink, label: "Recursos" },
        { href: joinTeamUrl, label: "Únete al Equipo", cta: true },
        { to: eventLink, label: "Evento", accent: true },
        { href: contactLink, label: "Contacto", whatsapp: true },
      ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-border/50"
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-4">
          <Link to="/"><img src={combinedLogo} alt="True Legacy - Wealth, Health & Legacy" className="h-12 md:h-14 w-auto" /></Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link) =>
            link.href ? (
              link.whatsapp ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-lg border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366]/10 transition-colors"
                >
                  <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 14.4l-2-1c-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.3.3-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5.3-.4c.1-.1.1-.3 0-.4l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.3 0-.2-.2-.3-.4-.4z"/></svg>
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    link.cta
                      ? "text-xs font-mono font-bold transition-colors uppercase tracking-[0.15em] text-foreground/70 hover:text-foreground px-3 py-1"
                      : "text-xs font-mono font-bold transition-colors uppercase tracking-[0.15em] relative group text-accent border border-accent/50 px-3 py-1 rounded-none hover:bg-accent/10"
                  }
                >
                  {link.label}
                </a>
              )
            ) : (
              <Link
                key={link.to}
                to={link.to!}
                className={`text-xs font-mono font-bold transition-colors uppercase tracking-[0.15em] ${
                  link.accent
                    ? "text-accent border border-accent/50 px-3 py-1 rounded-none hover:bg-accent/10"
                    : link.highlight
                    ? "text-accent/90 hover:text-accent"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
                {!link.accent && (
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                )}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to={lang === "en" ? "/latam" : "/global"}
            className="flag-hover cursor-pointer"
            title={lang === "en" ? "Cambiar a Español" : "Switch to English"}
          >
            <span className="text-xs font-mono font-bold text-foreground uppercase tracking-wider">
              {lang === "en" ? "LATAM" : "EN"}
            </span>
          </Link>

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

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border/50 px-4 py-3"
        >
          {navLinks.map((link) =>
            link.href ? (
              link.whatsapp ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 w-full text-left text-sm font-body font-bold transition-colors uppercase tracking-[0.1em] py-2.5 border-b border-border/20 last:border-0 text-[#25D366] hover:text-[#20BD5A]"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 14.4l-2-1c-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.3.3-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5.3-.4c.1-.1.1-.3 0-.4l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.3 0-.2-.2-.3-.4-.4z"/></svg>
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className={
                    link.cta
                      ? "block w-full text-left text-sm font-body font-bold transition-colors uppercase tracking-[0.1em] py-2.5 text-foreground/80 hover:text-foreground"
                      : link.accent
                      ? "block w-full text-left text-sm font-body font-bold transition-colors uppercase tracking-[0.1em] py-2.5 text-accent border border-accent/50 rounded-none"
                      : "block w-full text-left text-sm font-body font-bold transition-colors uppercase tracking-[0.1em] py-2.5 text-accent hover:text-accent/80"
                  }
                >
                  {link.label}
                </a>
              )
            ) : (
              <Link
                key={link.to}
                to={link.to!}
                onClick={() => setMenuOpen(false)}
                className={`block w-full text-left text-sm font-body font-bold transition-colors uppercase tracking-[0.1em] py-2.5 border-b border-border/20 last:border-0 ${
                  link.accent
                    ? "text-accent hover:text-accent/80"
                    : link.highlight
                    ? "text-accent/90 hover:text-accent"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
