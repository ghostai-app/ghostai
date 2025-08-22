import { Container, Page } from "@/components";
import {
  BattleSection,
  PrepareHeroCards,
} from "@/components/shared/battle/battle-area";
import { useBattle } from "@/hooks";
import { useParams } from "react-router-dom";

export const BattleAreaPage = () => {
  const { heroId } = useParams();
  const { battle } = useBattle(Number(heroId));

  const renderSection = () => {
    switch (battle?.status) {
      case "PENDING":
        return <PrepareHeroCards player1Hero={battle.userHero} />;
      case "IN_PROGRESS":
        return <BattleSection battle={battle} />;
    }
  };

  return (
    <Page>
      <Container>{renderSection()}</Container>
    </Page>
  );
};
