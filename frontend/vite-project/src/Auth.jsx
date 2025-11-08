import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext(null);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);
    const [error, setError] = useState(null);

    const login = async (email, contrasenia) => {
        setError(null);
        try {
            const response = await fetch("http://localhost:3000/usuarios/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, contrasenia }),
            });

            const session = await response.json();

            if (!response.ok) {
                throw new Error(session.error);
            }

            setToken(session.token);
            setEmail(session.email);

            return { success: true };

        } catch (err) {
            setError(err.message);
            return { success: false };
        }
    };

    const registro = async (nombre, email, contrasenia) => {
        setError(null);
        try {
            const response = await fetch("http://localhost:3000/usuarios/registro", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre, email, contrasenia }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error);
            }

            return { success: true, message: "Registro correcto"};
        } catch (err) {
            setError(err.message);
            return { success: false };
        }
    };

    const logout = () => {
        setToken(null);
        setEmail(null);
        setError(null);
    };

    const fetchAuth = async (url, options = {}) => {
        if (!token) {
            throw new Error("No esta iniciada la session");
        }

        return fetch(url, {
            ...options,
            headers: { ...options.headers, Authorization: `Bearer ${token}` },
        });
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                email,
                error,
                isAuthenticated: !!token,
                login,
                logout,
                registro,
                fetchAuth,
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export const AuthPage = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <h2>Ingrese para ver esta pagina</h2>;
    }

    return children;
};
