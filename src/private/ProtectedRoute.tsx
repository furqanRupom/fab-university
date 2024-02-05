import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";
import { selectCurrentUser } from "../redux/features/auth/authSlice";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(selectCurrentUser);
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};
