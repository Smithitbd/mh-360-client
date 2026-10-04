import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/root-layout/RootLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
]);

export default Router;
