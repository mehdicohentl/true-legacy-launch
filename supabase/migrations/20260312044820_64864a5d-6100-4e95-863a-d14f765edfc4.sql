
CREATE TABLE public.zoom_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  registered_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.zoom_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert registrations"
  ON public.zoom_registrations FOR INSERT
  WITH CHECK (true);

CREATE POLICY "No public reads"
  ON public.zoom_registrations FOR SELECT
  USING (false);
