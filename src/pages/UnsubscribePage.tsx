import { useEffect, useState } from "react";
import { CheckCircle2, CircleX } from "lucide-react";
import { kangenSupabase } from "@/integrations/supabase/kangenClient";
import combinedLogo from "@/assets/combined-logo.png";
import { setPageMeta } from "@/lib/seo";

const UnsubscribePage = () => {
  const [state, setState] = useState<"loading" | "done" | "invalid">("loading");

  useEffect(() => {
    setPageMeta("Email Preferences | True Legacy", "Manage your True Legacy email preferences.");
    const token = new URLSearchParams(window.location.search).get("token");
    if (!token) { setState("invalid"); return; }
    kangenSupabase.rpc("unsubscribe_from_true_legacy", { token }).then(({ data, error }) => setState(!error && data ? "done" : "invalid"));
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-xl rounded-3xl border border-accent/20 bg-card/70 p-8 text-center shadow-glow md:p-12">
        <img src={combinedLogo} alt="True Legacy" className="mx-auto h-16" />
        {state === "loading" ? <p className="mt-10 text-foreground/60">Updating your email preferences...</p> : state === "done" ? <><CheckCircle2 className="mx-auto mt-9 h-14 w-14 text-emerald-400" /><h1 className="mt-5 text-3xl font-black">You’re unsubscribed</h1><p className="mt-3 text-foreground/60">You will no longer receive nurture emails from True Legacy.</p><p className="mt-2 text-foreground/60">Ya no recibirás correos de seguimiento de True Legacy.</p></> : <><CircleX className="mx-auto mt-9 h-14 w-14 text-orange-400" /><h1 className="mt-5 text-3xl font-black">This link is not valid</h1><p className="mt-3 text-foreground/60">Please contact truelegacyworld@gmail.com if you need help with your email preferences.</p></>}
      </div>
    </main>
  );
};

export default UnsubscribePage;
