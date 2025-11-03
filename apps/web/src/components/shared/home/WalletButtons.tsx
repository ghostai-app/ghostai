import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib";
import { wallets } from "@/data";
import { useWallet } from "@/hooks";
import chestVideo from "@/_assets/images/chest.mp4";
import WalletIcon from "@/_assets/icons/wallet.svg?react";

interface Props {
  className?: string;
}

export const WalletButtons = ({ className }: Props) => {
  const { handleProccessWallet } = useWallet();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Кешируем состояние меню в localStorage
  useEffect(() => {
    const savedMenuState = localStorage.getItem("walletMenuOpen");
    if (savedMenuState === "true") {
      setIsMenuOpen(true);
    }
  }, []);

  // Сохраняем состояние меню в localStorage
  useEffect(() => {
    localStorage.setItem("walletMenuOpen", isMenuOpen.toString());
  }, [isMenuOpen]);

  const handleOpenWallet = (wallet: string) => {
    handleProccessWallet(wallet);
    setIsMenuOpen(false); // Закрываем меню после выбора кошелька
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={cn("z-10 flex items-center relative", className)}>
      {/* Бургер-кнопка */}
      <div className="flex items-center gap-2">
        <motion.button
          onClick={toggleMenu}
          className="cursor-pointer relative transition-all duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <video
            ref={videoRef}
            src={chestVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="size-12 object-cover rounded-lg"
          />
        </motion.button>
        <WalletIcon className="size-12" />
      </div>

      {/* Кошельки с анимацией */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              staggerChildren: 0.05,
            }}
            className="flex flex-col gap-2 mt-2 absolute top-full"
          >
            {wallets.map((wallet, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: -30, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.5 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                onClick={() => handleOpenWallet(wallet.wallet || "")}
                style={{
                  backgroundColor: wallet.bgIcon,
                }}
                className="cursor-pointer flex items-center justify-center size-12 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <wallet.icon
                  className="size-8"
                  style={{ fill: wallet.logoIcon }}
                />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
