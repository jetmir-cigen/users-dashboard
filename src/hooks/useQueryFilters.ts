import { useEffect, useState } from "react";
import qs from "qs";
import { useLocation, useNavigate } from "react-router-dom";
import { BaseFilters } from "../models";

const initialState = {
  page: 1,
};

export const useQueryFilters = <T extends BaseFilters>(props = initialState as T) => {
  const [filters, setFilters] = useState<T>(props);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    readQueryString();
  }, []);

  const readQueryString = () => {
    let qsFilters = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    }) as unknown as T;

    if (!qsFilters["page"]) {
      qsFilters = { ...qsFilters, page: 1 };
    }

    setFilters({ ...qsFilters });
  };

  const onFilterChange = (prop: Partial<T>) => {
    const newState = { ...filters, ...prop } as T;

    pushHistory(newState);
  };

  const pushHistory = (filters: T) => {
    const query = { ...filters };

    const queryString = qs.stringify(query, {
      addQueryPrefix: true,
      skipNulls: true,
    });

    setFilters({ ...filters });
    navigate({ search: queryString });
  };

  return { filters, onFilterChange, location };
};
