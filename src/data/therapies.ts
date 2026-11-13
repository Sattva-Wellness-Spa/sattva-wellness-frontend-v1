export interface Therapy {
  name: string;
  /** Element label shown top-right of the card */
  element: "Prithvi" | "Jal" | "Agni" | "Vayu" | "Akash";
  description: string;
  price: string;
}

export const THERAPIES: readonly Therapy[] = [
  {
    name: "Sattva Signature Therapy",
    element: "Jal",
    description:
      "Our gentle, classic approach to muscle relaxation with aromatic oils for complete body harmony.",
    price: "₹1,999",
  },
  {
    name: "Thai Massage",
    element: "Vayu",
    description:
      "Traditional stretching and acupressure along the body's energy lines. Releases tension and improves flexibility.",
    price: "₹2,299",
  },
  {
    name: "Foot Reflexology",
    element: "Prithvi",
    description:
      "Targeted pressure on reflex points of the feet for full-body wellness. Includes a lower-leg massage.",
    price: "₹1,999",
  },
  {
    name: "Head & Shoulder Massage",
    element: "Akash",
    description:
      "Focused relief for the head, neck and shoulders. Ideal for tension, stiffness and headaches.",
    price: "₹2,999",
  },
  {
    name: "Balinese Massage",
    element: "Jal",
    description:
      "Deep, smooth Balinese strokes for whole-body renewal and profound relaxation.",
    price: "₹3,499",
  },
  {
    name: "Deep Tissue Massage",
    element: "Agni",
    description:
      "Works the deep muscle layers and fascia to release chronic tension, knots and imbalances.",
    price: "₹3,999",
  },
];
