import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use 'react-dom/client' for React 18
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// ✅ Use createRoot and render only once
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance
reportWebVitals();
