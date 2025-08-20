import { useMutation, useQueryClient } from "@tanstack/react-query";
import { walletService } from "@/services";
import toast from "react-hot-toast";

export const useConnectWallet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: walletService.connect,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: () => {
      toast.error("Failed to connect wallet");
    },
  });
};

export const useDisconnectWallet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: walletService.disconnect,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: () => {
      toast.error("Failed to disconnect wallet");
    },
  });
};
