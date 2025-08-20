import React from "react";
import { cn } from "@/lib";
import { useQuery } from "@tanstack/react-query";
import { getTasksQueryOptions } from "@/hooks";
import { TaskItem } from "./TaskItem";
import { TaskType } from "@/types";

interface Props {
  className?: string;
  type?: TaskType;
}

export const TaskList = ({ className, type }: Props) => {
  const { data: tasks } = useQuery(getTasksQueryOptions(type));

  return (
    <div className={cn("w-full flex flex-col gap-2", className)}>
      {tasks?.map((task) => <TaskItem key={task.id} task={task} />)}
    </div>
  );
};
