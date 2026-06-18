# Hospital Construction & Management Website Plan

## Goal

Build a modern B2B website for a specialized hospital construction, furnishing, and management company in Next.js with a premium industrial-clinical visual style.

## Web Research Summary

The leaders in healthcare infrastructure (e.g., GE Healthcare, Bouygues Construction, Siemens Healthineers) emphasize:

- Turnkey Solutions: Single point of contact for design, build, and equip.
- Operational Readiness: Ensuring facilities are ready for clinical use immediately.
- Management & Maintenance: Ongoing technical support and facility optimization.
- Global Standards: Regulatory compliance and evidence-based design.

## Product Direction

The site should serve as a professional portfolio and service catalog for hospital developers and health ministries. It should highlight engineering expertise, technical mastery, and operational reliability.

Core principles:

- B2B Professionalism.
- High trust, technical depth.
- 3D as a tool to showcase architectural and engineering precision.
- Clear conversion paths for consultation and project proposals.

## Proposed Information Architecture

Primary navigation:

- Home
- Find a Doctor
- Departments
- Locations
- Appointments
- Emergency
- About

Homepage sections:

1. Hero with bold headline, short support copy, primary CTAs, and a subtle interactive 3D medical visual.
2. Quick access cards for Find Doctor, Book Appointment, Departments, Emergency, and Locations.
3. Trust strip with accreditation, patient stats, specialties, and satisfaction figures.
4. Featured departments with modern cards and hover depth.
5. Why choose us section with outcomes, research, specialists, and technology.
6. Patient stories or testimonials.
7. Locations / care network section.
8. News and health insights preview.
9. Footer with contact, emergency notice, and policy links.

## Visual Direction

- Tone: advanced, calm, clinical, premium.
- Palette: deep teal, sterile white, soft cyan, muted slate, small warm accent.
- Typography: expressive serif for hero moments plus a clean sans-serif for UI.
- 3D style: glassy anatomical forms, medical cross grid, floating orb clusters, depth through lighting and blur.
- Motion: slow parallax, staggered reveals, subtle pointer response, gentle section transitions.

## Technical Plan

- Framework: Next.js with App Router and TypeScript.
- Styling: Tailwind CSS with custom design tokens.
- 3D: React Three Fiber and Drei for lightweight scene work.
- Animation: Framer Motion for section transitions and UI motion.
- Icons: Lucide React.
- Fonts: Use modern non-default display/body pair via Next font loading.

## Build Phases

### Phase 1

Scaffold the Next.js project with core dependencies and baseline config.

### Phase 2

Build the homepage shell, navigation, design tokens, and responsive layout.

### Phase 3

Add the 3D hero scene and integrate motion carefully so performance stays acceptable.

### Phase 4

Populate patient-oriented sections, trust signals, and strong calls to action.

### Phase 5

Polish accessibility, responsiveness, loading states, and visual consistency.

## Definition of Done for First Pass

- Next.js app runs locally.
- Homepage is fully responsive.
- Hero includes a modern 3D visual.
- Primary patient actions are obvious above the fold.
- Sections reflect real hospital UX priorities instead of a generic startup landing page.
- Styling feels distinctive and premium.

## Immediate Next Step

Scaffold the Next.js project in this workspace and start with a strong homepage-first implementation.