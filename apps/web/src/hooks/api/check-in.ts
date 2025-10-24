import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { checkInService } from "@/services";
import { getUserQueryOptions } from "./user";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PUBLIC_URL } from "@/lib";

export const getCheckInQueryOptions = () => {
  return queryOptions({
    queryKey: ["check-in"],
    queryFn: () => checkInService.getCheckIn(),
    staleTime: Infinity,
  });
};

export const useClaimCheckIn = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["claim-check-in"],
    mutationFn: checkInService.claimCheckIn,
    onSuccess: () => {
      queryClient.invalidateQueries(getCheckInQueryOptions());
      queryClient.invalidateQueries(getUserQueryOptions());
    },
    onError: () => {
      toast.error("Failed to claim check-in");
    },
  });
};
