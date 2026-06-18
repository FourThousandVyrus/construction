# Accessibility Report — Epicshield Surfaces

This report documents the accessibility enhancements needed for Epicshield Surfaces.

---

## 1. Audit Findings

### Contrast & Typography
* Custom variables defined in `globals.css` (e.g. `--background: #f4efe6`, `--muted: #726c63`) provide a contrast ratio of ~3.5:1. 
* Smaller captions in these colors do not meet WCAG AA standards (4.5:1 for body copy).

### Interactive Elements & Forms
* Form inputs in `appointment-booking.tsx` lack clear `<label>` elements connected via `htmlFor`. They use floating text spans.
* Step indicators in the form are skipped by screen readers.
* Custom button overlays lack focus indicators (`focus-visible` outline rings) for users navigating via keyboard.

---

## 2. Action Plan

1. **Semantic HTML:** Update custom text spans to `<label>` tags with appropriate attributes.
2. **Keyboard Traps:** Ensure modal and step actions within components are accessible via Tab.
3. **Contrast Adjustments:** Add darker font-color overrides for muted metadata paragraphs to reach compliant contrast levels.
4. **Alt Attributes:** Audit all `Image` elements in `src/app` to verify descriptive text is provided in the `alt` attribute instead of generic keywords.
