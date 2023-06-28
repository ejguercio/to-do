CREATE DATABASE tasks; //creo una base de datos

CREATE TABLE task ( //crea la tabla donde voy a guardar las tareas
  id serial PRIMARY KEY,
  title VARCHAR(255) NOT NULL UNIQUE,
  description VARCHAR(500) NOT NULL
);
