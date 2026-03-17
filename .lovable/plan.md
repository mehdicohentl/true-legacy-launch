

## Plan: Restructure Events Page + Fix Social Links Site-Wide

### 1. Restructure Events Page Layout (both Global and LATAM)

**Current flow**: Event flyer section -> "Access Zoom" button scrolls down -> separate ZoomGateway section at bottom.

**New flow**: Event flyer with details -> "Secure Your Spot" gateway (question + form) inline right below the flyer -> Resource links & CTAs at the bottom.

**Changes to `src/components/EventSection.tsx`**:
- Remove the "Access the Zoom Event" CTA button that links to `#zoom-gateway`
- Instead, embed the ZoomGateway component directly after the date/time card inside EventSection
- Move the secondary CTAs (Kangen, EmGuarde, Join Team) and bottom quote to a new bottom section
- Add a resource links section at the bottom of the events page (mirroring key links from the Resources page: consultation, EWG, EmGuarde demo, Kangen demo, pre-filters)

**Changes to `src/pages/EventsPage.tsx`**:
- Remove the separate `<ZoomGateway>` component call
- Add a new `EventResourceLinks` section at the bottom (before Footer) with key resource/CTA cards

**Changes to `src/components/ZoomGateway.tsx`**:
- Adjust styling to work inline (reduce vertical padding, seamless transition from the event details above)

### 2. Fix YouTube Links Site-Wide

Replace all `@TrueLegacyWorld` YouTube links with `https://www.youtube.com/@Mehdicohen`:

| File | Old | New |
|------|-----|-----|
| `Footer.tsx` line 10 | `@TrueLegacyWorld` | `@Mehdicohen` |
| `Footer.tsx` line 60 | `@TrueLegacyWorld` | `@Mehdicohen` |
| `ResourcesPage.tsx` line 24 | `@TrueLegacyWorld` | `@Mehdicohen` |
| `ResourcesPage.tsx` line 134 | `@TrueLegacyWorld` | `@Mehdicohen` |

### 3. Fix TikTok Link on Resources Page

- `ResourcesPage.tsx` line 33: Change `@truelegacyworld` to `@mehdi_cohen` (Footer already has the correct one)

### 4. Add LinkedIn to Social Links

**`src/components/Footer.tsx`**: Add a LinkedIn icon/link to the `socialLinks` array:
- Global: `https://www.linkedin.com/in/mehdicohen-tl/`
- LATAM: `https://co.linkedin.com/in/mehdi-cohen`

**`src/pages/ResourcesPage.tsx`**: Add LinkedIn to the `socials` array (same lang-based logic -- will need to accept `lang` prop for the socials array or make it dynamic inside the component)

### 5. Files to Modify

1. **`src/components/EventSection.tsx`** -- Remove standalone CTA, embed ZoomGateway inline, restructure bottom
2. **`src/pages/EventsPage.tsx`** -- Remove separate ZoomGateway, add resource links section at bottom
3. **`src/components/ZoomGateway.tsx`** -- Reduce padding for inline use
4. **`src/components/Footer.tsx`** -- Fix YouTube URL, add LinkedIn icon (lang-based)
5. **`src/pages/ResourcesPage.tsx`** -- Fix YouTube URL, fix TikTok URL, add LinkedIn icon (lang-based)

