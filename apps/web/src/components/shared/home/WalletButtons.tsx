import React from "react";
import { cn } from "@/lib";
import { wallets } from "@/data";
import { useWallet } from "@/hooks";

interface Props {
  className?: string;
}

export const WalletButtons = ({ className }: Props) => {
  const { handleProccessWallet } = useWallet();

  const handleOpenWallet = (wallet: string) => {
    handleProccessWallet(wallet);
  };

  return (
    <div className={cn("z-10 flex gap-2", className)}>
      {wallets.map((wallet, index) => (
        <button
          onClick={() => handleOpenWallet(wallet.wallet || "")}
          style={{
            backgroundColor: wallet.bgIcon,
          }}
          key={index}
          className="cursor-pointer flex items-center justify-center size-10 rounded-full"
        >
          <wallet.icon className="size-6" style={{ fill: wallet.logoIcon }} />
        </button>
      ))}
    </div>
  );
};
