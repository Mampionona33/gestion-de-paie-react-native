import axios from "axios";

class EmployeServices {
  private REACT_APP_API_BASE_URL: string | undefined;
  private REACT_APP_API_LOGIN: string | undefined;
  private REACT_APP_API_PASSWORD: string | undefined;

  constructor() {}

  async getAll() {
    this.REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    this.REACT_APP_API_LOGIN = process.env.REACT_APP_API_LOGIN;
    this.REACT_APP_API_PASSWORD = process.env.REACT_APP_API_PASSWORD;

    try {
      if (
        !this.REACT_APP_API_BASE_URL ||
        !this.REACT_APP_API_LOGIN ||
        !this.REACT_APP_API_PASSWORD
      ) {
        throw new Error("Missing environment variables in EmployeServices");
      }

      const response = await axios.get(
        `${this.REACT_APP_API_BASE_URL}/personnels`,
        {
          auth: {
            username: this.REACT_APP_API_LOGIN,
            password: this.REACT_APP_API_PASSWORD,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const employeService = new EmployeServices();
export default employeService;
