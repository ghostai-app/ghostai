import React from "react";
import { cn } from "@/lib";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getProductsQueryOptions } from "@/hooks";
import { ProductType } from "@/types";
import { ShopItem } from "./ShopItem";

interface Props {
  className?: string;
  type: ProductType;
}

export const ShopList = ({ className, type }: Props) => {
  const { data: products } = useSuspenseQuery(getProductsQueryOptions(type));

  return (
    <div className={cn("grid grid-cols-2 gap-2", className)}>
      {products.map((product) => (
        <ShopItem key={product.id} product={product} />
      ))}
    </div>
  );
};
