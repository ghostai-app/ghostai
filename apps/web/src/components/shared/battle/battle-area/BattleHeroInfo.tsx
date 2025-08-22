import React from "react";
import { cn } from "@/lib/utils";
import { IHero } from "@/types";
import { Progress } from "@/components/ui";

interface Props {
  className?: string;
  name: string;
  health: number;
  hero: IHero;
}

export const BattleHeroInfo: React.FC<Props> = ({
  className,
  name,
  health,
  hero,
}) => {
  return (
    <div className={cn("flex flex-col gap-3.5 w-1/2 px-3.5", className)}>
      <p className="text-base">{name}</p>

      <h6>{hero.name}</h6>

      <Progress
        className="h-3 w-full"
        indicatorClassName="bg-accent"
        value={health}
      />
    </div>
  );
};
