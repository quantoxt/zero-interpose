# Zero Interpose - Micro-Optimizations

Small UI/UX refinements to polish the user experience.

---

## Todo List

- [x] **1. Footer Top Border**
  - Make the top border more visible
  - Change from gradient fade to solid 1px border with `--zi-border` color
  - File: `app/components/custom/Footer.vue` ✅

- [x] **2. Section Separators**
  - Add subtle dividers between major sections
  - 1px line with gradient fade on edges
  - Better visual flow between content blocks
  - Created `UiSectionSeparator` component ✅

- [x] **3. Hero Scroll Indicator**
  - Add animated "scroll down" arrow at bottom of hero section
  - Gentle bounce animation to encourage scrolling
  - File: `app/components/sections/Home/Hero.vue` ✅

- [x] **4. Card Border Hover Effect**
  - CoreValuePosition cards: border turns purple (`--zi-accent`) on hover
  - Add stronger interactive feedback
  - File: `app/components/sections/Home/CoreValuePosition.vue` ✅

- [ ] **5. Pricing Featured Badge Animation**
  - Add subtle pulse/glow to "MOST POPULAR" badge
  - Draw attention to recommended plan
  - File: `app/components/sections/Home/PricingTable.vue`

- [ ] **6. HowItWorks Step Number Animation**
  - Add subtle scale animation when section appears
  - Could include count-up effect on numbers
  - File: `app/components/sections/Home/HowItWorks.vue`

- [ ] **7. Section Background Alternation**
  - Alternate backgrounds: white → light gray → white → light gray
  - Better visual separation between sections
  - Files: All section components

- [ ] **8. TrustSignal Quote Marks Enhancement**
  - Make quote marks more prominent (opacity 0.15 → 0.2)
  - Add subtle purple tint
  - File: `app/components/sections/Home/TrustSignal.vue`

---

## Priority Order

1. Footer border (visibility fix)
2. Section separators (visual flow)
3. Card border hover (interaction)
4. Scroll indicator (UX)
5. Featured badge animation (conversion)
6. Background alternation (rhythm)
7. Step number animation (delight)
8. Quote marks enhancement (polish)

---

## Notes

- Keep animations subtle and performant
- Test on mobile for responsiveness
- Ensure accessibility (reduced motion support)
