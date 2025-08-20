import {
  queryOptions,
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { taskService } from "@/services/task.service";
import { TaskType } from "@/types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const getTasksQueryOptions = (type?: TaskType) => {
  return queryOptions({
    queryKey: ["tasks", type],
    queryFn: () => taskService.getTasks(type),
    staleTime: 1000 * 60 * 5,
  });
};

export const useStartTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => taskService.startTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task started successfully");
    },
    onError: () => {
      toast.error("Failed to start task");
    },
  });
};

export const useCheckTask = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (id: number) => taskService.checkTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Task completed successfully");
    },
    onError: () => {
      toast.error("Failed to complete task");
    },
  });
};
