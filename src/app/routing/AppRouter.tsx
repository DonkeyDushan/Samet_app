import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { ROUTE_PATHS } from "./routePaths";

const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.home,
    element: <HomePage />,
  },
  {
    path: ROUTE_PATHS.notFound,
    element: <NotFoundPage />,
  },
]);

/** Mounts the application router tree. */
export const AppRouter = (): React.ReactElement => (
  <RouterProvider router={router} />
);
