# To-Do List API

Bienvenido a la API de tareas para la To-Do List. Esta API permite a los usuarios crear, leer, actualizar y eliminar tareas. A continuación se presentan los endpoints disponibles. Para más detalles, consulta el archivo `api.http` en la carpeta `requests`.

## Endpoints

### Obtener todas las tareas
- **URL:** `/api/tasks`
- **Método:** `GET`
- **Descripción:** Obtiene una lista de todas las tareas.

### Crear una nueva tarea
- **URL:** `/api/tasks`
- **Método:** `POST`
- **Descripción:** Crea una nueva tarea.
- **Cuerpo de la solicitud:**
  ```json
  {
    "title": "Nombre de la tarea",
    "description": "Descripción de la tarea",
    "priority": "baja" // Valores posibles: baja, media, alta
  }


### Obtener una tarea por id
- **URL:** `/api/tasks/:id`
- **Método:** `GET`
- **Descripción:** `Obtiene los detalles de una tarea específica por su ID.`

### Actualizar una tarea por ID
- **URL:** `/api/tasks/:id`
- **Método:** `PUT`
- **Descripción:** `Actualiza los detalles de una tarea específica por su ID.`
- **Cuerpo de la solicitud:**
    ```json
    {
    "title": "Nuevo nombre de la tarea",
    "description": "Nueva descripción de la tarea",
    "priority": "alta" // Valores posibles: baja, media, alta
    }

### Eliminar una tarea por ID
- **URL:** `/api/tasks/:id`
- **Método:** `DELETE`
- **Descripción** `Elimina una tarea específica por su ID.`

### Actualizar el estado de completado de una tarea por ID
- **URL:** `/api/tasks/:id/completed/`
- **Método** `PATCH`
- **Descripción** `Actualiza el estado de completado de una tarea específica por su ID.`
- **Cuerpo de la solicitud:**
    ```json
    {
    "completed": true // Valores posibles: true, false
    }

### Detalles adicionales
Para más detalles sobre cómo utilizar estos endpoints, consulta el archivo `api.http` en la carpeta requests. Este archivo contiene ejemplos de solicitudes que puedes usar con herramientas como HTTPie o Postman.

### Instalación y Configuración

1. Clona este repositorio:
    ```sh
    git clone https://github.com/coloco0954/api-tasks-backend
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd api-tasks-backend/
    ```

3. Instala las dependencias:
    ```sh
    pnpm install
    ```

4. Inicia el servidor:
    ```sh
    pnpm run start
    ```

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