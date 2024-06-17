import { useShallow } from "zustand/react/shallow";
import { useSesionStore } from "../../store/useSesion";
import { login_Data, Login_Response } from "../../services/auth/types";
import { useMutation } from "@tanstack/react-query";
import authService from "../../services/auth/authService";
import apiClient from "../../services/axiosConfig";

export const useAuthMutations = () => {
  const { setSession } = useSesionStore(useShallow((store) => store));


  const loginMutation = useMutation({
    mutationFn: async (data: login_Data) => {
      // return authService.login(data)
      const response = await apiClient.post<Login_Response>('/auth/login', data);
      return response.data;
    },
  })


  return {
    loginMutation,
  };
};
