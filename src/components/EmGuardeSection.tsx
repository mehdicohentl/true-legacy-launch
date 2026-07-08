import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import imgEmgo from "@/assets/product-emgo.png";

interface EmGuardeSectionProps {
  lang: "en" | "es";
}

const EmGuardeSection = ({ lang }: EmGuardeSectionProps) => {
  const isLatam = lang === "es";
  const subpageLink = isLatam ? "/latam/emguarde-go" : "/global/emguarde-go";

  const t = {
    en: {
      micro: "Portable EMF Protection",
      headline: "emGuarde GO: Your On-The-Go Shield",
      subhead: "Neutralize Wi-Fi, 5G, and Cell Phone Radiation Wherever You Go",
      cta: "Explore emGuarde GO",
    },
    es: {
      micro: "Protección EMF Portátil",
      headline: "emGuarde GO: Tu Escudo en Movimiento",
      subhead: "Neutraliza la radiación de Wi-Fi, 5G y teléfonos móviles donde sea que vayas",
      cta: "Explorar emGuarde GO",
    }
  };

  const c = t[lang];

  return (
    <section id="emguarde" className="py-20 md:py-28 relative overflow-hidden bg-background">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-emguarde/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-emguarde font-bold mb-6 text-center"
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
          <p className="text-lg md:text-2xl font-display italic text-gradient-emguarde max-w-3xl mx-auto font-bold">
            {c.subhead}
          </p>
        </motion.div>

        {/* Premium Clickable emGuarde GO Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <Link to={subpageLink} className="group block relative rounded-2xl overflow-hidden border border-emguarde/15 hover:border-emguarde/40 bg-card/30 p-8 transition-all duration-500 shadow-deep hover:shadow-glow">
            {/* Hover card glow backplate */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-emguarde/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
            
            {/* Outer border bracket highlights */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-emguarde/35 rounded-tl-lg transition-colors group-hover:border-emguarde/75" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-emguarde/35 rounded-br-lg transition-colors group-hover:border-emguarde/75" />

            <div className="relative aspect-square flex items-center justify-center mb-6">
              <img
                src={imgEmgo}
                alt="Enagic emGuarde GO device set of 2 mehdicohen.com"
                className="w-full max-w-[220px] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* CTA Overlay Bar */}
            <div className="relative py-4 px-6 rounded-xl bg-card border border-border/60 flex items-center justify-between group-hover:border-emguarde/40 transition-colors">
              <span className="font-body font-black text-sm uppercase tracking-[0.1em] text-foreground group-hover:text-emguarde transition-colors">
                {c.cta}
              </span>
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-emguarde group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EmGuardeSection;
