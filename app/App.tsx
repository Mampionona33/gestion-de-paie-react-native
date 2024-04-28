import { QueryClient, QueryClientProvider } from "react-query";
import AppNavigator from "./src/navigation/AppNavigator";
import React from "react";
import ErrorBoundary from "react-native-error-boundary";
import ErrorFallback from "./src/errors/ErrorFallback";
import AxiosErrorHandler from "./src/errors/AxiosErrorHandler";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AxiosErrorHandler>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <AppNavigator />
        </ErrorBoundary>
      </AxiosErrorHandler>
    </QueryClientProvider>
  );
}

export default App;
