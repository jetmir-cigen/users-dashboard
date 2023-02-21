import React from "react";
import { CCard, CCardBody, CCol, CRow } from "@coreui/react";

import { User } from "../../models";

interface Props {
  user: User;
}

const UserDetails: React.FC<Props> = ({ user }) => {
  return (
    <CCard className="mb-3">
      <CCardBody>
        <CRow className="row">
          <CCol sm={{ span: 3 }}>
            <p className="mb-0">Full Name</p>
          </CCol>
          <CCol sm={{ span: 9 }}>
            <p className="text-muted mb-0">{user.name}</p>
          </CCol>
        </CRow>
        <hr />
        <CRow className="row">
          <CCol sm={{ span: 3 }}>
            <p className="mb-0">Birth Year</p>
          </CCol>
          <CCol sm={{ span: 9 }}>
            <p className="text-muted mb-0">{user.birth_year}</p>
          </CCol>
        </CRow>
        <hr />
        <CRow className="row">
          <CCol sm={{ span: 3 }}>
            <p className="mb-0">Height</p>
          </CCol>
          <CCol sm={{ span: 9 }}>
            <p className="text-muted mb-0">{user.height}</p>
          </CCol>
        </CRow>
        <hr />
        <CRow className="row">
          <CCol sm={{ span: 3 }}>
            <p className="mb-0">Mass</p>
          </CCol>
          <CCol sm={{ span: 9 }}>
            <p className="text-muted mb-0">{user.mass}</p>
          </CCol>
        </CRow>
        <hr />
        <CRow className="row">
          <CCol sm={{ span: 3 }}>
            <p className="mb-0">Gender</p>
          </CCol>
          <CCol sm={{ span: 9 }}>
            <p className="text-muted mb-0">{user.gender}</p>
          </CCol>
        </CRow>
        <hr />
        <CRow className="row">
          <CCol sm={{ span: 3 }}>
            <p className="mb-0">Eye Color</p>
          </CCol>
          <CCol sm={{ span: 9 }}>
            <p className="text-muted mb-0">{user.eye_color}</p>
          </CCol>
        </CRow>
        <hr />
        <CRow className="row">
          <CCol sm={{ span: 3 }}>
            <p className="mb-0">Hair Color</p>
          </CCol>
          <CCol sm={{ span: 9 }}>
            <p className="text-muted mb-0">{user.hair_color}</p>
          </CCol>
        </CRow>
        <hr />
        <CRow className="row">
          <CCol sm={{ span: 3 }}>
            <p className="mb-0">Skin Color</p>
          </CCol>
          <CCol sm={{ span: 9 }}>
            <p className="text-muted mb-0">{user.skin_color}</p>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default UserDetails;
