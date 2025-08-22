import { Container, FightButton, Page } from "@/components";
import { UserHeroList } from "@/components/shared/battle/UserHeroList";
import { Suspense } from "react";

export const BattleSelectHeroPage = () => {
  return (
    <Page>
      <Container>
        <div className="flex flex-col items-center gap-1">
          <h3>Prepare to fight</h3>
          <p>Search for enemy</p>
        </div>
      </Container>
      <Suspense>
        <UserHeroList className="mt-8" />
      </Suspense>
    </Page>
  );
};
