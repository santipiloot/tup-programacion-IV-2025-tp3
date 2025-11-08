import { Outlet, Link } from "react-router";
import { useAuth } from "./Auth";
import { Ingresar } from "./pages/Ingresar";
import { Registrar } from "./pages/Registrar";

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
                        <>
                            <Ingresar />
                            <span style={{ margin: "0 8px" }}></span>
                            <Registrar />
                        </>
                    )}
                </li>
            </nav>
            <Outlet />
        </main>
    );
};