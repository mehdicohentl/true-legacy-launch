import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "@/components/Footer";
import combinedLogo from "@/assets/combined-logo.png";

import imgConsultation from "@/assets/linktree-consultation.jpg";
import imgEwg from "@/assets/linktree-ewg.png";
import imgEmguarde from "@/assets/linktree-emguarde.png";
import imgK8 from "@/assets/linktree-k8.png";
import imgEmguardeContact from "@/assets/linktree-emguarde-contact.png";
import imgKangen8 from "@/assets/linktree-kangen8.png";
import imgMultipure from "@/assets/linktree-multipure.png";
import imgIonfaucetFilters from "@/assets/linktree-ionfaucet-filters.png";
import imgDeepclean from "@/assets/linktree-deepclean.jpg";
import imgPropump from "@/assets/linktree-propump.png";
import imgFaucets from "@/assets/linktree-faucets.png";
import imgTools from "@/assets/linktree-ionfaucet-tools.png";

interface ResourcesPageProps {
  lang: "en" | "es";
}

const socials = [
  { label: "YouTube", href: "https://www.youtube.com/@TrueLegacyWorld", icon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.9 31.9 0 000 12a31.9 31.9 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.9 31.9 0 0024 12a31.9 31.9 0 00-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>
  )},
  { label: "Instagram", href: "https://www.instagram.com/truelegacyworld/", icon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .2 2.5.4a4.3 4.3 0 011.6 1 4.3 4.3 0 011 1.6c.2.5.3 1.3.4 2.5.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 2-.4 2.5a4.3 4.3 0 01-1 1.6 4.3 4.3 0 01-1.6 1c-.5.2-1.3.3-2.5.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.2-2.5-.4a4.3 4.3 0 01-1.6-1 4.3 4.3 0 01-1-1.6c-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-2 .4-2.5a4.3 4.3 0 011-1.6 4.3 4.3 0 011.6-1c.5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.2 0-3.5 0-4.7.1-1.1 0-1.7.2-2.1.3a3.5 3.5 0 00-1.3.8 3.5 3.5 0 00-.8 1.3c-.1.4-.3 1-.3 2.1C2.7 8.5 2.7 8.8 2.7 12s0 3.5.1 4.7c0 1.1.2 1.7.3 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.1 1 .3 2.1.3 1.2.1 1.5.1 4.7.1s3.5 0 4.7-.1c1.1 0 1.7-.2 2.1-.3.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.1-.4.3-1 .3-2.1.1-1.2.1-1.5.1-4.7s0-3.5-.1-4.7c0-1.1-.2-1.7-.3-2.1a3.5 3.5 0 00-.8-1.3 3.5 3.5 0 00-1.3-.8c-.4-.1-1-.3-2.1-.3C15.5 4 15.2 4 12 4zm0 3.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 1.8a3.1 3.1 0 100 6.2 3.1 3.1 0 000-6.2zm5.1-2.3a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z"/></svg>
  )},
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100063711834790", icon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.7.2 2.7.2v2.9h-1.5c-1.5 0-2 .9-2 1.9v2.2h3.3l-.5 3.5h-2.8v8.4C19.6 23.1 24 18.1 24 12.1z"/></svg>
  )},
  { label: "TikTok", href: "https://www.tiktok.com/@truelegacyworld", icon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.5 2.8h3a4.5 4.5 0 004 3.8v3.3a7.5 7.5 0 01-4-1.2v5.8a6 6 0 11-5.2-5.9v3.4a2.7 2.7 0 102 2.6V2.8z"/></svg>
  )},
  { label: "Email", href: "mailto:aquacharged@gmail.com", icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  )},
  { label: "WhatsApp", href: "https://wa.me/18649072149", icon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 14.4l-2-1c-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.3.3-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5.3-.4c.1-.1.1-.3 0-.4l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.3 0-.2-.2-.3-.4-.4zM12 21.8a9.9 9.9 0 01-5-1.4l-.4-.2-3.7 1 1-3.7-.3-.4A9.8 9.8 0 1121.8 12 9.8 9.8 0 0112 21.8zM12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6A12 12 0 0024 12C24 5.4 18.6 0 12 0z"/></svg>
  )},
  { label: "Website", href: "https://mehdicohen.com", icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.7 0 3-4 3-9s-1.3-9-3-9m0 18c-1.7 0-3-4-3-9s1.3-9 3-9" /></svg>
  )},
];

type CategoryKey = "all" | "info" | "tech" | "upgrades";

// Transparent PNG thumbnails need a subtle background to be visible on dark bg
const transparentThumbs = [
  "linktree-ewg", "linktree-emguarde", "linktree-emguarde-contact",
  "linktree-k8", "linktree-kangen8", "linktree-multipure",
  "linktree-ionfaucet-filters", "linktree-propump", "linktree-faucets",
  "linktree-ionfaucet-tools",
];

const isTransparent = (src: string) =>
  transparentThumbs.some((t) => src.includes(t));

const ResourcesPage = ({ lang }: ResourcesPageProps) => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const whatsappEmguarde = lang === "es" ? "https://wa.me/573001844049" : "https://wa.me/18649072149";

  const categories: { key: CategoryKey; label: string }[] = [
    { key: "all", label: lang === "en" ? "All" : "Todo" },
    { key: "info", label: "Info" },
    { key: "tech", label: "Tech" },
    { key: "upgrades", label: lang === "en" ? "Upgrades" : "Mejoras" },
  ];

  const links = {
    consultation: {
      label: lang === "en"
        ? "Schedule Your Free Wellness Consultation - Mehdi Cohen"
        : "Agenda Tu Consulta de Bienestar Gratuita - Mehdi Cohen",
      href: "https://calendly.com/aquacharged/true-legacy-one-on-one",
      image: imgConsultation,
    },
    info: {
      key: "info" as CategoryKey,
      title: "INFO",
      items: [
        {
          label: lang === "en" ? "⚠️ Check EWG's Tap Water ⚠️" : "⚠️ Revisa Tu Agua del Grifo (EWG) ⚠️",
          href: "https://www.ewg.org/tapwater/",
          image: imgEwg,
        },
        {
          label: "EmGuarde DEMO",
          href: "https://youtu.be/vPlD1fZEdvE?si=QCrNzTGVsNetRGrS",
          image: imgEmguarde,
        },
        {
          label: "Kangen Water DEMO",
          href: "https://youtu.be/fJdfllJpdAg?si=c87_3pu1CuJkdJKQ",
          image: imgK8,
        },
      ],
    },
    tech: {
      key: "tech" as CategoryKey,
      title: "TECH",
      items: [
        {
          label: lang === "en" ? "Contact For EmGuarde" : "Contacto Para EmGuarde",
          href: whatsappEmguarde,
          image: imgEmguardeContact,
        },
        {
          label: "Kangen 8 💦",
          href: "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0&product_id=1016",
          image: imgKangen8,
        },
        {
          label: lang === "en" ? "Pre Filters (Multipure)" : "Pre Filtros (Multipure)",
          href: "https://www.multipure.com/mcardona",
          image: imgMultipure,
        },
        {
          label: lang === "en" ? "Pre Filters (Ionfaucet)" : "Pre Filtros (Ionfaucet)",
          href: "https://ionfaucet.com/pre-filtration-systems",
          image: imgIonfaucetFilters,
        },
      ],
    },
    upgrades: {
      key: "upgrades" as CategoryKey,
      title: lang === "en" ? "UPGRADES & MAINTENANCE" : "MEJORAS Y MANTENIMIENTO",
      items: [
        {
          label: lang === "en"
            ? "How to professionally deep clean Enagic LeveLuk (K8)"
            : "Cómo limpiar profesionalmente tu Enagic LeveLuk (K8)",
          href: "https://www.youtube.com/@TrueLegacyWorld",
          image: imgDeepclean,
        },
        {
          label: lang === "en" ? "Buy PRO Pump" : "Comprar PRO Pump",
          href: "https://ionfaucet.com/ion-clean-machine-pro/",
          image: imgPropump,
        },
        {
          label: "Ionizer Faucets (Ionfaucet)",
          href: "https://ionfaucet.com/products/faucets/ionizer-faucets",
          image: imgFaucets,
        },
        {
          label: lang === "en" ? "Ionfaucet tools accessories" : "Herramientas y accesorios Ionfaucet",
          href: "https://lddy.no/1mols",
          image: imgTools,
        },
      ],
    },
  };

  const allCategories = [links.info, links.tech, links.upgrades];
  const visibleCategories = activeCategory === "all"
    ? allCategories
    : allCategories.filter((cat) => cat.key === activeCategory);

  return (
    <div className="min-h-screen bg-[hsl(210,30%,12%)] text-foreground">
      {/* Banner - responsive aspect ratio for mobile */}
      <div className="relative w-full">
        <div className="w-full aspect-[3/4] sm:aspect-[16/9] md:aspect-[2/1] relative overflow-hidden">
          <img
            src={linktreeBanner}
            alt="True Legacy Banner"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(210,30%,12%)]" />
        </div>
      </div>

      {/* Logo + tagline + socials */}
      <div className="relative z-10 -mt-10 sm:-mt-16 flex flex-col items-center px-4">
        <img
          src={combinedLogo}
          alt="True Legacy | Mehdi Cohen"
          className="h-16 sm:h-24 md:h-32 w-auto mb-2"
        />
        <p className="font-display font-black text-sm sm:text-base md:text-lg text-white/90 text-center mb-4">
          {lang === "en" ? "Creating True Health Around the World." : "Creando Salud Verdadera Alrededor del Mundo."}
        </p>

        {/* Social icons row */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.label === "WhatsApp" && lang === "es" ? "https://wa.me/573001844049" : s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
              title={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Sticky category navigation bar */}
      <div className="sticky top-[60px] z-30 bg-[hsl(210,30%,12%)]/95 backdrop-blur-sm border-b border-white/10 mt-6">
        <div className="max-w-[680px] mx-auto flex items-center justify-center gap-2 px-4 py-3 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                activeCategory === cat.key
                  ? "bg-accent text-accent-foreground"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80 border border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Links section */}
      <div className="max-w-[680px] mx-auto px-4 pt-6 pb-16">
        {/* Top CTA - Consultation (always visible) */}
        <motion.a
          href={links.consultation.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center w-full rounded-full bg-accent hover:brightness-110 transition-all duration-200 mb-8 overflow-hidden"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 overflow-hidden rounded-full m-1">
            <img src={links.consultation.image} alt="" className="w-full h-full object-cover" />
          </div>
          <span className="font-body font-black text-xs sm:text-sm text-accent-foreground flex-1 text-center pr-4 sm:pr-6 py-3 sm:py-4 leading-tight">
            {links.consultation.label}
          </span>
        </motion.a>

        {/* Category sections */}
        {visibleCategories.map((cat, i) => (
          <div key={cat.key} className="mb-6" id={`cat-${cat.key}`}>
            <p className="font-display font-black text-xs uppercase tracking-[0.3em] text-white/50 text-center mb-3">
              {cat.title}
            </p>
            <div className="space-y-3">
              {cat.items.map((item, j) => (
                <motion.a
                  key={j}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: j * 0.04 }}
                  className="flex items-center w-full rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 overflow-hidden"
                >
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 overflow-hidden rounded-full m-1 ${
                      isTransparent(item.image) ? "bg-white/15 p-1" : "bg-white/5"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className={`w-full h-full ${
                        isTransparent(item.image) ? "object-contain" : "object-cover"
                      }`}
                      loading="lazy"
                    />
                  </div>
                  <span className="font-body font-bold text-xs sm:text-sm text-white/90 flex-1 text-center pr-4 sm:pr-6 py-3 sm:py-3.5 leading-tight">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        ))}

        {/* Back to site link */}
        <div className="text-center mt-10">
          <a
            href={lang === "en" ? "/global" : "/latam"}
            className="inline-flex items-center gap-2 text-sm font-body font-bold text-white/40 hover:text-white/70 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            {lang === "en" ? "Back to site" : "Volver al sitio"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
