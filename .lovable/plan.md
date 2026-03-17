

## Add "Book a 30-Minute Clarity Call" Button Below the Video

### Change

Add a CTA button underneath the YouTube video in `src/components/ThankYouSection.tsx`, with bilingual support (English/Spanish).

### Details

- **English text**: "Book a 30-Minute Clarity Call"
- **Spanish text**: "Reserva una Llamada de Claridad de 30 Minutos"
- Button will be placed after the video `motion.div` (after line 48), centered, with a fade-in animation
- Styled consistently with existing CTA buttons (accent background, rounded, bold text)
- Links to an external booking URL (will use a placeholder like Calendly unless a specific link is provided)

### Technical

In `src/components/ThankYouSection.tsx`:
- Add a new `motion.div` after the video block containing an `<a>` styled as a button
- Use the same animation pattern (`initial/whileInView`) as the other elements
- Apply styling matching the site's existing CTA buttons (e.g., `bg-accent text-background font-bold rounded-full px-8 py-4`)

