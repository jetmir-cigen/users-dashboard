export interface ListResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export class BaseFilters {
  page: number = 1;
}
