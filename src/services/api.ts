import { HttpClient } from "@/client/httpClient";
import { HttpClientFactory } from "@/client/httpClientFactory";

export class ApiService {
  constructor(private httpClient: HttpClient = HttpClientFactory.create()) {}

  async fetchData<T>(endpoint: string) {
    return this.httpClient.get<T>(endpoint);
  }

  async sendData<T, D = any>(endpoint: string, data: D) {
    return this.httpClient.post<T>(endpoint, data);
  }
}

export const api = new ApiService();
