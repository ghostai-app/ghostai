import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib";
import infoButton from "/assets/info-button.png";
import infoBg from "/assets/info-bg.png";
import { ButtonWithVibration } from "@/components/ui";

interface Props {
  className?: string;
}

export const InfoButton = ({ className }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className={cn(
          "size-12 cursor-pointer fixed top-[var(--top-padding)] right-[var(--horizontal-padding)]",
          className
        )}
      >
        <img
          src={infoButton}
          alt="Wallets Button"
          className="size-full object-contain"
        />
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black h-screen backdrop-blur-sm"
            onClick={closeModal}
          >
            <div className="overflow-y-auto h-full flex flex-col gap-16 w-full px-(--horizontal-padding) pt-(--top-padding)">
              <h3>GhostAI Tutorial</h3>
              <div className="flex flex-col gap-3">
                <h3 className="text-accent">GhostAI Tutorial</h3>
                <p className="text-lg font-medium leading-[135%]">
                  Click button to earn $GAI and accumulate every 3 hours
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-accent">Winner Takes All</h3>
                <p className="text-lg font-medium leading-[135%]">
                  Battle by staking 1000 $GAI each side. The winner takes
                  everything. In shop, players can buy weapons with $GAI and
                  gears with CRYSTAL(earn via daily check in) that increase win
                  rate.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-accent">Airdrop – coming soon</h3>
                <p className="text-lg font-medium leading-[135%]">
                  More of our token $I will be airdropped based on $GAI, winning
                  rate and gameplay activity.
                </p>
              </div>
              <ButtonWithVibration className="w-full" onClick={closeModal}>
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
    </>
  );
};
