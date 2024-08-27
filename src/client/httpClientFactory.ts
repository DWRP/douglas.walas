import { AxiosHttpClient } from "./axios/axiosHttpClient";
import { HttpClient } from "./httpClient";

export class HttpClientFactory {
  static create(): HttpClient {
    const baseURL =
      process.env.NEXT_PUBLIC_API_URL || "https://dwrp.github.io/";
    return new AxiosHttpClient(baseURL);
  }
}
