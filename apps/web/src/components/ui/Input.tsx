import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-15 placeholder:text-black/50 font-inter italic rounded-xl bg-white px-4 text-sm font-normal text-black outline-none",
        className
      )}
      {...props}
    />
  );
}

export { Input };
