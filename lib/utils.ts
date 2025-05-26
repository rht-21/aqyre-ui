import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getNextObject(
  input: string,
  data: { href: string; label: string }[]
): { href: string; label: string } | null {
  const index = data.findIndex((item) => item.href.includes(input));

  if (index !== -1 && index + 1 < data.length) {
    return data[index + 1];
  }

  return null;
}
