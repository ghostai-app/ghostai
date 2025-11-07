import {
  ButtonWithVibration,
  Container,
  FightButton,
  Link,
  Page,
} from "@/components";
import { UserHeroList } from "@/components/shared/battle/UserHeroList";
import { PUBLIC_URL } from "@/lib";
import { Suspense } from "react";
import ShopIcon from "@/_assets/icons/navigation/shop.svg?react";

export const BattleSelectHeroPage = () => {
  return (
    <Page>
      <Link
        to={PUBLIC_URL.shop()}
        className="cursor-pointer fixed top-[var(--top-padding)] right-[var(--horizontal-padding)]"
      >
        <ButtonWithVibration
          variant={"grayOutline"}
          className="cursor-pointer size-11 rounded-full px-0 bg-background"
        >
          <ShopIcon className="size-6 fill-white" />
        </ButtonWithVibration>
      </Link>

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
