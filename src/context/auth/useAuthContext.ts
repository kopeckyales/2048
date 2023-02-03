import { useContext } from "react";
import { Auth, AuthContext, AuthContextType } from "./authContext";

export const useAuthContext = () => {
  return useContext(AuthContext) as AuthContextType;
};

export const isAuthenticated = (auth: AuthContextType["auth"]): auth is Auth => auth !== null;
