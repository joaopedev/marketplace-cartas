import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { api } from "../api/axios";
import { useAuthStore } from "../store/auth.store";
import type { AuthResponse } from "../types/auth.types";
import type { LoginDTO } from "../dto/login.dto";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  async function login(data: LoginDTO) {
    try {
      setLoading(true);

      const response = await api.post<AuthResponse>("login", data);

      setAuth(response.data);

      toast.success("Login realizado com sucesso!");

      navigate("/marketplace");
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        "Erro ao fazer login. Verifique suas credenciais.";

      toast.error(message);
    } finally {
      setLoading(false);
    }
  }

  return { login, loading };
}