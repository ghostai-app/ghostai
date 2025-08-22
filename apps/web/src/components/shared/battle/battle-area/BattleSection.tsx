"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { IBattle } from "@/types";
import { BattleHeroInfo } from "./BattleHeroInfo";
import { viewportContentSafeAreaInsetTop } from "@telegram-apps/sdk-react";
import { EnemyHero } from "./EnemyHero";

interface Props {
  className?: string;
  battle: IBattle;
}

export const BattleSection: React.FC<Props> = ({ className, battle }) => {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 h-full items-center flex flex-col",
          className
        )}
        style={{
          marginTop: `${viewportContentSafeAreaInsetTop() + 60}px`,
        }}
      >
        <h2>BATTLE!</h2>

        <EnemyHero battle={battle} />
      </div>

      <div className="left-1/2 -translate-x-1/2 fixed bottom-15 w-[calc(100%-var(--horizontal-padding)*2)] flex items-start justify-between">
        <BattleHeroInfo
          name={battle.userName}
          health={battle?.userHealth}
          hero={battle.userHero}
          className="items-start"
        />

        <BattleHeroInfo
          name={battle.enemyName}
          health={battle?.enemyHealth}
          hero={battle.enemyHero}
          className="items-end"
        />
      </div>
    </>
  );
};
