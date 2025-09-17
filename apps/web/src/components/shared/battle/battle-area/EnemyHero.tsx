import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { IBattle } from "@/types";
import { hapticFeedbackImpactOccurred } from "@telegram-apps/sdk-react";
import { useInterval } from "react-use";
import { useDamageEnemy } from "@/hooks";

interface Props {
  className?: string;
  battle: IBattle;
}

interface Effect {
  id: number;
  value: number;
  x: number;
  y: number;
}

export const EnemyHero: React.FC<Props> = ({ className, battle }) => {
  const [clicks, setClicks] = useState(0);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [effects, setEffects] = useState<Effect[]>([]);
  const { mutateAsync: damageEnemy } = useDamageEnemy(battle.id, clicks);

  const handleSendDamage = async () => {
    if (clicks === 0) return;
    if (!battle.id) return;

    await damageEnemy()
      .then(() => setClicks(0))
      .catch(() => {});
  };

  const handleTap = () => {
    setClicks((prev) => prev + 1);

    hapticFeedbackImpactOccurred("soft");
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();

    const rect = e.currentTarget.getBoundingClientRect();
    const touches = e.changedTouches;

    for (let i = 0; i < touches.length; i++) {
      const x = touches[i].clientX - rect.left;
      const y = touches[i].clientY - rect.top;

      handleTap();

      const newEffect = {
        id: Date.now() + i,
        value: battle.userAttack,
        x,
        y,
      };

      setEffects((prevEffects) => [...prevEffects, newEffect]);

      setTimeout(() => {
        setEffects((prevEffects) =>
          prevEffects.filter((effect) => effect.id !== newEffect.id)
        );
      }, 1000);
    }
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const randomizePosition = () => {
    const newTop = Math.random() * 80;
    const newLeft = Math.random() * 80;
    setPosition({ top: newTop, left: newLeft });
  };

  useInterval(handleSendDamage, 1500);

  useInterval(randomizePosition, 5000);

  return (
    <div className={cn("relative", className)}>
      {/* Объект для клика */}
      <div
        className="size-15 absolute z-[100] rounded-full bg-[#fff]/30 border border-white"
        style={{
          top: `${position.top || 50}%`,
          left: `${position.left || 50}%`,
          transform: "translate(-50%, -50%)",
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        onTouchMove={handleTouchEnd}
      >
        {effects.map((effect) => (
          <p
            key={effect.id}
            className="w-8 absolute animate-moveUp z-[20] pointer-events-none text-[24px]"
            style={{
              top: effect.y,
              left: effect.x,
              transform: "translate(-50%, -50%)",
            }}
          >
            -{effect.value}
          </p>
        ))}
      </div>

      <img
        src={battle?.enemyHero?.imageUrl}
        alt="Enemy Hero"
        className="w-full h-[420px] object-cover object-top"
      />
    </div>
  );
};
