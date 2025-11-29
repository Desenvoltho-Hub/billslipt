import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext.jsx";
import { GrupoProvider } from "./contexts/grupoContext.jsx";
import { DespesaProvider } from "./contexts/despesaContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GrupoProvider>
          <DespesaProvider>

            <App />
          </DespesaProvider>
          
        </GrupoProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
