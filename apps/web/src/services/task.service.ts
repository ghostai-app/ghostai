import { axiosWithAuth } from "@/lib/api/interceptors";
import { ITask, TaskType } from "@/types";

class TaskService {
  private BASE_URL = "/task";

  async getTasks(type?: TaskType) {
    const params = new URLSearchParams();

    if (type) {
      params.append("type", type);
    }

    const response = await axiosWithAuth.get<ITask[]>(
      `/task/all?${params.toString()}`
    );
    return response.data;
  }

  async startTask(id: number) {
    const response = await axiosWithAuth.post(`/task/start/${id}`);
    return response.data;
  }

  async checkTask(id: number) {
    const response = await axiosWithAuth.post(`/task/check/${id}`);
    return response.data;
  }
}

export const taskService = new TaskService();
