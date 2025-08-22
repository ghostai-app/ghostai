import React, { useState } from "react";
import { cn, PUBLIC_URL } from "@/lib";
import { UserHeroItem } from "./UserHeroItem";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getUserHeroesQueryOptions } from "@/hooks";
import { FightButton } from "./FightButton";
import { IHero } from "@/types";
import { Link } from "../sdk";
import { Button } from "@/components/ui";

interface Props {
  className?: string;
}

export const UserHeroList = ({ className }: Props) => {
  const [selectedHero, setSelectedHero] = useState<IHero | null>(null);
  const { data: heroes } = useSuspenseQuery(getUserHeroesQueryOptions());

  if (!heroes || heroes.length === 0) {
    return (
      <div
        className={cn(
          "flex flex-col items-center gap-4 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          className
        )}
      >
        <h3 className="text-center text-gray !leading-[125%]">
          Buy more heroes
          <br />
          to start fighting
        </h3>
        <Link to={PUBLIC_URL.shop()}>
          <Button variant={"grayOutline"} className="w-[100px]">
            Shop
          </Button>
        </Link>
      </div>
    );
  }

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
