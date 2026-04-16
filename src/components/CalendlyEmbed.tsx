import React, { useEffect, useRef, useState } from "react";

interface CalendlyEmbedProps {
  lang: "en" | "es";
}

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

export default function CalendlyEmbed({ lang }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Setup IntersectionObserver for lazy-loading the script
    if (!observerRef.current && containerRef.current && !scriptLoaded) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !scriptLoaded) {
              // Widget is now visible, load the script
              if (!document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`)) {
                const s = document.createElement("script");
                s.src = CALENDLY_SCRIPT;
                s.async = true;
                document.body.appendChild(s);
              }
              setScriptLoaded(true);
              // Disconnect observer after script is loaded
              if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
              }
            }
          });
        },
        {
          threshold: 0.1, // Trigger when 10% of widget is visible
        }
      );

      observerRef.current.observe(containerRef.current);
    }

    // Fallback for browsers that don't support IntersectionObserver
    if (!("IntersectionObserver" in window) && !scriptLoaded) {
      if (!document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`)) {
        const s = document.createElement("script");
        s.src = CALENDLY_SCRIPT;
        s.async = true;
        document.body.appendChild(s);
      }
      setScriptLoaded(true);
    }

    return () => {
      // Cleanup observer on unmount
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [scriptLoaded]);

  // When switching lang or after script loads, update data-url attribute
  useEffect(() => {
    if (containerRef.current) {
      const url =
        lang === "en"
          ? "https://calendly.com/aquacharged/true-legacy-one-on-one?hide_event_type_details=1&hide_gdpr_banner=1"
          : "https://calendly.com/truelegacylatamenagic/45min?hide_event_type_details=1&hide_gdpr_banner=1";
      containerRef.current.setAttribute("data-url", url);
    }
  }, [lang, scriptLoaded]);

  return (
    <div className="my-8">
      <div
        ref={containerRef}
        className="calendly-inline-widget"
        data-testid="calendly-embed"
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
