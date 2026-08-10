import combinedLogo from "@/assets/combined-logo.png";
import { Youtube, Instagram, Facebook, Mail, MessageCircle, Linkedin } from "lucide-react";

interface FooterProps {
  lang: "en" | "es";
}

const Footer = ({ lang }: FooterProps) => {
  const linkedinUrl = lang === "en"
    ? "https://www.linkedin.com/in/mehdicohen-tl/"
    : "https://co.linkedin.com/in/mehdi-cohen";

  const socialLinks = [
    { icon: Youtube, href: "https://www.youtube.com/@Mehdicohen", label: "YouTube" },
    { icon: Instagram, href: "https://instagram.com/mehdicohen_", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/Mehdicohen88/", label: "Facebook" },
    { icon: Linkedin, href: linkedinUrl, label: "LinkedIn" },
    { icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.82a4.84 4.84 0 01-1-.13z"/>
      </svg>
    ), href: "https://www.tiktok.com/@mehdi_cohen", label: "TikTok" },
    { icon: Mail, href: "mailto:truelegacyworld@gmail.com", label: "Email" },
    { icon: MessageCircle, href: lang === "es" ? "https://wa.me/+573001844049" : "https://wa.me/18649072149", label: "Contact Us" },
  ];

  const resourceLinks = [
    { label: lang === "en" ? "Check Your Tap Water (EWG)" : "Revisa Tu Agua del Grifo (EWG)", href: "https://www.ewg.org/tapwater/" },
    { label: lang === "en" ? "Pre-Filters (Multipure)" : "Pre-Filtros (Multipure)", href: "https://www.multipure.com/mcardona" },
    { label: lang === "en" ? "Pre-Filters (Ionfaucet)" : "Pre-Filtros (Ionfaucet)", href: "https://ionfaucet.com/pre-filtration-systems" },
    { label: lang === "en" ? "Accessories & Upgrades" : "Accesorios y Mejoras", href: "https://lddy.no/1mols" },
  ];

  return (
    <footer className="py-16 bg-background border-t border-border/30 relative">
      <div className="container mx-auto px-4">
        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-5 mb-10">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-card border border-border/30 flex items-center justify-center text-foreground/70 hover:text-accent hover:border-accent/40 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-4">
            <img src={combinedLogo} alt="Mehdi Cohen · True Legacy" className="h-20 md:h-24 w-auto" />
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-8">
            <a href={lang === "en" ? "/global/join" : "/latam/unete"} className="font-body text-xs md:text-sm font-bold uppercase tracking-[0.1em] text-foreground hover:text-accent transition-colors">
              {lang === "en" ? "Join Team" : "Únete"}
            </a>
            <a href="https://www.youtube.com/@Mehdicohen" target="_blank" rel="noopener noreferrer" className="font-body text-xs md:text-sm font-bold uppercase tracking-[0.1em] text-foreground hover:text-accent transition-colors">
              YouTube
            </a>
            <a href="https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0&product_id=1016" target="_blank" rel="noopener noreferrer" className="font-body text-xs md:text-sm font-bold uppercase tracking-[0.1em] text-foreground hover:text-accent transition-colors">
              {lang === "en" ? "Kangen Water" : "Agua Kangen"}
            </a>
            <a href={lang === "es" ? "https://wa.me/+573001844049" : "https://wa.me/18649072149"} target="_blank" rel="noopener noreferrer" className="font-body text-xs md:text-sm font-bold uppercase tracking-[0.1em] text-foreground hover:text-accent transition-colors">
              {lang === "en" ? "Contact" : "Contacto"}
            </a>
          </div>
        </div>

        {/* Resources Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-8">
          {resourceLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[11px] md:text-xs font-bold uppercase tracking-[0.08em] text-foreground/50 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="h-px w-full bg-border/30 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
           <p className="font-body text-sm text-foreground font-bold">
             Mehdi Cohen | CEO &amp; Founder — True Legacy | Kangen Water &amp; EmGuarde Distributor | USA · Canada · Colombia · Latin America · Europe | Wealth · Health · Legacy | mehdicohen.com
           </p>
           <p className="font-body text-xs text-foreground/60 font-bold mt-1">
             Enagic® Independent Distributor · ID# 37000004829 · Serving clients globally across 170+ countries
           </p>
          </div>
         <p className="font-mono text-xs uppercase tracking-[0.15em] text-foreground/70 font-bold">
           © {new Date().getFullYear()} mehdicohen.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
