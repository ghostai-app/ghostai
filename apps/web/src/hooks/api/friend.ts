import { friendService } from "@/services/friend.service";
import { queryOptions } from "@tanstack/react-query";

export const getFriendsQueryOptions = () => {
  return queryOptions({
    queryKey: ["friends"],
    queryFn: () => friendService.getFriends(),
    staleTime: Infinity,
  });
};
