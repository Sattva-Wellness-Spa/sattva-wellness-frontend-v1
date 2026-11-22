"use client";

import type { ReactNode } from "react";
import { useBranch } from "@/context/BranchContext";
import { telHref } from "@/data/branches";

interface BookButtonProps {
  /** Therapy, ritual or package this button is for (kept as the reference's data-t attribute) */
  item: string;
  className: string;
  /** Adds the reference's data-book attribute (couples and packages buttons) */
  dataBook?: boolean;
  children: ReactNode;
}

/** Calls the branch selected in the header, so the visitor books by phone with that sector. */
export default function BookButton({ item, className, dataBook, children }: BookButtonProps) {
  const { branch } = useBranch();
  return (
    <a
      className={className}
      href={telHref(branch)}
      title={`Call ${branch.short}: ${branch.phone}`}
      data-t={item}
      data-book={dataBook ? "" : undefined}
    >
      {children}
    </a>
  );
}
