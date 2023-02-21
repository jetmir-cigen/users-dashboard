import React, { useState } from "react";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";

import { cilHome } from "@coreui/icons";


import navigation from '../../_nav'


import CIcon from "@coreui/icons-react";

import { AppSidebarNav } from "../AppSidebarNav/AppSidebarNav";

function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <CSidebar
      visible={true}
      onVisibleChange={(visible) => {
        setIsSidebarOpen(visible);
      }}
      style={{
        minHeight: "100vh",
      }}
    >
      <CSidebarBrand className="d-none d-md-flex">
        <CIcon className="sidebar-brand-full" height={35} icon={cilHome} />
      </CSidebarBrand>
      <CSidebarNav>
          <AppSidebarNav items={navigation} />
      </CSidebarNav>
      
    </CSidebar>
  );
}

export default SideBar;
