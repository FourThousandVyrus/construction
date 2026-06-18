export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const companyStats = [
  { label: "Turnkey Projects", value: "85+" },
  { label: "Expert Engineers", value: "30+" },
  { label: "Facilities Managed", value: "12" },
  { label: "On-Time Delivery", value: "100%" },
] as const;

export const divisionData = [
  {
    id: "turnkey",
    title: "Turnkey Construction",
    description: "End-to-end construction management, from ground-breaking to project handover. Full single-point responsibility for commercial, industrial, and institutional projects.",
    icon: "Zap",
    image: "/images/image_1.jpeg",
  },
  {
    id: "civil",
    title: "Civil & Infrastructure",
    description: "Heavy civil works, site development, earthworks, roads, bridges, and utility infrastructure. Building the foundations that connect communities and enable growth.",
    icon: "ShieldCheck",
    image: "/images/image_5.jpeg",
  },
  {
    id: "mep",
    title: "MEP & Technical Systems",
    description: "Mechanical, electrical, and plumbing systems integration. HVAC, power distribution, fire protection, and building automation for modern facilities.",
    icon: "Activity",
    image: "/images/image_6.jpeg",
  },
  {
    id: "project-mgmt",
    title: "Project Management",
    description: "Professional project controls, scheduling, cost management, and quality assurance. Delivering complex projects on time and within budget across Africa.",
    icon: "Scan",
    image: "/images/image_7.jpeg",
  },
] as const;

export const serviceCards = [
  {
    href: "/services/assessment",
    eyebrow: "Site Evaluation",
    title: "Facility Assessment & Feasibility",
    copy: "Comprehensive site evaluation and feasibility studies to determine project viability, cost estimation, and regulatory requirements.",
  },
  {
    href: "/services/design-build",
    eyebrow: "Design & Build",
    title: "Architecture & Engineering Solutions",
    copy: "Integrated design and construction services focused on creating efficient, sustainable, and regulation-compliant built environments.",
  },
  {
    href: "/services/execution",
    eyebrow: "End-to-End Build",
    title: "Construction Project Execution",
    copy: "Complete project management and execution of commercial, industrial, and institutional projects from planning to final handover.",
  },
  {
    href: "/services/renovation",
    eyebrow: "Adaptive Reuse",
    title: "Renovation & Retrofitting",
    copy: "Transforming existing structures into modern, functional facilities while preserving structural integrity and optimizing value.",
  },
  {
    href: "/services/infrastructure",
    eyebrow: "Strategic Scale",
    title: "Infrastructure Development",
    copy: "Engineering turnkey infrastructure projects, utility networks, and large-scale civil works across diverse African markets.",
  },
] as const;


export const projectData = [
  {
    id: "kumasi-commercial",
    title: "Kumasi Commercial Complex",
    location: "Kumasi, Ghana",
    type: "Commercial Construction",
    status: "Completed",
    image: "/images/image_8.jpeg",
    stats: { capacity: "45,000 sq ft", duration: "14 Months", efficiency: "98%" },
    gallery: ["/images/image_8.jpeg", "/images/image_9.jpeg", "/images/image_10.jpeg", "/images/image_3.jpeg", "/images/image_11.jpeg"],
  },
  {
    id: "tema-industrial",
    title: "Tema Industrial Park Phase 2",
    location: "Tema, Ghana",
    type: "Industrial Facility",
    status: "In Progress",
    image: "/images/image_12.jpeg",
    stats: { capacity: "120,000 sq ft", duration: "20 Months", efficiency: "95%" },
    gallery: ["/images/image_12.jpeg", "/images/image_13.jpeg", "/images/image_14.jpeg", "/images/image_18.jpeg", "/images/image_19.jpeg"],
  },
  {
    id: "accra-residential",
    title: "Accra Heights Residential",
    location: "Accra, Ghana",
    type: "Residential Development",
    status: "Planning",
    image: "/images/image_20.jpeg",
    stats: { capacity: "200 Units", duration: "18 Months", efficiency: "99%" },
    gallery: ["/images/image_20.jpeg", "/images/image_21.jpeg", "/images/image_22.jpeg", "/images/image_23.jpeg", "/images/image_24.jpeg"],
  },
] as const;

export const liveSiteImages = [
  "/images/image_1.jpeg", "/images/image_2.jpeg", "/images/image_3.jpeg", "/images/image_4.jpeg",
  "/images/image_5.jpeg", "/images/image_6.jpeg", "/images/image_7.jpeg", "/images/image_8.jpeg",
  "/images/image_9.jpeg", "/images/image_10.jpeg", "/images/image_11.jpeg", "/images/image_12.jpeg",
  "/images/image_13.jpeg", "/images/image_14.jpeg", "/images/image_15.jpeg",
] as const;

export const galleryImages = [
  { src: "/images/image_1.jpeg", category: "Construction" },
  { src: "/images/image_2.jpeg", category: "Construction" },
  { src: "/images/image_3.jpeg", category: "Progress" },
  { src: "/images/image_4.jpeg", category: "Site" },
  { src: "/images/image_5.jpeg", category: "Infrastructure" },
  { src: "/images/image_6.jpeg", category: "MEP" },
  { src: "/images/image_7.jpeg", category: "Management" },
  { src: "/images/image_8.jpeg", category: "Construction" },
  { src: "/images/image_9.jpeg", category: "Progress" },
  { src: "/images/image_10.jpeg", category: "Site" },
  { src: "/images/image_11.jpeg", category: "Infrastructure" },
  { src: "/images/image_12.jpeg", category: "Construction" },
  { src: "/images/image_13.jpeg", category: "Progress" },
  { src: "/images/image_14.jpeg", category: "Site" },
  { src: "/images/image_15.jpeg", category: "Infrastructure" },
  { src: "/images/image_16.jpeg", category: "Management" },
  { src: "/images/image_17.jpeg", category: "Site" },
  { src: "/images/image_18.jpeg", category: "Construction" },
  { src: "/images/image_19.jpeg", category: "Progress" },
  { src: "/images/image_20.jpeg", category: "Infrastructure" },
  { src: "/images/image_21.jpeg", category: "Site" },
  { src: "/images/image_22.jpeg", category: "Construction" },
  { src: "/images/image_23.jpeg", category: "Progress" },
  { src: "/images/image_24.jpeg", category: "Infrastructure" },
  { src: "/images/image_25.jpeg", category: "Site" },
  { src: "/images/image_26.jpeg", category: "MEP" },
  { src: "/images/image_27.jpeg", category: "Management" },
] as const;

export const processPhases = [
  {
    phase: "01",
    title: "Discovery & Feasibility",
    description: "Site evaluation, soil testing, regulatory review, and budget assessment. We determine project viability before breaking ground.",
    icon: "Search",
  },
  {
    phase: "02",
    title: "Design & Engineering",
    description: "Architectural planning, structural calculations, MEP schematics, and BIM modeling. Every detail is precision-engineered.",
    icon: "PenTool",
  },
  {
    phase: "03",
    title: "Procurement & Logistics",
    description: "Sourcing materials, equipment leasing, supply chain coordination, and workforce mobilization across all project sites.",
    icon: "Truck",
  },
  {
    phase: "04",
    title: "Construction & Execution",
    description: "Site prep, foundation work, structural build-out, MEP installation, and interior finishing. Continuous quality control.",
    icon: "HardHat",
  },
  {
    phase: "05",
    title: "Commissioning & Handover",
    description: "Systems testing, safety inspections, documentation, and client walk-through. Every project is delivered turnkey-ready.",
    icon: "CheckCircle2",
  },
] as const;
