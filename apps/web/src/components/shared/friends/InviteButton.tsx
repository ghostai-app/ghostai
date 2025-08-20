import React from "react";
import { cn } from "@/lib";
import { Card } from "../common";
import { useQuery } from "@tanstack/react-query";
import { getFriendsQueryOptions } from "@/hooks";
import { ButtonWithVibration } from "@/components/ui";
import ShareIcon from "@/_assets/icons/share.svg?react";
import { shareURL } from "@telegram-apps/sdk-react";

interface Props {
  className?: string;
}

export const InviteButton = ({ className }: Props) => {
  const { data: friend } = useQuery(getFriendsQueryOptions());

  const handleShare = () => {
    shareURL(friend?.referralLink || "", "Join GHOST AI and earn rewards!");
  };

  return (
    <div
      className={cn(
        "w-70 bottom-[120px] left-1/2 -translate-x-1/2 absolute",
        className
      )}
    >
      <ButtonWithVibration
        variant={"default"}
        size={"default"}
        onClick={handleShare}
        className="w-full"
      >
        INVITE FRIEND
      </ButtonWithVibration>
    </div>
  );
};
