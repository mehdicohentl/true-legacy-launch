import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import kangenMachine from "@/assets/kangen-water-machine.png";

interface WaterSectionProps {
  lang: "en" | "es";
}

const WaterSection = ({ lang }: WaterSectionProps) => {
  const isLatam = lang === "es";
  const subpageLink = isLatam ? "/latam/kangen-water" : "/global/kangen-water";

  const t = {
    en: {
      micro: "The Foundation of Everything",
      headline: "Kangen Water — The Wellness Foundation",
      subhead: "Scale Your Body and Your Income With Alkaline Ionized Water",
      cta: "Explore K8 Kangen Water",
    },
    es: {
      micro: "La Base de Todo",
      headline: "Agua Kangen — La Base del Bienestar",
      subhead: "Escala Tu Cuerpo y Tus Ingresos Con Agua Alcalina Ionizada",
      cta: "Explorar Agua Kangen K8",
    }
  };

  const c = t[lang];

  return (
    <section id="water" className="py-20 md:py-28 relative overflow-hidden bg-background">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent font-bold mb-6 text-center"
        >
          {c.micro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-black leading-[1.05] mb-4">
            <span className="text-foreground">{c.headline}</span>
          </h2>
          <p className="text-lg md:text-2xl font-display italic text-gradient-gold max-w-3xl mx-auto font-bold">
            {c.subhead}
          </p>
        </motion.div>

        {/* Premium Clickable K8 Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <Link to={subpageLink} className="group block relative rounded-2xl overflow-hidden border border-accent/15 hover:border-accent/40 bg-card/30 p-8 transition-all duration-500 shadow-deep hover:shadow-glow">
            {/* Hover card glow backplate */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-accent/10 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
            
            {/* Outer border bracket highlights */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-accent/30 rounded-tl-lg transition-colors group-hover:border-accent/70" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-accent/30 rounded-br-lg transition-colors group-hover:border-accent/70" />

            <div className="relative aspect-square flex items-center justify-center mb-6">
              <img
                src={kangenMachine}
                alt="Enagic Leveluk K8 Kangen Water machine mehdicohen.com"
                className="w-full max-w-[280px] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* CTA Overlay Bar */}
            <div className="relative py-4 px-6 rounded-xl bg-card border border-border/60 flex items-center justify-between group-hover:border-accent/40 transition-colors">
              <span className="font-body font-black text-sm uppercase tracking-[0.1em] text-foreground group-hover:text-accent transition-colors">
                {c.cta}
              </span>
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WaterSection;
