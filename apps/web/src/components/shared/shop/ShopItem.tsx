import React from "react";
import { cn } from "@/lib";
import { IProduct } from "@/types";
import { formatBalance } from "@/utils";
import { ButtonWithVibration } from "@/components/ui";
import { useBuyProduct } from "@/hooks";

interface Props {
  className?: string;
  product: IProduct;
}

export const ShopItem = ({ className, product }: Props) => {
  const { mutate: buyProduct } = useBuyProduct(product.id);

  return (
    <div
      className={cn(
        "border border-outline flex flex-col items-center w-full rounded-2xl overflow-hidden",
        product.isBought && "opacity-50 pointer-events-none",
        className
      )}
    >
      <img src={product.imageUrl} className="h-[175px] w-full object-cover" />
      <div className="w-full p-3 flex items-end justify-between gap-3">
        <div className="flex flex-col gap-1">
          <p className="!text-xs !text-muted">{product.name}</p>
          <p>{formatBalance(product.price)}</p>
        </div>
        <ButtonWithVibration
          variant={"accent"}
          size={"sm"}
          className="w-15 rounded-lg font-semibold bg-white z-1"
          onClick={() => buyProduct()}
        >
          {product.isBought ? "Bought" : "Buy"}
        </ButtonWithVibration>
      </div>
    </div>
  );
};
