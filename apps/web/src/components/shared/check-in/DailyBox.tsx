import React, { useEffect, useState } from "react";
import { cn, PUBLIC_URL } from "@/lib";
import { useQuery } from "@tanstack/react-query";
import {
  getCheckInQueryOptions,
  getUserQueryOptions,
  useClaimCheckIn,
} from "@/hooks";
import { ButtonWithVibration } from "@/components/ui";
import { useNavigate } from "react-router-dom";
import type { ICheckInDay } from "@/types";
import crystalIcon from "@/_assets/images/crystal.png";

import { formatBalance } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useCheckInModal } from "@/hooks/useCheckInModal";
import XIcon from "@/_assets/icons/x.svg?react";
import { openLink } from "@telegram-apps/sdk-react";

interface Props {
  className?: string;
}

const CENTRAL_CARD_WIDTH = 180;
const CENTRAL_CARD_HEIGHT = 290;
const CENTRAL_CARD_HEIGHT_LARGE = 290; // Increased height for central card

// Calculate card sizes based on distance from center
const getCardSize = (index: number, centerIndex: number) => {
  const distance = Math.abs(index - centerIndex);
  if (distance === 0) {
    // Central card - tallest
    return {
      width: CENTRAL_CARD_WIDTH,
      height: CENTRAL_CARD_HEIGHT_LARGE,
      scale: 1,
      zIndex: 10,
    };
  } else if (distance === 1) {
    // Second cards from center - bigger than third
    return {
      width: CENTRAL_CARD_WIDTH,
      height: CENTRAL_CARD_HEIGHT,
      scale: 0.6,
      zIndex: 5,
    };
  } else if (distance === 2) {
    // Third cards from center - smaller than second
    return {
      width: CENTRAL_CARD_WIDTH,
      height: CENTRAL_CARD_HEIGHT,
      scale: 0.4,
      zIndex: 3,
    };
  } else {
    // Far cards (3+ cards from center)
    return {
      width: CENTRAL_CARD_WIDTH,
      height: CENTRAL_CARD_HEIGHT,
      scale: 0.3,
      zIndex: 1,
    };
  }
};

const CheckInCard = ({
  day,
  index,
  centerIndex,
}: {
  day: ICheckInDay;
  index: number;
  centerIndex: number;
}) => {
  const { width, height, scale, zIndex } = getCardSize(index, centerIndex);
  const isCurrent = day.current;
  const distance = Math.abs(index - centerIndex);

  // Negative margins for cards towards center
  // Right card (index > centerIndex) needs negative marginLeft to move left
  // Left card (index < centerIndex) needs negative marginRight to move right
  // Distance 1: -60px, Distance 2: -120px (2x of distance 1)
  const marginLeft =
    distance === 1 && index > centerIndex
      ? "-60px"
      : distance === 2 && index > centerIndex
        ? "-120px"
        : "0";
  const marginRight =
    distance === 1 && index < centerIndex
      ? "-60px"
      : distance === 2 && index < centerIndex
        ? "-120px"
        : "0";

  return (
    <div
      className={cn(
        "overflow-hidden relative flex flex-col items-center bg-black justify-center rounded-2xl border border-[#1C1C1C] transition-all duration-300 mx-auto"
      )}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        minWidth: `${width}px`,
        minHeight: `${height}px`,
        transform: `scale(${scale})`,
        transformOrigin: "center center",
        marginLeft,
        marginRight,
        zIndex,
        position: "relative",
      }}
    >
      <motion.div className="opacity-70 absolute left-1/2 -translate-x-1/2 blur-2xl aspect-square top-[-50%] z-[-1] bg-[#FFAA00] w-full rounded-[100%]"></motion.div>
      <img src={crystalIcon} alt="Crystal" className="w-25 object-contain" />
      <h2 className="text-center mt-5 text-[24px]">
        {formatBalance(day.reward)}
      </h2>
      <p className="text-xs text-white/55">CRYSTAL</p>
    </div>
  );
};

export const DailyBox = ({ className }: Props) => {
  const navigate = useNavigate();
  const { data: user } = useQuery(getUserQueryOptions());
  const { isOpen, open, close } = useCheckInModal();
  const {
    data: checkIn,
    isLoading,
    error,
  } = useQuery({
    ...getCheckInQueryOptions(),
    retry: 2,
    retryDelay: 1000,
  });
  const { mutateAsync: claimCheckIn } = useClaimCheckIn();

  // Ensure we have days array
  const days = checkIn?.days || [];
  const centerIndex = days.findIndex((day) => day.current) ?? 2;
  const canClaim = user?.dailyAvaliable && !isOpen;

  const handleClaimCheckIn = async () => {
    try {
      await claimCheckIn();
      close();
    } catch (error) {}
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, translateY: "100%" }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: "100%" }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "border border-white/10 z-99 bg-background fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col py-8 w-full rounded-[24px]",
            className
          )}
        >
          <button
            type="button"
            onClick={() => openLink("https://x.com/ghostai_offcl")}
            className="cursor-pointer absolute top-4 right-4"
          >
            <XIcon className="w-6 h-6" />
          </button>

          <h2 className="text-[24px] text-center">
            Open GhostAI every day to
            <br />
            receive all daily bonuses!
          </h2>

          <div className="flex-1 flex items-center justify-center px-4 min-h-[360px]">
            <div className="flex items-center gap-0 justify-center">
              {days.map((day, index) => (
                <CheckInCard
                  key={day.day}
                  day={day}
                  index={index}
                  centerIndex={centerIndex}
                />
              ))}
            </div>
          </div>

          <div className="pb-8 px-4 mt-auto mx-auto w-full max-w-50">
            {canClaim ? (
              <ButtonWithVibration
                variant="default"
                size="default"
                onClick={handleClaimCheckIn}
              >
                Claim
              </ButtonWithVibration>
            ) : (
              <ButtonWithVibration
                variant="grayOutline"
                size="default"
                onClick={close}
              >
                Close
              </ButtonWithVibration>
            )}
          </div>
        </motion.div>
      )}
      {isOpen && (
        <motion.div
          onClick={close}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-80 bg-black/50"
        ></motion.div>
      )}
    </AnimatePresence>
  );
};
