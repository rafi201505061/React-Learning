import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/help"}>Help</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
