import React, { useState } from "react";
import { cn } from "@/lib";
import { UserHeroItem } from "./UserHeroItem";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getUserHeroesQueryOptions } from "@/hooks";
import { FightButton } from "./FightButton";
import { IHero } from "@/types";

interface Props {
  className?: string;
}

export const UserHeroList = ({ className }: Props) => {
  const [selectedHero, setSelectedHero] = useState<IHero | null>(null);
  const { data: heroes } = useSuspenseQuery(getUserHeroesQueryOptions());

  return (
    <div
      className={cn(
        "py-1 px-[calc(var(--horizontal-padding)*5)] flex items-center gap-[14px] overflow-x-auto",
        className
      )}
    >
      {heroes.map((hero) => (
        <UserHeroItem
          key={hero.id}
          hero={hero}
          onSelect={() => setSelectedHero(hero)}
          isSelected={selectedHero?.id === hero.id}
        />
      ))}

      <FightButton className="w-[180px]" heroId={selectedHero?.id ?? 0} />
    </div>
  );
};
