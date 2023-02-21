import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";

// Import CSS frameworks for styling
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";

// Import application routes
import router from "./routes";

// Import loading spinner component
import Loading from "./components/Loading/Loading";

// Initialize React Query client
const queryClient = new QueryClient();

// Render the React application
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // Use StrictMode for better error detection
  <React.StrictMode>
    {/* Wrap the entire application with QueryClientProvider to provide access to the React Query client */}
    <QueryClientProvider client={queryClient}>
      {/* Use Suspense and fallback to show a loading spinner while data is being fetched */}
      <Suspense fallback={<Loading />}>
        {/* Use RouterProvider to provide routing functionality */}
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);
