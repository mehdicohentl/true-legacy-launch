ALTER TABLE public.kangen_pdf_leads
  ADD COLUMN social_handle TEXT;

ALTER TABLE public.kangen_pdf_leads
  ADD CONSTRAINT kangen_pdf_leads_social_handle_length
  CHECK (social_handle IS NULL OR char_length(social_handle) BETWEEN 2 AND 120);
