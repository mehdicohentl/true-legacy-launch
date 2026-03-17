import { motion } from "framer-motion";

interface ResourcesSectionProps {
  lang: "en" | "es";
}

const ResourcesSection = ({ lang }: ResourcesSectionProps) => {
  const resourcesLink = lang === "en" ? "/global/resources" : "/latam/resources";

  return (
    <section id="resources" className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-card/95 to-card" />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4"
        >
          {lang === "en" ? "Resources & Links" : "Recursos y Enlaces"}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-display font-black text-foreground mb-4"
        >
          {lang === "en" ? "Your One-Stop Hub" : "Tu Centro de Recursos"}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body text-sm md:text-base text-foreground/60 font-bold mb-8"
        >
          {lang === "en"
            ? "Product demos, ordering links, maintenance tools, and everything you need — all in one place."
            : "Demos de productos, enlaces de compra, herramientas de mantenimiento y todo lo que necesitas — todo en un solo lugar."}
        </motion.p>
        <motion.a
          href={resourcesLink}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] bg-accent text-accent-foreground shadow-gold transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          {lang === "en" ? "View All Resources" : "Ver Todos los Recursos"}
        </motion.a>
      </div>
    </section>
  );
};

export default ResourcesSection;
