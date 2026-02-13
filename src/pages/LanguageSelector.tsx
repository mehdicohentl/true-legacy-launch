import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import trueLegacyLogo from "@/assets/true-legacy-logo.png";
import mehdiLogo from "@/assets/mehdi-logo.png";

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

        <div className="flex items-center justify-center gap-5 mb-10">
          <img src={trueLegacyLogo} alt="True Legacy" className="h-14 md:h-20 w-auto" />
          <div className="h-12 w-px bg-accent/30" />
          <img src={mehdiLogo} alt="Mehdi Cohen" className="h-10 md:h-14 w-auto" />
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

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <motion.button
            onClick={() => navigate("/en")}
            whileHover={{ scale: 1.04, y: -6 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="group relative px-14 py-8 rounded-2xl glass-card hover:bg-secondary/80 transition-all duration-500 overflow-hidden border-gradient">

            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <span className="text-6xl mb-4 block flag-hover inline-block">🇺🇸</span>
              <span className="font-display font-bold text-2xl text-foreground block">English</span>
              <span className="text-xs text-muted-foreground font-mono mt-2 block tracking-wider uppercase">United States</span>
            </div>
          </motion.button>

          <motion.button
            onClick={() => navigate("/es")}
            whileHover={{ scale: 1.04, y: -6 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="group relative px-14 py-8 rounded-2xl glass-card hover:bg-secondary/80 transition-all duration-500 overflow-hidden border-gradient">

            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <span className="text-6xl mb-4 block flag-hover inline-block">🇲🇽</span>
              <span className="font-display font-bold text-2xl text-foreground block">Español</span>
              <span className="text-xs text-muted-foreground font-mono mt-2 block tracking-wider uppercase">México & Latinoamérica</span>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </div>);

};

export default LanguageSelector;