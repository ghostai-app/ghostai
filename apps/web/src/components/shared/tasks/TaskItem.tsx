import React from "react";
import { cn } from "@/lib";
import { Card, ItemAvatar } from "../common";
import { ITask } from "@/types";
import { formatBalance } from "@/utils";
import { ButtonWithVibration } from "@/components/ui";
import { useCheckTask, useStartTask } from "@/hooks";
import CheckIcon from "@/_assets/icons/check.svg?react";
import { openLink, openTelegramLink } from "@telegram-apps/sdk-react";

interface Props {
  className?: string;
  task: ITask;
}

export const TaskItem = ({ className, task }: Props) => {
  const { mutate: startTask } = useStartTask();
  const { mutateAsync: checkTask } = useCheckTask();

  const handleOpenLink = () => {
    if (!task.link) return;

    if (task.link?.startsWith("https://t.me")) {
      openTelegramLink(task.link);
    } else {
      openLink(task.link);
    }
  };

  const handleStartTask = () => {
    startTask(task.id);
    handleOpenLink();
  };

  const handleCheckTask = async () => {
    try {
      await checkTask(task.id);
    } catch {
      handleOpenLink();
    }
  };

  const renderButton = () => {
    if (!task.status) {
      return (
        <ButtonWithVibration
          variant="accent"
          size="sm"
          onClick={handleStartTask}
        >
          Start
        </ButtonWithVibration>
      );
    } else if (task.status === "IN_PROGRESS") {
      return (
        <ButtonWithVibration
          variant="grayOutline"
          size="sm"
          onClick={handleCheckTask}
        >
          Check
        </ButtonWithVibration>
      );
    } else if (task.status === "COMPLETED") {
      return (
        <ButtonWithVibration variant="grayOutline" size="sm" disabled>
          Completed
        </ButtonWithVibration>
      );
    }
  };

  return (
    <Card className={cn("flex items-center gap-2", className)}>
      <ItemAvatar image={task.imageUrl} />
      <div className="flex flex-col gap-0.5 min-w-0 w-full max-w-full">
        <p className="truncate w-full">{task.title}</p>
        <p className="text-accent text-xs">
          +{formatBalance(task.reward)} $GAI
        </p>
      </div>
      <div className="ml-auto">{renderButton()}</div>
    </Card>
  );
};
