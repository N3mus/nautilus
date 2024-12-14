import { ElementType, useCallback, useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";
import type { PolymorphicPropsWithRef } from "types/polymophic-props";

import { getButtonClasses, type CVAButtonProps } from "./Button.variants";

import { cn } from "utils/cn";

const GRADIENT_START = -150;
const GRADIENT_END = 300;

const whileVariants = {
  hover: {
    boxShadow: "0 0 16px 0 var(--color-blue)",
  },
  tap: {
    boxShadow: "0px 8px 8px 0px #00000040 inset",
  },
};

const variantsWithGradientText = [
  "primary",
  "secondary",
  "primaryInvert",
  "secondaryInvert",
] as const;

const isGradientTextVariant = (
  v: CVAButtonProps["variant"]
): v is (typeof variantsWithGradientText)[number] =>
  typeof v === "string" &&
  (variantsWithGradientText as ReadonlyArray<string>).includes(v);

const getGradientOutsideColor = (
  v: CVAButtonProps["variant"],
  disabled?: boolean
) => {
  const color = v === "secondary" ? "255, 255, 255" : "0, 0, 0";
  const alpha = disabled ? 0.25 : 1;
  return `rgba(${color}, ${alpha})`;
};

export type ButtonProps<C extends ElementType> = PolymorphicPropsWithRef<
  C,
  CVAButtonProps
>;

export function Button<C extends ElementType = "button">({
  as,
  variant = "primary",
  size = "medium",
  children,
  disabled,
  className,
  style,
  ...props
}: ButtonProps<C>) {
  const [mouseIn, setMouseIn] = useState(false);
  const [mouseOut, setMouseOut] = useState(false);

  const Component = as || "button";
  const MotionComponent = motion<C>(Component);
  const variantClassNames = getButtonClasses({ variant, size });

  const gradientOutsideColor = getGradientOutsideColor(variant, disabled);

  const gradientPosition = useMotionValue(GRADIENT_START);
  const gradientPositionSpring = useSpring(gradientPosition);
  const gradientMotionTemplate = useMotionTemplate`radial-gradient(100% 100% at 50% ${gradientPositionSpring}%, var(--color-green) 0%, var(--color-blue) 100%, ${gradientOutsideColor} 150%)`;
  const borderGradientMotionTemplate = useMotionTemplate`linear-gradient(var(--color-secondary-border-bg), var(--color-secondary-border-bg)), radial-gradient(100% 100% at 50% ${gradientPositionSpring}%, var(--color-green) 0%, var(--color-blue) 100%, ${gradientOutsideColor} 150%)`;

  useEffect(() => {
    if (disabled) {
      return;
    }

    if (mouseIn) {
      gradientPosition.set(0);
    }

    if (mouseOut) {
      gradientPosition.set(GRADIENT_END);
    }
  }, [mouseIn, mouseOut, gradientPosition, disabled]);

  const getBorderStyle = useCallback(() => {
    if (variant !== "secondary") return undefined;
    if (disabled) {
      return {
        border: "0.13rem solid rgba(255, 255, 255, 0.25)",
      };
    }
    return {
      border: "0.13rem solid transparent",
      borderRadius: "0.5rem",
      backgroundImage: borderGradientMotionTemplate,
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",
    };
  }, [borderGradientMotionTemplate]);

  return (
    <MotionComponent
      disabled={disabled}
      transition={{
        type: "tween",
        duration: 0.15,
      }}
      whileHover={disabled ? undefined : whileVariants.hover}
      whileTap={disabled ? undefined : whileVariants.tap}
      onMouseEnter={() => {
        setMouseIn(true);
        setMouseOut(false);
        gradientPositionSpring.jump(GRADIENT_START);
      }}
      onMouseLeave={() => {
        setMouseOut(true);
        setMouseIn(false);
      }}
      className={cn(className, variantClassNames)}
      style={{
        ...getBorderStyle(),
        ...style,
      }}
      {...props}
    >
      {typeof children === "string" && isGradientTextVariant(variant) ? (
        <motion.span
          style={{ backgroundImage: gradientMotionTemplate }}
          className="bg-clip-text text-transparent"
        >
          {children}
        </motion.span>
      ) : (
        children
      )}
    </MotionComponent>
  );
}

export default Button;
