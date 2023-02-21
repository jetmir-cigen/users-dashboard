import { useEffect, useState } from "react";
import qs from "qs";
import { useLocation, useNavigate } from "react-router-dom";
import { BaseFilters } from "../models";

// Define the initial state for filters
const initialState = {
  page: 1,
};

// Define the props type for the useQueryFilters hook
type Props<T extends BaseFilters> = T;

// Define the return type for the useQueryFilters hook
interface UseQueryFiltersReturn<T extends BaseFilters> {
  filters: T;
  onFilterChange: (prop: Partial<T>) => void;
  location: ReturnType<typeof useLocation>;
}

export const useQueryFilters = <T extends BaseFilters>(props = initialState as Props<T>): UseQueryFiltersReturn<T> => {
  // Use state to hold the current filters
  const [filters, setFilters] = useState<T>(props);

  // Get the current location and navigate functions from React Router
  const location = useLocation();
  const navigate = useNavigate();

  // Call readQueryString when the component mounts
  useEffect(() => {
    readQueryString();
  }, []);

  // Parse the query string and update the filters state
  const readQueryString = () => {
    // Use qs library to parse the query string
    let qsFilters = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    }) as unknown as T;

    // If there is no "page" property in the parsed filters, set it to the default value of 1
    if (!qsFilters["page"]) {
      qsFilters = { ...qsFilters, page: 1 };
    }

    // Update the filters state with the parsed query string filters
    setFilters({ ...qsFilters });
  };

  // Update the filters state and push a new history entry with the updated filters
  const onFilterChange = (prop: Partial<T>) => {
    // Merge the existing filters state with the new filters
    const newState = { ...filters, ...prop } as T;

    // Push a new history entry with the updated filters
    pushHistory(newState);
  };

  // Push a new history entry with the specified filters
  const pushHistory = (filters: T) => {
    // Create a new query object with the updated filters
    const query = { ...filters };

    // Use qs library to serialize the query object into a query string
    const queryString = qs.stringify(query, {
      addQueryPrefix: true,
      skipNulls: true,
    });

    // Update the filters state with the new filters
    setFilters({ ...filters });

    // Push a new history entry with the updated query string
    navigate({ search: queryString });
  };

  // Return the filters state, onFilterChange function, and location object
  return { filters, onFilterChange, location };
};
