

## Plan

This is a multi-part request with several changes:

### 1. Replace LATAM Events Flyer Image
- Copy the uploaded flyer (`user-uploads://IMG_5914.PNG`) to `src/assets/event-latam-flyer.jpg`
- Update `src/components/EventSection.tsx`: change the Spanish `image` reference from `eventLatam` to the new flyer image
- Change LATAM `date` from "Cada Martes" to "Martes"

### 2. Create Products Page (`src/pages/ProductsPage.tsx`)
A new bilingual products page at `/global/products` and `/latam/products` with:
- Navbar + Footer (same as other pages)
- Combined logo top-left (already in Navbar)
- Product cards for each Enagic product with name, description, and "Order" CTA linking to the provided Enagic URLs:
  - **K8** (product_id=1016) - flagship
  - **SD 501 Super** (product_id=1007)
  - **SD 501 DX** (product_id=1064)
  - **Anespa DX** (product_id=1062) - shower filter
  - **Ukon Sigma** (product_id=2006) - turmeric supplement
  - **Kangen Beef SET** (product_id=2115)
  - **Kangen Air** - info section (no direct purchase link, contact email provided)
- Use uploaded product images where they match (Mehdi with K8 machine, filter system, faucet, PRO pump, Multipure unit, EmGuarde photo, Ionfaucet logo)
- Bilingual EN/ES with accurate Spanish translations
- Styled consistently with the site (dark background, gold accents, motion animations)

### 3. Add "Products" to Navbar
- Add a "Products" link in the navbar for both languages pointing to `/global/products` or `/latam/products`
- EN: "Products", ES: "Productos"

### 4. Add Routes in App.tsx
- `/global/products` -> `ProductsPage lang="en"`
- `/latam/products` -> `ProductsPage lang="es"`

### 5. Enhance Resources Section with Product Images
- Copy relevant uploaded images to `src/assets/` (ionfaucet-filters.png, ionizer-faucet.png, multipure-filter.png, pro-pump.png, ionfaucet-logo.png, mehdi-k8.png, mehdi-emguarde.png)
- Add product images as visual thumbnails in the ResourcesSection cards to make them more visually appealing (similar to the Linktree screenshots)

### Files to Create/Modify
- **Create**: `src/assets/event-latam-flyer.jpg` (copy from upload)
- **Create**: `src/assets/ionfaucet-filters.png`, `src/assets/ionizer-faucet.png`, `src/assets/multipure-filter.png`, `src/assets/pro-pump.png`, `src/assets/ionfaucet-logo.png`, `src/assets/mehdi-k8.png`, `src/assets/mehdi-emguarde.png` (copy from uploads)
- **Create**: `src/pages/ProductsPage.tsx` - full products catalog page
- **Modify**: `src/components/EventSection.tsx` - swap LATAM image, change "Cada Martes" to "Martes"
- **Modify**: `src/components/Navbar.tsx` - add "Products"/"Productos" link
- **Modify**: `src/App.tsx` - add product page routes
- **Modify**: `src/components/ResourcesSection.tsx` - enhance with product images

