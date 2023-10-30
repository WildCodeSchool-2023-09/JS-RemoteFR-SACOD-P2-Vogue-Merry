import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import OngletElixir from "./components/OngletElixir";
import Accueil from "./components/Accueil";
import OngletLevel from "./components/OngletLevel";
import Rules from "./components/Rules";
import Jeu from "./components/Jeu";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
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
      {
        path: "difficulty",
        element: <OngletLevel />,
      },
      {
        path: "difficulty/:id",
        element: <Jeu />,
      },
      {
        path: "rules",
        element: <Rules />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
