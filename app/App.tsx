import { QueryClient, QueryClientProvider } from "react-query";
import AppNavigator from "./src/navigation/AppNavigator";
import React from "react";
import ErrorBoundary from "react-native-error-boundary";
import ErrorFallback from "./src/errors/ErrorFallback";
import AxiosErrorHandler from "./src/errors/AxiosErrorHandler";
import { useAppDispatch, useAppSelector } from "./src/hooks/useReduxHooks";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import Toast, {
  ToastProvider,
  useToast,
} from "react-native-toast-notifications";
import { resetNotification } from "./src/redux/notification/notificationReducer";
import { store } from "./src/redux/store";

const queryClient = new QueryClient();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    accent: "yellow",
  },
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <AxiosErrorHandler>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <AppWithToast />
            </ErrorBoundary>
          </AxiosErrorHandler>
        </PaperProvider>
      </Provider>
    </QueryClientProvider>
  );
}

const AppWithToast = () => {
  return (
    <ToastProvider>
      <InnerAppWithToast />
    </ToastProvider>
  );
};

const InnerAppWithToast = () => {
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
  }, [message, toast, type, dispatch]);

  return <AppNavigator />;
};

export default App;
