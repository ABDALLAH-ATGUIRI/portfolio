import { FormEvent, useEffect, useId, useMemo, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { useAssistant } from "@/context/AssistantContext";
import { usePortfolio } from "@/hooks/usePortfolio";
import { useTranslation } from "@/hooks/useTranslation";
import { answerQuestion } from "./answerQuestion";
import { buildKnowledge } from "./buildKnowledge";

const MAX_QUESTION_LENGTH = 500;
const URL_PATTERN = /(https?:\/\/[^\s]+|mailto:[^\s]+)/g;

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
}

function MessageBody({ text }: { text: string }) {
  const parts = text.split(URL_PATTERN);
  return (
    <p className="whitespace-pre-wrap text-sm leading-relaxed">
      {parts.map((part, index) =>
        part.startsWith("http://") || part.startsWith("https://") || part.startsWith("mailto:") ? (
          <a
            key={`${part}-${index}`}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 break-all"
          >
            {part}
          </a>
        ) : (
          <span key={`${index}-${part.slice(0, 12)}`}>{part}</span>
        )
      )}
    </p>
  );
}

export function PortfolioAssistant() {
  const { t } = useTranslation();
  const portfolio = usePortfolio();
  const { isOpen, toggleAssistant, closeAssistant } = useAssistant();
  const titleId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const threadRef = useRef<HTMLDivElement>(null);
  const [draft, setDraft] = useState("");
  const greeting = t("assistant.greeting");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "greeting", role: "assistant", text: greeting },
  ]);

  const entries = useMemo(
    () => buildKnowledge(t, portfolio),
    [t, portfolio]
  );

  const suggestions = [
    t("assistant.suggestion_1"),
    t("assistant.suggestion_2"),
    t("assistant.suggestion_3"),
    t("assistant.suggestion_4"),
  ];

  useEffect(() => {
    setMessages((current) => {
      if (current.length !== 1 || current[0]?.id !== "greeting") return current;
      if (current[0].text === greeting) return current;
      return [{ id: "greeting", role: "assistant", text: greeting }];
    });
  }, [greeting]);

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAssistant();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeAssistant]);

  useEffect(() => {
    const thread = threadRef.current;
    if (!thread) return;
    thread.scrollTop = thread.scrollHeight;
  }, [messages, isOpen]);

  const ask = (question: string) => {
    const trimmed = question.trim().slice(0, MAX_QUESTION_LENGTH);
    if (!trimmed) return;
    const reply = answerQuestion(trimmed, entries, t("assistant.fallback"));
    setMessages((current) => [
      ...current,
      { id: crypto.randomUUID(), role: "user", text: trimmed },
      { id: crypto.randomUUID(), role: "assistant", text: reply },
    ]);
    setDraft("");
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    ask(draft);
  };

  const showSuggestions = messages.length === 1;

  return (
    <div className="fixed bottom-5 end-5 z-40 flex flex-col items-end gap-3">
      {isOpen && (
        <section
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
          className="flex w-[min(24rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"
        >
          <header className="flex items-start justify-between gap-3 border-b border-slate-200 px-4 py-3 dark:border-slate-700">
            <div>
              <h2 id={titleId} className="text-sm font-semibold text-slate-900 dark:text-white">
                {t("assistant.title")}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t("assistant.subtitle")}</p>
            </div>
            <button
              type="button"
              onClick={closeAssistant}
              className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label={t("assistant.close")}
            >
              <X size={16} />
            </button>
          </header>

          <div
            ref={threadRef}
            className="flex max-h-[min(24rem,calc(100svh-12rem))] flex-col gap-3 overflow-y-auto px-4 py-4"
            aria-live="polite"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.role === "user"
                    ? "ms-8 rounded-2xl rounded-ee-md bg-slate-900 px-3 py-2 text-white dark:bg-cyan-500 dark:text-slate-950"
                    : "me-6 rounded-2xl rounded-es-md bg-slate-100 px-3 py-2 text-slate-800 dark:bg-slate-800 dark:text-slate-100"
                }
              >
                <MessageBody text={message.text} />
              </div>
            ))}
            {showSuggestions && (
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => ask(suggestion)}
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 hover:border-cyan-400 hover:text-cyan-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-500 dark:hover:text-cyan-300"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={onSubmit} className="flex gap-2 border-t border-slate-200 p-3 dark:border-slate-700">
            <input
              ref={inputRef}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              maxLength={MAX_QUESTION_LENGTH}
              placeholder={t("assistant.placeholder")}
              aria-label={t("assistant.placeholder")}
              className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-1 rounded-xl bg-cyan-600 px-3 py-2 text-sm font-semibold text-white hover:bg-cyan-500 disabled:opacity-40"
              disabled={!draft.trim()}
              aria-label={t("assistant.send")}
            >
              <Send size={16} />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={toggleAssistant}
        aria-expanded={isOpen}
        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
      >
        <MessageCircle size={18} aria-hidden="true" />
        {t("assistant.open")}
      </button>
    </div>
  );
}
