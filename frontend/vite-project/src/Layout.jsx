import { Outlet, Link } from "react-router";
import { useAuth } from "./Auth";
import { Ingresar } from "./pages/Ingresar";
import { Registrar } from "./pages/Registrar";
import fondo from "../assets/fondo.webp"; 

export const Layout = () => {
  const { isAuthenticated, logout } = useAuth();

  const estiloFondo = {
    backgroundImage: `url(${fondo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  };

  const capaOscura = {
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    position: "absolute",
    inset: 0,
    zIndex: 0,
  };

  const contenido = {
    position: "relative",
    zIndex: 1,
    color: "white",
    padding: "1rem",
  };

  const navEstilo = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
  };

  const listaEstilo = {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    margin: 0,
    padding: 0,
  };

  const linkEstilo = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <div style={estiloFondo}>
      <div style={capaOscura}></div>

      <main style={contenido}>
        <nav style={navEstilo}>
          <ul style={listaEstilo}>
            <li><Link to="/" style={linkEstilo}>Principal</Link></li>
            <li><Link to="/vehiculos" style={linkEstilo}>Vehículos</Link></li>
            <li><Link to="/conductores" style={linkEstilo}>Conductores</Link></li>
            <li><Link to="/viajes" style={linkEstilo}>Viajes</Link></li>
          </ul>

          <div>
            {isAuthenticated ? (
              <button
                onClick={logout}
                style={{
                  backgroundColor: "#c0392b",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Salir
              </button>
            ) : (
              <>
                <Ingresar />
                <span style={{ margin: "0 8px" }}></span>
                <Registrar />
              </>
            )}
          </div>
        </nav>

        <section style={{ marginTop: "1rem" }}>
          <Outlet />
        </section>
      </main>
    </div>
  );
};
