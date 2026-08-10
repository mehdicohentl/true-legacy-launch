CREATE TABLE public.team_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  entrepreneurial_fit TEXT NOT NULL CHECK (entrepreneurial_fit IN ('yes', 'no')),
  commitment_level TEXT NOT NULL CHECK (commitment_level IN ('committed', 'exploring')),
  full_name TEXT NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 160),
  phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 5 AND 40),
  email TEXT NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254),
  country TEXT NOT NULL CHECK (char_length(country) BETWEEN 2 AND 100),
  occupation TEXT NOT NULL CHECK (char_length(occupation) BETWEEN 2 AND 160),
  business_experience TEXT NOT NULL CHECK (char_length(business_experience) BETWEEN 2 AND 1000),
  growth_investment TEXT NOT NULL CHECK (growth_investment IN ('invested', 'open', 'willing')),
  income_goal TEXT NOT NULL CHECK (char_length(income_goal) BETWEEN 2 AND 160),
  motivation TEXT NOT NULL CHECK (char_length(motivation) BETWEEN 2 AND 1500),
  investment_level TEXT NOT NULL CHECK (investment_level IN ('2000', '6000', '8000')),
  start_timeline TEXT NOT NULL CHECK (start_timeline IN ('immediately', 'week', 'month', 'unsure')),
  strategy_call_commitment BOOLEAN NOT NULL,
  social_handle TEXT NOT NULL CHECK (char_length(social_handle) BETWEEN 2 AND 160),
  additional_message TEXT,
  language TEXT NOT NULL CHECK (language IN ('en', 'es')),
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX team_applications_submitted_at_idx
  ON public.team_applications (submitted_at DESC);

CREATE INDEX team_applications_email_idx
  ON public.team_applications (lower(email));

ALTER TABLE public.team_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a True Legacy team application"
  ON public.team_applications FOR INSERT
  TO anon, authenticated
  WITH CHECK (language IN ('en', 'es'));

CREATE POLICY "True Legacy admin can view team applications"
  ON public.team_applications FOR SELECT
  TO authenticated
  USING ((auth.jwt() ->> 'email') = 'truelegacyworld@gmail.com');
