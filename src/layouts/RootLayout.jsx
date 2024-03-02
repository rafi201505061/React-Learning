import React, { useContext } from "react";
import { BrowserRouter } from "../router/BrowserRouter";
import Outlet from "../router/Outlet";

const RootLayout = () => {
  const { changeRoute } = useContext(BrowserRouter);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 8,
        }}
      >
        <p
          onClick={() => {
            changeRoute("/");
          }}
          style={{ cursor: "pointer" }}
        >
          Home
        </p>
        <p
          onClick={() => {
            changeRoute("/about");
          }}
          style={{ cursor: "pointer" }}
        >
          About
        </p>
      </div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
