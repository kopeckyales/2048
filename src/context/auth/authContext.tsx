import { createContext, useState } from "react";

export type Auth = {
  token: string;
  user: {
    id: string;
    name: string;
  };
};

export type AuthContextType = {
  auth: Auth | null;
  setAuth: (auth: Auth) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthContextType["auth"] | null>(null);

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};
