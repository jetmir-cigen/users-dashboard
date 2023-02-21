import { NavLink } from "react-router-dom";
import { CNavItem, CSidebar, CSidebarBrand, CSidebarNav } from "@coreui/react";
import { cilHome, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

function SideBar() {
  return (
    <CSidebar
      visible={true}
      style={{
        minHeight: "100vh",
      }}
    >
      {/* Sidebar branding */}
      <CSidebarBrand className="d-none d-md-flex">
        <CIcon className="sidebar-brand-full" height={35} icon={cilHome} />
      </CSidebarBrand>

      {/* Sidebar navigation */}
      <CSidebarNav>
        {/* Users link */}
        <CNavItem component={NavLink} to="/">
          <CIcon icon={cilUser} customClassName="nav-icon" />
          Users
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
}

export default SideBar;
