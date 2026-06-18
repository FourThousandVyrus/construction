# HOME PAGE

## CURRENT PAGE ANALYSIS

* **Current Structure:** 
  - Hero section with structural text details and a dynamic 3D Medical Scene mesh.
  - Solutions/Capabilities grid ("Construction Specialties").
  - Featured Projects horizontal scrolling list.
  - Call to action widget ("Ready to build?" with Consultation form).
  - Project Sites grid gallery.
  - Repeated Call to action widget (exact same "Ready to build?" section is rendered twice at the bottom).
  - Selected Team profiles ("Strategic Expertise").
* **Strengths:** Excellent visual presence, clean typography, responsive horizontal scroll snapping.
* **Weak Points:** 
  - Subheadline refers to "Epicshield Surfaces" without context; needs to be clear it builds healthcare spaces.
  - Duplicate CTA sections clutter the lower section.
  - Doctor profiles card layout looks like clinical profiles, not building contractors.
* **UI Inconsistencies:** The duplicate CTA creates visual noise.

---

## PHASE 1 — UI POLISH

### Tasks
* Eliminate the second duplicate CTA section at the bottom of the page.
* Adjust vertical section margins (`mt-24` and `mt-40`) to maintain a clean layout rhythm.
* Update copy on the team list title from "Strategic Expertise" to "Lead Project Specialists".

---

## PHASE 2 — PERFORMANCE

### Tasks
* Preload the hero background image (`/images/image_4.jpeg`) using Next.js Image `priority` to improve LCP.
* Lazy-load the bottom project gallery images using custom dimensions.

---

## PHASE 3 — ACCESSIBILITY

### Tasks
* Add `aria-label` to the horizontal scroll buttons and grid scan icons.
* Ensure color contrast of subheading details (e.g. `text-white/40`) is readable against dark background colors.

---

## PHASE 4 — SEO

### Tasks
* Set metadata title: "Epicshield Surfaces — Healthcare Construction & Infrastructure Development".
* Set metadata description: "Specialized turnkey medical facility construction, MEP installations, clinical architecture, and management services across Africa."
* Establish a proper heading hierarchy (`h1` for hero, `h2` for section titles).

---

## PHASE 5 — PRODUCTION READINESS

### Tasks
* Render fallbacks for the 3D Hero scene if WebGL fails to load.
* Validate all navigation routes from the homepage.
