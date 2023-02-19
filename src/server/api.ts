import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";

import { getSdk } from "../generated/graphql";

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

const gqlClient = new GraphQLClient(`${getBaseUrl()}/api/graphql`);
export const { GetUsers } = getSdk(gqlClient);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
