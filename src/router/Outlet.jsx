import { useContext } from "react";
import { RouterContext, RouterContextProvider } from "./RouterContext";
import Renderer from "./Renderer";

const Outlet = () => {
  const { matchRoute, route, processedRoute, setParams } =
    useContext(RouterContext);
  let activeItem = matchRoute();

  return activeItem ? (
    <RouterContextProvider
      routes={Array.isArray(activeItem?.children) ? activeItem?.children : []}
      route={route}
      processedRoute={processedRoute + activeItem.path}
      setParams={setParams}
    >
      <Renderer />
    </RouterContextProvider>
  ) : null;
};

export default Outlet;
