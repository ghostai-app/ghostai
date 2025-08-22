"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { IHero } from "@/types";
import { UserHeroItem } from "../UserHeroItem";

interface Props {
  className?: string;
  player1Hero: IHero;
}

export const PrepareHeroCards: React.FC<Props> = ({
  className,
  player1Hero,
}) => {
  const data: IHero = {
    imageUrl: "",
    id: -1,
    name: "???",
    health: 0,
    attack: 0,
    createdAt: new Date(),
  };

  return (
    <div
      className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center w-full justify-center gap-11 scale-[0.65]",
        className
      )}
    >
      <UserHeroItem hero={player1Hero} className="rotate-[-3deg]" />
      <UserHeroItem hero={data} className="rotate-[3deg]" />
    </div>
  );
};
