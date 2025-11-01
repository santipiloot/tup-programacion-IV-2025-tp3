-- Se crea la tabla de datos
CREATE DATABASE db-tp3;

-- Tabla de usuarios
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL UNIQUE,
  password_hash VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla de conductores
CREATE TABLE conductores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(45) NOT NULL,
  apellido VARCHAR(45) NOT NULL,
  dni VARCHAR(15) NOT NULL UNIQUE,
  licencia VARCHAR(20),
  fecha_vencimiento_licencia DATE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla de vehiculos
CREATE TABLE vehiculos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  marca VARCHAR(45) NOT NULL,
  modelo VARCHAR(45) NOT NULL,
  patente VARCHAR(10) NOT NULL,
  anio INT NOT NULL,
  capacidad_carga DECIMAL(10,2) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla de viajes
CREATE TABLE viajes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  vehiculo_id INT NOT NULL,
  conductor_id INT NOT NULL,
  fecha_salida DATE NOT NULL,
  fecha_llegada DATE DEFAULT NULL,
  origen VARCHAR(45) NOT NULL,
  destino VARCHAR(45) NOT NULL,
  kilometros DECIMAL(10,2) NOT NULL,
  observaciones TEXT DEFAULT NULL,
  FOREIGN KEY (conductor_id) REFERENCES conductores(id)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  FOREIGN KEY (vehiculo_id) REFERENCES vehiculos(id)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;