import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // Remove React.StrictMode to prevent double rendering in dev mode
  // <React.StrictMode> 
  <App />
  // </React.StrictMode>
);
