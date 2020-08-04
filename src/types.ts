export interface SelectOptions {
  columns: string[];
  where: Record<string, unknown>;
  limit: number;
  offset: number;
}

export interface MutationOptions {
  returning: string[];
}
