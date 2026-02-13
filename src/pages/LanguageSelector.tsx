import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import combinedLogo from "@/assets/combined-logo.png";
import Globe from "@/components/Globe";

const pulseRing = {
  initial: { scale: 1, opacity: 0.5 },
  animate: {
    scale: [1, 1.25, 1],
    opacity: [0.5, 0, 0.5],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const LanguageSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-hero-gradient noise-overlay flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* 3D Globe background */}
      <Globe />

      {/* Ambient light effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/6 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-lg"
      >
        <div className="flex items-center justify-center mb-10">
          <img src={combinedLogo} alt="Mehdi Cohen · True Legacy" className="h-20 md:h-32 w-auto" />
        </div>

        <p className="text-accent font-mono font-medium text-xs uppercase tracking-[0.4em] mb-4">
          Your journey starts here
        </p>

        <h1 className="text-4xl md:text-6xl font-display font-black mb-4 leading-[1.05]">
          One Decision<br />
          <span className="text-gradient-gold italic font-mono">Changes Everything.</span>
        </h1>

        <p className="text-muted-foreground font-body text-base md:text-lg mb-14 leading-relaxed max-w-md mx-auto">
          Select your language to discover how thousands are building wealth & health — starting from zero.
        </p>

        <div className="flex gap-12 justify-center items-center">
          {/* English */}
          <div className="relative flex items-center justify-center">
            {/* Animated pulse ring */}
            <motion.div
              variants={pulseRing}
              initial="initial"
              animate="animate"
              className="absolute w-40 h-40 rounded-full border-2 border-accent/40"
            />
            <motion.button
              onClick={() => navigate("/en")}
              whileHover={{ scale: 1.12, boxShadow: "0 0 40px 8px hsla(43, 50%, 60%, 0.35)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="group relative w-36 h-36 rounded-full glass-card transition-all duration-500 overflow-hidden border border-accent/20 hover:border-accent/60 flex items-center justify-center backdrop-blur-md"
              style={{ boxShadow: "0 0 20px 2px hsla(43, 50%, 60%, 0.12)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{
                  background: "conic-gradient(from 0deg, transparent, hsla(43, 50%, 60%, 0.15), transparent)",
                }}
              />
              <div className="relative z-10 flex flex-col items-center">
                <span className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors duration-300">English</span>
                <span className="text-[10px] text-muted-foreground font-mono mt-1 tracking-wider uppercase">USA</span>
              </div>
            </motion.button>
          </div>

          {/* Español */}
          <div className="relative flex items-center justify-center">
            <motion.div
              variants={pulseRing}
              initial="initial"
              animate="animate"
              style={{ animationDelay: "1.25s" }}
              className="absolute w-40 h-40 rounded-full border-2 border-accent/40"
            />
            <motion.button
              onClick={() => navigate("/es")}
              whileHover={{ scale: 1.12, boxShadow: "0 0 40px 8px hsla(43, 50%, 60%, 0.35)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="group relative w-36 h-36 rounded-full glass-card transition-all duration-500 overflow-hidden border border-accent/20 hover:border-accent/60 flex items-center justify-center backdrop-blur-md"
              style={{ boxShadow: "0 0 20px 2px hsla(43, 50%, 60%, 0.12)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
                style={{
                  background: "conic-gradient(from 0deg, transparent, hsla(43, 50%, 60%, 0.15), transparent)",
                }}
              />
              <div className="relative z-10 flex flex-col items-center">
                <span className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors duration-300">Español</span>
                <span className="text-[10px] text-muted-foreground font-mono mt-1 tracking-wider uppercase leading-tight text-center">LATAM</span>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LanguageSelector;
