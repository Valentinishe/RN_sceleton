import { ASC, DESC } from '@config/constants';

export type OrderFieldType = string;
export type OrderTypeType = typeof ASC | typeof DESC | null;

export interface IPagination {
  page: number;
  pages: number;
  count: number;
  countTotal: number;
}
