

## Plan: Resources Page + Product Page Overhaul

This is a large multi-part task involving creating a dedicated resources page (replicating the Linktree), overhauling the products page with real product images, and adding product-specific ordering instructions.

### 1. Create Resources Page (`src/pages/ResourcesPage.tsx`)

A standalone page at `/global/resources` and `/latam/resources` that replicates the exact Linktree structure:

**Header**: Combined logo + "Creating True Health Around the World" tagline + social icons (YouTube, Instagram, Facebook, TikTok, Email, WhatsApp, Website)

**Top CTA**: "Schedule Your Free Wellness Consultation - Mehdi Cohen" -> `https://calendly.com/aquacharged/true-legacy-one-on-one`

**Categories with exact links from Linktree**:
- **INFO**:
  - "⚠️Check EWG's Tap Water ⚠️" -> `https://www.ewg.org/tapwater/`
  - "EmGuarde DEMO" -> `https://youtu.be/vPlD1fZEdvE?si=QCrNzTGVsNetRGrS`
  - "Kangen Water DEMO" -> `https://youtu.be/fJdfllJpdAg?si=c87_3pu1CuJkdJKQ`

- **TECH**:
  - "Contact For EmGuarde" -> `https://wa.me/18649072149`
  - "Kangen 8 💦" -> Enagic K8 link (product_id=1016)
  - "Pre Filters (Multipure)" -> `https://www.multipure.com/mcardona`
  - "Pre Filters (Ionfaucet)" -> `https://ionfaucet.com/pre-filtration-systems`

- **UPGRADES & MAINTENANCE** (keeping Linktree's typo-corrected version):
  - "How to professionally deep clean Enagic LeveLuk (K8)" -> YouTube link
  - "Buy PRO Pump" -> `https://ionfaucet.com/ion-clean-machine-pro/`
  - "Ionizer Faucets (Ionfaucet)" -> `https://ionfaucet.com/products/faucets/ionizer-faucets`
  - "Ionfaucet tools accessories" -> `https://lddy.no/1mols`

Thumbnails will use the existing product images already in `src/assets/`. The Spanish `/latam/resources` version translates labels but keeps all links identical. LATAM EmGuarde contact uses WhatsApp +573001844049.

### 2. Update Products Page with Real Images

Copy uploaded product images to `src/assets/`:
- `photo_2026-03-17_02-35-48.jpg` -> `src/assets/product-k8-real.png` (Leveluk K8)
- `photo_2026-03-17_02-49-44.jpg` -> `src/assets/product-emguarde-real.png` (EmGuarde)
- `photo_2026-03-17_02-50-07.jpg` -> `src/assets/product-sd501dx-real.png` (SD501 DX)
- `photo_2026-03-17_02-50-49.jpg` -> `src/assets/product-sd501super-real.png` (SD501 Super)
- `photo_2026-03-17_02-39-12.jpg` -> `src/assets/product-jriv-real.png` (Leveluk Jr IV)
- `photo_2026-03-17_02-40-04.jpg` -> `src/assets/product-anespa-real.png` (Anespa DX)
- `photo_2026-03-17_02-48-20.jpg` -> `src/assets/product-wagyu-real.png` (Kangen Wagyu)

**Product order** (as specified):
1. Leveluk K8 (flagship)
2. EmGuarde
3. Leveluk SD501 DX
4. Leveluk Super 501
5. Leveluk Jr IV (new addition)
6. Anespa DX
7. Kangen Air (info-only card)
8. Kangen Wagyu (renamed from "Beef SET")

Each card shows the real product image instead of the combined logo placeholder.

**EmGuarde card**: For global, shows full purchase instructions (price $1,520, distributor ID, step-by-step ordering from existing EmGuardePurchase page data) with a "How to Buy" CTA linking to `/global/emguarde`. For LATAM, shows WhatsApp contact CTA instead of instructions.

**Kangen Air card**: For global, shows full ordering instructions (SGD 1,860, application flow, GOC emails). For LATAM, shows WhatsApp contact CTA.

**Leveluk Jr IV**: New product entry with Enagic link (will need a product_id - use the standard rep link format).

### 3. Update Navbar

Add "Resources" link in navbar for both languages pointing to `/global/resources` or `/latam/resources`.

### 4. Update Routes in App.tsx

- `/global/resources` -> `ResourcesPage lang="en"`
- `/latam/resources` -> `ResourcesPage lang="es"`

### 5. Update Existing ResourcesSection

Update the embedded ResourcesSection on the landing page to use the correct YouTube links from the Linktree (replacing placeholder `example` URLs).

### Files to Create/Modify

- **Create**: `src/pages/ResourcesPage.tsx` - standalone resources/linktree page
- **Create**: 7 product images copied from uploads to `src/assets/`
- **Modify**: `src/pages/ProductsPage.tsx` - real images, reordered products, EmGuarde/Kangen Air instructions, Jr IV addition, LATAM WhatsApp CTAs
- **Modify**: `src/components/Navbar.tsx` - add "Resources" link
- **Modify**: `src/App.tsx` - add resource page routes
- **Modify**: `src/components/ResourcesSection.tsx` - fix YouTube placeholder links

