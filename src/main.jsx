import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import Shop from "./components/Shop";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      { path: "shop", element: <Shop/> },
    ],
  },
  {
    path: "hmm",
    element: <Shop/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


