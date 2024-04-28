import { QueryClient, QueryClientProvider } from "react-query";
import AppNavigator from "./src/navigation/AppNavigator";
import React from "react";
import ErrorBoundary from "react-native-error-boundary";
import ErrorFallback from "./src/errors/ErrorFallback";
import AxiosErrorHandler from "./src/errors/AxiosErrorHandler";
import { useAppDispatch, useAppSelector } from "./src/hooks/useReduxHooks";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Toast, {
  ToastProvider,
  useToast,
} from "react-native-toast-notifications";
import { resetNotification } from "./src/redux/notification/notificationReducer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ToastProvider>
          <AxiosErrorHandler>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <AppWithToast />
            </ErrorBoundary>
          </AxiosErrorHandler>
        </ToastProvider>
      </Provider>
    </QueryClientProvider>
  );
}

const AppWithToast = () => {
  const toast = useToast();
  const { message, type } = useAppSelector((state) => state.notifications);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if (message) {
      toast.show(message, {
        type,
        placement: "bottom",
        animationType: "slide-in",
        duration: 3000,
      });
      // set timeout pour éffacer le toast une fois affiché
      setTimeout(() => {
        dispatch(resetNotification());
      }, 3000);
    }
  }, [message, toast]);

  return <AppNavigator />;
};

export default App;
