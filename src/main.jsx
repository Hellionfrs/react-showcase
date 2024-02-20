import * as React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ColorGame from "./components/ColorGame";
import Doable from "./components/Doable";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
