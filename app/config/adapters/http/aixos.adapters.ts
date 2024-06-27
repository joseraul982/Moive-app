import aixos, { AxiosInstance } from "axios";
import { HttaAdpter } from "./http.adapter";

interface Options {
  baseUrl: string;
  params: Record<string, string>;
}

export class AixosAdapter implements HttaAdpter {
  private aixosIinstance: AxiosInstance;
  constructor(opinions: Options) {
    this.aixosIinstance = aixos.create({
      baseURL: opinions.baseUrl,
      params: opinions.params,
    });
  }
  async get<T>(
    url: string,
    options?: Record<string, unknown> | undefined
  ): Promise<T> {
    try {
      const { data } = await this.aixosIinstance<T>(url, options);
      return data;
    } catch (error) {
      throw new Error(`Error fetching ger:${url}`);
    }
  }
}
