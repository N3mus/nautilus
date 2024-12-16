import { cva, VariantProps } from "cva";

export const getTypographyClasses = cva("", {
  variants: {
    variant: {
      display: "text-[96px] leading-[70px]",
      display2: "text-[80px] leading-[58px]",
      heading: "text-[56px] leading-[41px]",
      heading2: "text-[48px] leading-[35px]",
      heading3: "text-[36px] leading-[26px]",
      heading4: "text-[32px] leading-[23px]",
      subheading: "text-[24px] leading-[18px]",
      subheading2: "text-[20px] leading-[15px]",
      paragraph: "text-[16px] leading-[12px]",
      paragraph2: "text-[12px] leading-[9px]",
      paragraph3: "text-[8px] leading-[6px]",
    },
    weight: {
      100: "font-thin",
      200: "font-extralight",
      300: "font-light",
      400: "font-normal",
      500: "font-medium",
      600: "font-semibold",
      700: "font-bold",
      800: "font-extrabold",
      900: "font-black",
    },
  },
  defaultVariants: {
    variant: "paragraph",
    weight: 400,
  },
});

export type CVATypographyProps = VariantProps<typeof getTypographyClasses>;
