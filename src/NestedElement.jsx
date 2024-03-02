import React, { useContext } from "react";
import { NestedContext, NestedContextProvider } from "./NestedContext";
import NestedNestedElement from "./NestedNestedElement";

const NestedElement = () => {
  const { state, setState } = useContext(NestedContext);
  console.log("value in NestedElement", { state });
  return (
    <NestedContextProvider>
      <div
        onClick={() => {
          setState((prev) => prev + 1);
        }}
      >
        Hello Nested element
      </div>
      <NestedNestedElement />
    </NestedContextProvider>
  );
};

export default NestedElement;
