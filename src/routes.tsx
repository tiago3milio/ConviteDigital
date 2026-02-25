import { createBrowserRouter } from "react-router";
import { Root } from "./root";
import { Home } from "./home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
