import { ElementType } from "react";
import { PolymorphicPropsWithRef } from "types/polymophic-props";
import {
  CVATypographyProps,
  getTypographyClasses,
} from "./Typography.variants";
import { cn } from "utils/cn";

export type TypographyProps<C extends ElementType> = PolymorphicPropsWithRef<
  C,
  CVATypographyProps
>;

const getDefaultElement = (
  variant: CVATypographyProps["variant"]
): ElementType => {
  switch (variant) {
    case "display":
    case "display2":
    case "heading":
      return "h1";
    case "heading2":
      return "h2";
    case "heading3":
      return "h3";
    case "heading4":
      return "h4";
    case "subheading":
      return "h5";
    case "subheading2":
      return "h6";
    default:
      return "p";
  }
};

const getDefaultWeight = (variant: CVATypographyProps["variant"]) => {
  switch (variant) {
    case "subheading":
    case "subheading2":
    case "paragraph":
    case "paragraph2":
    case "paragraph3":
      return 400;
    default:
      return 600;
  }
};

export default function Typography<C extends ElementType>({
  as,
  variant,
  weight,
  className,
  ...props
}: TypographyProps<C>) {
  const Component = as || getDefaultElement(variant);
  const fontWeight = weight || getDefaultWeight(variant);
  const variantClassNames = getTypographyClasses({
    variant,
    weight: fontWeight,
  });

  return <Component className={cn(className, variantClassNames)} {...props} />;
}
