import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import trueLegacyLogo from "@/assets/true-legacy-logo.png";
import mehdiLogo from "@/assets/mehdi-logo.png";

const LanguageSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-hero-gradient flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "linear-gradient(hsl(213 70% 45% / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(213 70% 45% / 0.15) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <img src={trueLegacyLogo} alt="True Legacy" className="h-16 w-auto" />
          <div className="h-10 w-px bg-border" />
          <img src={mehdiLogo} alt="Mehdi Cohen" className="h-12 w-auto" />
        </div>

        <h1 className="text-3xl md:text-5xl font-display font-black mb-3 text-foreground">
          Welcome
        </h1>
        <p className="text-muted-foreground font-body text-lg mb-12">
          Choose your language / Elige tu idioma
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <motion.button
            onClick={() => navigate("/en")}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-12 py-6 rounded-2xl bg-secondary border-2 border-border hover:border-accent/50 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-5xl mb-3 block">🇺🇸</span>
            <span className="font-display font-bold text-xl text-foreground block">English</span>
            <span className="text-xs text-muted-foreground font-body mt-1 block">United States</span>
          </motion.button>

          <motion.button
            onClick={() => navigate("/es")}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-12 py-6 rounded-2xl bg-secondary border-2 border-border hover:border-accent/50 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-5xl mb-3 block">🇲🇽</span>
            <span className="font-display font-bold text-xl text-foreground block">Español</span>
            <span className="text-xs text-muted-foreground font-body mt-1 block">México / Latinoamérica</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default LanguageSelector;
