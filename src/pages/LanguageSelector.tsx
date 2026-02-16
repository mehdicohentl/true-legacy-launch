import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import combinedLogo from "@/assets/combined-logo.png";
import mehdiWelcome from "@/assets/mehdi-welcome.png";
import Globe from "@/components/Globe";
import AnimatedWaveBackground from "@/components/AnimatedWaveBackground";

const pulseRing = {
  initial: { scale: 1, opacity: 0.5 },
  animate: {
    scale: [1, 1.3, 1],
    opacity: [0.5, 0, 0.5],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" as const }
  }
};

const LanguageSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col items-center justify-center px-4">
      {/* Animated flowing wave background */}
      <AnimatedWaveBackground />

      {/* 3D Globe - centered behind content */}
      <Globe />

      {/* Main content - sits on top of globe */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-center w-full max-w-xl flex flex-col items-center justify-center"
        style={{ zIndex: 5 }}>

        <div className="flex items-center justify-center mb-6">
          <img src={combinedLogo} alt="Mehdi Cohen · True Legacy" className="h-16 md:h-28 w-auto" />
        </div>

        <h1 className="text-3xl md:text-5xl font-display font-black mb-2 leading-[1.05]">
          Build Your Legacy.<br />
          <span className="text-gradient-gold">Own Your Freedom.</span>
        </h1>

        <p className="text-accent font-mono font-bold text-xs uppercase tracking-[0.3em] mb-5">
          This Is Where Your Future Begins
        </p>

        <p className="font-body font-bold text-sm md:text-base mb-8 leading-relaxed max-w-md mx-auto bg-[#080808]/0 text-white">
          I built my legacy from immigrant beginnings. Now, I'm handing you the blueprint. This isn't just water or another gadget—this is the map to your freedom. If you're done waiting and ready to build your legacy, step in now.
        </p>

        {/* Language buttons - visually inside the globe */}
        <div className="flex gap-8 md:gap-12 justify-center items-center mb-8">
          {/* English */}
          <div className="relative flex items-center justify-center">
            <motion.div
              variants={pulseRing}
              initial="initial"
              animate="animate"
              className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-accent/40" />

            <motion.button
              onClick={() => navigate("/en")}
              whileHover={{ scale: 1.12, boxShadow: "0 0 50px 12px hsla(185, 100%, 50%, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="group relative w-28 h-28 md:w-36 md:h-36 rounded-full transition-all duration-500 overflow-hidden border-2 border-accent/40 hover:border-accent flex items-center justify-center"
              style={{ boxShadow: "0 0 25px 4px hsla(185, 100%, 50%, 0.2)", background: "hsla(205, 55%, 6%, 0.85)" }}>

              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ background: "conic-gradient(from 0deg, transparent, hsla(185, 100%, 50%, 0.15), transparent)" }} />

              <div className="relative z-10 flex flex-col items-center">
                <span className="font-display font-black text-lg text-foreground group-hover:text-accent transition-colors duration-300">English</span>
                <span className="text-[10px] text-accent font-mono mt-1 tracking-wider uppercase font-bold">GLOBAL</span>
              </div>
            </motion.button>
          </div>

          {/* Español */}
          <div className="relative flex items-center justify-center">
            <motion.div
              variants={pulseRing}
              initial="initial"
              animate="animate"
              className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-accent/40" />

            <motion.button
              onClick={() => navigate("/es")}
              whileHover={{ scale: 1.12, boxShadow: "0 0 50px 12px hsla(185, 100%, 50%, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="group relative w-28 h-28 md:w-36 md:h-36 rounded-full transition-all duration-500 overflow-hidden border-2 border-accent/40 hover:border-accent flex items-center justify-center"
              style={{ boxShadow: "0 0 25px 4px hsla(185, 100%, 50%, 0.2)", background: "hsla(205, 55%, 6%, 0.85)" }}>

              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
                style={{ background: "conic-gradient(from 0deg, transparent, hsla(185, 100%, 50%, 0.15), transparent)" }} />

              <div className="relative z-10 flex flex-col items-center">
                <span className="font-display font-black text-lg text-foreground group-hover:text-accent transition-colors duration-300">Español</span>
                <span className="text-[10px] text-accent font-mono mt-1 tracking-wider uppercase font-bold">LATAM</span>
              </div>
            </motion.button>
          </div>
        </div>

        <motion.img
          src={mehdiWelcome}
          alt="Mehdi Cohen"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-48 md:w-64 mx-auto drop-shadow-2xl"
        />
      </motion.div>
    </div>);

};

export default LanguageSelector;