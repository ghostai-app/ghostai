import React, { PropsWithChildren } from "react";
import { cn } from "@/lib";

interface Props {
  className?: string;
}

export const Card = ({ className, children }: PropsWithChildren<Props>) => {
  return (
    <div
      className={cn(
        "px-3.5 py-3 bg-secondary border border-white/5 rounded-full shadow-outline",
        className
      )}
    >
      {children}
    </div>
  );
};
