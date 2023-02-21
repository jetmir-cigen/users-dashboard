import CIcon from "@coreui/icons-react";
import { cilUser } from "@coreui/icons";
import { CNavItem } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Users",
    to: "/",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
];

export default _nav;
