import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const NestedContext = createContext();

export const NestedContextProvider = ({ children, initialData = 0 }) => {
  const [state, setState] = useState(initialData);
  return (
    <NestedContext.Provider value={{ state, setState }}>
      {children}
    </NestedContext.Provider>
  );
};

NestedContextProvider.propTypes = {
  children: PropTypes.node,
  initialData: PropTypes.number,
};
