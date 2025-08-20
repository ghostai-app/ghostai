import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

export const Provider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
            gcTime: 1000 * 60 * 10,
            retry: 1,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
          },
          mutations: {
            retry: 1,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster containerClassName="!top-[calc(var(--top-padding)+16px)]" />
      {children}
    </QueryClientProvider>
  );
};
