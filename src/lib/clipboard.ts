/** Copies text, rejecting (instead of throwing) where the Clipboard API is unavailable, e.g. on plain http. */
export function copyText(text: string): Promise<void> {
  if (typeof navigator === "undefined" || !navigator.clipboard) {
    return Promise.reject(new Error("Clipboard unavailable"));
  }
  return navigator.clipboard.writeText(text);
}
