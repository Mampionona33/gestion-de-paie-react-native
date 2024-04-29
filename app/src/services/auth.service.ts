import axios, { AxiosError } from "axios";

export interface ILogin {
  email: string;
  password: string;
}

class AuthServices {
  private REACT_APP_API_BASE_URL: string | undefined;
  constructor() {}

  async login({ email, password }: ILogin): Promise<string> {
    this.REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    try {
      if (!this.REACT_APP_API_BASE_URL) {
        throw new Error("this.REACT_APP_API_BASE_URL is not defined");
      }

      const response = await axios.post(
        `${this.REACT_APP_API_BASE_URL}/login`,
        {
          email,
          password,
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async logout() {}
  async register() {}
  async forgotPassword() {}
  async resetPassword() {}
}

const authService = new AuthServices();
export default authService;
