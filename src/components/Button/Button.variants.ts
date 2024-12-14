import { cva, type VariantProps } from "cva";

export const getButtonClasses = cva(
  "rounded-lg font-semibold text-xl leading-[25.2px] tracking-[0.2px] group transition-all",
  {
    variants: {
      variant: {
        cta: [
          "bg-radial-top text-white",
          "disabled:bg-radial-top-disabled disabled:text-black",
        ],
        primary: ["bg-white", "disabled:bg-white/25"],
        secondary: ["text-white"],
        flat: "",
        dangerPrimary: "",
        dangerSecondary: "",
        dangerFlat: "",
        primaryInvert: "",
        secondaryInvert: "",
        flatInvert: "",
      },
      size: {
        small: "px-12 py-3 text-xs",
        medium: "px-14 py-4 text-base",
        large: "px-16 py-4 text-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export type CVAButtonProps = VariantProps<typeof getButtonClasses>;
