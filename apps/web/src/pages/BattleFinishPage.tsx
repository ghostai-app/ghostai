import { Container, Page } from "@/components";
import {
  BattleSection,
  PrepareHeroCards,
  WonBattle,
} from "@/components/shared/battle/battle-area";
import { LostBattle } from "@/components/shared/battle/battle-area/LostBattle";
import { getBattleStatusQueryOptions, useBattle } from "@/hooks";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const BattleFinishPage = () => {
  const { id } = useParams();
  const { data: battle } = useQuery(getBattleStatusQueryOptions(Number(id)));

  return (
    <Page>
      <div className="fixed top-0 inset-x-0 w-full h-full flex items-center justify-center">
        {battle?.winner ? <WonBattle /> : <LostBattle />}
      </div>
    </Page>
  );
};
