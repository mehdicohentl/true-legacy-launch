CREATE TABLE public.emguarde_pdf_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL CHECK (char_length(first_name) BETWEEN 1 AND 80),
  last_name TEXT NOT NULL CHECK (char_length(last_name) BETWEEN 1 AND 80),
  email TEXT NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254),
  phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 5 AND 40),
  country TEXT NOT NULL CHECK (char_length(country) BETWEEN 2 AND 100),
  social_handle TEXT NOT NULL CHECK (char_length(social_handle) BETWEEN 2 AND 120),
  language TEXT NOT NULL CHECK (language IN ('en', 'es')),
  consent BOOLEAN NOT NULL DEFAULT false CHECK (consent = true),
  registered_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX emguarde_pdf_leads_registered_at_idx
  ON public.emguarde_pdf_leads (registered_at DESC);

CREATE INDEX emguarde_pdf_leads_email_idx
  ON public.emguarde_pdf_leads (lower(email));

ALTER TABLE public.emguarde_pdf_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register for the emGuarde guide"
  ON public.emguarde_pdf_leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (consent = true AND language IN ('en', 'es'));

CREATE POLICY "True Legacy admin can view emGuarde guide leads"
  ON public.emguarde_pdf_leads FOR SELECT
  TO authenticated
  USING ((auth.jwt() ->> 'email') = 'truelegacyworld@gmail.com');
