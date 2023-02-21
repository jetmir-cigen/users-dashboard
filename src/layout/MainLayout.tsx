import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import { CContainer } from "@coreui/react";

// Component to render main layout
const MainLayout: React.FC = () => {
  return (
    <div className="d-flex">
      {/* Renders sidebar */}
      <SideBar />
      {/* Renders main container */}
      <div className="wrapper d-flex flex-column min-vh-100 bg-light w-100">
        {/* Renders body container */}
        <div className="body flex-grow-1 px-3">
          {/* Renders content outlet */}
          <CContainer lg className="min-vh-100">
            <Outlet />
          </CContainer>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
