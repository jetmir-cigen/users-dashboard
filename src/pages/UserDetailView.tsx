import { CCol, CContainer, CRow } from "@coreui/react";
import React, { Suspense } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getUserById } from "../api/users/getUserById";
import Loading from "../components/Loading/Loading";

export type MyParams = {
  id: string;
};

const UserDetailView = () => {
  const { id } = useParams<keyof MyParams>() as MyParams;

  const query = useQuery([`user`, id], () => getUserById(id), { refetchOnWindowFocus: false });

  return (
    <CContainer className="p-5" fluid>
      {query.isLoading && <Loading />}
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

export default UserDetailView;
