import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CCol, CContainer, CRow } from "@coreui/react";

import { getUserById } from "../api/users/getUserById";

import Loading from "../components/Loading/Loading";

// Define the type of the parameters object that will be passed in the URL
export type MyParams = {
  id: string;
};

// Define the component as a function
const UserDetailView: React.FC = () => {
  // Get the ID parameter from the URL using the useParams hook
  const { id } = useParams<keyof MyParams>() as MyParams;

  // Use the useQuery hook from react-query to fetch user data
  const query = useQuery([`user`, id], () => getUserById(id), { refetchOnWindowFocus: false });

  // Render the component
  return (
    // Use the CContainer component from CoreUI to create a container with padding
    <CContainer className="p-5" fluid>
      {/* Show a loading indicator if the query is still loading */}
      {query.isLoading && <Loading />}
      {/* If the data has been loaded, render the user details */}
      {query.data && (
        <CRow className="bg-white">
          <CCol xs={{ span: 4 }}>
            <h5>Name:</h5>
            <div>Luke Skywalker</div>
          </CCol>
          <CCol xs={{ span: 4 }}>
            <h5>Birth Year:</h5>
            <div>19 BBY</div>
          </CCol>
          <CCol xs={{ span: 4 }}>
            <h5>Height:</h5>
            <div>172</div>
          </CCol>
          <CCol xs={{ span: 4 }}>
            <h5>Mass:</h5>
            <div>77</div>
          </CCol>
          <CCol xs={{ span: 4 }}>
            <h5>Gender:</h5>
            <div>Male</div>
          </CCol>
          <CCol xs={{ span: 4 }}>
            <h5>Eye Color:</h5>
            <div>Blue</div>
          </CCol>
          <CCol xs={{ span: 4 }}>
            <h5>Skin Color:</h5>
            <div>Fair</div>
          </CCol>
          <CCol xs={{ span: 4 }}>
            <h5>Hair Color:</h5>
            <div>Blond</div>
          </CCol>
        </CRow>
      )}
    </CContainer>
  );
};

// Export the component as the default export of the module
export default UserDetailView;
