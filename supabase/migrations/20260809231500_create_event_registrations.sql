CREATE TABLE public.event_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 160),
  email TEXT NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254),
  phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 5 AND 40),
  event_interest TEXT NOT NULL CHECK (event_interest IN ('global', 'latam')),
  language TEXT NOT NULL CHECK (language IN ('en', 'es')),
  heard_from TEXT NOT NULL CHECK (char_length(heard_from) BETWEEN 2 AND 80),
  registered_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX event_registrations_registered_at_idx
  ON public.event_registrations (registered_at DESC);

CREATE INDEX event_registrations_email_idx
  ON public.event_registrations (lower(email));

ALTER TABLE public.event_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register for a True Legacy event"
  ON public.event_registrations FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    event_interest IN ('global', 'latam')
    AND language IN ('en', 'es')
  );

CREATE POLICY "True Legacy admin can view event registrations"
  ON public.event_registrations FOR SELECT
  TO authenticated
  USING ((auth.jwt() ->> 'email') = 'truelegacyworld@gmail.com');
