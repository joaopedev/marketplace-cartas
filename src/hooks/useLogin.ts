import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

      navigate("/marketplace");
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.message || "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  }

  return { login, loading };
}