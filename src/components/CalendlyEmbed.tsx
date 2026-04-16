import React, { useEffect, useRef } from "react";

interface CalendlyEmbedProps {
  lang: "en" | "es";
}

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

export default function CalendlyEmbed({ lang }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // ensure script is loaded once
    if (!document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`)) {
      const s = document.createElement("script");
      s.src = CALENDLY_SCRIPT;
      s.async = true;
      document.body.appendChild(s);
    }

    // When switching lang, update data-url attribute so Calendly loads correct event
    if (containerRef.current) {
      const url =
        lang === "en"
          ? "https://calendly.com/aquacharged/true-legacy-one-on-one?hide_event_type_details=1&hide_gdpr_banner=1"
          : "https://calendly.com/truelegacylatamenagic/45min?hide_event_type_details=1&hide_gdpr_banner=1";
      containerRef.current.setAttribute("data-url", url);
    }
  }, [lang]);

  return (
    <div className="my-8">
      <div
        ref={containerRef}
        className="calendly-inline-widget"
        // initial data-url kept for SSR fallback; updated on client in useEffect
        data-url={
          lang === "en"
            ? "https://calendly.com/aquacharged/true-legacy-one-on-one?hide_event_type_details=1&hide_gdpr_banner=1"
            : "https://calendly.com/truelegacylatamenagic/45min?hide_event_type_details=1&hide_gdpr_banner=1"
        }
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
}
