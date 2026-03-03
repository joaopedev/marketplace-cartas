import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { PrivateRoute } from "./PrivateRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Marketplace from "../pages/Marketplace";
import Trades from "../pages/Trade";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Navigate to="/marketplace" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/marketplace"
          element={
            <PrivateRoute>
              <Marketplace />
            </PrivateRoute>
          }
        />
        <Route
          path="/trades"
          element={
            <PrivateRoute>
              <Trades />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
