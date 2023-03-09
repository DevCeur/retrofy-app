import cn from "classnames";

import { cva } from "class-variance-authority";
import { useState, useRef, useEffect } from "react";
import { RiLoader4Fill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

import type { ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

const loadingVariants = {
  hidden: { opacity: 0, translateY: -5 },
  active: { opacity: 1, translateY: 0 },
  exitted: { opacity: 0, translateY: 5 },
};

const buttonStyles = cva("base-button", {
  variants: {
    variant: {
      primary: ["bg-brand-500", "text-white", "hover:bg-brand-600"],
      secondary: [
        "bg-white",
        "text-brand-500",
        "border-brand-500",
        "hover:bg-brand-500",
        "hover:text-white",
      ],
    },

    width: {
      default: ["w-auto"],
      full: ["w-full"],
    },

    size: {
      small: ["px-5", "py-2", "text-sm"],
    },
  },

  defaultVariants: {
    variant: "primary",
    width: "default",
  },
});

type ButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles>;

export const Button = ({
  size,
  width,
  variant,
  children,
  isLoading,
  ...buttonProps
}: ButtonProps) => {
  const [baseWidth, setBaseWidth] = useState<number>();

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setBaseWidth(buttonRef.current?.offsetWidth);
  }, []);

  return (
    <button
      ref={buttonRef}
      style={{ width: baseWidth }}
      disabled={isLoading}
      className={cn({
        [buttonStyles({ size, width, variant })]: true,
        "opacity-85": isLoading,
      })}
      {...buttonProps}
    >
      <AnimatePresence initial={false} mode="wait">
        {isLoading ? (
          <motion.span
            key="loader-spinner"
            initial="hidden"
            animate="active"
            exit="exitted"
            variants={loadingVariants}
            transition={{ duration: 0.1 }}
            className="text-xl animate-spin"
          >
            <RiLoader4Fill />
          </motion.span>
        ) : (
          <motion.span
            key="children"
            initial="hidden"
            animate="active"
            exit="exitted"
            variants={loadingVariants}
            transition={{ duration: 0.1 }}
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};
