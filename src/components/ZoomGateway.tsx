import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const ZOOM_URL = "https://us02web.zoom.us/j/87614486219?pwd=YcmJqE7nyYnShh2jdFVz4kRdFygQpv.1";

type GatewayState = "question" | "form" | "success";

const ZoomGateway = () => {
  const [state, setState] = useState<GatewayState>("question");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleYes = () => {
    window.open(ZOOM_URL, "_blank", "noopener,noreferrer");
  };

  const handleNo = () => setState("form");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Invalid email address";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setSubmitting(true);
    const { error } = await supabase.from("zoom_registrations").insert({
      first_name: form.firstName.trim(),
      last_name: form.lastName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
    });

    if (error) {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
      setSubmitting(false);
      return;
    }

    window.open(ZOOM_URL, "_blank", "noopener,noreferrer");
    setState("success");
    setSubmitting(false);
  };

  const inputClass =
    "w-full rounded-xl bg-background/60 border border-border/30 px-4 py-3.5 text-foreground placeholder:text-foreground/40 font-body text-sm focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-colors";

  return (
    <section id="zoom-gateway" className="py-16 md:py-24 bg-background relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/3 via-transparent to-primary/3" />
      <div className="container mx-auto px-4 relative z-10 max-w-2xl">
        <AnimatePresence mode="wait">
          {/* QUESTION STATE */}
          {state === "question" && (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-4xl font-display font-black text-foreground mb-2">
                Secure Your Spot
              </h2>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6">
                Thursday Live — True Legacy World
              </p>
              <div className="w-16 h-px bg-accent/40 mx-auto mb-10" />

              <p className="font-body text-base md:text-lg text-foreground/90 font-bold mb-8">
                Have you attended a True Legacy Zoom event before?
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleYes}
                  className="flex-1 px-6 py-4 rounded-xl font-body font-black text-sm uppercase tracking-[0.1em] border border-accent/30 text-accent hover:bg-accent/10 transition-colors"
                >
                  Yes, I Have Attended Before
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleNo}
                  className="flex-1 px-6 py-4 rounded-xl font-body font-black text-sm uppercase tracking-[0.1em] bg-accent text-accent-foreground shadow-gold"
                >
                  No, This Is My First Time
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* FORM STATE */}
          {state === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-4xl font-display font-black text-foreground mb-2 text-center">
                Register for Access
              </h2>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-8 text-center">
                First-Time Attendee Registration
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className={inputClass}
                  />
                  {errors.firstName && <p className="text-destructive text-xs mt-1 font-body">{errors.firstName}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className={inputClass}
                  />
                  {errors.lastName && <p className="text-destructive text-xs mt-1 font-body">{errors.lastName}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1 font-body">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                  />
                  {errors.phone && <p className="text-destructive text-xs mt-1 font-body">{errors.phone}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] bg-accent text-accent-foreground shadow-gold hover:brightness-110 transition-all disabled:opacity-60"
                >
                  {submitting ? "Registering..." : "Register and Join the Call"}
                </motion.button>
              </form>
            </motion.div>
          )}

          {/* SUCCESS STATE */}
          {state === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-4xl font-display font-black text-foreground mb-3">
                Welcome to True Legacy World
              </h2>
              <p className="font-body text-base text-foreground/80 mb-8">
                You are registered. Your Zoom link has opened in a new tab. Check your email for your access link.
              </p>
              <motion.a
                href={ZOOM_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-full items-center justify-center gap-3 px-8 py-4 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] bg-accent text-accent-foreground shadow-gold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Join the Zoom Call Now
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ZoomGateway;
