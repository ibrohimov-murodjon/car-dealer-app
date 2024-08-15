import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function removeDuplicateValues(arr) {
  const result = [];
  for (const { VehicleTypeName } of arr) {
    if (!result.includes(VehicleTypeName)) {
      result.push(VehicleTypeName);
    }
  }
  return result;
}

export function getYearsNow() {
  const from = 2015;
  const now = new Date().getFullYear();
  const result = [from];
  while (result.at(-1) !== now) {
    result.push(result.at(-1) + 1);
  }
  return result;
}
