import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import combinedLogo from "@/assets/combined-logo.png";

const LanguageSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-hero-gradient noise-overlay flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Ambient light effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/6 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-lg">

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

        <div className="flex gap-10 justify-center items-center">
          {/* English */}
          <motion.button
            onClick={() => navigate("/en")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="group relative w-36 h-36 rounded-full glass-card hover:bg-secondary/80 transition-all duration-500 overflow-hidden border-gradient flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            <div className="relative z-10 flex flex-col items-center">
              <span className="font-display font-bold text-lg text-foreground">English</span>
              <span className="text-[10px] text-muted-foreground font-mono mt-1 tracking-wider uppercase">USA</span>
            </div>
          </motion.button>

          {/* Español */}
          <motion.button
            onClick={() => navigate("/es")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="group relative w-36 h-36 rounded-full glass-card hover:bg-secondary/80 transition-all duration-500 overflow-hidden border-gradient flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            <div className="relative z-10 flex flex-col items-center">
              <span className="font-display font-bold text-lg text-foreground">Español</span>
              <span className="text-[10px] text-muted-foreground font-mono mt-1 tracking-wider uppercase leading-tight text-center">LATAM</span>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </div>);

};

export default LanguageSelector;