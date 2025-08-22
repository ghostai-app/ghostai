"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { ButtonWithVibration } from "@/components";
import { formatBalance } from "@/utils";
import wonBattleImage from "/assets/won-battle.jpg";
import { PUBLIC_URL } from "@/lib";

interface Props {
  className?: string;
}

export const WonBattle: React.FC<Props> = ({ className }) => {
  const navigate = useNavigate();

  return (
    <div className={cn("w-full h-full flex flex-col items-center", className)}>
      <div className="relative w-full h-2/3 overflow-hidden">
        <img
          src={wonBattleImage}
          alt="Won Battle"
          className="object-cover w-full h-full opacity-30"
        />

        <div className="absolute w-full h-1/5 bg-gradient-to-t from-background to-transparent bottom-0 left-0" />
      </div>

      <div className="text-center">
        <h2 className="font-medium text-[24px] leading-[135%]">You Won!</h2>

        <h1 className="text-[32px] font-bold leading-[135%]">
          +{formatBalance(1000)} $GAI
        </h1>
      </div>

      <ButtonWithVibration
        onClick={() => navigate(PUBLIC_URL.home())}
        className="mt-12 w-[175px] px-0"
      >
        CLAIM REWARD
      </ButtonWithVibration>
    </div>
  );
};
