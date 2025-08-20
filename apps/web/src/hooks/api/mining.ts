import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { miningService } from "@/services/mining.service";
import { getUserQueryOptions } from "./user";
import { toast } from "react-hot-toast";

export const getMiningQueryOptions = () => {
  return queryOptions({
    queryKey: ["mining"],
    queryFn: miningService.getMining,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
};

export const useStartMining = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: miningService.startMining,
    onSuccess: () => {
      queryClient.invalidateQueries(getMiningQueryOptions());
    },
    onError: (error: string) => {
      toast.error(error);
    },
  });
};

export const useStopMining = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: miningService.stopMining,
    onSuccess: () => {
      queryClient.invalidateQueries(getMiningQueryOptions());
      queryClient.invalidateQueries(getUserQueryOptions());
    },
    onError: (error: string) => {
      toast.error(error);
    },
  });
};
