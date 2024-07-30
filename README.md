# Proyecto Lista de Tareas

Esta es una aplicación sencilla de lista de tareas construida utilizando React para el frontend y Node.js para el backend. La lista de tareas permite a los usuarios agregar, ver, actualizar y eliminar tareas.

## Tabla de Contenidos
- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Tecnologías](#tecnologías)
- [Contribuyendo](#contribuyendo)

## Características

- Agregar nuevas tareas con descripción y estado.
- Ver una lista de todas las tareas.
- Eliminar tareas de la lista.
- **Actualizar el estado de las tareas:** Para actualizar una tarea, haz click en el icono de editar junto a la tarea y rellena el formulario

## Requisitos Previos

Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:

- Tener Node.js y pnpm instalados en tu máquina.
- Tener MongoDB instalado y en funcionamiento.

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/todo-list-con-react-y-nodejs
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd todo-list
    ```

3. Instala las dependencias del backend:
    ```sh
    cd backend
    pnpm install
    ```

4. Instala las dependencias del frontend:
    ```sh
    cd ../frontend
    pnpm install
    ```

## Uso

### Ejecutar el Servidor Backend

1. Navega al directorio del backend:
    ```sh
    cd backend
    ```

2. Crea un archivo `.env` y añade tu cadena de conexión de MongoDB:
    ```env
    MONGODB_URI=tu_cadena_de_conexión_de_mongodb
    ```

3. Inicia el servidor backend:
    ```sh
    pnpm run dev
    ```

   El servidor backend se ejecutará en `http://localhost:3001`.

### Ejecutar la Aplicación Frontend

1. Navega al directorio del frontend:
    ```sh
    cd ../frontend
    ```

2. Inicia el servidor de desarrollo de React:
    ```sh
    pnpm run dev
    ```

   La aplicación frontend se ejecutará en `http://localhost:5173`.

## Tecnologías

- Frontend: React, TailwindCSS
- Backend: Node.js, Express, Mongoose
- Base de Datos: MongoDB

## Endpoints de la API

Para revisar los endpoints de la API, consulta el archivo en la carpeta `backend/requests/api.http`.

## Contribuyendo

¡Las contribuciones son siempre bienvenidas! Por favor, sigue estos pasos para contribuir:

1. Haz un fork del repositorio.
2. Crea tu rama de característica:
    ```sh
    git checkout -b feature/TuCaracteristica
    ```
3. Realiza tus cambios y haz un commit:
    ```sh
    git commit -m 'Agrega una característica'
    ```
4. Empuja a la rama:
    ```sh
    git push origin feature/TuCaracteristica
    ```
5. Abre un pull request.
