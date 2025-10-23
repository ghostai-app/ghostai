import React, { useEffect, useState } from "react";
import { cn, PUBLIC_URL } from "@/lib";
import openedBox from "/assets/opened-box.jpg";
import closedBox from "/assets/closed-box.jpg";
import dailyVideo from "@/_assets/images/daily.mov";
import { useQuery } from "@tanstack/react-query";
import {
  getCheckInQueryOptions,
  getUserQueryOptions,
  useClaimCheckIn,
} from "@/hooks";
import { formatBalance } from "@/utils";
import { ButtonWithVibration } from "@/components/ui";
import { BottomFixedButton } from "../BottomFixedButton";
import { Navigate, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  className?: string;
}

export const DailyBox = ({ className }: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();
  const { data: user } = useQuery(getUserQueryOptions());
  const { data: checkIn } = useQuery(getCheckInQueryOptions());
  const { mutateAsync: claimCheckIn } = useClaimCheckIn();

  const handleClaimCheckIn = async () => {
    await claimCheckIn();
    setIsOpened(true);
  };

  useEffect(() => {
    if (!user?.dailyAvaliable && !isOpened) {
      navigate(PUBLIC_URL.home());
    }
  }, [user?.dailyAvaliable]);

  return (
    <>
      {isOpened && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="w-full flex flex-col items-center gap-1 fixed top-[calc(var(--top-padding)+16px)]"
          >
            <p className="text-muted">Your reward</p>
            <h3 className="!text-white">
              {formatBalance(checkIn?.reward)} CRYSTAL
            </h3>
          </motion.div>
        </AnimatePresence>
      )}
      <div
        className={cn(
          "fixed top-1/2 inset-x-0 -translate-y-1/2 z-[-1]",
          className
        )}
      >
        {isOpened ? (
          <video
            src={dailyVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-3/4 object-cover z-[-1] scale-x-[-1]"
          />
        ) : (
          <img src={closedBox} className="w-full h-3/4 object-cover z-[-1]" />
        )}
      </div>
      {!isOpened ? (
        <BottomFixedButton onClick={handleClaimCheckIn}>
          Tap to receive daily bonus
        </BottomFixedButton>
      ) : (
        <BottomFixedButton onClick={() => navigate(PUBLIC_URL.home())}>
          Collect
        </BottomFixedButton>
      )}
    </>
  );
};
