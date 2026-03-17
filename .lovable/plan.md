

## Plan: Replace Banner with Clean Logo Header on Mobile

The banner image (`linktree-banner.png`) keeps getting cut off on mobile at 390px. Instead of fighting aspect ratios, replace the banner section entirely with a clean, professional header design.

### Changes to `src/pages/ResourcesPage.tsx`

**Remove the banner image entirely.** Replace lines 162-201 with:

- A dark gradient background section (no photo) with generous padding
- The `combined-logo.png` (True Legacy + Mehdi Cohen) centered and large
- Tagline text below
- Social icons row below that
- No more aspect ratio issues, no image cut-off

The layout becomes:
```text
┌──────────────────────────┐
│                          │
│   [combined-logo.png]    │
│   Creating True Health   │
│   Around the World.      │
│   ○ ○ ○ ○ ○ ○ ○          │  ← social icons
│                          │
├──────────────────────────┤
│  All | INFO | TECH | UPG │  ← sticky category bar
├──────────────────────────┤
│  ... link pills ...      │
└──────────────────────────┘
```

- Add a subtle radial gradient or wave-like bg color to keep it visually interesting without an image
- Logo sized `h-20 sm:h-28 md:h-36` for prominence
- Remove the `linktreeBanner` import (no longer needed)
- Keep everything else (category bar, link pills, footer) unchanged

