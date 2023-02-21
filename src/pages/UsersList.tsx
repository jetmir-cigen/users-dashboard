import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import {
  CFormInput,
  CInputGroup,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";

import Pagination from "../components/Pagination/Pagination";

import { BaseFilters, ListResponse, User } from "../models";

import { getAllUsers } from "../api/users/getAllUsers";

import { useQueryFilters } from "../hooks/useQueryFilters";

import { debounce, extractIdFromUrl } from "../helpers";

// Create a class to hold the filters for the user list
class ListFilters extends BaseFilters {
  page: number = 1;
  search?: string = "";
}

const UsersList = () => {
  // Get the filters, location, and onFilterChange function from the useQueryFilters hook
  const { filters, location, onFilterChange } = useQueryFilters<ListFilters>();

  // Use the useQuery hook to fetch the user list
  const query = useQuery<ListResponse<User>>([`users`, filters], () => getAllUsers(location.search), {
    refetchOnWindowFocus: false,
  });

  const navigate = useNavigate();

  // Handle when a user is clicked by navigating to their details page
  const onUserClicked = (id?: string) => {
    if (id) navigate(`/${id}`);
  };

  // Handle changes to the search input with a debounced function
  const handleInputChange = useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      onFilterChange({ search: event.target.value || undefined });
    }, 500),
    []
  );

  return (
    <div className="container-fluid p-5 d-flex flex-column justify-content-between min-vh-100">
      <div>
        <div className="row justify-content-center">
          <div className="col-5">
            <CInputGroup className="mb-3">
              <CFormInput
                placeholder="Search..."
                aria-label="Search..."
                aria-describedby="basic-addon2"
                defaultValue={filters.search}
                onChange={handleInputChange}
              />
            </CInputGroup>
          </div>
        </div>
        <div className="row justify-content-center">
          <CTable hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Url</CTableHeaderCell>
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Birth Year</CTableHeaderCell>
                <CTableHeaderCell scope="col">Eye Color</CTableHeaderCell>
                <CTableHeaderCell scope="col">Gender</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {query?.data?.results.map((item) => (
                <CTableRow onClick={() => onUserClicked(extractIdFromUrl(item.url))} key={item.url}>
                  <CTableHeaderCell scope="row">{item.url}</CTableHeaderCell>
                  <CTableDataCell>{item.name}</CTableDataCell>
                  <CTableDataCell>{item.birth_year}</CTableDataCell>
                  <CTableDataCell>{item.eye_color}</CTableDataCell>
                  <CTableDataCell>{item.gender}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </div>
      </div>
      <div className="row justify-content-center">
        <div>
          <Pagination
            currentPage={filters.page}
            totalPages={Math.ceil((query.data?.count || 0) / 10)}
            onPageChange={(page) => onFilterChange({ page })}
          />
        </div>
      </div>
    </div>
  );
};

export default UsersList;
