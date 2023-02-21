import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

//Pages
const UsersList = React.lazy(() => import("./pages/UsersList"));
const UserDetailView = React.lazy(() => import("./pages/UserDetailView"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <UsersList />,
      },
      {
        path: "/:id",
        element: <UserDetailView />,
      },
    ],
  },
]);

export default router;
