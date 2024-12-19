import { cva, VariantProps } from "cva";

export const getInputClasses = cva(
  "rounded-xl px-6 py-3 text-xs font-normal bg-transparent focus:outline focus:outline-brand-green",
  {
    variants: {
      variant: {
        light: [
          "text-white placeholder:text-white/50",
          "disabled:text-white/50 disabled:placeholder:text-white/50",
        ],
        dark: "disabled:text-black/50 disabled:placeholder:text-black/50",
      },
    },
    defaultVariants: {
      variant: "light",
    },
  }
);

export type CVAInputProps = VariantProps<typeof getInputClasses>;
