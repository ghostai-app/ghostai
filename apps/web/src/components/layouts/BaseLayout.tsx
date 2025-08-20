import React, { PropsWithChildren, useEffect } from "react";
import { cn } from "@/lib";

interface Props {
  className?: string;
  withPadding?: boolean;
  background?: string;
}

export const BaseLayout = ({
  className,
  children,
  withPadding = true,
  background,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={cn(
        "pt-[var(--top-padding)] mx-auto w-full max-w-[700px] h-screen relative overflow-y-auto overflow-x-hidden",
        withPadding && "pb-[100px]",
        className
      )}
    >
      {children}
    </div>
  );
};
