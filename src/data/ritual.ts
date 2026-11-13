export interface RitualStep {
  title: string;
  text: string;
}

export const RITUAL_STEPS: readonly RitualStep[] = [
  {
    title: "Arrive early",
    text: "Come ten minutes before your slot to settle in. A welcome drink is ready.",
  },
  {
    title: "Consultation",
    text: "Tell your therapist about pressure, problem areas, allergies or pregnancy.",
  },
  {
    title: "Choose your oil",
    text: "Pick the blend whose scent feels right today.",
  },
  {
    title: "Your therapy",
    text: "Private room, fresh linen, modest towel draping throughout.",
  },
  {
    title: "Rest & tea",
    text: "Warm herbal tea and a few quiet minutes before you head back out.",
  },
];
