# CONSULTATION BOOKING PAGE (FORMERLY APPOINTMENTS)

## CURRENT PAGE ANALYSIS

* **Current Structure:**
  - Hero with heartbeat ECG waveform animation.
  - Interactive multi-step booking form (`AppointmentBooking`).
  - Core features panel discussing security, confirmation, and step indicators.
* **Strengths:** Interactive step-by-step progress form with Framer Motion animations.
* **Weak Points:**
  - The page title is `/appointments`.
  - The heartbeat waveform graphic is too clinic-focused.
  - The form steps ask for medical departments (Cardiology, Neurology, Radiology, General Practice) and schedules appointments.
  - This needs to be changed to ask for project consultation types (Turnkey Construction, Medical Furnishing, MEP Engineering, Facility Management) and schedule project strategy calls.

---

## PHASE 1 — UI POLISH

### Tasks
* Replace the ECG heartbeat wave animation with a clean architectural pulse line or structural grid animation.
* Revise booking selection choices from medical departments to:
  - Turnkey Hospital Construction
  - Medical Equipment Integration
  - MEP & Systems Engineering
  - Healthcare Facility Upgrades
* Rename form fields to capture project details (e.g. project location, estimated timeline).

---

## PHASE 2 — PERFORMANCE

### Tasks
* Optimize Framer Motion state changes to prevent unnecessary re-renders.
* Minimize dynamic JS load overhead for form validation.

---

## PHASE 3 — ACCESSIBILITY

### Tasks
* Add appropriate ARIA labels for steps and selected items.
* Group input elements into fieldsets with descriptive legends.

---

## PHASE 4 — SEO

### Tasks
* Set metadata title: "Book a Project Consultation | Epicshield Surfaces".
* Set metadata description: "Initiate your hospital construction project. Consult with Epicshield Surfaces' clinical engineers and facility planners today."

---

## PHASE 5 — PRODUCTION READINESS

### Tasks
* Implement form validations (check valid email format, non-empty fields).
* Render success feedback state indicating a specialist will contact the user.
