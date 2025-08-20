import React, { PropsWithChildren } from "react";
import { cn } from "@/lib";

interface Props {
  className?: string;
}

export const Card: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn("bg-dark border border-border p-1 rounded-sm", className)}
    >
      {children}
    </div>
  );
};
