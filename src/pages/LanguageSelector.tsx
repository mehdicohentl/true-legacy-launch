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
          <img src={mehdiLogo} alt="Mehdi Cohen" className="h-16 md:h-24 w-auto" />
          <div className="h-12 w-px bg-accent/30" />
          <img src={trueLegacyLogo} alt="True Legacy" className="h-20 md:h-28 w-auto" />
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

        <div className="flex flex-col gap-8 justify-center items-center w-full max-w-2xl mx-auto">
          {/* USA Section */}
          <motion.button
            onClick={() => navigate("/en")}
            whileHover={{ scale: 1.03, y: -6 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="group relative w-full px-10 py-8 rounded-2xl glass-card hover:bg-secondary/80 transition-all duration-500 overflow-hidden border-gradient">

            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col items-center">
              <motion.img
                src="https://flagcdn.com/w160/us.png"
                alt="USA"
                className="h-16 w-auto rounded-md shadow-lg mb-4"
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
              />
              <span className="font-display font-bold text-2xl text-foreground block">English</span>
              <span className="text-xs text-muted-foreground font-mono mt-2 block tracking-wider uppercase">United States</span>
            </div>
          </motion.button>

          {/* South America Section */}
          <motion.button
            onClick={() => navigate("/es")}
            whileHover={{ scale: 1.03, y: -6 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="group relative w-full px-10 py-8 rounded-2xl glass-card hover:bg-secondary/80 transition-all duration-500 overflow-hidden border-gradient">

            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex gap-4 mb-4">
                {[
                  { code: "co", alt: "Colombia" },
                  { code: "py", alt: "Paraguay" },
                  { code: "br", alt: "Brasil" },
                  { code: "mx", alt: "México" },
                ].map((flag, i) => (
                  <motion.img
                    key={flag.code}
                    src={`https://flagcdn.com/w80/${flag.code}.png`}
                    alt={flag.alt}
                    className="h-12 w-auto rounded-sm shadow-md"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ delay: i * 0.2, duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                    whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                  />
                ))}
              </div>
              <span className="font-display font-bold text-2xl text-foreground block">Español</span>
              <span className="text-xs text-muted-foreground font-mono mt-2 block tracking-wider uppercase">Colombia · Paraguay · Brasil · México</span>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </div>);

};

export default LanguageSelector;