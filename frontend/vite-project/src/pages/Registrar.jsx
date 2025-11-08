import { useState } from "react";
import { useAuth } from "../Auth";
import { useNavigate } from "react-router-dom";

export const Registrar = () => {
  const { error, registro } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasenia, setContrasenia] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await registro(nombre, email, contrasenia);

    if (result.success) {
      alert("Registro exitoso. Inicia sesion");
      setOpen(false);
      navigate("/");
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Registrarse</button>

      <dialog open={open}>
        <article>
          <h2>Crear nueva cuenta</h2>

          <form onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="nombre">Nombre:</label>
              <input
                name="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />

              <label htmlFor="email">Email:</label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="contrasenia">Contraseña:</label>
              <input
                name="contrasenia"
                type="password"
                value={contrasenia}
                onChange={(e) => setContrasenia(e.target.value)}
              />

              {error && <p style={{ color: "red" }}>{error}</p>}
            </fieldset>

            <footer>
              <div className="grid">
                <input
                  type="button"
                  className="secondary"
                  value="Cancelar"
                  onClick={() => setOpen(false)}
                />
                <input type="submit" value="Registrarse" />
              </div>
            </footer>
          </form>
        </article>
      </dialog>
    </>
  );
};
