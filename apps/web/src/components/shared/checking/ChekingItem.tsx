import React from "react";
import { cn } from "@/lib/utils";
import CheckIcon from "@/_assets/icons/round-check.svg?react";
import { Progress } from "@/components";

interface Props {
  className?: string;
  label: string;
  progress: number;
}

export const CheckingItem: React.FC<Props> = ({
  className,
  label,
  progress,
}) => {
  return (
    <div className={cn(className)}>
      <div className="w-full flex items-center justify-between">
        <p
          className={cn(
            "text-base transition-all duration-300",
            progress >= 100 && "text-accent"
          )}
        >
          {label}
        </p>

        <CheckIcon
          className={cn(
            "w-5 h-5 transition-all duration-300 fill-[#3E3E3E]",
            progress >= 100 && "fill-accent"
          )}
        />
      </div>

      <Progress value={progress} className="mt-2.5 h-6" />
    </div>
  );
};
