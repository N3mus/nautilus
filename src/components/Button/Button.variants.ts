import { cva, type VariantProps } from "cva";

export const getButtonClasses = cva(
  "rounded-lg font-semibold text-xl leading-[25.2px] tracking-[0.2px] group transition-all",
  {
    variants: {
      variant: {
        cta: "bg-radial-top text-white disabled:bg-radial-top-disabled disabled:text-black",
        primary: "bg-white disabled:bg-white/25",
        secondary: "text-white",
        flat: "bg-transparent border-transparent border-b-2 hover:[&:not(:disabled)]:border-black disabled:text-black/25",
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
    compoundVariants: [
      {
        variant: ["flat", "dangerFlat", "flatInvert"],
        size: "small",
        className: "px-2 py-2 text-base rounded-none leading-[0.5]",
      },
      {
        variant: ["flat", "dangerFlat", "flatInvert"],
        size: "medium",
        className: "px-2 py-2 text-2xl rounded-none leading-4",
      },
      {
        variant: ["flat", "dangerFlat", "flatInvert"],
        size: "large",
        className: "px-2 py-2 text-3.5xl rounded-none leading-6",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export type CVAButtonProps = VariantProps<typeof getButtonClasses>;
