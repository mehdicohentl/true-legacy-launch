import type { FormEvent } from "react";
import { LockKeyhole } from "lucide-react";
import combinedLogo from "@/assets/combined-logo.png";
import { kangenSupabase } from "@/integrations/supabase/kangenClient";
import { isCrmAdminEmail } from "@/lib/crmAuth";

interface CrmLoginCardProps {
  message: string;
  redirectPath: string;
  setMessage: (message: string) => void;
}

const CrmLoginCard = ({ message, redirectPath, setMessage }: CrmLoginCardProps) => {
  const signInWithPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const password = String(formData.get("password") || "");

    if (!isCrmAdminEmail(email)) {
      setMessage("This portal is restricted to an authorized CRM administrator.");
      return;
    }

    const { error } = await kangenSupabase.auth.signInWithPassword({ email, password });
    setMessage(error ? "The email or password was not accepted." : "");
  };

  const sendMagicLink = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    const email = String(new FormData(event.currentTarget).get("email") || "").trim().toLowerCase();

    if (!isCrmAdminEmail(email)) {
      setMessage("This portal is restricted to an authorized CRM administrator.");
      return;
    }

    const { error } = await kangenSupabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}${redirectPath}` },
    });
    setMessage(error ? "The secure sign-in link could not be sent." : "Check your email for the secure sign-in link.");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-accent/20 bg-card/70 p-8 text-center shadow-glow">
        <img src={combinedLogo} alt="True Legacy" className="mx-auto h-16" />
        <div className="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent"><LockKeyhole className="h-7 w-7" /></div>
        <h1 className="mt-5 text-3xl font-black">Mehdi Cohen CRM</h1>
        <p className="mt-3 text-sm leading-relaxed text-foreground/60">Sign in with the email and password connected to your administrator profile.</p>
        <form onSubmit={signInWithPassword} className="mt-7 grid gap-4">
          <input required name="email" type="email" autoComplete="email" placeholder="Authorized email" defaultValue="mehdicohen1@proton.me" className="h-12 rounded-xl border border-border bg-background px-4 outline-none focus:border-accent/60" />
          <input required name="password" type="password" autoComplete="current-password" placeholder="Password" className="h-12 rounded-xl border border-border bg-background px-4 outline-none focus:border-accent/60" />
          <button className="h-12 rounded-xl bg-primary font-black uppercase tracking-wider text-primary-foreground shadow-glow">Sign in securely</button>
        </form>
        <div className="my-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/30"><span className="h-px flex-1 bg-border" />or<span className="h-px flex-1 bg-border" /></div>
        <form onSubmit={sendMagicLink} className="grid gap-3">
          <input required name="email" type="email" autoComplete="email" placeholder="Authorized email" defaultValue="mehdicohen1@proton.me" className="h-12 rounded-xl border border-border bg-background px-4 outline-none focus:border-accent/60" />
          <button className="h-12 rounded-xl border border-accent/30 font-bold text-accent hover:bg-accent/10">Email me a sign-in link</button>
        </form>
        {message && <p role="alert" className="mt-4 text-sm text-accent">{message}</p>}
      </div>
    </main>
  );
};

export default CrmLoginCard;
