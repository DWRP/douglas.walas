export interface HttpClient {
  get<T = any>(url: string, config?: any): Promise<T>;
  post<T = any>(url: string, data: any, config?: any): Promise<T>;
}