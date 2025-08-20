import {
  Balance,
  Container,
  FriendList,
  InviteButton,
  LeaderList,
  MiningButton,
  Page,
  TaskList,
} from "@/components";

import { getMiningQueryOptions } from "@/hooks";
import { useQuery } from "@tanstack/react-query";
import hero from "/assets/hero.jpg";
import { TypeSwitcher } from "@/components/shared/common/TypeSwitcher";
import { useState } from "react";

type PageType = "tasks" | "leaders" | "friends";

export const EarnPage = () => {
  const [currentType, setCurrentType] = useState<PageType>("tasks");

  return (
    <Page>
      <Container>
        <TypeSwitcher
          types={[
            {
              title: "Tasks",
              value: "tasks",
            },
            {
              title: "Leaders",
              value: "leaders",
            },
            {
              title: "Friends",
              value: "friends",
            },
          ]}
          currentType={currentType}
          onChange={(value) => setCurrentType(value as PageType)}
          className="mb-8"
        />

        {currentType === "tasks" && <TaskList />}
        {currentType === "leaders" && <LeaderList />}
        {currentType === "friends" && (
          <>
            <InviteButton />
            <FriendList />
          </>
        )}
      </Container>
    </Page>
  );
};
