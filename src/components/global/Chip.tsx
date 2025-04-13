import React from "react";

const Chip: React.FC<{
  text: string;
  className?: string;
  icon?: React.ReactNode;
}> = ({ text, icon, className = null }) => {
  return (
    <span
      className={[
        "inline-flex gap-2 items-center cursor-pointer font-medium p-1",
        className ??
          `rounded-full font-medium shadow-sm text-xs bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700`,
      ].join(" ")}
    >
      {icon && <span>{icon}</span>}
      {text}
    </span>
  );
};
export default Chip;
