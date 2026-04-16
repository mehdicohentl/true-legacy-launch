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
          <h2 className="text-3xl md:text-5xl font-display font-black mb-4">{lang === "en" ? "Book a Call with Mehdi Cohen" : "Agenda una Llamada con Mehdi Cohen"}</h2>
          <p className="text-foreground font-body text-base md:text-lg max-w-xl mx-auto font-bold">{sub}</p>
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
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href={lang === "en" ? "https://calendly.com/aquacharged/true-legacy-one-on-one" : "https://calendly.com/truelegacylatamenagic/45min"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground font-bold rounded-full px-8 py-4 text-base md:text-lg shadow-gold hover:scale-105 transition-transform duration-200 cta-shimmer"
          >
            {lang === "en" ? "Book a 30-Minute Clarity Call" : "Reserva una Llamada de Claridad de 30 Minutos"}
          </a>

          <div className="my-8">
            {lang === "en" ? (
              <>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/aquacharged/true-legacy-one-on-one?hide_event_type_details=1&hide_gdpr_banner=1"
                  style={{ minWidth: '320px', height: '700px' }}
                ></div>
              </>
            ) : (
              <>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/truelegacylatamenagic/45min?hide_event_type_details=1&hide_gdpr_banner=1"
                  style={{ minWidth: '320px', height: '700px' }}
                ></div>
              </>
            )}
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYouSection;
