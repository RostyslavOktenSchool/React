import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routesConfig";

const router = createBrowserRouter(routes);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
