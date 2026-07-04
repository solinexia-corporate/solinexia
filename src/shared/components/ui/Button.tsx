import { motion, type HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import * as React from "react";
import { cn } from "../../lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "glass";
type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends Omit<
  HTMLMotionProps<"button">,
  "className" | "children"
> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  asChild?: boolean;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const variants = {
      primary:
        "bg-gradient-to-r from-primary to-primary/85 text-white hover:from-primary/90 hover:to-primary/70",
      secondary:
        "bg-gradient-to-r from-secondary to-secondary/85 text-white hover:from-secondary/90 hover:to-secondary/70",
      outline:
        "border border-slate-200 dark:border-slate-700 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-900 dark:text-slate-50 hover:border-primary/40 dark:hover:border-primary/40",
      ghost:
        "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-900 dark:text-slate-50",
      glass:
        "bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 text-slate-900 dark:text-white",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-11 px-6 text-sm",
      lg: "h-14 px-8 text-base",
      icon: "h-11 w-11 flex justify-center p-0",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        disabled={isLoading || disabled}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {!isLoading && leftIcon}
        {children as any}
        {!isLoading && rightIcon}
      </motion.button>
    );
  },
);
Button.displayName = "Button";
