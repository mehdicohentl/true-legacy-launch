

## Fix Product Image Backgrounds — They Look Dimmed

**Root cause**: `mix-blend-mode: multiply` on the `<img>` blends with the **dark card background**, which darkens/dims the entire image. Multiply works by multiplying pixel values — dark × anything = dark. The white background of the image disappears but so does the image's brightness.

**Solution**: Give the image container a **white background** with `isolation: isolate` so the multiply blend only happens within that white container (removing the image's white bg), but the container itself doesn't blend further into the dark card. This is the standard e-commerce pattern for product images on dark sites.

### Changes

**`src/pages/ProductsPage.tsx` (line 195)**:
- Change the image container from `bg-transparent` to `bg-white rounded-t-xl` with `isolation: isolate`
- Keep `img-no-bg-white` / `img-no-bg-black` on the `<img>` tags
- For Wagyu (black bg, uses `screen`), use `bg-black` container instead

**`src/index.css`**:
- No changes needed to the utility classes — they work correctly when the parent container has the right background color

This gives each product image a clean white (or black for Wagyu) isolated zone where the blend mode correctly removes the image's own background, while the product itself renders at full brightness and color.

