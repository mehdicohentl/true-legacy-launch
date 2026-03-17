

## Plan: Fix Resources Page Banner + Site-Wide Polish

### 1. Fix Resource Page Banner Image (Mobile Cut-off)

**`src/pages/ResourcesPage.tsx`** -- The banner image container at line 138 uses fixed heights (`h-[280px] sm:h-[340px] md:h-[400px]`) with `object-cover` which cuts off the Mehdi portrait on mobile. Fix:

- Change to `aspect-[3/4] sm:aspect-[16/9] md:aspect-[2/1]` so portrait images show fully on narrow screens
- Use `object-top` to keep Mehdi's face visible
- Adjust the logo/tagline overlap (`-mt-16`) so it doesn't collide with the image on small screens
- Remove the combined logo below the banner (the banner image already contains the logos per the Linktree) -- OR reduce its size on mobile to prevent overlap

### 2. Add Top Category Navigation Bar to Resource Pages

Add a sticky category bar below the banner on the resources page (both `/global/resources` and `/latam/resources`):

- Horizontal scrollable row of pill buttons: "All", "INFO", "TECH", "UPGRADES"
- Clicking scrolls to the corresponding category section
- Sticky below the main navbar on scroll
- Styled with the same dark theme, accent highlights for active state

### 3. Site-Wide Audit & Fixes

**`src/pages/ResourcesPage.tsx`**:
- Ensure all link pills have consistent thumbnail sizing with `object-contain` for transparent PNGs and `object-cover` for photos
- Add `bg-white/10` behind transparent product thumbnails so they're visible on the dark background

**`src/pages/ProductsPage.tsx`**:
- Verify product grid is responsive: 1 col on 390px, 2 col on sm, 3 col lg -- already correct
- Check the Ukon product image renders well

**`src/components/Navbar.tsx`**:
- Ensure mobile menu closes after navigation
- Verify all links point to correct pages (already audited -- looks clean)

**`src/pages/LandingPage.tsx`**:
- Event CTA strip already has professional pulse dot -- no changes needed

### Files to modify:
1. **`src/pages/ResourcesPage.tsx`** -- fix banner aspect ratio for mobile, add category nav bar, improve thumbnail backgrounds for transparent images

