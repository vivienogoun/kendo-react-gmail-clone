import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "@progress/kendo-theme-material/dist/all.css";
import Home from "./Home.tsx";
import Grid from "./grid/Grid.tsx";
import "./index.css";
import Mail from "./Mail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mail />,
  },
  {
    path: "/welcome",
    element: <Home />,
  },
  {
    path: "/grid/",
    element: <Grid />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
