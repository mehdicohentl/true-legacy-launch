import { motion } from "framer-motion";
import { Filter, Wrench, Droplets, ShoppingBag } from "lucide-react";
import imgMultipure from "@/assets/product-multipure.png";
import imgProPump from "@/assets/product-pro-pump.png";
import imgFaucet from "@/assets/product-ionizer-faucet.png";
import imgFilters from "@/assets/product-ionfaucet-filters.png";

interface ResourcesSectionProps {
  lang: "en" | "es";
}

const ResourcesSection = ({ lang }: ResourcesSectionProps) => {
  const t = {
    en: {
      micro: "Tools & Accessories",
      headline: "Resources for Your Kangen Machine",
      categories: [
        {
          title: "Pre-Filtration",
          icon: Filter,
          links: [
            { label: "Multipure Pre-Filters", href: "https://www.multipure.com/mcardona" },
            { label: "Ionfaucet Pre-Filtration", href: "https://ionfaucet.com/pre-filtration-systems" },
          ],
        },
        {
          title: "Upgrades & Maintenance",
          icon: Wrench,
          links: [
            { label: "PRO Pump (Ion Clean)", href: "https://ionfaucet.com/ion-clean-machine-pro/" },
            { label: "Ionizer Faucets", href: "https://ionfaucet.com/products/faucets/ionizer-faucets" },
            { label: "All Tools & Accessories", href: "https://lddy.no/1mols" },
          ],
        },
        {
          title: "Water Quality",
          icon: Droplets,
          links: [
            { label: "Check Your Tap Water (EWG)", href: "https://www.ewg.org/tapwater/" },
          ],
        },
        {
          title: "Order Your Machine",
          icon: ShoppingBag,
          links: [
            { label: "Official Enagic Store", href: "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0&product_id=1016" },
            { label: "Book a Wellness Call", href: "https://calendly.com/aquacharged/true-legacy-one-on-one" },
          ],
        },
      ],
    },
    es: {
      micro: "Herramientas y Accesorios",
      headline: "Recursos para Tu Máquina Kangen",
      categories: [
        {
          title: "Pre-Filtración",
          icon: Filter,
          links: [
            { label: "Pre-Filtros Multipure", href: "https://www.multipure.com/mcardona" },
            { label: "Pre-Filtración Ionfaucet", href: "https://ionfaucet.com/pre-filtration-systems" },
          ],
        },
        {
          title: "Mejoras y Mantenimiento",
          icon: Wrench,
          links: [
            { label: "PRO Pump (Ion Clean)", href: "https://ionfaucet.com/ion-clean-machine-pro/" },
            { label: "Grifos Ionizadores", href: "https://ionfaucet.com/products/faucets/ionizer-faucets" },
            { label: "Herramientas y Accesorios", href: "https://lddy.no/1mols" },
          ],
        },
        {
          title: "Calidad del Agua",
          icon: Droplets,
          links: [
            { label: "Revisa Tu Agua del Grifo (EWG)", href: "https://www.ewg.org/tapwater/" },
          ],
        },
        {
          title: "Ordena Tu Máquina",
          icon: ShoppingBag,
          links: [
            { label: "Tienda Oficial Enagic", href: "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0&product_id=1016" },
            { label: "Agenda una Llamada", href: "https://calendly.com/aquacharged/true-legacy-one-on-one" },
          ],
        },
      ],
    },
  };

  const c = t[lang];

  return (
    <section id="resources" className="py-20 md:py-28 bg-card relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-card/95 to-card" />

      <div className="container mx-auto px-4 relative z-10">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {c.categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-xl p-6 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="font-body font-black text-base text-foreground mb-4">{cat.title}</h3>
                <div className="space-y-2.5">
                  {cat.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-body text-sm text-foreground/70 hover:text-accent font-bold transition-colors leading-relaxed"
                    >
                      → {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
