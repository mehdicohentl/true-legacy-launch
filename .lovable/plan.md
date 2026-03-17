

## Replace Product Images with Transparent Versions

Replace all 8 product image files with the user-uploaded transparent-background versions. Each upload maps directly to an existing asset:

| Upload | Target file |
|--------|------------|
| photo_2026-03-17_02-35-48.png (K8) | `src/assets/product-k8-real.png` |
| photo_2026-03-17_02-49-44.png (EmGuarde) | `src/assets/product-emguarde-real.png` |
| photo_2026-03-17_02-50-07.png (SD501 DX) | `src/assets/product-sd501dx-real.png` |
| photo_2026-03-17_02-50-49.png (Super 501) | `src/assets/product-sd501super-real.png` |
| photo_2026-03-17_02-39-12.png (Jr IV) | `src/assets/product-jriv-real.png` |
| photo_2026-03-17_02-40-04.png (Anespa DX) | `src/assets/product-anespa-real.png` |
| photo_2026-03-17_02-42-11.png (Kangen Air) | `src/assets/kangen-air.png` |
| photo_2026-03-17_02-48-20.png (Wagyu) | `src/assets/product-wagyu-real.png` |

No code changes needed -- same filenames, same imports. Just swap the files.

Also remove any leftover CSS blend-mode hacks (`img-no-bg-white`, `img-no-bg-black`, global `img` background overrides) from `src/index.css` since the images themselves are now transparent and no longer need CSS background removal tricks.

