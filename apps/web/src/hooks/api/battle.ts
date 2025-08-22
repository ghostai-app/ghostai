import { queryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { battleService } from "@/services/battle.service";

export const getBattleStatusQueryOptions = (id: number) => {
  return queryOptions({
    queryKey: ["battle", id],
    queryFn: () => battleService.getResults(id),
    enabled: !!id,
  });
};

export const useDamageEnemy = (id: number, clicks: number) => {
  return useMutation({
    mutationFn: () => battleService.damageEnemy(id, clicks),
  });
};
