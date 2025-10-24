import { PUBLIC_URL } from "@/lib";
import { authService } from "@/services";
import { IAuthParams } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useLoginUser = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["login user"],
    mutationFn: (params: IAuthParams) => authService.auth(params),
  });
};
