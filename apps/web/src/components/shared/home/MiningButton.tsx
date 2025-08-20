import React, { useEffect } from "react";
import { cn } from "@/lib";
import { Button, ButtonWithVibration, Progress } from "../../ui";
import { Container } from "../Container";
import { useQuery } from "@tanstack/react-query";
import {
  getMiningQueryOptions,
  useStartMining,
  useStopMining,
  useTimer,
} from "@/hooks";
import { min } from "date-fns";

interface Props {
  className?: string;
}

export const MiningButton = ({ className }: Props) => {
  const { data: mining, isLoading } = useQuery(getMiningQueryOptions());
  const { mutate: startMining } = useStartMining();
  const { mutate: stopMining } = useStopMining();
  const { timeLeft, isExpired, progress } = useTimer(
    mining?.expiresAt ?? new Date(),
    mining?.startedAt ?? new Date()
  );

  const renderButton = () => {
    if (mining?.isActive) {
      if (isExpired) {
        return (
          <ButtonWithVibration
            size={"default"}
            variant={"accent"}
            onClick={() => stopMining()}
          >
            Claim
          </ButtonWithVibration>
        );
      } else {
        return (
          <Button
            variant={"accent"}
            size={"default"}
            className="relative overflow-hidden"
          >
            Time to claim: {timeLeft}
            {/* <Progress
              value={progress}
              className="absolute bottom-0 inset-x-0"
            /> */}
          </Button>
        );
      }
    } else {
      return (
        <ButtonWithVibration
          size={"default"}
          variant={"default"}
          onClick={() => startMining()}
        >
          Tap to start earning
        </ButtonWithVibration>
      );
    }
  };

  return <>{renderButton()}</>;
};
