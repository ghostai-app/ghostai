import React from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ButtonWithVibration } from "@/components/ui/ButtonWithVibration";
import infoBg from "/assets/info-bg.png";

interface Props {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const BatlleInfoModal = ({ className, isOpen, onClose }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black h-screen backdrop-blur-sm"
          onClick={onClose}
        >
          <div className="overflow-y-auto h-full flex flex-col gap-16 w-full px-(--horizontal-padding) pt-(--top-padding)">
            <h3>PVP Arena</h3>
            <div className="flex flex-col gap-3">
              <h3 className="text-accent">GhostAI ARENA</h3>
              <p className="text-lg font-medium leading-[135%]">
                Enter the PVP Arena to challenge others and win the full prize
                in “Winners Take All” mode
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-accent">Winner Takes All</h3>
              <p className="text-lg font-medium leading-[135%]">
                Command your army to attack other players’ territories. Victors
                can seize a portion of the opponent’s CRYSTAL and climb the
                community leaderboard for weekly rewards.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium leading-[135%]">
                ✅ Rewards increase based on offline time
                <br />
                ✅ Upgrade efficiency for better offline earnings
                <br />✅ Double offline rewards using [special item or feature]
              </p>
            </div>
            <ButtonWithVibration className="w-full" onClick={onClose}>
              Sure
            </ButtonWithVibration>
          </div>

          <img
            src={infoBg}
            alt="Info Background"
            className="size-full object-cover object-top absolute inset-0 z-[-1]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
