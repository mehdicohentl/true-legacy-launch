import trueLegacyLogo from "@/assets/true-legacy-logo.png";
import mehdiLogo from "@/assets/mehdi-logo.png";

interface FooterProps {
  lang: "en" | "es";
}

const Footer = ({ lang }: FooterProps) => {
  return (
    <footer className="py-16 bg-background border-t border-border/30 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-4">
            <img src={mehdiLogo} alt="Mehdi Cohen" className="h-12 md:h-14 w-auto" />
            <div className="h-8 w-px bg-accent/20" />
            <img src={trueLegacyLogo} alt="True Legacy" className="h-14 md:h-16 w-auto" />
          </div>

          <div className="flex items-center gap-8">
            <a href="https://truelegacyworld.com" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors">
              {lang === "en" ? "Join Team" : "Únete"}
            </a>
            <a href="https://www.youtube.com/@Mehdicohen" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors">
              YouTube
            </a>
            <a href="https://information.enagic.com/home/article/TRAkt4bArepUdoS2JU9t" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors">
              {lang === "en" ? "Get Water" : "Obtener Agua"}
            </a>
            <a href="mailto:emgsales@enagic-my.com" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors">
              {lang === "en" ? "Contact" : "Contacto"}
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-border/30 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-body text-xs text-muted-foreground/60">
              Mehdi Cohen — Enagic® Independent Distributor · ID# 37000004829
            </p>
          </div>
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/40">
            © {new Date().getFullYear()} mehdicohen.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
