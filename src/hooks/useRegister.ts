import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/axios";
import { useAuthStore } from "../store/auth.store";
import type { AuthResponse } from "../types/auth.types";
import type { RegisterDTO } from "../dto/register.dto";

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  async function register(data: RegisterDTO) {
    try {
      setLoading(true);

      const response = await api.post<AuthResponse>("register", data);

      setAuth(response.data);

      navigate("/marketplace");
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.message || "Erro ao cadastrar");
    } finally {
      setLoading(false);
    }
  }

  return { register, loading };
}