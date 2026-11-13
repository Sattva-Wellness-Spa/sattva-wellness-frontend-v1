export interface PanchaElement {
  devanagari: string;
  name: string;
  text: string;
}

/** Pancha Mahabhuta, in reference order. */
export const ELEMENTS: readonly PanchaElement[] = [
  {
    devanagari: "पृथ्वी",
    name: "Prithvi · Earth",
    text: "Grounding, structure, steadiness in the muscles and joints.",
  },
  {
    devanagari: "जल",
    name: "Jal · Water",
    text: "Fluidity and circulation, carried by warm oil.",
  },
  {
    devanagari: "अग्नि",
    name: "Agni · Fire",
    text: "Warmth that softens deep tension. Deep work for knotted muscles.",
  },
  {
    devanagari: "वायु",
    name: "Vayu · Air",
    text: "Breath and movement, eased by slow rhythmic strokes.",
  },
  {
    devanagari: "आकाश",
    name: "Akash · Space",
    text: "The quiet you leave with. Room to think again.",
  },
];
