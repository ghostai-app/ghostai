import React, { PropsWithChildren } from "react";
import { cn } from "@/lib";

interface Props {
  className?: string;
}

export const Container = ({
  className,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div className={cn("w-full px-[var(--horizontal-padding)]", className)}>
      {children}
    </div>
  );
};
