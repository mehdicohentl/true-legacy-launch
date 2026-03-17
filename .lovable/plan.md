
Goal: remove the visible white/black rectangles behind product shots using CSS only, without replacing any image files.

What I found:
- The selected images all come from one shared source: `src/pages/ProductsPage.tsx` line 201 inside `renderProductCard`, so one fix there updates every product card.
- The main problem is the wrapper at line 195 currently forces `bg-white` / `bg-black`, which makes the background plate visible.
- The dimming came from blending the whole image against dark page backgrounds.

Implementation plan:
1. Update `src/pages/ProductsPage.tsx`
   - Remove the forced `bg-white` / `bg-black` wrapper backgrounds and make the image container fully transparent.
   - Keep the fix at the shared mapped `<img>` so all product cards change at once.
   - Continue assigning classes by product:
     - `img-no-bg-white` for K8, EmGuarde, SD501 DX, Super 501, Jr IV, Anespa DX, Kangen Air
     - `img-no-bg-black` for Wagyu

2. Strengthen the CSS utilities in `src/index.css`
   - Keep the CSS-only background-removal system.
   - Refine `.img-no-bg-white`, `.img-no-bg-black`, and `.img-no-bg-auto` so they:
     - keep backgrounds transparent
     - preserve brightness better
     - use drop-shadow for depth
     - avoid the “dimmed” look as much as possible with CSS-only tuning
   - Keep the global transparent image rule so images never reintroduce opaque backgrounds.

3. Apply the same treatment everywhere else product images appear
   - `src/components/WaterSection.tsx` for the Kangen machine image
   - `src/components/EmGuardeSection.tsx` for the EmGuarde device image
   - Make sure their parent wrappers are transparent too.

4. Add targeted fallbacks for stubborn assets
   - If one or two images still show a white halo, add higher-specificity per-image overrides in CSS rather than touching the files themselves.
   - This keeps the solution brute-force but controlled.

5. Validate visually
   - Check `/global/products` and `/latam/products`
   - Check the landing page Water section and EmGuarde section
   - Confirm the white/black plates are gone and the products do not look washed out or overly dark on desktop and mobile

Files to update:
- `src/pages/ProductsPage.tsx`
- `src/components/WaterSection.tsx`
- `src/components/EmGuardeSection.tsx`
- `src/index.css`

Technical note:
- This will be a visual CSS-based background removal, not true pixel alpha extraction. The implementation will aggressively hide the white/black backdrop and make the containers transparent without replacing the original images.
