export abstract class HttaAdpter {
  abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;
}
