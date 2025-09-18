import { Balance, Container, MiningButton, Page } from "@/components";

import { getLastUserHeroQueryOptions, getMiningQueryOptions } from "@/hooks";
import { useQuery } from "@tanstack/react-query";
import hero from "/assets/hero.jpg";

export const HomePage = () => {
  const { data: lastUserHero, isLoading } = useQuery(
    getLastUserHeroQueryOptions()
  );

  return (
    <Page back={false}>
      <Container>
        <div className="left-1/2 -translate-x-1/2 w-70 absolute bottom-30 flex flex-col items-center gap-6">
          <Balance />
          <MiningButton />
        </div>
        <div className="absolute bottom-[150px] left-0 w-full h-3/4 z-[-1]">
          <div className="relative size-full">
            <div className="h-20 bg-gradient-to-t from-transparent to-background absolute top-0 inset-x-0 w-full z-1"></div>
            <div className="h-40 bg-gradient-to-b from-transparent to-background absolute bottom-0 inset-x-0 w-full z-1"></div>
            {!isLoading && (
              <img
                src={lastUserHero || hero}
                className="inset-0 absolute size-full object-contain"
              />
            )}
          </div>
        </div>
      </Container>
    </Page>
  );
};
