import { Layout } from "@/modules/core/components/layout/layout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: lazy(() => import("@/modules/home/pages/homePage")),
  },
  {
    path: "app",
    element: <Layout />,
    children: [
      { path: "pokemon", Component: lazy(() => import("@/modules/pokemon/pages/pokemonPage")) },
      { path: "todo", element: <>Todo</> },
    ],
  },
]);

export default router;
