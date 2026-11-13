"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { BOOKING_OPTIONS } from "@/data/booking";
import { BRANCHES, isBranchKey, type Branch, type BranchKey } from "@/data/branches";

/*
 * The selected branch lives in a tiny external store so that:
 *  - the server (static build) always renders Sector 83, and
 *  - the browser switches to the hash / saved branch right after hydration,
 * without a hydration mismatch and without setState inside an effect.
 */

const STORAGE_KEY = "sattva-branch";
const listeners = new Set<() => void>();
let current: BranchKey = "83";
let started = false;

function save(key: BranchKey) {
  try {
    localStorage.setItem(STORAGE_KEY, key);
  } catch {
    // Storage blocked (private mode etc.): the choice just isn't remembered.
  }
}

function selectBranch(key: BranchKey, persist: boolean) {
  current = key;
  if (persist) save(key);
  listeners.forEach((listener) => listener());
}

/** #sector-83 / #sector-64 select (and save) that branch. Other hashes are ignored. */
function applyHash(): boolean {
  const match = window.location.hash.match(/^#sector-(83|64)$/);
  if (match && isBranchKey(match[1])) {
    selectBranch(match[1], true);
    return true;
  }
  return false;
}

function start() {
  if (started) return;
  started = true;
  if (!applyHash()) {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      // Storage blocked: fall back to the default branch.
    }
    if (isBranchKey(stored)) current = stored;
  }
  window.addEventListener("hashchange", applyHash);
}

function subscribe(listener: () => void) {
  start();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const getSnapshot = (): BranchKey => current;
const getServerSnapshot = (): BranchKey => "83";

interface BranchContextValue {
  branchKey: BranchKey;
  branch: Branch;
  /** Select a branch and remember it. */
  setBranch: (key: BranchKey) => void;
  /** Current value of the booking form's Therapy select. */
  therapy: string;
  setTherapy: (therapy: string) => void;
  /** Optionally pre-select a therapy, smooth-scroll to #book, then focus the name field. */
  goToBooking: (therapy?: string) => void;
}

const BranchContext = createContext<BranchContextValue | null>(null);

export function BranchProvider({ children }: { children: ReactNode }) {
  const branchKey = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [therapy, setTherapy] = useState<string>(BOOKING_OPTIONS[0]);

  const goToBooking = useCallback((item?: string) => {
    if (item) setTherapy(item);
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("f-name")?.focus(), 500);
  }, []);

  const value = useMemo<BranchContextValue>(
    () => ({
      branchKey,
      branch: BRANCHES[branchKey],
      setBranch: (key) => selectBranch(key, true),
      therapy,
      setTherapy,
      goToBooking,
    }),
    [branchKey, therapy, goToBooking],
  );

  return <BranchContext.Provider value={value}>{children}</BranchContext.Provider>;
}

export function useBranch(): BranchContextValue {
  const ctx = useContext(BranchContext);
  if (!ctx) throw new Error("useBranch must be used inside <BranchProvider>");
  return ctx;
}
