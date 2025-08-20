"use client";

import React, { useState, useRef } from "react";
import { cn, ENV } from "@/lib";
import { ButtonWithVibration } from "@/components/ui";
import { IRouletteItem } from "@/types";
import { toast } from "react-hot-toast";
import { RouletteReel } from "./roulette.class";
import {
  getRouletteItemsQueryOptions,
  getUserQueryOptions,
  useSpinRoulette,
} from "@/hooks";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Container } from "../Container";

interface Props {
  className?: string;
}

const SPIN_DURATION = 3; // секунды
const ITEM_HEIGHT = 100; // высота одного элемента
const SPINS_COUNT = 3; // количество оборотов
const ITEM_GAP = 6; // отступ между элементами

export const Roulette = ({ className }: Props) => {
  const { data: items } = useSuspenseQuery(getRouletteItemsQueryOptions());
  const { mutateAsync: spinRoulette } = useSpinRoulette();
  const { data: user } = useSuspenseQuery(getUserQueryOptions());

  const [isSpinning, setIsSpinning] = useState(false);
  const [targetItems, setTargetItems] = useState<IRouletteItem[]>([
    items[0],
    items[0],
    items[0],
  ]);
  const [currentItems, setCurrentItems] = useState<IRouletteItem[]>([
    items[0],
    items[0],
    items[0],
  ]);
  const [reelItems, setReelItems] = useState<IRouletteItem[][]>([
    Array(SPINS_COUNT * 2)
      .fill(items)
      .flat(),
    Array(SPINS_COUNT * 2)
      .fill(items)
      .flat(),
    Array(SPINS_COUNT * 2)
      .fill(items)
      .flat(),
  ]);

  const reelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const reelsInstanceRef = useRef<RouletteReel[]>([]);

  const startSpin = async () => {
    if (isSpinning) return;

    try {
      const result = await spinRoulette();
      setIsSpinning(true);

      // Преобразуем индексы в объекты IRouletteItem
      const newTargetItems = result.combination.map(
        (index) => items.find((item) => item.index === index) || items[0]
      );

      setTargetItems(newTargetItems);

      // Создаем экземпляры рулетки для каждого барабана
      const reels = newTargetItems.map((targetItem, reelIndex) => {
        const reel = new RouletteReel(
          items,
          targetItem,
          SPINS_COUNT,
          ITEM_HEIGHT,
          ITEM_GAP,
          260
        );
        return reel;
      });

      reelsInstanceRef.current = reels;

      // Подготавливаем новые наборы предметов
      const newItems = reels.map((reel) => reel.prepareItems());
      setReelItems(newItems);

      // Запускаем анимацию для каждого барабана
      reels.forEach((reel, index) => {
        const element = reelsRef.current[index];
        if (!element) return;

        const targetPosition = reel.calculateTargetPosition();

        element.style.transition = "none";
        element.style.transform = "translateY(0)";
        element.offsetHeight;

        requestAnimationFrame(() => {
          if (!element) return;
          element.style.transition = `transform ${SPIN_DURATION}s cubic-bezier(0.05, 0.9, 0.1, 1)`;
          element.style.transform = `translateY(-${targetPosition}px)`;
        });
      });

      // Обновляем текущие предметы после завершения анимации
      setTimeout(() => {
        setCurrentItems(newTargetItems);
        setIsSpinning(false);
      }, SPIN_DURATION * 1000);
    } catch (error) {
      setIsSpinning(false);
    }
  };

  return (
    <div
      className={cn(
        "w-full flex flex-col items-center justify-center",
        className
      )}
    >
      <div className="overflow-hidden flex items-center z-10 w-[360px] h-[330px] bg-[#000]/[70%] border-[3px] border-[#000] rounded-[6px]">
        {/* Указатель */}
        {[0, 1, 2].map((reelIndex) => (
          <div
            key={reelIndex}
            className="z-5 flex-1 h-full overflow-hidden border-r border-[#fff]/[10%] last:border-r-0"
          >
            <div
              ref={(el) => {
                reelsRef.current[reelIndex] = el;
              }}
              className="flex flex-col"
            >
              {reelItems[reelIndex].map((item, index) => {
                // Вычисляем, находится ли элемент на центральной линии
                const isCenterItem =
                  !isSpinning &&
                  index === Math.floor(reelItems[reelIndex].length / 2) &&
                  item.index === targetItems[reelIndex].index;

                return (
                  <div
                    key={index}
                    className={cn(
                      "flex p-2.5 items-center justify-center h-[100px] bg-[#fff]/[5%] m-1 rounded-sm",
                      isCenterItem && "bg-[#fff]/[30%]"
                    )}
                  >
                    <img
                      src={`${ENV.VITE_ASSETS_URL}${item.imageUrl}`}
                      alt={item.index.toString()}
                      className="object-contain size-full"
                      width={100}
                      height={100}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <Container className="z-20 absolute bottom-[140px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <p
            className="text-sm text-white/55"
            style={{ textShadow: "0 4px 13.1px rgba(112, 33, 35, 0.92)" }}
          >
            Spins available via daily check-in rewards
          </p>
          <h3 className="text-center">You have: {user.ticketCount} Spins</h3>
        </div>
        <ButtonWithVibration
          className="w-[340px]"
          variant={"accent"}
          onClick={startSpin}
        >
          {isSpinning ? "Spinning..." : "Spin"}
        </ButtonWithVibration>
      </Container>
    </div>
  );
};
