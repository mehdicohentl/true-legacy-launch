

## Plan: Fix Navigation on Purchase Pages, Add Kangen Air Image, Add Placeholder Logos, Polish Site

### 1. Replace EmGuardePurchase Custom Top Bar with Navbar

**Problem**: `src/pages/EmGuardePurchase.tsx` uses a custom fixed top bar with only logo + back button, hiding the full navigation menu.

**Fix**: Replace the custom top bar (lines 177-187) with the shared `<Navbar lang={lang} />` component, same as ProductsPage and ResourcesPage. Keep the back button as an inline element within the page content instead.

### 2. Add Kangen Air Product Image

Copy the uploaded image (`user-uploads://photo_2026-03-17_02-42-11.jpg`) to `src/assets/kangen-air.png`.

In `src/pages/ProductsPage.tsx`, import the new image and assign it to the Kangen Air product card (currently has `image: ""` on line 97), so it displays the actual product photo instead of the placeholder SVG.

### 3. Add CSS `mix-blend-mode` to Remove White/Black Backgrounds from Product Images

Add a utility CSS approach to strip white and black backgrounds from product images. In the product card image rendering, apply `mix-blend-mode: multiply` (removes white backgrounds) combined with a dark background container. For images on dark backgrounds, use `mix-blend-mode: screen` (removes black backgrounds). This will be applied via Tailwind classes on the `<img>` tags in ProductsPage.

### 4. Add Placeholder Logo to ResourcesSection Linktree Items Without Images

In `src/components/ResourcesSection.tsx` line 144, the empty `<div>` placeholder (when `link.image` is falsy) currently renders a blank circle. Replace it with the combined logo image (`combinedLogo`) as a fallback thumbnail.

Similarly in `src/pages/ResourcesPage.tsx`, ensure all items that lack specific images show the combined logo as placeholder.

### 5. General Polish

- Ensure consistent spacing and mobile responsiveness across all pages
- Fix the `emguardeSteps` array for Spanish (currently empty on line 155 of ProductsPage) — add translated steps
- Fix empty Spanish Kangen Air fields (lines 157-160) with translated content

### Files to Modify

- **`src/pages/EmGuardePurchase.tsx`** — Replace custom top bar with `<Navbar>`, restructure layout
- **`src/pages/ProductsPage.tsx`** — Add Kangen Air image, apply `mix-blend-mode` to product images, fill in Spanish translations
- **`src/components/ResourcesSection.tsx`** — Add combined logo as fallback for empty thumbnails
- **`src/pages/ResourcesPage.tsx`** — Add combined logo fallback for items missing images
- **Create `src/assets/kangen-air.png`** — Copy from uploaded image

