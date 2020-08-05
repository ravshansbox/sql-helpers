export type Values = Record<string, unknown>;

export type Columns = string[];

export type Where = unknown[];

export interface SelectOptions {
  columns: Columns;
  where: Where;
  limit: number;
  offset: number;
}

export type Returning = string[];

export interface MutationOptions {
  returning: Returning;
}
