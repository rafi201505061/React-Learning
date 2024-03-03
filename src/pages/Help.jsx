import { NavLink, Outlet, redirect } from "react-router-dom";

const Help = () => {
  return (
    <div>
      Help
      <p
        onClick={() => {
          redirect("email");
        }}
      >
        email
      </p>
      <NavLink to="phone">phone</NavLink>
      <NavLink to="others">others</NavLink>
      <Outlet />
    </div>
  );
};

export default Help;
