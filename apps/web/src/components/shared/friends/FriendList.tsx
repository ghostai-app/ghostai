import React from "react";
import { cn } from "@/lib";
import { useQuery } from "@tanstack/react-query";
import { getFriendsQueryOptions } from "@/hooks";
import { FriendItem } from "./FriendItem";

interface Props {
  className?: string;
}

export const FriendList = ({ className }: Props) => {
  const { data: friends } = useQuery(getFriendsQueryOptions());

  return (
    <div className={cn("flex flex-col gap-4 w-full", className)}>
      <div className="flex items-center justify-between w-full">
        <p className="text-shadow">Invited friends</p>
        <p className="text-muted">{friends?.total}</p>
      </div>
      <div className="w-full flex flex-col gap-1">
        {friends?.friends?.map((friend) => (
          <FriendItem key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};
