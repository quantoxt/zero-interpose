# Editorial Design System

A refined editorial design system using indigo/gold colors and Cormorant Garamond typography for the Zero Interpose pricing page.

## Design Philosophy

Refined minimalism with editorial elegance. The design balances sophistication with clarity, using traditional typography paired with contemporary spacing and interaction patterns.

## Color Palette

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| Deep Indigo | `#1E1B4B` | Headings, buttons, primary borders |
| Gold/Brass | `#C7A252` | CTAs, highlights, decorative accents |
| Warm Stone | `#FAFAF9` | Page background |
| Near Black | `#1C1917` | Body text |
| Warm Gray | `#57534E` | Secondary text, muted content |

### Color Relationships

- **Primary (Indigo)** conveys trust, professionalism, and literary tradition
- **Accent (Gold)** provides warmth and premium feel without being ostentatious
- **Background (Stone)** offers a subtle warmth that's easier on eyes than pure white
- **Text (Near Black)** ensures strong contrast for readability

## Typography

### Font Families

```css
/* Headings & Display */
font-family: 'Cormorant Garamond', serif;
font-weight: 500, 600, 700;
line-height: 1.2;

/* Body Text */
font-family: 'Inter', sans-serif;
font-weight: 400, 500;
line-height: 1.6;
```

### Type Scale

| Element | Size | Weight | Font |
|---------|------|--------|------|
| H1 (Page Title) | 3rem+ | 700 | Cormorant Garamond |
| H2 (Section Title) | 2.25rem | 600 | Cormorant Garamond |
| H3 (Card Title) | 1.75rem | 600 | Cormorant Garamond |
| Body | 1rem | 400 | Inter |
| Small/Caption | 0.875rem | 400 | Inter |

## Component Patterns

### Pricing Card

**Base Styles:**
- Background: White (`#FFFFFF`)
- Border: 1px solid `#E7E5E4` (stone-200)
- Border radius: 8px (subtle, not pill-shaped)
- Shadow: Soft, diffuse editorial feel

**Hover State:**
- Subtle lift: `-translate-y-1`
- Enhanced shadow for depth
- Border color may shift to accent

**Featured Card:**
- Gold accent border (2px)
- Slight elevation from base
- "Most Popular" badge in gold

### Buttons

**Primary CTA:**
- Background: Gold (`#C7A252`)
- Text: White or near-black for contrast
- Border radius: 6px (balanced refinement)
- Hover: Slight darkening of gold

**Secondary CTA:**
- Background: Transparent
- Border: 1px solid indigo
- Text: Indigo
- Hover: Indigo background with white text

### FAQ Accordion

**Item Styling:**
- Border-bottom: 1px solid `#E7E5E4`
- No background (transparent)
- Padding: 1rem 0

**Trigger:**
- Font: Cormorant Garamond, 600
- Size: 1.125rem
- Hover: Gold accent color

**Content:**
- Font: Inter, 400
- Size: 1rem
- Color: Warm Gray (`#57534E`)

## Spacing & Layout

### Container Widths
- Page max-width: `1200px` (75rem)
- Text content: `640px` (40rem) for optimal readability
- Cards: Distributed with consistent gaps

### Spacing Scale
- Section padding: `5rem` vertical
- Card internal padding: `2rem`
- Gap between cards: `2rem`

## Animation & Interaction

### Transitions
- Standard duration: `0.3s ease`
- Hover lifts: `transform translateY(-4px)`
- Shadow transitions for depth

### Reduced Motion
Always respect `prefers-reduced-motion`:
- Disable transform animations
- Keep color/opacity changes for accessibility
- Instant state changes, no duration

## CSS Variables (Implementation)

These are added to `tailwind.css`:

```css
:root {
  /* Editorial design tokens */
  --editorial-primary: #1E1B4B;     /* deep indigo */
  --editorial-accent: #C7A252;      /* gold/brass */
  --editorial-bg: #FAFAF9;          /* warm stone */
  --editorial-text: #1C1917;        /* near black */
  --editorial-muted: #57534E;       /* warm gray */
}
```

## Usage Examples

### Headings
```html
<h2 class="font-['Cormorant_Garamond'] font-semibold text-[#1E1B4B]">
  Pricing Plans
</h2>
```

### Body Text
```html
<p class="font-['Inter'] font-normal text-[#1C1917]">
  Choose the perfect plan for your writing journey.
</p>
```

### Accent Text
```html
<span class="text-[#C7A252]">Most Popular</span>
```

## Accessibility

- All text meets WCAG AA contrast ratios (4.5:1 minimum)
- Gold accent is dark enough (`#C7A252`) for white text or pairs with near-black
- Keyboard navigation patterns follow native expectations
- Focus states are clearly visible
- Semantic HTML for all components
