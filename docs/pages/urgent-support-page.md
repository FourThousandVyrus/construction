# URGENT FACILITY SUPPORT PAGE (FORMERLY EMERGENCY)

## CURRENT PAGE ANALYSIS

* **Current Structure:**
  - Dark panel with emergency header: "Urgent Facility Support".
  - Headline: "Urgent Facility Support. When critical infrastructure fails, clinical operations stop."
  - Action button: "Call Urgent Support".
  - Dynamic 3D model displaying medical visuals.
  - Three card indicators detailing: Structural Repair, Equipment Failure, and On-Site Teams.
* **Strengths:** Clear layout, excellent copywriting positioning it as infrastructure support rather than a medical emergency.
* **Weak Points:**
  - The URL is `/emergency`, which retains a hospital-centric vibe. We should keep the path but make sure all internal references are clearly about systems downtime prevention.
  - The 3D scene uses the `emergency={true}` prop which renders a red-tinged medical cross or similar; should be verified to fit engineering style.

---

## PHASE 1 — UI POLISH

### Tasks
* Make sure phone contact links are active on mobile devices.
* Adjust red warning accent styling to avoid clinical red-cross style.

---

## PHASE 2 — PERFORMANCE

### Tasks
* Check bundle loading weight of the 3D scene.
* Lazy-load background components.

---

## PHASE 3 — ACCESSIBILITY

### Tasks
* Set clear screen reader labels for the emergency call button.
* Ensure sufficient text-to-background contrast on red status badges.

---

## PHASE 4 — SEO

### Tasks
* Set metadata title: "24/7 Urgent Infrastructure Support | Epicshield Surfaces".
* Set metadata description: "Get immediate emergency support for healthcare facility systems, structural repairs, medical gas line issues, and critical backup power failures."

---

## PHASE 5 — PRODUCTION READINESS

### Tasks
* Validate telephone formatting protocol on the dial button (`tel:+123456789`).
* Ensure dynamic models render without WebGL errors.
