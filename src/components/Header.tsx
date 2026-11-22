"use client";

import type { KeyboardEvent } from "react";
import { useBranch } from "@/context/BranchContext";
import { BRANCHES, BRANCH_KEYS, telHref, type BranchKey } from "@/data/branches";
import { headerNav } from "@/data/site";

export default function Header() {
  const { branchKey, branch, setBranch } = useBranch();

  // Radiogroup keyboard support: arrows move and select, Home/End jump to first/last.
  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, key: BranchKey) {
    const i = BRANCH_KEYS.indexOf(key);
    const n = BRANCH_KEYS.length;
    let next: BranchKey | undefined;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = BRANCH_KEYS[(i + 1) % n];
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = BRANCH_KEYS[(i - 1 + n) % n];
    else if (e.key === "Home") next = BRANCH_KEYS[0];
    else if (e.key === "End") next = BRANCH_KEYS[n - 1];
    if (!next) return;
    e.preventDefault();
    setBranch(next);
    e.currentTarget.parentElement
      ?.querySelector<HTMLButtonElement>(`[data-set="${next}"]`)
      ?.focus();
  }

  return (
    <header className="band">
      <div className="wrap nav">
        <a className="brand" href="#top">
          <b>Sattva</b>
          <span>सत्त्व</span>
        </a>
        <ul>
          {headerNav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-r">
          <div className="switch" role="radiogroup" aria-label="Choose your branch">
            {BRANCH_KEYS.map((key) => (
              <button
                key={key}
                type="button"
                role="radio"
                data-set={key}
                aria-checked={branchKey === key}
                tabIndex={branchKey === key ? 0 : -1}
                onClick={() => setBranch(key)}
                onKeyDown={(e) => onKeyDown(e, key)}
              >
                {BRANCHES[key].short}
              </button>
            ))}
          </div>
          <a
            className="btn btn-primary hide-sm"
            href={telHref(branch)}
            title={`Call ${branch.short}: ${branch.phone}`}
          >
            Book
          </a>
        </div>
      </div>
    </header>
  );
}
