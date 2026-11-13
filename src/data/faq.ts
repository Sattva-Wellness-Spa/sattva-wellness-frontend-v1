export interface FaqItem {
  q: string;
  a: string;
}

/** The first item renders open. */
export const FAQ: readonly FaqItem[] = [
  {
    q: "Which branch should I visit?",
    a: "Whichever is closer. Sector 83 is in Vlante D Block Market, New Gurgaon. Sector 64 is in R R Market, opposite M3M Urbana Premium. Both offer the full Sattva menu at the same prices.",
  },
  {
    q: "Do I need to book in advance?",
    a: "Walk-ins are welcome when a room is free. Evenings and weekends fill quickly, and couple massages and the jacuzzi are best booked ahead. A WhatsApp booking guarantees your slot.",
  },
  {
    q: "How do the packages work?",
    a: "You pay once and use your sessions over the validity period: one year for Essential Wellness and Premium Indulgence, lifetime for Friends & Family, which up to 4–5 people in your group can share. Packages are non-refundable.",
  },
  {
    q: "Can I use my package at both branches?",
    a: "Yes. A package bought at Sector 83 or Sector 64 can be redeemed at either branch. Mix and match visits however suits you.",
  },
  {
    q: "What should I wear?",
    a: "Come as you are. We provide disposable undergarments, a robe and towels, and keep you draped throughout the massage.",
  },
  {
    q: "How do you keep things hygienic?",
    a: "Fresh linen and towels for every guest, sanitised surfaces between sessions, and sealed single-use items wherever possible.",
  },
  {
    q: "Can I buy a session as a gift?",
    a: "Yes. Ask at reception or message us for a gift voucher for any therapy and duration.",
  },
];
