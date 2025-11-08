import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@picocss/pico";
import "./index.css";
import { Principal } from "./pages/Principal"
import { AuthProvider, AuthPage } from "./Auth";
import { BrowserRouter, Route, Routes } from "react-router";
import { Vehiculos } from "./pages/Vehiculos"
import { Conductores } from "./pages/Conductores"
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
