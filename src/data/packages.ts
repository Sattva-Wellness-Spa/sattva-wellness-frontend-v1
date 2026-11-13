export interface PackageRow {
  therapy: string;
  sessions: number;
  duration: string;
}

export interface WellnessPackage {
  code: string;
  name: string;
  price: string;
  /** Amount after "You save " */
  save: string;
  rows: readonly PackageRow[];
  total: string;
  validity: string;
  actual: string;
  /** Gold border */
  featured?: boolean;
  /** Value pre-selected in the booking form's Therapy select */
  enquiry: string;
}

export const PACKAGES: readonly WellnessPackage[] = [
  {
    code: "PKG 01",
    name: "Essential Wellness",
    price: "₹8,000",
    save: "₹13,300",
    rows: [
      { therapy: "Basic Massage", sessions: 5, duration: "45 min" },
      { therapy: "Deep Tissue Massage", sessions: 2, duration: "60 min" },
      { therapy: "Thai / Head & Shoulder", sessions: 1, duration: "45 min" },
    ],
    total: "8 sessions",
    validity: "1 year",
    actual: "₹21,300",
    enquiry: "Essential Wellness package",
  },
  {
    code: "PKG 02",
    name: "Premium Indulgence",
    price: "₹12,000",
    save: "₹31,000",
    rows: [
      { therapy: "Basic Massage", sessions: 10, duration: "45 min" },
      { therapy: "Deep Tissue Massage", sessions: 2, duration: "60 min" },
      { therapy: "Jacuzzi", sessions: 2, duration: "As per slot" },
      { therapy: "Couple Massage", sessions: 1, duration: "60 min" },
    ],
    total: "15 sessions",
    validity: "1 year",
    actual: "₹43,000",
    featured: true,
    enquiry: "Premium Indulgence package",
  },
  {
    code: "PKG 03",
    name: "Friends & Family",
    price: "₹20,000",
    save: "₹50,000+",
    rows: [
      { therapy: "Normal Massage", sessions: 25, duration: "45 min" },
      { therapy: "Jacuzzi", sessions: 5, duration: "As per slot" },
      { therapy: "Deep Tissue Massage", sessions: 2, duration: "60 min" },
      { therapy: "Couple Massage", sessions: 2, duration: "60 min" },
      { therapy: "Head & Shoulder", sessions: 1, duration: "45 min" },
    ],
    total: "35 sessions · up to 4–5 people",
    validity: "Lifetime · shareable in your group",
    actual: "₹70,000+",
    enquiry: "Friends & Family package",
  },
];

export const PACKAGES_NOTE =
  "All packages are non-refundable. Sessions are non-transferable unless noted.";
