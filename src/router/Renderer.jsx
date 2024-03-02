import { useContext } from "react";
import { RouterContext } from "./RouterContext";

const Renderer = () => {
  const { matchRoute, processedRoute } = useContext(RouterContext);
  let activeItem = matchRoute();
  // console.log({ activeItem });
  return activeItem ? (
    activeItem.element
  ) : processedRoute ? null : (
    <div>Not Found</div>
  );
};

export default Renderer;
