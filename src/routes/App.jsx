import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Game } from "../pages/Game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/game",
    element: <Game/>
  }
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
