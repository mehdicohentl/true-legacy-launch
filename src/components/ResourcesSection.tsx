import { motion } from "framer-motion";
import imgMultipure from "@/assets/product-multipure.png";
import imgProPump from "@/assets/product-pro-pump.png";
import imgFaucet from "@/assets/product-ionizer-faucet.png";
import imgFilters from "@/assets/product-ionfaucet-filters.png";
import imgK8 from "@/assets/product-k8.png";
import imgEmguarde from "@/assets/emguarde-device.png";
import imgIonfaucetLogo from "@/assets/product-ionfaucet-logo.png";

interface ResourcesSectionProps {
  lang: "en" | "es";
}

interface LinkItem {
  label: string;
  href: string;
  image?: string;
}

interface Category {
  title: string;
  links: LinkItem[];
}

const ResourcesSection = ({ lang }: ResourcesSectionProps) => {
  const t = {
    en: {
      micro: "Resources & Links",
      headline: "Your One-Stop Hub",
      categories: [
        {
          title: "INFO",
          links: [
            { label: "⚠️ Check EWG's Tap Water ⚠️", href: "https://www.ewg.org/tapwater/", image: undefined },
            { label: "EmGuarde DEMO", href: "https://youtu.be/vPlD1fZEdvE?si=QCrNzTGVsNetRGrS", image: imgEmguarde },
            { label: "Kangen Water DEMO", href: "https://youtu.be/fJdfllJpdAg?si=c87_3pu1CuJkdJKQ", image: imgK8 },
          ],
        },
        {
          title: "TECH",
          links: [
            { label: "Contact For EmGuarde", href: "https://wa.me/18649072149", image: imgEmguarde },
            { label: "Kangen 8 💧", href: "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0&product_id=1016", image: imgK8 },
            { label: "Pre Filters (Multipure)", href: "https://www.multipure.com/mcardona", image: imgMultipure },
            { label: "Pre Filters (Ionfaucet)", href: "https://ionfaucet.com/pre-filtration-systems", image: imgFilters },
          ],
        },
        {
          title: "UPGRADES & MAINTENANCE",
          links: [
            { label: "How to professionally deep clean Enagic LeveLuk (K8)", href: "https://www.youtube.com/@TrueLegacyWorld", image: undefined },
            { label: "Buy PRO Pump", href: "https://ionfaucet.com/ion-clean-machine-pro/", image: imgProPump },
            { label: "Ionizer Faucets (Ionfaucet)", href: "https://ionfaucet.com/products/faucets/ionizer-faucets", image: imgFaucet },
            { label: "Ionfaucet tools accessories", href: "https://lddy.no/1mols", image: imgIonfaucetLogo },
          ],
        },
      ] as Category[],
    },
    es: {
      micro: "Recursos y Enlaces",
      headline: "Tu Centro de Recursos",
      categories: [
        {
          title: "INFO",
          links: [
            { label: "⚠️ Revisa Tu Agua del Grifo (EWG) ⚠️", href: "https://www.ewg.org/tapwater/", image: undefined },
            { label: "EmGuarde DEMO", href: "https://youtu.be/vPlD1fZEdvE?si=QCrNzTGVsNetRGrS", image: imgEmguarde },
            { label: "Kangen Water DEMO", href: "https://youtu.be/fJdfllJpdAg?si=c87_3pu1CuJkdJKQ", image: imgK8 },
          ],
        },
        {
          title: "TECH",
          links: [
            { label: "Contacto Para EmGuarde", href: "https://wa.me/573001844049", image: imgEmguarde },
            { label: "Kangen 8 💧", href: "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0&product_id=1016", image: imgK8 },
            { label: "Pre Filtros (Multipure)", href: "https://www.multipure.com/mcardona", image: imgMultipure },
            { label: "Pre Filtros (Ionfaucet)", href: "https://ionfaucet.com/pre-filtration-systems", image: imgFilters },
          ],
        },
        {
          title: "MEJORAS Y MANTENIMIENTO",
          links: [
            { label: "Cómo limpiar profesionalmente tu Enagic LeveLuk (K8)", href: "https://www.youtube.com/@TrueLegacyWorld", image: undefined },
            { label: "Comprar PRO Pump", href: "https://ionfaucet.com/ion-clean-machine-pro/", image: imgProPump },
            { label: "Grifos Ionizadores (Ionfaucet)", href: "https://ionfaucet.com/products/faucets/ionizer-faucets", image: imgFaucet },
            { label: "Herramientas y Accesorios Ionfaucet", href: "https://lddy.no/1mols", image: imgIonfaucetLogo },
          ],
        },
      ] as Category[],
    },
  };

  const c = t[lang];

  return (
    <section id="resources" className="py-20 md:py-28 bg-card relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-card/95 to-card" />

      <div className="container mx-auto px-4 relative z-10 max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent font-bold mb-6 text-center"
        >
          {c.micro}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl lg:text-5xl font-display font-black text-foreground text-center mb-14"
        >
          {c.headline}
        </motion.h2>

        <div className="space-y-10">
          {c.categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-display font-black text-sm uppercase tracking-[0.2em] text-foreground/80 text-center mb-4">
                {cat.title}
              </h3>
              <div className="space-y-3">
                {cat.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.href}
                    target={link.href.startsWith("/") ? undefined : "_blank"}
                    rel={link.href.startsWith("/") ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/10 hover:border-accent/40 hover:shadow-gold transition-all duration-300 group"
                  >
                    {link.image ? (
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-background/30 flex-shrink-0 flex items-center justify-center">
                        <img src={link.image} alt="" className="w-full h-full object-contain" loading="lazy" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-background/20 flex-shrink-0" />
                    )}
                    <span className="font-body font-black text-sm text-foreground group-hover:text-accent transition-colors text-center flex-1">
                      {link.label}
                    </span>
                    <div className="w-10 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
