import { Check } from "lucide-react";
import React, { useState } from "react";

interface ChipProps {
  text: string;
  className?: string;
  icon?: React.ReactNode;
  copy?: boolean;
}

export const Chip: React.FC<ChipProps> = ({
  text,
  icon,
  className,
  copy = false,
}) => {
  const [copied, setCopied] = useState(false);

  const fallbackCopy = (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed"; // avoid scrolling to bottom
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Fallback: Failed to copy", err);
    }
    document.body.removeChild(textarea);
  };

  const handleCopy = async () => {
    if (navigator?.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    } else {
      fallbackCopy(text);
    }
  };

  const classes = {
    defaultStyles: `inline-flex gap-3 items-center font-bold p-1 text-sm transition-all duration-300 rounded-full shadow-sm bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700`,
    copiedStyles: `!bg-green-500/40 ring-2 ring-green-500 text-white`,
    clickable: copy ? "cursor-pointer" : "",
  };

  return (
    <span
      onClick={copy ? handleCopy : undefined}
      title={copy ? (copied ? "Copied!" : "Click to copy") : undefined}
      className={`${classes.defaultStyles} ${
        copied ? classes.copiedStyles : ""
      } ${classes.clickable} ${className || ""}`}
    >
      {copied ? <Check size={20} /> : icon && <span>{icon}</span>}
      <span>{text}</span>
    </span>
  );
};
