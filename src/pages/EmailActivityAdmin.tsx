import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { CheckCircle2, Clock3, LockKeyhole, LogOut, Mail, RefreshCw, Search, Send, TriangleAlert } from "lucide-react";
import { kangenSupabase } from "@/integrations/supabase/kangenClient";
import type { Tables } from "@/integrations/supabase/types";
import CrmNavigation from "@/components/CrmNavigation";
import combinedLogo from "@/assets/combined-logo.png";
import { setPageMeta } from "@/lib/seo";

const ADMIN_EMAIL = "truelegacyworld@gmail.com";
type EmailItem = Tables<"email_queue">;

const EmailActivityAdmin = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loadingSession, setLoadingSession] = useState(true);
  const [items, setItems] = useState<EmailItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const isAdmin = session?.user.email?.toLowerCase() === ADMIN_EMAIL;

  useEffect(() => {
    setPageMeta("Email Activity | True Legacy CRM", "Private True Legacy email activity portal.");
    kangenSupabase.auth.getSession().then(({ data }) => { setSession(data.session); setLoadingSession(false); });
    const { data } = kangenSupabase.auth.onAuthStateChange((_event, next) => setSession(next));
    return () => data.subscription.unsubscribe();
  }, []);

  const loadItems = useCallback(async () => {
    if (!isAdmin) return;
    setLoading(true);
    const { data, error } = await kangenSupabase.from("email_queue").select("*").order("created_at", { ascending: false }).limit(500);
    setItems(data || []);
    setMessage(error ? "Email activity could not be loaded." : "");
    setLoading(false);
  }, [isAdmin]);

  useEffect(() => { void loadItems(); }, [loadItems]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => [item.recipient_name, item.recipient_email, item.lead_type, item.template_key, item.status].join(" ").toLowerCase().includes(q));
  }, [items, search]);

  const processDue = async () => {
    setMessage("Sending due emails...");
    const { error } = await kangenSupabase.functions.invoke("crm-email", { body: { mode: "process_due_admin" } });
    setMessage(error ? "Due emails could not be processed. Please try again." : "Due emails were processed successfully.");
    await loadItems();
  };

  const retry = async (id: string) => {
    setMessage("Retrying email...");
    const { error } = await kangenSupabase.functions.invoke("crm-email", { body: { mode: "retry", emailId: id } });
    setMessage(error ? "The email could not be retried." : "The email was retried.");
    await loadItems();
  };

  const signIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") || "").trim().toLowerCase();
    if (email !== ADMIN_EMAIL) { setMessage("This portal is restricted to the authorized administrator."); return; }
    const { error } = await kangenSupabase.auth.signInWithOtp({ email, options: { emailRedirectTo: `${window.location.origin}/admin/email-activity` } });
    setMessage(error ? "The secure sign-in link could not be sent." : "Check your email for your secure sign-in link.");
  };

  if (loadingSession) return <div className="min-h-screen bg-background" />;
  if (!session || !isAdmin) return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-3xl border border-accent/20 bg-card/70 p-8 text-center shadow-glow">
        <img src={combinedLogo} alt="True Legacy" className="mx-auto h-16" />
        <div className="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent"><LockKeyhole className="h-7 w-7" /></div>
        <h1 className="mt-5 text-3xl font-black">Private email portal</h1>
        <p className="mt-3 text-sm text-foreground/60">Sign in securely to monitor confirmations and follow-up emails.</p>
        <form onSubmit={signIn} className="mt-7 grid gap-4">
          <input required name="email" type="email" defaultValue={ADMIN_EMAIL} className="h-12 rounded-xl border border-border bg-background px-4 outline-none focus:border-accent/60" />
          <button className="h-12 rounded-xl bg-primary font-black uppercase tracking-wider text-primary-foreground shadow-glow">Send secure sign-in link</button>
        </form>
        {message && <p className="mt-4 text-sm text-accent">{message}</p>}
      </div>
    </main>
  );

  const totals = {
    sent: items.filter((item) => item.status === "sent").length,
    pending: items.filter((item) => item.status === "pending" || item.status === "sending").length,
    failed: items.filter((item) => item.status === "failed").length,
  };

  return (
    <main className="min-h-screen bg-background px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-5 border-b border-border pb-7 md:flex-row md:items-end md:justify-between">
          <div><img src={combinedLogo} alt="True Legacy" className="mb-6 h-12" /><p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">Internal CRM</p><h1 className="mt-2 text-3xl font-black md:text-5xl">Email activity</h1><p className="mt-2 text-sm text-foreground/50">Confirmations and nurture follow-ups in one place</p></div>
          <button onClick={() => kangenSupabase.auth.signOut()} className="inline-flex items-center gap-2 self-start rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground/70 hover:text-accent"><LogOut className="h-4 w-4" /> Sign out</button>
        </header>
        <CrmNavigation />

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ["Delivered", totals.sent, CheckCircle2, "text-emerald-400"],
            ["Scheduled", totals.pending, Clock3, "text-accent"],
            ["Needs attention", totals.failed, TriangleAlert, "text-orange-400"],
          ].map(([label, count, Icon, color]) => <div key={String(label)} className="rounded-2xl border border-border bg-card/60 p-5"><Icon className={`h-5 w-5 ${color}`} /><p className="mt-4 text-3xl font-black">{String(count)}</p><p className="text-xs uppercase tracking-wider text-muted-foreground">{String(label)}</p></div>)}
        </section>

        <section className="mt-6 overflow-hidden rounded-2xl border border-border bg-card/50">
          <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex h-11 flex-1 items-center gap-3 rounded-xl border border-border bg-background px-4 sm:max-w-md"><Search className="h-4 w-4 text-muted-foreground" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search name, email, campaign, or status" className="w-full bg-transparent text-sm outline-none" /></label>
            <div className="flex gap-2"><button onClick={loadItems} className="inline-flex h-11 items-center gap-2 rounded-xl border border-border px-4 text-sm font-bold"><RefreshCw className="h-4 w-4" /> Refresh</button><button onClick={processDue} className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-black text-primary-foreground"><Send className="h-4 w-4" /> Send due now</button></div>
          </div>
          <div className="overflow-x-auto"><table className="w-full min-w-[1050px] text-left text-sm"><thead className="bg-background/60 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"><tr>{["Scheduled", "Contact", "Sequence", "Type", "Status", "Action"].map((label) => <th key={label} className="px-5 py-4 font-medium">{label}</th>)}</tr></thead><tbody className="divide-y divide-border/70">{filtered.map((item) => <tr key={item.id} className="hover:bg-accent/[0.03]"><td className="whitespace-nowrap px-5 py-4 text-foreground/55">{new Date(item.scheduled_for).toLocaleString()}</td><td className="px-5 py-4"><p className="font-bold">{item.recipient_name}</p><a href={`mailto:${item.recipient_email}`} className="text-xs text-accent">{item.recipient_email}</a></td><td className="px-5 py-4">{item.template_key.replaceAll("_", " ")}</td><td className="px-5 py-4 uppercase text-foreground/60">{item.lead_type}</td><td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${item.status === "sent" ? "bg-emerald-400/10 text-emerald-400" : item.status === "failed" ? "bg-orange-400/10 text-orange-400" : "bg-accent/10 text-accent"}`}>{item.status}</span>{item.last_error && <p className="mt-2 max-w-xs truncate text-xs text-orange-300" title={item.last_error}>{item.last_error}</p>}</td><td className="px-5 py-4">{item.status === "failed" ? <button onClick={() => retry(item.id)} className="rounded-lg border border-orange-400/30 px-3 py-2 text-xs font-bold text-orange-300">Retry</button> : <Mail className="h-4 w-4 text-foreground/25" />}</td></tr>)}</tbody></table></div>
          {!loading && !filtered.length && <div className="p-12 text-center text-sm text-muted-foreground">No email activity found.</div>}
          {loading && <div className="p-12 text-center text-sm text-muted-foreground">Loading email activity...</div>}
          {message && <div className="border-t border-border p-4 text-sm text-accent">{message}</div>}
        </section>
      </div>
    </main>
  );
};

export default EmailActivityAdmin;
