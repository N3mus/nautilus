import { cva, type VariantProps } from "cva";

export const getButtonClasses = cva(
  "rounded-lg font-semibold text-xl leading-[25.2px] tracking-[0.2px] group transition-all",
  {
    variants: {
      variant: {
        cta: "",
        primary: [
          // Default
          "bg-white",
          // Disabled
          "",
        ],
        secondary: "",
        flat: "",
        dangerPrimary: "",
        dangerSecondary: "",
        dangerFlat: "",
        primaryInvert: "",
        secondaryInvert: "",
        flatInvert: "",
      },
      size: {
        small: "px-12 py-3",
        medium: "px-14 py-4",
        large: "px-16 py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export type CVAButtonProps = VariantProps<typeof getButtonClasses>;
