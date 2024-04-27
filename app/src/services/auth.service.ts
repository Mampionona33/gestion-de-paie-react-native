import axios from "axios";

export interface ILogin {
  email: string;
  password: string;
}

class AuthServices {
  private REACT_APP_API_BASE_URL: string | undefined;

  constructor() {
    this.REACT_APP_API_BASE_URL =
      process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";
  }

  async login({ email, password }: ILogin) {
    try {
      console.log("REACT_APP_API_BASE_URL", this.REACT_APP_API_BASE_URL);
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
