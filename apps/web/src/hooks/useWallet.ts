import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import {
  getUserQueryOptions,
  useConnectWallet,
  useDisconnectWallet,
} from "./api";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export const useWallet = () => {
  const wallet = useTonAddress();
  const [tonConnectUI] = useTonConnectUI();
  const { mutate: connectWallet } = useConnectWallet();
  const { mutateAsync: disconnectWallet } = useDisconnectWallet();
  const { data: user } = useQuery(getUserQueryOptions());

  const handleProccessWallet = async (singleWallet?: string) => {
    if (wallet) {
      await tonConnectUI.disconnect();
      await disconnectWallet();
      if (!singleWallet) {
        await tonConnectUI.openModal();
      } else {
        await tonConnectUI.openSingleWalletModal(singleWallet);
      }
    } else {
      if (!singleWallet) {
        await tonConnectUI.openModal();
      } else {
        await tonConnectUI.openSingleWalletModal(singleWallet);
      }
    }
  };

  const handleConnectWallet = async () => {
    if (wallet) {
      connectWallet({ wallet });
    }
  };

  useEffect(() => {
    if (wallet && !user?.walletAddress) {
      handleConnectWallet();
    }
  }, [wallet, user?.walletAddress]);

  return { wallet, handleProccessWallet };
};
