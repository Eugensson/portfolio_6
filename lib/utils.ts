import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleClickNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();

  const url = new URL(e.currentTarget.href);
  const hash = url.hash;

  const target = document.querySelector(hash);

  if (!target) return;

  target.scrollIntoView({
    behavior: "smooth",
  });
};
