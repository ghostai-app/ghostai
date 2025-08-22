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
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: "var(--dark)",
            color: "var(--white)",
            fontWeight: 500,
            width: "100%",
            border: "var(--outline)",
            borderWidth: 1,
            borderRadius: "14px",
            minHeight: "50px",
          },
          success: {
            iconTheme: {
              primary: "var(--green)",
              secondary: "var(--dark)",
            },
          },
          error: {
            iconTheme: {
              primary: "var(--red)",
              secondary: "var(--dark)",
            },
          },
        }}
        containerClassName="!top-[calc(var(--top-padding)+16px)]"
      />
      {children}
    </QueryClientProvider>
  );
};
