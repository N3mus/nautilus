import { ArgTypes } from "@storybook/react/*";

const buttonArgTypes = {
  children: {
    description: "What gets rendered inside the button",
  },
  variant: {
    description:
      "Choose one of the many available button variants (thanks Lance)",
    control: {
      type: "select",
    },
    options: [
      "cta",
      "primary",
      "secondary",
      "flat",
      "dangerPrimary",
      "dangerSecondary",
      "dangerFlat",
      "primaryInvert",
      "secondaryInvert",
      "flatInvert",
    ],
  },
  size: {
    description: "The size of the thing",
    control: {
      type: "select",
    },
    options: ["small", "medium", "large"],
  },
} as ArgTypes;

export default buttonArgTypes;
