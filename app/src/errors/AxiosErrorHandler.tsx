import { useEffect } from "react";
import axios from "axios";
import { useToast } from "react-native-toast-notifications";
import { useAppDispatch } from "../hooks/useReduxHooks";
import { setNotification } from "../redux/notification/notificationReducer";

interface IAxiosErrorHandlerProps {
  children: JSX.Element;
}

const AxiosErrorHandler = ({ children }: IAxiosErrorHandlerProps) => {
  //   const toast = useToast();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Request interceptor
    const requestInterceptor = axios.interceptors.request.use((request) => {
      // Do something here with request if you need to
      return request;
    });

    // Response interceptor
    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        // Handle response here

        return response;
      },
      (error) => {
        // Handle errors here
        if (error.response?.status) {
          switch (error.response.status) {
            case 401:
              dispatch(
                setNotification({
                  message: "Mot de passe ou email incorrect",
                  type: "danger",
                }),
              );

              break;
            case 403:
              dispatch(
                setNotification({
                  message: "Vous devez vous connecter",
                  type: "danger",
                }),
              );
              break;
            case 404:
              dispatch(
                setNotification({
                  message: "Page introuvable",
                  type: "danger",
                }),
              );
              break;
            case 500:
              console.log("Server error from Axios", error);
              dispatch(
                setNotification({ message: "Erreur serveur", type: "danger" }),
              );
              break;
            // ... And so on
          }
        } else {
          switch (error.code) {
            case "ERR_NETWORK":
              dispatch(
                setNotification({ message: "Erreur reséaux", type: "danger" }),
              );
              break;
            case "ETIMEDOUT":
              dispatch(
                setNotification({
                  message: "Impossible de joindre le serveur",
                  type: "danger",
                }),
              );
              break;
            case "ECONNABORTED":
              dispatch(
                setNotification({
                  message: "Impossible de joindre le serveur",
                  type: "danger",
                }),
              );
              break;
            default:
              break;
          }
        }
        return error;
      },
    );

    return () => {
      // Remove handlers here
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return children;
};

export default AxiosErrorHandler;
