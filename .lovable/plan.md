

## Plan: Integrate Linktree Links and Optimize Site

### Extracted Linktree Links

**Social Media:**
- YouTube: `https://www.youtube.com/@TrueLegacyWorld`
- Instagram: `https://instagram.com/mehdicohen_`
- Facebook: `https://www.facebook.com/share/19E6C1seVM/?mibextid=wwXIfr`
- TikTok: `https://tiktok.com/@aquacharged`
- Email: `truelegacyworld@gmail.com`
- WhatsApp: `https://wa.me/18649072149`

**Info/Resources:**
- Wellness consultation: `https://calendly.com/aquacharged/true-legacy-one-on-one` (already on site)
- EWG Tap Water: `https://www.ewg.org/tapwater/`
- EmGuarde Demo video: `https://youtu.be/vPlD1fZEdvE`
- Kangen Water Demo video: `https://youtu.be/fJdfllJpdAg`

**Tech/Accessories:**
- EmGuarde WhatsApp: `https://wa.me/18649072149`
- Kangen K8 purchase: (already on site)
- Pre Filters Multipure: `https://www.multipure.com/mcardona`
- Pre Filters Ionfaucet: `https://ionfaucet.com/pre-filtration-systems`

**Upgrades & Maintenance:**
- PRO Pump: `https://ionfaucet.com/ion-clean-machine-pro/`
- Ionizer Faucets: `https://ionfaucet.com/products/faucets/ionizer-faucets`
- Ionfaucet tools/accessories: `https://lddy.no/1mols`

---

### Changes

#### 1. Footer — Add Social Media Icons Row
Add a row of social media icons (YouTube, Instagram, Facebook, TikTok, Email, WhatsApp) with proper SVG icons above the existing footer links. Bilingual labels. This replaces the need for Linktree's social links.

#### 2. Footer — Add "Resources" Links
Add links for EWG Tap Water, Pre Filters, and Accessories/Upgrades to the footer as a secondary nav row so users can find them without Linktree.

#### 3. WaterSection — Add EWG Tap Water CTA + Demo Video
- Add a small "Check Your Tap Water" link/button pointing to EWG after the buying guide
- Embed the Kangen Water Demo video (`fJdfllJpdAg`) alongside the machine image

#### 4. EmGuardeSection — Add Demo Video + WhatsApp Contact
- Replace one of the existing videos or add the Linktree demo video (`vPlD1fZEdvE`) as a third option
- Add a WhatsApp contact CTA button for EmGuarde inquiries

#### 5. New ResourcesSection Component
Create a lightweight section placed between ThankYouSection and Footer with categorized links:
- **Pre-Filtration**: Multipure + Ionfaucet pre-filters
- **Upgrades & Maintenance**: PRO Pump, Ionizer Faucets, Ionfaucet accessories, deep clean video

This section is bilingual and compact — a grid of cards with icons linking out.

#### 6. Navbar — Add "Resources" Link
Add a "Resources" nav item (scrolls to `#resources`) in both desktop and mobile menus.

#### 7. SEO & Mobile Optimization
- Add Facebook, TikTok to `sameAs` arrays in JSON-LD structured data in `index.html`
- Ensure all new links have `rel="noopener noreferrer"` on external targets
- All new sections use responsive Tailwind classes already established in the codebase

#### 8. LandingPage — Wire ResourcesSection
Import and render `ResourcesSection` between `ThankYouSection` and `Footer`.

---

### Files to Create
- `src/components/ResourcesSection.tsx` — New bilingual resources/accessories section

### Files to Modify
- `src/components/Footer.tsx` — Social icons row + resource links
- `src/components/WaterSection.tsx` — EWG CTA + demo video embed
- `src/components/EmGuardeSection.tsx` — Demo video + WhatsApp CTA
- `src/components/Navbar.tsx` — Add Resources nav link
- `src/pages/LandingPage.tsx` — Import and render ResourcesSection
- `index.html` — Add Facebook/TikTok to JSON-LD sameAs

