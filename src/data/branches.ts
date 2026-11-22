export type BranchKey = "83" | "64";

export const BRANCH_KEYS: readonly BranchKey[] = ["83", "64"];

export function isBranchKey(value: unknown): value is BranchKey {
  return value === "83" || value === "64";
}

export function otherBranch(key: BranchKey): BranchKey {
  return key === "83" ? "64" : "83";
}

/** tel: link that opens the phone dialer with this branch's number. */
export function telHref(branch: Branch): string {
  return `tel:+91${branch.raw}`;
}

/** wa.me link to this branch with the message already typed (the visitor still presses send). */
export function whatsappHref(branch: Branch, message: string): string {
  return `https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(message)}`;
}

export interface Branch {
  key: BranchKey;
  /** "Sector 83" */
  short: string;
  name: string;
  /** Pill on the branch card */
  tag: string;
  /** Shown on two lines (cards and the booking panel) */
  addressLines: readonly [string, string];
  /** Shortened address used in the footer */
  footerAddress: string;
  /** schema.org PostalAddress.streetAddress */
  streetAddress: string;
  postalCode: string;
  /** Display format */
  phone: string;
  /** 10 digits, used by the copy buttons */
  raw: string;
  /** Country code + number, used for wa.me links */
  whatsapp: string;
  map: string;
}

export const BRANCHES: Record<BranchKey, Branch> = {
  "83": {
    key: "83",
    short: "Sector 83",
    name: "Sattva Wellness Spa, Sector 83",
    tag: "Sector 83 · New Gurgaon",
    addressLines: [
      "Vlante D Block Market, SCO 18 & 19",
      "Sector 83, Gurugram, Haryana 122004",
    ],
    footerAddress: "Vlante D Block Market, SCO 18 & 19",
    streetAddress: "Vlante D Block Market, SCO 18 & 19, Sector 83",
    postalCode: "122004",
    phone: "95609 60070",
    raw: "9560960070",
    whatsapp: "919560960070",
    map: "https://www.google.com/maps/search/?api=1&query=Sattva+Wellness+Spa+Vlante+D+Block+Market+Sector+83+Gurugram",
  },
  "64": {
    key: "64",
    short: "Sector 64",
    name: "Sattva Wellness Spa, Sector 64",
    tag: "Sector 64 · Golf Course Ext. Road",
    addressLines: [
      "R R Market, opposite M3M Urbana Premium",
      "Sector 64, Gurugram, Haryana 122101",
    ],
    footerAddress: "R R Market, opp. M3M Urbana Premium",
    streetAddress: "R R Market, opposite M3M Urbana Premium, Sector 64",
    postalCode: "122101",
    phone: "95405 00066",
    raw: "9540500066",
    whatsapp: "919540500066",
    map: "https://www.google.com/maps/search/?api=1&query=Sattva+Wellness+Spa+R+R+Market+opposite+M3M+Urbana+Premium+Sector+64+Gurugram",
  },
};
