import React from "react";
import { cn } from "@/lib";
import { Card } from "../common";
import { useQuery } from "@tanstack/react-query";
import { getFriendsQueryOptions } from "@/hooks";
import { ButtonWithVibration } from "@/components/ui";
import ShareIcon from "@/_assets/icons/share.svg?react";
import { shareURL } from "@telegram-apps/sdk-react";
import { BottomFixedButton } from "../BottomFixedButton";

interface Props {
  className?: string;
}

export const InviteButton = ({ className }: Props) => {
  const { data: friend } = useQuery(getFriendsQueryOptions());

  const handleShare = () => {
    shareURL(friend?.referralLink || "", "Join GHOST AI and earn rewards!");
  };

  return (
    <BottomFixedButton onClick={handleShare}>INVITE FRIEND</BottomFixedButton>
  );
};
