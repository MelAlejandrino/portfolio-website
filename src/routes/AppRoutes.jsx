import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Home";
export const AppRoutes = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
        errorElement: <Home />
      },
    ]);
  
    return <RouterProvider router={router} />;
  };
