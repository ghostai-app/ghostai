import React from "react";
import { cn } from "@/lib";
import { Card, ItemAvatar } from "../common";
import { IFriend, ITask } from "@/types";
import { formatBalance } from "@/utils";
import { ButtonWithVibration } from "@/components/ui";

interface Props {
  className?: string;
  friend: IFriend;
}

export const FriendItem = ({ className, friend }: Props) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 border-t border-outline py-3",
        className
      )}
    >
      <ItemAvatar image={friend.photoUrl} />
      <p>{friend.firstName}</p>
      <p className="ml-auto text-white">+{formatBalance(friend.earned)} $GAI</p>
    </div>
  );
};
