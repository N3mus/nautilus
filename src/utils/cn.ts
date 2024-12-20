import { cx } from "cva";
import { ClassValue } from "cva/dist/types";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(cx(inputs));
};
