import { cva } from "cva";

export const getButtonClasses = cva("rounded-lg", {
  variants: {
    variant: {
      cta: "",
      primary: "",
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
      small: "",
      medium: "",
      large: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});
