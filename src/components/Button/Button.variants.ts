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
        primary: "bg-white disabled:bg-white/25",
        secondary: "text-white",
        flat: [
          "relative bg-transparent",
          "disabled:text-black/25",
          "hover:[&:not(:disabled)]:border-black",
          "after:content-[''] after:absolute after:bottom-0 after:left-0",
          "after:bg-black after:h-0.5 after:w-0 after:will-change-[width]",
          "hover:[&:not(:disabled)]:after:w-full after:transition-all",
        ],
        dangerPrimary: [
          "bg-brand-red text-white transition-shadow",
          "disabled:bg-[rgba(var(--color-red),0.25)] disabled:text-black",
          "hover:[&:not(:disabled)]:shadow-button-dark-hover",
          "active:[&:not(:disabled)]:shadow-button-dark-active",
        ],
        dangerSecondary: [
          "border-2 border-brand-red text-brand-red",
          "hover:[&:not(:disabled)]:bg-white/25 hover:[&:not(:disabled)]:shadow-button-dark-hover",
          "active:[&:not(:disabled)]:shadow-button-dark-active",
          "disabled:border-[rgba(var(--color-red),0.25)] disabled:text-[rgba(var(--color-red),0.25)]",
        ],
        dangerFlat: [
          "text-brand-red bg-transparent relative",
          "disabled:text-[rgba(var(--color-red),0.25)]",
          "after:content-[''] after:absolute after:bottom-0 after:left-0",
          "after:bg-brand-red after:h-0.5 after:w-0 after:will-change-[width]",
          "hover:[&:not(:disabled)]:after:w-full after:transition-all",
        ],
        primaryInvert: [
          "bg-black text-white transition-all",
          "disabled:bg-black/25 disabled:text-white",
          "hover:[&:not(:disabled)]:shadow-button-dark-hover",
          "active:[&:not(:disabled)]:bg-black/75",
        ],
        secondaryInvert: [
          "text-black",
          "hover:[&:not(:disabled)]:shadow-button-dark-hover",
          "active:[&:not(:disabled)]:shadow-button-dark-active",
        ],
        flatInvert: [
          "text-white bg-transparent relative",
          "disabled:text-white/25",
          "after:content-[''] after:absolute after:bottom-0 after:left-0",
          "after:bg-white after:h-0.5 after:w-0 after:will-change-[width]",
          "hover:[&:not(:disabled)]:after:w-full after:transition-all",
        ],
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
