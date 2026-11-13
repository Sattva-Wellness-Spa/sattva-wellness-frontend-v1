"use client";

import { useBranch } from "@/context/BranchContext";

/** Inline text from the currently selected branch, for use inside server components. */
export default function BranchText({ field }: { field: "short" | "name" | "phone" }) {
  const { branch } = useBranch();
  return <>{branch[field]}</>;
}
