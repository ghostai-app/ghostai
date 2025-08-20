import React, { useState, useEffect } from "react";
import { cn } from "@/lib";
import defaultBg from "/assets/backgrounds/default.jpg";

interface Props {
  className?: string;
}

export const Loading = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "size-full fixed inset-0 flex items-center justify-center z-99",
        className
      )}
    >
      <img src={defaultBg} className="absolute inset-0 size-full" />
      <div className="size-20 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};
