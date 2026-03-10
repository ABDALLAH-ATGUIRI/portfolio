import { Check } from "lucide-react";
import React, { useState, useCallback } from "react";

interface ChipProps {
  text: string;
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  copy?: boolean;
}

export const Chip: React.FC<ChipProps> = ({
  text,
  icon,
  title,
  className,
  copy = false,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API not available
    }
  }, [text]);

  const base = className
    || "inline-flex gap-3 items-center font-bold text-sm transition-all duration-300 rounded-full shadow-sm bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700";

  return (
    <span
      onClick={copy ? handleCopy : undefined}
      title={copy ? (copied ? "Copied!" : title) : title}
      className={[
        base,
        copy ? "cursor-pointer" : "",
        copied ? "!border-green-400 !text-green-600 dark:!text-green-400 ring-1 ring-green-400/50" : "",
      ].join(" ")}
    >
      {copied ? <Check size={14} /> : icon && <span className="flex items-center">{icon}</span>}
      <span>{text}</span>
    </span>
  );
};
