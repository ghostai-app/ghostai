import React from "react";
import { cn } from "@/lib";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "../Container";
import { Card } from "../common";
import { useSuspenseQuery } from "@tanstack/react-query";
import {
  getCheckInQueryOptions,
  getUserQueryOptions,
  useClaimCheckIn,
} from "@/hooks";
import { ButtonWithVibration } from "@/components/ui";
import checkIn from "/assets/check-in.png";
import day1 from "/assets/check-in/day1.jpg";
import day2 from "/assets/check-in/day2.jpg";
import day3 from "/assets/check-in/day3.jpg";
import day4 from "/assets/check-in/day4.jpg";
import day5 from "/assets/check-in/day5.jpg";
import day6 from "/assets/check-in/day6.jpg";
import day7 from "/assets/check-in/day7.jpg";

interface Props {
  className?: string;
}

const imageRecord: Record<number, string> = {
  1: day1,
  2: day2,
  3: day3,
  4: day4,
  5: day5,
  6: day6,
  7: day7,
};

export const CheckInModal = ({ className }: Props) => {
  const { data } = useSuspenseQuery(getCheckInQueryOptions());
  const { data: user } = useSuspenseQuery(getUserQueryOptions());
  const { mutate: claimCheckIn } = useClaimCheckIn();

  return (
    <AnimatePresence>
      {user.dailyAvaliable && (
        <div className={cn("size-full inset-0 fixed z-90", className)}>
          <Container className="z-1 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ translateY: "10%", opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              exit={{ translateY: "10%", opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full rounded-[22px] bg-background-2 p-4"
            >
              <h3 className="text-[34px] text-center">Daily check-in</h3>
              <div className="mt-8 flex flex-col gap-2">
                {data.days.map((day, index) => (
                  <div
                    className={cn(
                      "bg-[#2B1910] border border-white/15 rounded-lg p-3.5 relative overflow-hidden h-12",
                      (index === 3 || index === 6) && "h-[120px]"
                    )}
                    key={day.day}
                  >
                    <img
                      src={`${imageRecord[day.day]}?v=${Date.now()}`}
                      alt="check-in"
                      className="size-full absolute inset-0 object-cover pointer-events-none z-[0]"
                    />
                    <div
                      className={cn(
                        "z-[10] flex items-center justify-between w-full h-full absolute inset-0 p-3.5",
                        (index === 3 || index === 6) && "flex-col items-start"
                      )}
                    >
                      <p className="font-semibold text-[20px] text-[#C88F61]">
                        DAY {day.day}
                      </p>
                      <p className="font-semibold text-[20px] text-white">
                        +{day.reward} SPINS
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <ButtonWithVibration
                size={"default"}
                variant={"accent"}
                className="w-full mt-4"
                onClick={() => claimCheckIn()}
              >
                Claim
              </ButtonWithVibration>
            </motion.div>
          </Container>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="size-full inset-0 fixed z-0 bg-black/50 backdrop-blur-md"
          ></motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
