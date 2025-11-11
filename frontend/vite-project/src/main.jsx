import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@picocss/pico";
import "./index.css";
import { Principal } from "./pages/Principal"
import { AuthProvider, AuthPage } from "./Auth";
import { BrowserRouter, Route, Routes } from "react-router";
import { Vehiculos } from "./pages/Vehiculos"
import { Conductores } from "./pages/conductores/Conductores.jsx"
import { CrearConductor } from "./pages/conductores/CrearConductor.jsx"
import { DetallesConductor } from "./pages/conductores/DetallesConductor.jsx"
import { ModificarConductor } from "./pages/conductores/ModificarConductor.jsx"

import { Viajes } from "./pages/Viajes"
import { Layout } from "./Layout.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Principal />} />
            <Route

              path="vehiculos"
              element={
                <AuthPage>
                  <Vehiculos />
                </AuthPage>}
            />
            <Route
              path="conductores"
              element={
                <AuthPage>
                  <Conductores />
                </AuthPage>}
            />
            <Route
              path="conductores/crear"
              element={
                <AuthPage>
                  <CrearConductor />
                </AuthPage>
              }
            />
            <Route
              path="conductores/:id"
              element={
                <AuthPage>
                  <DetallesConductor />
                </AuthPage>
              }
            />
            <Route
              path="conductores/modificar/:id"
              element={
                <AuthPage>
                  <ModificarConductor />
                </AuthPage>
              }
            />
            <Route
              path="viajes"
              element={
                <AuthPage>
                  <Viajes />
                </AuthPage>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
