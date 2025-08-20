import React from "react";
import { cn } from "@/lib";
import { motion } from "framer-motion";
import { hapticFeedbackImpactOccurred } from "@telegram-apps/sdk-react";

interface Props {
  className?: string;
  types: {
    title: string;
    value: string;
  }[];
  currentType: string;
  onChange: (value: string) => void;
}

export const TypeSwitcher = ({
  className,
  types,
  currentType,
  onChange,
}: Props) => {
  const currentIndex = types.findIndex((type) => type.value === currentType);

  const handleChange = (value: string) => {
    onChange(value);
    hapticFeedbackImpactOccurred("light");
  };

  return (
    <div
      className={cn(
        "rounded-full bg-secondary flex items-center w-full h-[50px] relative",
        className
      )}
    >
      {types.map((type, index) => (
        <button
          key={type.value}
          className={cn(
            "cursor-pointer relative w-full h-full flex items-center justify-center z-10 border border-outline shadow-outline",
            index === 0 && "rounded-l-full",
            index === types.length - 1 && "rounded-r-full",
            currentType === type.value &&
              "bg-gradient-to-t from-[#33220B] to-secondary border-accent/50"
          )}
          onClick={() => handleChange(type.value)}
        >
          <p
            className={cn(
              "opacity-50 uppercase font-semibold text-white transition-opacity duration-200",
              currentType === type.value ? "opacity-100" : "opacity-50"
            )}
          >
            {type.title}
          </p>
        </button>
      ))}
    </div>
  );
};
