import { heroService } from "@/services";
import { queryOptions } from "@tanstack/react-query";

export const getUserHeroesQueryOptions = () => {
  return queryOptions({
    queryKey: ["heroes"],
    queryFn: () => heroService.getUserHeroes(),
    staleTime: 1000 * 60 * 5,
  });
};
