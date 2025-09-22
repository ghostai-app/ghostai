import React from "react";
import { cn } from "@/lib";
import { Card, ItemAvatar } from "../common";
import { ILeader } from "@/types";
import { formatShortBalance } from "@/utils/formatBalance";

interface Props {
  className?: string;
  leader: ILeader;
}

export const LeaderItem = ({ className, leader }: Props) => {
  return (
    <>
      <div className={cn("w-full flex items-center", className)}>
        <p className="w-full truncate !text-xs">
          #{leader.rank} {leader?.firstName.toUpperCase() || "—"}
        </p>

        {/* <p className="w-2/3 !text-xs">{1}</p> */}

        <p className="w-1/2 text-end !text-xs text-accent">
          {formatShortBalance(leader.balance)}
        </p>
      </div>

      <hr className="w-full h-[1px] border-none bg-[#292929]" />
    </>
  );
};
