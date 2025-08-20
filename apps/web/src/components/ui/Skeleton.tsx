import { cn } from "@/lib/index";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-full bg-background", className)}
      {...props}
    />
  );
}

export { Skeleton };
