import React from "react";
import { cn } from "@/lib";
import { getUserQueryOptions } from "@/hooks";
import { formatBalance } from "@/utils";
import { useQuery } from "@tanstack/react-query";

interface Props {
  className?: string;
}

export const Balance = ({ className }: Props) => {
  const { data: user } = useQuery(getUserQueryOptions());

  return (
    <div
      className={cn("w-full flex flex-col items-center text-center", className)}
    >
      <p className="!text-white/55 text-center !font-semibold">Balance</p>
      <h1 className="text-center">{formatBalance(user?.balance ?? 0)} $GAI</h1>
    </div>
  );
};
