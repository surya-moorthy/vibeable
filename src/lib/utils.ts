import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// provide a custom and safer to add tailwind classes

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
