import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

function Progress({
  className,
  value,
  indicatorClassName,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & {
  indicatorClassName?: string;
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-transparent relative h-1 w-full rounded-full overflow-hidden bg-black",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "rounded-full h-full w-full flex-1 transition-all bg-white",
          indicatorClassName
        )}
        style={{
          transform: `translateX(-${100 - (value || 0)}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
