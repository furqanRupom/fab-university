import { ReactNode } from 'react';


import { Navigate } from 'react-router-dom';
import { logout, useCurrentUserToken } from '../redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { verifyToken } from '../utils/verifyToken';

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

export const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentUserToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }

  const dispatch = useAppDispatch();

  if (role !== undefined && role !== user?.role) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

