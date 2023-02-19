import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Hydrate, QueryClientProvider } from "react-query";

import { queryClient } from "../server/api";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null, dehydratedState: any }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default MyApp;