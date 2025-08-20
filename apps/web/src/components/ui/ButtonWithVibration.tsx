"use client";

import React, { MouseEvent, PropsWithChildren } from "react";
import { cn } from "@/lib";
import { Button, ButtonProps } from "@/components";
import {
  hapticFeedbackImpactOccurred,
  ImpactHapticFeedbackStyle,
} from "@telegram-apps/sdk-react";

export interface ButtonWithVibrationProps extends ButtonProps {
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  hapticStyle?: ImpactHapticFeedbackStyle;
}

export const ButtonWithVibration: React.FC<
  PropsWithChildren<ButtonWithVibrationProps>
> = ({ className, children, onClick, hapticStyle = "light", ...props }) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
      hapticFeedbackImpactOccurred(hapticStyle);
    }
  };

  return (
    <Button className={cn(className)} onClick={handleClick} {...props}>
      {children}
    </Button>
  );
};
