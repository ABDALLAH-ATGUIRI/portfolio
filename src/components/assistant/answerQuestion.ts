export interface KnowledgeEntry {
  id: string;
  triggers: string[];
  answer: string;
}

const GREETING_PATTERN =
  /^(hi|hello|hey|yo|salam|salaam|bonjour|salut|bonsoir|marhaba|ahlan|مرحبا|اهلا|أهلا|السلام)[\s!.?]*$/u;

const MIN_MATCH_SCORE = 3;

export function normalizeQuestion(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^\p{L}\p{N}\s@.+]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreTrigger(question: string, trigger: string): number {
  const normalizedTrigger = normalizeQuestion(trigger);
  if (!normalizedTrigger) return 0;
  if (question.includes(normalizedTrigger)) {
    return normalizedTrigger.includes(" ") ? 6 : 3;
  }

  const tokens = normalizedTrigger.split(" ").filter((token) => token.length > 2);
  if (tokens.length > 1 && tokens.every((token) => question.includes(token))) {
    return 4;
  }
  return 0;
}

function scoreEntry(question: string, entry: KnowledgeEntry): number {
  return entry.triggers.reduce(
    (total, trigger) => total + scoreTrigger(question, trigger),
    0
  );
}

export function answerQuestion(
  rawQuestion: string,
  entries: KnowledgeEntry[],
  fallback: string
): string {
  const question = normalizeQuestion(rawQuestion);
  if (!question) return fallback;

  if (GREETING_PATTERN.test(rawQuestion.trim().toLowerCase())) {
    const greeting = entries.find((entry) => entry.id === "greeting");
    return greeting?.answer ?? fallback;
  }

  const ranked = entries
    .filter((entry) => entry.id !== "greeting")
    .map((entry) => ({ entry, score: scoreEntry(question, entry) }))
    .filter((item) => item.score >= MIN_MATCH_SCORE)
    .sort((left, right) => right.score - left.score);

  const best = ranked[0];
  if (!best) return fallback;

  const runnerUp = ranked[1];
  const canCombine =
    runnerUp &&
    best.score - runnerUp.score <= 1 &&
    runnerUp.entry.id !== best.entry.id;

  if (!canCombine) return best.entry.answer;
  return `${best.entry.answer}\n\n${runnerUp.entry.answer}`;
}
