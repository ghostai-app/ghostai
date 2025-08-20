import {
  queryOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { userService } from "@/services/user.service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PUBLIC_URL } from "@/lib";

export const getUserQueryOptions = () => {
  return queryOptions({
    queryKey: ["user"],
    queryFn: userService.getMe,
    staleTime: Infinity,
  });
};
