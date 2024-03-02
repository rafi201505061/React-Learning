import { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "./BrowserRouter";

const useParams = () => {
  const { route } = useContext(BrowserRouter);
  const [params, setParams] = useState({});
  useEffect(() => {
    const routeName = window.location.pathname;
    const matchedRoute = localStorage.getItem("matchedUrl");
    const routeParts = routeName.split("/");
    const matchedParts = matchedRoute.split("/");
    const params = {};
    matchedParts.forEach((item, index) => {
      if (item.startsWith(":")) {
        params[item.substring(1)] = routeParts[index];
      }
    });
    setParams(params);
  }, [route]);

  return params;
};

export default useParams;
