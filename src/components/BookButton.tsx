"use client";

import type { ReactNode } from "react";
import { useBranch } from "@/context/BranchContext";

interface BookButtonProps {
  /** Value to pre-select in the booking form's Therapy select */
  item: string;
  className: string;
  /** Adds the reference's data-book attribute (couples and packages buttons) */
  dataBook?: boolean;
  children: ReactNode;
}

export default function BookButton({ item, className, dataBook, children }: BookButtonProps) {
  const { goToBooking } = useBranch();
  return (
    <button
      type="button"
      className={className}
      data-t={item}
      data-book={dataBook ? "" : undefined}
      onClick={() => goToBooking(item)}
    >
      {children}
    </button>
  );
}
