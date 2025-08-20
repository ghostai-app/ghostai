import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-transparent relative h-1 w-full rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="rounded-full h-full w-full flex-1 transition-all bg-white"
        style={{
          boxShadow:
            "0px 0px 2.1px 0px #57B9FF, 0px 0px 20.4px 0px #57B9FF, 0px 0px 37.7px 0px #57B9FF, 0px 0px 17.8px 0px #57B9FF",
          transform: `translateX(-${100 - (value || 0)}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
