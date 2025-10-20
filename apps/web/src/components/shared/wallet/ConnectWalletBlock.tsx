import React from "react";
import { cn } from "@/lib";
import { Container } from "../Container";
import { ButtonWithVibration } from "@/components/ui";
import { formatWallet } from "@/utils";
import { useWallet } from "@/hooks";
import { Card } from "../common";
import { walletsData } from "@/data";

interface Props {
  className?: string;
}

export const ConnectWalletBlock = ({ className }: Props) => {
  const { wallet, handleProccessWallet } = useWallet();

  return (
    <Container
      className={cn(
        "bottom-[120px] fixed w-[calc(100%-var(--horizontal-padding)*2)] left-1/2 -translate-x-1/2 z-20 flex flex-col gap-4",
        className
      )}
    >
      <Card className="flex items-center gap-2 h-[54px]">
        <p>Wallet address:</p>
        {wallet ? (
          <p>{formatWallet(wallet)}</p>
        ) : (
          <p className="!text-white/20">Not connected</p>
        )}
      </Card>

      <div className="flex items-center gap-2 w-full">
        {walletsData.map((wallet) => (
          <ButtonWithVibration
            className={cn("w-full flex-1 border-none", wallet.className)}
            key={wallet.wallet}
            size={"lg"}
            onClick={() => handleProccessWallet(wallet.wallet)}
          >
            <wallet.icon
              style={{ fill: wallet.logoColor }}
              className="size-5"
            />
          </ButtonWithVibration>
        ))}
      </div>
    </Container>
  );
};
