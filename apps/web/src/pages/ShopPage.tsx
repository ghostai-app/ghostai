import { Container, Page, ShopList } from "@/components";
import { TypeSwitcher } from "@/components/shared/common/TypeSwitcher";
import { getUserQueryOptions } from "@/hooks";
import { ProductType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Suspense, useState } from "react";

export const ShopPage = () => {
  const [type, setType] = useState<ProductType>("TOKEN");
  const { data: user } = useQuery(getUserQueryOptions());

  return (
    <Page>
      <Container>
        <TypeSwitcher
          types={[
            { title: "$GAME", value: "TOKEN" },
            { title: "CRYSTAL", value: "CRYSTAL" },
          ]}
          currentType={type}
          onChange={(value) => setType(value as ProductType)}
        />
        {type === "CRYSTAL" ? (
          <h3 className="text-center mt-6">Your CRYSTAL : {user?.crystal}</h3>
        ) : (
          <h3 className="text-center mt-6">Your $GAI : {user?.balance}</h3>
        )}
        <Suspense>
          <ShopList className="mt-6" type={type} />
        </Suspense>
      </Container>
    </Page>
  );
};
