export interface CouplesRitual {
  name: string;
  description: string;
  price: string;
  bestseller?: boolean;
}

export const COUPLES: readonly CouplesRitual[] = [
  {
    name: "Celestial Union Ritual",
    description:
      "A side-by-side Sattva Signature Therapy for two, followed by a private aromatic petal bath with rose petals and essential oils.",
    price: "₹5,000",
    bestseller: true,
  },
  {
    name: "Harmony for Two",
    description:
      "Deep Tissue Massage for both guests side by side, followed by a private Jacuzzi soak with ambient lighting and complimentary refreshments.",
    price: "₹4,500",
  },
];
