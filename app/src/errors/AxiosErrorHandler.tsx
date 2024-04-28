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
                })
              );

              break;
            case 403:
              // Handle Unauthorized here
              console.log("Forbidden from Axios", error);
              setNotification({
                message: "Vous devez vous connecter",
                type: "danger",
              });
            case 404:
              // Handle Not found here
              console.log("Not found from Axios", error);
            case 500:
              console.log("Server error from Axios", error);
              // Handle Server error here
              break;
            // ... And so on
          }
        } else {
          switch (error.code) {
            case "ERR_NETWORK":
              console.log("Erreur reseau", error);
            case "ETIMEDOUT":
              setNotification({
                message: "Impossible de joindre le serveur",
                type: "danger",
              });
            case "ECONNABORTED":
              setNotification({
                message: "Impossible de joindre le serveur",
                type: "danger",
              });
            default:
              break;
          }
        }
        return error;
      }
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
