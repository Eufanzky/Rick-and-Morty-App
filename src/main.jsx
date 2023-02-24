import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RickAppContextProvider } from "./context/RickAppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RickAppContextProvider>
      <App />
    </RickAppContextProvider>
  </React.StrictMode>
);
