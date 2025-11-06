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
        "flex flex-col items-center bg-black justify-center rounded-2xl border border-[#1C1C1C] transition-all duration-300 mx-auto"
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
      {/* Empty card - just border and background */}
      <img src={crystalIcon} alt="Crystal" className="w-25 object-contain" />
      <h2 className="text-center mt-5 text-[24px]">
        {formatBalance(day.reward)}
      </h2>
      <p className="text-xs text-white/55">CRYSTAL</p>
    </div>
  );
};

export const DailyBox = ({ className }: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();
  const { data: user } = useQuery(getUserQueryOptions());
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

  // Debug: log what we receive
  React.useEffect(() => {
    if (checkIn) {
      console.log("CheckIn data received:", checkIn);
      console.log("Days array:", checkIn.days);
    }
  }, [checkIn]);

  // Ensure we have days array
  const days = checkIn?.days || [];
  const centerIndex = days.findIndex((day) => day.current) ?? 2;
  const canClaim = user?.dailyAvaliable && !isOpened;

  const handleClaimCheckIn = async () => {
    try {
      await claimCheckIn();
      navigate(PUBLIC_URL.home());
    } catch (error) {
      // Error is handled by the mutation
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p className="text-muted">Loading...</p>
      </div>
    );
  }

  // Always show data if available, even if there's an error
  // Backend should always return data now
  if (!days || days.length === 0) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p className="text-muted">
          {error ? "Error loading check-in data" : "No check-in data available"}
        </p>
        {checkIn && (
          <pre className="text-xs mt-2 text-muted">
            {JSON.stringify(checkIn, null, 2)}
          </pre>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col min-h-[calc(100vh-var(--top-padding))] w-full",
        className
      )}
    >
      <h2 className="text-[24px] text-center">
        Open GhostAI every day to
        <br />
        receive all daily bonuses!
      </h2>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-1 flex items-center justify-center px-4 py-8 min-h-[400px]">
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
          <ButtonWithVibration variant="grayOutline" size="default" disabled>
            Already Claimed
          </ButtonWithVibration>
        )}
      </div>
    </div>
  );
};
