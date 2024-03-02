import React, { useContext } from "react";
import { BrowserRouter } from "../router/BrowserRouter";
import Outlet from "../router/Outlet";

const About = () => {
  const { changeRoute } = useContext(BrowserRouter);
  return (
    <>
      <h1>What is Lorem Ipsum?</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <p
          onClick={() => {
            changeRoute("/about");
          }}
          style={{ cursor: "pointer" }}
        >
          default
        </p>
        <p
          onClick={() => {
            changeRoute("/about/hello/world");
          }}
          style={{ cursor: "pointer" }}
        >
          hello
        </p>
        <p
          onClick={() => {
            changeRoute("/about/world");
          }}
          style={{ cursor: "pointer" }}
        >
          world
        </p>
        <p
          onClick={() => {
            changeRoute("/about/hello/earth");
          }}
          style={{ cursor: "pointer" }}
        >
          Dynamic 1
        </p>
        <p
          onClick={() => {
            changeRoute("/about/hello/jupiter");
          }}
          style={{ cursor: "pointer" }}
        >
          Dynamic 1
        </p>
      </div>
      <Outlet />
    </>
  );
};

export default About;
