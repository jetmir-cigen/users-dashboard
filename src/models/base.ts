/**
Defines the structure of the response received from a list API endpoint.
@template T - The type of the results array in the response.
@property {number} count - The total number of items in the results array.
@property {string} next - The URL of the next page of results, or null if there is no next page.
@property {string} previous - The URL of the previous page of results, or null if there is no previous page.
@property {T[]} results - An array of results.
*/
export interface ListResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

/**
  A base class for defining filters that can be applied to list API endpoints.
  @property {number} page - The page number of the results to retrieve.
  */
export class BaseFilters {
  page: number = 1;
}
