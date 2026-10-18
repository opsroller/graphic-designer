# Store asset specs (snapshot)

Verified against the official pages on **2026-10-18**. Stores change these
often: open each source URL and re-check before producing assets. Record
your check date in the project's own spec table.

## Apple App Store and Apple platforms

Sources:
<https://developer.apple.com/design/human-interface-guidelines/app-icons>,
<https://developer.apple.com/documentation/xcode/creating-your-app-icon-using-icon-composer>,
<https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications>

| Asset | Spec |
|---|---|
| App icon, iOS/iPadOS/macOS | 1024 × 1024 px square layers, system-masked; layered (background + foreground); appearances default, dark, clear light/dark, tinted light/dark |
| App icon, visionOS | 1024 × 1024 px, circular mask, background + 1-2 layers |
| App icon, watchOS | 1088 × 1088 px, circular mask; avoid black backgrounds |
| App icon, tvOS | 800 × 480 px, 2-5 layers, parallax; keep a safe zone |
| Icon colour spaces | sRGB, Gray Gamma 2.2, Display P3 (not visionOS) |
| Icon layers | SVG preferred (text outlined), PNG for raster; no baked mask, shadows, blurs |
| Screenshots | JPEG or PNG, no alpha; 1-10 per display size |
| iPhone (required) | Dynamic Island medium: 1179 × 2556 or 1206 × 2622 portrait (landscape swapped) |
| iPhone large (optional/alternative) | 1260 × 2736, 1290 × 2796 or 1320 × 2868; Face ID large 1284 × 2778 or 1242 × 2688 if no Dynamic Island large set |
| iPad (required if app runs on iPad) | 13": 2064 × 2752 or 2048 × 2732 portrait |

## Google Play

Sources:
<https://support.google.com/googleplay/android-developer/answer/9866151>,
<https://developer.android.com/google-play/resources/icon-design-specifications>,
<https://developer.android.com/develop/ui/compose/system/icon_design_adaptive>

| Asset | Spec |
|---|---|
| Store icon | 512 × 512 px, 32-bit PNG with alpha, sRGB, max 1024 KB; full square, Play applies 30% corner radius and shadow; no ranking, deal or program text |
| Feature graphic | 1024 × 500 px, JPEG or 24-bit PNG, no alpha; key content centred; avoid pure white/black/dark grey; no device imagery or store badges |
| Screenshots | JPEG or 24-bit PNG, no alpha; 2-8 per device type; sides 320-3840 px, long side at most 2× short side |
| Screenshots for recommendations | Apps 4+, games 3+, at least 1080 × 1920 portrait or 1920 × 1080 landscape |
| Screenshot content | Real in-app capture; taglines ≤ 20% of image; clean status bar; no hands on devices |
| TV banner | 1280 × 720 px, JPEG or 24-bit PNG, no alpha |
| Wear OS screenshots | 1:1, min 384 × 384 px, no masking |
| Preview video | YouTube URL, public or unlisted, ads off; first 30 s autoplay muted |
| Adaptive launcher icon | Layers 108 × 108 dp; safe zone 66 × 66 dp centred; logo 48-66 dp; monochrome layer for themed icons |
| Text bans (all assets) | "Best", "#1", "Top", "New", "Free", "Sale", "Download now", "Install now", price or award claims |

## Steam

Sources:
<https://partner.steamgames.com/doc/store/assets/standard>,
<https://partner.steamgames.com/doc/store/assets/libraryassets>,
<https://partner.steamgames.com/doc/store/assets/rules>

| Asset | Spec |
|---|---|
| Header capsule | 920 × 430 px; key art + logo |
| Small capsule | 462 × 174 px; logo nearly fills it, legible at small sizes |
| Main capsule | 1232 × 706 px |
| Vertical capsule | 748 × 896 px |
| Screenshots | at least 5, 1920 × 1080 minimum, 16:9; gameplay only; at least 4 marked all-ages |
| Page background | 1438 × 810 px, optional, subtle |
| Bundle header | 707 × 232 px |
| Library capsule | 600 × 900 px; logo required, no other text |
| Library header | 920 × 430 px |
| Library hero | 3840 × 1240 px; no text; critical content in centred 860 × 380 px safe area |
| Library logo | PNG with transparency, 1280 px wide and/or 720 px tall; logotype (+ optional logomark) only |
| Capsule content | Artwork, game name, official subtitle only; no review scores, awards, discount copy, calls to action, other products |

## Not in this snapshot

Other stores and distribution sites (desktop app stores, console stores,
web game portals, social networks) were not verified in this snapshot.
For each one the project ships to, find the store's own developer
documentation and add a section to the project's spec table.
