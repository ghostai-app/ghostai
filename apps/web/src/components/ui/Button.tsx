"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-base font-medium leading-none flex-shrink-0 gap-1",
  {
    variants: {
      variant: {
        default:
          "border border-white/5 bg-[linear-gradient(304deg,_#FFE7A7_43.81%,_#FFAE2B_90%)] !text-black !fill-black",
        accent: "bg-accent !text-black !fill-black",
        accentOutline:
          "bg-transparent border border-accent !text-white !fill-white",
        grayOutline:
          "bg-transparent border border-gray !text-white !fill-white disabled:bg-gray disabled:border-gray disabled:!text-muted",
      },
      size: {
        default: "h-11 rounded-full w-full font-semibold text-sm",
        sm: "px-2.5 py-1 rounded-full text-sm",
        lg: "h-[52px] rounded-full w-full font-semibold text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const spinnerVariants = cva("rounded-full animate-spin border-2", {
  variants: {
    size: {
      default: "w-5 h-5",
      sm: "w-3 h-3",
      lg: "w-5 h-5",
    },
    variant: {
      default: "border-white border-t-transparent",
      accent: "border-white border-t-transparent",
      accentOutline: "border-white border-t-transparent",
      grayOutline: "border-white border-t-transparent",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? (
          <div className={cn(spinnerVariants({ variant, size }))} />
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
