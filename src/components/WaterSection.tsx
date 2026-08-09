import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import kangenMachine from "@/assets/kangen-water-machine.png";
import imgEmgo from "@/assets/product-emgo.png";

interface WaterSectionProps {
  lang: "en" | "es";
}

const WaterSection = ({ lang }: WaterSectionProps) => {
  const isLatam = lang === "es";
  const kangenLink = isLatam ? "/latam/kangen-water" : "/global/kangen-water";
  const emguardeLink = isLatam ? "/latam/emguarde-go" : "/global/emguarde-go";

  const t = {
    en: {
      water: {
        micro: "The Foundation of Everything",
        headline: "Kangen Water — The Wellness Foundation",
        subhead: "Scale Your Body and Your Income With Alkaline Ionized Water",
        cta: "Explore K8 Kangen Water",
      },
      emguarde: {
        micro: "Portable EMF Protection",
        headline: "emGuarde GO: Your On-The-Go Shield",
        subhead: "Neutralize Wi-Fi, 5G, and Cell Phone Radiation Wherever You Go",
        cta: "Explore emGuarde GO",
      },
    },
    es: {
      water: {
        micro: "La Base de Todo",
        headline: "Agua Kangen — La Base del Bienestar",
        subhead: "Escala Tu Cuerpo y Tus Ingresos Con Agua Alcalina Ionizada",
        cta: "Explorar Agua Kangen K8",
      },
      emguarde: {
        micro: "Protección EMF Portátil",
        headline: "emGuarde GO: Tu Escudo en Movimiento",
        subhead: "Neutraliza la radiación de Wi-Fi, 5G y teléfonos móviles donde sea que vayas",
        cta: "Explorar emGuarde GO",
      },
    },
  };

  const c = t[lang];

  const ProductCard = ({
    link,
    image,
    alt,
    cta,
    accentClass,
    maxWidth,
  }: {
    link: string;
    image: string;
    alt: string;
    cta: string;
    accentClass: "water" | "emguarde";
    maxWidth: string;
  }) => {
    const isWater = accentClass === "water";

    return (
      <Link
        to={link}
        className={`group block relative rounded-2xl overflow-hidden border bg-card/30 p-6 md:p-8 transition-all duration-500 shadow-deep hover:shadow-glow ${
          isWater
            ? "border-accent/15 hover:border-accent/40"
            : "border-emguarde/15 hover:border-emguarde/40"
        }`}
      >
        <div
          className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none ${
            isWater
              ? "bg-gradient-to-tr from-accent/10 to-primary/5"
              : "bg-gradient-to-tr from-emguarde/10 to-transparent"
          }`}
        />
        <div
          className={`absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 rounded-tl-lg transition-colors ${
            isWater
              ? "border-accent/30 group-hover:border-accent/70"
              : "border-emguarde/35 group-hover:border-emguarde/75"
          }`}
        />
        <div
          className={`absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 rounded-br-lg transition-colors ${
            isWater
              ? "border-accent/30 group-hover:border-accent/70"
              : "border-emguarde/35 group-hover:border-emguarde/75"
          }`}
        />

        <div className="relative aspect-square flex items-center justify-center mb-6">
          <img
            src={image}
            alt={alt}
            className={`w-full ${maxWidth} object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500`}
          />
        </div>

        <div
          className={`relative py-4 px-5 rounded-xl bg-card border border-border/60 flex items-center justify-between transition-colors ${
            isWater
              ? "group-hover:border-accent/40"
              : "group-hover:border-emguarde/40"
          }`}
        >
          <span
            className={`font-body font-black text-xs md:text-sm uppercase tracking-[0.1em] text-foreground transition-colors ${
              isWater ? "group-hover:text-accent" : "group-hover:text-emguarde"
            }`}
          >
            {cta}
          </span>
          <svg
            className={`w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-all ${
              isWater ? "group-hover:text-accent" : "group-hover:text-emguarde"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    );
  };

  return (
    <section id="water" className="py-20 md:py-28 relative overflow-hidden bg-background">
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-br from-accent/[0.035] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-bl from-emguarde/[0.035] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="relative grid lg:grid-cols-2 gap-16 lg:gap-20 max-w-7xl mx-auto">
          <div className="hidden lg:block absolute z-20 left-1/2 top-[-5%] h-[110%] w-px -translate-x-1/2 rotate-[7deg] bg-gradient-to-b from-transparent via-accent/45 to-emguarde/45 shadow-[0_0_18px_hsl(var(--accent)/0.2)] pointer-events-none" />

          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />
            <div className="relative text-center mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent font-bold mb-6">
                {c.water.micro}
              </p>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-display font-black leading-[1.05] mb-4">
                {c.water.headline}
              </h2>
              <p className="text-lg md:text-xl font-display italic text-gradient-gold max-w-xl mx-auto font-bold">
                {c.water.subhead}
              </p>
            </div>
            <div className="relative max-w-md w-full mx-auto mt-auto">
              <ProductCard
                link={kangenLink}
                image={kangenMachine}
                alt="Enagic Leveluk K8 Kangen Water machine mehdicohen.com"
                cta={c.water.cta}
                accentClass="water"
                maxWidth="max-w-[280px]"
              />
            </div>
          </motion.article>

          <div className="lg:hidden relative h-10 -my-3 overflow-hidden" aria-hidden="true">
            <div className="absolute left-[-5%] top-1/2 w-[110%] h-px -rotate-[3deg] bg-gradient-to-r from-transparent via-accent/50 to-emguarde/50 shadow-[0_0_14px_hsl(var(--accent)/0.2)]" />
          </div>

          <motion.article
            id="emguarde"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-emguarde/5 rounded-full blur-[130px] pointer-events-none" />
            <div className="relative text-center mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-emguarde font-bold mb-6">
                {c.emguarde.micro}
              </p>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-display font-black leading-[1.05] mb-4">
                {c.emguarde.headline}
              </h2>
              <p className="text-lg md:text-xl font-display italic text-gradient-emguarde max-w-xl mx-auto font-bold">
                {c.emguarde.subhead}
              </p>
            </div>
            <div className="relative max-w-md w-full mx-auto mt-auto">
              <ProductCard
                link={emguardeLink}
                image={imgEmgo}
                alt="Enagic emGuarde GO device set of 2 mehdicohen.com"
                cta={c.emguarde.cta}
                accentClass="emguarde"
                maxWidth="max-w-[220px]"
              />
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default WaterSection;
