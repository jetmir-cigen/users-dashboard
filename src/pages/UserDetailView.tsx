import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CCard, CCardBody, CCol, CContainer, CRow } from "@coreui/react";

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
        <CCard className="mb-3">
          <CCardBody>
            <CRow className="row">
              <CCol sm={{ span: 3 }}>
                <p className="mb-0">Full Name</p>
              </CCol>
              <CCol sm={{ span: 9 }}>
                <p className="text-muted mb-0">Luke Skywalker</p>
              </CCol>
            </CRow>
            <hr />
            <CRow className="row">
              <CCol sm={{ span: 3 }}>
                <p className="mb-0">Birth Year</p>
              </CCol>
              <CCol sm={{ span: 9 }}>
                <p className="text-muted mb-0">19 BBY</p>
              </CCol>
            </CRow>
            <hr />
            <CRow className="row">
              <CCol sm={{ span: 3 }}>
                <p className="mb-0">Height</p>
              </CCol>
              <CCol sm={{ span: 9 }}>
                <p className="text-muted mb-0">172</p>
              </CCol>
            </CRow>
            <hr />
            <CRow className="row">
              <CCol sm={{ span: 3 }}>
                <p className="mb-0">Mass</p>
              </CCol>
              <CCol sm={{ span: 9 }}>
                <p className="text-muted mb-0">77</p>
              </CCol>
            </CRow>
            <hr />
            <CRow className="row">
              <CCol sm={{ span: 3 }}>
                <p className="mb-0">Gender</p>
              </CCol>
              <CCol sm={{ span: 9 }}>
                <p className="text-muted mb-0">Male</p>
              </CCol>
            </CRow>
            <hr />
            <CRow className="row">
              <CCol sm={{ span: 3 }}>
                <p className="mb-0">Eye Color</p>
              </CCol>
              <CCol sm={{ span: 9 }}>
                <p className="text-muted mb-0">Blue</p>
              </CCol>
            </CRow>
            <hr />
            <CRow className="row">
              <CCol sm={{ span: 3 }}>
                <p className="mb-0">Hair Color</p>
              </CCol>
              <CCol sm={{ span: 9 }}>
                <p className="text-muted mb-0">Blonde</p>
              </CCol>
            </CRow>
            <hr />
            <CRow className="row">
              <CCol sm={{ span: 3 }}>
                <p className="mb-0">Skin Color</p>
              </CCol>
              <CCol sm={{ span: 9 }}>
                <p className="text-muted mb-0">Fair</p>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      )}
      <CRow>
        <CCol lg={{ span: 3 }}>
          <CCard
            className="mb-4 mb-md-0"
            style={{
              height: "17.6rem",
              overflowY: "auto",
            }}
          >
            <CCardBody>
              <p className="mb-4">
                <span className="text-primary font-italic me-1">assigment</span>
                Project Status
              </p>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg={{ span: 3 }}>
          <CCard
            style={{
              height: "17.6rem",
              overflowY: "auto",
            }}
            className="mb-4 mb-md-0"
          >
            <CCardBody>
              <p className="mb-4">
                <span className="text-primary font-italic me-1">assigment</span>
                Project Status
              </p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg={{ span: 3 }}>
          <CCard
            style={{
              height: "17.6rem",
              overflowY: "auto",
            }}
            className="mb-4 mb-md-0"
          >
            <CCardBody>
              <p className="mb-4">
                <span className="text-primary font-italic me-1">assigment</span>
                Project Status
              </p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg={{ span: 3 }}>
          <CCard
            style={{
              height: "17.6rem",
              overflowY: "auto",
            }}
            className="mb-4 mb-md-0"
          >
            <CCardBody>
              <p className="mb-4">
                <span className="text-primary font-italic me-1">assigment</span>
                Project Status
              </p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

// Export the component as the default export of the module
export default UserDetailView;
