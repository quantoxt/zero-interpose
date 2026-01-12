# Zero Interpose - Design Improvements

Enhancements to elevate the UI/UX and reduce "AI-generated" feel.

---

## 1. Scroll Reveal Animations

**Goal:** Sections fade up and into view as user scrolls, creating a dynamic, engaging experience.

**Implementation:**
- Create reusable `useScrollReveal` composable using Intersection Observer API
- Add fade-up, fade-in, and slide-up variants
- Stagger children animations within sections
- Configurable delay and threshold per section

**Sections to apply:**
- Core Value Proposition cards (staggered)
- Pricing cards (staggered)
- How It Works steps (staggered)
- Trust Signal (single reveal)
- Final CTA (single reveal)

**Benefits:**
- Makes the page feel alive
- Guides attention progressively
- Premium, polished feel

---

## 2. Grain/Noise Overlay ✅

**Goal:** Add subtle film grain texture across the entire site for tactile, editorial feel.

**Implementation:**
- CSS fixed overlay with noise SVG or base64
- `pointer-events: none` to not affect interactions
- Opacity around 0.02-0.03 (very subtle)
- Can be toggled via CSS variable for dark mode

**Benefits:**
- Breaks up "digital" flatness
- Adds depth and texture
- Editorial/magazine aesthetic

**Status:** ✅ Implemented in `default.css` - opacity 0.06, baseFrequency 0.7, 4 octaves

---

## 3. Magnetic Buttons

**Goal:** Buttons subtly follow cursor movement when hovering, creating a premium interactive feel.

**Implementation:**
- Create `useMagnetic` composable
- Calculates distance from cursor to button center
- Applies subtle transform (translate) based on cursor position
- Smooth easing back to center on leave

**Apply to:**
- Primary CTAs in hero and final CTA
- Pricing table buttons
- Navigation CTA

**Benefits:**
- Feels custom and crafted
- Delightful micro-interaction
- Memorable user experience

---

## 4. Enhanced Typography Hierarchy

**Goal:** Refine spacing and sizing for more editorial, sophisticated look.

**Changes:**
- Headlines: tighter letter-spacing (-0.02em)
- Body text: increased line-height (1.7 instead of default)
- Pull quotes: larger, more prominent
- Better vertical rhythm between sections

**Implementation:**
- Add to default.css as utility classes or extend Tailwind config
- Use `tracking-tight` on headlines
- Use `leading-relaxed` on body copy

---

## 5. Parallax Decorative Elements

**Goal:** Hero background shapes move at different speeds as user scrolls.

**Implementation:**
- Track scroll position
- Apply subtle translateY to decorative blobs
- Different speeds for different elements (depth effect)
- Use `requestAnimationFrame` for smooth performance

**Apply to:**
- Hero gradient blobs
- Floating geometric shapes
- Trust signal quote marks

---

## 6. Custom Selection Color

**Goal:** Purple text selection instead of default blue.

**Implementation:**
```css
::selection {
  background-color: #8B5CF6;
  color: white;
}
```

**Benefits:**
- Small but memorable detail
- Reinforces brand colors
- Feels intentionally designed

---

## 7. Enhanced Footer

**Goal:** Add personality and polish to the footer.

**Additions:**
- Subtle top border gradient (already done)
- Small tagline or "made with" text
- Maybe a decorative pattern
- Smooth hover states on links

---

## Implementation Order

1. **Scroll Reveal Animations** ← Start here
2. Grain/Noise Overlay
3. Custom Selection Color
4. Enhanced Typography
5. Magnetic Buttons
6. Parallax Elements
7. Enhanced Footer

---

## Notes

- Keep performance in mind (use Intersection Observer, not scroll listeners)
- Test on mobile - animations should be subtle and not jarring
- Can be toggled via prefers-reduced-motion for accessibility
