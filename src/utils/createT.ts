/**
 * Build a nested `t(key)` from a translations object.
 * Used when generating CVs in a different language than the UI (e.g. AR UI → EN PDF).
 */
type NestedRecord = { [key: string]: string | NestedRecord };

export function createT(translations: NestedRecord) {
  return (key: string): string => {
    const result = key
      .split(".")
      .reduce<NestedRecord | string | undefined>(
        (obj, k) =>
          obj && typeof obj === "object" ? (obj as NestedRecord)[k] : undefined,
        translations
      );
    return typeof result === "string" ? result : key;
  };
}
