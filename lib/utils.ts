import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toPascalCase(str : string) {
  return str.replace(/(\w)(\w*)/g, function(_, firstChar, remainingChars) {
    return firstChar.toUpperCase() + remainingChars.toLowerCase();
  });
}
