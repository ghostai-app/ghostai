import React, { useState, useEffect } from "react";
import { cn } from "@/lib";

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
      <div className="size-20 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};
