import { ElementType } from "react";
import { PolymorphicPropsWithRef } from "types/polymophic-props";

export type ButtonProps<C extends ElementType> = PolymorphicPropsWithRef<
  C,
  {
    something?: string;
  }
>;

export function Button<C extends ElementType = "button">({
  as,
  ...props
}: ButtonProps<C>) {
  const Component = as || "button";

  return <Component {...props} />;
}

export default Button;

<Button as="a" href=""></Button>;
