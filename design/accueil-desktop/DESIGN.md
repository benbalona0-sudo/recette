---
name: Recette d'Afrique Dining System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#5c403d'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#906f6b'
  outline-variant: '#e5bdb9'
  surface-tint: '#bd1119'
  primary: '#b20112'
  on-primary: '#ffffff'
  primary-container: '#d62828'
  on-primary-container: '#fff1ef'
  inverse-primary: '#ffb4ab'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#005d83'
  on-tertiary: '#ffffff'
  tertiary-container: '#0077a6'
  on-tertiary-container: '#ebf5ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000d'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#c7e7ff'
  tertiary-fixed-dim: '#83cfff'
  on-tertiary-fixed: '#001e2e'
  on-tertiary-fixed-variant: '#004c6c'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a modern culinary brand identity for an authentic Beninese restaurant based in Madina, Djougou. It blends contemporary West African warmth with an uncompromising architectural minimalism. The emotional response is centered around appetite appeal, culinary authority, and crisp operational clarity.

The visual style employs high-contrast modernism: stark, pristine canvas surfaces allow the rich textures and deep tones of traditional dishes (such as Wagashi, Wassa-Wassa, and Amiwo) to command primary visual attention. Precision typography, intentional micro-accents, and structural grounding form a balanced, safe, and dependable digital dining experience across mobile ordering and editorial discovery.

## Colors

The system enforces a strict 60-30-10 distribution model to preserve visual hierarchy and avoid sensory fatigue:

- **60% Pure White (`#FFFFFF`):** Dominates all global canvases, viewports, primary content cards, and modal dialog bodies. It maintains pristine negative space and maximizes contrast.
- **30% Deep Charcoal Black (`#111111`):** Applied to primary typography, navigation headers, structural borders, footer regions, and full-bleed high-impact discovery modules.
- **10% Vibrant Chili Red (`#D62828`):** Reserved exclusively as a focal driver for primary ordering actions, active navigation states, order badges, and numeric pricing highlights. It must never exceed its functional footprint.

Supporting neutral surfaces include an off-white container fill (`#F9F9F9`) for subtle card elevation differentials and a muted border tone (`#E5E5E5`) for structural definitions. Muted copy uses `#666666`.

## Typography

Typography pairs the structural geometry of Plus Jakarta Sans for all titles, headlines, pricing, and key actionable labels with the neutral, hyper-legible utility of Inter for descriptions, ingredients, and editorial body text.

- **Headlines & Titles:** Set with negative letter-spacing to maintain tight visual tension and a modern, premium appearance.
- **Body:** Kept neutral and rhythmic, prioritizing high legibility for ingredient lists, dietary attributes, and location details against high-contrast backgrounds.
- **Numbers & Pricing:** Always set in Plus Jakarta Sans SemiBold or Bold to anchor dish cards and order summaries with decisive clarity.

## Layout & Spacing

The layout operates on an 8pt base grid with an intentional embrace of generous whitespace:

- **Desktop (1024px+):** A 12-column fluid grid constrained to a maximum content width of 1280px, utilizing `margin` (48px) and `gutter` (24px).
- **Tablet (768px - 1023px):** An 8-column layout with 24px gutters and 32px canvas margins.
- **Mobile (< 768px):** A 4-column layout utilizing `gutter-mobile` (16px) and `margin-mobile` (20px), prioritizing vertical stacks for menu items and thumb-friendly ordering controls.

Spacing tokens dictate spatial relationships between food photography, metadata, and purchasing triggers:
- `space-xs` (4px) and `space-sm` (8px) govern tight pairings (badges, prices, culinary tags).
- `space-md` (16px) and `space-lg` (24px) structure component padding and standard grouping gaps.
- `space-xl` (40px) controls section separation across editorial content and category carousels.

## Elevation & Depth

This system avoids deep skeuomorphic shadows, relying instead on clean surface transitions and subtle tonal layering:

- **Level 0 (Flat/Base):** Pure `#FFFFFF` background with 1px solid `#E5E5E5` hairline borders for cards and dividers.
- **Level 1 (Interactive Surface):** Subdued off-white surface (`#F9F9F9`) or pure white accompanied by a soft, warm ambient drop shadow: `0 4px 20px -2px rgba(17, 17, 17, 0.05)`.
- **Level 2 (Dropdowns & Overlays):** Ambient diffused shadow: `0 12px 32px -4px rgba(17, 17, 17, 0.08)`.
- **Inverted Surfaces (30% Rule):** High-impact structural zones (top navigation bar, order review bar, and footer) use solid `#111111` surfaces with crisp `#262626` dividing borders, creating physical boundaries without ambient blurs.

## Shapes

The geometric identity balances modern precision with welcoming, organic curves:

- **Base Radius (`0.5rem` / 8px):** Applied to form fields, checkboxes, and micro-badges.
- **Container Radius (`rounded-lg` / `1rem` / 16px):** Standard for secondary panels, small modals, and interactive ingredient selectors.
- **Display Radius (`rounded-xl` / `1.5rem` / 24px):** Standard for primary menu item cards, hero food photography frames, and floating cart panels.
- **Pill Formats:** Dedicated specifically to category filter chips, status tags (e.g., "Authentic Djougou Special"), and primary floating actions.

## Components

### Buttons
- **Primary Action (10% Focus):** Background `#D62828`, text `#FFFFFF`, font `Plus Jakarta Sans` Bold (14px). Height 48px, radius `0.75rem` or full pill. Hover state deepens to `#BA1F1F`. Active click compresses slightly (`scale: 0.98`).
- **Secondary Action:** Background `#111111`, text `#FFFFFF`. Used for "View Full Menu" or "Reserve Table" triggers.
- **Tertiary / Outline:** Background transparent, 1.5px solid `#111111`, text `#111111`.

### Menu Cards
- Base surface `#FFFFFF` with 1px `#E5E5E5` border and `rounded-xl` (24px) corners.
- Food imagery is cropped at top with zero margin and a fixed aspect ratio (4:3 or 16:9).
- Card interior features `space-md` padding: title in `#111111` (`title-lg`), short description in `#666666` (`body-sm`), and price prominently rendered in `#D62828` (`headline-sm`).
- Floating "+ Add" pill button anchors to the bottom-right corner.

### Chips & Category Filters
- **Default:** Background `#F9F9F9`, border 1px solid `#E5E5E5`, text `#111111` (`label-md`), full pill radius.
- **Active / Selected:** Background `#111111`, text `#FFFFFF`, border 1px solid `#111111`.

### Input Fields & Selectors
- Height 48px, background `#FFFFFF`, border 1px solid `#D1D1D1`, radius `0.5rem`.
- Focus state: Border switches to `#111111` with a 2px outer outline of `#11111115`.
- Labels are positioned outside the field in `Plus Jakarta Sans` SemiBold (12px), `#111111`.

### Checkboxes & Radio Buttons
- 20px controls with a 2px border in `#111111`.
- Checked state fills with `#111111` and an inner white tick/dot. Red is strictly omitted here to preserve the 10% accent budget for conversion elements.

### Dietary & Regional Badges
- Pill format, padding 4px 10px, background `#FEE2E2` with `#D62828` text (`label-sm`) for house specialties; background `#F3F3F3` with `#111111` text for generic attributes (e.g., "Spicy", "Halal", "Local Madina Produce").