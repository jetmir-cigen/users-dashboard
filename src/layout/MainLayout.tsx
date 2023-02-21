import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import { CContainer } from "@coreui/react";

const MainLayout = () => {
  return (
    <div className="d-flex">
      <SideBar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light w-100">
        <div className="body flex-grow-1 px-3">
          <CContainer lg className="min-vh-100">
            <Outlet />
          </CContainer>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
