import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { rouletteService } from "@/services";
import { toast } from "react-hot-toast";

export const getRouletteItemsQueryOptions = () => {
  return queryOptions({
    queryKey: ["roulette-items"],
    queryFn: rouletteService.getItems,
  });
};

export const useSpinRoulette = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: rouletteService.spin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error: string) => {
      toast.error(error);
    },
  });
};
