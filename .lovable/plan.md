

## Plan: Resources Page Overhaul, Product Updates, and Site Polish

This is a large multi-part request. Here's the breakdown:

---

### 1. Replace ResourcesSection on Landing Page with a CTA to /resources

**`src/components/ResourcesSection.tsx`** -- completely rewrite this component. Instead of rendering all the links inline, it becomes a simple CTA section with a heading and button linking to `/global/resources` or `/latam/resources`.

**`src/pages/LandingPage.tsx`** -- keep the ResourcesSection import (it will now just be a CTA). Remove the `#resources` scroll-to behavior since it's now a page link.

---

### 2. Rebuild ResourcesPage as a Linktree Mirror

**`src/pages/ResourcesPage.tsx`** -- complete rewrite to exactly mirror the Linktree layout:
- Hero banner with Mehdi photo and wave background (like linktree)
- Combined logo centered
- Tagline: "Creating True Health Around the World."
- Social icons row (YouTube, Instagram, Facebook, TikTok, Email, WhatsApp, Website)
- Top CTA: "Schedule Your Free Wellness Consultation" (accent/teal pill button with thumbnail)
- **INFO** category header, then link pills with thumbnails
- **TECH** category header, then link pills
- **UPGRADES & MAINTENANCE** category header, then link pills
- All links, images, and URLs exactly matching the Linktree
- Linktree-style pill buttons: rounded-full, dark bg, light text, thumbnail on left
- Bilingual (en/es) with lang-aware WhatsApp links
- Mobile-first, single column, max-w-lg centered

---

### 3. Fix Product Links on ProductsPage

**`src/pages/ProductsPage.tsx`**:
- **Anespa DX**: change `product_id=1062` to `product_id=1041`
- **Leveluk Jr IV**: change `product_id=1006` to `product_id=1062`
- **Add Kangen Ukon** as a new product entry with:
  - `product_id=2011`
  - Upload the provided image as `src/assets/product-ukon-real.png`
  - EN: "Kangen Ukon Sigma" / ES: "Kangen Ukon Sigma"
  - Description about turmeric supplement + soap set
  - Type: "standard"
- Change "50 years" to "51+ years" in the subhead (both en and es)

---

### 4. Live Event Button Polish

**`src/pages/LandingPage.tsx`** -- replace the current event CTA strip:
- Remove the emoji-style red dot, replace with a clean CSS-animated pulse indicator
- Make the button more professional: solid accent bg, proper spacing, subtle pulse animation via CSS keyframes (not emoji)
- Clean typography, no cheap look

---

### 5. Remove Duplicate "Resources" from Navbar

**`src/components/Navbar.tsx`** -- the navbar currently has both an anchor scroll link "Resources" (id: resources) AND a page link "Resources" (/global/resources). Remove the duplicate:
- Keep the page link to `/global/resources` (or `/latam/resources`)
- Remove the `{ id: "resources", label: "Resources" }` from the scroll links array

---

### 6. Mobile/Desktop Optimization

- Ensure ResourcesPage is mobile-first (max-w-lg, single column, proper spacing)
- Ensure ProductsPage grid is responsive (1 col mobile, 2 col sm, 3 col lg, 4 col xl -- already done)
- Verify all link buttons have proper tap targets (min 44px height)

---

### Files to modify:
1. `src/components/ResourcesSection.tsx` -- rewrite as CTA-only
2. `src/pages/ResourcesPage.tsx` -- full Linktree mirror rebuild
3. `src/pages/ProductsPage.tsx` -- fix links, add Ukon, fix "50 years"
4. `src/pages/LandingPage.tsx` -- polish event CTA
5. `src/components/Navbar.tsx` -- remove duplicate Resources link
6. Copy uploaded Ukon image to `src/assets/product-ukon-real.png`

