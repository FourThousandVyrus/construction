# SERVICES PAGE

## CURRENT PAGE ANALYSIS

* **Current Structure:** 
  - Solutions hero with dark backdrop indicating "Core Solutions".
  - Grid showing 3D interactive service cards (`Service3DCard` mapping to `serviceCards`).
  - Capabilities panel discussing compliance and zero-latency technical integrations.
  - Action card to start a project consult.
  - Sub-routes: `/services/[id]` showing service details.
* **Strengths:** 3D hover effects on service cards provide interactive depth.
* **Weak Points:** 
  - Current cards in `serviceCards` are: "Clinical Space Planning", "Medical Procurement", "Operational Consulting".
  - These sound a bit too close to operations rather than full-scale B2B healthcare construction and MEP engineering.
  - The dynamic detail page has generic text and maps to `service.href.includes(id)`.

---

## PHASE 1 — UI POLISH

### Tasks
* Rewrite service cards in `site-content.ts` to map to:
  1. "Healthcare Infrastructure Development"
  2. "Medical Equipment Integration"
  3. "MEP & Systems Engineering"
* Ensure consistent border radius on cards.
* Clean up layout padding on the call-to-action blocks.

---

## PHASE 2 — PERFORMANCE

### Tasks
* Check bundle loading size of `Service3DCard` and split animations if they block thread interaction.
* Disable expensive R3F Canvas renders when the cards are out of view.

---

## PHASE 3 — ACCESSIBILITY

### Tasks
* Provide screen reader descriptive labels for the interactive 3D elements inside the cards.
* Make cards keyboard focusable and clickable via Space/Enter key.

---

## PHASE 4 — SEO

### Tasks
* Set metadata title: "Our Solutions | Epicshield Surfaces — Healthcare Construction & Engineering".
* Set metadata description: "Comprehensive healthcare infrastructure services including facility upgrades, hospital renovations, MEP systems execution, and medical equipment integration."

---

## PHASE 5 — PRODUCTION READINESS

### Tasks
* Provide proper fallback content in `/services/[id]` if params fail to match.
* Ensure all links click through to the corresponding dynamic routes.
