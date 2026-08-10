import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Compass, Globe2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import combinedLogo from "@/assets/combined-logo.png";
import mehdiWelcome from "@/assets/mehdi-welcome.png";
import Globe from "@/components/Globe";
import AnimatedWaveBackground from "@/components/AnimatedWaveBackground";

type RegionCardProps = {
  eyebrow: string;
  label: string;
  ariaLabel: string;
  accent: "cyan" | "gold";
  icon: "globe" | "compass";
  onClick: () => void;
};

const RegionCard = ({
  eyebrow,
  label,
  ariaLabel,
  accent,
  icon,
  onClick,
}: RegionCardProps) => {
  const isGold = accent === "gold";
  const Icon = icon === "globe" ? Globe2 : Compass;

  return (
    <motion.button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative grid min-h-[82px] w-full grid-cols-[44px_1fr_24px] items-center gap-3 overflow-hidden rounded-2xl border px-4 text-left shadow-deep backdrop-blur-xl transition-[border-color,box-shadow,background-color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:min-h-[88px] md:px-5 ${
        isGold
          ? "border-amber-400/35 bg-[linear-gradient(135deg,hsla(35,42%,15%,0.72),hsla(205,55%,7%,0.84))] hover:border-amber-300/75 hover:shadow-[0_18px_50px_hsla(36,90%,55%,0.12)] focus-visible:ring-amber-300"
          : "border-accent/35 bg-[linear-gradient(135deg,hsla(192,48%,14%,0.78),hsla(205,55%,7%,0.84))] hover:border-accent/75 hover:shadow-[0_18px_50px_hsla(185,100%,50%,0.12)] focus-visible:ring-accent"
      }`}
    >
      <span
        className={`absolute inset-x-[20%] -bottom-16 h-24 rounded-full blur-3xl transition-opacity duration-300 ${
          isGold ? "bg-amber-400/10" : "bg-accent/10"
        }`}
      />

      <span
        className={`relative z-10 grid h-10 w-10 place-items-center rounded-full border ${
          isGold
            ? "border-amber-300/30 bg-amber-400/10 text-amber-300"
            : "border-accent/30 bg-accent/10 text-accent"
        }`}
      >
        <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
      </span>

      <span className="relative z-10 flex min-w-0 flex-col gap-0.5">
        <strong className="font-display text-base font-extrabold tracking-[0.14em] text-foreground md:text-lg">
          {eyebrow}
        </strong>
        <span className="truncate font-body text-[11px] font-medium text-foreground/55 md:text-xs">
          {label}
        </span>
      </span>

      <ArrowRight
        className={`relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 ${
          isGold ? "text-amber-300" : "text-accent"
        }`}
        aria-hidden="true"
      />
    </motion.button>
  );
};

const LanguageSelector = () => {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative isolate flex min-h-[100svh] overflow-hidden bg-background px-4 text-foreground">
      <AnimatedWaveBackground />
      <Globe />

      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_42%,hsla(185,100%,50%,0.08),transparent_34%)]" />

      <motion.section
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center pb-56 pt-8 text-center sm:pb-60 md:pt-10 lg:pb-64"
      >
        <img
          src={combinedLogo}
          alt="True Legacy and Mehdi Cohen"
          className="h-20 w-auto object-contain drop-shadow-[0_0_22px_hsla(185,100%,50%,0.08)] md:h-24"
        />

        <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.34em] text-accent">
          True Legacy World
        </p>

        <h1 className="mt-3 font-display text-[2.6rem] font-black leading-[0.98] tracking-[-0.045em] text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
          Your story <span className="text-gradient-gold">isn&apos;t over.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl font-body text-sm font-normal leading-relaxed text-foreground/70 sm:text-base md:text-lg">
          Step into a global community built around better health,
          <br className="hidden sm:block" /> greater freedom, and a legacy that lasts.
        </p>

        <p className="mb-3 mt-7 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/55 md:mt-8">
          Choose your region to begin
        </p>

        <div className="grid w-full max-w-[590px] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          <RegionCard
            eyebrow="GLOBAL"
            label="Explore in English"
            ariaLabel="Enter the Global site in English"
            accent="cyan"
            icon="globe"
            onClick={() => navigate("/global")}
          />
          <RegionCard
            eyebrow="LATAM"
            label="Explorar en Español"
            ariaLabel="Entrar al sitio LATAM en Español"
            accent="gold"
            icon="compass"
            onClick={() => navigate("/latam")}
          />
        </div>

        <p className="mt-3 font-body text-[10px] tracking-[0.08em] text-foreground/35">
          You can switch regions anytime
        </p>
      </motion.section>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: reduceMotion ? 0 : 0.35 }}
        className="pointer-events-none absolute bottom-0 left-1/2 z-[8] h-[220px] w-[210px] -translate-x-1/2 sm:h-[245px] sm:w-[230px] lg:h-[270px] lg:w-[250px]"
      >
        <span className="absolute bottom-4 left-1/2 h-44 w-56 -translate-x-1/2 rounded-full bg-accent/10 blur-[55px]" />
        <img
          src={mehdiWelcome}
          alt="Mehdi Cohen welcoming visitors to True Legacy"
          className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_20px_24px_hsla(205,80%,2%,0.82)]"
        />
        <span className="absolute bottom-1 left-1/2 h-4 w-40 -translate-x-1/2 rounded-full bg-accent/20 blur-[9px]" />
      </motion.div>

      <p className="absolute bottom-5 right-6 z-[8] hidden font-mono text-[9px] font-bold uppercase tracking-[0.24em] text-foreground/30 md:block">
        Health <span className="mx-1 text-amber-400/70">•</span> Freedom
        <span className="mx-1 text-amber-400/70">•</span> Legacy
      </p>
    </main>
  );
};

export default LanguageSelector;
