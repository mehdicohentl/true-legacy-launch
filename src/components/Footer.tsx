import combinedLogo from "@/assets/combined-logo.png";

interface FooterProps {
  lang: "en" | "es";
}

const Footer = ({ lang }: FooterProps) => {
  return (
    <footer className="py-16 bg-background border-t border-border/30 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-4">
            <img src={combinedLogo} alt="Mehdi Cohen · True Legacy" className="h-20 md:h-24 w-auto" />
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-8">
            <a href={lang === "en" ? "https://form.jotform.com/260232994952060" : "https://form.jotform.com/260246489849069"} target="_blank" rel="noopener noreferrer" className="font-body text-xs md:text-sm font-bold uppercase tracking-[0.1em] text-foreground hover:text-accent transition-colors">
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

        <div className="h-px w-full bg-border/30 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
           <p className="font-body text-sm text-foreground font-bold">
             Mehdi Cohen — Enagic® Independent Distributor · ID# 37000004829
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
