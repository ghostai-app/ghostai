import React from "react";
import { cn, PUBLIC_URL } from "@/lib";
import { BottomFixedButton, ButtonProps } from "@/components";
import { useNavigate } from "react-router-dom";

interface Props {
  className?: string;
  heroId: number;
}

export const FightButton = ({ className, heroId }: Props) => {
  const navigate = useNavigate();

  const handleFight = () => {
    navigate(PUBLIC_URL.battleArea(heroId));
  };

  return (
    <BottomFixedButton
      className={cn(className)}
      onClick={handleFight}
      disabled={!heroId}
    >
      FIGHT!
    </BottomFixedButton>
  );
};
