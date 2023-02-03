import { GraphQLClient } from "graphql-request";
import { createContext, useEffect } from "react";
import { useAuthContext } from "../auth/useAuthContext";

export type GQLContextType = {
  client: GraphQLClient;
};

export const GQLContext = createContext<GQLContextType | null>(null);

type ProviderProps = {
  client: GraphQLClient;
  children: React.ReactNode;
};

export const GQLClientProvider: React.FC<ProviderProps> = ({ children, client }) => {
  const { auth } = useAuthContext();

  useEffect(() => {
    client.setHeader("Authorization", auth?.token === undefined ? "" : `Bearer ${auth.token}`);
  }, [auth?.token, client]);

  return <GQLContext.Provider value={{ client }}>{children}</GQLContext.Provider>;
};
