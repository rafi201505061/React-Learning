import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import AboutDetails from "./pages/AboutDetails";
import Hello from "./pages/Hello";
import Home from "./pages/Home";
import World from "./pages/World";
import { BrowserRouterProvider } from "./router/BrowserRouter";
import { Route } from "./router/Route";
import VariablePath from "./router/VariablePath";

function App() {
  const routes = [
    new Route({
      path: "/",
      element: <RootLayout />,
      children: [
        new Route({ path: "", element: <Home /> }),
        new Route({
          path: "about",
          element: <About />,
          children: [
            new Route({ path: "", element: <AboutDetails /> }),
            new Route({ path: "/hello/world", element: <Hello /> }),
            new Route({ path: "/world", element: <World /> }),
            new Route({ path: "/hello/:id", element: <VariablePath /> }),
          ],
        }),
      ],
    }),
    new Route({ path: "/other", element: <AboutDetails /> }),
  ];
  return <BrowserRouterProvider routes={routes} />;
}

export default App;
