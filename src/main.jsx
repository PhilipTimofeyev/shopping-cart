import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import Shop from "./components/Shop";
import Cart from './components/Cart'
import Homepage from './components/homepage/Homepage';
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "shop", element: <Shop/> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


