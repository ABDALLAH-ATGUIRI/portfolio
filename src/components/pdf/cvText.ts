/**
 * Prefer a short CV-only string; fall back to the main key.
 * Keeps website copy long while CV stays one page.
 */
export function cvText(
  t: (key: string) => string,
  shortKey: string,
  fallbackKey: string
): string {
  const short = t(shortKey);
  if (short && short !== shortKey) return short;
  return t(fallbackKey);
}
