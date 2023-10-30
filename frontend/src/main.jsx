import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import OngletElixir from "./components/OngletElixir";
import Accueil from "./components/Accueil";
import Jeu from "./components/Jeu";
import OngletLevel from "./components/OngletLevel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Jeu />,
      },
      {
        path: "accueil",
        element: <Accueil />,
      },
      {
        path: "level",
        element: <OngletLevel />,
      },
      {
        path: "jeu",
        element: <Jeu />,
      },
      {
        path: "elixir",
        element: <OngletElixir />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
