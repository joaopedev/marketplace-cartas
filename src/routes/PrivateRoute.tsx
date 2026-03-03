import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuthStore } from "../store/auth.store";

interface PrivateRouteProps {
  children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}