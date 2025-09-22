import React from "react";
import { cn } from "@/lib";
import { useQuery } from "@tanstack/react-query";
import { getLeadersQueryOptions } from "@/hooks";
import { LeaderItem } from "./LeaderItem";

interface Props {
  className?: string;
}

export const LeaderList = ({ className }: Props) => {
  const { data: leaders } = useQuery(getLeadersQueryOptions());

  return (
    <div className={cn(className)}>
      <div className="w-full flex items-center text-muted">
        <p className="w-full !text-xs">USERNAME</p>
        {/* <p className="w-2/3 !text-xs">LVL</p> */}
        {/* <p className="w-2/3 !text-xs">W/L</p> */}
        <p className="w-1/2 text-end !text-xs">$GAI</p>
      </div>

      <hr className="w-full h-[1px] border-none bg-[#292929] my-3" />

      <div className="w-full flex flex-col gap-3">
        {leaders?.leaders?.map((leader, index) => (
          <LeaderItem key={index} leader={leader} />
        ))}
      </div>
    </div>
  );
};
