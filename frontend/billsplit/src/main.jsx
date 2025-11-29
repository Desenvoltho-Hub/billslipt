import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext.jsx";
import {  GrupoProvider } from "./contexts/grupoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GrupoProvider >
        <App />
        </GrupoProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
