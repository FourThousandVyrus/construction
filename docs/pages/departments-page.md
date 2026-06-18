# DEPARTMENTS (CAPABILITIES) PAGE

## CURRENT PAGE ANALYSIS

* **Current Structure:**
  - Capabilities hero: "Specialized Construction Wings".
  - Grid of interactive magnetic cards rendering 3D department icons (`Department3DIcon`).
  - Dark footer panel calling for project consultation.
  - Dynamic details route at `/departments/[id]`.
* **Strengths:** Magnetic pull card hover effects are very engaging.
* **Weak Points:**
  - In `src/app/departments/[id]/page.tsx`, the route uses "Book Appointment" text and links to `/doctors`.
  - The `/doctors` route does not exist in the codebase.
  - The 3D model text is clinical: "Interactive Diagnostic Model".

---

## PHASE 1 — UI POLISH

### Tasks
* Fix the link in `/departments/[id]/page.tsx` from `/doctors` to `/experts` and change text to "Meet the Team".
* Change "Book Appointment" to "Request Consult".
* Adjust card borders to use standardized opacity layers.

---

## PHASE 2 — PERFORMANCE

### Tasks
* Check load latency of `@react-three/fiber` inside `Department3DIcon`.
* Optimize rendering so the canvas is only initialized when visible on-screen.

---

## PHASE 3 — ACCESSIBILITY

### Tasks
* Make sure magnetic cards work gracefully with screen readers.
* Update 3D canvas elements to include descriptive `aria-label`.

---

## PHASE 4 — SEO

### Tasks
* Set metadata title: "Our Capabilities | Epicshield Surfaces — Construction Specialties".
* Set metadata description: "Discover Epicshield Surfaces' specialised construction capabilities, including turnkey builds, medical furnishing, and facility upgrades."

---

## PHASE 5 — PRODUCTION READINESS

### Tasks
* Fix the invalid `/doctors` routing.
* Test all dynamic capability pages `/departments/turnkey`, `/departments/furnishing`, etc., to confirm they render properly.
