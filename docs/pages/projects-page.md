# PROJECTS PORTFOLIO PAGE

## CURRENT PAGE ANALYSIS

* **Current Structure:**
  - Hero banner with a background network graph: "Clinical Infrastructure Case Studies".
  - Portfolio grid mapping to projects inside `projectData`.
  - Grid card includes: status tag, project title, specs (capacity, duration, efficiency).
  - Sub-route: `/projects/[id]` showing detailed case studies.
* **Strengths:** Scan-wave animation on image hover; clear metrics.
* **Weak Points:**
  - Standard grid is simple; a masonry or irregular grid would look more architectural.
  - The status tag options include "In Progress", "Completed", "Planning".
  - Description copy contains clinical references like "clinical vision".

---

## PHASE 1 — UI POLISH

### Tasks
* Refine the typography on the case study metrics.
* Align card spacing on small breakpoints.

---

## PHASE 2 — PERFORMANCE

### Tasks
* Ensure project card images use Next.js Image component with accurate scaling metrics.
* Optimize custom scan animation keyframes to prevent GPU performance degradation.

---

## PHASE 3 — ACCESSIBILITY

### Tasks
* Ensure target link descriptions state the project title (e.g. "View Accra Central Trauma Wing Case Study").
* Standardize focus indicators.

---

## PHASE 4 — SEO

### Tasks
* Set metadata title: "Featured Projects | Epicshield Surfaces — Construction Portfolio".
* Set metadata description: "Explore Epicshield Surfaces' project portfolio, detailing our turnkey healthcare facility construction, clinical refurbishments, and MEP engineering projects."

---

## PHASE 5 — PRODUCTION READINESS

### Tasks
* Validate project detail pages route successfully from index.
* Verify dynamic paths match available dataset keys in `projectData`.
