import { Outlet, Link } from "react-router";
import { useAuth } from "./Auth";
import { Ingresar } from "./pages/Ingresar";

export const Layout = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <main className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Principal</Link>
          </li>
          <li>
            <Link to="/vehiculos">Vehiculos</Link>
          </li>
          <li>
            <Link to="/conductores">Conductores</Link>
          </li>
          <li>
            <Link to="/viajes">Viajes</Link>
          </li>
        </ul>
        <li>
          {isAuthenticated ? (
            <button onClick={() => logout()}>Salir</button>
          ) : (
            <Ingresar />
          )}
        </li>
      </nav>
      <Outlet />
    </main>
  );
};