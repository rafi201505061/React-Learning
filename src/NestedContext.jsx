import { createContext, useState } from "react";

export const NestedContext = createContext();

export const NestedContextProvider = ({ children, initialData = 0 }) => {
  const [state, setState] = useState(initialData);
  return (
    <NestedContext.Provider value={{ state, setState }}>
      {children}
    </NestedContext.Provider>
  );
};
