import React, { useContext } from "react";
import { NestedContext } from "./NestedContext";

const NestedNestedElement = () => {
  const { state, setState } = useContext(NestedContext);
  console.log("value in NestedNestedElement", { state });

  return (
    <div
      onClick={() => {
        setState((prev) => prev + 1);
      }}
    >
      NestedNestedElement
    </div>
  );
};

export default NestedNestedElement;
