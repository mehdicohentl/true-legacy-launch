

## Plan: Update Events, Resource Page Images, and Banner

### 1. Events Page -- Spanish "Thursday"
**`src/components/EventSection.tsx`** line 49: Change `date: "Martes"` to `date: "Jueves"` (Thursday in Spanish). English already says "Every Thursday" -- keep as is but simplify to just "Thursday" per the user's request (line 23).

### 2. Replace Resource Page Banner
Copy `user-uploads://photo_2026-02-23_19-17-52.jpg` to `src/assets/linktree-banner.png` (overwrite). This is the Mehdi Cohen photo with True Legacy + MC logos and blue wave background -- exactly matching the Linktree hero.

### 3. Replace Resource Page Thumbnail Images
Copy each uploaded image to replace the corresponding linktree thumbnail asset:

| Upload | Target asset | Used for |
|--------|-------------|----------|
| IMG_8893.PNG (Enagic green logo) | `src/assets/linktree-ewg.png` | EWG Tap Water link |
| IMG_8891-2.PNG (Mehdi + EmGuarde) | `src/assets/linktree-emguarde.png` | EmGuarde DEMO |
| IMG_8891-2.PNG (same) | `src/assets/linktree-emguarde-contact.png` | Contact For EmGuarde |
| IMG_8890-2.PNG (Mehdi + K8) | `src/assets/linktree-k8.png` | Kangen Water DEMO |
| Use existing `product-k8-real.png` | `src/assets/linktree-kangen8.png` | Kangen 8 order link |
| 68AAA453 (Multipure canister) | `src/assets/linktree-multipure.png` | Pre Filters Multipure |
| E4E73150 (Ionfaucet 3-filters) | `src/assets/linktree-ionfaucet-filters.png` | Pre Filters Ionfaucet |
| IMG_8889-2.PNG (Pro Pump) | `src/assets/linktree-propump.png` | Buy PRO Pump |
| 0C67D4B5 (Faucet) | `src/assets/linktree-faucets.png` | Ionizer Faucets |
| IMG_8886-2.PNG (Ionfaucet blue logo) | `src/assets/linktree-ionfaucet-tools.png` | Ionfaucet tools |

### 4. Use K8 Product Image for Kangen 8 Link
In `src/pages/ResourcesPage.tsx`, import `product-k8-real.png` and use it as the thumbnail for the "Kangen 8" link instead of `linktree-kangen8.png`, OR copy it over the existing asset. Will copy to keep imports clean.

### 5. Files to modify
- `src/components/EventSection.tsx` -- change dates to "Thursday" / "Jueves"
- `src/assets/linktree-banner.png` -- overwrite with Mehdi banner
- 10 thumbnail assets in `src/assets/` -- overwrite with uploaded images
- No code changes needed in ResourcesPage.tsx since we're overwriting the same filenames

