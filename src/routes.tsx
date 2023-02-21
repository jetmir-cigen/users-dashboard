import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

// Import lazy-loaded page components
const UsersList = React.lazy(() => import("./pages/UsersList"));
const UserDetailView = React.lazy(() => import("./pages/UserDetailView"));

// Create the application router
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Set the MainLayout component as the layout for all pages
    children: [
      {
        path: "/",
        element: <UsersList />, // Set the UsersList component as the home page
      },
      {
        path: "/:id",
        element: <UserDetailView />, // Set the UserDetailView component as the detail view page for each user
      },
    ],
  },
]);

export default router;
