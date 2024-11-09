export interface HttpAdapter {
  get<T>(url: string ): Promise<T>;
//   post(url: string, data: any, headers?: any): Promise<any>;
//   put(url: string, data: any, headers?: any): Promise<any>;
//   delete(url: string, headers?: any): Promise<any>;
}