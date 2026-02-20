import { motion } from "framer-motion";
import combinedLogo from "@/assets/combined-logo.png";
import mehdiHeadshot from "@/assets/mehdi-headshot.png";

interface HeroSectionProps {
  lang: "en" | "es";
}

const HeroSection = ({ lang }: HeroSectionProps) => {
  const videoId = lang === "en" ? "4Xq6np66vaE" : "8i8o6FbbleA";

  const t = {
    en: {
      micro: "Mehdi Cohen · True Legacy World",
      headline1: "Your Story Isn't Over",
      headline2: "—It's Just",
      headline3: "Getting Started.",
      sub: "I rose from zero to lead a global movement, changing lives through health and financial freedom—now it's your turn to rise.",
      cta1: "Get Your Kangen Water Machine",
      cta2: "Make Income With True Legacy",
      proof: "Join 51+ years of Enagic excellence",
    },
    es: {
      micro: "Mehdi Cohen · True Legacy World",
      headline1: "Tu Historia No Terminó",
      headline2: "—Apenas Está",
      headline3: "Comenzando.",
      sub: "Pasé de cero a liderar un movimiento global, cambiando vidas a través de la salud y la libertad financiera—ahora es tu turno de surgir.",
      cta1: "OBTEN TU MÁQUINA DE AGUA KANGEN (EE. UU., Australia, Dubai, etc.)",
      cta2: "Genera Ingresos Con True Legacy",
      proof: "Unete a 51+ anos de excelencia Enagic",
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-hero-gradient noise-overlay overflow-hidden pt-20">
      {/* Ambient orbs */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 flex-1 flex flex-col items-center justify-center relative z-10 py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-4xl text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src={mehdiHeadshot} alt="Mehdi Cohen" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover object-top border-2 border-accent/40" />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-accent font-bold"
            >
              {t[lang].micro}
            </motion.p>
          </div>

           <h1 className="font-display font-black leading-[0.9] mb-6">
             <span className="block text-3xl md:text-5xl lg:text-7xl text-foreground">{t[lang].headline1}</span>
             <span className="block text-3xl md:text-5xl lg:text-7xl text-foreground">{t[lang].headline2}</span>
             <span className="block text-3xl md:text-5xl lg:text-7xl text-gradient-gold">{t[lang].headline3}</span>
           </h1>

          <p className="text-base md:text-xl text-foreground font-body leading-[1.8] max-w-2xl mx-auto mb-8 font-bold">
            {t[lang].sub}
          </p>
        </motion.div>

        {/* VSL Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full max-w-4xl mb-10"
        >
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-2xl blur-xl" />
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 shadow-deep">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                title="VSL Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl mb-6"
        >
          <motion.a
            href="https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0&product_id=1016"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="cta-shimmer flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl font-body font-black text-base md:text-lg uppercase tracking-[0.1em] bg-primary text-primary-foreground shadow-glow transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            {t[lang].cta1}
          </motion.a>

          <motion.a
            href={lang === "en" ? "https://form.jotform.com/260232994952060" : "https://form.jotform.com/260246489849069"}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="cta-shimmer flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl font-body font-black text-base md:text-lg uppercase tracking-[0.1em] bg-accent text-accent-foreground shadow-gold animate-pulse-glow transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            {t[lang].cta2}
          </motion.a>
        </motion.div>

        {lang === "es" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full max-w-3xl mb-6"
          >
            <motion.a
              href="https://wa.me/573001844049"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-body font-black text-sm md:text-base uppercase tracking-[0.1em] bg-[#25D366] text-white shadow-lg transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              FUERA DE ESTAS REGIONES, CONTACTA AQUÍ PARA LATAM
            </motion.a>
          </motion.div>
        )}

         <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/90 font-bold">
           {t[lang].proof}
         </p>
      </div>
    </section>
  );
};

export default HeroSection;
