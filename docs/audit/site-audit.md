# Site Audit Report — Epicshield Surfaces

This report documents the findings from a full-site scan of Epicshield Surfaces.

---

## 1. Brand Identity & Positioning Audit

### The Core Problem
The current site incorrectly presents itself as a healthcare provider/hospital instead of a B2B healthcare construction, engineering, and facility management company. 

| Element | Current Clinical State | Required Engineering/Construction State |
| :--- | :--- | :--- |
| **Branding Terminology** | "Book Appointment", "Find a Doctor", "Specialties" | "Request Consultation", "Meet Our Lead Engineers", "Capabilities" |
| **Component Actions** | Doctor appointment forms with Cardiology, Neurology options | B2B project consultations focusing on turnkey, MEP, IT infrastructure |
| **Team Profiles** | Medical doctors with patient treatment bios | Clinical architects, project managers, systems engineers |
| **Hero CTAs** | "Book Appointment" | "Consult an Engineer", "View Solutions" |

---

## 2. Content & Routing Errors

* **Broken Link on Capabilities Page:** In `src/app/departments/[id]/page.tsx`, the button linking to team page points to `/doctors`, which returns a 404. It must point to `/experts`.
* **Duplicate Sections on Home Page:** In `src/app/page.tsx`, the CTA "Ready to build?" is rendered twice:
  - Lines 169-196
  - Lines 233-260
* **Static Content Inconsistencies:** The header links and footer links display "Consultation" but link to `/appointments`. We should rename the route or the link label to maintain consistency.

---

## 3. Recommended Actions

1. Refactor `src/lib/site-content.ts` to map to engineering terms.
2. Update the `AppointmentBooking` component to select project scopes instead of medical fields.
3. Clean up the duplicate components in the homepage and refactor sections to be B2B construction-focused.
4. Correct all routing references to team pages and consultation pages.
