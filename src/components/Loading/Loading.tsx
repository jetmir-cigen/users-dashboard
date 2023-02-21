import React from "react";
import { CSpinner } from "@coreui/react";

const Loading: React.FC = () => {
  // Styles for the overlay and spinner
  const loaderStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    maxHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eff0f3",
    opacity: 0.4,
    zIndex: 9999,
  };

  const contentStyle: React.CSSProperties = {
    maxWidth: "100%",
    maxHeight: "100%",
  };

  return (
    // Wrapper for the overlay and spinner
    <div style={contentStyle}>
      <div style={loaderStyle}>
        <CSpinner color="dark" style={{ width: "8rem", height: "8rem" }} />
      </div>
    </div>
  );
};

export default Loading;
