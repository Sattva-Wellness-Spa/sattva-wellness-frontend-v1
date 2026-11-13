import { COUPLES } from "./couples";
import { PACKAGES } from "./packages";
import { THERAPIES } from "./therapies";

/** Therapy select options, in reference order. */
export const BOOKING_OPTIONS: readonly string[] = [
  ...THERAPIES.map((t) => t.name),
  ...COUPLES.map((c) => c.name),
  ...PACKAGES.map((p) => p.enquiry),
  "Not sure, please advise",
];

/** 9:00 AM to 8:00 PM in 30-minute steps. */
export const TIME_SLOTS: readonly string[] = (() => {
  const slots: string[] = [];
  for (let h = 9; h <= 20; h++) {
    for (const m of [0, 30]) {
      if (h === 20 && m) continue;
      const ap = h < 12 ? "AM" : "PM";
      const hh = ((h + 11) % 12) + 1;
      slots.push(`${hh}:${m ? "30" : "00"} ${ap}`);
    }
  }
  return slots;
})();

/** Index 16 = 5:00 PM, as in the reference. */
export const DEFAULT_TIME_SLOT = TIME_SLOTS[16];

export const DURATIONS: readonly { value: string; label: string }[] = [
  { value: "", label: "As per therapy" },
  { value: "45", label: "45 min" },
  { value: "60", label: "60 min" },
  { value: "90", label: "90 min" },
];
