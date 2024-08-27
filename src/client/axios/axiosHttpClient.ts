import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { HttpClient } from "../httpClient";

export class AxiosHttpClient implements HttpClient {
  private axiosClient: AxiosInstance;

  constructor(readonly baseURL: string) {
    this.axiosClient = axios.create({
      baseURL,
    });
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosClient.get<T>(url, config);
    return response.data;
  }

  async post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.axiosClient.post<T>(url, data, config);
    return response.data;
  }
}
