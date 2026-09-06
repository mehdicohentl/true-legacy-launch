import { createClient } from "npm:@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const FROM_EMAIL = Deno.env.get("CRM_EMAIL_FROM") || "True Legacy <hello@updates.mehdicohen.com>";
const SITE_URL = "https://www.mehdicohen.com";
const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

const escapeHtml = (value: unknown) => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const button = (label: string, url: string, orange = false) => `
  <a href="${url}" style="display:inline-block;padding:14px 22px;border-radius:10px;background:${orange ? "#ff7a1a" : "#13cde3"};color:#041018;text-decoration:none;font-weight:800;letter-spacing:.04em">${label}</a>`;

const layout = (title: string, body: string, token: string, preheader: string) => `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${escapeHtml(title)}</title></head>
<body style="margin:0;background:#050f18;color:#eef7fb;font-family:Arial,Helvetica,sans-serif">
  <div style="display:none;max-height:0;overflow:hidden">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#050f18"><tr><td align="center" style="padding:28px 14px">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#0a1b27;border:1px solid #173747;border-radius:18px;overflow:hidden">
      <tr><td style="padding:28px 32px;border-bottom:1px solid #173747"><div style="font-size:12px;letter-spacing:.24em;color:#13cde3;font-weight:700">TRUE LEGACY WORLD</div><h1 style="margin:12px 0 0;font-size:30px;line-height:1.15;color:#ffffff">${escapeHtml(title)}</h1></td></tr>
      <tr><td style="padding:30px 32px;font-size:16px;line-height:1.65;color:#c6d3da">${body}</td></tr>
      <tr><td style="padding:22px 32px;border-top:1px solid #173747;font-size:12px;line-height:1.6;color:#75909d">True Legacy World · <a href="mailto:truelegacyworld@gmail.com" style="color:#13cde3">truelegacyworld@gmail.com</a><br><a href="${SITE_URL}/unsubscribe?token=${token}" style="color:#75909d">Unsubscribe / Cancelar suscripción</a></td></tr>
    </table>
  </td></tr></table>
</body></html>`;

type QueueItem = {
  id: string;
  recipient_email: string;
  recipient_name: string;
  language: "en" | "es";
  lead_type: "kangen" | "emguarde" | "event" | "team";
  template_key: string;
  payload: Record<string, unknown>;
};

const template = (item: QueueItem, token: string) => {
  const es = item.language === "es";
  const first = escapeHtml(item.payload?.first_name || item.recipient_name.split(" ")[0]);
  const globalZoom = "https://us06web.zoom.us/j/88577734807?pwd=C02Pr5lK6HEYyXsXiBo1wqAS7ZcVLV.1";
  const latamZoom = "https://us06web.zoom.us/j/84852244046?pwd=Ci7k3oLkcaBa5odDvrw6O9fokzXbK8.1";
  const entries: Record<string, { subject: string; title: string; preheader: string; body: string }> = {
    kangen_guide: es ? {
      subject: "Tu guía de Agua Kangen está lista",
      title: "Tu guía de Agua Kangen está lista",
      preheader: "Descarga tu e-book gratuito de True Legacy.",
      body: `<p>Hola ${first},</p><p>Gracias por solicitar la guía de Agua Kangen de True Legacy. Ya puedes descargarla y explorar el sistema K8, los distintos niveles de agua y los próximos pasos.</p><p>${button("DESCARGAR LA GUÍA", `${SITE_URL}/guides/true-legacy-kangen-water-guide-es.pdf`)}</p><p>Si tienes preguntas, responde directamente a este correo.</p>`,
    } : {
      subject: "Your Kangen Water guide is ready",
      title: "Your Kangen Water guide is ready",
      preheader: "Download your complimentary True Legacy e-book.",
      body: `<p>Hi ${first},</p><p>Thanks for requesting the True Legacy Kangen Water guide. You can now explore the K8 system, the different water levels, and your next steps.</p><p>${button("DOWNLOAD YOUR GUIDE", `${SITE_URL}/guides/true-legacy-kangen-water-guide-en.pdf`)}</p><p>If you have questions, simply reply to this email.</p>`,
    },
    kangen_education: es ? {
      subject: "3 cosas que debes saber sobre el K8",
      title: "Conoce mejor el sistema K8",
      preheader: "Una guía rápida para aprovechar tu e-book.",
      body: `<p>Hola ${first},</p><p>Al revisar tu guía, presta atención a tres puntos: cómo funciona la ionización, para qué sirve cada nivel de agua y qué acompañamiento recibes al comenzar.</p><p>${button("VER LA PRESENTACIÓN COMPLETA", `${SITE_URL}/latam/kangen-guide`)}</p>`,
    } : {
      subject: "3 things to know about the K8",
      title: "Get to know the K8 system",
      preheader: "A quick way to get more from your guide.",
      body: `<p>Hi ${first},</p><p>As you review the guide, focus on three things: how ionization works, the purpose of each water level, and the support available when you begin.</p><p>${button("VIEW THE FULL PRESENTATION", `${SITE_URL}/global/kangen-guide`)}</p>`,
    },
    kangen_conversation: es ? {
      subject: "¿Tienes preguntas sobre Agua Kangen?",
      title: "Hablemos de tus objetivos de bienestar",
      preheader: "Reserva una conversación privada con True Legacy.",
      body: `<p>Hola ${first},</p><p>Si quieres saber si el K8 encaja con tu hogar, tu salud y tus objetivos, podemos revisar tus preguntas en una conversación privada.</p><p>${button("HABLAR CON TRUE LEGACY", "https://wa.me/13059001456")}</p>`,
    } : {
      subject: "Questions about Kangen Water?",
      title: "Let’s talk about your wellness goals",
      preheader: "Start a private conversation with True Legacy.",
      body: `<p>Hi ${first},</p><p>If you want to know whether the K8 fits your household, wellness goals, and lifestyle, we can walk through your questions privately.</p><p>${button("TALK WITH TRUE LEGACY", "https://wa.me/13059001456")}</p>`,
    },
    emguarde_guide: es ? {
      subject: "Tu guía de emGuarde GO está lista",
      title: "Tu guía de emGuarde GO está lista",
      preheader: "Descarga el e-book actualizado de True Legacy.",
      body: `<p>Hola ${first},</p><p>Gracias por solicitar la guía actualizada de emGuarde GO. Incluye información del dispositivo, el estudio UTAR, el EMD-100 y el sistema global de 8 puntos.</p><p>${button("DESCARGAR LA GUÍA", `${SITE_URL}/guides/emguarde-go-ebook-es.pdf`, true)}</p>`,
    } : {
      subject: "Your emGuarde GO guide is ready",
      title: "Your emGuarde GO guide is ready",
      preheader: "Download the updated True Legacy e-book.",
      body: `<p>Hi ${first},</p><p>Thanks for requesting the updated emGuarde GO guide. It covers the device, UTAR study, EMD-100, and global 8-point system.</p><p>${button("DOWNLOAD YOUR GUIDE", `${SITE_URL}/guides/emguarde-go-ebook-en.pdf`, true)}</p>`,
    },
    emguarde_research: es ? {
      subject: "La investigación detrás de emGuarde GO",
      title: "Explora la investigación y la medición",
      preheader: "Revisa el contexto del estudio UTAR y el EMD-100.",
      body: `<p>Hola ${first},</p><p>La guía presenta el estudio humano de UTAR y explica cómo interpretar responsablemente el Índice Ambiental de Electrosmog del EMD-100.</p><p>${button("REVISAR LA PRESENTACIÓN", `${SITE_URL}/latam/guia-emguarde`, true)}</p>`,
    } : {
      subject: "The research behind emGuarde GO",
      title: "Explore the research and measurement",
      preheader: "Review the UTAR study context and EMD-100 guidance.",
      body: `<p>Hi ${first},</p><p>The guide summarizes the UTAR human study and explains how to interpret the EMD-100 Ambient Electrosmog Index responsibly.</p><p>${button("REVIEW THE PRESENTATION", `${SITE_URL}/global/emguarde-guide`, true)}</p>`,
    },
    emguarde_conversation: es ? {
      subject: "¿Quieres conocer emGuarde GO más de cerca?",
      title: "Conversemos sobre emGuarde GO",
      preheader: "Obtén respuestas personalizadas de True Legacy.",
      body: `<p>Hola ${first},</p><p>Si quieres comprender el uso diario, el sistema de 8 puntos o las opciones disponibles en tu mercado, escríbenos.</p><p>${button("HABLAR CON TRUE LEGACY", "https://wa.me/13059001456", true)}</p>`,
    } : {
      subject: "Want a closer look at emGuarde GO?",
      title: "Let’s talk about emGuarde GO",
      preheader: "Get personalized answers from True Legacy.",
      body: `<p>Hi ${first},</p><p>If you want to understand everyday use, the 8-point system, or availability in your market, start a conversation with us.</p><p>${button("TALK WITH TRUE LEGACY", "https://wa.me/13059001456", true)}</p>`,
    },
    event_confirmation: es ? {
      subject: "Registro confirmado — True Legacy LATAM",
      title: "Tu lugar está confirmado",
      preheader: "Jueves a las 7 PM Colombia / 8 PM EST.",
      body: `<p>Hola ${first},</p><p>Tu registro para True Legacy LATAM está confirmado. Nos reunimos cada jueves a las <strong>7:00 PM Colombia / 8:00 PM EST</strong>.</p><p>${button("GUARDAR EL ENLACE DE ZOOM", latamZoom)}</p>`,
    } : {
      subject: "Registration confirmed — True Legacy World",
      title: "Your place is confirmed",
      preheader: "Wednesday at 8:30 PM Eastern / 5:30 PM Pacific.",
      body: `<p>Hi ${first},</p><p>Your registration for True Legacy World is confirmed. We meet every Wednesday at <strong>8:30 PM Eastern / 5:30 PM Pacific</strong>.</p><p>${button("SAVE THE ZOOM LINK", globalZoom)}</p>`,
    },
    team_confirmation: es ? {
      subject: "Recibimos tu solicitud — True Legacy LATAM",
      title: "Tu solicitud está con nuestro equipo",
      preheader: "Reserva ahora tu llamada estratégica.",
      body: `<p>Hola ${first},</p><p>Gracias por solicitar unirte a True Legacy LATAM. El siguiente paso es reservar tu llamada estratégica para revisar tus objetivos y responder tus preguntas.</p><p>${button("RESERVAR MI LLAMADA", "https://calendly.com/truelegacylatamenagic/45min")}</p>`,
    } : {
      subject: "We received your application — True Legacy",
      title: "Your application is with our team",
      preheader: "Book your complimentary strategy call.",
      body: `<p>Hi ${first},</p><p>Thanks for applying to join True Legacy. Your next step is to reserve a complimentary strategy call so we can review your goals and answer your questions.</p><p>${button("BOOK MY STRATEGY CALL", "https://calendly.com/aquacharged/true-legacy-one-on-one")}</p>`,
    },
  };
  const selected = entries[item.template_key];
  if (!selected) throw new Error(`Unknown template: ${item.template_key}`);
  return { subject: selected.subject, html: layout(selected.title, selected.body, token, selected.preheader) };
};

const sendQueued = async (item: QueueItem) => {
  const { data: preference } = await admin.from("email_preferences")
    .select("unsubscribe_token, unsubscribed_at")
    .eq("email", item.recipient_email)
    .single();
  if (!preference || preference.unsubscribed_at) {
    await admin.from("email_queue").update({ status: "cancelled", updated_at: new Date().toISOString() }).eq("id", item.id);
    return { sent: false, cancelled: true };
  }

  const { data: claimed } = await admin.from("email_queue")
    .update({ status: "sending", attempts: 1, updated_at: new Date().toISOString() })
    .eq("id", item.id).eq("status", "pending").select("id").maybeSingle();
  if (!claimed) return { sent: false, skipped: true };

  try {
    const rendered = template(item, preference.unsubscribe_token);
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [item.recipient_email],
        reply_to: "truelegacyworld@gmail.com",
        subject: rendered.subject,
        html: rendered.html,
      }),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result?.message || `Resend returned ${response.status}`);
    await admin.from("email_queue").update({ status: "sent", provider_message_id: result.id, sent_at: new Date().toISOString(), last_error: null, updated_at: new Date().toISOString() }).eq("id", item.id);
    return { sent: true };
  } catch (error) {
    await admin.from("email_queue").update({ status: "failed", last_error: String(error), updated_at: new Date().toISOString() }).eq("id", item.id);
    return { sent: false, error: String(error) };
  }
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  const body = await request.json().catch(() => ({}));
  const token = request.headers.get("Authorization")?.replace(/^Bearer\s+/i, "") || "";
  const { data: authData } = token ? await admin.auth.getUser(token) : { data: { user: null } };
  const { data: adminMembership } = authData.user
    ? await supabase.from("crm_memberships").select("user_id").eq("user_id", authData.user.id).eq("role", "admin").eq("active", true).maybeSingle()
    : { data: null };
  const isAdmin = Boolean(adminMembership);
  const selection = "id, recipient_email, recipient_name, language, lead_type, template_key, payload";
  let query = admin.from("email_queue").select(selection).eq("status", "pending").lte("scheduled_for", new Date().toISOString()).order("scheduled_for", { ascending: true }).limit(25);

  if (body.mode === "process_due_cron") {
    // The Supabase gateway validates the JWT before this function runs. The
    // queue itself contains only fixed, server-created messages and every item
    // is claimed atomically, so this action cannot send arbitrary or duplicate mail.
  } else if (body.mode === "process_due_admin") {
    if (!isAdmin) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } else if (body.mode === "retry") {
    if (!isAdmin || !body.emailId) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    await admin.from("email_queue").update({ status: "pending", scheduled_for: new Date().toISOString(), last_error: null, updated_at: new Date().toISOString() }).eq("id", body.emailId).in("status", ["failed", "cancelled"]);
    query = admin.from("email_queue").select(selection).eq("id", body.emailId).eq("status", "pending").limit(1);
  } else if (body.mode === "deliver") {
    const email = String(body.email || "").trim().toLowerCase();
    const leadType = String(body.leadType || "");
    if (!email || !["kangen", "emguarde", "event", "team"].includes(leadType)) return new Response(JSON.stringify({ error: "Invalid request" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    query = query.eq("recipient_email", email).eq("lead_type", leadType).limit(1);
  } else {
    return new Response(JSON.stringify({ error: "Invalid mode" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }

  const { data, error } = await query;
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  const results = [];
  for (const item of (data || []) as QueueItem[]) results.push(await sendQueued(item));
  return new Response(JSON.stringify({ processed: results.length, results }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
});
