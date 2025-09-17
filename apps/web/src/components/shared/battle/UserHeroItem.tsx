import React from "react";
import { cn } from "@/lib";
import AttackIcon from "@/_assets/icons/attack.svg?react";
import ShieldIcon from "@/_assets/icons/shield.svg?react";
import { IHero } from "@/types";
import emptyHero from "/assets/empty-hero.png";
import { Progress } from "@/components/ui";
import { hapticFeedbackImpactOccurred } from "@telegram-apps/sdk-react";

interface Props {
  className?: string;
  hero: IHero;
  onSelect?: () => void;
  isSelected?: boolean;
}

export const UserHeroItem = ({
  className,
  hero,
  onSelect,
  isSelected,
}: Props) => {
  const characteristics = [
    {
      icon: AttackIcon,
      label: "Attack",
      number: hero.attack,
      maxNumber: 100,
    },
    {
      icon: ShieldIcon,
      label: "Health",
      number: hero.health,
      maxNumber: 250,
    },
  ];

  const handleSelect = () => {
    if (onSelect) {
      onSelect();
      hapticFeedbackImpactOccurred("light");
    }
  };

  return (
    <div
      className={cn(
        "rounded-xl p-3.5 w-[260px] border border-outline bg-secondary flex flex-col gap-[14px] flex-shrink-0 transition-all",
        isSelected && "outline outline-accent",
        className
      )}
      onClick={handleSelect}
    >
      <div className="w-full rounded-lg aspect-square bg-dark">
        {hero.imageUrl ? (
          <img
            className="w-full h-full object-cover rounded-lg object-top"
            alt="Hero Image"
            src={hero.imageUrl}
          />
        ) : (
          <img
            className="w-full h-full object-cover rounded-lg blur-[15px]"
            alt="Hero Image"
            src={emptyHero}
          />
        )}
      </div>

      <p className="font-semibold !text-sm">{hero.name}</p>
      <hr className="w-full border border-outline" />

      {characteristics.map((item, index) => (
        <div className="w-full flex items-center gap-2" key={index}>
          <item.icon className="size-6 fill-white" />

          <div className="flex flex-col gap-1 w-full">
            <p>
              {item.label}: {item.number}
            </p>

            <Progress
              className="h-1.5 w-full"
              value={
                typeof item.number === "number"
                  ? (item.number / item.maxNumber) * 100
                  : 0
              }
              indicatorClassName="bg-accent"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
