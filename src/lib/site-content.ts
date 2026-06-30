export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/international", label: "Global" },
  { href: "/contact", label: "Contact" },
] as const;

export const companyStats = [
  { label: "Turnkey Hospitals", value: "2" },
  { label: "Clinical Advisory", value: "20+ Yrs" },
  { label: "Medical Gas Systems", value: "100%" },
  { label: "On-Time Delivery", value: "100%" },
] as const;

export const divisionData = [
  {
    id: "hospital-dev",
    title: "Hospital Development",
    description: "Designing and building state-of-the-art hospitals, specialist clinics, and patient-centric healthcare facilities from ground-breaking to commissioning.",
    icon: "Building2",
    image: "/images/image_1.jpeg",
  },
  {
    id: "medical-tech",
    title: "Medical Technology",
    description: "Comprehensive procurement, installation, calibration, and lifecycle maintenance of advanced medical equipment and smart hospital automation systems.",
    icon: "Scan",
    image: "/images/image_7.jpeg",
  },
  {
    id: "healthcare-eng",
    title: "Healthcare Engineering",
    description: "Integration of clinical MEP services, including certified Medical Gas piping, cleanrooms, sterile isolation units, and specialized HVAC filtration.",
    icon: "Activity",
    image: "/images/image_6.jpeg",
  },
  {
    id: "doors-windows",
    title: "Hospital Doors & Windows",
    description: "Manufacturing and installing specialized hospital-grade doors (lead-lined for radiation rooms, fire-rated, ICU sliding, airtight theatre) and architectural systems.",
    icon: "ShieldCheck",
    image: "/images/image_5.jpeg",
  },
] as const;

export interface Service {
  id: string;
  href: string;
  title: string;
  eyebrow: string;
  description: string;
  subServices: string[];
  images: {
    hero: string;
    card: string;
    detail01: string;
    detail02: string;
    feature01: string;
    feature02: string;
    cta: string;
    gallery01: string;
  };
  gallery: string[];
}

export const servicesData: Service[] = [
  {
    id: "hospital-construction",
    href: "/services/hospital-construction",
    title: "Healthcare Infrastructure / Hospital Construction",
    eyebrow: "Facility Design & Build",
    description:
      "End-to-end design, construction, and commissioning of state-of-the-art hospitals and specialist clinics conforming to international healthcare standards.",
    subServices: [
      "Full-cycle Hospital Design & Planning",
      "Civil & Structural Engineering",
      "Turnkey Project Delivery",
      "Specialist Clinic Development",
      "Ward & Patient Unit Construction",
      "Emergency & Trauma Facility Build",
    ],
    images: {
      hero: "/images/services/srv-hospital-hero.webp",
      card: "/images/services/srv-hospital-card.webp",
      detail01: "/images/services/srv-hospital-detail-01.webp",
      detail02: "/images/services/srv-hospital-detail-02.webp",
      feature01: "/images/services/srv-hospital-feature-01.webp",
      feature02: "/images/services/srv-hospital-feature-02.webp",
      cta: "/images/services/srv-hospital-cta.webp",
      gallery01: "/images/services/srv-hospital-gallery-01.webp",
    },
    gallery: [],
  },
  {
    id: "medical-tech",
    href: "/services/medical-tech",
    title: "Medical Technology & Equipment",
    eyebrow: "Clinical Equipment",
    description:
      "Clinical equipment planning, sourcing, supply, installation, calibration, and biomedical training with global manufacturing partners.",
    subServices: [
      "Equipment Planning & Specification",
      "Global Sourcing & Procurement",
      "Installation & Integration",
      "Calibration & Commissioning",
      "Biomedical Training & Handover",
      "Operation & Maintenance Support",
      "Lifecycle Management",
    ],
    images: {
      hero: "/images/services/srv-medtech-hero.webp",
      card: "/images/services/srv-medtech-card.webp",
      detail01: "/images/services/srv-medtech-detail-01.webp",
      detail02: "/images/services/srv-medtech-detail-02.webp",
      feature01: "/images/services/srv-medtech-feature-01.webp",
      feature02: "/images/services/srv-medtech-feature-02.webp",
      cta: "/images/services/srv-medtech-cta.webp",
      gallery01: "/images/services/srv-medtech-gallery-01.webp",
    },
    gallery: ["/images/medical equipment 1.png", "/images/medical equipment 2.png"],
  },
  {
    id: "engineering-systems",
    href: "/services/engineering-systems",
    title: "Healthcare Engineering Systems",
    eyebrow: "Clinical Sub-Systems",
    description:
      "Design and installation of certified medical gas systems, cleanrooms, isolation units, and advanced laminar-flow HVAC environments.",
    subServices: [
      "Medical Gas Pipeline Systems (O₂, N₂O, Vacuum)",
      "HVAC & Laminar Airflow Systems",
      "MEP Services (Mechanical, Electrical, Plumbing)",
      "Cleanroom Construction & Certification",
      "Isolation & Infection Control Facilities",
      "Operating Theatre Infrastructure",
      "HEPA Filtration & Ventilation",
    ],
    images: {
      hero: "/images/services/srv-eng-hero.webp",
      card: "/images/services/srv-eng-card.webp",
      detail01: "/images/services/srv-eng-detail-01.webp",
      detail02: "/images/services/srv-eng-detail-02.webp",
      feature01: "/images/services/srv-eng-feature-01.webp",
      feature02: "/images/services/srv-eng-feature-02.webp",
      cta: "/images/services/srv-eng-cta.webp",
      gallery01: "/images/services/srv-eng-gallery-01.webp",
    },
    gallery: ["/images/healthcare engineering.png"],
  },
  {
    id: "doors-windows",
    href: "/services/doors-windows",
    title: "Hospital Doors & Windows",
    eyebrow: "Specialized Building Solutions",
    description:
      "Specialized radiation-protection lead-lined doors, fire-rated doors, airtight operating theatre doors, ICU sliding doors, and architectural systems.",
    subServices: [
      "Lead-Lined Radiation Protection Doors",
      "Fire-Rated Doors & Frames",
      "ICU Sliding Door Systems",
      "Operating Theatre Airtight Doors",
      "uPVC Windows & Glazing",
      "Aluminium Architectural Systems",
      "Custom Hospital Millwork",
    ],
    images: {
      hero: "/images/services/srv-doors-hero.webp",
      card: "/images/services/srv-doors-card.webp",
      detail01: "/images/services/srv-doors-detail-01.webp",
      detail02: "/images/services/srv-doors-detail-02.webp",
      feature01: "/images/services/srv-doors-feature-01.webp",
      feature02: "/images/services/srv-doors-feature-02.webp",
      cta: "/images/services/srv-doors-cta.webp",
      gallery01: "/images/services/srv-doors-gallery-01.webp",
    },
    gallery: [
      "/images/hospital doors 1.png",
      "/images/hospital doors 2.png",
      "/images/hospital doors 3.jpg",
      "/images/hospital doors 4.png",
    ],
  },
  {
    id: "facility-dev",
    href: "/services/facility-dev",
    title: "Facility Development & Management",
    eyebrow: "Operations Support",
    description:
      "Comprehensive facility planning, operations consulting, and ongoing technical maintenance to ensure long-term clinical functionality.",
    subServices: [
      "Facility Planning & Layout Consulting",
      "Operations & Maintenance Programs",
      "Clinical Workflow Integration",
      "Technical Audits & Assessments",
      "Preventive Maintenance Schedules",
      "Asset & Lifecycle Management",
      "Energy Management & Sustainability",
    ],
    images: {
      hero: "/images/services/srv-facility-hero.webp",
      card: "/images/services/srv-facility-card.webp",
      detail01: "/images/services/srv-facility-detail-01.webp",
      detail02: "/images/services/srv-facility-detail-02.webp",
      feature01: "/images/services/srv-facility-feature-01.webp",
      feature02: "/images/services/srv-facility-feature-02.webp",
      cta: "/images/services/srv-facility-cta.webp",
      gallery01: "/images/services/srv-facility-gallery-01.webp",
    },
    gallery: [],
  },
];

export const projectData = [
  {
    id: "sokoban-hospital",
    title: "Sokoban Hospital Project",
    location: "Sokoban, Kumasi",
    type: "Comprehensive Hospital Unit",
    status: "In Progress",
    image: "/images/image_8.jpeg",
    stats: { capacity: "20 Beds", duration: "12 Months", efficiency: "100% compliant" },
    gallery: ["/images/image_8.jpeg", "/images/image_9.jpeg", "/images/image_10.jpeg", "/images/image_3.jpeg", "/images/image_11.jpeg"],
  },
  {
    id: "adenta-specialist",
    title: "Adenta 50-Bed & 33-Bed Specialist Hospital",
    location: "Adenta, Accra",
    type: "Flagship Specialist Medical Facility",
    status: "In Progress",
    image: "/images/image_12.jpeg",
    stats: { capacity: "50-Bed & 33-Bed", duration: "16 Months", efficiency: "98% clinical rating" },
    gallery: ["/images/image_12.jpeg", "/images/image_13.jpeg", "/images/image_14.jpeg", "/images/image_18.jpeg", "/images/image_19.jpeg"],
  },
  {
    id: "global-study-tour",
    title: "Dubai & China Technology Sourcing",
    location: "Dubai & China",
    type: "Medical Tech Sourcing Tour",
    status: "Completed",
    image: "/images/image_20.jpeg",
    stats: { capacity: "CHCC 2026", duration: "3 Weeks", efficiency: "10+ Global Partners" },
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
  { src: "/images/image_1.jpeg", category: "Hospital Construction" },
  { src: "/images/image_2.jpeg", category: "Hospital Construction" },
  { src: "/images/image_3.jpeg", category: "Hospital Construction" },
  { src: "/images/image_4.jpeg", category: "Healthcare Engineering" },
  { src: "/images/image_5.jpeg", category: "Healthcare Engineering" },
  { src: "/images/image_6.jpeg", category: "Medical Equipment" },
  { src: "/images/image_7.jpeg", category: "Study Tours & Visits" },
  { src: "/images/image_8.jpeg", category: "Hospital Construction" },
  { src: "/images/image_9.jpeg", category: "Hospital Construction" },
  { src: "/images/image_10.jpeg", category: "Healthcare Engineering" },
  { src: "/images/image_11.jpeg", category: "Healthcare Engineering" },
  { src: "/images/image_12.jpeg", category: "Hospital Construction" },
  { src: "/images/image_13.jpeg", category: "Hospital Doors & Windows" },
  { src: "/images/image_14.jpeg", category: "Hospital Doors & Windows" },
  { src: "/images/image_15.jpeg", category: "Hospital Doors & Windows" },
  { src: "/images/image_16.jpeg", category: "Study Tours & Visits" },
  { src: "/images/image_17.jpeg", category: "Hospital Construction" },
  { src: "/images/image_18.jpeg", category: "Hospital Construction" },
  { src: "/images/image_19.jpeg", category: "Hospital Construction" },
  { src: "/images/image_20.jpeg", category: "Study Tours & Visits" },
  { src: "/images/image_21.jpeg", category: "Study Tours & Visits" },
  { src: "/images/image_22.jpeg", category: "Hospital Construction" },
  { src: "/images/image_23.jpeg", category: "Hospital Construction" },
  { src: "/images/image_24.jpeg", category: "Hospital Construction" },
  { src: "/images/image_25.jpeg", category: "Healthcare Engineering" },
  { src: "/images/image_26.jpeg", category: "Medical Equipment" },
  { src: "/images/image_27.jpeg", category: "Study Tours & Visits" },
] as const;

export const processPhases = [
  {
    phase: "01",
    title: "Discovery & Feasibility",
    description: "Clinical workflow zoning, site evaluation, soil testing, and budget assessment, ensuring project feasibility before breaking ground.",
    icon: "Search",
  },
  {
    phase: "02",
    title: "Design & Engineering",
    description: "Clinical space planning, infection control layouts, HVAC filtration (HEPA) schematics, and BIM modeling.",
    icon: "PenTool",
  },
  {
    phase: "03",
    title: "Procurement & Logistics",
    description: "Sourcing certified medical gas materials, medical equipment supply chain coordination, and clinical engineering logistics.",
    icon: "Truck",
  },
  {
    phase: "04",
    title: "Construction & Execution",
    description: "Cleanroom partitions installation, lead shielding execution, medical gas distribution networks, and structural hospital build-out.",
    icon: "HardHat",
  },
  {
    phase: "05",
    title: "Commissioning & Handover",
    description: "Pressure testing gas systems, HEPA airflow testing, clinical equipment calibration, and final regulatory safety certifications.",
    icon: "CheckCircle2",
  },
] as const;

