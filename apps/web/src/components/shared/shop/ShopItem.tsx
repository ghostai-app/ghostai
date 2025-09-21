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
      <img src={product.imageUrl} className="h-[175px] w-full object-contain" />
      <div className="w-full p-3 flex items-end justify-between gap-3 h-15 relative">
        <div className="flex flex-col gap-2 absolute bottom-3 left-3">
          {product.attack && (
            <div className="flex flex-col gap-1">
              <p className="!text-xs !text-muted">Attack</p>
              <p>{formatBalance(product.attack)}</p>
            </div>
          )}
          {product.health && (
            <div className="flex flex-col gap-1">
              <p className="!text-xs !text-muted">Health</p>
              <p>{formatBalance(product.health)}</p>
            </div>
          )}
          <div className="flex flex-col gap-1">
            <p className="!text-xs !text-muted">{product.name}</p>
            <p>{formatBalance(product.price)}</p>
          </div>
        </div>
        <ButtonWithVibration
          variant={"accent"}
          size={"sm"}
          className="w-15 rounded-lg font-semibold bg-white z-1 absolute bottom-3 right-3"
          onClick={() => buyProduct()}
        >
          {product.isBought ? "Bought" : "Buy"}
        </ButtonWithVibration>
      </div>
    </div>
  );
};
