import { TonConnectUIProvider } from "@tonconnect/ui-react";

import { App } from "@/components/shared/sdk/App.tsx";
import { ErrorBoundary } from "@/components/shared/sdk/ErrorBoundary.tsx";
import { publicUrl } from "@/helpers/publicUrl.ts";
import { ENV } from "@/lib";
import { LoadingPage } from "@/pages/LoadingPage";
import { AppRoot } from "@telegram-apps/telegram-ui";
import {
  isMiniAppDark,
  retrieveLaunchParams,
  useSignal,
} from "@telegram-apps/sdk-react";
import { useMemo } from "react";
import { Provider } from "@/components/layouts";
import { HashRouter } from "react-router-dom";

function ErrorBoundaryError({ error }: { error: unknown }) {
  return (
    <>
      {ENV.VITE_NODE_ENV === "development" ? (
        <div>
          <p>An unhandled error occurred:</p>
          <blockquote>
            <code>
              {error instanceof Error
                ? error.message
                : typeof error === "string"
                  ? error
                  : JSON.stringify(error)}
            </code>
          </blockquote>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export function Root() {
  const isDark = useSignal(isMiniAppDark);
  const lp = useMemo(() => retrieveLaunchParams(), []);

  return (
    <ErrorBoundary fallback={ErrorBoundaryError}>
      <TonConnectUIProvider manifestUrl={publicUrl("tonconnect-manifest.json")}>
        <AppRoot
          appearance={isDark ? "dark" : "light"}
          className="w-full h-full"
          platform={
            ["macos", "ios"].includes(lp.tgWebAppPlatform) ? "ios" : "base"
          }
        >
          <Provider>
            <HashRouter>
              <App />
            </HashRouter>
          </Provider>
        </AppRoot>
      </TonConnectUIProvider>
    </ErrorBoundary>
  );
}
