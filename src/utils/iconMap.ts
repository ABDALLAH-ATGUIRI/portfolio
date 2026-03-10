import type { LucideIcon } from "lucide-react";
import {
  Book,
  Code,
  Compass,
  Gamepad,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  Music,
  Puzzle,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Book,
  Code,
  Compass,
  Gamepad,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  Music,
  Puzzle,
};

export function resolveIcon(name: string): LucideIcon {
  return iconMap[name] ?? Globe;
}
