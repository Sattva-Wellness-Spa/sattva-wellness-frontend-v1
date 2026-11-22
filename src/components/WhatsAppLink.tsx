"use client";

import type { ReactNode } from "react";
import { useBranch } from "@/context/BranchContext";
import { whatsappHref } from "@/data/branches";

interface WhatsAppLinkProps {
  /** Therapy, ritual or package named in the pre-filled message */
  item: string;
  className: string;
  children: ReactNode;
}

/** Opens WhatsApp with the branch selected in the header, asking to book this item. */
export default function WhatsAppLink({ item, className, children }: WhatsAppLinkProps) {
  const { branch } = useBranch();
  return (
    <a
      className={className}
      href={whatsappHref(branch, `Hello Sattva, I'd like to book ${item} at ${branch.short}.`)}
      target="_blank"
      rel="noopener"
      title={`WhatsApp ${branch.short}: ${branch.phone} (opens in a new tab)`}
    >
      {children}
    </a>
  );
}
