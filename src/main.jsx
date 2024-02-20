import * as React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ColorGame from "./components/ColorGame";
import Doable from "./components/Doable";
import Home from "./components/Home";
import ErrorPage from "./components/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/color-game",
        element: <ColorGame />,
      },
      {
        path: "/doable",
        element: <Doable />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
