/* eslint-disable no-restricted-globals */
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { RouterContextProvider } from "./RouterContext";
import Renderer from "./Renderer";

export const BrowserRouter = createContext();
export const BrowserRouterProvider = ({ routes = [] }) => {
  const [params, setParams] = useState({});
  const [route, setRoute] = useState(
    window.location.pathname.endsWith("/")
      ? window.location.pathname.substring(
          0,
          window.location.pathname.length - 1
        )
      : window.location.pathname
  );
  useEffect(() => {
    const syncRoute = (e) => {
      changeRoute(window.location.pathname);
    };
    window.addEventListener("popstate", syncRoute);
    return () => {
      window.removeEventListener("popstate", syncRoute);
    };
  }, []);

  const changeRoute = useCallback((url) => {
    history.pushState({}, "", url);
    if (url.endsWith("/")) {
      setRoute(url.substring(0, url.length - 1));
    } else {
      setRoute(url);
    }
  }, []);

  const sortByRouteLength = (ara) => {
    ara.forEach((item) => {
      if (item.path === "/") {
        item.path = "";
      } else if (item.path !== "" && !item.path.startsWith("/")) {
        item.path = "/" + item.path;
      }
    });
    ara.sort((a, b) => b.path.length - a.path.length);
    ara.forEach((item) => {
      sortByRouteLength(item.children);
    });
    return ara;
  };
  const sortedRoutes = useMemo(() => {
    return sortByRouteLength(routes);
  }, []);
  return (
    <BrowserRouter.Provider
      value={{
        route,
        changeRoute,
        navigate: changeRoute,
        params,
      }}
    >
      <RouterContextProvider
        routes={sortedRoutes}
        route={route}
        processedRoute={""}
        setParams={setParams}
      >
        <Renderer />
      </RouterContextProvider>
    </BrowserRouter.Provider>
  );
};
