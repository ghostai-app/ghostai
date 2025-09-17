import React, { PropsWithChildren } from "react";
import { cn } from "@/lib";
import { ButtonProps, ButtonWithVibration } from "../ui";

interface Props extends ButtonProps {
  className?: string;
  onClick: () => void;
}

export const BottomFixedButton = ({
  className,
  onClick,
  children,
  disabled,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={cn(
        "w-70 bottom-[120px] left-1/2 -translate-x-1/2 fixed",
        className
      )}
    >
      <ButtonWithVibration
        variant={"default"}
        size={"default"}
        onClick={onClick}
        className="w-full"
        disabled={disabled}
      >
        {children}
      </ButtonWithVibration>
    </div>
  );
};
