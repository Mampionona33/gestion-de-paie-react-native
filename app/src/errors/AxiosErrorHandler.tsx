import { useEffect } from "react";
import axios from "axios";

interface IAxiosErrorHandlerProps {
  children: JSX.Element;
}

const AxiosErrorHandler = ({ children }: IAxiosErrorHandlerProps) => {
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
              // Handle Unauthenticated here
              console.log("Unauthenticated from Axios", error);
              break;
            case 403:
              // Handle Unauthorized here
              console.log("Forbidden from Axios", error);
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
              console.log("Timeout", error);
            case "ECONNABORTED":
              console.log("Abort", error);
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
