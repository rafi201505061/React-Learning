/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-globals */
import { createContext } from "react";
import PropTypes from "prop-types";
import { Route } from "./Route";
export const RouterContext = createContext();
export const RouterContextProvider = ({
  children,
  routes = [],
  route,
  processedRoute,
  setParams,
}) => {
  const matchRoute = () => {
    let activeItem = null;
    let shallowMatch = false;
    const routeParts = route.split("/");
    for (let i = 0; i < routes.length; i++) {
      const item = routes[i];
      let matched = true;
      const currRoute = processedRoute + item.path;
      const currRouteParts = currRoute.split("/");

      if (route === currRoute) {
        matched = true;
        shallowMatch = false;
      } else {
        if (
          item.children.length === 0 &&
          currRouteParts.length !== routeParts.length
        ) {
          matched = false;
        } else {
          currRouteParts.forEach((item, index) => {
            if (item.startsWith(":")) {
              shallowMatch = true;
            } else if (item !== routeParts[index]) {
              matched = false;
            }
          });
        }
      }
      if (matched) {
        activeItem = item;
      }
      if (matched && !shallowMatch) {
        break;
      }
    }
    if (activeItem)
      localStorage.setItem("matchedUrl", processedRoute + activeItem.path);
    return activeItem;
  };
  return (
    <RouterContext.Provider
      value={{
        route,
        routes,
        processedRoute,
        matchRoute,
        setParams,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

RouterContextProvider.propTypes = {
  children: PropTypes.node,
  routes: PropTypes.arrayOf(PropTypes.instanceOf(Route)),
  route: PropTypes.string,
  processedRoute: PropTypes.string,
  setParams: PropTypes.func,
};
