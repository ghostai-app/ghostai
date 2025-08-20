import { queryOptions } from "@tanstack/react-query";
import { leaderService } from "@/services/leader.service";

export const getLeadersQueryOptions = () => {
  return queryOptions({
    queryKey: ["leaders"],
    queryFn: () => leaderService.getLeaderboard(),
    staleTime: Infinity,
  });
};
