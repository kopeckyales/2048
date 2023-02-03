import { useContext } from "react";
import { GQLContext, GQLContextType } from "./gqlContext";

export const useGQLContext = () => {
  return useContext(GQLContext) as GQLContextType;
};
