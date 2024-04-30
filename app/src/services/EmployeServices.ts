import axios from "axios";
import { Buffer } from "buffer";

class EmployeServices {
  private REACT_APP_API_BASE_URL: string | undefined;
  private REACT_APP_API_LOGIN: string | undefined;
  private REACT_APP_API_PASSWORD: string | undefined;

  constructor() {}

  async getAll() {
    console.log("run getAll");
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

      const encodedCredentials = Buffer.from(
        `${this.REACT_APP_API_LOGIN}:${this.REACT_APP_API_PASSWORD}`,
      ).toString("base64");

      const response = await axios.get(
        `${this.REACT_APP_API_BASE_URL}/personnel`,
        {
          headers: {
            Authorization: `Basic ${encodedCredentials}`,
          },
        },
      );
      console.log("response from getAll", response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const employeService = new EmployeServices();
export default employeService;
