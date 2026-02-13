import { motion } from "framer-motion";

interface ThankYouSectionProps {
  lang: "en" | "es";
}

const ThankYouSection = ({ lang }: ThankYouSectionProps) => {
  const videoId = lang === "en" ? "irHAKZb21XM" : "pOhK-SDa-9w";
  const title = lang === "en" ? "A Message From Mehdi" : "Un Mensaje De Mehdi";
  const sub = lang === "en"
    ? "Thank you for taking the time to learn about what we do. This is personal."
    : "Gracias por tomarte el tiempo de conocer lo que hacemos. Esto es personal.";

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden noise-overlay">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
           <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent/80 mb-4">
             {lang === "en" ? "Before You Go" : "Antes De Irte"}
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-black mb-4">{title}</h2>
          <p className="text-foreground/70 font-body text-base md:text-lg max-w-xl mx-auto font-medium">{sub}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-3 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-2xl blur-xl" />
          <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 shadow-deep">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0`}
              title="Thank You Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYouSection;
