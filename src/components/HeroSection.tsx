import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import combinedLogo from "@/assets/combined-logo.png";
import mehdiHeadshot from "@/assets/mehdi-headshot.png";

interface HeroSectionProps {
  lang: "en" | "es";
}

const HeroSection = ({ lang }: HeroSectionProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleUnmute = () => {
    setIsMuted(false);
    if (iframeRef.current) {
      // Send message to YouTube Player API to unmute and play
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "unMute" }),
        "*"
      );
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "playVideo" }),
        "*"
      );
    }
  };

  const videoId = lang === "en" ? "bbJU9EbWeAE" : "5l48I_cyO0M";

  const t = {
    en: {
      micro: "Leading a global community of purpose-driven entrepreneurs",
      headline1: "Build a life",
      headline2: "you don't want",
      headline3: "to escape from",
      sub: "For people who refuse to choose between wealth, health, and lasting impact. Join a global community that's building leaders, creating freedom, and leaving a legacy that reaches far beyond business",
      cta1: "Build with True Legacy",
      cta1Sub: "Learn how we're developing leaders around the world",
      cta2: "Start your health journey",
      cta2Sub: "Find the product that best supports your health goals",
      videoLine: "See the community behind the mission",
      proof: "Join 52+ years of Enagic excellence",
      watchDuo: "Watch Duo Demo",
    },
    es: {
      micro: "Liderando una comunidad global de emprendedores con propósito",
      headline1: "Construye una vida",
      headline2: "de la que no quieras",
      headline3: "escapar",
      sub: "Para personas que se niegan a elegir entre riqueza, salud e impacto duradero. Únete a una comunidad global que está formando líderes, creando libertad y dejando un legado que va mucho más allá de los negocios.",
      cta1: "Construye con True Legacy",
      cta1Sub: "Aprende cómo estamos desarrollando líderes en todo el mundo",
      cta2: "Inicia tu camino de salud",
      cta2Sub: "Encuentra el producto que mejor apoye tus objetivos de salud",
      videoLine: "Mira la comunidad detrás de la misión",
      proof: "Únete a más de 52 años de excelencia de Enagic",
      watchDuo: "Ver Demo de Duo",
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
            <img src={mehdiHeadshot} alt="Mehdi Cohen True Legacy CEO Kangen water wealth health legacy mehdicohen.com" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover object-top border-2 border-accent/40" />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-mono text-xs uppercase tracking-[0.25em] text-accent font-bold"
            >
              {t[lang].micro}
            </motion.p>
          </div>

           <h1 className="font-display font-black leading-[1.1] mb-6">
             <span className="block text-3xl md:text-5xl lg:text-7xl text-foreground">{t[lang].headline1}</span>
             <span className="block text-3xl md:text-5xl lg:text-7xl text-foreground">{t[lang].headline2}</span>
             <span className="block text-3xl md:text-5xl lg:text-7xl text-gradient-gold">{t[lang].headline3}</span>
           </h1>

          <p className="text-base md:text-xl text-foreground font-body leading-[1.8] max-w-2xl mx-auto mb-8 font-bold">
            {t[lang].sub}
          </p>
        </motion.div>

        {/* Small line above the video */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-accent/80 font-bold mb-4 text-center"
        >
          {t[lang].videoLine}
        </motion.p>

        {/* VSL Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full max-w-4xl mb-6"
        >
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-2xl blur-xl" />
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 shadow-deep">
              <iframe
                ref={iframeRef}
                src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1&mute=1&playsinline=1&enablejsapi=1`}
                title="VSL Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
              <AnimatePresence>
                {isMuted && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                    onClick={handleUnmute}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 backdrop-blur-[2px] cursor-pointer z-20"
                  >
                    {/* Subtle sound prompt backdrop */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                      <motion.div
                        animate={{ scale: [1, 1.25, 1], opacity: [0.04, 0.12, 0.04] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                        className="w-28 h-28 sm:w-44 sm:h-44 md:w-64 md:h-64 rounded-full bg-accent/20 absolute"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.18, 1], opacity: [0.05, 0.14, 0.05] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut", delay: 0.3 }}
                        className="w-20 h-20 sm:w-36 sm:h-36 md:w-52 md:h-52 rounded-full bg-primary/15 absolute"
                      />
                    </div>

                    {/* Secondary sound control */}
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 120, damping: 14 }}
                      className="relative z-30 flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 md:p-5 rounded-xl bg-background/55 backdrop-blur-md border border-accent/20 shadow-lg max-w-[85%] sm:max-w-sm text-center"
                    >
                      {/* Animated sound waves */}
                      <div className="flex items-end justify-center gap-1 h-5 sm:h-7 mb-0">
                        {[1, 2, 3, 4, 5].map((bar) => (
                          <motion.div
                            key={bar}
                            animate={{ scaleY: [0.3, 1, 0.3] }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.7,
                              delay: bar * 0.12,
                              ease: "easeInOut",
                            }}
                            className="h-5 sm:h-7 w-1 rounded-full bg-accent/80 origin-center shadow-[0_0_6px_hsl(var(--accent)/0.6)]"
                          />
                        ))}
                      </div>

                      {/* Quiet secondary unmute action */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 rounded-lg bg-accent/10 text-accent font-body font-bold text-xs sm:text-base md:text-lg uppercase tracking-[0.1em] hover:bg-accent/20 transition-all flex items-center justify-center gap-2 border border-accent/50 shadow-[0_0_18px_hsl(var(--accent)/0.12)]"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 18.75V5.25L7.75 9.5H4.5v5h3.25L12 18.75z" />
                        </svg>
                        {lang === "en" ? "CLICK TO LISTEN" : "CLICK PARA ESCUCHAR"}
                      </motion.button>

                      <p className="font-mono text-[9px] sm:text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-medium">
                        {lang === "en" ? "🔊 TURN ON SOUND" : "🔊 ACTIVA EL SONIDO"}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Watch Duo Demo Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mb-10"
        >
          <Link to={lang === "en" ? "/global/duopackage" : "/latam/latam-duo-package"}>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="cta-shimmer inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-body font-black text-sm md:text-base uppercase tracking-[0.1em] bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white shadow-emergency animate-pulse-emergency cursor-pointer"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              {t[lang].watchDuo}
            </motion.div>
          </Link>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl mb-6"
        >
          {/* Primary button (Business) */}
          <motion.a
            href={lang === "en" ? "/global/join" : "/latam/unete"}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="cta-shimmer flex-1 inline-flex flex-col items-center justify-center text-center gap-1.5 px-6 py-4 md:py-5 rounded-xl transition-all bg-accent text-accent-foreground shadow-gold animate-pulse-glow"
          >
            <span className="font-body font-black text-base md:text-lg uppercase tracking-[0.1em] flex items-center gap-2">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              {t[lang].cta1}
            </span>
            <span className="font-body text-xs text-accent-foreground/80 font-normal">
              {t[lang].cta1Sub}
            </span>
          </motion.a>

          {/* Secondary button (Product) */}
          <Link to={lang === "en" ? "/global/products" : "/latam/products"} className="flex-1 block">
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full h-full flex flex-col items-center justify-center text-center gap-1.5 px-6 py-4 md:py-5 rounded-xl transition-all border border-border/60 bg-card/40 hover:bg-card/75 text-foreground shadow-deep cursor-pointer"
            >
              <span className="font-body font-black text-base md:text-lg uppercase tracking-[0.1em] flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                {t[lang].cta2}
              </span>
              <span className="font-body text-xs text-foreground/60 font-normal">
                {t[lang].cta2Sub}
              </span>
            </motion.div>
          </Link>
        </motion.div>

        {/* WhatsApp Button (Only for LATAM/Spanish to fit the LATAM market) */}
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
