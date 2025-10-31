Almuno: Pilot Santino Exequiel 


Requerimientos generales
Frontend:
◦ Framework: Vite + React (JavaScript).
◦ Formulario de inicio de sesión y registro de usuario.
◦ Comunicación con el backend mediante fetch consumiendo una API REST JSON.
◦ Validaciones en el frontend (campos obligatorios, formato de datos, etc.).

Backend:
◦ Framework: Express.js.
◦ Base de datos: MySQL (con conexión mediante mysql2).
◦ Validaciones de datos con express-validator en todas las rutas de obtención, creación y
actualización.
◦ Manejo de errores con respuestas HTTP adecuadas (400, 401, 403, 404, 500).
◦ Incluir archivos ‘http’ para prueba de la API.
◦ Incluir archivo sql con las definiciones de las tablas.

Autenticación y autorización:
◦ Registro e inicio de sesión de usuarios.
◦ Autenticación mediante JWT (JSON Web Tokens).
◦ Middleware de Passport para verificar el token y restringir acceso a rutas protegidas.
◦ Solo los usuarios autenticados pueden acceder a las operaciones CRUD.

Seguridad:
◦ Las contraseñas deben almacenarse encriptadas con bcrypt.
◦ No deben enviarse contraseñas en texto plano.
◦ Los tokens JWT deben expirar a las 4 horas.




Ejercicio C – Gestión de vehículos, conductores y viajes
Desarrollar una aplicación que permita registrar los vehículos de una empresa de transporte, sus
conductores y los viajes realizados. 
A parte de los requisitos generales el ejercicio debe cumplir lo
siguiente:

Frontend:
▪ Pantalla principal con paginas de:
 - Listado de vehículos.
 - Listado de conductores.
 - Carga y visualización de viajes por vehículos y conductores.
▪ Formularios para alta, modificación y eliminación de vehículos y conductores.
▪ Registro de viajes, asociando un vehículo y un conductor.
▪ Consulta de historial de viajes por vehículo o por conductor.
▪ Cálculo total de kilómetros recorridos por conductor o vehículo.

Backend:
▪ Estructura de entidades:
▪ Usuario: id, nombre, email, contraseña (encriptada con bcrypt).
▪ Vehículo: id, marca, modelo, patente, año, capacidad de carga.
▪ Conductor: id, nombre, apellido, DNI, licencia, fecha de vencimiento de licencia.
▪ Viaje: id, vehiculo_id, conductor_id, fecha_salida, fecha_llegada, origen, destino,
kilómetros, observaciones.




