import {
  motion,
  MotionProps,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";
import {
  ComponentPropsWithRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { type CVAInputProps, getInputClasses } from "./Input.variants";
import { cn } from "utils/cn";
import getAncestorBackground from "utils/getAncestorBackground";

export type InputProps = ComponentPropsWithRef<"input"> &
  CVAInputProps &
  MotionProps;

type InputMouseEvent = React.MouseEvent<HTMLInputElement, MouseEvent>;

const getBorderColor = (variant: CVAInputProps["variant"]) => {
  if (variant === "dark") {
    return "0, 0, 0";
  }
  return "255, 255, 255";
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      disabled,
      variant,
      style,
      className,
      onMouseEnter,
      onMouseOut,
      onMouseMove,
      ...props
    }: InputProps,
    ref
  ) => {
    const [backgroundColor, setBackgroundColor] = useState(
      "rgb(var(--color-input-default-bg))"
    );

    const inputRef = useRef<HTMLInputElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    const [showGradient, setShowGradient] = useState(false);

    const gradientX = useMotionValue(0);
    const gradientY = useMotionValue(0);

    const mouseXSpring = useSpring(gradientX);
    const mouseYSpring = useSpring(gradientY);

    const borderColor = getBorderColor(variant);
    const borderColorAlpha = useMotionValue(0.5);
    const borderColorAlphaSpring = useSpring(borderColorAlpha);

    const borderFirstStep = useMotionTemplate`rgba(${borderColor}, ${borderColorAlphaSpring})`;
    const borderGradientMotionTemplate = useMotionTemplate`linear-gradient(${backgroundColor}, ${backgroundColor}), radial-gradient(100% 100% at ${mouseXSpring}% ${mouseYSpring}%, ${showGradient ? "rgba(var(--color-green))" : borderFirstStep} 0%, rgba(${borderColor}, ${disabled ? 0.5 : borderColorAlphaSpring}) 100%)`;

    const variantClassNames = getInputClasses({ variant });

    const updateGradientPos = (
      e: React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => {
      const target = inputRef.current;
      if (!target) return;

      const { top, left, width, height } = target.getBoundingClientRect();

      const xPercent = (e.clientX - left) / width;
      const yPercent = (e.clientY - top) / height;

      gradientX.set(xPercent * 100);
      gradientY.set(yPercent * 100);
    };

    const handleMouseEnter = (e: InputMouseEvent) => {
      setShowGradient(true);
      borderFirstStep.set("rgb(var(--color-green))");
      borderColorAlpha.set(0.8);
      onMouseEnter?.(e);
    };

    const handleMouseMove = (e: InputMouseEvent) => {
      updateGradientPos(e);
      onMouseMove?.(e);
    };

    const handleMouseOut = (e: InputMouseEvent) => {
      setShowGradient(false);
      borderColorAlpha.set(0.5);
      onMouseOut?.(e);
    };

    useImperativeHandle(ref, () => inputRef.current!);

    useEffect(() => {
      if (!inputRef.current) return;

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            getAncestorBackground(inputRef.current!).then((background) => {
              console.log(background);
              if (background) setBackgroundColor(background);
            });

            if (observerRef.current) {
              observerRef.current.disconnect();
            }
          }
        },
        {
          threshold: 0,
        }
      );

      if (inputRef.current) {
        observerRef.current.observe(inputRef.current);
      }

      return () => {
        if (observerRef.current && inputRef.current) {
          observerRef.current.unobserve(inputRef.current);
        }
      };
    }, []);

    return (
      <motion.input
        ref={inputRef}
        disabled={disabled}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
        style={{
          border: "0.13rem solid transparent",
          borderRadius: "0.5rem",
          backgroundImage: borderGradientMotionTemplate,
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
          ...style,
        }}
        className={cn(className, variantClassNames)}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
