import type { RouteObject } from "react-router-dom";
import RootLayout, { Err404 } from "./layouts/RootLayout";
import HomePage from "./pages/home";

// Define your routes
const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Err404 />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];

export default routes;
